#! /usr/bin/env node

const shelljs = require('shelljs');

shelljs.exec('./node_modules/modernizr/bin/modernizr -c ./node_modules/modernizr/lib/config-all.json');
shelljs.exec('rsync -av --remove-source-files ./modernizr.js ./docs/demo/gaiden-css/javascripts');
