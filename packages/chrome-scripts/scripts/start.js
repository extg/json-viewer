'use strict';

require('react-scripts/config/webpack.config.dev')
require.cache[require.resolve('react-scripts/config/webpack.config.dev')].exports = require('../config/webpack.config.dev')

require('react-scripts/scripts/start');
