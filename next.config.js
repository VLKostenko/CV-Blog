/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    domains: ["images.ctfassets.net", "placehold.co"]
  },
};
