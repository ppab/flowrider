#!/usr/bin/env node

// Your script logic here
const fs = require('fs');
const path = require('path');

const template = `
{"myKey":true}
`;

const filePath = path.resolve( './flowrider.config.json');

fs.writeFileSync(filePath, template, { encoding: 'utf8' });

console.log('flowrider.config.json file created!');

