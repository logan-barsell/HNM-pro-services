/**
 * Renders a JSON-LD script tag for structured data.
 * Safe for Server Components; data must be a plain serializable object.
 */
export default function JsonLd({ data }) {
  if (!data) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
