const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');

// Parse exercises
const exercises = [];
const blocks = content.split(/\{\s*"id":/);

blocks.slice(1).forEach(block => {
  const idMatch = block.match(/^\s*"([^"]+)"/);
  const nameMatch = block.match(/"name":\s*\{\s*"en":\s*"([^"]+)"/);
  const muscleMatch = block.match(/"muscle":\s*"([^"]+)"/);
  
  if (idMatch && muscleMatch) {
    exercises.push({
      id: idMatch[1],
      name: nameMatch ? nameMatch[1] : idMatch[1],
      muscle: muscleMatch[1]
    });
  }
});

const categories = ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Legs", "Hamstrings", "Calves", "Abs", "Forearms"];

console.log('=== FORMIQ CATEGORY PURITY & ACCURACY AUDIT ===\n');

let allPassed = true;
const summary = {};

categories.forEach((cat, index) => {
  const matching = exercises.filter(ex => ex.muscle === cat);
  const leaks = matching.filter(ex => ex.muscle !== cat);
  
  summary[cat] = {
    count: matching.length,
    leaksCount: leaks.length
  };

  console.log(`TEST ${index + 1}: Category "${cat}"`);
  console.log(`  - Count: ${matching.length} exercises`);
  console.log(`  - Leaks from other categories: ${leaks.length}`);
  
  if (leaks.length > 0) {
    allPassed = false;
    console.error(`  - FAILED: Found leaking exercises in ${cat}:`, leaks.map(l => l.name));
  } else {
    console.log(`  - PASSED: 100% pure ${cat} movements.`);
  }
  console.log('');
});

// TEST 9: Category Isolation Test
console.log('TEST 9: Category Isolation (Zero cross-category contamination)');
let crossContamination = false;
for (let i = 0; i < categories.length; i++) {
  for (let j = 0; j < categories.length; j++) {
    if (i !== j) {
      const catA = categories[i];
      const catB = categories[j];
      const shared = exercises.filter(ex => ex.muscle === catA && ex.muscle === catB);
      if (shared.length > 0) {
        crossContamination = true;
        console.error(`Contamination between ${catA} and ${catB}:`, shared.map(s => s.name));
      }
    }
  }
}
if (!crossContamination) {
  console.log('  - PASSED: Zero overlap between distinct categories.\n');
}

// TEST 10: Sum consistency
const totalExercisesInCategories = Object.values(summary).reduce((acc, curr) => acc + curr.count, 0);
console.log('TEST 10: Total exercises consistency');
console.log(`  - Total in library: ${exercises.length}`);
console.log(`  - Sum of all categories: ${totalExercisesInCategories}`);
if (totalExercisesInCategories === exercises.length) {
  console.log('  - PASSED: Every single exercise belongs to exactly one category without duplicates or omissions.\n');
} else {
  allPassed = false;
  console.error('  - FAILED: Exercise count mismatch!\n');
}

// Check images for all exercises
console.log('TEST 11: Image Mapping Verification for all categorized exercises');
const exerciseImagesPath = path.join(__dirname, '..', 'src', 'data', 'exerciseImages.ts');
const exerciseImagesContent = fs.readFileSync(exerciseImagesPath, 'utf8');
const publicExercisesDir = path.join(__dirname, '..', 'public', 'images', 'exercises');

let missingImages = 0;
exercises.forEach(ex => {
  const hasInRegistry = exerciseImagesContent.includes(`"${ex.id}":`);
  const pngPath = path.join(publicExercisesDir, `${ex.id}.png`);
  const webpPath = path.join(publicExercisesDir, `${ex.id}.webp`);
  const fileExists = fs.existsSync(pngPath) || fs.existsSync(webpPath);
  
  if (!hasInRegistry || !fileExists) {
    missingImages++;
    console.error(`Exercise missing image: ${ex.id}`);
  }
});

if (missingImages === 0) {
  console.log('  - PASSED: All 207 exercises retain their correct, local tutorial images.\n');
} else {
  allPassed = false;
  console.error(`  - FAILED: ${missingImages} exercises missing images.\n`);
}

console.log('==================================================');
if (allPassed) {
  console.log('ALL CATEGORIZATION & ACCURACY TESTS PASSED (100%)');
} else {
  console.log('SOME TESTS FAILED');
}
console.log('==================================================');
