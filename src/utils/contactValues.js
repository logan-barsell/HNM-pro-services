/**
 * Helpers for approved vs placeholder contact values.
 * Treat empty strings and [BRACKET PLACEHOLDERS] as unavailable.
 */

export function isApprovedContactValue(value) {
  if (typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return false;
  }

  // Established project placeholders: [CLIENT PHONE], [BUSINESS HOURS], etc.
  if (/^\[[^\]]+\]$/.test(trimmed)) {
    return false;
  }

  return true;
}

/** Build a tel: href from an approved phone string, or null if unavailable. */
export function toTelHref(phone) {
  if (!isApprovedContactValue(phone)) {
    return null;
  }

  const normalized = phone.trim().replace(/[^\d+]/g, "");
  const digitCount = normalized.replace(/\D/g, "").length;
  if (!normalized || normalized === "+" || digitCount < 7) {
    return null;
  }

  return `tel:${normalized}`;
}

/** Build a mailto: href from an approved email, or null if unavailable. */
export function toMailtoHref(email) {
  if (!isApprovedContactValue(email)) {
    return null;
  }

  const trimmed = email.trim();
  if (!trimmed.includes("@")) {
    return null;
  }

  return `mailto:${trimmed}`;
}
