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
  swcMinify: true,
  async rewrite() {
    return [
      {
        // localhost:9000의 api 요청할 때 /api/~~ 로작성하면 'http://localhost:9000/~~' 로 요청한 것과 동일하게 적용이 된다.
        source: "/",
        // cors로 문제가 되었던 url 입력
        destination:
          "http://ec2-13-124-175-105.ap-northeast-2.compute.amazonaws.com:8081",
      },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
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
