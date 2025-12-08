/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 this tells Next.js to generate a static `out` folder
  output: 'export',
  
  // Ensure trailing slashes for better compatibility with static hosting
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // needed for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
