/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export — no Next.js image optimization server at runtime.
    unoptimized: true,
  },
};

export default nextConfig;
