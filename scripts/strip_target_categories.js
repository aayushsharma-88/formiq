const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'exercises.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove targetCategories from interface
content = content.replace(/\s*targetCategories\?:\s*string\[\];/, '');

// Remove "targetCategories": [ ... ], from exercise objects
// Handles multi-line or single-line arrays
content = content.replace(/\s*"targetCategories":\s*\[[^\]]*\],?/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully stripped targetCategories from exercises.ts');
