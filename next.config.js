const { DeleteSourceMapsPlugin } = require('webpack-delete-sourcemaps-plugin');
const { loadEnvConfig } = require('@next/env');

// If you want a config only for prod..
//const prod = process.env.NODE_ENV === "production";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

/** @type {import('next').NextConfig} */

const config = {
  trailingSlash: true,
  publicRuntimeConfig: {
    processEnv: Object.fromEntries(Object.entries(process.env).filter(([key]) => key.includes('NEXT_PUBLIC_'))),
  },
  /* 

  -----
  If you want to run your app in a subdomain

  basePath: NEXT_PUBLIC_BASE_PATH,
  -----
  If you want your assets to come from cdn
  images: {
    domains: [],
  },
  -----
  If you want you use a prefix for your assets

  assetPrefix: "",

  -----
  If nginx runs in front of node no need to compress
  compress: false,
  */
  generateEtags: false,
  poweredByHeader: false,
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      config.plugins.push(new DeleteSourceMapsPlugin({ isServer, keepServerSourcemaps: true }));
    }
    config.resolve.fallback = { fs: false };
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = config;
