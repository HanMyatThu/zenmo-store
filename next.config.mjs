/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{
      hostname: "res.cloudinary.com",
    }],
  },
};

export default nextConfig;
