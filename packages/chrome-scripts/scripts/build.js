'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('react-scripts/config/webpack.config.prod')
require.cache[require.resolve('react-scripts/config/webpack.config.prod')].exports = require('../config/webpack.config.prod')

require('react-scripts/scripts/build');
