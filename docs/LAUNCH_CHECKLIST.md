# Launch Checklist

Ordered checklist to put **hnmproservices.com** live on the existing DigitalOcean droplet (Nginx), deploy via GitHub Actions, and deliver Contact / Consultation form emails through **Formspree** to `holly@hnmproservices.com`.

## Goals (done when all true)

- [ ] `https://hnmproservices.com` serves this site
- [ ] `https://www.hnmproservices.com` redirects to the apex URL
- [ ] Push to GitHub builds and deploys; the live site updates
- [ ] Contact and Consultation forms send emails to Holly’s existing Outlook inbox, while staying on our own UI

## Locked decisions

| Topic | Decision |
| --- | --- |
| Canonical domain | `https://hnmproservices.com` (apex) |
| www | 301 redirect to apex |
| DNS host | Stay on **GoDaddy** (`ns35/36.domaincontrol.com`) — do **not** move nameservers to DigitalOcean |
| Mailbox | Keep **Microsoft 365 / Outlook** as-is (`holly@hnmproservices.com`) |
| Hosting | Existing DO droplet, Ubuntu 22.04, Nginx server blocks (alongside other sites) |
| Site architecture | Next.js static export → `out/` → Nginx (no Node app server) |
| Forms | **Formspree** via AJAX (`fetch` + JSON). No custom backend or email relay |

## Forms architecture (Formspree + own UI)

This project uses `output: "export"`. Forms already post JSON to public endpoints (`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, `NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT`) and render success/error in-app. See `src/content/forms.js`, `GeneralContactForm.js`, and `ConsultationForm.js`.

**Use Formspree’s AJAX / JSON API**, not a classic HTML form `action` submit. A normal browser POST redirects to Formspree’s thank-you page; `fetch` with `Accept: application/json` keeps the visitor on our site and uses our own success/error UI.

No droplet API, no Resend, no SPF changes for a third-party sender domain — Formspree emails Holly; her Outlook mailbox stays unchanged.

---

## 0. Prerequisites

- [ ] Droplet IP noted (IPv4; IPv6 optional)
- [ ] SSH access to the droplet as a user that can manage Nginx and the web root
- [ ] GitHub repo admin access (Actions secrets / variables)
- [ ] Formspree account ready (free or paid tier as needed)
- [ ] Confirm Holly can still use Outlook for normal mail during and after cutover (web DNS only)

---

## 1. Droplet + Nginx (before public DNS change)

Reuse patterns from your other sites on this droplet.

- [ ] Create web root, e.g. `/var/www/hnmproservices.com/html` (owned by deploy user)
- [ ] Nginx server block for `hnmproservices.com`
  - `root` → web root
  - Static export with `trailingSlash: true`: directories like `services/index.html`
  - `try_files` suitable for static `out/` (serve `$uri`, `$uri/`, then `index.html` under directories)
- [ ] Nginx server block for `www.hnmproservices.com` → **301** to `https://hnmproservices.com$request_uri`
- [ ] HTTP → HTTPS redirect (after certs, or prepare blocks for Certbot)
- [ ] `nginx -t` and reload
- [ ] Optional: test via `/etc/hosts` pointing apex (and www) at the droplet before changing GoDaddy

---

## 2. GoDaddy DNS — web only (protect mail)

Current mail-related records to **leave alone**:

- MX → `hnmproservices-com.mail.protection.outlook.com`
- Microsoft CNAMEs (`autodiscover`, `lyncdiscover`, `msoid`, `sip`, DKIM `selector1` / `selector2`, etc.)
- SRV (`_sip._tls`, `_sipfederationtls._tcp`)
- TXT `NETORGFT20955019.onmicrosoft.com`
- TXT `_dmarc` (leave for now)
- Apex SPF (`v=spf1 include:secureserver.net -all`) — leave alone for Formspree; no Resend/SPF surgery required
- NS records (stay on GoDaddy)

### Change for the website

- [ ] Edit apex `A` (`@`): remove **WebsiteBuilder Site**; set to the droplet IPv4
- [ ] Leave `www` CNAME → `hnmproservices.com` as-is
- [ ] Optional: add apex `AAAA` if using IPv6 on the droplet
- [ ] Do **not** change nameservers to DigitalOcean
- [ ] Wait for propagation (TTL is 1 hour; often faster)
- [ ] Verify: `dig +short hnmproservices.com A` returns the droplet IP
- [ ] Verify: `dig MX hnmproservices.com` still shows Outlook protection

---

## 3. TLS

- [ ] Certbot for `hnmproservices.com` and `www.hnmproservices.com`
- [ ] Confirm auto-renewal works on this droplet (same as other sites)
- [ ] Confirm HTTPS on apex; www redirects to apex over HTTPS

---

## 4. Mail sanity check after DNS cutover

- [ ] Send a test message **to** `holly@hnmproservices.com` — arrives in Outlook
- [ ] Holly can still **send** from Outlook
- [ ] If anything breaks, revert only the apex `A` record; mail records were not changed

---

## 5. Repo prep for production URLs

- [ ] Set `business.siteUrl` in `src/content/business.js` to `https://hnmproservices.com` (replaces `https://www.example.com`)
- [ ] Confirm metadata, sitemap, and robots pick up the real host (`src/utils/metadata.js`, `src/app/robots.js`, layout `metadataBase`)
- [ ] Update privacy provider fields in `src/content/privacy.js` once Formspree is configured (`formProviderName`, Formspree privacy URL, `lastUpdated`) — **done for Formspree, DigitalOcean, Microsoft, GoDaddy, and Google**
- [ ] Plan to remove form “not connected yet” inactive notices once endpoints are live

---

## 6. First manual deploy (prove hosting)

- [ ] Locally: `npm ci && npm run build` (Node 24 per `.nvmrc`)
- [ ] Rsync/scp contents of `out/` to the web root
- [ ] Spot-check `/`, `/services/`, `/about/`, `/reviews/`, `/consultation/`, `/contact/`, `/privacy/`
- [ ] Confirm trailing-slash routes and a sensible 404

---

## 7. GitHub Actions deploy-on-push

Workflow file: [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) (push to `main` + `workflow_dispatch`).

- [ ] Create a dedicated deploy SSH key; install the public key on the droplet (`authorized_keys` for the deploy user)
- [ ] Add GitHub secrets:
  - `SSH_PRIVATE_KEY`, `HOST`, `USERNAME`, `DEPLOY_PATH` (use `/var/www/hnmproservices.com/html`)
  - Optional until Formspree is ready: `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, `NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT`
- [ ] Push to `main` (or run the workflow manually); confirm Actions succeeds and the live site updates
- [ ] Confirm weekly Google reviews sync → commit → deploy still works end-to-end

---

## 8. Formspree setup

### 8.1 Create forms

- [ ] Create a Formspree account
- [ ] Create **Contact** form → notifications to `holly@hnmproservices.com`
- [ ] Create **Consultation** form → notifications to `holly@hnmproservices.com`
- [ ] Copy each form’s endpoint (e.g. `https://formspree.io/f/xxxxxxxx`)
- [ ] Confirm Formspree is set to accept submissions from `https://hnmproservices.com` (and www if needed during transition)

### 8.2 Match existing payloads

Forms already JSON-POST fields such as:

- Contact: `Full Name`, `Email Address`, `Phone`, `Inquiry Type`, `Message`, `_replyto`, `_subject`
- Consultation: `Full Name`, `Email Address`, `Phone`, `Service Needed`, `Service Location or Zip Code`, `Preferred Consultation Timeframe`, `When Service May Be Needed`, `Needs / Details`, `How They Heard About HNM`, `_replyto`, `_subject`

- [ ] In Formspree, confirm custom fields are allowed (or map/rename if the plan requires fixed field names)
- [ ] Use `_subject` (already sent) so Outlook subjects stay useful (`HNM contact: …`, `HNM consultation: …`)
- [ ] Prefer Reply-To / “reply to submitter” behavior so Holly can reply from Outlook to the visitor

### 8.3 Spam and limits

- [ ] Enable Formspree spam protection appropriate to the plan (reCAPTCHA / built-in filters as available)
- [ ] Note monthly submission limits on the chosen plan
- [ ] Optional: Formspree honeypot field later if spam appears (would need a small form-field addition in the app)

### 8.4 AJAX only (keep our UI)

Do **not** point a native `<form action="https://formspree.io/...">` submit at Formspree for production — that navigates away.

- [ ] Keep current `fetch` + `Accept: application/json` + `Content-Type: application/json` flow
- [ ] Confirm success stays on-page with our success message / state
- [ ] Confirm failures show our error alert (`response.ok` check)

---

## 9. Wire forms in the app

- [ ] Set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` and `NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT` in CI (and local `.env` for testing) to the Formspree URLs
- [ ] Confirm `isFormSubmissionEnabled` passes (HTTPS endpoints) — see `src/content/forms.js`
- [ ] Redeploy so the static build embeds the endpoints
- [ ] Update privacy copy: Formspree as form provider + privacy policy link + `lastUpdated`
- [ ] Remove or replace inactive-form notices in contact/consultation content

---

## 10. Final acceptance

### Live site

- [ ] `https://hnmproservices.com` loads the marketing site
- [ ] `https://www.hnmproservices.com` → apex
- [ ] HTTP → HTTPS
- [ ] Key pages on desktop and mobile
- [ ] Phone and `mailto:holly@hnmproservices.com` work
- [ ] View-source / SEO: canonical and `metadataBase` use `hnmproservices.com`, not `example.com`

### Deploy pipeline

- [ ] Push to `main` → Actions green → files on droplet update
- [ ] Hard refresh confirms new content
- [ ] Reviews sync workflow still leads to a live update after its commit

### Forms + Formspree

- [ ] Contact submit → stay on our UI with success state → email in Holly’s Outlook
- [ ] Consultation submit → stay on our UI → email with all fields
- [ ] No redirect to a Formspree thank-you page
- [ ] Reply from Outlook reaches the visitor when Reply-To is configured
- [ ] Invalid/disabled endpoint or Formspree error → our error alert (not a false success)
- [ ] Spot-check spam folder once; adjust Formspree filters if needed

### Mailbox unchanged

- [ ] Normal inbound/outbound Outlook mail for Holly still works
- [ ] No requirement for Holly to change how she uses email day to day

---

## Suggested work order (single pass)

1. Nginx + web root on droplet  
2. GoDaddy apex `A` → droplet (mail records untouched)  
3. Certbot + HTTPS / www redirect  
4. Mail sanity check  
5. Manual `out/` deploy + set `siteUrl`  
6. GitHub Actions deploy workflow  
7. Create Formspree Contact + Consultation forms  
8. Form env vars + privacy updates + redeploy  
9. Full acceptance tests  

---

## Related docs

- [ARCHITECTURE.md](./ARCHITECTURE.md) — static export, Nginx, form-provider model  
- [DECISIONS.md](./DECISIONS.md) — ADR-003 (static export), ADR-007 (hosted forms), ADR-009 (trailing slashes)  
- [GOOGLE_REVIEWS.md](./GOOGLE_REVIEWS.md) — weekly sync pairs with deploy-on-push  
- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) — business goals and CTA language  

## Repo gaps this checklist closes

- Deploy GitHub Action not created yet  
- `business.siteUrl` still placeholder  
- Form endpoints empty until Formspree URLs are set  
- Privacy provider fields empty until Formspree is named  
