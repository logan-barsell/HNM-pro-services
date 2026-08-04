/**
 * Hosted form-provider configuration for static export.
 * Do not hard-code secrets. Public endpoints only (e.g. Formspree form URLs).
 * Submission stays inactive until a valid https endpoint is provided.
 *
 * Prefer environment variables in production:
 * - NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
 * - NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT
 */

export const formProvider = {
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "",
  consultationEndpoint:
    process.env.NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT || "",
};

export function isFormSubmissionEnabled(endpoint) {
  if (typeof endpoint !== "string") {
    return false;
  }

  const trimmed = endpoint.trim();
  if (!trimmed) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/** Resolve a select option value to its human-readable label for email payloads. */
export function optionLabel(options, value, fallback = "") {
  if (!value) {
    return fallback;
  }

  const match = options.find((option) => option.value === value);
  return match?.label || value;
}
