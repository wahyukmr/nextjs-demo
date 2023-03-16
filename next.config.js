/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        LOCAL_URL: process.env.DB_URL,
    },
};

module.exports = nextConfig;
