import { business } from "@/content/business";
import { routes } from "@/content/routes";
import { pageSeo } from "@/content/seo";

/**
 * Consultation page content and form options.
 * Voice: first person (Holly). Submitting starts a conversation — not a booking.
 */

export const consultationHero = {
  eyebrow: "Free Consultation",
  heading: "Request a Free Consultation",
  supporting:
    "Tell me a little about the support you’re looking for, where you’d need help, and your preferred timing. Submitting this form starts a conversation—it doesn’t create a confirmed appointment or guarantee availability.",
  secondary:
    "I’ll review what you share and follow up to talk through the request, expectations, and next steps.",
};

export const consultationProcess = {
  title: "What happens next?",
  supporting:
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
      title: "I Review the Details",
      description:
        "I’ll look over your request for service fit, location, scheduling, and any questions that need clarifying.",
    },
    {
      number: "03",
      title: "We Talk About Next Steps",
      description:
        "I’ll follow up to discuss the request and arrange a consultation when it makes sense.",
    },
  ],
};

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
  title: "Consultation Request",
  supporting:
    "Share enough so I can understand your situation. Required fields help me follow up thoughtfully.",
  submitLabel: "Request My Free Consultation",
  submittingLabel: "Sending request…",
  inactiveNotice:
    "Online consultation requests are not connected yet. The form and validation are ready; a hosted form provider will be configured before launch. Until then, please use the phone or email options below, or visit the Contact page.",
  errorMessage:
    "I couldn’t send your request just now. Please try again, or reach me directly using the information below.",
  invalidMessage: "Please correct the highlighted fields and try again.",
  privacyNotice:
    "By submitting this form, you agree that HNM Professional Services may use the information provided to respond to your consultation request.",
  privacyLinkLabel: "Privacy information",
  groups: {
    contact: "Contact Information",
    service: "Service Details",
    additional: "Additional Information",
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
      label: "Phone number (optional)",
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
        "This helps me know whether the location may be within my current service area.",
      requiredMessage: "Enter the ZIP code or general service location.",
    },
    consultationTimeframe: {
      name: "consultationTimeframe",
      label: "Preferred consultation timeframe",
      helperText:
        "This is when you’d like to talk—not a confirmed appointment time.",
      requiredMessage: "Select a preferred consultation timeframe.",
    },
    serviceTimeframe: {
      name: "serviceTimeframe",
      label: "When service may be needed",
      requiredMessage: "Select when service may be needed.",
    },
    needs: {
      name: "needs",
      label: "Tell me a little about what you need",
      helperText:
        "Share general information about the service, schedule, routines, or questions you’d like to discuss.",
      sensitiveNotice:
        "Please do not include medical records, financial information, passwords, alarm codes, entry codes, or other sensitive access details.",
      requiredMessage: "Tell me briefly what kind of support you need.",
      maxLength: 2000,
    },
    referralSource: {
      name: "referralSource",
      label: "How did you hear about me? (optional)",
    },
  },
};

export const consultationSuccess = {
  title: "Request received.",
  message:
    "Thank you for reaching out. I’ve received your request, and I’ll be in touch to discuss your needs and arrange a consultation.",
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
  title: "Prefer to call or email?",
  supporting:
    "For general questions or existing-client communication, use the Contact page. New service requests are best submitted through the consultation form so I have the details I need to follow up well.",
  callLabel: "Call Holly",
  emailLabel: "Email Holly",
  contactPageLabel: "General Contact",
  contactHref: routes.contact,
  phoneUnavailable:
    "A public phone number will be added once the business finalizes it.",
  emailUnavailable:
    "A public email address will be added once the business finalizes it.",
};

export const consultationSeoDescription =
  pageSeo[routes.consultation].description;

export const consultationBusiness = {
  phone: business.phone,
  email: business.email,
  name: business.name,
};
