const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');

// Check what fields exercises have
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const muscleMatches = [...content.matchAll(/"muscle":\s*"([^"]+)"/g)].map(m => m[1]);
const targetCategoriesMatches = [...content.matchAll(/"targetCategories":\s*(\[[^\]]*\])/g)];

console.log('Total exercises (id matches):', idMatches.length);
console.log('Total muscle fields:', muscleMatches.length);
console.log('Total targetCategories fields:', targetCategoriesMatches.length);

if (targetCategoriesMatches.length > 0) {
  console.log('\nSample targetCategories:');
  for (let i = 0; i < Math.min(5, targetCategoriesMatches.length); i++) {
    console.log(targetCategoriesMatches[i][1]);
  }
}

// Let's check distribution of ex.muscle
const muscleCounts = {};
muscleMatches.forEach(m => {
  muscleCounts[m] = (muscleCounts[m] || 0) + 1;
});

console.log('\nMuscle counts by primary `muscle` property:');
console.log(JSON.stringify(muscleCounts, null, 2));
