// next.config.js

const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Resolve path aliases to src/app folder
    config.resolve.alias['@'] = path.join(__dirname, 'src/app');
    
    return config;
  },
};
