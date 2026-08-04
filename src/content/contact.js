import { business } from "@/content/business";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";

/**
 * Contact page content.
 * Voice: first person (Holly). Do not invent response-time promises.
 */

export const contactHero = {
  eyebrow: "Get in Touch",
  heading: "Have a question? Let’s talk.",
  supporting:
    "Questions, existing-client notes, or not sure where to start? Message me here. If you’re ready to begin a new service, the free consultation form is the best place to share the details.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "View Services",
    href: routes.services,
  },
};

export const contactInfo = {
  title: "Contact Information",
  supporting:
    "Reach me by phone or email, or send a message using the form below.",
  phone: {
    label: "Phone",
    actionLabel: "Call Holly",
    unavailable:
      "A public phone number will be added once the business finalizes it.",
  },
  email: {
    label: "Email",
    actionLabel: "Email Holly",
    unavailable:
      "A public email address will be added once the business finalizes it.",
  },
  region: {
    label: "Service Regions",
    unavailable:
      "The approved service region will be listed here once finalized.",
  },
};

export const contactFormCopy = {
  title: "Send a General Message",
  supporting:
    "Use this short form for general questions or existing-client communication. New service requests should use the free consultation form instead.",
  submitLabel: "Send Message",
  successMessage:
    "Thank you for reaching out. I’ve received your message, and I’ll follow up using the contact information you provided.",
  inactiveNotice:
    "Online message delivery is not connected yet. Form fields and validation are ready; a hosted form provider will be configured before launch. Until then, please use the phone or email above, or request a free consultation.",
  privacyNotice:
    "By submitting this form, you agree that HNM Professional Services may use the information provided to respond to your inquiry. Please do not include sensitive medical, financial, security, or access information.",
  privacyLinkLabel: "Privacy information",
  inquiryTypes: [
    { value: "general", label: "General question" },
    { value: "existing-client", label: "Existing client" },
    { value: "service-area", label: "Service-area question" },
    { value: "website", label: "Website or technical issue" },
    { value: "other", label: "Other" },
  ],
  fields: {
    fullName: {
      name: "fullName",
      label: "Full name",
      requiredMessage: "Please enter your full name.",
    },
    email: {
      name: "email",
      label: "Email",
      requiredMessage: "Please enter your email address.",
      invalidMessage: "Please enter a valid email address.",
    },
    phone: {
      name: "phone",
      label: "Phone number (optional)",
    },
    inquiryType: {
      name: "inquiryType",
      label: "Inquiry type",
      requiredMessage: "Please select an inquiry type.",
    },
    message: {
      name: "message",
      label: "Message",
      requiredMessage: "Please enter a message.",
    },
  },
};

export const responseProcess = {
  title: "What happens after you reach out?",
  supporting:
    "I’ll follow up as soon as I reasonably can, based on current scheduling and availability.",
  steps: [
    {
      number: "01",
      title: "Your message is received",
      description: "Your inquiry comes through the contact method you used.",
    },
    {
      number: "02",
      title: "I review the inquiry",
      description:
        "I read your message carefully so the follow-up can be thoughtful and relevant.",
    },
    {
      number: "03",
      title: "I follow up",
      description:
        "I’ll get back to you using your preferred contact information.",
    },
  ],
};

export const contactFinalCta = {
  title: "Need help with a person, pet, or home?",
  body: "Start with a free consultation so I can learn about your needs, location, timing, and expectations.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

export const contactSeoDescription = pageSeo[routes.contact].description;

/** Re-export business contact fields for single-source display. */
export const contactBusiness = {
  phone: business.phone,
  email: business.email,
  serviceRegion: business.serviceRegion,
  name: business.name,
};
