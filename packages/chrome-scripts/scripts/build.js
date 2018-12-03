'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

__r('react-scripts/config/webpack.config.prod', '../config/webpack.config.prod')
__r('react-scripts/config/paths', '../config/paths')

require('react-scripts/scripts/build')

function __r(a, b) { require(a); require.cache[require.resolve(a)].exports = require(b); }
