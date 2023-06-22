/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:'https://res.cloudinary.com',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com']
},
  experimental: {
    newNextLinkBehavior: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
};

module.exports = nextConfig;
