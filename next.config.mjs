/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
  async redirects() {
    return [
      {
        source: '/contactUs',
        destination: '/contact-us',
        permanent: true
      },
       {
        source: '/about',
        destination: '/about-us',
        permanent: true
      },
    ];
  },
};

export default nextConfig;
