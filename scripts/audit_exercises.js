const fs = require('fs');
const path = require('path');

// Read exercises.ts
const exercisesPath = path.join(__dirname, '..', 'src', 'data', 'exercises.ts');
const fileContent = fs.readFileSync(exercisesPath, 'utf8');

// Parse exercises
const exerciseRegex = /\{\s*"id":\s*"([^"]+)",\s*"name":\s*\{\s*"en":\s*"([^"]+)",\s*"hi":\s*"([^"]+)"\s*\},\s*"muscle":\s*"([^"]+)"/g;

let match;
const exercises = [];
while ((match = exerciseRegex.exec(fileContent)) !== null) {
  exercises.push({
    id: match[1],
    nameEn: match[2],
    nameHi: match[3],
    muscle: match[4]
  });
}

console.log(`Total exercises parsed: ${exercises.length}`);

// Group by muscle
const byMuscle = {};
exercises.forEach(ex => {
  if (!byMuscle[ex.muscle]) byMuscle[ex.muscle] = [];
  byMuscle[ex.muscle].push(ex);
});

console.log('\n--- Exercises per Muscle Group ---');
for (const [muscle, list] of Object.entries(byMuscle)) {
  console.log(`${muscle}: ${list.length}`);
}

// Check public images
const publicExercisesDir = path.join(__dirname, '..', 'public', 'images', 'exercises');
let existingImages = [];
if (fs.existsSync(publicExercisesDir)) {
  existingImages = fs.readdirSync(publicExercisesDir);
}
console.log(`\nExisting image files in public/images/exercises (${existingImages.length}):`);
existingImages.forEach(img => console.log(' - ' + img));

// Check library page mapping
const libraryPath = path.join(__dirname, '..', 'src', 'app', 'library', 'page.tsx');
const libraryContent = fs.readFileSync(libraryPath, 'utf8');
const guideMatches = [...libraryContent.matchAll(/"([^"]+)":\s*\{\s*image:\s*"([^"]+)"/g)];
console.log(`\nTotal EXERCISE_GUIDE_IMAGES mappings in library/page.tsx: ${guideMatches.length}`);
guideMatches.forEach(m => console.log(` - ${m[1]} -> ${m[2]}`));
