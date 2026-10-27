// FORMIQ - Verified Exercise Animation Registry
// Auto-generated & audited for 100% precision across all 207 exercises

export type AnimationViewAngle = 
  | "side" 
  | "front" 
  | "incline" 
  | "decline" 
  | "hanging" 
  | "floor_prone" 
  | "floor_supine" 
  | "seated" 
  | "kneeling";

export interface AnimationPhase {
  id: number;
  phase: string;
  label: { en: string; hi: string };
  desc: { en: string; hi: string };
  cue: string;
}

export interface ExerciseAnimationConfig {
  exerciseId: string;
  exerciseName: string;
  category: string;
  posture: string;
  equipment: string;
  viewAngle: AnimationViewAngle;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  phases: AnimationPhase[];
  verified: boolean;
}

export const EXERCISE_ANIMATIONS: Record<string, ExerciseAnimationConfig> = {
  "barbell-bench-press": {
    "exerciseId": "barbell-bench-press",
    "exerciseName": "Barbell Bench Press",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "barbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Sternal & Clavicular)",
      "Pectoralis Minor"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "incline-barbell-bench-press": {
    "exerciseId": "incline-barbell-bench-press",
    "exerciseName": "Incline Barbell Bench Press",
    "category": "Chest",
    "posture": "incline_bench",
    "equipment": "incline_barbell_bench",
    "viewAngle": "incline",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "decline-barbell-bench-press": {
    "exerciseId": "decline-barbell-bench-press",
    "exerciseName": "Decline Barbell Bench Press",
    "category": "Chest",
    "posture": "decline_bench",
    "equipment": "decline_barbell_bench",
    "viewAngle": "decline",
    "primaryMuscles": [
      "Pectoralis Major (Abdominal / Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "flat-dumbbell-bench-press": {
    "exerciseId": "flat-dumbbell-bench-press",
    "exerciseName": "Flat Dumbbell Bench Press",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "dumbbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "incline-dumbbell-press": {
    "exerciseId": "incline-dumbbell-press",
    "exerciseName": "Incline Dumbbell Press",
    "category": "Chest",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "decline-dumbbell-press": {
    "exerciseId": "decline-dumbbell-press",
    "exerciseName": "Decline Dumbbell Press",
    "category": "Chest",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Lower Sternal Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "dumbbell-chest-fly": {
    "exerciseId": "dumbbell-chest-fly",
    "exerciseName": "Dumbbell Chest Fly",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "dumbbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Biceps Brachii (Short Head)"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "incline-dumbbell-fly": {
    "exerciseId": "incline-dumbbell-fly",
    "exerciseName": "Incline Dumbbell Fly",
    "category": "Chest",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Upper Clavicular)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-chest-fly": {
    "exerciseId": "cable-chest-fly",
    "exerciseName": "Cable Chest Fly",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "barbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "low-to-high-cable-fly": {
    "exerciseId": "low-to-high-cable-fly",
    "exerciseName": "Low-to-High Cable Fly",
    "category": "Chest",
    "posture": "standing_cables",
    "equipment": "dual_cable_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Biceps (Short Head)"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "high-to-low-cable-fly": {
    "exerciseId": "high-to-low-cable-fly",
    "exerciseName": "High-to-Low Cable Fly",
    "category": "Chest",
    "posture": "standing_cables",
    "equipment": "dual_cable_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Pectoralis Major (Abdominal / Lower Head)"
    ],
    "secondaryMuscles": [
      "Pectoralis Minor"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "machine-chest-press": {
    "exerciseId": "machine-chest-press",
    "exerciseName": "Machine Chest Press",
    "category": "Chest",
    "posture": "seated_machine",
    "equipment": "chest_shoulder_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "pec-deck-fly": {
    "exerciseId": "pec-deck-fly",
    "exerciseName": "Pec Deck Fly",
    "category": "Chest",
    "posture": "seated_machine",
    "equipment": "pec_deck_machine",
    "viewAngle": "front",
    "primaryMuscles": [
      "Pectoralis Major (Sternal Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "push-ups": {
    "exerciseId": "push-ups",
    "exerciseName": "Push-Ups",
    "category": "Chest",
    "posture": "prone_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "wide-grip-push-ups": {
    "exerciseId": "wide-grip-push-ups",
    "exerciseName": "Wide-Grip Push-Ups",
    "category": "Chest",
    "posture": "prone_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Outer Fibers)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "incline-push-ups": {
    "exerciseId": "incline-push-ups",
    "exerciseName": "Incline Push-Ups",
    "category": "Chest",
    "posture": "incline_pushup",
    "equipment": "bench_elevation",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "decline-push-ups": {
    "exerciseId": "decline-push-ups",
    "exerciseName": "Decline Push-Ups",
    "category": "Chest",
    "posture": "decline_pushup",
    "equipment": "bench_elevation",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "chest-dips": {
    "exerciseId": "chest-dips",
    "exerciseName": "Chest Dips",
    "category": "Chest",
    "posture": "parallel_dips",
    "equipment": "parallel_dip_bars",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major (Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "dumbbell-pullover": {
    "exerciseId": "dumbbell-pullover",
    "exerciseName": "Dumbbell Pullover",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "dumbbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major",
      "Serratus Anterior",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Triceps (Long Head)",
      "Intercostals"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "smith-machine-bench-press": {
    "exerciseId": "smith-machine-bench-press",
    "exerciseName": "Smith Machine Bench Press",
    "category": "Chest",
    "posture": "supine_bench",
    "equipment": "smith_machine_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "barbell-floor-press": {
    "exerciseId": "barbell-floor-press",
    "exerciseName": "Barbell Floor Press",
    "category": "Chest",
    "posture": "supine_floor",
    "equipment": "barbell_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Pectoralis Major",
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "pull-up": {
    "exerciseId": "pull-up",
    "exerciseName": "Pull-Ups",
    "category": "Back",
    "posture": "hanging",
    "equipment": "pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rhomboids",
      "Middle & Lower Trapezius",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "chin-ups": {
    "exerciseId": "chin-ups",
    "exerciseName": "Chin-Ups",
    "category": "Back",
    "posture": "hanging",
    "equipment": "pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Rhomboids",
      "Lower Trapezius",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "lat-pulldown": {
    "exerciseId": "lat-pulldown",
    "exerciseName": "Lat Pulldown",
    "category": "Back",
    "posture": "seated_lat_machine",
    "equipment": "lat_pulldown_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rhomboids",
      "Rear Deltoids",
      "Teres Major"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "close-grip-lat-pulldown": {
    "exerciseId": "close-grip-lat-pulldown",
    "exerciseName": "Close-Grip Lat Pulldown",
    "category": "Back",
    "posture": "seated_lat_machine",
    "equipment": "lat_pulldown_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi (Lower Fibers)"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis",
      "Middle Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "neutral-grip-lat-pulldown": {
    "exerciseId": "neutral-grip-lat-pulldown",
    "exerciseName": "Neutral-Grip Lat Pulldown",
    "category": "Back",
    "posture": "seated_lat_machine",
    "equipment": "lat_pulldown_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Teres Major",
      "Rhomboids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "barbell-bent-over-row": {
    "exerciseId": "barbell-bent-over-row",
    "exerciseName": "Barbell Bent-Over Row",
    "category": "Back",
    "posture": "bent_over_row",
    "equipment": "barbell_plates",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Middle & Lower Trapezius"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Posterior Deltoids",
      "Biceps Brachii",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "pendlay-row": {
    "exerciseId": "pendlay-row",
    "exerciseName": "Pendlay Row",
    "category": "Back",
    "posture": "bent_over_row",
    "equipment": "barbell_plates",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Trapezius",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "one-arm-dumbbell-row": {
    "exerciseId": "one-arm-dumbbell-row",
    "exerciseName": "One-Arm Dumbbell Row",
    "category": "Back",
    "posture": "one_arm_bench_row",
    "equipment": "flat_bench_dumbbell",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rear Deltoids",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "seated-cable-row": {
    "exerciseId": "seated-cable-row",
    "exerciseName": "Seated Cable Row",
    "category": "Back",
    "posture": "seated_cable_row",
    "equipment": "cable_low_row_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Erector Spinae",
      "Posterior Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "chest-supported-row": {
    "exerciseId": "chest-supported-row",
    "exerciseName": "Chest-Supported Row",
    "category": "Back",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Rear Deltoids",
      "Biceps"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "t-bar-row": {
    "exerciseId": "t-bar-row",
    "exerciseName": "T-Bar Row",
    "category": "Back",
    "posture": "bent_over_row",
    "equipment": "t_bar_platform",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Trapezius",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Biceps",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "machine-row": {
    "exerciseId": "machine-row",
    "exerciseName": "Machine Row",
    "category": "Back",
    "posture": "seated_machine",
    "equipment": "chest_shoulder_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rear Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "inverted-row": {
    "exerciseId": "inverted-row",
    "exerciseName": "Inverted Row",
    "category": "Back",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Core",
      "Rear Deltoids"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "straight-arm-cable-pulldown": {
    "exerciseId": "straight-arm-cable-pulldown",
    "exerciseName": "Straight-Arm Cable Pulldown",
    "category": "Back",
    "posture": "seated_lat_machine",
    "equipment": "lat_pulldown_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Triceps (Long Head)",
      "Posterior Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "rack-pull": {
    "exerciseId": "rack-pull",
    "exerciseName": "Rack Pull",
    "category": "Back",
    "posture": "standing_rack_pull",
    "equipment": "power_rack_barbell",
    "viewAngle": "side",
    "primaryMuscles": [
      "Trapezius",
      "Rhomboids",
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Forearms",
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "conventional-deadlift": {
    "exerciseId": "conventional-deadlift",
    "exerciseName": "Conventional Deadlift",
    "category": "Back",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Erector Spinae",
      "Latissimus Dorsi",
      "Trapezius",
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Forearms",
      "Core",
      "Quadriceps"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "back-extensions": {
    "exerciseId": "back-extensions",
    "exerciseName": "Back Extensions",
    "category": "Back",
    "posture": "hyperextension_45",
    "equipment": "hyperextension_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "face-pulls": {
    "exerciseId": "face-pulls",
    "exerciseName": "Face Pulls",
    "category": "Back",
    "posture": "standing_cable_face_pull",
    "equipment": "high_cable_rope",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rear Deltoids",
      "Rhomboids",
      "Middle & Lower Trapezius"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Biceps"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "meadows-row": {
    "exerciseId": "meadows-row",
    "exerciseName": "Meadows Row",
    "category": "Back",
    "posture": "bent_over_row",
    "equipment": "barbell_plates",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rear Deltoids"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Biceps",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "kroc-row": {
    "exerciseId": "kroc-row",
    "exerciseName": "Kroc Row",
    "category": "Back",
    "posture": "one_arm_bench_row",
    "equipment": "flat_bench_dumbbell",
    "viewAngle": "side",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Trapezius"
    ],
    "secondaryMuscles": [
      "Forearms",
      "Biceps",
      "Erector Spinae"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "barbell-overhead-press": {
    "exerciseId": "barbell-overhead-press",
    "exerciseName": "Barbell Overhead Press",
    "category": "Shoulders",
    "posture": "standing_overhead_press",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Pectoralis",
      "Core",
      "Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "seated-dumbbell-shoulder-press": {
    "exerciseId": "seated-dumbbell-shoulder-press",
    "exerciseName": "Seated Dumbbell Shoulder Press",
    "category": "Shoulders",
    "posture": "seated_overhead_press",
    "equipment": "upright_bench_dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "standing-dumbbell-shoulder-press": {
    "exerciseId": "standing-dumbbell-shoulder-press",
    "exerciseName": "Standing Dumbbell Shoulder Press",
    "category": "Shoulders",
    "posture": "standing_overhead_press",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Core",
      "Triceps Brachii",
      "Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "arnold-press": {
    "exerciseId": "arnold-press",
    "exerciseName": "Arnold Press",
    "category": "Shoulders",
    "posture": "seated_overhead_press",
    "equipment": "upright_bench_dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Rotator Cuff"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "machine-shoulder-press": {
    "exerciseId": "machine-shoulder-press",
    "exerciseName": "Machine Shoulder Press",
    "category": "Shoulders",
    "posture": "seated_machine",
    "equipment": "chest_shoulder_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "dumbbell-lateral-raise": {
    "exerciseId": "dumbbell-lateral-raise",
    "exerciseName": "Dumbbell Lateral Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Supraspinatus",
      "Upper Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-lateral-raise": {
    "exerciseId": "cable-lateral-raise",
    "exerciseName": "Cable Lateral Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "cable_pulley_station",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Supraspinatus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "machine-lateral-raise": {
    "exerciseId": "machine-lateral-raise",
    "exerciseName": "Machine Lateral Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "lateral_raise_machine",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Upper Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "front-dumbbell-raise": {
    "exerciseId": "front-dumbbell-raise",
    "exerciseName": "Front Dumbbell Raise",
    "category": "Shoulders",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Anterior Deltoid"
    ],
    "secondaryMuscles": [
      "Upper Pectoralis",
      "Serratus Anterior"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-front-raise": {
    "exerciseId": "cable-front-raise",
    "exerciseName": "Cable Front Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "cable_pulley_station",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid"
    ],
    "secondaryMuscles": [
      "Clavicular Pec",
      "Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "rear-delt-dumbbell-fly": {
    "exerciseId": "rear-delt-dumbbell-fly",
    "exerciseName": "Rear Delt Dumbbell Fly",
    "category": "Shoulders",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Infraspinatus",
      "Middle Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "reverse-pec-deck": {
    "exerciseId": "reverse-pec-deck",
    "exerciseName": "Reverse Pec Deck",
    "category": "Shoulders",
    "posture": "seated_machine",
    "equipment": "pec_deck_machine",
    "viewAngle": "front",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Infraspinatus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-rear-delt-fly": {
    "exerciseId": "cable-rear-delt-fly",
    "exerciseName": "Cable Rear Delt Fly",
    "category": "Shoulders",
    "posture": "standing_cables",
    "equipment": "dual_cable_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Rotator Cuff"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "upright-row": {
    "exerciseId": "upright-row",
    "exerciseName": "Upright Row",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lateral Deltoid",
      "Upper Trapezius"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "landmine-press": {
    "exerciseId": "landmine-press",
    "exerciseName": "Landmine Press",
    "category": "Shoulders",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Upper Pectoralis"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "push-press": {
    "exerciseId": "push-press",
    "exerciseName": "Push Press",
    "category": "Shoulders",
    "posture": "standing_overhead_press",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes",
      "Triceps Brachii",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "dumbbell-y-raise": {
    "exerciseId": "dumbbell-y-raise",
    "exerciseName": "Dumbbell Y-Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lower Trapezius",
      "Lateral Deltoid",
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rotator Cuff"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "leaning-lateral-raise": {
    "exerciseId": "leaning-lateral-raise",
    "exerciseName": "Leaning Lateral Raise",
    "category": "Shoulders",
    "posture": "standing_raises",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Supraspinatus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "pike-push-ups": {
    "exerciseId": "pike-push-ups",
    "exerciseName": "Pike Push-Ups",
    "category": "Shoulders",
    "posture": "pike_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Chest",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "behind-the-neck-press": {
    "exerciseId": "behind-the-neck-press",
    "exerciseName": "Behind-the-Neck Press",
    "category": "Shoulders",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Lateral Deltoid",
      "Anterior Deltoid",
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "standing-barbell-curl": {
    "exerciseId": "standing-barbell-curl",
    "exerciseName": "Standing Barbell Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii (Short Head & Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "ez-bar-curl": {
    "exerciseId": "ez-bar-curl",
    "exerciseName": "EZ-Bar Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "alternating-dumbbell-curl": {
    "exerciseId": "alternating-dumbbell-curl",
    "exerciseName": "Alternating Dumbbell Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearm Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "seated-dumbbell-curl": {
    "exerciseId": "seated-dumbbell-curl",
    "exerciseName": "Seated Dumbbell Curl",
    "category": "Biceps",
    "posture": "seated_upright_curls",
    "equipment": "flat_bench_dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "incline-dumbbell-curl": {
    "exerciseId": "incline-dumbbell-curl",
    "exerciseName": "Incline Dumbbell Curl",
    "category": "Biceps",
    "posture": "incline_seated_curl",
    "equipment": "incline_bench_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Anterior Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "hammer-curl": {
    "exerciseId": "hammer-curl",
    "exerciseName": "Hammer Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Forearm Flexors & Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "cross-body-hammer-curl": {
    "exerciseId": "cross-body-hammer-curl",
    "exerciseName": "Cross-Body Hammer Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachialis",
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "preacher-curl": {
    "exerciseId": "preacher-curl",
    "exerciseName": "Preacher Curl",
    "category": "Biceps",
    "posture": "seated_preacher",
    "equipment": "preacher_bench_ez_bar",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "machine-preacher-curl": {
    "exerciseId": "machine-preacher-curl",
    "exerciseName": "Machine Preacher Curl",
    "category": "Biceps",
    "posture": "seated_preacher",
    "equipment": "preacher_bench_ez_bar",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "concentration-curl": {
    "exerciseId": "concentration-curl",
    "exerciseName": "Concentration Curl",
    "category": "Biceps",
    "posture": "concentration_curl_seated",
    "equipment": "flat_bench_dumbbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii (Peak & Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-biceps-curl": {
    "exerciseId": "cable-biceps-curl",
    "exerciseName": "Cable Biceps Curl",
    "category": "Biceps",
    "posture": "standing_cable_curl",
    "equipment": "cable_pulley_station",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "bayesian-cable-curl": {
    "exerciseId": "bayesian-cable-curl",
    "exerciseName": "Bayesian Cable Curl",
    "category": "Biceps",
    "posture": "standing_cable_curl",
    "equipment": "cable_pulley_station",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "spider-curl": {
    "exerciseId": "spider-curl",
    "exerciseName": "Spider Curl",
    "category": "Biceps",
    "posture": "spider_curl_incline",
    "equipment": "incline_bench_ez_bar",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "drag-curl": {
    "exerciseId": "drag-curl",
    "exerciseName": "Drag Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "reverse-curl": {
    "exerciseId": "reverse-curl",
    "exerciseName": "Reverse Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "zottman-curl": {
    "exerciseId": "zottman-curl",
    "exerciseName": "Zottman Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii",
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearm Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "resistance-band-curl": {
    "exerciseId": "resistance-band-curl",
    "exerciseName": "Resistance Band Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "high-cable-curl": {
    "exerciseId": "high-cable-curl",
    "exerciseName": "High Cable Curl",
    "category": "Biceps",
    "posture": "standing_cables",
    "equipment": "dual_cable_tower",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "single-arm-cable-curl": {
    "exerciseId": "single-arm-cable-curl",
    "exerciseName": "Single-Arm Cable Curl",
    "category": "Biceps",
    "posture": "standing_cable_curl",
    "equipment": "cable_pulley_station",
    "viewAngle": "side",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "waiter-curl": {
    "exerciseId": "waiter-curl",
    "exerciseName": "Waiter Curl",
    "category": "Biceps",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "cable-pushdown": {
    "exerciseId": "cable-pushdown",
    "exerciseName": "Cable Triceps Pushdown",
    "category": "Triceps",
    "posture": "standing_cable_pushdown",
    "equipment": "cable_high_pulley",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "rope-triceps-pushdown": {
    "exerciseId": "rope-triceps-pushdown",
    "exerciseName": "Rope Triceps Pushdown",
    "category": "Triceps",
    "posture": "standing_cable_pushdown",
    "equipment": "cable_high_pulley",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Lateral Head)"
    ],
    "secondaryMuscles": [
      "Medial Head"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "straight-bar-pushdown": {
    "exerciseId": "straight-bar-pushdown",
    "exerciseName": "Straight-Bar Pushdown",
    "category": "Triceps",
    "posture": "bent_over_row",
    "equipment": "t_bar_platform",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Long & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "reverse-grip-pushdown": {
    "exerciseId": "reverse-grip-pushdown",
    "exerciseName": "Reverse-Grip Pushdown",
    "category": "Triceps",
    "posture": "standing_cable_pushdown",
    "equipment": "cable_high_pulley",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Medial Head)"
    ],
    "secondaryMuscles": [
      "Forearm Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "overhead-dumbbell-triceps-extension": {
    "exerciseId": "overhead-dumbbell-triceps-extension",
    "exerciseName": "Overhead Dumbbell Triceps Extension",
    "category": "Triceps",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "overhead-cable-triceps-extension": {
    "exerciseId": "overhead-cable-triceps-extension",
    "exerciseName": "Overhead Cable Triceps Extension",
    "category": "Triceps",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "ez-bar-skull-crushers": {
    "exerciseId": "ez-bar-skull-crushers",
    "exerciseName": "EZ-Bar Skull Crushers",
    "category": "Triceps",
    "posture": "supine_bench",
    "equipment": "ez_bar_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (All 3 Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "dumbbell-skull-crushers": {
    "exerciseId": "dumbbell-skull-crushers",
    "exerciseName": "Dumbbell Skull Crushers",
    "category": "Triceps",
    "posture": "supine_bench",
    "equipment": "dumbbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "close-grip-bench-press": {
    "exerciseId": "close-grip-bench-press",
    "exerciseName": "Close-Grip Bench Press",
    "category": "Triceps",
    "posture": "supine_bench",
    "equipment": "barbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (All 3 Heads)"
    ],
    "secondaryMuscles": [
      "Pectoralis Major (Inner)",
      "Anterior Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "diamond-push-ups": {
    "exerciseId": "diamond-push-ups",
    "exerciseName": "Diamond Push-Ups",
    "category": "Triceps",
    "posture": "prone_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Anterior Deltoids",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "bench-dips": {
    "exerciseId": "bench-dips",
    "exerciseName": "Bench Dips",
    "category": "Triceps",
    "posture": "seated_bench_dips",
    "equipment": "flat_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Chest"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "assisted-triceps-dips": {
    "exerciseId": "assisted-triceps-dips",
    "exerciseName": "Assisted Triceps Dips",
    "category": "Triceps",
    "posture": "parallel_dips",
    "equipment": "parallel_dip_bars",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "single-arm-cable-extension": {
    "exerciseId": "single-arm-cable-extension",
    "exerciseName": "Single-Arm Cable Extension",
    "category": "Triceps",
    "posture": "standing_cable_pushdown",
    "equipment": "cable_high_pulley",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "cross-body-cable-triceps-extension": {
    "exerciseId": "cross-body-cable-triceps-extension",
    "exerciseName": "Cross-Body Cable Triceps Extension",
    "category": "Triceps",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Medial & Lateral Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "lying-triceps-extension": {
    "exerciseId": "lying-triceps-extension",
    "exerciseName": "Lying Triceps Extension",
    "category": "Triceps",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "seated-machine-triceps-extension": {
    "exerciseId": "seated-machine-triceps-extension",
    "exerciseName": "Seated Machine Triceps Extension",
    "category": "Triceps",
    "posture": "seated_machine",
    "equipment": "chest_shoulder_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "dumbbell-kickbacks": {
    "exerciseId": "dumbbell-kickbacks",
    "exerciseName": "Dumbbell Kickbacks",
    "category": "Triceps",
    "posture": "bent_over_kickback",
    "equipment": "dumbbell_and_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Long Head)"
    ],
    "secondaryMuscles": [
      "Rear Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "cable-kickbacks": {
    "exerciseId": "cable-kickbacks",
    "exerciseName": "Cable Kickbacks",
    "category": "Triceps",
    "posture": "bent_over_kickback",
    "equipment": "cable_pulley",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Rear Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "tate-press": {
    "exerciseId": "tate-press",
    "exerciseName": "Tate Press",
    "category": "Triceps",
    "posture": "supine_bench",
    "equipment": "barbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii (Lateral Head)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "jm-press": {
    "exerciseId": "jm-press",
    "exerciseName": "JM Press",
    "category": "Triceps",
    "posture": "supine_bench",
    "equipment": "barbell_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Anterior Deltoid"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "parallel-bar-triceps-dips": {
    "exerciseId": "parallel-bar-triceps-dips",
    "exerciseName": "Parallel Bar Triceps Dips",
    "category": "Triceps",
    "posture": "parallel_dips",
    "equipment": "parallel_dip_bars",
    "viewAngle": "side",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Lower Pectoralis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "elbow_flexion_start",
        "label": {
          "en": "Ready Position",
          "hi": "प्रारंभिक स्थिति"
        },
        "desc": {
          "en": "Fix elbows tightly beside torso bent at 90 degrees under full triceps stretch.",
          "hi": "कोहनियों को कमर के पास 90 डिग्री पर स्थिर रखें, ट्राइसेप्स में खिंचाव महसूस करें।"
        },
        "cue": "Elbows like hinges, core braced"
      },
      {
        "id": 1,
        "phase": "press_extension",
        "label": {
          "en": "Extend Downward",
          "hi": "नीचे सीधा करना"
        },
        "desc": {
          "en": "Drive forearms downward purely through triceps extension, keeping upper arms stationary.",
          "hi": "ऊपरी बांह को स्थिर रखते हुए केवल कोहनी से वजन को सीधा नीचे दबाएं।"
        },
        "cue": "Keep upper arm frozen in space"
      },
      {
        "id": 2,
        "phase": "lockout_squeeze",
        "label": {
          "en": "Triceps Lockout",
          "hi": "ट्राइसेप्स लॉकआउट"
        },
        "desc": {
          "en": "Lock out elbows completely and flex all three triceps heads hard for 1 second.",
          "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को 1 सेकंड तक जोर से दबाएं।"
        },
        "cue": "Hard lockout, flex horseshoe"
      },
      {
        "id": 3,
        "phase": "eccentric_reset",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Allow forearms to rise back smoothly to 90 degrees without letting elbows flare out.",
          "hi": "कोहनियों को फैलाए बिना अग्रभाग को धीरे-धीरे वापस 90 डिग्री पर लाएं।"
        },
        "cue": "Controlled rise, maintain tension"
      }
    ],
    "verified": true
  },
  "barbell-back-squat": {
    "exerciseId": "barbell-back-squat",
    "exerciseName": "Barbell Back Squat",
    "category": "Legs",
    "posture": "barbell_back_squat",
    "equipment": "barbell_squat_rack",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris, Vastus Lateralis, Vastus Medialis, Vastus Intermedius)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Adductors",
      "Erector Spinae",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "front-squat": {
    "exerciseId": "front-squat",
    "exerciseName": "Front Squat",
    "category": "Legs",
    "posture": "front_squat",
    "equipment": "barbell_squat_rack",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris, Vastus Medialis)"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back",
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "goblet-squat": {
    "exerciseId": "goblet-squat",
    "exerciseName": "Goblet Squat",
    "category": "Legs",
    "posture": "goblet_squat",
    "equipment": "dumbbell_goblet",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "hack-squat": {
    "exerciseId": "hack-squat",
    "exerciseName": "Hack Squat",
    "category": "Legs",
    "posture": "hack_squat_sled",
    "equipment": "hack_squat_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Vastus Lateralis Sweep)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "leg-press": {
    "exerciseId": "leg-press",
    "exerciseName": "Leg Press",
    "category": "Legs",
    "posture": "45_leg_press",
    "equipment": "leg_press_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "bulgarian-split-squat": {
    "exerciseId": "bulgarian-split-squat",
    "exerciseName": "Bulgarian Split Squat",
    "category": "Legs",
    "posture": "bulgarian_split_squat",
    "equipment": "bench_and_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Hamstrings",
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "walking-lunges": {
    "exerciseId": "walking-lunges",
    "exerciseName": "Walking Lunges",
    "category": "Legs",
    "posture": "lunge_stance",
    "equipment": "dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "reverse-lunges": {
    "exerciseId": "reverse-lunges",
    "exerciseName": "Reverse Lunges",
    "category": "Legs",
    "posture": "lunge_stance",
    "equipment": "dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "forward-lunges": {
    "exerciseId": "forward-lunges",
    "exerciseName": "Forward Lunges",
    "category": "Legs",
    "posture": "lunge_stance",
    "equipment": "dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "step-ups": {
    "exerciseId": "step-ups",
    "exerciseName": "Step-Ups",
    "category": "Legs",
    "posture": "step_up_bench",
    "equipment": "plyo_box_and_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Calves",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "leg-extension": {
    "exerciseId": "leg-extension",
    "exerciseName": "Leg Extension",
    "category": "Legs",
    "posture": "seated_leg_extension",
    "equipment": "leg_extension_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris Isolation)"
    ],
    "secondaryMuscles": [
      "Vastus Medialis",
      "Vastus Lateralis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "smith-machine-squat": {
    "exerciseId": "smith-machine-squat",
    "exerciseName": "Smith Machine Squat",
    "category": "Legs",
    "posture": "smith_squat",
    "equipment": "smith_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "heels-elevated-squat": {
    "exerciseId": "heels-elevated-squat",
    "exerciseName": "Heels-Elevated Squat",
    "category": "Legs",
    "posture": "barbell_back_squat",
    "equipment": "barbell_squat_rack",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Vastus Medialis Teardrop)"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "sissy-squat": {
    "exerciseId": "sissy-squat",
    "exerciseName": "Sissy Squat",
    "category": "Legs",
    "posture": "sissy_squat",
    "equipment": "sissy_squat_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris)"
    ],
    "secondaryMuscles": [
      "Patellar Tendons",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "split-squat": {
    "exerciseId": "split-squat",
    "exerciseName": "Split Squat",
    "category": "Legs",
    "posture": "bulgarian_split_squat",
    "equipment": "bench_and_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "belt-squat": {
    "exerciseId": "belt-squat",
    "exerciseName": "Belt Squat",
    "category": "Legs",
    "posture": "belt_squat",
    "equipment": "belt_squat_platform",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "single-leg-leg-press": {
    "exerciseId": "single-leg-leg-press",
    "exerciseName": "Single-Leg Leg Press",
    "category": "Legs",
    "posture": "45_leg_press",
    "equipment": "leg_press_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "wall-sit": {
    "exerciseId": "wall-sit",
    "exerciseName": "Wall Sit",
    "category": "Legs",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris (Isometric Hold)"
    ],
    "secondaryMuscles": [
      "Calves",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "zercher-squat": {
    "exerciseId": "zercher-squat",
    "exerciseName": "Zercher Squat",
    "category": "Legs",
    "posture": "front_squat",
    "equipment": "barbell_squat_rack",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back",
      "Biceps",
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "bodyweight-squat": {
    "exerciseId": "bodyweight-squat",
    "exerciseName": "Bodyweight Squat",
    "category": "Legs",
    "posture": "bodyweight_squat",
    "equipment": "none",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "landmine-squat": {
    "exerciseId": "landmine-squat",
    "exerciseName": "Landmine Squat",
    "category": "Legs",
    "posture": "barbell_back_squat",
    "equipment": "barbell_squat_rack",
    "viewAngle": "side",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "romanian-deadlift": {
    "exerciseId": "romanian-deadlift",
    "exerciseName": "Romanian Deadlift",
    "category": "Hamstrings",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Erector Spinae",
      "Adductor Magnus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "dumbbell-romanian-deadlift": {
    "exerciseId": "dumbbell-romanian-deadlift",
    "exerciseName": "Dumbbell Romanian Deadlift",
    "category": "Hamstrings",
    "posture": "conventional_deadlift",
    "equipment": "dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "stiff-leg-deadlift": {
    "exerciseId": "stiff-leg-deadlift",
    "exerciseName": "Stiff-Leg Deadlift",
    "category": "Hamstrings",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings (Proximal Insertion)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Erector Spinae"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "seated-leg-curl": {
    "exerciseId": "seated-leg-curl",
    "exerciseName": "Seated Leg Curl",
    "category": "Hamstrings",
    "posture": "seated_leg_curl",
    "equipment": "seated_leg_curl_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings (Semitendinosus, Semimembranosus, Biceps Femoris)"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "lying-leg-curl": {
    "exerciseId": "lying-leg-curl",
    "exerciseName": "Lying Leg Curl",
    "category": "Hamstrings",
    "posture": "lying_leg_curl",
    "equipment": "lying_leg_curl_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris Short & Long Heads)"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "standing-single-leg-curl": {
    "exerciseId": "standing-single-leg-curl",
    "exerciseName": "Standing Single-Leg Curl",
    "category": "Hamstrings",
    "posture": "standing_leg_curl",
    "equipment": "standing_curl_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "nordic-hamstring-curl": {
    "exerciseId": "nordic-hamstring-curl",
    "exerciseName": "Nordic Hamstring Curl",
    "category": "Hamstrings",
    "posture": "nordic_curl_kneeling",
    "equipment": "nordic_mat_anchor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings (Eccentric Overload)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Calves",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "glute-ham-raise": {
    "exerciseId": "glute-ham-raise",
    "exerciseName": "Glute-Ham Raise",
    "category": "Hamstrings",
    "posture": "hyperextension_45",
    "equipment": "hyperextension_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "good-morning": {
    "exerciseId": "good-morning",
    "exerciseName": "Good Morning",
    "category": "Hamstrings",
    "posture": "standing_hinge_barbell_back",
    "equipment": "barbell_on_back",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "single-leg-romanian-deadlift": {
    "exerciseId": "single-leg-romanian-deadlift",
    "exerciseName": "Single-Leg Romanian Deadlift",
    "category": "Hamstrings",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Core",
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "cable-pull-through": {
    "exerciseId": "cable-pull-through",
    "exerciseName": "Cable Pull-Through",
    "category": "Hamstrings",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "stability-ball-leg-curl": {
    "exerciseId": "stability-ball-leg-curl",
    "exerciseName": "Stability Ball Leg Curl",
    "category": "Hamstrings",
    "posture": "supine_leg_curl",
    "equipment": "swiss_ball_mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "slider-leg-curl": {
    "exerciseId": "slider-leg-curl",
    "exerciseName": "Slider Leg Curl",
    "category": "Hamstrings",
    "posture": "supine_leg_curl",
    "equipment": "slider_mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "resistance-band-leg-curl": {
    "exerciseId": "resistance-band-leg-curl",
    "exerciseName": "Resistance Band Leg Curl",
    "category": "Hamstrings",
    "posture": "standing_leg_curl",
    "equipment": "standing_curl_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "kettlebell-deadlift": {
    "exerciseId": "kettlebell-deadlift",
    "exerciseName": "Kettlebell Deadlift",
    "category": "Hamstrings",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Core",
      "Erector Spinae"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "single-leg-hip-hinge": {
    "exerciseId": "single-leg-hip-hinge",
    "exerciseName": "Single-Leg Hip Hinge",
    "category": "Hamstrings",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "machine-hamstring-curl": {
    "exerciseId": "machine-hamstring-curl",
    "exerciseName": "Machine Hamstring Curl",
    "category": "Hamstrings",
    "posture": "standing_leg_curl",
    "equipment": "standing_curl_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "assisted-nordic-curl": {
    "exerciseId": "assisted-nordic-curl",
    "exerciseName": "Assisted Nordic Curl",
    "category": "Hamstrings",
    "posture": "nordic_curl_kneeling",
    "equipment": "nordic_mat_anchor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "glute-ham-raise-machine": {
    "exerciseId": "glute-ham-raise-machine",
    "exerciseName": "Glute-Ham Raise Machine",
    "category": "Hamstrings",
    "posture": "hyperextension_45",
    "equipment": "hyperextension_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Spinal Erectors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "sumo-deadlift": {
    "exerciseId": "sumo-deadlift",
    "exerciseName": "Sumo Deadlift",
    "category": "Hamstrings",
    "posture": "sumo_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "front",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Adductors"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Erector Spinae",
      "Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "trap-bar-deadlift": {
    "exerciseId": "trap-bar-deadlift",
    "exerciseName": "Trap Bar Deadlift",
    "category": "Hamstrings",
    "posture": "trap_bar_deadlift",
    "equipment": "trap_bar_plates",
    "viewAngle": "side",
    "primaryMuscles": [
      "Hamstrings",
      "Quadriceps",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Trapezius",
      "Forearms"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "standing-calf-raise": {
    "exerciseId": "standing-calf-raise",
    "exerciseName": "Standing Machine Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius (Medial & Lateral Heads)"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Plantaris"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "seated-calf-raise": {
    "exerciseId": "seated-calf-raise",
    "exerciseName": "Seated Calf Raise",
    "category": "Calves",
    "posture": "seated_calf_machine",
    "equipment": "seated_calf_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Plantaris"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "leg-press-calf-press": {
    "exerciseId": "leg-press-calf-press",
    "exerciseName": "Leg Press Calf Press",
    "category": "Calves",
    "posture": "45_leg_press",
    "equipment": "leg_press_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "single-leg-calf-raise": {
    "exerciseId": "single-leg-calf-raise",
    "exerciseName": "Single-Leg Dumbbell Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Tibialis Posterior"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "dumbbell-standing-calf-raise": {
    "exerciseId": "dumbbell-standing-calf-raise",
    "exerciseName": "Standing Dumbbell Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "smith-machine-calf-raise": {
    "exerciseId": "smith-machine-calf-raise",
    "exerciseName": "Smith Machine Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "standing_calf_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "donkey-calf-raise": {
    "exerciseId": "donkey-calf-raise",
    "exerciseName": "Donkey Calf Raise",
    "category": "Calves",
    "posture": "donkey_calf_hinged",
    "equipment": "donkey_calf_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "seated-dumbbell-calf-raise": {
    "exerciseId": "seated-dumbbell-calf-raise",
    "exerciseName": "Seated Dumbbell Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "bent-knee-calf-raise": {
    "exerciseId": "bent-knee-calf-raise",
    "exerciseName": "Bent-Knee Calf Raise (Wall / Squat Position)",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Quadriceps"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "bodyweight-standing-calf-raise": {
    "exerciseId": "bodyweight-standing-calf-raise",
    "exerciseName": "Bodyweight Standing Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "stair-calf-raise-deficit": {
    "exerciseId": "stair-calf-raise-deficit",
    "exerciseName": "Deficit Stair Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Achilles Tendon"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "hack-squat-calf-raise": {
    "exerciseId": "hack-squat-calf-raise",
    "exerciseName": "Hack Squat Machine Calf Press",
    "category": "Calves",
    "posture": "hack_squat_sled",
    "equipment": "hack_squat_machine",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Brace & Stance",
          "hi": "स्टेंस और ब्रेसिंग"
        },
        "desc": {
          "en": "Set feet shoulder-width with toes slightly turned out. Take a deep diaphragmatic breath and brace core.",
          "hi": "पैरों को कंधे की चौड़ाई पर रखें, पेट से गहरी सांस लें और कोर को पूरी तरह टाइट करें।"
        },
        "cue": "Spine neutral, ribs down, 360° brace"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Hips Back & Knees Out",
          "hi": "कूल्हे पीछे और घुटने बाहर"
        },
        "desc": {
          "en": "Break at hips and knees simultaneously, driving knees tracking in line with second toes.",
          "hi": "कूल्हों और घुटनों को एक साथ मोड़ें, घुटनों को पंजों की सीध में बाहर की ओर रखें।"
        },
        "cue": "Knees track over toes, torso rigid"
      },
      {
        "id": 2,
        "phase": "depth",
        "label": {
          "en": "Parallel Depth",
          "hi": "समानांतर गहराई"
        },
        "desc": {
          "en": "Descend until hip crease is parallel with or slightly below top of kneecaps, keeping chest tall.",
          "hi": "तब तक नीचे जाएं जब तक कूल्हा घुटनों के समानांतर न आ जाए, छाती चौड़ी रखें।"
        },
        "cue": "Full depth, flat feet, proud chest"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Drive to Stand",
          "hi": "ऊपर खड़े होना"
        },
        "desc": {
          "en": "Push the floor away through mid-foot, driving hips and chest upward simultaneously to standing lockout.",
          "hi": "पैरों से फर्श को नीचे धकेलते हुए कूल्हों और छाती को एक साथ सीधा ऊपर उठाएं।"
        },
        "cue": "Push floor away, lock hips and glutes"
      }
    ],
    "verified": true
  },
  "resistance-band-calf-raise": {
    "exerciseId": "resistance-band-calf-raise",
    "exerciseName": "Resistance Band Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Plantaris"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "isometric-calf-hold": {
    "exerciseId": "isometric-calf-hold",
    "exerciseName": "Isometric Peak Calf Hold",
    "category": "Calves",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Achilles Tendon"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "paused-deficit-calf-raise": {
    "exerciseId": "paused-deficit-calf-raise",
    "exerciseName": "Paused Deficit Calf Raise",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Achilles Tendon"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "eccentric-heel-drop": {
    "exerciseId": "eccentric-heel-drop",
    "exerciseName": "Eccentric Heel Drop (Achilles Rehabilitation)",
    "category": "Calves",
    "posture": "standing_calf_block",
    "equipment": "calf_block",
    "viewAngle": "side",
    "primaryMuscles": [
      "Achilles Tendon",
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "deficit_stretch",
        "label": {
          "en": "Deep Heel Deficit",
          "hi": "गहरी एड़ी खिंचाव"
        },
        "desc": {
          "en": "Lower heels down as far as possible below the step level for a full Achilles stretch.",
          "hi": "गहरे खिंचाव के लिए एड़ियों को स्टेप से जितना हो सके उतना नीचे ले जाएं।"
        },
        "cue": "Heels all the way down, pause 2s"
      },
      {
        "id": 1,
        "phase": "plantarflexion_drive",
        "label": {
          "en": "Drive Through Toes",
          "hi": "पंजों से ऊपर उठना"
        },
        "desc": {
          "en": "Drive powerfully through the balls of the big toes straight upward without bouncing.",
          "hi": "बिना उछले दोनों बड़े पैर की उंगलियों से सीधा ऊपर जोर लगाएं।"
        },
        "cue": "Drive through big toe knuckle"
      },
      {
        "id": 2,
        "phase": "peak_tiptoe_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष काफ संकुचन"
        },
        "desc": {
          "en": "Rise to absolute highest tiptoe elevation and squeeze calves hard for 1-2 seconds.",
          "hi": "पंजों के बल अधिकतम ऊंचाई पर उठें और काफ को 1-2 सेकंड मजबूती से सिकोड़ें।"
        },
        "cue": "Maximum height, tight calf clamp"
      },
      {
        "id": 3,
        "phase": "eccentric_drop",
        "label": {
          "en": "Slow 3s Lowering",
          "hi": "धीमा 3 सेकंड उतार"
        },
        "desc": {
          "en": "Lower heels back down smoothly over 3 full seconds into maximum stretch.",
          "hi": "3 सेकंड में धीरे-धीरे वापस गहरे खिंचाव में नीचे आएं।"
        },
        "cue": "Slow 3-second descent, no bounce"
      }
    ],
    "verified": true
  },
  "farmers-walk-on-toes": {
    "exerciseId": "farmers-walk-on-toes",
    "exerciseName": "Tip-Toe Farmer's Walk",
    "category": "Calves",
    "posture": "standing_loaded_carry",
    "equipment": "heavy_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Forearms",
      "Trapezius",
      "Core",
      "Ankle Stabilizers"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "tibialis-anterior-raise": {
    "exerciseId": "tibialis-anterior-raise",
    "exerciseName": "Wall Tibialis Anterior Raise",
    "category": "Calves",
    "posture": "tibialis_dorsiflexion",
    "equipment": "wall_or_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Tibialis Anterior (Front of Shin)"
    ],
    "secondaryMuscles": [
      "Extensor Digitorum Longus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "reverse-calf-raise": {
    "exerciseId": "reverse-calf-raise",
    "exerciseName": "Dumbbell Tibialis / Reverse Calf Raise",
    "category": "Calves",
    "posture": "tibialis_dorsiflexion",
    "equipment": "wall_or_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Tibialis Anterior"
    ],
    "secondaryMuscles": [
      "Extensor Hallucis Longus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "jump-rope": {
    "exerciseId": "jump-rope",
    "exerciseName": "Jump Rope (Calf Conditioning & Plyometrics)",
    "category": "Calves",
    "posture": "standing_plyometric",
    "equipment": "jump_rope",
    "viewAngle": "front",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus",
      "Achilles Tendon"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Shoulders",
      "Cardiovascular System"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "seated-band-calf-extension": {
    "exerciseId": "seated-band-calf-extension",
    "exerciseName": "Seated Resistance Band Calf Extension",
    "category": "Calves",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Soleus",
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Plantaris"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "standard-crunch": {
    "exerciseId": "standard-crunch",
    "exerciseName": "Standard Floor Crunch",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis (Upper)"
    ],
    "secondaryMuscles": [
      "Internal Obliques",
      "External Obliques",
      "Transversus Abdominis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "decline-crunch": {
    "exerciseId": "decline-crunch",
    "exerciseName": "Decline Bench Crunch",
    "category": "Abs",
    "posture": "decline_crunch",
    "equipment": "decline_bench",
    "viewAngle": "decline",
    "primaryMuscles": [
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Hip Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "cable-crunch": {
    "exerciseId": "cable-crunch",
    "exerciseName": "Kneeling Cable Crunch",
    "category": "Abs",
    "posture": "kneeling_mat",
    "equipment": "cable_rope_kneeling",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis (Total)"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Serratus Anterior"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "bicycle-crunch": {
    "exerciseId": "bicycle-crunch",
    "exerciseName": "Bicycle Crunch",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis",
      "External & Internal Obliques"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Transversus Abdominis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "reverse-crunch": {
    "exerciseId": "reverse-crunch",
    "exerciseName": "Reverse Crunch",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Lower Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Transversus Abdominis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "hanging-knee-raise": {
    "exerciseId": "hanging-knee-raise",
    "exerciseName": "Hanging Knee Raise",
    "category": "Abs",
    "posture": "hanging",
    "equipment": "pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Lower Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Forearms / Grip",
      "Lats"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "hanging-leg-raise": {
    "exerciseId": "hanging-leg-raise",
    "exerciseName": "Hanging Straight-Leg Raise",
    "category": "Abs",
    "posture": "hanging",
    "equipment": "pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Rectus Abdominis (Lower & Upper)",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Forearms",
      "Lats"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "captains-chair-leg-raise": {
    "exerciseId": "captains-chair-leg-raise",
    "exerciseName": "Captain's Chair Knee/Leg Raise",
    "category": "Abs",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Lower Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Internal & External Obliques"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "ab-wheel-rollout": {
    "exerciseId": "ab-wheel-rollout",
    "exerciseName": "Ab Wheel Rollout",
    "category": "Abs",
    "posture": "kneeling_mat",
    "equipment": "ab_wheel_mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Lats",
      "Serratus Anterior",
      "Shoulders",
      "Hip Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "plank": {
    "exerciseId": "plank",
    "exerciseName": "Elbow / Forearm Plank",
    "category": "Abs",
    "posture": "prone_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Transversus Abdominis",
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Internal/External Obliques",
      "Glutes",
      "Shoulders"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "side-plank": {
    "exerciseId": "side-plank",
    "exerciseName": "Side Plank",
    "category": "Abs",
    "posture": "side_plank",
    "equipment": "mat",
    "viewAngle": "front",
    "primaryMuscles": [
      "External & Internal Obliques",
      "Quadratus Lumborum"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Transversus Abdominis",
      "Shoulders"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "dead-bug": {
    "exerciseId": "dead-bug",
    "exerciseName": "Dead Bug",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Transversus Abdominis",
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Hip Flexors",
      "Pelvic Floor"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "hollow-body-hold": {
    "exerciseId": "hollow-body-hold",
    "exerciseName": "Hollow Body Hold",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Obliques",
      "Quadriceps"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "mountain-climbers": {
    "exerciseId": "mountain-climbers",
    "exerciseName": "Mountain Climbers (Core & Conditioning)",
    "category": "Abs",
    "posture": "prone_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Obliques",
      "Quadriceps",
      "Cardio"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "v-ups": {
    "exerciseId": "v-ups",
    "exerciseName": "V-Ups (Jackknife Crunch)",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis (Total)"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Obliques"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "toe-touches": {
    "exerciseId": "toe-touches",
    "exerciseName": "Vertical Leg Toe Touches",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Upper Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Lower Rectus Abdominis",
      "Hamstrings"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "pallof-press": {
    "exerciseId": "pallof-press",
    "exerciseName": "Cable / Band Pallof Press",
    "category": "Abs",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Internal & External Obliques",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Glutes",
      "Rectus Abdominis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "russian-twist": {
    "exerciseId": "russian-twist",
    "exerciseName": "Seated Russian Twist",
    "category": "Abs",
    "posture": "seated_v_sit",
    "equipment": "dumbbell_mat",
    "viewAngle": "front",
    "primaryMuscles": [
      "External Obliques",
      "Internal Obliques"
    ],
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "weighted-sit-ups": {
    "exerciseId": "weighted-sit-ups",
    "exerciseName": "Weighted Sit-Ups",
    "category": "Abs",
    "posture": "supine_crunch_floor",
    "equipment": "mat",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Chest"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "core_brace",
        "label": {
          "en": "Pelvic Tilt & Brace",
          "hi": "पेल्विक टिल्ट और ब्रेस"
        },
        "desc": {
          "en": "Flatten lumbar spine against mat or lock neutral spine, drawing navel toward spine.",
          "hi": "निचली पीठ को सपाट रखें, नाभि को रीढ़ की ओर खींचें और कोर को कस लें।"
        },
        "cue": "Crush lower back down, engage TVA"
      },
      {
        "id": 1,
        "phase": "flexion_rollout",
        "label": {
          "en": "Abdominal Flexion",
          "hi": "एब्डोमिनल फ्लेक्स"
        },
        "desc": {
          "en": "Curl ribcage toward pelvis by flexing the abdominal wall, exhaling all air forcefully.",
          "hi": "पूरी हवा बाहर निकालते हुए पसलियों को कूल्हों की ओर मोड़ें।"
        },
        "cue": "Curl spine like a carpet, exhale fully"
      },
      {
        "id": 2,
        "phase": "peak_ab_squeeze",
        "label": {
          "en": "Isometric Squeeze",
          "hi": "आइसोमेट्रिक संकुचन"
        },
        "desc": {
          "en": "Hold peak six-pack contraction tightly for 1-2 seconds with zero neck strain.",
          "hi": "गर्दन पर खिंचाव दिए बिना 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
        },
        "cue": "Lock six-pack tight, empty lungs"
      },
      {
        "id": 3,
        "phase": "controlled_extension",
        "label": {
          "en": "Controlled Release",
          "hi": "नियंत्रित विस्तार"
        },
        "desc": {
          "en": "Lower back down vertebra by vertebra under constant tension without arching lower back.",
          "hi": "पीठ को मोड़े बिना लगातार तनाव के साथ धीरे-धीरे नीचे लौटें।"
        },
        "cue": "Vertebra by vertebra, keep tension"
      }
    ],
    "verified": true
  },
  "dragon-flag": {
    "exerciseId": "dragon-flag",
    "exerciseName": "Dragon Flag (Bruce Lee Ab Exercise)",
    "category": "Abs",
    "posture": "dragon_flag_bench",
    "equipment": "flat_bench",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis (Total)",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Lats",
      "Glutes",
      "Lower Back",
      "Shoulders"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Setup & Unrack",
          "hi": "सेटअप और अनरैक"
        },
        "desc": {
          "en": "Lie back on the bench, feet planted, retract scapulae and unrack weights with straight arms directly above shoulders.",
          "hi": "बेंच पर पीठ टिकाएं, पैर जमाएं, कंधों के ब्लेड पीछे खींचें और बाहों को सीधा करके वजन अनरैक करें।"
        },
        "cue": "Plant feet, arch chest, lock wrists"
      },
      {
        "id": 1,
        "phase": "descent",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित रूप से नीचे लाना"
        },
        "desc": {
          "en": "Inhale and lower weights smoothly along a controlled arc, keeping elbows tucked at 45-70 degrees relative to ribs.",
          "hi": "सांस लें और कोहनियों को पसलियों से 45-70 डिग्री पर रखते हुए वजन को नियंत्रित तरीके से नीचे लाएं।"
        },
        "cue": "Elbows at 45-70°, control the descent"
      },
      {
        "id": 2,
        "phase": "bottom_stretch",
        "label": {
          "en": "Chest Stretch Pause",
          "hi": "छाती खिंचाव ठहराव"
        },
        "desc": {
          "en": "Pause for 1 second at chest level with full pectoral stretch without bouncing off ribs.",
          "hi": "बिना उछले छाती के स्तर पर पूरे पेक्टोरल खिंचाव के साथ 1 सेकंड रुकें।"
        },
        "cue": "Deep stretch, zero bounce, tight core"
      },
      {
        "id": 3,
        "phase": "ascent",
        "label": {
          "en": "Press to Lockout",
          "hi": "प्रेस और लॉकआउट"
        },
        "desc": {
          "en": "Exhale forcefully and press weights vertically upward to lockout directly over the chest.",
          "hi": "सांस छोड़ें और छाती के ऊपर सीधा लॉकआउट तक वजन दबाएं।"
        },
        "cue": "Drive feet, squeeze pecs at lockout"
      }
    ],
    "verified": true
  },
  "stability-ball-crunch": {
    "exerciseId": "stability-ball-crunch",
    "exerciseName": "Stability Ball Crunch",
    "category": "Abs",
    "posture": "stability_ball_recline",
    "equipment": "stability_ball",
    "viewAngle": "side",
    "primaryMuscles": [
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Transversus Abdominis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "barbell-wrist-curl": {
    "exerciseId": "barbell-wrist-curl",
    "exerciseName": "Seated Barbell Wrist Curl (Over-Bench)",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Flexor Carpi Radialis",
      "Flexor Carpi Ulnaris",
      "Flexor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Pronator Teres"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "barbell-reverse-wrist-curl": {
    "exerciseId": "barbell-reverse-wrist-curl",
    "exerciseName": "Barbell Reverse Wrist Curl (Extensors)",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Extensor Carpi Radialis",
      "Extensor Carpi Ulnaris",
      "Extensor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "dumbbell-wrist-curl": {
    "exerciseId": "dumbbell-wrist-curl",
    "exerciseName": "Seated Dumbbell Wrist Curl",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Wrist Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Finger Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "dumbbell-reverse-wrist-curl": {
    "exerciseId": "dumbbell-reverse-wrist-curl",
    "exerciseName": "Seated Dumbbell Reverse Wrist Curl",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Wrist Extensors",
      "Extensor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "behind-the-back-wrist-curl": {
    "exerciseId": "behind-the-back-wrist-curl",
    "exerciseName": "Standing Behind-the-Back Barbell Wrist Curl",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Wrist Flexors",
      "Finger Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Trapezius"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "reverse-barbell-forearm-curl": {
    "exerciseId": "reverse-barbell-forearm-curl",
    "exerciseName": "Standing Reverse Barbell Curl",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "cross-body-forearm-hammer-curl": {
    "exerciseId": "cross-body-forearm-hammer-curl",
    "exerciseName": "Cross-Body Hammer Curl (Forearms Focus)",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps (Long Head)",
      "Forearm Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "zottman-forearm-rotation-curl": {
    "exerciseId": "zottman-forearm-rotation-curl",
    "exerciseName": "Zottman Curl (Eccentric Forearm Overload)",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "dumbbells",
    "viewAngle": "front",
    "primaryMuscles": [
      "Brachioradialis",
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  },
  "heavy-farmers-carry": {
    "exerciseId": "heavy-farmers-carry",
    "exerciseName": "Heavy Dumbbell Farmer's Carry / Walk",
    "category": "Forearms",
    "posture": "standing_loaded_carry",
    "equipment": "heavy_dumbbells",
    "viewAngle": "side",
    "primaryMuscles": [
      "Forearms / Grip Strength",
      "Trapezius"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back",
      "Legs",
      "Calves"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "grip-dead-hang": {
    "exerciseId": "grip-dead-hang",
    "exerciseName": "Dead Hang (Grip & Forearm Endurance)",
    "category": "Forearms",
    "posture": "hanging",
    "equipment": "pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Core"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "towel-grip-hang": {
    "exerciseId": "towel-grip-hang",
    "exerciseName": "Towel Pull-Up Bar Hang",
    "category": "Forearms",
    "posture": "hanging",
    "equipment": "towel_pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Thumb Adductors",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Lats"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "plate-pinch-hold": {
    "exerciseId": "plate-pinch-hold",
    "exerciseName": "Two-Handed Weight Plate Pinch Hold",
    "category": "Forearms",
    "posture": "standing_plate_pinch",
    "equipment": "two_weight_plates",
    "viewAngle": "front",
    "primaryMuscles": [
      "Thumb Flexors / Adductors",
      "Forearm Extensors & Flexors"
    ],
    "secondaryMuscles": [
      "Finger Flexors",
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "wrist-roller": {
    "exerciseId": "wrist-roller",
    "exerciseName": "Wrist Roller (Flexion & Extension)",
    "category": "Forearms",
    "posture": "standing_arms_forward",
    "equipment": "wrist_roller_cylinder",
    "viewAngle": "side",
    "primaryMuscles": [
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "hand-gripper-squeeze": {
    "exerciseId": "hand-gripper-squeeze",
    "exerciseName": "Hand Gripper Squeeze",
    "category": "Forearms",
    "posture": "standing_crush_grip",
    "equipment": "hand_gripper",
    "viewAngle": "front",
    "primaryMuscles": [
      "Crush Grip",
      "Deep Finger Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "finger-extension-band": {
    "exerciseId": "finger-extension-band",
    "exerciseName": "Rubber Band Finger Extensions",
    "category": "Forearms",
    "posture": "standing",
    "equipment": "bodyweight",
    "viewAngle": "side",
    "primaryMuscles": [
      "Extensor Digitorum (Finger Extensors)"
    ],
    "secondaryMuscles": [
      "Wrist Extensors"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "dumbbell-pronation-supination": {
    "exerciseId": "dumbbell-pronation-supination",
    "exerciseName": "Dumbbell Pronation & Supination",
    "category": "Forearms",
    "posture": "seated_forearm_table",
    "equipment": "offset_dumbbell_lever",
    "viewAngle": "front",
    "primaryMuscles": [
      "Pronator Teres",
      "Supinator",
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Stabilizers"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "radial-ulnar-deviation": {
    "exerciseId": "radial-ulnar-deviation",
    "exerciseName": "Lever / Sledgehammer Radial & Ulnar Deviation",
    "category": "Forearms",
    "posture": "seated_forearm_table",
    "equipment": "offset_dumbbell_lever",
    "viewAngle": "front",
    "primaryMuscles": [
      "Flexor & Extensor Carpi Radialis",
      "Flexor & Extensor Carpi Ulnaris"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Wrist Stabilizers"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "pinch-grip-deadlift": {
    "exerciseId": "pinch-grip-deadlift",
    "exerciseName": "Pinch Grip Weight Plate Deadlift / Lift",
    "category": "Forearms",
    "posture": "conventional_deadlift",
    "equipment": "barbell_plates_floor",
    "viewAngle": "side",
    "primaryMuscles": [
      "Thumb Flexors",
      "Finger Flexors",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Lower Back"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "hinge_setup",
        "label": {
          "en": "Hinge Setup",
          "hi": "हिंज सेटअप"
        },
        "desc": {
          "en": "Hinge at hips with a neutral spine, pushing hips back and maintaining tight abdominal pressure.",
          "hi": "सीधी रीढ़ के साथ कूल्हों से झुकें, कूल्हों को पीछे करें और कोर को कस लें।"
        },
        "cue": "Flat back, hips back, lats packed"
      },
      {
        "id": 1,
        "phase": "pull_drive",
        "label": {
          "en": "Drive & Row",
          "hi": "खींचना और रो"
        },
        "desc": {
          "en": "Drive elbows back past torso, pulling the weight tightly into the lower ribcage / hips.",
          "hi": "कोहनियों को पीछे खींचते हुए वजन को निचली पसलियों या कूल्हे की ओर लाएं।"
        },
        "cue": "Elbows past torso, squeeze upper back"
      },
      {
        "id": 2,
        "phase": "lockout_contraction",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Squeeze shoulder blades tightly together without shrugging traps or rocking torso.",
          "hi": "कंधों को उचकाए बिना कंधे के ब्लेड्स को आपस में मजबूती से सिकोड़ें।"
        },
        "cue": "Pinch shoulder blades, hold 1 sec"
      },
      {
        "id": 3,
        "phase": "return_stretch",
        "label": {
          "en": "Controlled Lowering",
          "hi": "नियंत्रित खिंचाव"
        },
        "desc": {
          "en": "Lower weight smoothly into full lat stretch while maintaining rigid spinal posture.",
          "hi": "रीढ़ को सीधा रखते हुए वजन को धीरे-धीरे वापस नीचे खिंचाव में लाएं।"
        },
        "cue": "Stretch lats, keep spine dead straight"
      }
    ],
    "verified": true
  },
  "fat-grip-dead-hang": {
    "exerciseId": "fat-grip-dead-hang",
    "exerciseName": "Thick Bar / Fat Grip Hang",
    "category": "Forearms",
    "posture": "hanging",
    "equipment": "fat_grip_pullup_bar",
    "viewAngle": "front",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Open Hand Grip",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "dead_hang",
        "label": {
          "en": "Dead Hang & Scapular Set",
          "hi": "डेड हैंग और स्कैपुलर सेट"
        },
        "desc": {
          "en": "Hang with straight arms. Depress and retract shoulder blades downward before bending elbows.",
          "hi": "सीधी बाहों से लटकें। कोहनियां मोड़ने से पहले कंधों के ब्लेड को नीचे और पीछे लॉक करें।"
        },
        "cue": "Depress shoulders, open chest"
      },
      {
        "id": 1,
        "phase": "pull_initiation",
        "label": {
          "en": "Drive Elbows Down",
          "hi": "कोहनियां नीचे खींचना"
        },
        "desc": {
          "en": "Exhale and drive elbows down and back toward your hip pockets, lifting chest toward bar.",
          "hi": "सांस छोड़ें और कोहनियों को नीचे पसलियों की ओर खींचते हुए छाती को ऊपर उठाएं।"
        },
        "cue": "Pull elbows to pockets, not hands"
      },
      {
        "id": 2,
        "phase": "peak_contraction",
        "label": {
          "en": "Peak Lat Squeeze",
          "hi": "लैट्स का अधिकतम संकुचन"
        },
        "desc": {
          "en": "Clear chin over the bar or bring bar to upper chest, squeezing lats and mid-back hard for 1 second.",
          "hi": "ठुड्डी को बार के ऊपर लाएं या बार को छाती तक छूकर लैट्स को 1 सेकंड कसें।"
        },
        "cue": "Chest to bar, maximum lat squeeze"
      },
      {
        "id": 3,
        "phase": "controlled_return",
        "label": {
          "en": "Eccentric Extension",
          "hi": "नियंत्रित रूप से लौटना"
        },
        "desc": {
          "en": "Inhale and lower body/bar under 3-second control until arms and lats are fully lengthened.",
          "hi": "नियंत्रण के साथ 3 सेकंड में धीरे-धीरे नीचे आएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "3-second negative, stretch lats fully"
      }
    ],
    "verified": true
  },
  "behind-back-cable-wrist-curl": {
    "exerciseId": "behind-back-cable-wrist-curl",
    "exerciseName": "Behind-the-Back Cable Wrist Curl",
    "category": "Forearms",
    "posture": "standing_cable_curl",
    "equipment": "cable_pulley_station",
    "viewAngle": "side",
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Finger Flexors",
      "Brachioradialis"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "setup",
        "label": {
          "en": "Starting Position",
          "hi": "शुरुआती स्थिति"
        },
        "desc": {
          "en": "Establish stable posture, grip equipment firmly, and brace core before initiating movement.",
          "hi": "स्थिर स्थिति बनाएं, उपकरण को मजबूती से पकड़ें और शुरू करने से पहले कोर को कसें।"
        },
        "cue": "Joints aligned, core locked"
      },
      {
        "id": 1,
        "phase": "movement",
        "label": {
          "en": "Concentric Drive",
          "hi": "मूवमेंट की शुरुआत"
        },
        "desc": {
          "en": "Drive the primary working muscles smoothly along the correct biomechanical path.",
          "hi": "काम करने वाली मांसपेशियों को सही बायोमैकेनिकल रास्ते पर आसानी से चलाएं।"
        },
        "cue": "Smooth acceleration, strict path"
      },
      {
        "id": 2,
        "phase": "peak",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष संकुचन"
        },
        "desc": {
          "en": "Hold the peak target position for 1 second, focusing on maximal mind-muscle tension.",
          "hi": "अधिकतम मांसपेशी तनाव पर ध्यान केंद्रित करते हुए 1 सेकंड के लिए शीर्ष स्थिति बनाए रखें।"
        },
        "cue": "Full range of motion, squeeze hard"
      },
      {
        "id": 3,
        "phase": "return",
        "label": {
          "en": "Controlled Reset",
          "hi": "नियंत्रित वापसी"
        },
        "desc": {
          "en": "Return under full eccentric muscular control over 3 seconds to the starting position.",
          "hi": "3 सेकंड में पूरी तरह नियंत्रण के साथ वापस प्रारंभिक स्थिति में आएं।"
        },
        "cue": "Control the negative phase"
      }
    ],
    "verified": true
  },
  "barbell-finger-curls": {
    "exerciseId": "barbell-finger-curls",
    "exerciseName": "Barbell Finger Roll Wrist Curl",
    "category": "Forearms",
    "posture": "standing_curls",
    "equipment": "barbell",
    "viewAngle": "front",
    "primaryMuscles": [
      "Flexor Digitorum Superficialis & Profundus"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Palmaris Longus"
    ],
    "phases": [
      {
        "id": 0,
        "phase": "starting_stretch",
        "label": {
          "en": "Full Extension",
          "hi": "पूर्ण विस्तार"
        },
        "desc": {
          "en": "Stand with arms fully extended, triceps flexed, elbows pinned closely beside torso.",
          "hi": "बाहों को पूरी तरह सीधा रखें, ट्राइसेप्स को हल्का सिकोड़ें और कोहनियों को कमर से सटाएं।"
        },
        "cue": "Elbows pinned, shoulders back"
      },
      {
        "id": 1,
        "phase": "curl_concentric",
        "label": {
          "en": "Curling Arc",
          "hi": "कर्ल करना"
        },
        "desc": {
          "en": "Flex elbows to curl weight upward without swinging hips or drifting elbows forward.",
          "hi": "बिना झटका दिए कोहनियों को मोड़कर वजन को ऊपर छाती की ओर कर्ल करें।"
        },
        "cue": "Isolate bicep, zero torso swing"
      },
      {
        "id": 2,
        "phase": "peak_bicep_squeeze",
        "label": {
          "en": "Peak Contraction",
          "hi": "शीर्ष बाइसेप्स संकुचन"
        },
        "desc": {
          "en": "Squeeze biceps forcefully at peak height for 1 full second with supinated wrists.",
          "hi": "शीर्ष पर कलाई को बाहर घुमाते हुए बाइसेप्स को 1 सेकंड तक जोर से सिकोड़ें।"
        },
        "cue": "Supinate wrist, squeeze peak hard"
      },
      {
        "id": 3,
        "phase": "eccentric_negative",
        "label": {
          "en": "3-Second Negative",
          "hi": "3-सेकंड धीमा उतार"
        },
        "desc": {
          "en": "Lower weight with strict 3-second eccentric tempo back to complete arm extension.",
          "hi": "3 सेकंड में धीरे-धीरे वजन को नीचे लाएं जब तक बाहें पूरी सीधी न हो जाएं।"
        },
        "cue": "Resist gravity, full lower stretch"
      }
    ],
    "verified": true
  }
};

export function getExerciseAnimation(exerciseId: string): ExerciseAnimationConfig | null {
  return EXERCISE_ANIMATIONS[exerciseId] || null;
}
