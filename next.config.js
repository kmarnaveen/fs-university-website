/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: "export",

  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Trailing slash for better static hosting compatibility
  trailingSlash: true,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    turbo: {
      rules: {
        // Add any custom Turbopack rules if needed
      },
    },
  },
};

module.exports = nextConfig;
