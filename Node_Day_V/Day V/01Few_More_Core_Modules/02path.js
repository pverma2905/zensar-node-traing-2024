// The 'path' module provides utilities for working with file and directory paths.

const path = require('path');

const filePath = '../just.txt';
// directory name
console.log(path.dirname(filePath));

// base name / file name
console.log(path.basename(filePath));

// extension
console.log(path.extname(filePath));