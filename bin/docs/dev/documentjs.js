#! /usr/bin/env node

const shelljs = require('shelljs');

const docsDir = './docs/gaiden-css';
const sourceDocsDir = './docs/demo/gaiden-css/scss';
const sourceDir = './src/scss';
const minifiedDocsFile = `${docsDir}/ninja-demo.css`;

const options = {
  sass: ` --include-path ${sourceDocsDir} \
    --include-path ${sourceDir} \
    --output-style expanded \
    --sourceComments true \
    -o ${docsDir} \
    --recursive `
}

shelljs.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
shelljs.exec(`documentjs`);
shelljs.cp('./build/stylesheets/ninja-gaiden.css', `${docsDir}/`)