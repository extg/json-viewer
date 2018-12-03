'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

__r('react-scripts/config/webpack.config.dev', '../config/webpack.config.dev')
__r('react-scripts/config/paths', '../config/paths')

require('react-scripts/scripts/start')

function __r(a, b) { require(a); require.cache[require.resolve(a)].exports = require(b); }
