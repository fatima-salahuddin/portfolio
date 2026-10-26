import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            { source: "/skills", destination: "/about#skills", permanent: true },
            { source: "/Fatima Salahuddin - Resume.pdf", destination: "/Fatima_Salahuddin_Resume.pdf", permanent: true },
            { source: "/projects/fairgan-model", destination: "/projects/fairgan", permanent: true },
            { source: "/projects/ecommerce-website-database-system", destination: "/projects/ecommerce-marketplace", permanent: true },
        ];
    },
};

export default nextConfig;
