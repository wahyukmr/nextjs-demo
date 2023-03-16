/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_USER: process.env.NEXT_PUBLIC_USER,
        NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
        NEXT_PUBLIC_COLLECTION: process.env.NEXT_PUBLIC_COLLECTION,
    },
};

module.exports = nextConfig;
