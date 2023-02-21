
const baseRoute = process.env.BASE_ROUTE || '';

const PORT = process.env.PORT || 3000;

const isDev = process.env.NODE_ENV !== 'production';

const assetPrefix = isDev && `http://localhost:${PORT}${baseRoute}`;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix,
    NEXT_ENV: process.env.NEXT_ENV || 'base',
    isDev
  }
}

module.exports = nextConfig
