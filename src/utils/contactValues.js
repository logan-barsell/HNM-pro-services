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

  // Established project placeholders: [CLIENT PHONE], [APPROVED SERVICE REGION], etc.
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

  const digits = phone.trim().replace(/\D/g, "");
  if (digits.length < 7) {
    return null;
  }

  // Prefer E.164-style links for US numbers so mobile dialers get a country code.
  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `tel:+${digits}`;
  }

  const normalized = phone.trim().replace(/[^\d+]/g, "");
  if (!normalized || normalized === "+") {
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
