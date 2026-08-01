import { business } from "@/content/business";
import { routes } from "@/content/routes";

/**
 * Privacy Notice content for the public marketing site.
 *
 * Operational notice based on known website behavior — not attorney-reviewed
 * legal advice unless the client obtains legal review.
 *
 * Prelaunch: Review California privacy-law applicability after finalizing
 * analytics, form providers, advertising tools, and annual business operations.
 * Consider professional legal review before launch.
 *
 * Do not invent providers, retention periods, or compliance claims.
 */

export const privacyPolicy = {
  // Set to an approved ISO date string (YYYY-MM-DD) when the notice is reviewed.
  lastUpdated: "",
  formProviderName: "",
  formProviderPrivacyUrl: "",
  hostingProviderName: "",
  hostingProviderPrivacyUrl: "",
  emailProviderName: "",
  emailProviderPrivacyUrl: "",
  analyticsEnabled: false,
  advertisingCookiesEnabled: false,
};

export const privacyHero = {
  eyebrow: "Privacy",
  heading: "Privacy Notice",
  supporting:
    "This notice explains what information HNM Professional Services may collect through this website, why it is collected, and how visitors can contact HNM with questions or requests.",
  contactLinkLabel: "Contact HNM",
  contactHref: routes.contact,
};

export const privacySummary = {
  title: "Privacy at a glance",
  body: "HNM Professional Services collects only the information reasonably needed to respond to inquiries, review consultation requests, and communicate with clients or prospective clients. The website should not be used to submit medical records, financial information, passwords, security codes, or detailed home-access information.",
  bullets: [
    "Information is primarily collected through the Contact and Consultation forms.",
    "Submitted information is used to respond to the visitor’s request.",
    "Form submissions may be processed by an approved third-party form or email provider once configured.",
    "HNM does not intentionally sell personal information.",
    "Visitors may contact HNM to ask about correcting or deleting information they submitted.",
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
  { id: "privacy-contact", label: "Contact" },
];

export const privacySections = {
  informationCollected: {
    id: "information-collected",
    title: "Information we may collect",
    intro:
      "HNM may collect the types of information listed below when a visitor uses the website forms. Only fields that exist on the site’s Contact and Consultation forms are described here.",
    sensitiveReminder:
      "Please do not submit highly sensitive personal, medical, financial, security, or property-access information through the website forms.",
    categories: [
      {
        title: "Contact information",
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Preferred contact method (consultation form)",
        ],
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
      "The website does not currently operate its own analytics or advertising tools. A future hosted form provider, email provider, or web host may collect limited technical details needed to deliver their services (such as approximate submission time or basic server logs). Those details, if any, depend on the provider’s documented practices and will be reflected here once providers are finalized.",
  },
  howCollected: {
    id: "how-collected",
    title: "How information is collected",
    paragraphs: [
      "Information may be collected when visitors submit the Contact form or the Consultation request form on this website.",
      "Information may also be collected when a visitor emails or calls HNM directly, or shares details during follow-up communication about an inquiry.",
      "Limited technical information may be generated automatically by hosting or form-processing services used to operate the website, once those providers are configured.",
    ],
  },
  howUsed: {
    id: "how-used",
    title: "How information is used",
    intro: "Submitted information may be used to:",
    items: [
      "Respond to general inquiries",
      "Review consultation requests",
      "Determine whether a location may be within the current service region",
      "Discuss service needs, timing, and expectations",
      "Communicate with prospective or existing clients about the inquiry",
      "Maintain records of business communications",
      "Help prevent spam, abuse, or fraudulent submissions",
    ],
    marketingNote:
      "Required form consent is used only so HNM can contact the visitor about the inquiry. It is not treated as consent for newsletters or promotional campaigns.",
  },
  serviceProviders: {
    id: "service-providers",
    title: "Third-party service providers",
    neutralBody:
      "HNM may use third-party service providers to host the website, process form submissions, deliver email, or protect the website from abuse. These providers may process information only as necessary to provide their services.",
    pendingNote:
      "Specific provider names and privacy-policy links will be listed here after the form provider, hosting provider, and email provider are finalized.",
    categoriesLabel: "Providers that may be used include:",
    categories: [
      "A hosted form-submission provider",
      "An email-delivery or email-hosting provider",
      "A website-hosting provider",
      "A domain provider",
      "Security or spam-prevention tools used by those services",
    ],
  },
  cookies: {
    id: "cookies-analytics",
    title: "Cookies and website analytics",
    body: "The website does not currently use advertising cookies or behavioral advertising tools. The hosting platform or form-processing provider may still use essential technologies or server logs needed to operate, secure, and deliver their services.",
    noAbsoluteClaim:
      "This notice does not claim that the website uses no cookies in every technical sense, because essential hosting or form-provider technologies may still be involved once those services are connected.",
    updateNote:
      "If analytics, advertising tools, embedded maps, video players, review widgets, or scheduling tools are added later, this section will be updated before those features go live.",
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
      "If a form or email provider retains submissions according to its own settings, retention may also depend on that provider’s configuration and backups. Immediate deletion from all backups or logs cannot be guaranteed.",
  },
  security: {
    id: "security",
    title: "How information is protected",
    body: "HNM uses reasonable administrative and technical measures appropriate to the size and nature of the business to help protect information submitted through the website. However, no method of online transmission or electronic storage can be guaranteed to be completely secure.",
    practicesIntro: "Protective practices may include:",
    practices: [
      "HTTPS encryption when the live site is served over HTTPS",
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
    body: "This website may link to third-party sites such as review platforms, social-media profiles, form-provider pages, or other external resources when those links are published. HNM is not responsible for the privacy practices or content of third-party websites. Visitors should review the privacy notices of those services before providing information.",
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
  body: "To ask a privacy question or request access, correction, or deletion of information submitted through the website, contact HNM using the information below or through the Contact page.",
  contactPageLabel: "Go to the Contact page",
  contactHref: routes.contact,
  phoneUnavailable:
    "A public phone number will be added once the business finalizes it.",
  emailUnavailable:
    "A public email address will be added once the business finalizes it.",
};

export const privacyLastUpdatedCopy = {
  label: "Last updated",
  pending:
    "A final last-updated date will be published when this notice is approved for launch.",
};

export const privacySeoDescription =
  "Learn how HNM Professional Services collects, uses, and protects information submitted through its website and contact forms.";

export const privacyBusiness = {
  phone: business.phone,
  email: business.email,
  name: business.name,
};

/** True when a named provider and https privacy URL are both present. */
export function getNamedProviders() {
  const entries = [
    {
      key: "form",
      label: "Form provider",
      name: privacyPolicy.formProviderName,
      url: privacyPolicy.formProviderPrivacyUrl,
    },
    {
      key: "hosting",
      label: "Hosting provider",
      name: privacyPolicy.hostingProviderName,
      url: privacyPolicy.hostingProviderPrivacyUrl,
    },
    {
      key: "email",
      label: "Email provider",
      name: privacyPolicy.emailProviderName,
      url: privacyPolicy.emailProviderPrivacyUrl,
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
