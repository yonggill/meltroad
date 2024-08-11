/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.yong-yong.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
