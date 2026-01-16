/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to support API routes
  // API routes require a server environment (Vercel, Netlify, or custom server)
  
  // Ensure trailing slashes for better compatibility
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
