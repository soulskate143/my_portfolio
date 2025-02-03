import path from 'path';

export default {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    // Add src to module resolution
    config.resolve.modules.push(path.resolve('src'));
    return config;
  },
};
