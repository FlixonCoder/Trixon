/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    return [
      // Retired pages → new consolidated destinations
      { source: '/how-we-hire', destination: '/services', permanent: true },
      { source: '/process', destination: '/services', permanent: true },

      // Individual project pages → /work
      { source: '/projects/ketpa', destination: '/work', permanent: true },
      { source: '/projects/ai-interrogation-engine', destination: '/work', permanent: true },
      { source: '/projects/telegram-lead-pipeline', destination: '/work', permanent: true },
      { source: '/projects/yuvaratna', destination: '/work', permanent: true },

      // Individual service sub-pages → consolidated /services
      { source: '/services/ai-solutions', destination: '/services', permanent: true },
      { source: '/services/product-saas-development', destination: '/services', permanent: true },
      { source: '/services/custom-software-engineering', destination: '/services', permanent: true },
      { source: '/services/data-analytics', destination: '/services', permanent: true },
      { source: '/services/infrastructure-engineering', destination: '/services', permanent: true },
    ]
  },
};

export default nextConfig;
