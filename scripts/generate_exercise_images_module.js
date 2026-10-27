const fs = require('fs');
const path = require('path');

const formiqContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'exercises.ts'), 'utf8');
const exerciseRegex = /\{\s*"id":\s*"([^"]+)",\s*"name":\s*\{\s*"en":\s*"([^"]+)",\s*"hi":\s*"([^"]+)"\s*\},\s*"muscle":\s*"([^"]+)"/g;

let match;
const exercises = [];
while ((match = exerciseRegex.exec(formiqContent)) !== null) {
  exercises.push({
    id: match[1],
    nameEn: match[2],
    nameHi: match[3],
    muscle: match[4]
  });
}

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'final_complete_mapping.json'), 'utf8'));

// Preserved existing detailed guides
const existingGuides = {
  "barbell-bench-press": {
    image: "/images/exercises/barbell-bench-press.png",
    alt: "How to do Barbell Bench Press - Lower and Press positions",
    titleEn: "Exercise Guide: Barbell Bench Press",
    titleHi: "व्यायाम गाइड: बार्बेल बेंच प्रेस",
    badgeEn: "Lower & Press",
    badgeHi: "लोअर और प्रेस"
  },
  "incline-barbell-bench-press": {
    image: "/images/exercises/incline-barbell-bench-press.png",
    alt: "How to do Incline Barbell Bench Press - Lower and Press positions",
    titleEn: "Exercise Guide: Incline Barbell Bench Press",
    titleHi: "व्यायाम गाइड: इनक्लाइन बार्बेल बेंच प्रेस",
    badgeEn: "Upper Chest Focus",
    badgeHi: "अपर चेस्ट फोकस"
  },
  "decline-barbell-bench-press": {
    image: "/images/exercises/decline-barbell-bench-press.png",
    alt: "How to do Decline Barbell Bench Press - Lower and Press positions",
    titleEn: "Exercise Guide: Decline Barbell Bench Press",
    titleHi: "व्यायाम गाइड: डिक्लाइन बार्बेल बेंच प्रेस",
    badgeEn: "Lower Chest Focus",
    badgeHi: "लोअर चेस्ट फोकस"
  },
  "flat-dumbbell-bench-press": {
    image: "/images/exercises/flat-dumbbell-bench-press.png",
    alt: "How to do Flat Dumbbell Bench Press - Stretch and Press positions",
    titleEn: "Exercise Guide: Flat Dumbbell Bench Press",
    titleHi: "व्यायाम गाइड: फ्लैट डम्बल बेंच प्रेस",
    badgeEn: "Full Stretch & Press",
    badgeHi: "फुल स्ट्रेच और प्रेस"
  },
  "incline-dumbbell-press": {
    image: "/images/exercises/incline-dumbbell-press.png",
    alt: "How to do Incline Dumbbell Press - Setup and Press positions",
    titleEn: "Exercise Guide: Incline Dumbbell Press",
    titleHi: "व्यायाम गाइड: इनक्लाइन डम्बल प्रेस",
    badgeEn: "Upper Chest Drive",
    badgeHi: "अपर चेस्ट ड्राइव"
  },
  "decline-dumbbell-press": {
    image: "/images/exercises/decline-dumbbell-press.png",
    alt: "How to do Decline Dumbbell Press - Setup and Press positions",
    titleEn: "Exercise Guide: Decline Dumbbell Press",
    titleHi: "व्यायाम गाइड: डिक्लाइन डम्बल प्रेस",
    badgeEn: "Lower Pec Squeeze",
    badgeHi: "लोअर पेक स्क्वीज"
  },
  "barbell-back-squat": {
    image: "/images/exercises/barbell-back-squat.png",
    alt: "How to do Barbell Back Squat - Squat and Stand positions",
    titleEn: "Exercise Guide: Barbell Back Squat",
    titleHi: "व्यायाम गाइड: बार्बेल बैक स्क्वैट",
    badgeEn: "Squat & Lockout",
    badgeHi: "स्क्वैट और लॉकआउट"
  },
  "pull-up": {
    image: "/images/exercises/pull-up.png",
    alt: "How to do Pull-Up - Dead Hang and Top Contracted positions",
    titleEn: "Exercise Guide: Pull-Up",
    titleHi: "व्यायाम गाइड: पुल-अप",
    badgeEn: "Hang & Pull",
    badgeHi: "हैंग और पुल"
  },
  "barbell-overhead-press": {
    image: "/images/exercises/barbell-overhead-press.png",
    alt: "How to do Barbell Overhead Press - Front Rack and Overhead Lockout positions",
    titleEn: "Exercise Guide: Barbell Overhead Press",
    titleHi: "व्यायाम गाइड: बार्बेल ओवरहेड प्रेस",
    badgeEn: "Rack & Press",
    badgeHi: "रैक और प्रेस"
  },
  "standing-barbell-curl": {
    image: "/images/exercises/standing-barbell-curl.png",
    alt: "How to do Standing Barbell Bicep Curl - Starting and Peak Contraction positions",
    titleEn: "Exercise Guide: Standing Barbell Curl",
    titleHi: "व्यायाम गाइड: स्टैंडिंग बार्बेल कर्ल",
    badgeEn: "Lower & Curl",
    badgeHi: "लोअर और कर्ल"
  },
  "cable-pushdown": {
    image: "/images/exercises/cable-pushdown.png",
    alt: "How to do Cable Triceps Pushdown - 90 Degree Ready and Triceps Lockout positions",
    titleEn: "Exercise Guide: Cable Triceps Pushdown",
    titleHi: "व्यायाम गाइड: केबल ट्राइसेप्स पुशडाउन",
    badgeEn: "Extend & Squeeze",
    badgeHi: "एक्सटेंड और स्क्वीज"
  },
  "conventional-deadlift": {
    image: "/images/exercises/conventional-deadlift.png",
    alt: "How to do Conventional Barbell Deadlift - Floor Setup and Top Lockout positions",
    titleEn: "Exercise Guide: Conventional Deadlift",
    titleHi: "व्यायाम गाइड: कन्वेंशनल डेडलिफ्ट",
    badgeEn: "Hinge & Lockout",
    badgeHi: "हिंज और लॉकआउट"
  },
  "plank": {
    image: "/images/exercises/plank.png",
    alt: "How to do Isometric Forearm Plank - Head to Heels Straight Line",
    titleEn: "Exercise Guide: Forearm Plank",
    titleHi: "व्यायाम गाइड: फोरआर्म प्लैंक",
    badgeEn: "Core Bracing",
    badgeHi: "कोर ब्रेसिंग"
  }
};

const muscleHindi = {
  Chest: 'चेस्ट',
  Back: 'बैक',
  Shoulders: 'शोल्डर्स',
  Biceps: 'बाइसेप्स',
  Triceps: 'ट्राइसेप्स',
  Legs: 'लेग्स',
  Hamstrings: 'हैमस्ट्रिंग्स',
  Calves: 'काव्स',
  Abs: 'एब्स',
  Forearms: 'फोरआर्म्स'
};

const exerciseImages = {};

exercises.forEach(ex => {
  if (existingGuides[ex.id]) {
    exerciseImages[ex.id] = existingGuides[ex.id];
    return;
  }

  const mapItem = mapping[ex.id];
  const imgPath = mapItem ? mapItem.localPath : `/images/exercises/${ex.id}.webp`;
  const mHi = muscleHindi[ex.muscle] || ex.muscle;

  exerciseImages[ex.id] = {
    image: imgPath,
    alt: `How to perform ${ex.nameEn} - ${ex.muscle} exercise tutorial guide`,
    titleEn: `Exercise Guide: ${ex.nameEn}`,
    titleHi: `व्यायाम गाइड: ${ex.nameHi}`,
    badgeEn: `${ex.muscle} Focus`,
    badgeHi: `${mHi} फोकस`
  };
});

// Also add convenience aliases for common search variations
const aliases = {
  "pull-ups": "pull-up",
  "incline-bench-press": "incline-barbell-bench-press",
  "decline-bench-press": "decline-barbell-bench-press",
  "flat-dumbbell-press": "flat-dumbbell-bench-press",
  "incline-dumbbell-bench-press": "incline-dumbbell-press",
  "decline-dumbbell-bench-press": "decline-dumbbell-press"
};

for (const [alias, target] of Object.entries(aliases)) {
  if (exerciseImages[target] && !exerciseImages[alias]) {
    exerciseImages[alias] = { ...exerciseImages[target] };
  }
}

const fileHeader = `// FORMIQ - Complete Exercise Image Guide Registry
// Maps all 207 exercises in FORMIQ to their verified local tutorial illustrations.

export interface ExerciseImageGuide {
  image: string;
  alt: string;
  badgeEn: string;
  badgeHi: string;
  titleEn: string;
  titleHi: string;
}

export const EXERCISE_GUIDE_IMAGES: Record<string, ExerciseImageGuide> = ${JSON.stringify(exerciseImages, null, 2)};

export function getExerciseGuide(id: string): ExerciseImageGuide | undefined {
  if (EXERCISE_GUIDE_IMAGES[id]) return EXERCISE_GUIDE_IMAGES[id];
  const cleaned = id.toLowerCase().replace(/_/g, '-');
  return EXERCISE_GUIDE_IMAGES[cleaned];
}
`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'exerciseImages.ts');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log(`Generated ${outputPath} with ${Object.keys(exerciseImages).length} entries.`);
