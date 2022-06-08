/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "repository-images.githubusercontent.com",
    ],
  },
};

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "src/base/styles/_base.scss";`,
    };
  }

  return {
    ...defaultConfig,
    ...nextConfig,
  };
};
