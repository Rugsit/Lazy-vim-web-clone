import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/292349/213447056-92290767-ea16-430c-8727-ce994c93e9cc.png',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/N93cTbtLCIM/hqdefault.jpg',
      },
    ],
  },
};

export default nextConfig;
