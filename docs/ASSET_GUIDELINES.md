# Asset Guidelines

Standards for logos, images, video, and related media.

## Brand Status (Phase 2)

Approved brand **colors** and **fonts** are implemented in the MUI theme.

Final **logo files**, **favicons**, **photography**, and **hero video** are not in the repository yet. The site uses a temporary text wordmark (`BrandWordmark`) until assets arrive.

Do not:

- Crop a business-card photo into a production logo
- Trace or approximate the heart-and-paw icon
- Reference image URLs that do not exist
- Treat photographed print samples as production raster assets

## Proposed Future Asset Paths

Add files under `public/brand/` when ready:

- `public/brand/hnm-icon.png`
- `public/brand/hnm-icon-transparent.png`
- `public/brand/hnm-logo-full.png`
- `public/brand/favicon.ico`
- `public/brand/icon-192.png`
- `public/brand/icon-512.png`
- `public/brand/apple-touch-icon.png`
- `public/brand/og-image.png`

Documented (not rendered) in `src/content/assets.js`.

## Logos

Preferred formats:

- SVG for the primary logo when available
- PNG with transparency as a fallback
- Separate light and dark variants if available
- Square icon or mark for favicons

Do not trace, distort, recolor, or redesign the final logo without approval.

## Images

Preferred:

- Authentic client-provided photography
- High-resolution source images
- Landscape, portrait, and square crop options where available
- Images that communicate warmth, trust, companionship, pets, and home care

Avoid:

- Low-resolution images
- Visibly artificial stock scenes
- Images that imply medical treatment
- Overly staged or emotionally manipulative imagery
- Copyright-unclear imagery

## Hero Video

Requirements:

- Muted
- Looping
- No essential information conveyed only through video
- Poster image fallback
- Compressed for web delivery
- Text overlay must remain readable
- Respect reduced-motion preferences
- Avoid autoplay behavior that harms usability or performance

## File Naming

Use descriptive lowercase filenames with hyphens.

Examples:

- `hnm-primary-logo.svg`
- `hnm-owner-portrait.webp`
- `pet-sitting-service.webp`
- `companion-care-service.webp`

Avoid spaces, generic names (`image1.png`), and numbered camera filenames (`IMG_1234.jpg`).

## Favicon and Metadata Preparation

When assets exist, update:

- App Router icon conventions (`app/icon.png`, `app/apple-icon.png`) and/or `metadata.icons`
- Open Graph / Twitter image fields in root metadata
- Optional web app manifest icons

Until then, omit image metadata rather than linking to missing files.

## Alt Text

- Alt text should describe the meaningful content and purpose of an image
- Decorative images should use empty alt text (`alt=""`) where appropriate
- Do not stuff keywords into alt text
- Do not duplicate nearby captions unless the image conveys additional meaning
