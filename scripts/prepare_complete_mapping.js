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
const repdbById = new Map();
repdbList.forEach(item => {
  repdbById.set(item.id.toLowerCase(), item);
});

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

// Accurate equipment & movement mapping for RepDB
const comprehensiveMapping = {
  // --- CHEST ---
  'dumbbell-chest-fly': 'db-fly',
  'incline-dumbbell-fly': 'incline-dumbbell-fly',
  'cable-chest-fly': 'cable-fly',
  'low-to-high-cable-fly': 'cable-fly',
  'high-to-low-cable-fly': 'cable-fly',
  'machine-chest-press': 'chest-press-machine',
  'pec-deck-fly': 'machine-chest-fly',
  'push-ups': 'push-up',
  'wide-grip-push-ups': 'wide-push-up',
  'incline-push-ups': 'incline-push-ups',
  'decline-push-ups': 'decline-push-up',
  'chest-dips': 'dips',
  'dumbbell-pullover': 'plate-pullover',
  'smith-machine-bench-press': 'smith-machine-bench-press',
  'barbell-floor-press': 'floor-press',

  // --- BACK ---
  'chin-ups': 'chin-up',
  'lat-pulldown': 'lat-pulldown',
  'close-grip-lat-pulldown': 'close-grip-lat-pulldown',
  'neutral-grip-lat-pulldown': 'v-bar-lat-pulldown',
  'barbell-bent-over-row': 'barbell-row',
  'pendlay-row': 'pendlay-row',
  'one-arm-dumbbell-row': 'single-arm-db-row',
  'seated-cable-row': 'seated-cable-row',
  'chest-supported-row': 'chest-supported-db-row',
  't-bar-row': 't-bar-row',
  'machine-row': 'seated-cable-row',
  'inverted-row': 'inverted-row',
  'straight-arm-cable-pulldown': 'straight-arm-pulldown',
  'rack-pull': 'rack-pull',
  'back-extensions': 'back-extension',
  'face-pulls': 'face-pull',
  'meadows-row': 'single-arm-db-row',
  'kroc-row': 'single-arm-db-row',

  // --- SHOULDERS ---
  'seated-dumbbell-shoulder-press': 'seated-dumbbell-press',
  'standing-dumbbell-shoulder-press': 'dumbbell-floor-press',
  'arnold-press': 'arnold-press',
  'machine-shoulder-press': 'machine-shoulder-press',
  'dumbbell-lateral-raise': 'lateral-raise',
  'cable-lateral-raise': 'cable-lateral-raise',
  'machine-lateral-raise': 'plate-loaded-lateral-raise',
  'front-dumbbell-raise': 'dumbbell-front-raise',
  'cable-front-raise': 'cable-front-raise',
  'rear-delt-dumbbell-fly': 'dumbbell-reverse-fly',
  'reverse-pec-deck': 'rear-delt-fly',
  'cable-rear-delt-fly': 'cable-lateral-raise',
  'upright-row': 'upright-row',
  'landmine-press': 'behind-the-neck-press',
  'push-press': 'double-kettlebell-push-press',
  'dumbbell-y-raise': 'lateral-raise',
  'leaning-lateral-raise': 'side-lying-lateral-raise',
  'pike-push-ups': 'pike-push-up',
  'behind-the-neck-press': 'behind-the-neck-press',

  // --- BICEPS ---
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
  'high-cable-curl': 'cable-curl',
  'single-arm-cable-curl': 'cable-curl',
  'waiter-curl': 'bicep-curl',

  // --- TRICEPS ---
  'rope-triceps-pushdown': 'tricep-pushdown',
  'straight-bar-pushdown': 'v-bar-tricep-pushdown',
  'reverse-grip-pushdown': 'tricep-pushdown',
  'overhead-dumbbell-triceps-extension': 'seated-dumbbell-tricep-extension',
  'overhead-cable-triceps-extension': 'overhead-tricep-extension',
  'ez-bar-skull-crushers': 'ez-bar-lying-tricep-extension',
  'dumbbell-skull-crushers': 'lying-tricep-extension',
  'close-grip-bench-press': 'close-grip-bench-press',
  'diamond-push-ups': 'diamond-push-up',
  'bench-dips': 'bench-dips',
  'assisted-triceps-dips': 'assisted-dips',
  'single-arm-cable-extension': 'single-arm-tricep-pushdown',
  'cross-body-cable-triceps-extension': 'single-arm-tricep-pushdown',
  'lying-triceps-extension': 'lying-tricep-extension',
  'seated-machine-triceps-extension': 'machine-triceps-extension',
  'dumbbell-kickbacks': 'tricep-kickback',
  'cable-kickbacks': 'cable-tricep-kickback',
  'tate-press': 'lying-tricep-extension',
  'jm-press': 'close-grip-bench-press',
  'parallel-bar-triceps-dips': 'dips',

  // --- LEGS / QUADS ---
  'front-squat': 'front-squat',
  'goblet-squat': 'goblet-squat',
  'hack-squat': 'hack-squat',
  'leg-press': 'leg-press',
  'bulgarian-split-squat': 'bulgarian-split-squat',
  'walking-lunges': 'walking-lunge',
  'reverse-lunges': 'reverse-lunge',
  'forward-lunges': 'lunge',
  'step-ups': 'step-up',
  'leg-extension': 'leg-extension',
  'smith-machine-squat': 'smith-machine-front-squat',
  'heels-elevated-squat': 'heel-elevated-squat',
  'sissy-squat': 'hack-squat',
  'split-squat': 'dumbbell-split-squat',
  'belt-squat': 'box-squat',
  'single-leg-leg-press': 'close-stance-leg-press',
  'wall-sit': 'wall-sit',
  'zercher-squat': 'front-squat',
  'bodyweight-squat': 'bodyweight-squat',
  'landmine-squat': 'goblet-squat',

  // --- HAMSTRINGS / GLUTES ---
  'romanian-deadlift': 'romanian-deadlift',
  'dumbbell-romanian-deadlift': 'dumbbell-romanian-deadlift',
  'stiff-leg-deadlift': 'stiff-leg-deadlift',
  'seated-leg-curl': 'seated-leg-curl',
  'lying-leg-curl': 'leg-curl',
  'standing-single-leg-curl': 'single-leg-lying-leg-curl',
  'nordic-hamstring-curl': 'nordic-hamstring-curl',
  'glute-ham-raise': 'back-extension',
  'good-morning': 'smith-machine-good-morning',
  'single-leg-romanian-deadlift': 'single-leg-romanian-deadlift',
  'cable-pull-through': 'cable-pull-through',
  'stability-ball-leg-curl': 'ball-leg-curl',
  'slider-leg-curl': 'ball-leg-curl',
  'resistance-band-leg-curl': 'trx-hamstring-curl',
  'kettlebell-deadlift': 'kettlebell-deadlift',
  'single-leg-hip-hinge': 'single-leg-romanian-deadlift',
  'machine-hamstring-curl': 'seated-leg-curl',
  'assisted-nordic-curl': 'nordic-hamstring-curl',
  'sumo-deadlift': 'sumo-deadlift',
  'trap-bar-deadlift': 'deadlift',
  'glute-ham-raise-machine': 'machine-back-extension',

  // --- CALVES ---
  'standing-calf-raise': 'standing-calf-raise',
  'seated-calf-raise': 'seated-calf-raise',
  'donkey-calf-raise': 'donkey-calf-raise',
  'leg-press-calf-raise': 'machine-calf-raise',
  'single-leg-standing-calf-raise': 'single-leg-calf-raise',
  'smith-machine-standing-calf-raise': 'smith-machine-calf-raise',
  'tibialis-raise': 'bodyweight-calf-raise',
  'dumbbell-seated-calf-raise': 'seated-calf-raise',
  'seated-dumbbell-calf-raise': 'seated-calf-raise',
  'bodyweight-single-leg-calf-raise': 'single-leg-calf-raise',
  'hack-squat-calf-raise': 'hack-squat-calf-raise',
  'cable-standing-calf-raise': 'standing-calf-raise',
  'single-leg-leg-press-calf-raise': 'machine-calf-raise',
  'eccentric-heel-drop': 'standing-calf-raise',
  'seated-band-plantar-flexion': 'seated-calf-raise',
  'standing-dumbbell-calf-raise': 'dumbbell-calf-raise',
  'smith-machine-seated-calf-raise': 'smith-machine-calf-raise',
  'farmer-walk-on-toes': 'dumbbell-farmers-walk',
  'jump-rope': 'box-jump',
  'box-jump-rebound': 'box-jump',
  'wall-seated-calf-raise': 'seated-calf-raise',
  'rotary-calf-machine': 'machine-calf-raise',
  'leg-press-calf-press': 'machine-calf-raise',
  'dumbbell-standing-calf-raise': 'dumbbell-calf-raise',
  'bent-knee-calf-raise': 'seated-calf-raise',
  'bodyweight-standing-calf-raise': 'bodyweight-calf-raise',
  'stair-calf-raise-deficit': 'standing-calf-raise',
  'resistance-band-calf-raise': 'standing-calf-raise',
  'isometric-calf-hold': 'standing-calf-raise',
  'paused-deficit-calf-raise': 'standing-calf-raise',
  'farmers-walk-on-toes': 'dumbbell-farmers-walk',
  'tibialis-anterior-raise': 'bodyweight-calf-raise',
  'reverse-calf-raise': 'standing-calf-raise',
  'seated-band-calf-extension': 'seated-calf-raise',

  // --- ABS / CORE ---
  'standard-crunch': 'crunches',
  'decline-crunch': 'decline-crunch',
  'cable-crunch': 'cable-crunch',
  'bicycle-crunch': 'bicycle-crunch',
  'reverse-crunch': 'reverse-crunches',
  'hanging-leg-raise': 'hanging-leg-raise',
  'captains-chair-leg-raise': 'captains-chair-leg-raise',
  'side-plank': 'side-plank',
  'stability-ball-crunch': 'crunches',
  'ab-wheel-rollout': 'ab-wheel-rollout',
  'pallof-press': 'cable-pallof-press',
  'russian-twist': 'russian-twist',
  'hanging-knee-raise': 'hanging-knee-raise',
  'dead-bug': 'dead-bug',
  'bird-dog': 'bird-dog',
  'mountain-climbers': 'mountain-climbers',
  'hollow-body-hold': 'hollow-body-hold',
  'woodchopper': 'cable-twist',
  'l-sit': 'l-sit',
  'dragon-flag': 'dragon-flag',
  'toe-touches': 'crunches',
  'weighted-sit-ups': 'sit-ups',

  // --- FOREARMS ---
  'barbell-wrist-curl': 'barbell-wrist-curl',
  'barbell-reverse-wrist-curl': 'db-reverse-wrist-curl',
  'dumbbell-wrist-curl': 'dumbbell-wrist-curl',
  'dumbbell-reverse-wrist-curl': 'db-reverse-wrist-curl',
  'behind-the-back-wrist-curl': 'barbell-wrist-curl',
  'reverse-barbell-forearm-curl': 'reverse-curl',
  'cross-body-forearm-hammer-curl': 'cross-body-hammer-curl',
  'farmer-walk': 'dumbbell-farmers-walk',
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
  'seated-dumbbell-radial-deviation': 'wrist-roller',
  'heavy-farmers-carry': 'dumbbell-farmers-walk',
  'grip-dead-hang': 'dead-hang',
  'towel-grip-hang': 'dead-hang',
  'hand-gripper-squeeze': 'wrist-roller',
  'finger-extension-band': 'wrist-roller',
  'dumbbell-pronation-supination': 'wrist-roller',
  'radial-ulnar-deviation': 'wrist-roller',
  'fat-grip-dead-hang': 'dead-hang'
};

const finalMapping = {};
let unmappedCount = 0;

formiqExercises.forEach(ex => {
  if (preserved.has(ex.id)) {
    finalMapping[ex.id] = {
      id: ex.id,
      name: ex.nameEn,
      muscle: ex.muscle,
      type: 'LOCAL_PRESERVED',
      localPath: `/images/exercises/${ex.id}.png`,
      downloadUrl: null
    };
    return;
  }

  // Target RepDB ID
  let repdbTargetId = comprehensiveMapping[ex.id] || ex.id;
  let repdbItem = repdbById.get(repdbTargetId.toLowerCase());

  if (!repdbItem) {
    // try direct name
    const norm = ex.nameEn.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const [rId, rItem] of repdbById.entries()) {
      if (rItem.name_en.toLowerCase().replace(/[^a-z0-9]/g, '') === norm) {
        repdbItem = rItem;
        break;
      }
    }
  }

  if (repdbItem && repdbItem.images && repdbItem.images.flat) {
    const flat = repdbItem.images.flat;
    const file = flat.peak || flat.start || flat.main;
    if (file) {
      finalMapping[ex.id] = {
        id: ex.id,
        name: ex.nameEn,
        muscle: ex.muscle,
        type: 'DOWNLOADED_WEBP',
        localPath: `/images/exercises/${ex.id}.webp`,
        fileName: `${ex.id}.webp`,
        repdbId: repdbItem.id,
        downloadUrl: `https://huggingface.co/datasets/RepDB/exercise-dataset/resolve/main/${file}`
      };
      return;
    }
  }

  unmappedCount++;
  console.log(`STILL UNMAPPED: ${ex.id} (${ex.nameEn}) [${ex.muscle}] target: ${repdbTargetId}`);
});

console.log(`\n========================================`);
console.log(`Total FORMIQ Exercises: ${formiqExercises.length}`);
console.log(`Mapped: ${Object.keys(finalMapping).length}`);
console.log(`Unmapped: ${unmappedCount}`);
console.log(`========================================\n`);

fs.writeFileSync('final_complete_mapping.json', JSON.stringify(finalMapping, null, 2));
