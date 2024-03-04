// lilopa_use.js

const Lilopa = require('lilopa');

// Define options
const options = [
  { name: 'verbose', aliases: ['v'], description: 'Enable verbose mode' },
  { name: 'output', aliases: ['o'], description: 'Specify output file' }
];

// Initialize lilopa
const lilopa = new Lilopa(options);

// Parse command-line arguments
const args = process.argv.slice(2);
const parsedOptions = lilopa.parse(args);

// Analyze parsed options
const analyzedOptions = lilopa.analyze(parsedOptions);

console.log("Analyzed Options:", analyzedOptions);
