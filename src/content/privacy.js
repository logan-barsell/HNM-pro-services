import { business } from "@/content/business";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";

/**
 * Privacy Notice content for the public marketing site.
 *
 * Operational notice based on known website behavior — not attorney-reviewed
 * legal advice unless the client obtains legal review.
 *
 * Do not invent providers, retention periods, or compliance claims.
 */

export const privacyPolicy = {
  lastUpdated: "2026-08-04",
  formProviderName: "Formspree",
  formProviderPrivacyUrl: "https://formspree.io/legal/privacy-policy/",
  hostingProviderName: "DigitalOcean",
  hostingProviderPrivacyUrl:
    "https://www.digitalocean.com/legal/privacy-policy",
  emailProviderName: "Microsoft",
  emailProviderPrivacyUrl: "https://privacy.microsoft.com/privacystatement",
  domainProviderName: "GoDaddy",
  domainProviderPrivacyUrl:
    "https://www.godaddy.com/legal/agreements/privacy-policy",
  reviewsProviderName: "Google",
  reviewsProviderPrivacyUrl: "https://policies.google.com/privacy",
  analyticsEnabled: false,
  advertisingCookiesEnabled: false,
};

export const privacyHero = {
  eyebrow: "Privacy",
  heading: "Privacy Notice",
  supporting:
    "This notice explains what information HNM Professional Services may collect through this website, why it is collected, and how you can reach Holly with questions or requests.",
  primaryCta: {
    label: "Get in Touch",
    href: routes.contact,
  },
  secondaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
};

export const privacySummary = {
  title: "Privacy at a glance",
  body: "HNM Professional Services collects only the information reasonably needed to respond to inquiries, review consultation requests, and communicate with clients or prospective clients. The website should not be used to submit medical records, financial information, passwords, security codes, or detailed home-access information.",
  bullets: [
    "Information is primarily collected through the Contact and Consultation forms.",
    "Submitted information is used to respond to your request.",
    "Form submissions are processed by Formspree and delivered to HNM’s business email.",
    "The website is hosted on DigitalOcean; the domain is registered with GoDaddy.",
    "HNM does not intentionally sell personal information.",
    "You may contact HNM to ask about correcting or deleting information you submitted.",
  ],
};

export const privacyToc = [
  { id: "information-collected", label: "Information collected" },
  { id: "how-collected", label: "How information is collected" },
  { id: "how-used", label: "How information is used" },
  { id: "service-providers", label: "Service providers" },
  { id: "cookies-analytics", label: "Cookies and analytics" },
  { id: "information-sharing", label: "When information may be shared" },
  { id: "retention", label: "Retention" },
  { id: "security", label: "Security" },
  { id: "your-choices", label: "Your choices" },
  { id: "childrens-privacy", label: "Children’s privacy" },
  { id: "external-links", label: "External links" },
  { id: "changes", label: "Changes" },
  { id: "privacy-contact", label: "Contact" },
];

export const privacySections = {
  informationCollected: {
    id: "information-collected",
    title: "Information we may collect",
    intro:
      "HNM may collect the types of information listed below when a visitor uses the website forms. Only fields that exist on the site’s Contact and Consultation forms are described here.",
    sensitiveReminderTitle: "Please note",
    sensitiveReminder:
      "Please do not submit highly sensitive personal, medical, financial, security, or property-access information through the website forms.",
    categories: [
      {
        title: "Contact information",
        items: ["Full name", "Email address", "Phone number (optional)"],
      },
      {
        title: "Consultation information",
        items: [
          "Service requested",
          "General location or ZIP code",
          "Preferred consultation timeframe",
          "Approximate service timeframe",
          "General description of requested support",
          "Referral source (optional)",
        ],
      },
      {
        title: "General inquiry information",
        items: ["Inquiry category", "Message content"],
      },
    ],
    technicalNote:
      "The website does not operate its own analytics or advertising tools. Formspree, DigitalOcean, Microsoft, and other providers listed in this notice may collect limited technical details needed to deliver their services (such as approximate submission time, IP-related security signals, or basic server logs). Those details depend on each provider’s documented practices.",
  },
  howCollected: {
    id: "how-collected",
    title: "How information is collected",
    paragraphs: [
      "Information may be collected when visitors submit the Contact form or the Consultation request form on this website. Those forms send submissions to Formspree, which emails them to HNM.",
      "Information may also be collected when a visitor emails or calls HNM directly, or shares details during follow-up communication about an inquiry.",
      "Limited technical information may be generated automatically by hosting, form-processing, email, or domain services used to operate the website.",
    ],
  },
  howUsed: {
    id: "how-used",
    title: "How information is used",
    intro: "Submitted information may be used to:",
    items: [
      "Respond to general inquiries",
      "Review consultation requests",
      "Determine whether a location may be within the current service regions",
      "Discuss service needs, timing, and expectations",
      "Communicate with prospective or existing clients about the inquiry",
      "Maintain records of business communications",
      "Help prevent spam, abuse, or fraudulent submissions",
    ],
    marketingNote:
      "Submitting a Contact or Consultation form is treated as a request for HNM to respond about that inquiry. Form submissions are not treated as signup for newsletters or promotional campaigns.",
  },
  serviceProviders: {
    id: "service-providers",
    title: "Third-party service providers",
    neutralBody:
      "HNM uses third-party service providers to host the website, process form submissions, deliver and receive email, register the domain, and display public Google reviews as static content. These providers may process information only as necessary to provide their services.",
    categoriesLabel: "Current providers include:",
    categories: [
      "Formspree — hosted form submission and notification email delivery",
      "Microsoft — business email for holly@hnmproservices.com (Microsoft 365 / Outlook)",
      "DigitalOcean — website hosting (static site served with Nginx on a DigitalOcean droplet)",
      "GoDaddy — domain registration and DNS",
      "Google — scheduled sync of public Google Place reviews into static website content (no live review widget in the visitor’s browser)",
      "Security or spam-prevention features offered by those services, when enabled",
    ],
    namedProvidersIntro: "Privacy notices for current providers:",
    pendingNote:
      "Additional provider names and privacy-policy links will be listed here if new services are added.",
  },
  cookies: {
    id: "cookies-analytics",
    title: "Cookies and website analytics",
    body: "The website does not use advertising cookies or behavioral advertising tools. Hosting, form-processing, or email providers may still use essential technologies or server logs needed to operate, secure, and deliver their services.",
    noAbsoluteClaim:
      "This notice does not claim that the website uses no cookies in every technical sense, because essential hosting or form-provider technologies may still be involved.",
    updateNote:
      "Public Google reviews shown on this site are copied into the website during a scheduled sync and served as static content. The public site does not load a live Google reviews widget in the visitor’s browser. If analytics, advertising tools, embedded maps, video players, review widgets, or scheduling tools are added later, this section will be updated before those features go live.",
  },
  sharing: {
    id: "information-sharing",
    title: "When information may be shared",
    intro: "Information may be shared:",
    items: [
      "With service providers that help operate the website or process communications",
      "When reasonably necessary to respond to the visitor’s request",
      "When required by law, legal process, or a valid government request",
      "When reasonably necessary to protect the safety, rights, or property of HNM or others",
      "In connection with a business transfer, if applicable",
    ],
    sellStatement:
      "HNM Professional Services does not intentionally sell personal information.",
    neverClaimNote:
      "HNM does not claim that information is never disclosed in every circumstance.",
  },
  retention: {
    id: "retention",
    title: "How long information is retained",
    body: "HNM retains submitted information only for as long as reasonably needed to respond to inquiries, manage client communications, maintain appropriate business records, meet legal obligations, or resolve disputes. Information that is no longer reasonably needed may be deleted or securely disposed of.",
    providerNote:
      "Formspree, Microsoft, and other providers may retain submissions or message copies according to their own settings, retention rules, and backups. Immediate deletion from all backups or logs cannot be guaranteed.",
  },
  security: {
    id: "security",
    title: "How information is protected",
    body: "HNM uses reasonable administrative and technical measures appropriate to the size and nature of the business to help protect information submitted through the website. However, no method of online transmission or electronic storage can be guaranteed to be completely secure.",
    practicesIntro: "Protective practices may include:",
    practices: [
      "HTTPS encryption for the live website",
      "Collecting only the information needed to respond to an inquiry",
      "Restricting access to submitted information to people who need it for business purposes",
      "Using provider account security features when available",
      "Spam-prevention measures on forms where configured",
    ],
  },
  choices: {
    id: "your-choices",
    title: "Your choices and requests",
    intro: "Visitors may contact HNM to:",
    items: [
      "Ask about information they submitted through the website",
      "Correct inaccurate contact information",
      "Request deletion of information they submitted",
      "Ask to stop further communication about an inquiry",
    ],
    responseNote:
      "HNM will review and respond to reasonable requests subject to applicable legal, operational, recordkeeping, and security requirements. Not every deletion request can always be completed immediately from every system or backup.",
  },
  children: {
    id: "childrens-privacy",
    title: "Children’s privacy",
    body: "This website is intended for adults seeking information about HNM Professional Services. HNM does not knowingly use the website to collect personal information directly from children under 13. If HNM learns that information was submitted directly by a child, a parent or guardian may contact HNM to request review or deletion.",
  },
  externalLinks: {
    id: "external-links",
    title: "Links to other websites",
    body: "This website may link to third-party sites such as Google review pages, Formspree documentation, or other external resources when those links are published. HNM is not responsible for the privacy practices or content of third-party websites. Visitors should review the privacy notices of those services before providing information.",
  },
  changes: {
    id: "changes",
    title: "Changes to this Privacy Notice",
    body: "HNM may update this notice when website features, service providers, or information practices change. The updated version will be posted on this page with a revised “Last updated” date.",
  },
};

export const privacyContact = {
  id: "privacy-contact",
  title: "Privacy questions or requests",
  body: "To ask a privacy question or request access, correction, or deletion of information submitted through the website, contact Holly using the information below or through the Contact page.",
  phoneActionLabel: "Call Holly",
  emailActionLabel: "Email Holly",
  contactPageLabel: "Go to the Contact page",
  contactHref: routes.contact,
  phoneUnavailable:
    "A public phone number will be added once the business finalizes it.",
  emailUnavailable:
    "A public email address will be added once the business finalizes it.",
};

export const privacyFinalCta = {
  title: "Questions about this notice?",
  body: "Reach out anytime—Holly is happy to help with privacy questions or ordinary service inquiries.",
  primaryCta: {
    label: "Contact HNM",
    href: routes.contact,
  },
  secondaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
};

export const privacyLastUpdatedCopy = {
  label: "Last updated",
  pending:
    "A final last-updated date will be published when this notice is approved for launch.",
};

export const privacySeoDescription = pageSeo[routes.privacy].description;

export const privacyBusiness = {
  phone: business.phone,
  email: business.email,
  name: business.name,
};

/** Named providers with https privacy URLs ready to display. */
export function getNamedProviders() {
  const entries = [
    {
      key: "form",
      label: "Form provider",
      name: privacyPolicy.formProviderName,
      url: privacyPolicy.formProviderPrivacyUrl,
    },
    {
      key: "email",
      label: "Email provider",
      name: privacyPolicy.emailProviderName,
      url: privacyPolicy.emailProviderPrivacyUrl,
    },
    {
      key: "hosting",
      label: "Hosting provider",
      name: privacyPolicy.hostingProviderName,
      url: privacyPolicy.hostingProviderPrivacyUrl,
    },
    {
      key: "domain",
      label: "Domain provider",
      name: privacyPolicy.domainProviderName,
      url: privacyPolicy.domainProviderPrivacyUrl,
    },
    {
      key: "reviews",
      label: "Reviews data source",
      name: privacyPolicy.reviewsProviderName,
      url: privacyPolicy.reviewsProviderPrivacyUrl,
    },
  ];

  return entries.filter((entry) => {
    const nameOk =
      typeof entry.name === "string" &&
      entry.name.trim() &&
      !/^\[[^\]]+\]$/.test(entry.name.trim());
    if (!nameOk || typeof entry.url !== "string") {
      return false;
    }
    try {
      const parsed = new URL(entry.url.trim());
      return parsed.protocol === "https:";
    } catch {
      return false;
    }
  });
}
