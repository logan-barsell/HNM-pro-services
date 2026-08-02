import { business } from "@/content/business";
import { routes } from "@/content/routes";

/**
 * Contact page content.
 * Do not invent phone, email, hours, service region, or response-time promises.
 */

export const contactHero = {
  eyebrow: "Contact HNM",
  heading: "Have a question? Let’s talk.",
  supporting:
    "Use this page for general questions, existing-client communication, or help determining the best next step. If you are interested in beginning a new service, please start with the free consultation request.",
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
    "Reach HNM by phone or email, or send a message using the form below.",
  phone: {
    label: "Phone",
    actionLabel: "Call HNM",
    unavailable:
      "A public phone number will be added once the business finalizes it.",
  },
  email: {
    label: "Email",
    actionLabel: "Email HNM",
    unavailable:
      "A public email address will be added once the business finalizes it.",
  },
  hours: {
    label: "Business hours",
    unavailable: "Business hours will be added once finalized.",
  },
  region: {
    label: "Service region",
    unavailable:
      "The approved service region will be listed here once finalized.",
  },
};

export const contactFormCopy = {
  title: "Send a general message",
  supporting:
    "Use this short form for general questions or existing-client communication. New service requests should use the free consultation form instead.",
  submitLabel: "Send Message",
  successMessage:
    "Thank you for contacting HNM Professional Services. Your message has been received, and we’ll follow up using the contact information you provided.",
  inactiveNotice:
    "Online message delivery is not connected yet. Form fields and validation are ready; a hosted form provider will be configured before launch. Until then, please use the phone or email above, or request a free consultation.",
  privacyNotice:
    "By submitting this form, you agree that HNM Professional Services may use the information provided to respond to your inquiry. Please do not include sensitive medical, financial, security, or access information.",
  privacyLinkLabel: "Privacy information",
  consentLabel: "I consent to be contacted about this inquiry",
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
    consent: {
      name: "consent",
      requiredMessage: "Please confirm you consent to be contacted.",
    },
  },
};

export const hoursAndServiceArea = {
  title: "Hours and service area",
  body: "HNM serves clients within an approved local service region. Scheduling and availability vary depending on location, service type, and current commitments.",
  availabilityNote:
    "Availability is confirmed during the consultation conversation and depends on current commitments.",
  unsureLead: "Not sure whether your location is covered?",
  consultationHref: routes.consultation,
};

export const responseProcess = {
  title: "What happens after you reach out?",
  supporting:
    "HNM will follow up as soon as reasonably possible based on current scheduling and availability.",
  steps: [
    {
      number: "01",
      title: "Your message is received",
      description:
        "Your inquiry is collected through the contact method you used.",
    },
    {
      number: "02",
      title: "HNM reviews the inquiry",
      description:
        "The message is reviewed so the follow-up can be thoughtful and relevant.",
    },
    {
      number: "03",
      title: "HNM follows up",
      description: "HNM follows up using your preferred contact information.",
    },
  ],
};

export const contactFinalCta = {
  title: "Need help with a person, pet, or home?",
  body: "Start with a free consultation so HNM can learn about your needs, location, timing, and expectations.",
  primaryCta: {
    label: "Request a Free Consultation",
    href: routes.consultation,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

export const contactSeoDescription =
  "Contact HNM Professional Services with general questions, service-area inquiries, or existing-client needs, or request a free consultation for a new service.";

/** Re-export business contact fields for single-source display. */
export const contactBusiness = {
  phone: business.phone,
  email: business.email,
  businessHours: business.businessHours,
  serviceRegion: business.serviceRegion,
  name: business.name,
};
