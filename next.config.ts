import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "i.ibb.co"],
  },
  // Desabilitar completamente o indicador de desenvolvimento
  reactStrictMode: false,
};

export default nextConfig;
