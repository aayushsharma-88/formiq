const fs = require('fs');
const path = require('path');

const formiqExercises = [];
const formiqContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');
const exerciseRegex = /\{\s*"id":\s*"([^"]+)",\s*"name":\s*\{\s*"en":\s*"([^"]+)",\s*"hi":\s*"([^"]+)"\s*\},\s*"muscle":\s*"([^"]+)"/g;

let match;
while ((match = exerciseRegex.exec(formiqContent)) !== null) {
  formiqExercises.push({
    id: match[1],
    nameEn: match[2],
    nameHi: match[3],
    muscle: match[4]
  });
}

const repdbData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'repdb_exercises.json'), 'utf8'));
const repdbList = repdbData.exercises || repdbData;

// Create lookup maps for RepDB
const repdbById = new Map();
const repdbByName = new Map();

repdbList.forEach(item => {
  repdbById.set(item.id.toLowerCase(), item);
  const normName = item.name_en.toLowerCase().replace(/[^a-z0-9]/g, '');
  repdbByName.set(normName, item);
});

console.log(`FORMIQ total exercises: ${formiqExercises.length}`);
console.log(`RepDB total exercises: ${repdbList.length}`);

// Existing local images that MUST BE PRESERVED
const preservedImages = [
  'barbell-bench-press',
  'incline-barbell-bench-press',
  'decline-barbell-bench-press',
  'flat-dumbbell-bench-press',
  'incline-dumbbell-press',
  'decline-dumbbell-press',
  'barbell-back-squat',
  'pull-up',
  'barbell-overhead-press',
  'standing-barbell-curl',
  'cable-pushdown',
  'conventional-deadlift',
  'plank'
];

let directIdMatches = 0;
let nameMatches = 0;
let unmatched = [];

formiqExercises.forEach(ex => {
  if (preservedImages.includes(ex.id)) {
    return; // Already has an existing preserved image
  }

  const normId = ex.id.toLowerCase().replace(/_/g, '-');
  const normName = ex.nameEn.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (repdbById.has(normId)) {
    directIdMatches++;
  } else if (repdbByName.has(normName)) {
    nameMatches++;
  } else {
    // Try fuzzy match
    let found = null;
    for (const [rName, item] of repdbByName.entries()) {
      if (normName.includes(rName) || rName.includes(normName)) {
        found = item;
        break;
      }
    }
    if (found) {
      nameMatches++;
    } else {
      unmatched.push(ex);
    }
  }
});

console.log(`Preserved existing images: ${preservedImages.length}`);
console.log(`Direct ID matches in RepDB: ${directIdMatches}`);
console.log(`Name matches in RepDB: ${nameMatches}`);
console.log(`Unmatched exercises count: ${unmatched.length}`);
console.log(`\nUnmatched list sample:`, unmatched.slice(0, 30).map(u => `${u.id} (${u.nameEn}) [${u.muscle}]`));
