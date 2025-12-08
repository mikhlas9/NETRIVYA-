/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 this tells Next.js to generate a static `out` folder
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // needed for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
