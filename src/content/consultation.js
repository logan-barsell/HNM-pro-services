import { business } from "@/content/business";
import { routes } from "@/content/routes";

/**
 * Consultation page content and form options.
 * Submitting a request starts a conversation — it does not confirm an appointment.
 */

export const consultationHero = {
  eyebrow: "Free Consultation",
  heading: "Request a Free Consultation",
  supporting:
    "Tell HNM a little about the support you are looking for, where service may be needed, and your preferred timing. Submitting this form starts a conversation and does not create a confirmed appointment or guarantee availability.",
  secondary:
    "HNM will review the information and follow up to discuss the request, service expectations, and next steps.",
};

export const consultationProcess = {
  title: "What happens next?",
  disclaimer:
    "Submitting the form does not confirm a consultation time or guarantee service availability.",
  steps: [
    {
      number: "01",
      title: "Submit Your Request",
      description:
        "Share basic information about the service, location, timing, and the person, pet, or home involved.",
    },
    {
      number: "02",
      title: "HNM Reviews the Details",
      description:
        "The request will be reviewed for service fit, location, scheduling, and any questions that need clarification.",
    },
    {
      number: "03",
      title: "Discuss the Consultation and Next Steps",
      description:
        "HNM will follow up using your preferred contact method to discuss the request and arrange a consultation when appropriate.",
    },
  ],
};

export const contactMethodOptions = [
  { value: "phone", label: "Phone call" },
  { value: "text", label: "Text message" },
  { value: "email", label: "Email" },
  { value: "no-preference", label: "No preference" },
];

export const serviceNeededOptions = [
  { value: "pet-sitting", label: "Pet Sitting & Dog Walking" },
  { value: "companion-care", label: "Companion Care for Seniors" },
  { value: "house-sitting", label: "House Sitting & Home Checks" },
  { value: "more-than-one", label: "More than one service" },
  { value: "not-sure", label: "Not sure" },
];

export const consultationTimeframeOptions = [
  { value: "as-soon-as-available", label: "As soon as reasonably available" },
  { value: "within-week", label: "Within the next week" },
  { value: "within-two-weeks", label: "Within the next two weeks" },
  { value: "later-this-month", label: "Later this month" },
  { value: "flexible", label: "Flexible / not sure" },
];

export const serviceTimeframeOptions = [
  { value: "within-week", label: "Within the next week" },
  { value: "within-two-weeks", label: "Within the next two weeks" },
  { value: "within-month", label: "Within the next month" },
  { value: "more-than-month", label: "More than one month from now" },
  { value: "ongoing", label: "Ongoing or recurring need" },
  { value: "flexible", label: "Flexible / not sure" },
];

export const referralSourceOptions = [
  { value: "friend-family", label: "Friend or family referral" },
  { value: "google", label: "Google" },
  { value: "yelp", label: "Yelp" },
  { value: "social", label: "Social media" },
  { value: "community", label: "Community group" },
  { value: "returning", label: "Returning client" },
  { value: "other", label: "Other" },
];

export const consultationFormCopy = {
  title: "Consultation request",
  supporting:
    "Share enough detail for HNM to understand your inquiry. Fields marked as required help with a thoughtful follow-up.",
  submitLabel: "Request My Free Consultation",
  submittingLabel: "Sending request…",
  inactiveNotice:
    "Online consultation requests are not connected yet. The form and validation are ready; a hosted form provider will be configured before launch. Until then, please use the phone or email options below once available, or visit the Contact page.",
  errorMessage:
    "We could not send your request. Please try again, or contact HNM directly using the information below.",
  invalidMessage: "Please correct the highlighted fields and try again.",
  groups: {
    contact: "Contact information",
    service: "Service details",
    additional: "Additional information",
  },
  fields: {
    fullName: {
      name: "fullName",
      label: "Full name",
      requiredMessage: "Enter your full name.",
    },
    email: {
      name: "email",
      label: "Email",
      requiredMessage: "Enter your email address.",
      invalidMessage: "Enter a valid email address.",
    },
    phone: {
      name: "phone",
      label: "Phone number",
      requiredMessage: "Enter your phone number.",
    },
    preferredContact: {
      name: "preferredContact",
      label: "Preferred contact method",
      requiredMessage: "Select a preferred contact method.",
    },
    serviceNeeded: {
      name: "serviceNeeded",
      label: "Service needed",
      requiredMessage: "Select the service you would like to discuss.",
    },
    location: {
      name: "location",
      label: "Service location or ZIP code",
      helperText:
        "This helps HNM determine whether the location may be within the current service area.",
      requiredMessage: "Enter the ZIP code or general service location.",
    },
    consultationTimeframe: {
      name: "consultationTimeframe",
      label: "Preferred consultation timeframe",
      helperText:
        "This is when you would like to talk—not a confirmed appointment time.",
      requiredMessage: "Select a preferred consultation timeframe.",
    },
    serviceTimeframe: {
      name: "serviceTimeframe",
      label: "When service may be needed",
      requiredMessage: "Select when service may be needed.",
    },
    needs: {
      name: "needs",
      label: "Tell us a little about what you need",
      helperText:
        "Please share general information about the service, schedule, routines, or questions you would like to discuss.",
      sensitiveNotice:
        "Please do not include medical records, financial information, passwords, alarm codes, entry codes, or other sensitive access details.",
      requiredMessage: "Tell us briefly what kind of support you need.",
      maxLength: 2000,
    },
    referralSource: {
      name: "referralSource",
      label: "How did you hear about HNM? (optional)",
    },
    consent: {
      name: "consent",
      label:
        "I agree that HNM Professional Services may use the information provided to contact me about this inquiry.",
      requiredMessage: "You must agree to be contacted before submitting.",
    },
  },
};

export const consultationPrivacy = {
  title: "Privacy and sensitive information",
  body: "Please provide only the information needed for HNM to respond to your inquiry. Do not include medical records, financial information, passwords, security codes, home-entry details, or other highly sensitive information.",
  statement:
    "The information submitted will be used to review and respond to your consultation request. See the Privacy page for more information.",
  linkLabel: "Privacy page",
  href: routes.privacy,
};

export const consultationSuccess = {
  title: "Request received",
  message:
    "Thank you for contacting HNM Professional Services. Your request has been received, and we’ll be in touch to discuss your needs and arrange a consultation.",
  disclaimer:
    "Submitting this request does not confirm a consultation appointment or guarantee service availability.",
  primaryCta: {
    label: "Return Home",
    href: routes.home,
  },
  secondaryCta: {
    label: "Explore Services",
    href: routes.services,
  },
};

export const alternativeContact = {
  title: "Prefer to contact HNM directly?",
  supporting:
    "For general questions or existing-client communication, use the Contact page. New service requests are best submitted through the consultation form so HNM has the information needed to follow up.",
  callLabel: "Call HNM",
  emailLabel: "Email HNM",
  contactPageLabel: "General Contact",
  contactHref: routes.contact,
  phoneUnavailable:
    "A public phone number will be added once the business finalizes it.",
  emailUnavailable:
    "A public email address will be added once the business finalizes it.",
};

export const consultationSeoDescription =
  "Request a free consultation with HNM Professional Services to discuss pet care, nonmedical senior companionship, house sitting, or home-check needs.";

export const consultationBusiness = {
  phone: business.phone,
  email: business.email,
  name: business.name,
};
