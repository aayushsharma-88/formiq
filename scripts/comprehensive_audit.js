const fs = require('fs');
const path = require('path');

const formiqContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');
const exerciseRegex = /\{\s*"id":\s*"([^"]+)",\s*"name":\s*\{\s*"en":\s*"([^"]+)",\s*"hi":\s*"([^"]+)"\s*\},\s*"muscle":\s*"([^"]+)"/g;

let match;
const formiqExercises = [];
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

// Existing 13 preserved local images
const preserved = new Set([
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
]);

// Map RepDB by ID and normalized name
const repdbById = new Map();
const repdbByName = new Map();
repdbList.forEach(item => {
  repdbById.set(item.id.toLowerCase(), item);
  const norm = item.name_en.toLowerCase().replace(/[^a-z0-9]/g, '');
  repdbByName.set(norm, item);
});

// Manual dictionary for accurate exercise equipment & biomechanics matching
const manualAliases = {
  // Chest
  'dumbbell-chest-fly': 'db-fly',
  'incline-dumbbell-fly': 'incline-dumbbell-fly',
  'cable-chest-fly': 'cable-fly',
  'low-to-high-cable-fly': 'cable-fly',
  'high-to-low-cable-fly': 'cable-fly',
  'machine-chest-press': 'chest-press-machine',
  'pec-deck-fly': 'machine-chest-fly',
  'push-ups': 'push-up',
  'wide-grip-push-ups': 'wide-push-up',
  'incline-push-ups': 'incline-push-up',
  'decline-push-ups': 'decline-push-up',
  'chest-dips': 'dips',
  'dumbbell-pullover': 'dumbbell-pullover',
  'smith-machine-bench-press': 'smith-machine-bench-press',
  'barbell-floor-press': 'floor-press',

  // Back
  'chin-ups': 'chin-up',
  'lat-pulldown': 'lat-pulldown',
  'close-grip-lat-pulldown': 'close-grip-lat-pulldown',
  'neutral-grip-lat-pulldown': 'neutral-grip-lat-pulldown',
  'barbell-bent-over-row': 'barbell-row',
  'pendlay-row': 'pendlay-row',
  'one-arm-dumbbell-row': 'single-arm-db-row',
  'seated-cable-row': 'seated-cable-row',
  'chest-supported-row': 'chest-supported-db-row',
  't-bar-row': 't-bar-row',
  'machine-row': 'machine-seated-row',
  'inverted-row': 'inverted-row',
  'straight-arm-cable-pulldown': 'straight-arm-lat-pulldown',
  'rack-pull': 'rack-pull',
  'back-extensions': 'back-extension',
  'face-pulls': 'cable-face-pull',
  'meadows-row': 'landmine-row',
  'kroc-row': 'single-arm-db-row',

  // Shoulders
  'seated-dumbbell-shoulder-press': 'seated-dumbbell-press',
  'standing-dumbbell-shoulder-press': 'standing-dumbbell-shoulder-press',
  'arnold-press': 'arnold-press',
  'machine-shoulder-press': 'machine-shoulder-press',
  'dumbbell-lateral-raise': 'lateral-raise',
  'cable-lateral-raise': 'cable-lateral-raise',
  'machine-lateral-raise': 'machine-lateral-raise',
  'front-dumbbell-raise': 'dumbbell-front-raise',
  'cable-front-raise': 'cable-front-raise',
  'rear-delt-dumbbell-fly': 'dumbbell-reverse-fly',
  'reverse-pec-deck': 'rear-delt-fly',
  'cable-rear-delt-fly': 'cable-rear-delt-fly',
  'upright-row': 'upright-row',
  'landmine-press': 'landmine-press',
  'push-press': 'push-press',
  'dumbbell-y-raise': 'prone-incline-y-raise',
  'leaning-lateral-raise': 'side-lying-lateral-raise',
  'pike-push-ups': 'pike-push-up',
  'behind-the-neck-press': 'behind-the-neck-barbell-press',

  // Biceps
  'ez-bar-curl': 'ez-bar-curl',
  'alternating-dumbbell-curl': 'bicep-curl',
  'seated-dumbbell-curl': 'seated-dumbbell-curl',
  'incline-dumbbell-curl': 'incline-db-curl',
  'hammer-curl': 'hammer-curl',
  'cross-body-hammer-curl': 'cross-body-hammer-curl',
  'preacher-curl': 'preacher-curl',
  'machine-preacher-curl': 'machine-preacher-curl',
  'concentration-curl': 'concentration-curl',
  'cable-biceps-curl': 'cable-curl',
  'bayesian-cable-curl': 'cable-curl',
  'spider-curl': 'spider-curl',
  'drag-curl': 'drag-curl',
  'reverse-curl': 'reverse-curl',
  'zottman-curl': 'zottman-curl',
  'resistance-band-curl': 'banded-standing-curl',
  'high-cable-curl': 'high-cable-curl',
  'single-arm-cable-curl': 'cable-curl',
  'waiter-curl': 'bicep-curl',

  // Triceps
  'rope-triceps-pushdown': 'tricep-rope-pushdown',
  'straight-bar-pushdown': 'straight-bar-tricep-pushdown',
  'reverse-grip-pushdown': 'reverse-grip-pushdown',
  'overhead-dumbbell-triceps-extension': 'overhead-dumbbell-tricep-extension',
  'overhead-cable-triceps-extension': 'overhead-cable-tricep-extension',
  'ez-bar-skull-crushers': 'skull-crusher',
  'dumbbell-skull-crushers': 'db-skull-crusher',
  'close-grip-bench-press': 'close-grip-bench-press',
  'diamond-push-ups': 'diamond-push-up',
  'bench-dips': 'bench-dips',
  'assisted-triceps-dips': 'assisted-dips',
  'single-arm-cable-extension': 'single-arm-cable-tricep-extension',
  'cross-body-cable-triceps-extension': 'single-arm-cable-tricep-extension',
  'lying-triceps-extension': 'lying-tricep-extension',
  'seated-machine-triceps-extension': 'seated-dip-machine',
  'dumbbell-kickbacks': 'tricep-kickback',
  'cable-kickbacks': 'cable-tricep-kickback',
  'tate-press': 'tate-press',
  'jm-press': 'close-grip-bench-press',
  'parallel-bar-triceps-dips': 'dips',

  // Legs / Quads
  'front-squat': 'front-squat',
  'goblet-squat': 'goblet-squat',
  'hack-squat': 'hack-squat',
  'leg-press': 'leg-press',
  'bulgarian-split-squat': 'bulgarian-split-squat',
  'walking-lunges': 'walking-lunge',
  'reverse-lunges': 'reverse-lunge',
  'forward-lunges': 'forward-lunge',
  'step-ups': 'step-up',
  'leg-extension': 'leg-extension',
  'smith-machine-squat': 'smith-machine-squat',
  'heels-elevated-squat': 'cyclist-squat',
  'sissy-squat': 'sissy-squat',
  'split-squat': 'split-squat',
  'belt-squat': 'belt-squat',
  'single-leg-leg-press': 'single-leg-press',
  'wall-sit': 'wall-sit',
  'zercher-squat': 'zercher-squat',
  'bodyweight-squat': 'bodyweight-squat',
  'landmine-squat': 'landmine-squat',

  // Hamstrings / Glutes
  'romanian-deadlift': 'romanian-deadlift',
  'dumbbell-romanian-deadlift': 'dumbbell-romanian-deadlift',
  'stiff-leg-deadlift': 'stiff-leg-deadlift',
  'seated-leg-curl': 'seated-leg-curl',
  'lying-leg-curl': 'leg-curl',
  'standing-single-leg-curl': 'standing-leg-curl',
  'nordic-hamstring-curl': 'nordic-hamstring-curl',
  'glute-ham-raise': 'glute-ham-developer',
  'good-morning': 'good-morning',
  'single-leg-romanian-deadlift': 'single-leg-romanian-deadlift',
  'cable-pull-through': 'cable-pull-through',
  'stability-ball-leg-curl': 'ball-leg-curl',
  'slider-leg-curl': 'ball-leg-curl',
  'resistance-band-leg-curl': 'banded-hamstring-curl',
  'kettlebell-deadlift': 'kettlebell-deadlift',
  'single-leg-hip-hinge': 'single-leg-romanian-deadlift',
  'machine-hamstring-curl': 'seated-leg-curl',
  'assisted-nordic-curl': 'nordic-hamstring-curl',
  'sumo-deadlift': 'sumo-deadlift',
  'trap-bar-deadlift': 'trap-bar-deadlift',

  // Calves
  'standing-calf-raise': 'standing-calf-raise',
  'seated-calf-raise': 'seated-calf-raise',
  'donkey-calf-raise': 'donkey-calf-raise',
  'leg-press-calf-raise': 'leg-press-calf-raise',
  'single-leg-standing-calf-raise': 'single-leg-calf-raise',
  'smith-machine-standing-calf-raise': 'smith-machine-calf-raise',
  'tibialis-raise': 'tibialis-raise',
  'dumbbell-seated-calf-raise': 'seated-calf-raise',
  'bodyweight-single-leg-calf-raise': 'single-leg-calf-raise',
  'hack-squat-calf-raise': 'hack-squat-calf-raise',
  'cable-standing-calf-raise': 'cable-calf-raise',
  'single-leg-leg-press-calf-raise': 'leg-press-calf-raise',
  'eccentric-heel-drop': 'standing-calf-raise',
  'seated-band-plantar-flexion': 'banded-calf-raise',
  'standing-dumbbell-calf-raise': 'dumbbell-calf-raise',
  'smith-machine-seated-calf-raise': 'smith-machine-calf-raise',
  'farmer-walk-on-toes': 'farmers-walk',
  'jump-rope': 'jump-rope',
  'box-jump-rebound': 'box-jump',
  'wall-seated-calf-raise': 'seated-calf-raise',
  'rotary-calf-machine': 'machine-calf-raise',

  // Abs / Core
  'standard-crunch': 'crunch',
  'decline-crunch': 'decline-crunch',
  'cable-crunch': 'cable-kneeling-crunch',
  'bicycle-crunch': 'bicycle-crunch',
  'reverse-crunch': 'reverse-crunch',
  'hanging-leg-raise': 'hanging-leg-raise',
  'captains-chair-leg-raise': 'captains-chair-leg-raise',
  'side-plank': 'side-plank',
  'stability-ball-crunch': 'exercise-ball-crunch',
  'ab-wheel-rollout': 'ab-wheel-rollout',
  'pallof-press': 'pallof-press',
  'russian-twist': 'russian-twist',
  'hanging-knee-raise': 'hanging-knee-raise',
  'dead-bug': 'dead-bug',
  'bird-dog': 'bird-dog',
  'mountain-climbers': 'mountain-climber',
  'hollow-body-hold': 'hollow-body-hold',
  'woodchopper': 'cable-woodchopper',
  'l-sit': 'l-sit',
  'dragon-flag': 'dragon-flag',

  // Forearms
  'barbell-wrist-curl': 'barbell-wrist-curl',
  'barbell-reverse-wrist-curl': 'reverse-wrist-curl',
  'dumbbell-wrist-curl': 'dumbbell-wrist-curl',
  'dumbbell-reverse-wrist-curl': 'db-reverse-wrist-curl',
  'behind-the-back-wrist-curl': 'barbell-wrist-curl',
  'reverse-barbell-forearm-curl': 'reverse-curl',
  'cross-body-forearm-hammer-curl': 'cross-body-hammer-curl',
  'farmer-walk': 'farmers-walk',
  'dead-hang': 'dead-hang',
  'plate-pinch-hold': 'plate-pinch',
  'wrist-roller': 'wrist-roller',
  'zottman-forearm-rotation-curl': 'zottman-curl',
  'reverse-cable-forearm-curl': 'reverse-curl',
  'towel-pull-ups': 'towel-pull-up',
  'pinch-grip-deadlift': 'plate-pinch',
  'behind-back-cable-wrist-curl': 'cable-wrist-curl',
  'barbell-finger-curls': 'barbell-wrist-curl',
  'hammer-curls-with-fat-grip': 'hammer-curl',
  'standing-dumbbell-reverse-wrist-curl': 'db-reverse-wrist-curl',
  'standing-behind-back-dumbbell-wrist-curl': 'dumbbell-wrist-curl',
  'seated-dumbbell-radial-deviation': 'wrist-roller'
};

const results = [];
let matchedCount = 0;
let missingCount = 0;

formiqExercises.forEach(ex => {
  if (preserved.has(ex.id)) {
    matchedCount++;
    results.push({
      id: ex.id,
      name: ex.nameEn,
      muscle: ex.muscle,
      status: 'PRESERVED_LOCAL',
      imagePath: `/images/exercises/${ex.id}.png`
    });
    return;
  }

  // 1. Check manual alias
  let repdbItem = null;
  const alias = manualAliases[ex.id];
  if (alias && repdbById.has(alias)) {
    repdbItem = repdbById.get(alias);
  }

  // 2. Direct ID
  if (!repdbItem && repdbById.has(ex.id)) {
    repdbItem = repdbById.get(ex.id);
  }

  // 3. Name Match
  if (!repdbItem) {
    const norm = ex.nameEn.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (repdbByName.has(norm)) {
      repdbItem = repdbByName.get(norm);
    }
  }

  if (repdbItem && repdbItem.images && repdbItem.images.flat) {
    const flat = repdbItem.images.flat;
    const imgFile = flat.peak || flat.start || flat.main;
    if (imgFile) {
      matchedCount++;
      results.push({
        id: ex.id,
        name: ex.nameEn,
        muscle: ex.muscle,
        status: 'REPDB_MATCH',
        repdbId: repdbItem.id,
        repdbImg: imgFile,
        targetFile: `/images/exercises/${ex.id}.webp`
      });
      return;
    }
  }

  missingCount++;
  results.push({
    id: ex.id,
    name: ex.nameEn,
    muscle: ex.muscle,
    status: 'MISSING',
    aliasAttempted: alias
  });
});

console.log(`\n=== AUDIT RESULTS ===`);
console.log(`Total Exercises: ${formiqExercises.length}`);
console.log(`Matched (Preserved + RepDB): ${matchedCount}`);
console.log(`Still Missing: ${missingCount}`);

const missing = results.filter(r => r.status === 'MISSING');
if (missing.length > 0) {
  console.log(`\nMissing Items (${missing.length}):`);
  missing.forEach(m => console.log(` - ${m.id} (${m.name}) [${m.muscle}] alias: ${m.aliasAttempted}`));
}

fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2));
