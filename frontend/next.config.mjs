/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/process',
        destination: '/how-we-hire',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
