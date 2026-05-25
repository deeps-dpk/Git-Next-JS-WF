/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Use your repo name if your URL is https://<username>.github.io/<repo-name>/
  // basePath: '/your-repo-name', 
};

module.exports = nextConfig;