import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/**',  // This allows all paths under this domain
            },
        ],
    }
};

export default nextConfig;
