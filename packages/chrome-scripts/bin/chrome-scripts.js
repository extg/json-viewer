#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

switch (script) {
  case 'build':
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
    replaceRequire('react-scripts/config/webpack.config.prod', '../config/webpack.config.prod')
    break;

  case 'start':
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    replaceRequire('react-scripts/config/webpack.config.dev', '../config/webpack.config.dev')
}

require('react-scripts/bin/react-scripts')

function replaceRequire(from, to) {
  require(from)
  require.cache[require.resolve(from)].exports = require(to)
}
