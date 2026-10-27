const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');

const blocks = content.split(/\{\s*"id":/);
const byCategory = {};

blocks.slice(1).forEach(block => {
  const idMatch = block.match(/^\s*"([^"]+)"/);
  const nameMatch = block.match(/"name":\s*\{\s*"en":\s*"([^"]+)"/);
  const muscleMatch = block.match(/"muscle":\s*"([^"]+)"/);
  
  if (idMatch && muscleMatch) {
    const muscle = muscleMatch[1];
    if (!byCategory[muscle]) byCategory[muscle] = [];
    byCategory[muscle].push({
      id: idMatch[1],
      name: nameMatch ? nameMatch[1] : idMatch[1]
    });
  }
});

console.log('=== AUDIT OF EXERCISES BY PRIMARY MUSCLE ===\n');
for (const [muscle, list] of Object.entries(byCategory)) {
  console.log(`\n--- ${muscle.toUpperCase()} (${list.length} exercises) ---`);
  list.forEach(ex => console.log(`  - ${ex.name} (${ex.id})`));
}
