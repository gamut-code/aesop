#! /usr/bin/env node
const fs = require('fs');
const { argv } = process;
const compile = require('../compile');

const componentName = argv.slice(2)[0];

console.log('Check to see if component already exists...');
if (!fs.existsSync('tmp')) fs.mkdirSync('tmp');
if (!fs.existsSync('tmp/dr-seuss')) fs.mkdirSync('tmp/dr-seuss');

if (!fs.existsSync(`tmp/dr-seuss/${componentName}`)) {
  console.log('Generating component...');
  fs.writeFileSync(`tmp/dr-seuss/${componentName}`, componentName);
} else {
  console.log('Component already exists, continue on...');
}

const filePath = `tmp/dr-seuss/${componentName}`
compile(componentName, filePath);

console.log('All set!');
