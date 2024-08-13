/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',   /* For react-md-editor */
  },
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
