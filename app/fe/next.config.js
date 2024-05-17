// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.alias.canvas = false;

//     return config;
//   },
//   output: "standalone",
// };
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
// });
// const withVideos = require("next-videos");

// module.exports = {
//   // next.js config
//   ...withPWA,
//   ...withVideos,
//   ...nextConfig,
// };

/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
  output: "standalone",
};

module.exports = withPWA({
  // next.js config
  ...withVideos(),
  ...nextConfig,
});
