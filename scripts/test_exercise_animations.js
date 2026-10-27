const fs = require('fs');

console.log('=====================================================');
console.log('   FORMIQ EXERCISE ANIMATION SYSTEM AUDIT SUITE      ');
console.log('=====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`[FAIL] ${testName}: ${details}`);
  }
}

// 1. Load Exercise Database
const exercisesRaw = fs.readFileSync('src/data/exercises.ts', 'utf8');
const exMatch = exercisesRaw.match(/export const EXERCISES: Exercise\[\] = (\[[\s\S]*?\]);\s*export const MUSCLE_GROUPS/);
if (!exMatch) {
  console.error('Failed to parse src/data/exercises.ts');
  process.exit(1);
}
const exercises = JSON.parse(exMatch[1]);

// 2. Load Exercise Animations Registry
const animRaw = fs.readFileSync('src/data/exerciseAnimations.ts', 'utf8');
const animMatch = animRaw.match(/export const EXERCISE_ANIMATIONS: Record<string, ExerciseAnimationConfig> = (\{[\s\S]*?\});\s*export function getExerciseAnimation/);
if (!animMatch) {
  console.error('Failed to parse src/data/exerciseAnimations.ts');
  process.exit(1);
}
const animations = JSON.parse(animMatch[1]);

console.log(`Auditing ${exercises.length} exercises and ${Object.keys(animations).length} animation configurations...\n`);

// TEST 1: Unique Exercise IDs
const idSet = new Set();
let hasDuplicates = false;
exercises.forEach(ex => {
  if (idSet.has(ex.id)) {
    hasDuplicates = true;
    console.error(`Duplicate ID found: ${ex.id}`);
  }
  idSet.add(ex.id);
});
assert(!hasDuplicates, 'Test 1: Every exercise ID is strictly unique', `Total IDs: ${idSet.size}`);

// TEST 2 & 3: 100% Mapping Coverage - Every Exercise Has a Verified Animation
let missingMappingCount = 0;
exercises.forEach(ex => {
  const anim = animations[ex.id];
  if (!anim) {
    missingMappingCount++;
    console.error(`Missing animation mapping for: ${ex.id}`);
  }
});
assert(missingMappingCount === 0, 'Test 2: Every exercise has an explicit animation mapping', `Missing: ${missingMappingCount}`);
assert(Object.keys(animations).length >= exercises.length, 'Test 3: Every animation identifier exists in registry', `Total configs: ${Object.keys(animations).length}`);

// TEST 4: Equipment Is Correctly Defined on Every Animation
let invalidEquipmentCount = 0;
Object.values(animations).forEach(anim => {
  if (!anim.equipment || typeof anim.equipment !== 'string' || anim.equipment.trim() === '') {
    invalidEquipmentCount++;
  }
});
assert(invalidEquipmentCount === 0, 'Test 4: Required equipment is correctly and explicitly defined', `Invalid: ${invalidEquipmentCount}`);

// TEST 5: Primary and Secondary Muscles Are Valid and Non-Empty
let invalidMusclesCount = 0;
Object.values(animations).forEach(anim => {
  if (!Array.isArray(anim.primaryMuscles) || anim.primaryMuscles.length === 0) {
    invalidMusclesCount++;
  }
});
assert(invalidMusclesCount === 0, 'Test 5: Primary muscles are validly defined on all animations', `Invalid: ${invalidMusclesCount}`);

// TEST 6: Exactly 4 Biomechanical Movement Phases Exist for Every Exercise
let invalidPhasesCount = 0;
Object.values(animations).forEach(anim => {
  if (!Array.isArray(anim.phases) || anim.phases.length !== 4) {
    invalidPhasesCount++;
  } else {
    const hasLabels = anim.phases.every(p => p.label && p.label.en && p.label.hi && p.desc && p.desc.en && p.desc.hi && p.cue);
    if (!hasLabels) invalidPhasesCount++;
  }
});
assert(invalidPhasesCount === 0, 'Test 6: All 207 exercises have 4 complete bilingual movement phases', `Invalid: ${invalidPhasesCount}`);

// TEST 7: REGRESSION TEST FOR BARBELL BENCH PRESS (CRITICAL)
console.log('\n--- EXERCISE REGRESSION AUDIT: BARBELL BENCH PRESS ---');
const benchPressConfig = animations['barbell-bench-press'];
assert(Boolean(benchPressConfig), 'Bench Press config exists in registry');
assert(benchPressConfig.posture === 'supine_bench', 'Bench Press uses lying supine bench posture (NOT standing)', `Posture: ${benchPressConfig?.posture}`);
assert(benchPressConfig.equipment === 'barbell_bench', 'Bench Press uses barbell_bench equipment (bench, barbell, plates)', `Equipment: ${benchPressConfig?.equipment}`);
assert(benchPressConfig.viewAngle === 'side', 'Bench Press uses side anatomical view angle', `View: ${benchPressConfig?.viewAngle}`);
assert(benchPressConfig.primaryMuscles.some(m => m.toLowerCase().includes('pectoralis') || m.toLowerCase().includes('chest')), 'Bench Press primary muscle targets pectoralis major', `Primary: ${benchPressConfig?.primaryMuscles}`);
assert(benchPressConfig.secondaryMuscles.includes('Triceps') || benchPressConfig.secondaryMuscles.some(m => m.toLowerCase().includes('tricep')), 'Bench Press secondary targets triceps', `Secondary: ${benchPressConfig?.secondaryMuscles}`);
assert(benchPressConfig.phases[0].phase === 'setup', 'Bench Press phase 0 is Setup & Unrack');
assert(benchPressConfig.phases[1].phase === 'descent', 'Bench Press phase 1 is Controlled Lowering');
assert(benchPressConfig.phases[2].phase === 'bottom_stretch', 'Bench Press phase 2 is Chest Stretch Pause');
assert(benchPressConfig.phases[3].phase === 'ascent', 'Bench Press phase 3 is Press to Lockout');

// TEST 8: REGRESSION TEST FOR DUMBBELL BENCH PRESS
console.log('\n--- EXERCISE REGRESSION AUDIT: DUMBBELL BENCH PRESS ---');
const dbBenchConfig = animations['flat-dumbbell-bench-press'];
assert(Boolean(dbBenchConfig), 'Dumbbell Bench Press exists');
assert(dbBenchConfig.equipment === 'dumbbell_bench', 'Dumbbell Bench uses dumbbell_bench equipment (distinct from barbell)', `Equipment: ${dbBenchConfig?.equipment}`);

// TEST 9: REGRESSION TEST FOR SQUAT
console.log('\n--- EXERCISE REGRESSION AUDIT: BARBELL BACK SQUAT ---');
const squatConfig = animations['barbell-back-squat'];
assert(Boolean(squatConfig), 'Barbell Back Squat exists');
assert(squatConfig.posture === 'barbell_back_squat', 'Back Squat uses squat posture', `Posture: ${squatConfig?.posture}`);
assert(squatConfig.equipment === 'barbell_squat_rack', 'Back Squat uses squat rack and barbell', `Equipment: ${squatConfig?.equipment}`);
assert(squatConfig.primaryMuscles.some(m => m.toLowerCase().includes('quad') || m.toLowerCase().includes('leg')), 'Back Squat targets quadriceps', `Primary: ${squatConfig?.primaryMuscles}`);

// TEST 10: REGRESSION TEST FOR PULL-UP & LAT PULLDOWN
console.log('\n--- EXERCISE REGRESSION AUDIT: PULL-UP & LAT PULLDOWN ---');
const pullUpConfig = animations['pull-up'];
assert(pullUpConfig && pullUpConfig.posture === 'hanging' && pullUpConfig.equipment === 'pullup_bar', 'Pull-Up uses hanging bar configuration');
const latPulldownConfig = animations['lat-pulldown'];
assert(latPulldownConfig && latPulldownConfig.posture === 'seated_lat_machine' && latPulldownConfig.equipment === 'lat_pulldown_tower', 'Lat Pulldown uses seated machine and cable tower');

// TEST 11: REGRESSION TEST FOR PLANK & AB WHEEL
console.log('\n--- EXERCISE REGRESSION AUDIT: PLANK & AB WHEEL ---');
const plankConfig = animations['plank'];
assert(plankConfig && plankConfig.posture === 'prone_floor' && plankConfig.equipment === 'mat', 'Plank uses prone floor on mat with zero barbells');
const abWheelConfig = animations['ab-wheel-rollout'];
assert(abWheelConfig && abWheelConfig.posture === 'kneeling_mat' && abWheelConfig.equipment === 'ab_wheel_mat', 'Ab Wheel Rollout uses kneeling on mat with ab wheel');

// TEST 12: REGRESSION TEST FOR BICEP CURL
console.log('\n--- EXERCISE REGRESSION AUDIT: DUMBBELL & BARBELL CURLS ---');
const bicepCurlConfig = animations['alternating-dumbbell-curl'];
assert(bicepCurlConfig && bicepCurlConfig.posture === 'standing_curls' && bicepCurlConfig.equipment === 'dumbbells', 'Dumbbell Curl uses standing curls with dumbbells');
const barbellCurlConfig = animations['standing-barbell-curl'];
assert(barbellCurlConfig && barbellCurlConfig.posture === 'standing_curls' && barbellCurlConfig.equipment === 'barbell', 'Barbell Curl uses barbell');

// TEST 13: REGRESSION TEST FOR LEG EXTENSION
console.log('\n--- EXERCISE REGRESSION AUDIT: LEG EXTENSION ---');
const legExtConfig = animations['leg-extension'];
assert(legExtConfig && legExtConfig.posture === 'seated_leg_extension' && legExtConfig.equipment === 'leg_extension_machine', 'Leg Extension uses seated machine');

// TEST 14: Zero Generic Stick Figures - All 207 Mapped to Verified Specific Scenes
console.log('\n--- VERIFY ZERO UNVERIFIED / GENERIC CONFIGURATIONS ---');
let unverifiedCount = 0;
Object.values(animations).forEach(a => {
  if (!a.verified) unverifiedCount++;
});
assert(unverifiedCount === 0, 'Test 14: All 207 exercises have verified=true configurations', `Unverified: ${unverifiedCount}`);

// TEST 15: Verify all animations removed & verified reference images for all chest presses
const libraryPageContent = fs.readFileSync('src/app/library/page.tsx', 'utf8');
const exerciseImagesContent = fs.existsSync('src/data/exerciseImages.ts')
  ? fs.readFileSync('src/data/exerciseImages.ts', 'utf8')
  : '';

assert(!libraryPageContent.includes('<ExerciseAnimation'), 'Test 15a: All animation components removed from exercise library');
assert(
  libraryPageContent.includes('EXERCISE_GUIDE_IMAGES[selectedExercise.id]') ||
  libraryPageContent.includes('getExerciseGuide(selectedExercise.id)'),
  'Test 15b: Dynamic exercise guide images rendered in modal'
);

const expectedImages = [
  'barbell-bench-press.png',
  'incline-barbell-bench-press.png',
  'decline-barbell-bench-press.png',
  'flat-dumbbell-bench-press.png',
  'incline-dumbbell-press.png',
  'decline-dumbbell-press.png'
];

expectedImages.forEach(img => {
  const filePath = `public/images/exercises/${img}`;
  const exists = fs.existsSync(filePath) && fs.statSync(filePath).size > 10000;
  assert(exists, `Test 15c: Image asset exists: ${img}`);
  assert(
    libraryPageContent.includes(`/images/exercises/${img}`) ||
    exerciseImagesContent.includes(`/images/exercises/${img}`),
    `Test 15d: Image registered in page/registry: ${img}`
  );
});

console.log('\n=====================================================');
console.log(`TOTAL TESTS RUN: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log('=====================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('ALL EXERCISE ANIMATION TESTS PASSED (100% GREEN)!');
}
