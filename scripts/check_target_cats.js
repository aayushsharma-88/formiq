const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');

// Parse exercises into objects
// We can use a regex to match exercise objects
const exercises = [];
const blocks = content.split(/\{\s*"id":/);

blocks.slice(1).forEach(block => {
  const idMatch = block.match(/^\s*"([^"]+)"/);
  const nameMatch = block.match(/"name":\s*\{\s*"en":\s*"([^"]+)"/);
  const muscleMatch = block.match(/"muscle":\s*"([^"]+)"/);
  const targetCatMatch = block.match(/"targetCategories":\s*(\[[^\]]*\])/);
  
  if (idMatch && muscleMatch) {
    let targetCategories = [];
    if (targetCatMatch) {
      try {
        targetCategories = JSON.parse(targetCatMatch[1]);
      } catch (e) {}
    }
    exercises.push({
      id: idMatch[1],
      name: nameMatch ? nameMatch[1] : idMatch[1],
      muscle: muscleMatch[1],
      targetCategories
    });
  }
});

console.log(`Parsed ${exercises.length} exercises.`);

const withTargetCats = exercises.filter(ex => ex.targetCategories.length > 0);
console.log(`\nExercises with targetCategories (${withTargetCats.length}):`);
withTargetCats.forEach(ex => {
  console.log(`- [${ex.muscle}] ${ex.name} (${ex.id}) -> targetCategories: ${JSON.stringify(ex.targetCategories)}`);
});
