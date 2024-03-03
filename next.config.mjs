/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    //distDir: 'out',
    // reactStrictMode: true,
    basePath: "/portfolio",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
