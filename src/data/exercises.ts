export interface Exercise {
  id: string;
  name: { en: string; hi: string };
  muscle: string;
  primaryMuscles?: string[];
  secondaryMuscles: string[];
  type?: "compound" | "isolation";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  equipment: string;
  description: { en: string; hi: string };
  startingPosition?: { en: string; hi: string };
  steps: { en: string; hi: string }[];
  mistakes: { en: string; hi: string }[];
  tips: { en: string; hi: string }[];
  breathing?: { en: string; hi: string };
  safetyPrecautions?: { en: string; hi: string };
  alternative?: { en: string; hi: string };
  keywords?: string[];
}

export const EXERCISES: Exercise[] = [
  {
    "id": "barbell-bench-press",
    "name": {
      "en": "Barbell Bench Press",
      "hi": "बार्बेल बेंच प्रेस (Barbell Bench Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Sternal & Clavicular)",
      "Pectoralis Minor"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Flat Bench, Weight Plates",
    "description": {
      "en": "The foundational upper-body compound pushing movement for developing maximum chest thickness, pressing power, and shoulder stability.",
      "hi": "अधिकतम छाती की मोटाई, प्रेसिंग पावर और कंधे की स्थिरता विकसित करने के लिए बुनियादी ऊपरी शरीर कंपाउंड व्यायाम।"
    },
    "startingPosition": {
      "en": "Lie flat on the bench with eyes under the bar, feet planted flat on the floor, and shoulder blades retracted into the bench pad.",
      "hi": "बेंच पर सपाट लेटें, आंखें बार के नीचे, पैर फर्श पर मजबूती से टिके हुए और स्कैपुला बेंच पैड में पीछे खिंचे हुए।"
    },
    "steps": [
      {
        "en": "Grip the bar slightly wider than shoulder-width with wrapped thumbs.",
        "hi": "कंधे की चौड़ाई से थोड़ा चौड़ा बार को सुरक्षित पकड़ें।"
      },
      {
        "en": "Unrack the barbell and stabilize it directly over your mid-chest with straight wrists.",
        "hi": "बारबेल को अनरैक करें और सीधी कलाइयों के साथ इसे मध्य-छाती के ऊपर स्थिर करें।"
      },
      {
        "en": "Lower the bar with controlled tempo until it lightly touches your lower-to-mid sternum at a 45-degree elbow angle.",
        "hi": "बार को 45 डिग्री कोहनी कोण पर नियंत्रित गति से नीचे लाएं जब तक कि यह छाती को हल्के से न छू ले।"
      },
      {
        "en": "Drive the bar upward forcefully through the palms, pressing back to the lockout position over mid-chest.",
        "hi": "हथेलियों के माध्यम से बलपूर्वक बार को ऊपर की ओर दबाएं, वापस लॉकआउट स्थिति में लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale and brace core during descent; exhale forcefully past the sticking point on the press.",
      "hi": "नीचे जाते समय सांस अंदर लें और कोर कसें; ऊपर दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bouncing the barbell violently off the sternum.",
        "hi": "छाती की हड्डी से बारबेल को जोर से उछालना।"
      },
      {
        "en": "Flaring the elbows out at a 90-degree angle, placing severe shear stress on rotator cuffs.",
        "hi": "कोहनियों को 90 डिग्री पर बाहर फैलाना, जिससे रोटेटर कफ पर तनाव पड़ता है।"
      },
      {
        "en": "Lifting hips and glutes off the bench to cheat the weight.",
        "hi": "वजन उठाने के लिए बेंच से कूल्हों और ग्लूट्स को उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Tuck your shoulder blades into your back pockets and maintain a slight natural arch in the lumbar spine.",
        "hi": "अपने शोल्डर ब्लेड्स को पीछे खींचें और पीठ में हल्का प्राकृतिक आर्च बनाए रखें।"
      },
      {
        "en": "Squeeze the bar hard as if trying to bend it in half across your chest.",
        "hi": "बार को कसकर निचोड़ें जैसे कि आप उसे छाती पर आधा मोड़ने की कोशिश कर रहे हों।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always use safety pins or a reliable spotter when training near muscular failure.",
      "hi": "विफलता के करीब प्रशिक्षण करते समय हमेशा सेफ्टी पिन या स्पॉटर का उपयोग करें।"
    },
    "alternative": {
      "en": "Dumbbell Bench Press or Machine Chest Press",
      "hi": "डम्बल बेंच प्रेस या मशीन चेस्ट प्रेस"
    },
    "keywords": [
      "bench press",
      "chest",
      "barbell",
      "pecs",
      "compound",
      "push"
    ]
  },
  {
    "id": "incline-barbell-bench-press",
    "name": {
      "en": "Incline Barbell Bench Press",
      "hi": "इन्क्लाइन बार्बेल बेंच प्रेस (Incline Barbell Bench Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Incline Bench (30-45 degrees)",
    "description": {
      "en": "An incline barbell press targeting the upper clavicular portion of the pectoral muscles and front deltoids.",
      "hi": "एक इन्क्लाइन बार्बेल प्रेस जो पेक्टोरल मांसपेशियों और सामने के डेल्टोइड्स के ऊपरी हिस्से को लक्षित करता है।"
    },
    "startingPosition": {
      "en": "Lie on a 30-to-45-degree inclined bench, firm footing on the floor, pinching shoulder blades together.",
      "hi": "30 से 45 डिग्री झुकी हुई बेंच पर लेटें, पैरों को फर्श पर मजबूती से रखें और शोल्डर ब्लेड्स को एक साथ खींचे।"
    },
    "steps": [
      {
        "en": "Grip the bar slightly wider than shoulder width and unrack under full control.",
        "hi": "बार को कंधे की चौड़ाई से थोड़ा चौड़ा पकड़ें और पूर्ण नियंत्रण में अनरैक करें।"
      },
      {
        "en": "Lower the bar slowly to the upper chest just below the clavicle bones.",
        "hi": "बार को हंसली की हड्डियों के ठीक नीचे ऊपरी छाती पर धीरे-धीरे लाएं।"
      },
      {
        "en": "Press up and slightly back toward your eye level without unlocking shoulder retraction.",
        "hi": "शोल्डर रिट्रैक्शन को ढीला किए बिना बार को ऊपर दबाएं।"
      },
      {
        "en": "Lock out your elbows momentarily at the peak contraction.",
        "hi": "चरम संकुचन पर अपनी कोहनियों को क्षण भर के लिए सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Breathe in deeply on the way down; exhale smoothly on the press upward.",
      "hi": "नीचे आते समय गहरी सांस लें; ऊपर दबाते समय धीरे से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Setting the bench angle too steep (>45 degrees), shifting tension into deltoids.",
        "hi": "बेंच के कोण को बहुत अधिक ढलान पर सेट करना, जिससे तनाव डेल्ट्स पर चला जाता है।"
      },
      {
        "en": "Dropping the bar too low toward the navel.",
        "hi": "बार को नाभि की ओर बहुत नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "A 30-degree incline maximizes upper-pec activation while reducing excessive front-delt strain.",
        "hi": "30 डिग्री का इन्क्लाइन ऊपरी पेक एक्टिवेशन को अधिकतम करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure collar clips are secured to prevent plates sliding.",
      "hi": "प्लेट्स को फिसलने से रोकने के लिए कॉलर क्लिप सुरक्षित करें।"
    },
    "alternative": {
      "en": "Incline Dumbbell Press",
      "hi": "इन्क्लाइन डम्बल प्रेस"
    },
    "keywords": [
      "incline bench",
      "upper chest",
      "barbell",
      "clavicular head"
    ]
  },
  {
    "id": "decline-barbell-bench-press",
    "name": {
      "en": "Decline Barbell Bench Press",
      "hi": "डिक्लाइन बार्बेल बेंच प्रेस (Decline Barbell Bench Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Abdominal / Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Decline Bench",
    "description": {
      "en": "A decline angle barbell pressing movement emphasizing the lower pectoral fibers with minimal shoulder impingement.",
      "hi": "निचले पेक्टोरल फाइबर पर जोर देने वाला एक डिक्लाइन एंगल बार्बेल मूवमेंट।"
    },
    "startingPosition": {
      "en": "Secure your shins and ankles under the leg pads of a 15-to-30-degree decline bench and lie back.",
      "hi": "15-30 डिग्री डिक्लाइन बेंच के लेग पैड के नीचे अपने टखनों को सुरक्षित करें और पीछे लेट जाएं।"
    },
    "steps": [
      {
        "en": "Grip the bar shoulder-width apart and unrack carefully over your lower chest.",
        "hi": "बार को कंधे की चौड़ाई पर पकड़ें और निचली छाती के ऊपर अनरैक करें।"
      },
      {
        "en": "Lower the bar with high control to the bottom of the sternum.",
        "hi": "बार को उरोस्थि के निचले भाग तक उच्च नियंत्रण के साथ नीचे लाएं।"
      },
      {
        "en": "Press vertically upward until elbows reach extension.",
        "hi": "ऊपर की ओर तब तक दबाएं जब तक कोहनियां पूरी तरह न खुल जाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale as the bar descends; exhale strongly through the concentric drive.",
      "hi": "बार नीचे आते समय सांस अंदर लें; ऊपर दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Letting the bar drift back toward the throat or face.",
        "hi": "बार को गले या चेहरे की ओर बहने देना।"
      },
      {
        "en": "Failing to lock legs into the support pads.",
        "hi": "पैरों को सपोर्ट पैड में लॉक न करना।"
      }
    ],
    "tips": [
      {
        "en": "Focus on squeezing the lower chest border at peak contraction.",
        "hi": "पीक संकुचन पर निचले चेस्ट बॉर्डर को निचोड़ने पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "High-to-Low Cable Fly or Chest Dips",
      "hi": "हाई-टू-लो केबल फ्लाई या चेस्ट डिप्स"
    },
    "keywords": [
      "decline bench",
      "lower chest",
      "pecs",
      "barbell"
    ]
  },
  {
    "id": "flat-dumbbell-bench-press",
    "name": {
      "en": "Flat Dumbbell Bench Press",
      "hi": "फ्लैट डम्बल बेंच प्रेस (Flat Dumbbell Bench Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "Independent unilateral dumbbell pressing that allows a deeper stretch and natural convergent pressing path.",
      "hi": "स्वतंत्र डम्बल प्रेसिंग जो एक गहरा खिंचाव और स्वाभाविक प्रेसिंग पाथ प्रदान करती है।"
    },
    "startingPosition": {
      "en": "Sit upright with dumbbells on thighs; kick them back to chest level as you lie flat.",
      "hi": "जांघों पर डम्बल रखकर सीधे बैठें; जैसे ही आप लेटें, उन्हें छाती के स्तर पर लाएं।"
    },
    "steps": [
      {
        "en": "Position dumbbells outside chest with elbows tucked at 45 degrees.",
        "hi": "डम्बल को छाती के बाहर 45 डिग्री कोहनी कोण पर रखें।"
      },
      {
        "en": "Press both dumbbells upward along a gentle arc until they meet over mid-chest.",
        "hi": "दोनों डम्बल को एक हल्के चाप में ऊपर दबाएं जब तक कि वे मध्य-छाती के ऊपर न मिलें।"
      },
      {
        "en": "Lower under deep stretch across the chest fibers without letting elbows drop too far below bench.",
        "hi": "कोहनियों को अत्यधिक नीचे गिराए बिना गहरे खिंचाव के साथ नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on the stretch; exhale on the press.",
      "hi": "खिंचाव पर सांस अंदर लें; प्रेस पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Clanging the dumbbells together at the top, losing muscular tension.",
        "hi": "शीर्ष पर डम्बल को आपस में टकराना, जिससे तनाव खत्म हो जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Keep wrists stacked directly over your elbows throughout the lift.",
        "hi": "पूरे लिफ्ट में कलाइयों को सीधे कोहनियों के ऊपर रखें।"
      }
    ],
    "alternative": {
      "en": "Barbell Bench Press",
      "hi": "बार्बेल बेंच प्रेस"
    },
    "keywords": [
      "dumbbell press",
      "flat bench",
      "pecs",
      "chest builder"
    ]
  },
  {
    "id": "incline-dumbbell-press",
    "name": {
      "en": "Incline Dumbbell Press",
      "hi": "इन्क्लाइन डम्बल प्रेस (Incline Dumbbell Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Adjustable Incline Bench",
    "description": {
      "en": "The premiere movement for upper chest development, allowing wrist rotation and customized natural joint angles.",
      "hi": "ऊपरी छाती के विकास के लिए प्रमुख व्यायाम, जो प्राकृतिक संयुक्त कोणों की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Set bench to 30 degrees. Lie back with dumbbells at shoulder height, palms angled slightly inward.",
      "hi": "बेंच को 30 डिग्री पर सेट करें। कंधे की ऊंचाई पर डम्बल लेकर पीछे लेट जाएं।"
    },
    "steps": [
      {
        "en": "Press upward in an inward arc toward eye level.",
        "hi": "आंखों के स्तर की ओर अंदरूनी चाप में ऊपर दबाएं।"
      },
      {
        "en": "Squeeze upper pecs hard at the top without locking out harshly.",
        "hi": "कठोरता से लॉक किए बिना शीर्ष पर ऊपरी पेक्स को जोर से निचोड़ें।"
      },
      {
        "en": "Lower with a 3-second negative to feel a full upper-chest stretch.",
        "hi": "पूरा खिंचाव महसूस करने के लिए 3-सेकंड की नकारात्मक गति से नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Breathe in deeply on the way down; exhale as you push upward.",
      "hi": "नीचे आते समय गहरी सांस लें; ऊपर धकेलते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Setting the incline to 60 degrees, turning it into an overhead shoulder press.",
        "hi": "इन्क्लाइन को 60 डिग्री पर सेट करना, जिससे यह शोल्डर प्रेस बन जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Rotate palms slightly semi-neutral at the bottom to protect the acromioclavicular joint.",
        "hi": "निचले हिस्से में हथेलियों को थोड़ा अंदर घुमाएं।"
      }
    ],
    "alternative": {
      "en": "Incline Barbell Press or Low-to-High Cable Fly",
      "hi": "इन्क्लाइन बार्बेल प्रेस या लो-टू-हाई केबल फ्लाई"
    },
    "keywords": [
      "incline dumbbell",
      "upper chest",
      "pecs"
    ]
  },
  {
    "id": "decline-dumbbell-press",
    "name": {
      "en": "Decline Dumbbell Press",
      "hi": "डिक्लाइन डम्बल प्रेस (Decline Dumbbell Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Lower Sternal Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Decline Bench",
    "description": {
      "en": "Emphasizes the lower chest border with independent dumbbell freedom of movement.",
      "hi": "स्वतंत्र डम्बल मूवमेंट के साथ निचली छाती के विकास पर जोर देता है।"
    },
    "startingPosition": {
      "en": "Hook ankles securely in decline bench, bring dumbbells to sides of lower chest.",
      "hi": "डिक्लाइन बेंच में टखनों को सुरक्षित करें, डम्बल को निचली छाती के किनारों पर लाएं।"
    },
    "steps": [
      {
        "en": "Press dumbbells up and slightly inward over lower chest.",
        "hi": "निचली छाती के ऊपर डम्बल को ऊपर दबाएं।"
      },
      {
        "en": "Lower with control until weights are parallel to chest.",
        "hi": "नियंत्रण के साथ नीचे लाएं जब तक कि वजन छाती के समानांतर न हो जाए।"
      }
    ],
    "breathing": {
      "en": "Exhale on upward press, inhale on controlled descent.",
      "hi": "ऊपर प्रेस पर सांस छोड़ें, नीचे जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping dumbbells too quickly when fatigued.",
        "hi": "थक जाने पर डम्बल को बहुत जल्दी गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Keep core tight to stabilize pelvis on decline pad.",
        "hi": "डिक्लाइन पैड पर पेल्विस को स्थिर रखने के लिए कोर को कसकर रखें।"
      }
    ],
    "alternative": {
      "en": "Chest Dips",
      "hi": "चेस्ट डिप्स"
    },
    "keywords": [
      "decline dumbbell",
      "lower pecs"
    ]
  },
  {
    "id": "dumbbell-chest-fly",
    "name": {
      "en": "Dumbbell Chest Fly",
      "hi": "डम्बल चेस्ट फ्लाई (Dumbbell Chest Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Biceps Brachii (Short Head)"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "An isolation exercise that opens the ribcage and places continuous horizontal adduction tension across the chest.",
      "hi": "एक आइसोलेशन व्यायाम जो छाती में गहरा खिंचाव पैदा करता है।"
    },
    "startingPosition": {
      "en": "Lie flat with dumbbells extended above chest, palms facing each other, elbows slightly bent.",
      "hi": "छाती के ऊपर डम्बल लेकर लेटें, हथेलियां एक दूसरे के सामने, कोहनियां थोड़ी मुड़ी हुई।"
    },
    "steps": [
      {
        "en": "Open arms out wide in an arc until you feel a comfortable stretch in your pecs.",
        "hi": "पेक्स में आरामदायक खिंचाव महसूस होने तक बाहों को एक चाप में चौड़ा खोलें।"
      },
      {
        "en": "Maintain the exact same slight bend in your elbows throughout the arc.",
        "hi": "पूरे चाप में अपनी कोहनियों में वही हल्का मोड़ बनाए रखें।"
      },
      {
        "en": "Hug arms back together over chest by squeezing pectoral muscles.",
        "hi": "पेक्टोरल मांसपेशियों को निचोड़कर बाहों को वापस छाती पर एक साथ लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale deeply as you open arms; exhale as you bring dumbbells together.",
      "hi": "बाहें खोलते समय गहरी सांस लें; डम्बल मिलाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending elbows too much, turning the fly into a standard press.",
        "hi": "कोहनियों को बहुत अधिक मोड़ना, जिससे फ्लाई एक प्रेस बन जाती है।"
      },
      {
        "en": "Overstretching past shoulder flexibility, risking anterior capsule strain.",
        "hi": "कंधे के लचीलेपन से आगे खिंचाव करना।"
      }
    ],
    "tips": [
      {
        "en": "Imagine hugging a large barrel to maintain constant elbow angle.",
        "hi": "कोहनी का कोण बनाए रखने के लिए एक बड़े बैरल को गले लगाने की कल्पना करें।"
      }
    ],
    "alternative": {
      "en": "Pec Deck Fly or Cable Chest Fly",
      "hi": "पेक डेक फ्लाई या केबल चेस्ट फ्लाई"
    },
    "keywords": [
      "dumbbell fly",
      "chest isolation",
      "stretch",
      "pecs"
    ]
  },
  {
    "id": "incline-dumbbell-fly",
    "name": {
      "en": "Incline Dumbbell Fly",
      "hi": "इन्क्लाइन डम्बल फ्लाई (Incline Dumbbell Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Upper Clavicular)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Incline Bench",
    "description": {
      "en": "Isolates the upper pectoral fibers with a wide arc stretch on an incline bench.",
      "hi": "इन्क्लाइन बेंच पर एक विस्तृत चाप खिंचाव के साथ ऊपरी पेक्टोरल फाइबर को अलग करता है।"
    },
    "startingPosition": {
      "en": "Lie on 30-degree incline bench with dumbbells held over upper chest.",
      "hi": "30-डिग्री इन्क्लाइन बेंच पर ऊपरी छाती पर डम्बल पकड़कर लेट जाएं।"
    },
    "steps": [
      {
        "en": "Lower dumbbells outward in wide semi-circular arcs.",
        "hi": "डम्बल को बाहर की ओर चौड़े अर्ध-वृत्ताकार चाप में नीचे लाएं।"
      },
      {
        "en": "Stop when elbows align with torso plane.",
        "hi": "जब कोहनियां धड़ के स्तर पर आ जाएं तो रुकें।"
      },
      {
        "en": "Contract upper chest to bring dumbbells back together.",
        "hi": "डम्बल को वापस एक साथ लाने के लिए ऊपरी छाती को सिकोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale on opening; exhale on contraction.",
      "hi": "खोलते समय सांस लें; संकुचन पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Dropping elbows below bench height.",
        "hi": "कोहनियों को बेंच की ऊंचाई से नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Focus on bringing biceps toward the clavicles at top.",
        "hi": "शीर्ष पर बाइसेप्स को हंसली की ओर लाने पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Low-to-High Cable Fly",
      "hi": "लो-टू-हाई केबल फ्लाई"
    },
    "keywords": [
      "incline fly",
      "upper pecs",
      "isolation"
    ]
  },
  {
    "id": "cable-chest-fly",
    "name": {
      "en": "Cable Chest Fly",
      "hi": "केबल चेस्ट फ्लाई (Cable Chest Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dual Cable Pulley Station",
    "description": {
      "en": "Provides continuous muscular tension across the entire range of motion, especially peak contraction.",
      "hi": "गति की पूरी श्रृंखला, विशेष रूप से पीक संकुचन में निरंतर तनाव प्रदान करता है।"
    },
    "startingPosition": {
      "en": "Stand in center of cable crossover station, pulleys set at chest height, staggered stance.",
      "hi": "केबल स्टेशन के केंद्र में खड़े हों, पुली छाती की ऊंचाई पर, एक पैर आगे।"
    },
    "steps": [
      {
        "en": "Bring handles together in front of chest in a hugging arc.",
        "hi": "छाती के सामने एक आलिंगन चाप में हैंडल को एक साथ लाएं।"
      },
      {
        "en": "Hold peak squeeze for a 1-second isometric hold.",
        "hi": "1-सेकंड के लिए पीक संकुचन को रोकें।"
      },
      {
        "en": "Allow cables to pull arms back slowly under full control.",
        "hi": "केबल को पूर्ण नियंत्रण में बाहों को धीरे-धीरे वापस खींचने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale through contraction; inhale on stretch.",
      "hi": "संकुचन पर सांस छोड़ें; खिंचाव पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning too far forward and using body momentum.",
        "hi": "बहुत आगे झुकना और शरीर की गति का उपयोग करना।"
      }
    ],
    "tips": [
      {
        "en": "Cross hands slightly at peak to recruit deeper sternal fibers.",
        "hi": "गहरे फाइबर को सक्रिय करने के लिए हाथों को थोड़ा क्रॉस करें।"
      }
    ],
    "alternative": {
      "en": "Pec Deck Machine",
      "hi": "पेक डेक मशीन"
    },
    "keywords": [
      "cable fly",
      "crossover",
      "continuous tension",
      "pecs"
    ]
  },
  {
    "id": "low-to-high-cable-fly",
    "name": {
      "en": "Low-to-High Cable Fly",
      "hi": "लो-टू-हाई केबल फ्लाई (Low-to-High Cable Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Biceps (Short Head)"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dual Low Cable Pulleys",
    "description": {
      "en": "Pulls cables from floor level upward and inward to specifically stimulate the upper chest.",
      "hi": "ऊपरी छाती को उत्तेजित करने के लिए केबल्स को फर्श से ऊपर और अंदर की ओर खींचता है।"
    },
    "startingPosition": {
      "en": "Set pulleys to lowest pin, hold D-handles, step forward into staggered stance.",
      "hi": "पुली को सबसे निचले पिन पर सेट करें, डी-हैंडल पकड़ें, एक पैर आगे बढ़ाएं।"
    },
    "steps": [
      {
        "en": "With slight elbow bend, scoop handles upward and inward toward chin level.",
        "hi": "हल्की मुड़ी कोहनी के साथ, हैंडल को ऊपर और अंदर ठुड्डी के स्तर तक लाएं।"
      },
      {
        "en": "Squeeze the upper chest peak hard.",
        "hi": "ऊपरी छाती के पीक को जोर से निचोड़ें।"
      },
      {
        "en": "Lower back along the same path under control.",
        "hi": "नियंत्रण में उसी पथ से वापस नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale as you scoop upward; inhale as handles descend.",
      "hi": "ऊपर खींचते समय सांस छोड़ें; नीचे जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging the hips to throw the weight up.",
        "hi": "वजन ऊपर फेंकने के लिए कूल्हों को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Turn pinkies slightly inward at top for maximum upper-pec contraction.",
        "hi": "अधिकतम संकुचन के लिए शीर्ष पर छोटी उंगलियों को थोड़ा अंदर मोड़ें।"
      }
    ],
    "alternative": {
      "en": "Incline Dumbbell Fly",
      "hi": "इन्क्लाइन डम्बल फ्लाई"
    },
    "keywords": [
      "low to high",
      "cable fly",
      "upper chest"
    ]
  },
  {
    "id": "high-to-low-cable-fly",
    "name": {
      "en": "High-to-Low Cable Fly",
      "hi": "हाई-टू-लो केबल फ्लाई (High-to-Low Cable Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Abdominal / Lower Head)"
    ],
    "secondaryMuscles": [
      "Pectoralis Minor"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dual High Cable Pulleys",
    "description": {
      "en": "Pulls cables from high pulleys downward in front of waist to sculpt the lower pectoral line.",
      "hi": "निचली पेक्टोरल लाइन को तराशने के लिए उच्च पुली से कमर के सामने केबल्स को नीचे की ओर खींचता है।"
    },
    "startingPosition": {
      "en": "Set pulleys at top height, grasp handles, lean torso slightly forward with stable stance.",
      "hi": "पुली को शीर्ष ऊंचाई पर सेट करें, हैंडल पकड़ें, स्थिर मुद्रा के साथ धड़ को थोड़ा आगे झुकाएं।"
    },
    "steps": [
      {
        "en": "Sweep arms downward and together in front of the hips.",
        "hi": "कूल्हों के सामने बाहों को नीचे और एक साथ लाएं।"
      },
      {
        "en": "Squeeze lower chest intensely at bottom.",
        "hi": "नीचे निचली छाती को तीव्रता से निचोड़ें।"
      },
      {
        "en": "Return handles slowly back to shoulder height.",
        "hi": "हैंडल को धीरे-धीरे कंधे की ऊंचाई तक वापस आने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale on downward sweep; inhale on return.",
      "hi": "नीचे लाते समय सांस छोड़ें; वापस जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using momentum and bending elbows like a triceps pushdown.",
        "hi": "गति का उपयोग करना और ट्राइसेप्स पुशडाउन की तरह कोहनियों को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Keep elbows fixed at a constant 15-degree bend.",
        "hi": "कोहनियों को स्थिर 15-डिग्री मोड़ पर रखें।"
      }
    ],
    "alternative": {
      "en": "Decline Dumbbell Fly or Chest Dips",
      "hi": "डिक्लाइन डम्बल फ्लाई या चेस्ट डिप्स"
    },
    "keywords": [
      "high to low",
      "lower pecs",
      "cable crossover"
    ]
  },
  {
    "id": "machine-chest-press",
    "name": {
      "en": "Machine Chest Press",
      "hi": "मशीन चेस्ट प्रेस (Machine Chest Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Chest Press Machine",
    "description": {
      "en": "A guided mechanical press that eliminates balance demands to allow safe overload to failure.",
      "hi": "एक निर्देशित मैकेनिकल प्रेस जो विफलता तक सुरक्षित अधिभार की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Adjust seat so handles align with mid-chest. Back firmly against pad, feet flat.",
      "hi": "सीट को समायोजित करें ताकि हैंडल मध्य-छाती से संरेखित हों।"
    },
    "steps": [
      {
        "en": "Grip handles firmly and press outward to full extension.",
        "hi": "हैंडल को मजबूती से पकड़ें और पूर्ण विस्तार तक बाहर दबाएं।"
      },
      {
        "en": "Squeeze pecs at peak lockout.",
        "hi": "पीक लॉकआउट पर पेक्स को निचोड़ें।"
      },
      {
        "en": "Lower slowly until handles are near chest level.",
        "hi": "धीरे-धीरे नीचे लाएं जब तक कि हैंडल छाती के स्तर के करीब न हों।"
      }
    ],
    "breathing": {
      "en": "Exhale on extension; inhale on return.",
      "hi": "विस्तार पर सांस छोड़ें; वापसी पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting weight plates slam down between reps.",
        "hi": "रेप्स के बीच वजन प्लेट्स को टकराने देना।"
      }
    ],
    "tips": [
      {
        "en": "Keep back glued to pad to isolate chest drive.",
        "hi": "छाती को अलग करने के लिए पीठ को पैड से चिपकाए रखें।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Bench Press",
      "hi": "डम्बल बेंच प्रेस"
    },
    "keywords": [
      "chest press machine",
      "safe overload",
      "pecs"
    ]
  },
  {
    "id": "pec-deck-fly",
    "name": {
      "en": "Pec Deck Fly",
      "hi": "पेक डेक फ्लाई (Pec Deck Fly)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Sternal Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Pec Deck / Butterfly Machine",
    "description": {
      "en": "Strict horizontal chest adduction machine that isolates inner and mid-pectoral fibers.",
      "hi": "सख्त क्षैतिज छाती एडक्शन मशीन जो आंतरिक और मध्य पेक्टोरल फाइबर को अलग करती है।"
    },
    "startingPosition": {
      "en": "Adjust seat so handles are at mid-chest height. Press back flat against pad.",
      "hi": "सीट को समायोजित करें ताकि हैंडल मध्य-छाती की ऊंचाई पर हों।"
    },
    "steps": [
      {
        "en": "Bring machine levers together in front of chest.",
        "hi": "छाती के सामने मशीन लीवर को एक साथ लाएं।"
      },
      {
        "en": "Hold the peak contraction for 1 full second.",
        "hi": "1 पूरे सेकंड के लिए पीक संकुचन को रोकें।"
      },
      {
        "en": "Allow levers to return outward until chest is fully stretched.",
        "hi": "छाती पूरी तरह से खिंचने तक लीवर को वापस बाहर जाने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale as pads touch; inhale as they open.",
      "hi": "पैड छूने पर सांस छोड़ें; खुलने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting elbows drop down below handle level.",
        "hi": "कोहनियों को हैंडल के स्तर से नीचे गिरने देना।"
      }
    ],
    "tips": [
      {
        "en": "Focus mental intent on pulling elbows together, not just hands.",
        "hi": "सिर्फ हाथों को नहीं, बल्कि कोहनियों को एक साथ खींचने पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Cable Chest Fly",
      "hi": "केबल चेस्ट फ्लाई"
    },
    "keywords": [
      "pec deck",
      "butterfly",
      "chest fly machine"
    ]
  },
  {
    "id": "push-ups",
    "name": {
      "en": "Push-Ups",
      "hi": "पुश-अप्स (Push-Ups)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "The classic bodyweight pushing exercise building chest strength, shoulder stability, and core integrity.",
      "hi": "क्लासिक बॉडीवेट व्यायाम जो छाती की ताकत, कंधे की स्थिरता और कोर अखंडता का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "High plank position, hands slightly wider than shoulders, body in a rigid straight line.",
      "hi": "हाई प्लैंक स्थिति, हाथ कंधों से थोड़ा चौड़े, शरीर एक सीधी रेखा में।"
    },
    "steps": [
      {
        "en": "Lower chest toward the floor by bending elbows at a 45-degree angle.",
        "hi": "कोहनियों को 45 डिग्री के कोण पर मोड़कर छाती को फर्श की ओर नीचे लाएं।"
      },
      {
        "en": "Descend until chest is about 1 inch from floor.",
        "hi": "तब तक नीचे जाएं जब तक छाती फर्श से लगभग 1 इंच दूर न हो।"
      },
      {
        "en": "Press forcefully through palms back to top plank.",
        "hi": "हथेलियों के माध्यम से बलपूर्वक वापस शीर्ष प्लैंक पर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale during descent; exhale during press.",
      "hi": "नीचे जाते समय सांस लें; ऊपर दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Sagging hips or piking glutes up into the air.",
        "hi": "कूल्हों को नीचे लटकाना या हवा में उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Squeeze glutes and brace abs tightly throughout the set.",
        "hi": "पूरे सेट में ग्लूट्स को निचोड़ें और एब्स को कसकर रखें।"
      }
    ],
    "alternative": {
      "en": "Incline Push-Ups or Dumbbell Bench Press",
      "hi": "इन्क्लाइन पुश-अप्स या डम्बल बेंच प्रेस"
    },
    "keywords": [
      "pushup",
      "calisthenics",
      "bodyweight chest"
    ]
  },
  {
    "id": "wide-grip-push-ups",
    "name": {
      "en": "Wide-Grip Push-Ups",
      "hi": "वाइड-ग्रिप पुश-अप्स (Wide-Grip Push-Ups)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Outer Fibers)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Push-up variation with wider hand placement that maximizes pectoral stretch and horizontal adduction.",
      "hi": "चौड़े हाथों से पुश-अप जो पेक्टोरल खिंचाव और क्षैतिज एडक्शन को अधिकतम करता है।"
    },
    "startingPosition": {
      "en": "Plank position with hands placed about 1.5x shoulder width apart.",
      "hi": "कंधे की चौड़ाई से लगभग 1.5 गुना चौड़े हाथों के साथ प्लैंक स्थिति।"
    },
    "steps": [
      {
        "en": "Lower chest slowly toward the floor.",
        "hi": "छाती को धीरे-धीरे फर्श की ओर नीचे लाएं।"
      },
      {
        "en": "Feel a wide stretch across the outer pectorals.",
        "hi": "बाहरी पेक्टोरल्स में एक चौड़ा खिंचाव महसूस करें।"
      },
      {
        "en": "Push back up smoothly to starting position.",
        "hi": "शुरुआती स्थिति में वापस आसानी से ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Flaring elbows 90 degrees outward.",
        "hi": "कोहनियों को 90 डिग्री बाहर फैलाना।"
      }
    ],
    "tips": [
      {
        "en": "Maintain neutral neck and spine alignment.",
        "hi": "गर्दन और रीढ़ को सीधा बनाए रखें।"
      }
    ],
    "alternative": {
      "en": "Standard Push-Ups",
      "hi": "मानक पुश-अप्स"
    },
    "keywords": [
      "wide pushups",
      "outer chest",
      "bodyweight"
    ]
  },
  {
    "id": "incline-push-ups",
    "name": {
      "en": "Incline Push-Ups",
      "hi": "इन्क्लाइन पुश-अप्स (Incline Push-Ups)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Bench or Elevated Surface",
    "description": {
      "en": "A beginner-friendly push-up on an elevated surface that targets the lower chest with reduced bodyweight load.",
      "hi": "कम वजन के साथ निचली छाती को लक्षित करने वाला आसान पुश-अप।"
    },
    "startingPosition": {
      "en": "Place hands on bench or box, step feet back into a straight plank angle.",
      "hi": "बेंच पर हाथ रखें, पैरों को पीछे ले जाकर सीधा प्लैंक कोण बनाएं।"
    },
    "steps": [
      {
        "en": "Lower chest to edge of bench.",
        "hi": "छाती को बेंच के किनारे तक नीचे लाएं।"
      },
      {
        "en": "Press back to arm extension.",
        "hi": "हाथ के विस्तार तक वापस दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on lower; exhale on push.",
      "hi": "नीचे सांस लें; ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending at the hips.",
        "hi": "कूल्हों से झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Great regression for mastering push-up technique.",
        "hi": "पुश-अप तकनीक में महारत हासिल करने के लिए बेहतरीन व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Standard Push-Ups",
      "hi": "मानक पुश-अप्स"
    },
    "keywords": [
      "incline pushup",
      "beginner chest"
    ]
  },
  {
    "id": "decline-push-ups",
    "name": {
      "en": "Decline Push-Ups",
      "hi": "डिक्लाइन पुश-अप्स (Decline Push-Ups)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Clavicular Head)"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Triceps Brachii",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Bench or Elevated Box",
    "description": {
      "en": "Feet elevated on a bench to shift bodyweight onto the upper chest and shoulders.",
      "hi": "ऊपरी छाती और कंधों पर शरीर का वजन स्थानांतरित करने के लिए बेंच पर पैर ऊपर।"
    },
    "startingPosition": {
      "en": "Hands on floor shoulder-width apart, feet elevated on bench behind you.",
      "hi": "हाथ फर्श पर कंधे की चौड़ाई पर, पैर पीछे बेंच पर ऊपर।"
    },
    "steps": [
      {
        "en": "Lower chest toward floor until chin almost touches.",
        "hi": "छाती को फर्श की ओर तब तक नीचे लाएं जब तक ठुड्डी लगभग छू न जाए।"
      },
      {
        "en": "Press up explosively through palms.",
        "hi": "हथेलियों से तेजी से ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hyperextending lower back.",
        "hi": "निचली पीठ को अत्यधिक मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Brace glutes and abs to avoid lumbar sag.",
        "hi": "कमर को झुकने से रोकने के लिए ग्लूट्स और एब्स को कसें।"
      }
    ],
    "alternative": {
      "en": "Incline Dumbbell Press",
      "hi": "इन्क्लाइन डम्बल प्रेस"
    },
    "keywords": [
      "decline pushup",
      "upper chest",
      "bodyweight"
    ]
  },
  {
    "id": "chest-dips",
    "name": {
      "en": "Chest Dips",
      "hi": "चेस्ट डिप्स (Chest Dips)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major (Lower Head)"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Parallel Dip Bars",
    "description": {
      "en": "Bodyweight dip performed with forward torso lean to heavily emphasize the lower chest and pectoral stretch.",
      "hi": "निचली छाती के विकास के लिए आगे झुककर किया जाने वाला बॉडीवेट डिप व्यायाम।"
    },
    "startingPosition": {
      "en": "Suspend body on parallel bars, lean torso forward ~30 degrees, flare elbows slightly.",
      "hi": "पैरेलल बार पर शरीर को ऊपर उठाएं, धड़ को ~30 डिग्री आगे झुकाएं।"
    },
    "steps": [
      {
        "en": "Lower body slowly until shoulders feel a safe, deep stretch (elbows ~90 degrees).",
        "hi": "शरीर को धीरे-धीरे तब तक नीचे लाएं जब तक कि कंधे गहरा खिंचाव महसूस न करें।"
      },
      {
        "en": "Press forcefully through palms back to arms lockout, maintaining forward torso lean.",
        "hi": "धड़ को आगे झुकाए रखते हुए हथेलियों से वापस ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on descent; exhale powerfully on the upward drive.",
      "hi": "नीचे सांस लें; ऊपर जोर से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Staying completely upright, shifting all load onto triceps.",
        "hi": "पूरी तरह सीधे रहना, जिससे सारा भार ट्राइसेप्स पर चला जाता है।"
      },
      {
        "en": "Dipping too deep with poor shoulder mobility.",
        "hi": "खराब कंधे के लचीलेपन के साथ बहुत नीचे जाना।"
      }
    ],
    "tips": [
      {
        "en": "Cross ankles behind you and bend knees to maintain the forward lean balance.",
        "hi": "आगे के झुकाव को बनाए रखने के लिए टखनों को पीछे क्रॉस करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Warm up shoulders thoroughly before loading weighted dips.",
      "hi": "वेटेड डिप्स करने से पहले कंधों को अच्छी तरह से वार्म अप करें।"
    },
    "alternative": {
      "en": "Decline Barbell Press or Cable High-to-Low",
      "hi": "डिक्लाइन बार्बेल प्रेस"
    },
    "keywords": [
      "dips",
      "chest dips",
      "lower chest",
      "calisthenics"
    ]
  },
  {
    "id": "dumbbell-pullover",
    "name": {
      "en": "Dumbbell Pullover",
      "hi": "डम्बल पुलओवर (Dumbbell Pullover)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major",
      "Serratus Anterior",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Triceps (Long Head)",
      "Intercostals"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbell, Flat Bench",
    "description": {
      "en": "Cross-bench pullover expanding ribcage and targeting both the pectoral muscles and latissimus dorsi.",
      "hi": "रिबकेज का विस्तार करने और पेक्टोरल और लैटिसिमस डॉर्सी दोनों को लक्षित करने वाला पुलओवर व्यायाम।"
    },
    "startingPosition": {
      "en": "Lie perpendicular across a flat bench with upper back supported, hips slightly dropped, holding a dumbbell in diamond grip over chest.",
      "hi": "फ्लैट बेंच पर ऊपरी पीठ के बल लेटें, कूल्हों को थोड़ा नीचे रखें, छाती के ऊपर डायमंड ग्रिप में डम्बल पकड़ें।"
    },
    "steps": [
      {
        "en": "Lower dumbbell back over your head in an arc while keeping a slight elbow bend.",
        "hi": "कोहनी में हल्का मोड़ रखते हुए डम्बल को सिर के पीछे एक चाप में नीचे लाएं।"
      },
      {
        "en": "Reach until you feel an intense stretch in your chest, serratus, and lats.",
        "hi": "छाती और लैट्स में गहरा खिंचाव महसूस होने तक नीचे जाएं।"
      },
      {
        "en": "Pull dumbbell back over your chest using pectoral and serratus contraction.",
        "hi": "पेक्टोरल संकुचन का उपयोग करके डम्बल को वापस छाती के ऊपर खींचें।"
      }
    ],
    "breathing": {
      "en": "Inhale deeply as dumbbell lowers to expand ribcage; exhale as you pull over.",
      "hi": "नीचे जाते समय गहरी सांस लें; ऊपर खींचते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending elbows into a triceps extension.",
        "hi": "कोहनियों को बहुत ज्यादा मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Keep hips low throughout to increase the stretch across the anterior torso.",
        "hi": "धड़ पर खिंचाव बढ़ाने के लिए कूल्हों को नीचे रखें।"
      }
    ],
    "alternative": {
      "en": "Straight-Arm Cable Pulldown",
      "hi": "स्ट्रेट-आर्म केबल पुलडाउन"
    },
    "keywords": [
      "pullover",
      "chest",
      "serratus",
      "lats",
      "ribcage"
    ]
  },
  {
    "id": "smith-machine-bench-press",
    "name": {
      "en": "Smith Machine Bench Press",
      "hi": "स्मिथ मशीन बेंच प्रेस (Smith Machine Bench Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Smith Machine, Flat Bench",
    "description": {
      "en": "Fixed-track bench press that maximizes muscle fiber recruitment without balance constraints.",
      "hi": "निश्चित ट्रैक बेंच प्रेस जो संतुलन की बाधाओं के बिना अधिकतम मांसपेशी फाइबर भर्ती करता है।"
    },
    "startingPosition": {
      "en": "Position bench under Smith bar so it lowers directly to mid-chest.",
      "hi": "बेंच को स्मिथ बार के नीचे रखें ताकि यह सीधे मध्य-छाती तक गिरे।"
    },
    "steps": [
      {
        "en": "Unhook bar with a slight wrist twist.",
        "hi": "कलाई के हल्के मोड़ से बार को अनहुक करें।"
      },
      {
        "en": "Lower bar with a steady tempo to mid-sternum.",
        "hi": "मध्य-उरोस्थि पर एक स्थिर गति से बार को नीचे लाएं।"
      },
      {
        "en": "Press up smoothly to full lockout.",
        "hi": "पूर्ण विस्तार तक आसानी से ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Setting bench off-center from the vertical bar path.",
        "hi": "बेंच को बार पाथ से बाहर रखना।"
      }
    ],
    "tips": [
      {
        "en": "Great for drop sets and training to muscular failure safely.",
        "hi": "सुरक्षित रूप से विफलता तक प्रशिक्षण के लिए बढ़िया।"
      }
    ],
    "alternative": {
      "en": "Barbell Bench Press",
      "hi": "बार्बेल बेंच प्रेस"
    },
    "keywords": [
      "smith machine",
      "bench press",
      "chest"
    ]
  },
  {
    "id": "barbell-floor-press",
    "name": {
      "en": "Barbell Floor Press",
      "hi": "बार्बेल फ्लोर प्रेस (Barbell Floor Press)"
    },
    "muscle": "Chest",
    "primaryMuscles": [
      "Pectoralis Major",
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Squat Rack / Floor",
    "description": {
      "en": "A press performed lying on the floor that eliminates shoulder strain and builds lockout pressing strength.",
      "hi": "फर्श पर लेटकर किया जाने वाला प्रेस जो कंधे के तनाव को समाप्त करता है और लॉकआउट ताकत बनाता है।"
    },
    "startingPosition": {
      "en": "Lie flat on floor with knees bent and feet flat under a racked barbell.",
      "hi": "फर्श पर सपाट लेटें, घुटने मुड़े हुए और पैर फर्श पर।"
    },
    "steps": [
      {
        "en": "Unrack barbell over mid-chest.",
        "hi": "मध्य-छाती पर बारबेल अनरैक करें।"
      },
      {
        "en": "Lower until upper arms touch the floor softly with a brief pause.",
        "hi": "जब तक ऊपरी भुजाएं फर्श को हल्के से न छू लें, नीचे लाएं।"
      },
      {
        "en": "Press bar explosively back to lockout.",
        "hi": "बार को तेजी से वापस लॉकआउट तक दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down; pause; exhale up.",
      "hi": "नीचे सांस लें; रुकें; ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Slamming elbows onto hard floor.",
        "hi": "कोहनियों को फर्श पर पटकना।"
      }
    ],
    "tips": [
      {
        "en": "Pausing on the floor eliminates the stretch-shortening cycle for raw strength.",
        "hi": "फर्श पर रुकना कच्ची ताकत बनाने के लिए बेहतरीन है।"
      }
    ],
    "alternative": {
      "en": "Barbell Bench Press",
      "hi": "बार्बेल बेंच प्रेस"
    },
    "keywords": [
      "floor press",
      "chest",
      "triceps",
      "power"
    ]
  },
  {
    "id": "pull-up",
    "name": {
      "en": "Pull-Ups",
      "hi": "पुल-अप्स (Pull-Ups)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "An essential bodyweight vertical pulling exercise for building incredible back width, V-taper, and upper-body pulling strength.",
      "hi": "शानदार पीठ की चौड़ाई, वी-टेपर और ऊपरी शरीर की खींचने की ताकत बनाने के लिए आवश्यक बॉडीवेट वर्टिकल पुलिंग व्यायाम।"
    },
    "startingPosition": {
      "en": "Grip the overhead bar with an overhand (pronated) grip slightly wider than shoulder-width. Hang in a dead hang with arms fully extended.",
      "hi": "कंधे की चौड़ाई से थोड़ा चौड़ा ओवरहैंड पकड़ के साथ बार को पकड़ें। पूरी तरह से फैली हुई बाहों के साथ लटकें।"
    },
    "steps": [
      {
        "en": "Depress and retract your scapulae before beginning the arm pull.",
        "hi": "हाथ खींचने से पहले अपने स्कैपुला को नीचे और पीछे खींचें।"
      },
      {
        "en": "Drive your elbows down and back toward your ribs, pulling your chest up toward the bar.",
        "hi": "अपनी छाती को बार की ओर खींचते हुए, अपनी कोहनियों को नीचे और पीछे पसलियों की ओर ले जाएं।"
      },
      {
        "en": "Pull until your chin clears the bar comfortably without tilting your head back excessively.",
        "hi": "सिर को पीछे झुकाए बिना तब तक खींचें जब तक आपकी ठुड्डी बार के ऊपर न आ जाए।"
      },
      {
        "en": "Lower yourself with a controlled 3-second eccentric tempo back to a full dead hang.",
        "hi": "नियंत्रित 3-सेकंड की गति के साथ खुद को वापस पूरी तरह से लटकने की स्थिति में लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale at the bottom; exhale forcefully as you drive elbows down to pull upward.",
      "hi": "नीचे सांस लें; ऊपर खींचते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Kicking legs or kipping to swing body up with momentum.",
        "hi": "गति के साथ शरीर को झूलने के लिए पैरों को किक करना।"
      },
      {
        "en": "Cutting the range of motion short and not extending arms fully at the bottom.",
        "hi": "रेंज ऑफ मोशन को कम करना और नीचे बाहों को पूरी तरह न फैलाना।"
      }
    ],
    "tips": [
      {
        "en": "Think about pulling the bar down to your collarbones rather than pulling yourself up.",
        "hi": "खुद को ऊपर खींचने के बजाय बार को अपनी हंसली तक नीचे खींचने के बारे में सोचें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Avoid hyperextending neck over the bar.",
      "hi": "बार के ऊपर गर्दन को अत्यधिक न खींचें।"
    },
    "alternative": {
      "en": "Lat Pulldown or Band-Assisted Pull-Ups",
      "hi": "लैट पुलडाउन या बैंड-असिस्टेड पुल-अप्स"
    },
    "keywords": [
      "pullup",
      "back",
      "lats",
      "bodyweight",
      "v taper"
    ]
  },
  {
    "id": "chin-ups",
    "name": {
      "en": "Chin-Ups",
      "hi": "चिन-अप्स (Chin-Ups)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "Underhand grip pull-up variation recruiting significant biceps assistance while heavily loading the lower lats.",
      "hi": "अंडरहैंड ग्रिप पुल-अप व्यायाम जो निचले लैट्स और बाइसेप्स दोनों को भारी रूप से सक्रिय करता है।"
    },
    "startingPosition": {
      "en": "Hang with an underhand (supinated) grip shoulder-width apart.",
      "hi": "कंधे की चौड़ाई पर अंडरहैंड (सुपीनेटेड) पकड़ के साथ लटकें।"
    },
    "steps": [
      {
        "en": "Engage your back and pull chest upward until chin clears the bar.",
        "hi": "अपनी पीठ को सक्रिय करें और छाती को ऊपर खींचें जब तक ठुड्डी बार के ऊपर न आ जाए।"
      },
      {
        "en": "Squeeze biceps and lats simultaneously at the top.",
        "hi": "शीर्ष पर बाइसेप्स और लैट्स को एक साथ निचोड़ें।"
      },
      {
        "en": "Lower down slowly to full arm extension.",
        "hi": "पूरी तरह से बांह के विस्तार तक धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging hips or bending knees violently.",
        "hi": "कूल्हों को हिलाना या घुटनों को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Easier than pull-ups for beginners due to biceps leverage.",
        "hi": "बाइसेप्स की ताकत के कारण शुरुआती लोगों के लिए पुल-अप्स की तुलना में आसान।"
      }
    ],
    "alternative": {
      "en": "Underhand Lat Pulldown",
      "hi": "अंडरहैंड लैट पुलडाउन"
    },
    "keywords": [
      "chin up",
      "biceps",
      "back",
      "lats",
      "supinated"
    ]
  },
  {
    "id": "lat-pulldown",
    "name": {
      "en": "Lat Pulldown",
      "hi": "लैट पुलडाउन (Lat Pulldown)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rhomboids",
      "Rear Deltoids",
      "Teres Major"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Lat Pulldown Cable Machine",
    "description": {
      "en": "The staple cable vertical pulling exercise allowing scalable resistance to build lat width and back thickness.",
      "hi": "लैट चौड़ाई और पीठ की मोटाई बनाने के लिए समायोज्य प्रतिरोध वाला प्रमुख केबल पुलिंग व्यायाम।"
    },
    "startingPosition": {
      "en": "Adjust thigh pad snugly. Grasp wide bar with overhand grip and sit down with thighs pinned.",
      "hi": "जांघ पैड को सुरक्षित रूप से समायोजित करें। चौड़ी पकड़ से बार पकड़ें और बैठें।"
    },
    "steps": [
      {
        "en": "Lean torso slightly backward (10-15 degrees) and look toward the pulley.",
        "hi": "धड़ को थोड़ा पीछे (10-15 डिग्री) झुकाएं और पुली की ओर देखें।"
      },
      {
        "en": "Drive elbows down and back, pulling bar smoothly to your upper chest.",
        "hi": "कोहनियों को नीचे और पीछे खींचते हुए बार को आसानी से ऊपरी छाती तक लाएं।"
      },
      {
        "en": "Pause for 1 second at full lat contraction.",
        "hi": "पूर्ण संकुचन पर 1 सेकंड रुकें।"
      },
      {
        "en": "Control the bar upward until arms and lats are fully lengthened.",
        "hi": "बार को धीरे-धीरे ऊपर जाने दें जब तक कि लैट्स पूरी तरह से खिंच न जाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on pulldown; inhale as bar returns.",
      "hi": "पुलडाउन पर सांस छोड़ें; बार वापस जाने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Pulling bar behind the neck, causing cervical and rotator cuff impingement.",
        "hi": "बार को गर्दन के पीछे खींचना, जिससे चोट का खतरा होता है।"
      },
      {
        "en": "Leaning back excessively to turn the exercise into a horizontal row.",
        "hi": "व्यायाम को रो में बदलने के लिए बहुत अधिक पीछे झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Use a thumbless (false) grip to minimize forearm fatigue.",
        "hi": "फोरआर्म की थकान को कम करने के लिए थंबलेस ग्रिप का उपयोग करें।"
      }
    ],
    "alternative": {
      "en": "Pull-Ups or Band Pulldowns",
      "hi": "पुल-अप्स या बैंड पुलडाउन"
    },
    "keywords": [
      "lat pulldown",
      "cable",
      "lats",
      "v taper",
      "back"
    ]
  },
  {
    "id": "close-grip-lat-pulldown",
    "name": {
      "en": "Close-Grip Lat Pulldown",
      "hi": "क्लोज़-ग्रिप लैट पुलडाउन (Close-Grip Lat Pulldown)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi (Lower Fibers)"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis",
      "Middle Trapezius"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Cable Machine, V-Bar Attachment",
    "description": {
      "en": "Pulldown using a narrow V-bar attachment that increases lat stretch and emphasizes lower lat engagement.",
      "hi": "संकीर्ण वी-बार के साथ पुलडाउन जो लैट खिंचाव को बढ़ाता है और निचले लैट पर जोर देता है।"
    },
    "startingPosition": {
      "en": "Attach V-bar, sit with thighs secured under pads, grasp neutral handles.",
      "hi": "वी-बार लगाएं, जांघों को पैड के नीचे सुरक्षित करें, हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Pull V-bar down toward your sternum.",
        "hi": "वी-बार को अपनी उरोस्थि की ओर नीचे खींचें।"
      },
      {
        "en": "Arch chest slightly to meet the handle.",
        "hi": "हैंडल से मिलने के लिए छाती को थोड़ा ऊपर उठाएं।"
      },
      {
        "en": "Release back up to a full overhead stretch.",
        "hi": "पूरे ओवरहेड खिंचाव के लिए वापस ऊपर छोड़ें।"
      }
    ],
    "breathing": {
      "en": "Exhale on pull; inhale on stretch.",
      "hi": "खींचने पर सांस छोड़ें; खिंचाव पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rounding shoulders forward at the bottom.",
        "hi": "निचले हिस्से में कंधों को आगे गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "Keep elbows pointed forward during the pull to direct tension into lower lats.",
        "hi": "खिंचाव को निचले लैट्स में निर्देशित करने के लिए कोहनियों को आगे की ओर रखें।"
      }
    ],
    "alternative": {
      "en": "Neutral-Grip Lat Pulldown",
      "hi": "न्यूट्रल-ग्रिप लैट पुलडाउन"
    },
    "keywords": [
      "close grip",
      "v bar pulldown",
      "lower lats"
    ]
  },
  {
    "id": "neutral-grip-lat-pulldown",
    "name": {
      "en": "Neutral-Grip Lat Pulldown",
      "hi": "न्यूट्रल-ग्रिप लैट पुलडाउन (Neutral-Grip Lat Pulldown)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Teres Major",
      "Rhomboids"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Lat Machine, Parallel-Grip Bar",
    "description": {
      "en": "Shoulder-friendly pulldown with palms facing each other, maximizing shoulder range of motion.",
      "hi": "कंधे के अनुकूल पुलडाउन जिसमें हथेलियां एक दूसरे के सामने होती हैं।"
    },
    "startingPosition": {
      "en": "Grip shoulder-width parallel handles, sit with legs locked in pad.",
      "hi": "कंधे की चौड़ाई के समानांतर हैंडल पकड़ें, पैड में पैर लॉक करके बैठें।"
    },
    "steps": [
      {
        "en": "Pull handles down toward upper chest.",
        "hi": "हैंडल को ऊपरी छाती की ओर नीचे खींचें।"
      },
      {
        "en": "Drive elbows into your sides and hold peak squeeze.",
        "hi": "कोहनियों को अपने किनारों में दबाएं और पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Return upward under continuous tension.",
        "hi": "निरंतर तनाव के तहत ऊपर लौटें।"
      }
    ],
    "breathing": {
      "en": "Exhale down, inhale up.",
      "hi": "नीचे सांस छोड़ें, ऊपर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using jerky momentum to yank the weight.",
        "hi": "वजन को झटका देने के लिए गति का उपयोग करना।"
      }
    ],
    "tips": [
      {
        "en": "Very gentle on shoulders and wrists.",
        "hi": "कंधों और कलाइयों पर बहुत कोमल।"
      }
    ],
    "alternative": {
      "en": "Lat Pulldown",
      "hi": "लैट पुलडाउन"
    },
    "keywords": [
      "neutral grip",
      "parallel pulldown",
      "back width"
    ]
  },
  {
    "id": "barbell-bent-over-row",
    "name": {
      "en": "Barbell Bent-Over Row",
      "hi": "बार्बेल बेंट-ओवर रो (Barbell Bent-Over Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Weight Plates",
    "description": {
      "en": "The heavyweight champion of horizontal pulling, forging a thick upper back, powerful lats, and isometric spinal strength.",
      "hi": "क्षैतिज खींचने का सबसे प्रमुख व्यायाम, जो मोटी ऊपरी पीठ और शक्तिशाली लैट्स का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "Hinge forward at hips at a 45-degree angle, knees slightly bent, back flat and rigid, barbell hanging at arms length.",
      "hi": "कूल्हों पर 45 डिग्री के कोण पर आगे झुकें, घुटने थोड़े मुड़े हुए, पीठ सपाट और मजबूत।"
    },
    "steps": [
      {
        "en": "Grip bar with overhand grip just outside knees.",
        "hi": "घुटनों के ठीक बाहर ओवरहैंड पकड़ से बार को पकड़ें।"
      },
      {
        "en": "Pull the barbell back toward your lower ribcage / navel by driving elbows to ceiling.",
        "hi": "कोहनियों को छत की ओर ले जाते हुए बारबेल को अपनी निचली पसलियों/नाभि की ओर खींचें।"
      },
      {
        "en": "Retract and squeeze shoulder blades together at the top.",
        "hi": "शीर्ष पर शोल्डर ब्लेड्स को एक साथ पीछे खींचें और निचोड़ें।"
      },
      {
        "en": "Lower bar smoothly to full stretch without losing spine posture.",
        "hi": "रीढ़ की मुद्रा खोए बिना बार को धीरे-धीरे पूरे खिंचाव तक नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Brace core and inhale; exhale as you row the bar into your torso.",
      "hi": "कोर को कसें और सांस लें; धड़ में बार खींचते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding the lumbar lower back under heavy load.",
        "hi": "भारी वजन के तहत निचली पीठ को गोल करना।"
      },
      {
        "en": "Standing too upright (Yates style) and turning the row into a high shrug.",
        "hi": "बहुत सीधे खड़े होना और रो को श्रग में बदलना।"
      }
    ],
    "tips": [
      {
        "en": "Imagine your hands are merely hooks; pull exclusively with your back and elbows.",
        "hi": "कल्पना करें कि आपके हाथ सिर्फ हुक हैं; केवल पीठ और कोहनियों से खींचें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Never allow lower back to flex under heavy load.",
      "hi": "भारी वजन के नीचे कभी भी निचली पीठ को झुकने न दें।"
    },
    "alternative": {
      "en": "Pendlay Row or Chest-Supported Row",
      "hi": "पेंडले रो या चेस्ट-सपोर्टेड रो"
    },
    "keywords": [
      "barbell row",
      "bent over row",
      "back thickness",
      "lats",
      "rhomboids"
    ]
  },
  {
    "id": "pendlay-row",
    "name": {
      "en": "Pendlay Row",
      "hi": "पेंडले रो (Pendlay Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Bumper Plates",
    "description": {
      "en": "Strict horizontal row starting dead from the floor on every repetition, developing explosive pulling power.",
      "hi": "सख्त क्षैतिज रो जो हर रेप पर फर्श से शुरू होता है, विस्फोटक खींचने की शक्ति विकसित करता है।"
    },
    "startingPosition": {
      "en": "Torso strictly parallel to the floor, bar resting dead on the ground over mid-foot.",
      "hi": "धड़ फर्श के समानांतर, बार पैर के मध्य के ऊपर जमीन पर स्थिर।"
    },
    "steps": [
      {
        "en": "Brace core hard and explosively pull bar to lower sternum without raising torso angle.",
        "hi": "धड़ के कोण को बदले बिना बार को विस्फोटक रूप से निचली उरोस्थि तक खींचें।"
      },
      {
        "en": "Touch chest, then return bar completely to floor dead stop.",
        "hi": "छाती को छुएं, फिर बार को पूरी तरह से फर्श पर वापस रख दें।"
      }
    ],
    "breathing": {
      "en": "Exhale violently on the pull; inhale as weight rests on floor.",
      "hi": "खींचने पर तेजी से सांस छोड़ें; फर्श पर वजन आने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Jerking the chest up to heave the weight.",
        "hi": "वजन उठाने के लिए छाती को झटका देना।"
      }
    ],
    "tips": [
      {
        "en": "Reset your breath and lat tension on the floor before each rep.",
        "hi": "प्रत्येक रेप से पहले फर्श पर अपनी सांस और लैट तनाव को रीसेट करें।"
      }
    ],
    "alternative": {
      "en": "Barbell Bent-Over Row",
      "hi": "बार्बेल बेंट-ओवर रो"
    },
    "keywords": [
      "pendlay row",
      "explosive",
      "deadstop row",
      "back"
    ]
  },
  {
    "id": "one-arm-dumbbell-row",
    "name": {
      "en": "One-Arm Dumbbell Row",
      "hi": "वन-आर्म डम्बल रो (One-Arm Dumbbell Row)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rear Deltoids",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbell, Flat Bench",
    "description": {
      "en": "Unilateral dumbbell row supporting the spine on a bench, allowing heavy overload and full lat extension.",
      "hi": "बेंच पर रीढ़ को सहारा देने वाला डम्बल रो, जो भारी वजन और पूरे लैट विस्तार की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Place one knee and hand on flat bench. Opposite foot planted on floor, torso flat.",
      "hi": "फ्लैट बेंच पर एक घुटना और हाथ रखें। दूसरा पैर फर्श पर, धड़ सपाट।"
    },
    "steps": [
      {
        "en": "Hold dumbbell in working hand at full extension, feeling lat stretch.",
        "hi": "पूरी तरह से विस्तारित हाथ में डम्बल पकड़ें, लैट खिंचाव महसूस करें।"
      },
      {
        "en": "Pull dumbbell in a slight J-curve toward hip pocket, keeping elbow tight to torso.",
        "hi": "डम्बल को हिप पॉकेट की ओर खींचें, कोहनी को धड़ के पास रखें।"
      },
      {
        "en": "Squeeze lat tightly at top, then lower with control.",
        "hi": "शीर्ष पर लैट को कसकर निचोड़ें, फिर नियंत्रण के साथ नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling to hip; inhale lowering.",
      "hi": "हिप की ओर खींचते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rotating torso excessively to heave the dumbbell up.",
        "hi": "डम्बल को उठाने के लिए धड़ को अत्यधिक घुमाना।"
      }
    ],
    "tips": [
      {
        "en": "Pull elbow toward hip rather than straight up to isolate the lats over upper traps.",
        "hi": "लैट्स को अलग करने के लिए कोहनी को सीधे ऊपर करने के बजाय हिप की ओर खींचें।"
      }
    ],
    "alternative": {
      "en": "Seated Cable Row",
      "hi": "सीटेड केबल रो"
    },
    "keywords": [
      "dumbbell row",
      "single arm row",
      "lats",
      "back"
    ]
  },
  {
    "id": "seated-cable-row",
    "name": {
      "en": "Seated Cable Row",
      "hi": "सीटेड केबल रो (Seated Cable Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Low Cable Row Machine, V-Grip Handle",
    "description": {
      "en": "Seated horizontal cable row providing uniform resistance to pack dense muscle onto the mid-back and rhomboids.",
      "hi": "मध्य-पीठ और रॉमबॉइड्स पर घने मांसपेशी निर्माण के लिए समान प्रतिरोध प्रदान करने वाला सीटेड केबल रो।"
    },
    "startingPosition": {
      "en": "Sit on bench with knees slightly bent, feet on footplates, hold V-handle with upright torso.",
      "hi": "घुटनों को थोड़ा मोड़कर बेंच पर बैठें, फुटप्लेट पर पैर रखें, सीधे धड़ के साथ वी-हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Pull handle into lower abdomen while driving chest forward and pinching shoulder blades.",
        "hi": "छाती को आगे बढ़ाते हुए और शोल्डर ब्लेड्स को मिलाते हुए हैंडल को निचले पेट में खींचें।"
      },
      {
        "en": "Hold peak squeeze for 1 second.",
        "hi": "1 सेकंड के लिए पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Extend arms forward slowly allowing back to stretch without rounding spine.",
        "hi": "रीढ़ को गोल किए बिना बाहों को धीरे-धीरे आगे बढ़ाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling in; inhale releasing forward.",
      "hi": "अंदर खींचते समय सांस छोड़ें; आगे छोड़ते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rocking back and forth violently like a rower.",
        "hi": "नाव चलाने वाले की तरह आगे-पीछे झूलना।"
      }
    ],
    "tips": [
      {
        "en": "Keep torso stationary at a 90-degree angle to the bench.",
        "hi": "बेंच से 90 डिग्री के कोण पर धड़ को स्थिर रखें।"
      }
    ],
    "alternative": {
      "en": "Chest-Supported Row",
      "hi": "चेस्ट-सपोर्टेड रो"
    },
    "keywords": [
      "cable row",
      "seated row",
      "rhomboids",
      "mid back"
    ]
  },
  {
    "id": "chest-supported-row",
    "name": {
      "en": "Chest-Supported Row",
      "hi": "चेस्ट-सपोर्टेड रो (Chest-Supported Row)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Rhomboids",
      "Middle Trapezius",
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Rear Deltoids",
      "Biceps"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Incline Bench, Dumbbells or T-Bar Machine",
    "description": {
      "en": "Eliminates lower-back strain by bracing chest against an incline pad, isolating upper-back pulling muscles.",
      "hi": "इनक्लाइन पैड पर छाती को सहारा देकर निचली पीठ के तनाव को समाप्त करता है और ऊपरी पीठ को अलग करता है।"
    },
    "startingPosition": {
      "en": "Lie face down on 30-degree incline bench with dumbbells hanging naturally.",
      "hi": "30-डिग्री इन्क्लाइन बेंच पर मुंह नीचे करके लेटें, डम्बल स्वाभाविक रूप से लटके हों।"
    },
    "steps": [
      {
        "en": "Row dumbbells up toward ribs, driving elbows high.",
        "hi": "कोहनियों को ऊंचा उठाते हुए डम्बल को पसलियों की ओर रो करें।"
      },
      {
        "en": "Pinch shoulder blades hard at top.",
        "hi": "शीर्ष पर शोल्डर ब्लेड्स को जोर से निचोड़ें।"
      },
      {
        "en": "Lower weights under complete control.",
        "hi": "पूर्ण नियंत्रण के तहत वजन नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale rowing; inhale lowering.",
      "hi": "रो करते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Lifting chest off the pad to assist the row.",
        "hi": "रो में सहायता के लिए पैड से छाती उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Ideal exercise for lifters with lower back sensitivity.",
        "hi": "निचली पीठ की संवेदनशीलता वाले लोगों के लिए आदर्श व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Seated Cable Row",
      "hi": "सीटेड केबल रो"
    },
    "keywords": [
      "chest supported row",
      "incline dumbbell row",
      "safe back"
    ]
  },
  {
    "id": "t-bar-row",
    "name": {
      "en": "T-Bar Row",
      "hi": "टी-बार रो (T-Bar Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "T-Bar Row Platform or Landmine",
    "description": {
      "en": "Old-school powerhouse row using a close neutral grip for maximum mid-back thickness and pulling power.",
      "hi": "अधिकतम मध्य-पीठ मोटाई और खींचने की शक्ति के लिए क्लोज़ न्यूट्रल ग्रिप वाला क्लासिक रो।"
    },
    "startingPosition": {
      "en": "Straddle T-bar platform, hinge hips at 45 degrees, grip handles firmly.",
      "hi": "टी-बार प्लेटफॉर्म पर खड़े हों, कूल्हों को 45 डिग्री पर मोड़ें, हैंडल मजबूती से पकड़ें।"
    },
    "steps": [
      {
        "en": "Pull weight plates into upper abdomen.",
        "hi": "वजन प्लेट्स को ऊपरी पेट में खींचें।"
      },
      {
        "en": "Contract traps, rhomboids, and lats forcefully.",
        "hi": "ट्रैप्स, रॉमबॉइड्स और लैट्स को बलपूर्वक सिकोड़ें।"
      },
      {
        "en": "Lower weight until arms are fully straight.",
        "hi": "जब तक बाहें पूरी तरह सीधी न हो जाएं, वजन नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on contraction; inhale on stretch.",
      "hi": "संकुचन पर सांस छोड़ें; खिंचाव पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rounding back or standing up during the set.",
        "hi": "सेट के दौरान पीठ को गोल करना या सीधे खड़े होना।"
      }
    ],
    "tips": [
      {
        "en": "Use smaller 25-lb plates to allow deeper range of motion before plates hit chest.",
        "hi": "गहरी रेंज ऑफ मोशन की अनुमति देने के लिए छोटी प्लेट्स का उपयोग करें।"
      }
    ],
    "alternative": {
      "en": "Barbell Bent-Over Row",
      "hi": "बार्बेल बेंट-ओवर रो"
    },
    "keywords": [
      "t-bar row",
      "landmine row",
      "back thickness"
    ]
  },
  {
    "id": "machine-row",
    "name": {
      "en": "Machine Row",
      "hi": "मशीन रो (Machine Row)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rear Deltoids"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Plate-Loaded or Selectorized Row Machine",
    "description": {
      "en": "Guided horizontal row machine with independent arms for balanced back hypertrophy without core fatigue.",
      "hi": "कोर थकान के बिना संतुलित बैक हाइपरट्रॉफी के लिए स्वतंत्र हथियारों वाली गाइडेड रो मशीन।"
    },
    "startingPosition": {
      "en": "Adjust seat so chest pad rests firmly against sternum, handles within arm reach.",
      "hi": "सीट को समायोजित करें ताकि चेस्ट पैड उरोस्थि पर टिके।"
    },
    "steps": [
      {
        "en": "Pull handles backward, driving elbows behind torso.",
        "hi": "हैंडल को पीछे खींचें, कोहनियों को धड़ के पीछे ले जाएं।"
      },
      {
        "en": "Squeeze shoulder blades together for a count.",
        "hi": "शोल्डर ब्लेड्स को एक साथ निचोड़ें।"
      },
      {
        "en": "Return smoothly to full arm reach.",
        "hi": "पूर्ण हाथ की पहुंच तक आसानी से वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling; inhale returning.",
      "hi": "खींचते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting stack slam down violently.",
        "hi": "वजन को जोर से टकराने देना।"
      }
    ],
    "tips": [
      {
        "en": "Great for single-arm unilateral work.",
        "hi": "एक हाथ से काम करने के लिए बेहतरीन।"
      }
    ],
    "alternative": {
      "en": "Seated Cable Row",
      "hi": "सीटेड केबल रो"
    },
    "keywords": [
      "machine row",
      "plate loaded row",
      "back"
    ]
  },
  {
    "id": "inverted-row",
    "name": {
      "en": "Inverted Row",
      "hi": "इनवर्टेड रो (Inverted Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Smith Machine Bar or Suspension Straps",
    "description": {
      "en": "Horizontal bodyweight pulling exercise, also known as the Australian pull-up, building functional posture and strength.",
      "hi": "कार्यात्मक मुद्रा और ताकत का निर्माण करने वाला बॉडीवेट खींचने वाला व्यायाम।"
    },
    "startingPosition": {
      "en": "Lie under waist-height bar, grasp with overhand grip, body straight heels on floor.",
      "hi": "कमर की ऊंचाई वाले बार के नीचे लेटें, ओवरहैंड पकड़, शरीर सीधा, एड़ी फर्श पर।"
    },
    "steps": [
      {
        "en": "Pull chest up to touch the bar, keeping body in a rigid plank.",
        "hi": "शरीर को एक कठोर प्लैंक में रखते हुए, बार को छूने के लिए छाती को ऊपर खींचें।"
      },
      {
        "en": "Squeeze back muscles at top.",
        "hi": "शीर्ष पर पीठ की मांसपेशियों को निचोड़ें।"
      },
      {
        "en": "Lower down slowly to full arm hang.",
        "hi": "पूरी तरह से बांह लटकने तक धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Sagging hips.",
        "hi": "कूल्हों को नीचे लटकाना।"
      }
    ],
    "tips": [
      {
        "en": "Bend knees to make easier; elevate feet to increase difficulty.",
        "hi": "आसान बनाने के लिए घुटने मोड़ें; कठिन बनाने के लिए पैरों को ऊपर उठाएं।"
      }
    ],
    "alternative": {
      "en": "Seated Cable Row",
      "hi": "सीटेड केबल रो"
    },
    "keywords": [
      "inverted row",
      "calisthenics",
      "bodyweight back"
    ]
  },
  {
    "id": "straight-arm-cable-pulldown",
    "name": {
      "en": "Straight-Arm Cable Pulldown",
      "hi": "स्ट्रेट-आर्म केबल पुलडाउन (Straight-Arm Cable Pulldown)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Triceps (Long Head)",
      "Posterior Deltoid"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "High Cable Pulley, Straight Bar or Rope",
    "description": {
      "en": "Pure lat isolation movement that bypasses the biceps to directly fatigue the latissimus dorsi fibers.",
      "hi": "शुद्ध लैट आइसोलेशन व्यायाम जो बाइसेप्स को बायपास करके सीधे लैट्स को थकाता है।"
    },
    "startingPosition": {
      "en": "Stand facing high pulley, grasp bar shoulder-width with straight arms, slight forward torso hinge.",
      "hi": "हाई पुली के सामने खड़े हों, सीधी बाहों से बार पकड़ें, थोड़ा आगे झुकें।"
    },
    "steps": [
      {
        "en": "Keeping arms almost straight, sweep bar downward in an arc to your thighs.",
        "hi": "बाहों को लगभग सीधा रखते हुए, बार को अपनी जांघों तक एक चाप में नीचे लाएं।"
      },
      {
        "en": "Squeeze lats intensely as bar touches legs.",
        "hi": "जैसे ही बार पैरों को छुए, लैट्स को तीव्रता से निचोड़ें।"
      },
      {
        "en": "Allow bar to float upward back to eye level under control.",
        "hi": "बार को नियंत्रण में आंखों के स्तर तक वापस ऊपर जाने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling down; inhale floating up.",
      "hi": "नीचे खींचते समय सांस छोड़ें; ऊपर जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bending elbows into a triceps pushdown.",
        "hi": "कोहनियों को मोड़कर ट्राइसेप्स पुशडाउन बनाना।"
      }
    ],
    "tips": [
      {
        "en": "Incredible mind-muscle connection builder for the lats.",
        "hi": "लैट्स के लिए माइंड-मसल कनेक्शन बनाने के लिए शानदार व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Pullover",
      "hi": "डम्बल पुलओवर"
    },
    "keywords": [
      "straight arm pulldown",
      "lat isolation",
      "cable"
    ]
  },
  {
    "id": "rack-pull",
    "name": {
      "en": "Rack Pull",
      "hi": "रैक पुल (Rack Pull)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Squat Rack Safeties",
    "description": {
      "en": "Partial-range deadlift starting from knee height in a power rack to overload upper back, traps, and grip.",
      "hi": "ऊपरी पीठ, ट्रैप्स और ग्रिप को अधिभारित करने के लिए घुटने की ऊंचाई से शुरू होने वाला डेडलिफ्ट।"
    },
    "startingPosition": {
      "en": "Set safety pins just below knee cap. Step to bar with deadlift stance.",
      "hi": "घुटने के ठीक नीचे सेफ्टी पिन सेट करें। डेडलिफ्ट मुद्रा के साथ बार के पास आएं।"
    },
    "steps": [
      {
        "en": "Grip bar outside legs, brace lats and core.",
        "hi": "पैरों के बाहर बार पकड़ें, लैट्स और कोर को कसें।"
      },
      {
        "en": "Drive hips forward and lock out standing tall with chest up.",
        "hi": "कूल्हों को आगे बढ़ाएं और छाती ऊपर करके सीधे खड़े होकर लॉकआउट करें।"
      },
      {
        "en": "Lower bar back onto pins under control.",
        "hi": "बार को नियंत्रण में पिन पर वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale brace at bottom; exhale at top lockout.",
      "hi": "नीचे सांस भरकर कसें; शीर्ष पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hyperextending spine backward at top.",
        "hi": "शीर्ष पर रीढ़ को पीछे अत्यधिक मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Allows heavier loads than full deadlifts to build trap density.",
        "hi": "ट्रैप घनत्व बनाने के लिए पूर्ण डेडलिफ्ट से अधिक वजन की अनुमति देता है।"
      }
    ],
    "alternative": {
      "en": "Conventional Deadlift",
      "hi": "कन्वेंशनल डेडलिफ्ट"
    },
    "keywords": [
      "rack pull",
      "upper back",
      "traps",
      "heavy pull"
    ]
  },
  {
    "id": "conventional-deadlift",
    "name": {
      "en": "Conventional Deadlift",
      "hi": "कन्वेंशनल डेडलिफ्ट (Conventional Deadlift)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Weight Plates",
    "description": {
      "en": "The ultimate full-body test of brute strength, recruiting the entire posterior chain from calves to upper traps.",
      "hi": "कच्ची ताकत का अंतिम परीक्षण, जो बछड़ों से लेकर ऊपरी ट्रैप्स तक पूरी पोस्टीरियर चेन को जोड़ता है।"
    },
    "startingPosition": {
      "en": "Feet hip-width apart under the barbell, shins 1 inch from bar. Hinge down, grip bar just outside shins with straight back.",
      "hi": "बारबेल के नीचे पैर हिप-चौड़ाई पर, पिंडली बार से 1 इंच दूर। सीधी पीठ के साथ बार को पकड़ें।"
    },
    "steps": [
      {
        "en": "Pull slack out of the barbell and wedge hips into position.",
        "hi": "बारबेल से ढीलापन खींचें और कूल्हों को स्थिति में लाएं।"
      },
      {
        "en": "Push floor away through your heels while dragging bar tight up against shins.",
        "hi": "पिंडलियों से बार को सटाकर रखते हुए एड़ी से फर्श को नीचे धकेलें।"
      },
      {
        "en": "Drive hips forward to lock out standing completely upright.",
        "hi": "पूरी तरह से सीधे खड़े होने के लिए कूल्हों को आगे बढ़ाएं।"
      },
      {
        "en": "Hinge hips back and guide bar straight down to floor.",
        "hi": "कूल्हों को पीछे करें और बार को सीधे फर्श पर लाएं।"
      }
    ],
    "breathing": {
      "en": "Deep diaphragmatic inhale and abdominal brace at floor; exhale through teeth at lockout.",
      "hi": "फर्श पर गहरी सांस लें और पेट कसें; लॉकआउट पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding the lumbar spine off the floor.",
        "hi": "फर्श से उठाते समय निचली पीठ को गोल करना।"
      },
      {
        "en": "Letting bar drift away from shins, creating massive lower-back lever arm.",
        "hi": "बार को पिंडलियों से दूर जाने देना।"
      }
    ],
    "tips": [
      {
        "en": "Think of the deadlift as pushing the earth away with your legs rather than pulling with your arms.",
        "hi": "डेडलिफ्ट को बाहों से खींचने के बजाय अपने पैरों से पृथ्वी को दूर धकेलने के रूप में सोचें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Never compromise spine neutrality for more weight.",
      "hi": "अधिक वजन के लिए रीढ़ की तटस्थता से कभी समझौता न करें।"
    },
    "alternative": {
      "en": "Trap Bar Deadlift or Romanian Deadlift",
      "hi": "ट्रैप बार डेडलिफ्ट या रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "deadlift",
      "posterior chain",
      "erectors",
      "lats",
      "full body strength"
    ]
  },
  {
    "id": "back-extensions",
    "name": {
      "en": "Back Extensions",
      "hi": "बैक एक्सटेंशन्स (Back Extensions)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Hyperextension Bench (45-degree or Roman Chair)",
    "description": {
      "en": "Strengthens the spinal erectors and lower back stabilizers to bulletproof posture and prevent injury.",
      "hi": "मुद्रा को मजबूत करने और चोट को रोकने के लिए रीढ़ की हड्डी और निचली पीठ को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Position hips on pad just below hip crease, ankles locked in support rollers.",
      "hi": "कूल्हों को पैड पर हिप क्रीज के ठीक नीचे रखें, टखने रोलर्स में लॉक हों।"
    },
    "steps": [
      {
        "en": "Lower torso forward bending at the hips until hamstring stretch is felt.",
        "hi": "कूल्हों से झुकते हुए धड़ को आगे नीचे लाएं जब तक हैमस्ट्रिंग खिंचाव महसूस न हो।"
      },
      {
        "en": "Raise torso up using lower-back erectors until body forms a straight line.",
        "hi": "रीढ़ की मांसपेशियों का उपयोग करके धड़ को तब तक ऊपर उठाएं जब तक शरीर सीधी रेखा न बन जाए।"
      },
      {
        "en": "Pause for 1 second at parallel.",
        "hi": "समानांतर पर 1 सेकंड रुकें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hyperextending spine excessively past neutral.",
        "hi": "रीढ़ को अत्यधिक पीछे की ओर मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Hold a weight plate across chest to progress resistance.",
        "hi": "प्रतिरोध बढ़ाने के लिए छाती पर वजन प्लेट रखें।"
      }
    ],
    "alternative": {
      "en": "Good Morning or Bird Dog",
      "hi": "गुड मॉर्निंग या बर्ड डॉग"
    },
    "keywords": [
      "back extension",
      "hyperextension",
      "lower back",
      "erectors"
    ]
  },
  {
    "id": "face-pulls",
    "name": {
      "en": "Face Pulls",
      "hi": "फेस पुल्स (Face Pulls)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Cable Machine, Rope Attachment",
    "description": {
      "en": "The golden exercise for shoulder health and upper-back posture, strengthening the rotator cuff and rear delts.",
      "hi": "कंधे के स्वास्थ्य और ऊपरी पीठ की मुद्रा के लिए उत्कृष्ट व्यायाम, जो रोटेटर कफ को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Set cable pulley at eye height, attach rope, grasp ends with thumbs pointing back.",
      "hi": "पुली को आंखों की ऊंचाई पर सेट करें, रस्सी लगाएं, अंगूठे पीछे करके सिरों को पकड़ें।"
    },
    "steps": [
      {
        "en": "Step back into a stable split stance.",
        "hi": "स्थिर मुद्रा में एक कदम पीछे हटें।"
      },
      {
        "en": "Pull rope directly toward your face while externally rotating hands backward.",
        "hi": "हाथों को पीछे की ओर घुमाते हुए रस्सी को सीधे चेहरे की ओर खींचें।"
      },
      {
        "en": "Separate hands at the end so thumbs finish beside your ears in a double-bicep pose.",
        "hi": "अंत में हाथों को अलग करें ताकि अंगूठे कानों के पास समाप्त हों।"
      },
      {
        "en": "Hold peak squeeze for 2 seconds.",
        "hi": "2 सेकंड के लिए पीक संकुचन बनाए रखें।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling back; inhale returning forward.",
      "hi": "पीछे खींचते समय सांस छोड़ें; आगे लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using too much weight and yanking with lower-body lean.",
        "hi": "बहुत अधिक वजन का उपयोग करना और शरीर को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Essential antidote for modern slouched desk posture.",
        "hi": "आधुनिक डेस्क मुद्रा के सुधार के लिए आवश्यक व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Band Pull-Aparts",
      "hi": "बैंड पुल-अपार्ट्स"
    },
    "keywords": [
      "face pull",
      "rear delts",
      "upper back",
      "posture",
      "rotator cuff"
    ]
  },
  {
    "id": "meadows-row",
    "name": {
      "en": "Meadows Row",
      "hi": "मीडोज़ रो (Meadows Row)"
    },
    "muscle": "Back",
    "primaryMuscles": [
      "Latissimus Dorsi",
      "Rear Deltoids"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Biceps",
      "Forearms"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Landmine Base, Barbell",
    "description": {
      "en": "Invented by bodybuilding legend John Meadows, standing perpendicular to a landmine to isolate the lower lat sweep.",
      "hi": "जॉन मीडोज़ द्वारा आविष्कार किया गया लैंडमाइन रो, जो निचले लैट को अलग करता है।"
    },
    "startingPosition": {
      "en": "Stand perpendicular to the loaded end of a landmine barbell in a staggered stance.",
      "hi": "लैंडमाइन बारबेल के लंबवत खड़े हों।"
    },
    "steps": [
      {
        "en": "Grip thick collar of the bar with working hand.",
        "hi": "बार के मोटे कॉलर को पकड़ें।"
      },
      {
        "en": "Row elbow up and back in a sweeping arc past your hip.",
        "hi": "कोहनी को हिप के पीछे एक चाप में रो करें।"
      },
      {
        "en": "Lower bar to a deep stretch at bottom.",
        "hi": "निचले हिस्से में गहरे खिंचाव तक बार को नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Standing too upright.",
        "hi": "बहुत सीधे खड़े होना।"
      }
    ],
    "tips": [
      {
        "en": "Use lifting straps so your grip does not limit back overload.",
        "hi": "स्ट्रैप का उपयोग करें ताकि पकड़ आपकी सीमा न बने।"
      }
    ],
    "alternative": {
      "en": "One-Arm Dumbbell Row",
      "hi": "वन-आर्म डम्बल रो"
    },
    "keywords": [
      "meadows row",
      "landmine",
      "john meadows",
      "lats"
    ]
  },
  {
    "id": "kroc-row",
    "name": {
      "en": "Kroc Row",
      "hi": "क्रॉक रो (Kroc Row)"
    },
    "muscle": "Back",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Heavy Dumbbell, Flat Bench",
    "description": {
      "en": "High-rep, ultra-heavy dumbbell row with controlled body English for extreme back hypertrophy and grip strength.",
      "hi": "अत्यधिक बैक हाइपरट्रॉफी और ग्रिप ताकत के लिए भारी डम्बल हाई-रेप रो।"
    },
    "startingPosition": {
      "en": "One hand braced on bench or rack, feet wide in an athletic stagger.",
      "hi": "एक हाथ बेंच पर, पैर चौड़े।"
    },
    "steps": [
      {
        "en": "Pull monstrous dumbbell from deep stretch up past the ribs.",
        "hi": "गहरे खिंचाव से पसलियों के पार भारी डम्बल को खींचें।"
      },
      {
        "en": "Perform high reps (15-25) with explosive power.",
        "hi": "विस्फोटक शक्ति के साथ उच्च रेप्स (15-25) करें।"
      }
    ],
    "breathing": {
      "en": "Rhythmic power breathing on each pull.",
      "hi": "प्रत्येक खिंचाव पर लयबद्ध शक्ति श्वास।"
    },
    "mistakes": [
      {
        "en": "Completely dropping back curvature.",
        "hi": "पीठ का आर्च पूरी तरह खो देना।"
      }
    ],
    "tips": [
      {
        "en": "Mental toughness builder popular in powerlifting.",
        "hi": "पावरलिफ्टिंग में लोकप्रिय मानसिक मजबूती निर्माता।"
      }
    ],
    "alternative": {
      "en": "One-Arm Dumbbell Row",
      "hi": "वन-आर्म डम्बल रो"
    },
    "keywords": [
      "kroc row",
      "heavy dumbbell",
      "grip",
      "back"
    ]
  },
  {
    "id": "barbell-overhead-press",
    "name": {
      "en": "Barbell Overhead Press",
      "hi": "बार्बेल ओवरहेड प्रेस (Barbell Overhead Press)"
    },
    "muscle": "Shoulders",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "The classic standing military press building boulder shoulders, core stability, and raw vertical pushing power.",
      "hi": "कंधों, कोर स्थिरता और कच्ची वर्टिकल पुशिंग पावर का निर्माण करने वाला क्लासिक स्टैंडिंग मिलिट्री प्रेस।"
    },
    "startingPosition": {
      "en": "Stand with feet hip-width apart. Hold barbell across front shoulders with hands just outside shoulders, elbows tucked forward under the bar.",
      "hi": "पैरों को हिप-चौड़ाई पर रखकर खड़े हों। कंधों के ठीक बाहर हाथों से बारबेल को सामने के कंधों पर रखें।"
    },
    "steps": [
      {
        "en": "Squeeze glutes, brace abs, and pull chin slightly back.",
        "hi": "ग्लूट्स को निचोड़ें, एब्स को कसें और ठुड्डी को थोड़ा पीछे खींचें।"
      },
      {
        "en": "Press the barbell straight up in a vertical path, clearing your forehead.",
        "hi": "बारबेल को सीधे ऊपर की ओर दबाएं, अपने माथे को साफ करते हुए।"
      },
      {
        "en": "Push head forward through the window of your arms as the bar locks out overhead.",
        "hi": "जैसे ही बार ओवरहेड लॉक हो, सिर को बाहों की खिड़की के माध्यम से आगे बढ़ाएं।"
      },
      {
        "en": "Lower bar back down to the collarbone shelf with control.",
        "hi": "नियंत्रण के साथ बार को वापस हंसली तक नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale at collarbone; press up while exhaling; inhale as bar returns.",
      "hi": "हंसली पर सांस लें; सांस छोड़ते हुए ऊपर दबाएं; बार लौटने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Excessive backward spine arching, turning it into a standing incline chest press.",
        "hi": "अत्यधिक पीछे झुकना, जिससे यह चेस्ट प्रेस बन जाता है।"
      },
      {
        "en": "Bending knees to push-press the weight on strict sets.",
        "hi": "सख्त सेट पर वजन उठाने के लिए घुटनों को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Keep forearms completely vertical directly under the barbell during the entire press.",
        "hi": "पूरे प्रेस में फोरआर्म्स को बारबेल के ठीक नीचे लंबवत रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not lean back excessively to protect lumbar spine.",
      "hi": "कमर की सुरक्षा के लिए बहुत अधिक पीछे न झुकें।"
    },
    "alternative": {
      "en": "Seated Dumbbell Shoulder Press",
      "hi": "सीटेड डम्बल शोल्डर प्रेस"
    },
    "keywords": [
      "overhead press",
      "military press",
      "shoulders",
      "deltoids",
      "ohp"
    ]
  },
  {
    "id": "seated-dumbbell-shoulder-press",
    "name": {
      "en": "Seated Dumbbell Shoulder Press",
      "hi": "सीटेड डम्बल शोल्डर प्रेस (Seated Dumbbell Shoulder Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Trapezius"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, 75-85 Degree Incline Bench",
    "description": {
      "en": "Seated vertical press providing back support to maximize deltoid loading and upper-body symmetry.",
      "hi": "डेल्टोइड लोडिंग को अधिकतम करने के लिए बैक सपोर्ट प्रदान करने वाला सीटेड वर्टिकल प्रेस।"
    },
    "startingPosition": {
      "en": "Sit upright with back flat against bench pad, dumbbells raised to ear level, palms facing forward.",
      "hi": "बेंच पैड पर सीधी पीठ के साथ बैठें, डम्बल कान के स्तर पर, हथेलियां आगे की ओर।"
    },
    "steps": [
      {
        "en": "Press dumbbells vertically upward until arms are straight overhead.",
        "hi": "डम्बल को सीधे ऊपर की ओर दबाएं जब तक कि बाहें ओवरहेड सीधी न हो जाएं।"
      },
      {
        "en": "Lower under control until dumbbells touch shoulder line.",
        "hi": "नियंत्रण में तब तक नीचे लाएं जब तक डम्बल कंधे की रेखा को न छुएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pressing up, inhale lowering down.",
      "hi": "ऊपर दबाते समय सांस छोड़ें, नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Clanging dumbbells together at the top.",
        "hi": "शीर्ष पर डम्बल को आपस में टकराना।"
      }
    ],
    "tips": [
      {
        "en": "Angle elbows slightly 30 degrees forward in scapular plane for optimal joint safety.",
        "hi": "कंधे की सुरक्षा के लिए कोहनियों को स्कैपुलर प्लेन में 30 डिग्री आगे रखें।"
      }
    ],
    "alternative": {
      "en": "Standing Dumbbell Shoulder Press",
      "hi": "स्टैंडिंग डम्बल शोल्डर प्रेस"
    },
    "keywords": [
      "seated dumbbell press",
      "shoulder press",
      "delts"
    ]
  },
  {
    "id": "standing-dumbbell-shoulder-press",
    "name": {
      "en": "Standing Dumbbell Shoulder Press",
      "hi": "स्टैंडिंग डम्बल शोल्डर प्रेस (Standing Dumbbell Shoulder Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Core",
      "Triceps Brachii",
      "Trapezius"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Standing overhead dumbbell press that recruits full-body core stabilization while building deltoid strength.",
      "hi": "कंधे की ताकत का निर्माण करते हुए पूरे शरीर की कोर स्थिरता को जोड़ने वाला स्टैंडिंग ओवरहेड डम्बल प्रेस।"
    },
    "startingPosition": {
      "en": "Stand with feet shoulder-width, core braced, dumbbells held at shoulder height.",
      "hi": "पैरों को कंधे की चौड़ाई पर रखकर खड़े हों, कोर कसा हुआ, डम्बल कंधे की ऊंचाई पर।"
    },
    "steps": [
      {
        "en": "Press dumbbells smoothly overhead in a gentle arc.",
        "hi": "डम्बल को एक हल्के चाप में ओवरहेड आसानी से दबाएं।"
      },
      {
        "en": "Lock out overhead and control descent back to shoulders.",
        "hi": "ओवरहेड लॉक करें और कंधों पर वापस आने को नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning torso side-to-side.",
        "hi": "धड़ को अगल-बगल झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Engage glutes to maintain pelvic neutrality.",
        "hi": "पेल्विक स्थिरता बनाए रखने के लिए ग्लूट्स को सक्रिय करें।"
      }
    ],
    "alternative": {
      "en": "Seated Dumbbell Shoulder Press",
      "hi": "सीटेड डम्बल शोल्डर प्रेस"
    },
    "keywords": [
      "standing shoulder press",
      "dumbbell overhead",
      "delts"
    ]
  },
  {
    "id": "arnold-press",
    "name": {
      "en": "Arnold Press",
      "hi": "अर्नोल्ड प्रेस (Arnold Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Rotator Cuff"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Bench",
    "description": {
      "en": "Created by Arnold Schwarzenegger, rotating wrists through 180 degrees to hit anterior and lateral deltoid fibers continuously.",
      "hi": "अर्नोल्ड श्वार्जनेगर द्वारा निर्मित, कलाई को 180 डिग्री घुमाकर पूरे डेल्टोइड्स को लक्षित करने वाला प्रेस।"
    },
    "startingPosition": {
      "en": "Hold dumbbells at chin height with palms facing inward toward chest, elbows tucked.",
      "hi": "छाती की ओर हथेलियां करके ठुड्डी की ऊंचाई पर डम्बल पकड़ें, कोहनियां मुड़ी हुईं।"
    },
    "steps": [
      {
        "en": "As you press upward, rotate wrists outward so palms face forward at top.",
        "hi": "जैसे ही आप ऊपर दबाएं, कलाइयों को बाहर घुमाएं ताकि हथेलियां आगे दिखें।"
      },
      {
        "en": "Finish in a full overhead lockout.",
        "hi": "एक पूर्ण ओवरहेड लॉकआउट में समाप्त करें।"
      },
      {
        "en": "Reverse the rotation smoothly on the way down back to starting position.",
        "hi": "शुरुआती स्थिति में वापस आते समय रोटेशन को आसानी से उलटें।"
      }
    ],
    "breathing": {
      "en": "Exhale while rotating up; inhale while rotating down.",
      "hi": "ऊपर घुमाते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rushing the rotation before the weights clear the face.",
        "hi": "चेहरे से वजन हटने से पहले रोटेशन में जल्दबाजी करना।"
      }
    ],
    "tips": [
      {
        "en": "Use slightly lighter weights than standard press due to rotational demands.",
        "hi": "रोटेशन की मांग के कारण मानक प्रेस से थोड़ा कम वजन का उपयोग करें।"
      }
    ],
    "alternative": {
      "en": "Seated Dumbbell Shoulder Press",
      "hi": "सीटेड डम्बल शोल्डर प्रेस"
    },
    "keywords": [
      "arnold press",
      "arnold schwarzenegger",
      "deltoids",
      "rotation"
    ]
  },
  {
    "id": "machine-shoulder-press",
    "name": {
      "en": "Machine Shoulder Press",
      "hi": "मशीन शोल्डर प्रेस (Machine Shoulder Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Shoulder Press Machine",
    "description": {
      "en": "Guided shoulder pressing machine providing safe stability to overload deltoids to complete failure.",
      "hi": "पूर्ण विफलता तक डेल्टोइड्स को अधिभारित करने के लिए सुरक्षित स्थिरता प्रदान करने वाली मशीन।"
    },
    "startingPosition": {
      "en": "Adjust seat height so handles align with upper shoulders.",
      "hi": "सीट की ऊंचाई को समायोजित करें ताकि हैंडल ऊपरी कंधों से संरेखित हों।"
    },
    "steps": [
      {
        "en": "Press handles upward until arms are straight.",
        "hi": "हैंडल को ऊपर दबाएं जब तक कि बाहें सीधी न हो जाएं।"
      },
      {
        "en": "Lower slowly to ear level.",
        "hi": "धीरे-धीरे कान के स्तर तक नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Slumping shoulders forward.",
        "hi": "कंधों को आगे झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep head neutral and avoid arching lower back off pad.",
        "hi": "सिर को सीधा रखें और पैड से कमर को न उठाएं।"
      }
    ],
    "alternative": {
      "en": "Seated Dumbbell Shoulder Press",
      "hi": "सीटेड डम्बल शोल्डर प्रेस"
    },
    "keywords": [
      "machine shoulder press",
      "delts",
      "guided press"
    ]
  },
  {
    "id": "dumbbell-lateral-raise",
    "name": {
      "en": "Dumbbell Lateral Raise",
      "hi": "डम्बल लैटरल रेज़ (Dumbbell Lateral Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Supraspinatus",
      "Upper Trapezius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "The quintessential exercise for sculpting capped side deltoids and creating broader shoulder silhouette.",
      "hi": "चौड़े कंधों का सिल्हूट बनाने और साइड डेल्टोइड्स को तराशने के लिए सबसे आवश्यक व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand with slight forward torso lean, dumbbells held at sides with slight elbow bend.",
      "hi": "थोड़ा आगे झुककर खड़े हों, डम्बल किनारों पर पकड़े हों, कोहनी में हल्का मोड़।"
    },
    "steps": [
      {
        "en": "Raise dumbbells out to the sides in the scapular plane until parallel to floor.",
        "hi": "डम्बल को स्कैपुलर प्लेन में फर्श के समानांतर होने तक किनारों पर उठाएं।"
      },
      {
        "en": "Lead with the elbows, keeping hands level with or below elbows.",
        "hi": "कोहनियों से लीड करें, हाथों को कोहनियों के स्तर पर या नीचे रखें।"
      },
      {
        "en": "Pause at top, then lower under a slow 3-second negative.",
        "hi": "शीर्ष पर रुकें, फिर धीमी 3-सेकंड की नकारात्मक गति से नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on raise; inhale on descent.",
      "hi": "उठाने पर सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using heavy momentum and swinging body to fling weights up.",
        "hi": "भारी वजन को ऊपर फेंकने के लिए शरीर को हिलाना।"
      },
      {
        "en": "Shrugging traps up to the ears, stealing tension from lateral delts.",
        "hi": "ट्रैप्स को कानों तक सिकोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Pour the water pitcher cue: tilt thumbs slightly down at peak.",
        "hi": "पीक पर अंगूठों को थोड़ा नीचे झुकाएं।"
      }
    ],
    "alternative": {
      "en": "Cable Lateral Raise",
      "hi": "केबल लैटरल रेज़"
    },
    "keywords": [
      "lateral raise",
      "side delts",
      "shoulder width",
      "capped shoulders"
    ]
  },
  {
    "id": "cable-lateral-raise",
    "name": {
      "en": "Cable Lateral Raise",
      "hi": "केबल लैटरल रेज़ (Cable Lateral Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Supraspinatus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Low Cable Pulley Station",
    "description": {
      "en": "Delivers uninterrupted resistance at the bottom of the movement where dumbbells offer zero tension.",
      "hi": "मूवमेंट के निचले हिस्से में निर्बाध प्रतिरोध प्रदान करता है जहां डम्बल शून्य तनाव प्रदान करते हैं।"
    },
    "startingPosition": {
      "en": "Set pulley at ankle or knee height, hold handle across body with working arm.",
      "hi": "पुली को टखने की ऊंचाई पर सेट करें, काम करने वाले हाथ से हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Raise cable out to side up to shoulder height.",
        "hi": "कंधे की ऊंचाई तक केबल को किनारे पर उठाएं।"
      },
      {
        "en": "Hold peak lateral contraction.",
        "hi": "पीक लैटरल संकुचन बनाए रखें।"
      },
      {
        "en": "Lower back smoothly across body.",
        "hi": "शरीर के सामने आसानी से नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Jerking the cable from the stack.",
        "hi": "स्टैक से केबल को झटका देना।"
      }
    ],
    "tips": [
      {
        "en": "Setting pulley at wrist height when arm is at side gives ideal resistance curve.",
        "hi": "पुली को कलाई की ऊंचाई पर सेट करना आदर्श प्रतिरोध देता है।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Lateral Raise",
      "hi": "डम्बल लैटरल रेज़"
    },
    "keywords": [
      "cable lateral raise",
      "side delts",
      "continuous tension"
    ]
  },
  {
    "id": "machine-lateral-raise",
    "name": {
      "en": "Machine Lateral Raise",
      "hi": "मशीन लैटरल रेज़ (Machine Lateral Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Upper Trapezius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Lateral Raise Machine",
    "description": {
      "en": "Guides arms through a pure lateral plane, removing grip fatigue to isolate side delts.",
      "hi": "ग्रिप थकान को हटाकर साइड डेल्ट्स को पूरी तरह से अलग करने वाली मशीन।"
    },
    "startingPosition": {
      "en": "Sit in machine with pads resting against outer upper arms / elbows.",
      "hi": "बाहरी ऊपरी बाहों / कोहनियों के खिलाफ पैड रखकर मशीन में बैठें।"
    },
    "steps": [
      {
        "en": "Drive pads outward and upward to shoulder height.",
        "hi": "पैड को कंधे की ऊंचाई तक बाहर और ऊपर उठाएं।"
      },
      {
        "en": "Hold peak contraction for 1 second.",
        "hi": "1 सेकंड के लिए पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Lower under control without letting weights touch stack.",
        "hi": "वजन को स्टैक से छुए बिना नियंत्रण में नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale raising; inhale lowering.",
      "hi": "उठाते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Shrugging neck to cheat the weight.",
        "hi": "वजन उठाने के लिए गर्दन सिकोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Focus entirely on elbow pressure outward.",
        "hi": "पूरी तरह से बाहर की ओर कोहनी के दबाव पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Cable Lateral Raise",
      "hi": "केबल लैटरल रेज़"
    },
    "keywords": [
      "machine lateral raise",
      "side delts",
      "isolation"
    ]
  },
  {
    "id": "front-dumbbell-raise",
    "name": {
      "en": "Front Dumbbell Raise",
      "hi": "फ्रंट डम्बल रेज़ (Front Dumbbell Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid"
    ],
    "secondaryMuscles": [
      "Upper Pectoralis",
      "Serratus Anterior"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Isolates the front anterior head of the deltoid through forward shoulder flexion.",
      "hi": "फॉरवर्ड शोल्डर फ्लेक्सन के माध्यम से डेल्टोइड के सामने के हिस्से को अलग करता है।"
    },
    "startingPosition": {
      "en": "Stand holding dumbbells in front of thighs with overhand grip.",
      "hi": "जांघों के सामने ओवरहैंड पकड़ के साथ डम्बल पकड़कर खड़े हों।"
    },
    "steps": [
      {
        "en": "Raise dumbbells forward and up to eye level with straight arms.",
        "hi": "सीधी बाहों के साथ डम्बल को आगे और आंखों के स्तर तक उठाएं।"
      },
      {
        "en": "Pause briefly at horizontal level.",
        "hi": "क्षैतिज स्तर पर संक्षेप में रुकें।"
      },
      {
        "en": "Lower smoothly back to thighs.",
        "hi": "जांघों पर आसानी से वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging back and forth to throw weights up.",
        "hi": "वजन ऊपर फेंकने के लिए आगे-पीछे झूलना।"
      }
    ],
    "tips": [
      {
        "en": "Can be done alternating single arms or simultaneously.",
        "hi": "एक-एक करके या दोनों हाथों से एक साथ किया जा सकता है।"
      }
    ],
    "alternative": {
      "en": "Cable Front Raise",
      "hi": "केबल फ्रंट रेज़"
    },
    "keywords": [
      "front raise",
      "front delts",
      "anterior deltoid"
    ]
  },
  {
    "id": "cable-front-raise",
    "name": {
      "en": "Cable Front Raise",
      "hi": "केबल फ्रंट रेज़ (Cable Front Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid"
    ],
    "secondaryMuscles": [
      "Clavicular Pec",
      "Trapezius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Low Cable Pulley, Straight Bar or Rope",
    "description": {
      "en": "Constant tension front raise pulling cable between legs to isolate front delts.",
      "hi": "फ्रंट डेल्ट्स को अलग करने के लिए पैरों के बीच से केबल खींचने वाला फ्रंट रेज़।"
    },
    "startingPosition": {
      "en": "Straddle low cable pulley facing away, hold handle with overhand grip.",
      "hi": "पुली से दूर मुंह करके खड़े हों, ओवरहैंड ग्रिप से हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Raise cable handle forward up to eye height.",
        "hi": "केबल हैंडल को आगे आंखों की ऊंचाई तक उठाएं।"
      },
      {
        "en": "Control the eccentric descent smoothly.",
        "hi": "नीचे आने की गति को आसानी से नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Arching lower back.",
        "hi": "निचली पीठ को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Keep glutes engaged to lock torso in place.",
        "hi": "धड़ को स्थिर रखने के लिए ग्लूट्स को सक्रिय रखें।"
      }
    ],
    "alternative": {
      "en": "Front Dumbbell Raise",
      "hi": "फ्रंट डम्बल रेज़"
    },
    "keywords": [
      "cable front raise",
      "front delts",
      "anterior"
    ]
  },
  {
    "id": "rear-delt-dumbbell-fly",
    "name": {
      "en": "Rear Delt Dumbbell Fly",
      "hi": "रियर डेल्ट डम्बल फ्लाई (Rear Delt Dumbbell Fly)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Infraspinatus",
      "Middle Trapezius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "Bent-over fly targeting the posterior deltoid to balance pressing-heavy chest training.",
      "hi": "कंधे के पिछले हिस्से को लक्षित करने वाला बेंट-ओवर फ्लाई।"
    },
    "startingPosition": {
      "en": "Sit on bench edge, hinge forward resting chest on thighs, dumbbells under knees.",
      "hi": "बेंच के किनारे बैठें, जांघों पर छाती रखकर आगे झुकें, घुटनों के नीचे डम्बल।"
    },
    "steps": [
      {
        "en": "Raise dumbbells outward to the sides in a wide flying arc.",
        "hi": "डम्बल को एक चौड़े चाप में किनारों पर बाहर उठाएं।"
      },
      {
        "en": "Lead with elbows and pinkies pointing upward.",
        "hi": "कोहनियों और छोटी उंगलियों को ऊपर की ओर रखते हुए लीड करें।"
      },
      {
        "en": "Lower slowly without swinging.",
        "hi": "बिना झूले धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale raising; inhale lowering.",
      "hi": "उठाते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Pinching shoulder blades too early, shifting work to mid-traps.",
        "hi": "शोल्डर ब्लेड्स को बहुत जल्दी मिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep hands wide and think of reaching toward the walls.",
        "hi": "हाथों को चौड़ा रखें और दीवारों तक पहुंचने के बारे में सोचें।"
      }
    ],
    "alternative": {
      "en": "Reverse Pec Deck or Face Pulls",
      "hi": "रिवर्स पेक डेक या फेस पुल्स"
    },
    "keywords": [
      "rear delt fly",
      "posterior delts",
      "bent over fly"
    ]
  },
  {
    "id": "reverse-pec-deck",
    "name": {
      "en": "Reverse Pec Deck",
      "hi": "रिवर्स पेक डेक (Reverse Pec Deck)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Infraspinatus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Reverse Pec Deck / Fly Machine",
    "description": {
      "en": "Strict rear deltoid horizontal abduction on a machine for direct posterior shoulder development.",
      "hi": "कंधे के पिछले हिस्से के सीधे विकास के लिए सख्त रियर डेल्टोइड मशीन व्यायाम।"
    },
    "startingPosition": {
      "en": "Sit facing machine pad, chest firmly supported, grasp handles with neutral or pronated grip.",
      "hi": "मशीन पैड की ओर मुंह करके बैठें, छाती पर सहारा लें, हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Sweep arms out and backward until elbows pass behind torso.",
        "hi": "बाहों को बाहर और पीछे तब तक घुमाएं जब तक कोहनियां धड़ के पीछे न चली जाएं।"
      },
      {
        "en": "Squeeze rear deltoids hard for 1 second.",
        "hi": "1 सेकंड के लिए रियर डेल्ट्स को जोर से निचोड़ें।"
      },
      {
        "en": "Control handles forward to full stretch.",
        "hi": "पूर्ण खिंचाव के लिए हैंडल को आगे नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale on pull back; inhale on return.",
      "hi": "पीछे खींचते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bending elbows into a row.",
        "hi": "कोहनियों को मोड़कर रो बनाना।"
      }
    ],
    "tips": [
      {
        "en": "Neutral grip with thumbs pointing forward isolates posterior delts best.",
        "hi": "अंगूठे आगे रखकर न्यूट्रल ग्रिप रियर डेल्ट्स को सबसे अच्छा अलग करती है।"
      }
    ],
    "alternative": {
      "en": "Rear Delt Dumbbell Fly",
      "hi": "रियर डेल्ट डम्बल फ्लाई"
    },
    "keywords": [
      "reverse pec deck",
      "rear delt machine",
      "posterior deltoid"
    ]
  },
  {
    "id": "cable-rear-delt-fly",
    "name": {
      "en": "Cable Rear Delt Fly",
      "hi": "केबल रियर डेल्ट फ्लाई (Cable Rear Delt Fly)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rhomboids",
      "Rotator Cuff"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dual Cable Pulley Station",
    "description": {
      "en": "Cross-body cable fly providing smooth continuous tension across the rear deltoid stretch and contraction.",
      "hi": "रियर डेल्टोइड खिंचाव और संकुचन में निरंतर तनाव प्रदान करने वाला क्रॉस-बॉडी केबल फ्लाई।"
    },
    "startingPosition": {
      "en": "Stand in center, grasp left cable with right hand and right cable with left hand (no attachments).",
      "hi": "केंद्र में खड़े हों, बाएं केबल को दाएं हाथ से और दाएं केबल को बाएं हाथ से पकड़ें।"
    },
    "steps": [
      {
        "en": "Pull cables outward and back horizontally across your chest.",
        "hi": "अपनी छाती के पार केबल्स को क्षैतिज रूप से बाहर और पीछे खींचें।"
      },
      {
        "en": "Squeeze rear delts as arms open wide.",
        "hi": "जैसे ही बाहें चौड़ी खुलें, रियर डेल्ट्स को निचोड़ें।"
      },
      {
        "en": "Allow cables to cross back in front of you under tension.",
        "hi": "तनाव में केबल्स को वापस सामने क्रॉस होने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale opening; inhale closing.",
      "hi": "खोलते समय सांस छोड़ें; बंद करते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning back to leverage weight.",
        "hi": "वजन उठाने के लिए पीछे झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Hold the bare cable ball for the most ergonomic wrist path.",
        "hi": "सबसे आरामदायक कलाई पथ के लिए नंगे केबल बॉल को पकड़ें।"
      }
    ],
    "alternative": {
      "en": "Reverse Pec Deck",
      "hi": "रिवर्स पेक डेक"
    },
    "keywords": [
      "cable rear delt",
      "cross cable",
      "posterior delts"
    ]
  },
  {
    "id": "upright-row",
    "name": {
      "en": "Upright Row",
      "hi": "अपराइट रो (Upright Row)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid",
      "Upper Trapezius"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "EZ-Bar, Barbell, or Cable",
    "description": {
      "en": "Vertical pull along torso that builds side deltoid caps and upper traps when performed with wide grip.",
      "hi": "धड़ के साथ वर्टिकल पुल जो चौड़ी पकड़ के साथ किए जाने पर साइड डेल्ट्स और ट्रैप्स का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding EZ-bar with wide overhand grip (wider than shoulders) in front of thighs.",
      "hi": "जांघों के सामने चौड़ी पकड़ (कंधों से चौड़ी) के साथ ईज़ी-बार पकड़कर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Pull bar vertically upward toward lower chest, driving elbows high and wide.",
        "hi": "कोहनियों को ऊंचा और चौड़ा उठाते हुए बार को निचली छाती की ओर ऊपर खींचें।"
      },
      {
        "en": "Stop at nipple height to prevent shoulder impingement.",
        "hi": "कंधे के तनाव को रोकने के लिए निप्पल की ऊंचाई पर रुकें।"
      },
      {
        "en": "Lower bar smoothly back to starting position.",
        "hi": "बार को आसानी से शुरुआती स्थिति में वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling up; inhale lowering down.",
      "hi": "ऊपर खींचते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using narrow grip and pulling bar to chin, causing severe shoulder internal rotation impingement.",
        "hi": "संकीर्ण पकड़ का उपयोग करके बार को ठुड्डी तक खींचना, जिससे कंधे पर चोट लग सकती है।"
      }
    ],
    "tips": [
      {
        "en": "Always use a wide grip and stop before elbows exceed shoulder height.",
        "hi": "हमेशा चौड़ी पकड़ का उपयोग करें और कोहनियों को कंधे की ऊंचाई से ऊपर न ले जाएं।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Lateral Raise",
      "hi": "डम्बल लैटरल रेज़"
    },
    "keywords": [
      "upright row",
      "lateral delts",
      "traps",
      "ez-bar"
    ]
  },
  {
    "id": "landmine-press",
    "name": {
      "en": "Landmine Press",
      "hi": "लैंडमाइन प्रेस (Landmine Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Upper Pectoralis"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Landmine Base, Barbell",
    "description": {
      "en": "An angled pressing motion that is extremely friendly on the rotator cuff while building front shoulder mass.",
      "hi": "कंधे के सामने के हिस्से का निर्माण करते हुए रोटेटर कफ के लिए बेहद सुरक्षित एंगल्ड प्रेस।"
    },
    "startingPosition": {
      "en": "Hold end of barbell at shoulder height in a staggered stance, core braced.",
      "hi": "स्थिर मुद्रा में कंधे की ऊंचाई पर बारबेल के सिरे को पकड़ें।"
    },
    "steps": [
      {
        "en": "Press barbell diagonally upward and forward to full extension.",
        "hi": "बारबेल को तिरछे ऊपर और आगे पूर्ण विस्तार तक दबाएं।"
      },
      {
        "en": "Lean slightly forward into the press at lockout.",
        "hi": "लॉकआउट पर प्रेस में थोड़ा आगे झुकें।"
      },
      {
        "en": "Lower slowly back to shoulder.",
        "hi": "कंधे पर धीरे-धीरे वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on press; inhale on return.",
      "hi": "प्रेस पर सांस छोड़ें; लौटने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Twisting the spine during the press.",
        "hi": "प्रेस के दौरान रीढ़ को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Superb exercise for anyone with impingement from overhead pressing.",
        "hi": "ओवरहेड प्रेसिंग से दर्द वाले किसी भी व्यक्ति के लिए शानदार व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Incline Press",
      "hi": "डम्बल इन्क्लाइन प्रेस"
    },
    "keywords": [
      "landmine press",
      "safe shoulders",
      "angled press"
    ]
  },
  {
    "id": "push-press",
    "name": {
      "en": "Push Press",
      "hi": "पुश प्रेस (Push Press)"
    },
    "muscle": "Shoulders",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "Explosive overhead press utilizing a shallow knee dip to launch heavy weight overhead.",
      "hi": "भारी वजन को ओवरहेड लॉन्च करने के लिए घुटने के हल्के मोड़ का उपयोग करने वाला विस्फोटक प्रेस।"
    },
    "startingPosition": {
      "en": "Barbell racked across clavicles, athletic standing stance.",
      "hi": "हंसली पर बारबेल, मजबूत खड़े होने की मुद्रा।"
    },
    "steps": [
      {
        "en": "Dip knees 2-3 inches in a vertical dip.",
        "hi": "घुटनों को 2-3 इंच सीधा नीचे मोड़ें।"
      },
      {
        "en": "Drive up explosively through heels and push barbell overhead with combined leg and shoulder power.",
        "hi": "एड़ी से तेजी से ऊपर उठें और पैर व कंधे की संयुक्त शक्ति से बारबेल को ऊपर दबाएं।"
      },
      {
        "en": "Lock out overhead with arms straight.",
        "hi": "सीधी बाहों के साथ ओवरहेड लॉक करें।"
      },
      {
        "en": "Lower under control back to shoulders.",
        "hi": "कंधों पर नियंत्रण में वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on dip; exhale on explosive drive.",
      "hi": "डिप पर सांस लें; विस्फोटक ड्राइव पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Squatting too deep on the dip, losing elasticity.",
        "hi": "डिप पर बहुत गहरा बैठना।"
      }
    ],
    "tips": [
      {
        "en": "Develops supreme athletic power and overhead strength.",
        "hi": "शानदार एथलेटिक शक्ति और ओवरहेड ताकत विकसित करता है।"
      }
    ],
    "alternative": {
      "en": "Barbell Overhead Press",
      "hi": "बार्बेल ओवरहेड प्रेस"
    },
    "keywords": [
      "push press",
      "explosive",
      "power",
      "delts"
    ]
  },
  {
    "id": "dumbbell-y-raise",
    "name": {
      "en": "Dumbbell Y-Raise",
      "hi": "डम्बल वाई-रेज़ (Dumbbell Y-Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lower Trapezius",
      "Lateral Deltoid",
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Rotator Cuff"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Light Dumbbells, Incline Bench",
    "description": {
      "en": "Prone raise at a 45-degree angle forming a 'Y' shape that bulletproofs the lower traps and shoulder stability.",
      "hi": "45 डिग्री कोण पर 'Y' आकार बनाने वाला रेज़ जो निचले ट्रैप्स और कंधे की स्थिरता को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Lie face down on 30-degree incline bench with light dumbbells hanging thumbs up.",
      "hi": "30-डिग्री इन्क्लाइन बेंच पर मुंह नीचे करके लेटें, अंगूठे ऊपर करके डम्बल पकड़ें।"
    },
    "steps": [
      {
        "en": "Raise dumbbells upward at a 45-degree angle in a Y-formation.",
        "hi": "वाई-आकार में 45 डिग्री के कोण पर डम्बल को ऊपर उठाएं।"
      },
      {
        "en": "Squeeze lower shoulder blades together at top for 2 seconds.",
        "hi": "शीर्ष पर 2 सेकंड के लिए निचले शोल्डर ब्लेड्स को निचोड़ें।"
      },
      {
        "en": "Lower slowly.",
        "hi": "धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using heavy weights and swinging.",
        "hi": "भारी वजन का उपयोग करना और झूलना।"
      }
    ],
    "tips": [
      {
        "en": "Use very light dumbbells (3-10 lbs); focus entirely on scaption mechanics.",
        "hi": "बहुत हल्के डम्बल का उपयोग करें; पूरी तरह से फॉर्म पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Prone Trap Raise",
      "hi": "प्रोन ट्रैप रेज़"
    },
    "keywords": [
      "y raise",
      "lower traps",
      "shoulder stability",
      "rotator cuff"
    ]
  },
  {
    "id": "leaning-lateral-raise",
    "name": {
      "en": "Leaning Lateral Raise",
      "hi": "लीनिंग लैटरल रेज़ (Leaning Lateral Raise)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Supraspinatus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbell, Upright Post or Rack",
    "description": {
      "en": "Holding onto a pole and leaning outward to increase the stretch and peak resistance angle on the lateral deltoid.",
      "hi": "खंभे को पकड़कर बाहर की ओर झुकना ताकि साइड डेल्ट पर खिंचाव और पीक प्रतिरोध कोण बढ़ सके।"
    },
    "startingPosition": {
      "en": "Hold a pole with one hand, feet close to pole base, lean body out at 20-30 degrees.",
      "hi": "एक हाथ से खंभा पकड़ें, पैर खंभे के पास, शरीर को 20-30 डिग्री बाहर झुकाएं।"
    },
    "steps": [
      {
        "en": "Raise dumbbell out to side to parallel with floor.",
        "hi": "डम्बल को किनारे पर फर्श के समानांतर उठाएं।"
      },
      {
        "en": "Pause at top to feel intense side delt contraction.",
        "hi": "तीव्र साइड डेल्ट संकुचन महसूस करने के लिए शीर्ष पर रुकें।"
      },
      {
        "en": "Lower with control.",
        "hi": "नियंत्रण के साथ नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging hips to generate momentum.",
        "hi": "गति पैदा करने के लिए कूल्हों को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "The lean maintains tension throughout the entire bottom portion of the lift.",
        "hi": "झुकाव लिफ्ट के पूरे निचले हिस्से में तनाव बनाए रखता है।"
      }
    ],
    "alternative": {
      "en": "Cable Lateral Raise",
      "hi": "केबल लैटरल रेज़"
    },
    "keywords": [
      "leaning lateral raise",
      "side delts",
      "deltoid peak"
    ]
  },
  {
    "id": "pike-push-ups",
    "name": {
      "en": "Pike Push-Ups",
      "hi": "पाइक पुश-अप्स (Pike Push-Ups)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Anterior Deltoid",
      "Lateral Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Chest",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "Calisthenic bodyweight overhead pressing movement forming an inverted 'V' to load the shoulders.",
      "hi": "कंधों को लोड करने के लिए उल्टे 'V' आकार में किया जाने वाला बॉडीवेट ओवरहेड प्रेसिंग व्यायाम।"
    },
    "startingPosition": {
      "en": "Plank position, then walk feet forward and push hips high into an inverted V (pike).",
      "hi": "प्लैंक स्थिति, फिर पैरों को आगे बढ़ाएं और कूल्हों को एक उल्टे V में ऊपर धकेलें।"
    },
    "steps": [
      {
        "en": "Lower head diagonally forward between hands toward floor.",
        "hi": "हाथों के बीच फर्श की ओर सिर को तिरछे आगे नीचे लाएं।"
      },
      {
        "en": "Lightly touch forehead to ground.",
        "hi": "माथे को फर्श पर हल्के से छुएं।"
      },
      {
        "en": "Press back up and push head through arms to complete rep.",
        "hi": "वापस ऊपर दबाएं और रेप पूरा करने के लिए सिर को बाहों के बीच धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Flaring elbows 90 degrees outward.",
        "hi": "कोहनियों को 90 डिग्री बाहर फैलाना।"
      }
    ],
    "tips": [
      {
        "en": "Elevate feet on a box to progress toward handstand push-ups.",
        "hi": "हैंडस्टैंड पुश-अप्स की ओर बढ़ने के लिए पैरों को बॉक्स पर उठाएं।"
      }
    ],
    "alternative": {
      "en": "Barbell Overhead Press",
      "hi": "बार्बेल ओवरहेड प्रेस"
    },
    "keywords": [
      "pike pushup",
      "calisthenics",
      "bodyweight shoulder",
      "handstand"
    ]
  },
  {
    "id": "behind-the-neck-press",
    "name": {
      "en": "Behind-the-Neck Press",
      "hi": "बिहाइंड-द-नेक प्रेस (Behind-the-Neck Press)"
    },
    "muscle": "Shoulders",
    "primaryMuscles": [
      "Lateral Deltoid",
      "Anterior Deltoid",
      "Posterior Deltoid"
    ],
    "secondaryMuscles": [
      "Triceps Brachii",
      "Upper Trapezius"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "Golden Era press lowering bar behind the head, placing immense stretch and activation on the side deltoids.",
      "hi": "गोल्डन एरा प्रेस जो सिर के पीछे बार को नीचे लाता है, साइड डेल्ट्स पर गहरा खिंचाव पैदा करता है।"
    },
    "startingPosition": {
      "en": "Sit or stand tall, barbell resting across upper traps behind neck with wide grip.",
      "hi": "सीधे बैठें या खड़े हों, चौड़ी पकड़ के साथ गर्दन के पीछे ऊपरी ट्रैप्स पर बारबेल रखें।"
    },
    "steps": [
      {
        "en": "Press bar straight overhead to lockout.",
        "hi": "बार को सीधे ओवरहेड लॉकआउट तक दबाएं।"
      },
      {
        "en": "Lower bar slowly only to ear level or base of skull.",
        "hi": "बार को केवल कान के स्तर या खोपड़ी के आधार तक धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping bar too deep if lacking shoulder external rotation.",
        "hi": "कंधे के लचीलेपन की कमी होने पर बार को बहुत नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Only perform if you have excellent thoracic and rotator cuff mobility.",
        "hi": "केवल तभी करें जब आपके पास उत्कृष्ट कंधे की गतिशीलता हो।"
      }
    ],
    "safetyPrecautions": {
      "en": "Avoid extreme depths to protect cervical spine.",
      "hi": "गर्दन की सुरक्षा के लिए अत्यधिक गहराई से बचें।"
    },
    "alternative": {
      "en": "Barbell Overhead Press",
      "hi": "बार्बेल ओवरहेड प्रेस"
    },
    "keywords": [
      "behind the neck press",
      "golden era",
      "shoulders"
    ]
  },
  {
    "id": "standing-barbell-curl",
    "name": {
      "en": "Standing Barbell Curl",
      "hi": "स्टैंडिंग बार्बेल कर्ल (Standing Barbell Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Short Head & Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Straight Barbell, Weight Plates",
    "description": {
      "en": "The king of bicep builders, overloading elbow flexion with maximum mechanical load to pack on arm mass.",
      "hi": "बाइसेप्स का सबसे प्रमुख व्यायाम, जो हाथ के द्रव्यमान को बढ़ाने के लिए अधिकतम भार प्रदान करता है।"
    },
    "startingPosition": {
      "en": "Stand tall with feet hip-width apart. Hold barbell with underhand shoulder-width grip, arms fully extended against thighs.",
      "hi": "पैरों को हिप-चौड़ाई पर रखकर सीधे खड़े हों। कंधे की चौड़ाई की अंडरहैंड पकड़ के साथ बारबेल पकड़ें।"
    },
    "steps": [
      {
        "en": "Pin your elbows to your ribcage sides.",
        "hi": "अपनी कोहनियों को अपनी पसलियों के किनारों से सटाकर रखें।"
      },
      {
        "en": "Curl the barbell upward in a smooth arc, contracting biceps hard.",
        "hi": "बाइसेप्स को जोर से सिकोड़ते हुए बारबेल को एक सहज चाप में ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze peaks at top when forearms are nearly vertical.",
        "hi": "जब फोरआर्म्स लगभग लंबवत हों, तो शीर्ष पर बाइसेप्स पीक को निचोड़ें।"
      },
      {
        "en": "Lower bar under strict 3-second eccentric control to full arm stretch.",
        "hi": "पूरी बांह के खिंचाव तक सख्त 3-सेकंड के नियंत्रण में बार को नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale at bottom; exhale as you curl upward; inhale lowering.",
      "hi": "नीचे सांस लें; ऊपर कर्ल करते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging the torso back and forth to heave the weight up.",
        "hi": "वजन उठाने के लिए धड़ को आगे-पीछे हिलाना।"
      },
      {
        "en": "Allowing elbows to drift far forward, shifting tension onto front delts.",
        "hi": "कोहनियों को आगे जाने देना, जिससे तनाव कंधों पर चला जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Brace glutes and abs to prevent any lower-back hyperextension.",
        "hi": "कमर के तनाव को रोकने के लिए ग्लूट्स और एब्स को कसकर रखें।"
      }
    ],
    "alternative": {
      "en": "EZ-Bar Curl or Dumbbell Curl",
      "hi": "ईज़ी-बार कर्ल या डम्बल कर्ल"
    },
    "keywords": [
      "barbell curl",
      "biceps",
      "arms",
      "bicep peak",
      "mass builder"
    ]
  },
  {
    "id": "ez-bar-curl",
    "name": {
      "en": "EZ-Bar Curl",
      "hi": "ईज़ी-बार कर्ल (EZ-Bar Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearms"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "EZ-Curl Bar, Plates",
    "description": {
      "en": "Ergonomic undulating bar design that relieves wrist and elbow joint torque while heavily loading the biceps.",
      "hi": "एर्गोनोमिक बार डिज़ाइन जो कलाई और कोहनी के जोड़ के तनाव को कम करता है।"
    },
    "startingPosition": {
      "en": "Hold EZ-bar on inner angled grips with arms fully extended down.",
      "hi": "बाहों को पूरी तरह नीचे फैलाकर आंतरिक कोणीय पकड़ पर ईज़ी-बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl bar upward toward shoulders without swinging.",
        "hi": "बिना झूले कंधों की ओर बार को ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze biceps at peak contraction.",
        "hi": "पीक संकुचन पर बाइसेप्स को निचोड़ें।"
      },
      {
        "en": "Lower bar slowly to full elbow extension.",
        "hi": "पूर्ण कोहनी विस्तार तक बार को धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting elbows flare wide out to the sides.",
        "hi": "कोहनियों को किनारों पर चौड़ा फैलने देना।"
      }
    ],
    "tips": [
      {
        "en": "Narrow grip targets long head; wide grip emphasizes short inner head.",
        "hi": "संकीर्ण पकड़ लंबे सिर को लक्षित करती है; चौड़ी पकड़ आंतरिक सिर पर जोर देती है।"
      }
    ],
    "alternative": {
      "en": "Barbell Curl",
      "hi": "बार्बेल कर्ल"
    },
    "keywords": [
      "ez bar curl",
      "biceps",
      "wrist friendly"
    ]
  },
  {
    "id": "alternating-dumbbell-curl",
    "name": {
      "en": "Alternating Dumbbell Curl",
      "hi": "अल्टरनेटिंग डम्बल कर्ल (Alternating Dumbbell Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearm Flexors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Allows supination (rotating wrist outward) during the curl for supreme peak bicep contraction.",
      "hi": "शानदार बाइसेप्स पीक संकुचन के लिए कर्ल के दौरान कलाई को बाहर की ओर घुमाने (सुपीनेशन) की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Stand holding dumbbells at sides, palms facing inward (neutral grip).",
      "hi": "किनारों पर डम्बल पकड़कर खड़े हों, हथेलियां अंदर की ओर।"
    },
    "steps": [
      {
        "en": "Curl right dumbbell upward, rotating wrist outward as it passes thighs so palm faces shoulder at top.",
        "hi": "दाएं डम्बल को ऊपर कर्ल करें, कलाई को बाहर घुमाते हुए ताकि शीर्ष पर हथेली कंधे की ओर हो।"
      },
      {
        "en": "Squeeze right bicep hard, then lower with control.",
        "hi": "दाएं बाइसेप्स को जोर से निचोड़ें, फिर नियंत्रण के साथ नीचे लाएं।"
      },
      {
        "en": "Repeat with the left arm in an alternating rhythm.",
        "hi": "बारी-बारी से बाएं हाथ से दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling; inhale lowering.",
      "hi": "कर्ल करते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rushing repetitions without completing full supination.",
        "hi": "पूरा सुपीनेशन किए बिना जल्दबाजी में रेप्स करना।"
      }
    ],
    "tips": [
      {
        "en": "Turn pinky finger higher than thumb at the top for maximum contraction.",
        "hi": "अधिकतम संकुचन के लिए शीर्ष पर छोटी उंगली को अंगूठे से ऊंचा घुमाएं।"
      }
    ],
    "alternative": {
      "en": "Seated Dumbbell Curl",
      "hi": "सीटेड डम्बल कर्ल"
    },
    "keywords": [
      "dumbbell curl",
      "alternating curl",
      "supination",
      "biceps"
    ]
  },
  {
    "id": "seated-dumbbell-curl",
    "name": {
      "en": "Seated Dumbbell Curl",
      "hi": "सीटेड डम्बल कर्ल (Seated Dumbbell Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Bench",
    "description": {
      "en": "Strict seated posture eliminates lower-body momentum for pure isolated bicep work.",
      "hi": "सख्त बैठने की मुद्रा जो शुद्ध बाइसेप्स कार्य के लिए निचले शरीर की गति को समाप्त करती है।"
    },
    "startingPosition": {
      "en": "Sit on upright bench with dumbbells hanging at sides.",
      "hi": "किनारों पर लटके डम्बल के साथ सीधी बेंच पर बैठें।"
    },
    "steps": [
      {
        "en": "Curl dumbbells up with supination.",
        "hi": "सुपीनेशन के साथ डम्बल को ऊपर कर्ल करें।"
      },
      {
        "en": "Pause and squeeze at the peak.",
        "hi": "रुकें और पीक पर निचोड़ें।"
      },
      {
        "en": "Lower slowly to sides.",
        "hi": "किनारों पर धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning torso side to side on bench.",
        "hi": "बेंच पर धड़ को अगल-बगल झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep chest proud and back pinned against bench.",
        "hi": "छाती को आगे और पीठ को बेंच से सटाकर रखें।"
      }
    ],
    "alternative": {
      "en": "Incline Dumbbell Curl",
      "hi": "इन्क्लाइन डम्बल कर्ल"
    },
    "keywords": [
      "seated curl",
      "strict curl",
      "biceps"
    ]
  },
  {
    "id": "incline-dumbbell-curl",
    "name": {
      "en": "Incline Dumbbell Curl",
      "hi": "इन्क्लाइन डम्बल कर्ल (Incline Dumbbell Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Anterior Deltoid"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, 45-Degree Incline Bench",
    "description": {
      "en": "Places the long head of the biceps on an extreme stretch behind the body, maximizing muscle length and hypertrophy.",
      "hi": "बाइसेप्स के लंबे सिर को शरीर के पीछे एक अत्यधिक खिंचाव पर रखता है, जिससे पीक बढ़ता है।"
    },
    "startingPosition": {
      "en": "Sit on a 45-to-60-degree incline bench. Let arms hang straight down behind torso.",
      "hi": "45 से 60 डिग्री की इनक्लाइन बेंच पर बैठें। बाहों को धड़ के पीछे सीधा लटकने दें।"
    },
    "steps": [
      {
        "en": "Keeping upper arms perpendicular to floor, curl dumbbells up with supination.",
        "hi": "ऊपरी बाहों को फर्श के लंबवत रखते हुए, सुपीनेशन के साथ डम्बल को ऊपर कर्ल करें।"
      },
      {
        "en": "Hold peak contraction without allowing elbows to swing forward.",
        "hi": "कोहनियों को आगे झूलने दिए बिना पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Lower slowly into the deep shoulder-extension stretch.",
        "hi": "गहरे खिंचाव में धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on stretch; exhale on curl.",
      "hi": "खिंचाव पर सांस लें; कर्ल पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Swinging elbows forward during the curl, losing the long-head tension.",
        "hi": "कर्ल के दौरान कोहनियों को आगे झुलाना।"
      }
    ],
    "tips": [
      {
        "en": "One of the absolute best exercises for building the bicep peak.",
        "hi": "बाइसेप्स पीक बनाने के लिए सबसे बेहतरीन व्यायामों में से एक।"
      }
    ],
    "alternative": {
      "en": "Bayesian Cable Curl",
      "hi": "बायेसियन केबल कर्ल"
    },
    "keywords": [
      "incline curl",
      "long head",
      "bicep peak",
      "stretch mediated"
    ]
  },
  {
    "id": "hammer-curl",
    "name": {
      "en": "Hammer Curl",
      "hi": "हैमर कर्ल (Hammer Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Forearm Flexors & Extensors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Neutral grip curl that emphasizes the brachialis (which pushes the bicep up) and forearms for full-arm thickness.",
      "hi": "न्यूट्रल ग्रिप कर्ल जो बाइसेप्स की मोटाई और फोरआर्म्स के विकास पर जोर देता है।"
    },
    "startingPosition": {
      "en": "Stand holding dumbbells with palms facing each other (neutral grip) like a hammer.",
      "hi": "हथेलियों को एक दूसरे के सामने (न्यूट्रल ग्रिप) रखकर हथौड़े की तरह डम्बल पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl dumbbells upward keeping palms facing each other throughout the lift.",
        "hi": "पूरे लिफ्ट में हथेलियों को एक दूसरे के सामने रखते हुए डम्बल को ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze brachialis and forearms hard at the top.",
        "hi": "शीर्ष पर ब्रेकियालिस और फोरआर्म्स को जोर से निचोड़ें।"
      },
      {
        "en": "Lower under control to full extension.",
        "hi": "पूर्ण विस्तार तक नियंत्रण में नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using wrist flexion to flip weights up.",
        "hi": "कलाई को मोड़कर वजन ऊपर उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Allows heavier loads than regular curls because the brachioradialis has strong mechanical leverage.",
        "hi": "मजबूत मैकेनिकल लाभ के कारण नियमित कर्ल से भारी वजन की अनुमति देता है।"
      }
    ],
    "alternative": {
      "en": "Cross-Body Hammer Curl or Rope Cable Curl",
      "hi": "क्रॉस-बॉडी हैमर कर्ल"
    },
    "keywords": [
      "hammer curl",
      "brachialis",
      "forearms",
      "arm thickness"
    ]
  },
  {
    "id": "cross-body-hammer-curl",
    "name": {
      "en": "Cross-Body Hammer Curl",
      "hi": "क्रॉस-बॉडी हैमर कर्ल (Cross-Body Hammer Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Brachialis",
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Curling across the chest isolates the brachialis and the outer long head for maximum side-arm thickness.",
      "hi": "छाती के पार कर्ल करना बाइसेप्स के बाहरी सिर और ब्रेकियालिस को अलग करता है।"
    },
    "startingPosition": {
      "en": "Stand with dumbbells at sides in neutral grip.",
      "hi": "न्यूट्रल ग्रिप में किनारों पर डम्बल के साथ खड़े हों।"
    },
    "steps": [
      {
        "en": "Curl right dumbbell diagonally across torso toward the left shoulder collarbone.",
        "hi": "दाएं डम्बल को बाएं कंधे की हंसली की ओर तिरछे कर्ल करें।"
      },
      {
        "en": "Squeeze outer bicep and brachialis.",
        "hi": "बाहरी बाइसेप्स और ब्रेकियालिस को निचोड़ें।"
      },
      {
        "en": "Lower slowly and repeat with left arm toward right shoulder.",
        "hi": "धीरे-धीरे नीचे लाएं और बाएं हाथ से दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling across; inhale lowering.",
      "hi": "क्रॉस कर्ल करते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bending forward at the waist.",
        "hi": "कमर से आगे झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Focus on the brachialis muscle resting between bicep and tricep.",
        "hi": "बाइसेप्स और ट्राइसेप्स के बीच स्थित ब्रेकियालिस पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Standard Hammer Curl",
      "hi": "मानक हैमर कर्ल"
    },
    "keywords": [
      "cross body hammer curl",
      "brachialis",
      "pinwheel curl"
    ]
  },
  {
    "id": "preacher-curl",
    "name": {
      "en": "Preacher Curl",
      "hi": "प्रीचर कर्ल (Preacher Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearms"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "EZ-Bar or Dumbbells, Preacher Bench",
    "description": {
      "en": "Locks upper arms on a 45-degree angled pad to eliminate all cheating and place massive tension on the lower bicep stretch.",
      "hi": "धोखाधड़ी को खत्म करने और निचले बाइसेप्स खिंचाव पर भारी तनाव डालने के लिए ऊपरी बाहों को पैड पर लॉक करता है।"
    },
    "startingPosition": {
      "en": "Sit at preacher bench with armpits snug on top edge, triceps flat on pad, grasp EZ-bar.",
      "hi": "प्रीचर बेंच पर बैठें, बगलें ऊपरी किनारे पर, ट्राइसेप्स पैड पर सपाट, ईज़ी-बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl bar upward in a semicircle toward your face.",
        "hi": "अपने चेहरे की ओर एक अर्धवृत्त में बार को ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze biceps hard just before forearms reach vertical.",
        "hi": "फोरआर्म्स के लंबवत होने से ठीक पहले बाइसेप्स को जोर से निचोड़ें।"
      },
      {
        "en": "Lower slowly with high control to a safe, full stretch.",
        "hi": "एक सुरक्षित, पूर्ण खिंचाव के लिए उच्च नियंत्रण के साथ धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting the bar drop and bouncing off the tendon at the bottom.",
        "hi": "बार को गिरने देना और नीचे कण्डरा से उछालना।"
      },
      {
        "en": "Lifting glutes off seat to heave the weight.",
        "hi": "वजन उठाने के लिए सीट से उठना।"
      }
    ],
    "tips": [
      {
        "en": "Never hyperextend elbows under heavy load; maintain slight muscle tension at bottom.",
        "hi": "भारी वजन के नीचे कोहनियों को अत्यधिक न फैलाएं।"
      }
    ],
    "alternative": {
      "en": "Machine Preacher Curl or Spider Curl",
      "hi": "मशीन प्रीचर कर्ल या स्पाइडर कर्ल"
    },
    "keywords": [
      "preacher curl",
      "short head",
      "bicep peak",
      "strict curl"
    ]
  },
  {
    "id": "machine-preacher-curl",
    "name": {
      "en": "Machine Preacher Curl",
      "hi": "मशीन प्रीचर कर्ल (Machine Preacher Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bicep Preacher Curl Machine",
    "description": {
      "en": "Guided cam-driven machine that matches the natural human strength curve across the entire bicep curl.",
      "hi": "गाइडेड मशीन जो पूरे बाइसेप्स कर्ल में प्राकृतिक शक्ति वक्र से मेल खाती है।"
    },
    "startingPosition": {
      "en": "Adjust seat so chest touches pad, triceps flush against pad, hold rotating handles.",
      "hi": "सीट को समायोजित करें ताकि छाती पैड को छुए, ट्राइसेप्स पैड से मिले हों।"
    },
    "steps": [
      {
        "en": "Curl handles up to maximum contraction.",
        "hi": "हैंडल को अधिकतम संकुचन तक ऊपर कर्ल करें।"
      },
      {
        "en": "Hold peak squeeze for 1 second.",
        "hi": "1 सेकंड के लिए पीक निचोड़ बनाए रखें।"
      },
      {
        "en": "Control weight stack down smoothly.",
        "hi": "वजन को आसानी से नीचे नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale curling; inhale releasing.",
      "hi": "कर्ल करते समय सांस छोड़ें; छोड़ते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting elbows slide off the front of pad.",
        "hi": "कोहनियों को पैड के सामने से फिसलने देना।"
      }
    ],
    "tips": [
      {
        "en": "Exceptional for drop sets and blood-volume pumps.",
        "hi": "ड्रॉप सेट और ब्लड पंप के लिए असाधारण।"
      }
    ],
    "alternative": {
      "en": "Preacher Curl",
      "hi": "प्रीचर कर्ल"
    },
    "keywords": [
      "machine curl",
      "preacher machine",
      "biceps"
    ]
  },
  {
    "id": "concentration-curl",
    "name": {
      "en": "Concentration Curl",
      "hi": "कंसंट्रेशन कर्ल (Concentration Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Peak & Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbell, Bench",
    "description": {
      "en": "Arnold's favorite peak-builder: bracing elbow against the inner thigh forces pure, unassisted bicep contraction.",
      "hi": "अर्नोल्ड का पसंदीदा पीक-बिल्डर: आंतरिक जांघ पर कोहनी टिकाने से शुद्ध बाइसेप्स संकुचन होता है।"
    },
    "startingPosition": {
      "en": "Sit on bench edge with legs spread. Brace back of elbow against inner thigh.",
      "hi": "पैरों को फैलाकर बेंच के किनारे बैठें। आंतरिक जांघ के खिलाफ कोहनी के पीछे का हिस्सा टिकाएं।"
    },
    "steps": [
      {
        "en": "Curl dumbbell up toward face while keeping elbow pinned to thigh.",
        "hi": "कोहनी को जांघ से चिपकाए रखते हुए डम्बल को चेहरे की ओर कर्ल करें।"
      },
      {
        "en": "Supinate wrist and squeeze bicep peak at top.",
        "hi": "कलाई को सुपीनेट करें और शीर्ष पर बाइसेप्स पीक को निचोड़ें।"
      },
      {
        "en": "Lower slowly to full arm hanging extension.",
        "hi": "पूरी तरह से बांह लटकने तक धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rocking body backward to lift weight.",
        "hi": "वजन उठाने के लिए शरीर को पीछे झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Highest EMG bicep activation recorded in clinical sports science studies.",
        "hi": "वैज्ञानिक अध्ययनों में उच्चतम बाइसेप्स ईएमजी एक्टिवेशन दर्ज किया गया।"
      }
    ],
    "alternative": {
      "en": "Preacher Curl",
      "hi": "प्रीचर कर्ल"
    },
    "keywords": [
      "concentration curl",
      "bicep peak",
      "arnold curl"
    ]
  },
  {
    "id": "cable-biceps-curl",
    "name": {
      "en": "Cable Biceps Curl",
      "hi": "केबल बाइसेप्स कर्ल (Cable Biceps Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Low Cable Pulley, Straight or EZ Bar",
    "description": {
      "en": "Maintains smooth, constant tension on the biceps without the dead spot at the top of free-weight curls.",
      "hi": "फ्री-वेट कर्ल के शीर्ष पर मृत बिंदु के बिना बाइसेप्स पर सहज, निरंतर तनाव बनाए रखता है।"
    },
    "startingPosition": {
      "en": "Stand facing low cable pulley, grasp bar with underhand grip, elbows pinned to sides.",
      "hi": "लो केबल पुली के सामने खड़े हों, अंडरहैंड ग्रिप से बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl bar upward to upper chest level.",
        "hi": "बार को ऊपरी छाती के स्तर तक ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze biceps at the top against cable resistance.",
        "hi": "केबल प्रतिरोध के खिलाफ शीर्ष पर बाइसेप्स को निचोड़ें।"
      },
      {
        "en": "Lower with controlled eccentric tempo.",
        "hi": "नियंत्रित गति से नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Stepping too far back, changing the angle of pull.",
        "hi": "बहुत पीछे हटना, जिससे खींचने का कोण बदल जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Constant tension builds immense metabolic pump.",
        "hi": "निरंतर तनाव शानदार मेटाबोलिक पंप बनाता है।"
      }
    ],
    "alternative": {
      "en": "Standing Barbell Curl",
      "hi": "स्टैंडिंग बार्बेल कर्ल"
    },
    "keywords": [
      "cable curl",
      "constant tension",
      "biceps pump"
    ]
  },
  {
    "id": "bayesian-cable-curl",
    "name": {
      "en": "Bayesian Cable Curl",
      "hi": "बायेसियन केबल कर्ल (Bayesian Cable Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Low Cable Pulley, Single Handle",
    "description": {
      "en": "Facing away from a low cable so the arm is pulled back into shoulder extension, giving an unbelievable bicep stretch.",
      "hi": "केबल से दूर मुंह करके कर्ल करना ताकि बांह पीछे खिंचे, जिससे बाइसेप्स में गहरा खिंचाव आता है।"
    },
    "startingPosition": {
      "en": "Stand facing away from low pulley, hold D-handle with arm extended behind your torso.",
      "hi": "लो पुली से दूर मुंह करके खड़े हों, धड़ के पीछे फैली हुई बांह के साथ हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl handle forward and up from behind body.",
        "hi": "शरीर के पीछे से हैंडल को आगे और ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze bicep tightly at full elbow flexion.",
        "hi": "पूर्ण कोहनी मोड़ पर बाइसेप्स को कसकर निचोड़ें।"
      },
      {
        "en": "Control arm back into the deep posterior stretch.",
        "hi": "गहरे खिंचाव में बांह को वापस नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale curling forward; inhale on the rear stretch.",
      "hi": "आगे कर्ल करते समय सांस छोड़ें; पीछे खिंचाव पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning torso forward to compensate.",
        "hi": "मुआवजा देने के लिए धड़ को आगे झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "The science-based favorite for long-head hypertrophy.",
        "hi": "लंबे सिर के हाइपरट्रॉफी के लिए विज्ञान-आधारित पसंदीदा व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Incline Dumbbell Curl",
      "hi": "इन्क्लाइन डम्बल कर्ल"
    },
    "keywords": [
      "bayesian curl",
      "long head",
      "cable bicep stretch"
    ]
  },
  {
    "id": "spider-curl",
    "name": {
      "en": "Spider Curl",
      "hi": "स्पाइडर कर्ल (Spider Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "EZ-Bar or Dumbbells, Incline Bench (Chest Down)",
    "description": {
      "en": "Lying chest-down on an incline bench with arms hanging vertically forward, maximizing peak contraction tension.",
      "hi": "इनक्लाइन बेंच पर छाती के बल लेटकर बाहों को आगे लटकाना, जिससे पीक संकुचन तनाव अधिकतम होता है।"
    },
    "startingPosition": {
      "en": "Lie face down on 45-degree incline bench with chest at top, arms hanging straight down.",
      "hi": "45-डिग्री इन्क्लाइन बेंच पर मुंह नीचे करके लेटें, बाहें सीधी नीचे लटकी हों।"
    },
    "steps": [
      {
        "en": "Curl bar upward toward face without moving upper arms.",
        "hi": "ऊपरी बाहों को हिलाए बिना बार को चेहरे की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Hold peak squeeze at the top for 1-2 seconds.",
        "hi": "1-2 सेकंड के लिए शीर्ष पर पीक निचोड़ बनाए रखें।"
      },
      {
        "en": "Lower slowly to full arm hang.",
        "hi": "पूरी तरह से बांह लटकने तक धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging elbows back toward ribs.",
        "hi": "कोहनियों को पसलियों की ओर पीछे झुलाना।"
      }
    ],
    "tips": [
      {
        "en": "Zero body momentum is possible; builds incredible peak thickness.",
        "hi": "शून्य शरीर गति संभव है; अविश्वसनीय पीक मोटाई बनाता है।"
      }
    ],
    "alternative": {
      "en": "Preacher Curl",
      "hi": "प्रीचर कर्ल"
    },
    "keywords": [
      "spider curl",
      "short head",
      "bicep isolation"
    ]
  },
  {
    "id": "drag-curl",
    "name": {
      "en": "Drag Curl",
      "hi": "ड्रैग कर्ल (Drag Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Barbell or Smith Machine",
    "description": {
      "en": "Vince Gironda classic: dragging the bar directly up along the torso by pulling elbows back, removing front delts.",
      "hi": "विंस गिरोंडा क्लासिक: कोहनियों को पीछे खींचकर बार को सीधे धड़ के साथ ऊपर खींचना, जिससे कंधों का काम खत्म हो जाता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding barbell against thighs with shoulder-width underhand grip.",
      "hi": "जांघों से चिपकाकर बारबेल पकड़कर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Drive elbows straight back behind torso while dragging bar directly up your shirt.",
        "hi": "कोहनियों को धड़ के पीछे सीधा ले जाएं जबकि बार को सीधे अपनी शर्ट के साथ ऊपर खींचें।"
      },
      {
        "en": "Squeeze biceps intensely at upper-chest level.",
        "hi": "ऊपरी-छाती के स्तर पर बाइसेप्स को तीव्रता से निचोड़ें।"
      },
      {
        "en": "Drag bar back down along torso.",
        "hi": "बार को धड़ के साथ वापस नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale dragging up; inhale lowering down.",
      "hi": "ऊपर खींचते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing bar to arc forward away from body.",
        "hi": "बार को शरीर से दूर आगे जाने देना।"
      }
    ],
    "tips": [
      {
        "en": "Removes front delts 100% from the movement.",
        "hi": "मूवमेंट से फ्रंट डेल्ट्स को 100% हटा देता है।"
      }
    ],
    "alternative": {
      "en": "Standing Barbell Curl",
      "hi": "स्टैंडिंग बार्बेल कर्ल"
    },
    "keywords": [
      "drag curl",
      "vince gironda",
      "biceps long head"
    ]
  },
  {
    "id": "reverse-curl",
    "name": {
      "en": "Reverse Curl",
      "hi": "रिवर्स कर्ल (Reverse Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Extensors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "EZ-Bar or Straight Barbell",
    "description": {
      "en": "Overhand grip curl that heavily recruits the brachioradialis forearm muscle and underlying brachialis.",
      "hi": "ओवरहैंड ग्रिप कर्ल जो ब्रेकियोरेडियलिस फोरआर्म और ब्रेकियालिस को भारी रूप से सक्रिय करता है।"
    },
    "startingPosition": {
      "en": "Hold EZ-bar with pronated (overhand) grip, thumbs over or under bar, arms straight.",
      "hi": "प्रोनेटेड (ओवरहैंड) पकड़ के साथ ईज़ी-बार पकड़ें, बाहें सीधी।"
    },
    "steps": [
      {
        "en": "Curl bar upward keeping wrists straight and locked.",
        "hi": "कलाइयों को सीधा और लॉक रखते हुए बार को ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze top of forearms and outer arms at the top.",
        "hi": "शीर्ष पर फोरआर्म्स के ऊपरी हिस्से को निचोड़ें।"
      },
      {
        "en": "Lower bar slowly under control.",
        "hi": "बार को धीरे-धीरे नियंत्रण में नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing wrists to flex or bend backward.",
        "hi": "कलाइयों को पीछे मुड़ने देना।"
      }
    ],
    "tips": [
      {
        "en": "Builds Popeye forearms and adds substantial arm circumference.",
        "hi": "मजबूत फोरआर्म्स बनाता है और हाथ का आकार बढ़ाता है।"
      }
    ],
    "alternative": {
      "en": "Hammer Curl",
      "hi": "हैमर कर्ल"
    },
    "keywords": [
      "reverse curl",
      "brachioradialis",
      "forearms",
      "overhand curl"
    ]
  },
  {
    "id": "zottman-curl",
    "name": {
      "en": "Zottman Curl",
      "hi": "ज़ॉटमैन कर्ल (Zottman Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii",
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Brachialis",
      "Forearm Extensors"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Curl up with palms up (underhand) to overload biceps, rotate 180 degrees at top, and lower with palms down to overload forearms.",
      "hi": "बाइसेप्स के लिए हथेलियों को ऊपर करके कर्ल करें, शीर्ष पर 180 डिग्री घुमाएं, और फोरआर्म्स के लिए हथेलियों को नीचे करके लाएं।"
    },
    "startingPosition": {
      "en": "Stand holding dumbbells at sides, palms facing forward.",
      "hi": "किनारों पर डम्बल पकड़कर खड़े हों, हथेलियां आगे की ओर।"
    },
    "steps": [
      {
        "en": "Curl dumbbells upward with supinated grip to shoulder height.",
        "hi": "कंधे की ऊंचाई तक सुपीनेटेड ग्रिप के साथ डम्बल को ऊपर कर्ल करें।"
      },
      {
        "en": "At top, rotate wrists 180 degrees so palms face forward/downward.",
        "hi": "शीर्ष पर, कलाइयों को 180 डिग्री घुमाएं ताकि हथेलियां नीचे की ओर हों।"
      },
      {
        "en": "Lower dumbbells slowly in this overhand reverse position.",
        "hi": "इस ओवरहैंड रिवर्स स्थिति में डम्बल को धीरे-धीरे नीचे लाएं।"
      },
      {
        "en": "Rotate palms back to starting supinated position at the bottom.",
        "hi": "निचले हिस्से में हथेलियों को वापस शुरुआती स्थिति में घुमाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale on the reverse lowering.",
      "hi": "ऊपर सांस छोड़ें, नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using too heavy dumbbells and dropping arms rapidly on eccentric.",
        "hi": "बहुत भारी वजन का उपयोग करना और तेजी से नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "The ultimate 2-in-1 arm exercise for complete bicep and forearm development.",
        "hi": "पूर्ण बाइसेप्स और फोरआर्म विकास के लिए सर्वश्रेष्ठ 2-इन-1 व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Hammer Curl + Reverse Curl",
      "hi": "हैमर कर्ल + रिवर्स कर्ल"
    },
    "keywords": [
      "zottman curl",
      "biceps",
      "forearms",
      "rotation",
      "george zottman"
    ]
  },
  {
    "id": "resistance-band-curl",
    "name": {
      "en": "Resistance Band Curl",
      "hi": "रेसिस्टेंस बैंड कर्ल (Resistance Band Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Resistance Loop or Tube Band",
    "description": {
      "en": "Accommodating resistance curl where tension increases exponentially toward the peak contraction.",
      "hi": "लचीला प्रतिरोध कर्ल जहां पीक संकुचन की ओर तनाव तेजी से बढ़ता है।"
    },
    "startingPosition": {
      "en": "Stand on middle of resistance band, holding handles or ends at sides.",
      "hi": "रेसिस्टेंस बैंड के बीच में खड़े हों, किनारों पर सिरे पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl hands upward toward shoulders against increasing band tension.",
        "hi": "बढ़ते बैंड तनाव के खिलाफ हाथों को कंधों की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Hold the peak squeeze for 2 seconds.",
        "hi": "2 सेकंड के लिए पीक निचोड़ बनाए रखें।"
      },
      {
        "en": "Lower slowly under constant elastic tension.",
        "hi": "निरंतर लोचदार तनाव के तहत धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Snapping arms down with band recoil.",
        "hi": "बैंड के झटके से बाहों को तेजी से नीचे जाने देना।"
      }
    ],
    "tips": [
      {
        "en": "Exceptional for joint-friendly warmups or high-rep pump finishers.",
        "hi": "जोड़ों के अनुकूल वार्मअप या हाई-रेप फिनिशर के लिए असाधारण।"
      }
    ],
    "alternative": {
      "en": "Cable Biceps Curl",
      "hi": "केबल बाइसेप्स कर्ल"
    },
    "keywords": [
      "band curl",
      "resistance band",
      "biceps pump",
      "home workout"
    ]
  },
  {
    "id": "high-cable-curl",
    "name": {
      "en": "High Cable Curl",
      "hi": "हाई केबल कर्ल (High Cable Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dual High Cable Pulleys (Crossover Station)",
    "description": {
      "en": "Front double-bicep cable curl pulling handles toward ears at shoulder height for unmatched peak cramp.",
      "hi": "कंधे की ऊंचाई पर कानों की ओर हैंडल खींचने वाला फ्रंट डबल-बाइसेप्स केबल कर्ल।"
    },
    "startingPosition": {
      "en": "Stand centered between two high pulleys, hold stirrups with arms abducted parallel to floor.",
      "hi": "दो हाई पुली के बीच खड़े हों, बाहों को फर्श के समानांतर फैलाकर हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Keeping upper arms stationary, curl handles inward toward ears.",
        "hi": "ऊपरी बाहों को स्थिर रखते हुए, हैंडल को कानों की ओर अंदर कर्ल करें।"
      },
      {
        "en": "Hit a full front double-bicep pose and flex hard.",
        "hi": "पूर्ण फ्रंट डबल-बाइसेप्स पोज़ बनाएं और जोर से फ्लेक्स करें।"
      },
      {
        "en": "Extend arms back outward with control.",
        "hi": "नियंत्रण के साथ बाहों को वापस बाहर फैलाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling inward; inhale releasing outward.",
      "hi": "अंदर कर्ल करते समय सांस छोड़ें; बाहर छोड़ते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping elbows down toward ribs during the curl.",
        "hi": "कर्ल के दौरान कोहनियों को पसलियों की ओर नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Emulates the iconic bodybuilding stage pose.",
        "hi": "क्लासिक बॉडीबिल्डिंग स्टेज पोज़ का अनुकरण करता है।"
      }
    ],
    "alternative": {
      "en": "Concentration Curl",
      "hi": "कंसंट्रेशन कर्ल"
    },
    "keywords": [
      "high cable curl",
      "double bicep",
      "crossover curl",
      "peak"
    ]
  },
  {
    "id": "single-arm-cable-curl",
    "name": {
      "en": "Single-Arm Cable Curl",
      "hi": "सिंगल-आर्म केबल कर्ल (Single-Arm Cable Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Low Cable Pulley, D-Handle",
    "description": {
      "en": "Unilateral cable curl that corrects left-to-right arm strength and size asymmetries.",
      "hi": "एक हाथ से केबल कर्ल जो बाएं और दाएं हाथ की ताकत और आकार की विषमताओं को ठीक करता है।"
    },
    "startingPosition": {
      "en": "Stand facing low pulley, hold D-handle with underhand grip.",
      "hi": "लो पुली के सामने खड़े हों, अंडरहैंड ग्रिप से हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Curl handle toward shoulder, keeping elbow pinned.",
        "hi": "कोहनी को सटाकर रखते हुए हैंडल को कंधे की ओर कर्ल करें।"
      },
      {
        "en": "Hold peak squeeze at the top.",
        "hi": "शीर्ष पर पीक निचोड़ बनाए रखें।"
      },
      {
        "en": "Lower smoothly to full stretch.",
        "hi": "पूरे खिंचाव के लिए आसानी से नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Shrugging the active shoulder up.",
        "hi": "सक्रिय कंधे को ऊपर सिकोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Perform weaker arm first to dictate weight and repetitions.",
        "hi": "वजन और रेप्स निर्धारित करने के लिए पहले कमजोर हाथ से करें।"
      }
    ],
    "alternative": {
      "en": "Cable Biceps Curl",
      "hi": "केबल बाइसेप्स कर्ल"
    },
    "keywords": [
      "single arm curl",
      "unilateral bicep",
      "cable"
    ]
  },
  {
    "id": "waiter-curl",
    "name": {
      "en": "Waiter Curl",
      "hi": "वेटर कर्ल (Waiter Curl)"
    },
    "muscle": "Biceps",
    "primaryMuscles": [
      "Biceps Brachii (Short Head)"
    ],
    "secondaryMuscles": [
      "Brachialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Single Dumbbell",
    "description": {
      "en": "Holding the top bell of a single dumbbell flat in both palms like a waiter tray, isolating the inner bicep heads.",
      "hi": "वेटर ट्रे की तरह दोनों हथेलियों में एक डम्बल को सपाट पकड़ना, आंतरिक बाइसेप्स सिर को अलग करना।"
    },
    "startingPosition": {
      "en": "Stand tall cupping the underside of the top plate of a vertical dumbbell with both open palms.",
      "hi": "दोनों खुली हथेलियों से एक लंबवत डम्बल की शीर्ष प्लेट को पकड़कर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Curl the dumbbell upward while keeping palms completely flat and horizontal.",
        "hi": "हथेलियों को पूरी तरह से सपाट और क्षैतिज रखते हुए डम्बल को ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze inner bicep heads hard at top.",
        "hi": "शीर्ष पर आंतरिक बाइसेप्स को जोर से निचोड़ें।"
      },
      {
        "en": "Lower with control to thighs.",
        "hi": "जांघों तक नियंत्रण में नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing palms to curl around the handle.",
        "hi": "हथेलियों को हैंडल के चारों ओर लपेटने देना।"
      }
    ],
    "tips": [
      {
        "en": "The flat palm position forces intense short-head contraction.",
        "hi": "सपाट हथेली की स्थिति तीव्र आंतरिक-सिर संकुचन को मजबूर करती है।"
      }
    ],
    "alternative": {
      "en": "Preacher Curl",
      "hi": "प्रीचर कर्ल"
    },
    "keywords": [
      "waiter curl",
      "biceps short head",
      "dumbbell curl"
    ]
  },
  {
    "id": "cable-pushdown",
    "name": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन (Cable Triceps Pushdown)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "High Cable Pulley, V-Bar or Straight Bar",
    "description": {
      "en": "The staple tricep builder isolating elbow extension with continuous cable resistance for arm thickness.",
      "hi": "हाथ की मोटाई के लिए निरंतर केबल प्रतिरोध के साथ कोहनी के विस्तार को अलग करने वाला मुख्य ट्राइसेप्स व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand tall facing high pulley, grasp bar with overhand grip, elbows pinned to ribcage at 90 degrees.",
      "hi": "हाई पुली के सामने सीधे खड़े हों, ओवरहैंड ग्रिप से बार पकड़ें, कोहनियां 90 डिग्री पर पसलियों से चिपकी हों।"
    },
    "steps": [
      {
        "en": "Push the bar downward by extending elbows until arms lock out completely.",
        "hi": "कोहनियों को फैलाकर बार को नीचे धकेलें जब तक कि बाहें पूरी तरह से सीधी न हो जाएं।"
      },
      {
        "en": "Squeeze the triceps horseshoe hard at the bottom for 1 second.",
        "hi": "नीचे 1 सेकंड के लिए ट्राइसेप्स को जोर से निचोड़ें।"
      },
      {
        "en": "Slowly allow the bar to rise back to elbow height without moving upper arms.",
        "hi": "ऊपरी बाहों को हिलाए बिना बार को धीरे-धीरे कोहनी की ऊंचाई तक वापस आने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale pushing down; inhale returning up.",
      "hi": "नीचे धकेलते समय सांस छोड़ें; ऊपर लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing elbows to drift forward and backward, using shoulder momentum.",
        "hi": "कोहनियों को आगे-पीछे जाने देना, कंधे की गति का उपयोग करना।"
      },
      {
        "en": "Leaning body over the bar to press with chest/bodyweight.",
        "hi": "छाती/शरीर के वजन से दबाने के लिए बार के ऊपर झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Lock out elbows completely at the bottom to recruit the short medial head.",
        "hi": "मीडियल हेड को सक्रिय करने के लिए नीचे कोहनियों को पूरी तरह सीधा करें।"
      }
    ],
    "alternative": {
      "en": "Rope Triceps Pushdown or Skull Crushers",
      "hi": "रोप ट्राइसेप्स पुशडाउन या स्कल क्रशर्स"
    },
    "keywords": [
      "triceps pushdown",
      "cable",
      "horseshoe",
      "arms",
      "pushdown"
    ]
  },
  {
    "id": "rope-triceps-pushdown",
    "name": {
      "en": "Rope Triceps Pushdown",
      "hi": "रोप ट्राइसेप्स पुशडाउन (Rope Triceps Pushdown)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Lateral Head)"
    ],
    "secondaryMuscles": [
      "Medial Head"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "High Cable Pulley, Rope Attachment",
    "description": {
      "en": "Allows wrists to spread outward at the bottom for maximal lateral head contraction and peak arm flare.",
      "hi": "अधिकतम लैटरल हेड संकुचन के लिए कलाई को नीचे बाहर फैलाने की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Grasp rope with neutral grip, elbows tucked tight to sides, torso tilted slightly forward.",
      "hi": "न्यूट्रल ग्रिप में रस्सी पकड़ें, कोहनियां किनारों पर चिपकी हों, धड़ थोड़ा आगे झुका हो।"
    },
    "steps": [
      {
        "en": "Push rope down and spread ends apart at bottom around hips.",
        "hi": "रस्सी को नीचे धकेलें और नीचे कूल्हों के चारों ओर सिरों को अलग करें।"
      },
      {
        "en": "Squeeze lateral triceps head forcefully.",
        "hi": "लैटरल ट्राइसेप्स हेड को बलपूर्वक निचोड़ें।"
      },
      {
        "en": "Return rope together back to 90-degree elbow bend.",
        "hi": "रस्सी को वापस 90 डिग्री कोहनी मोड़ तक आने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale spreading rope; inhale returning.",
      "hi": "रस्सी फैलाते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Failing to flare the rope ends outward.",
        "hi": "रस्सी के सिरों को बाहर फैलाने में विफल होना।"
      }
    ],
    "tips": [
      {
        "en": "Spreading the rope at the bottom dramatically increases lateral head EMG activation.",
        "hi": "नीचे रस्सी को फैलाना लैटरल हेड एक्टिवेशन को काफी बढ़ाता है।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "rope pushdown",
      "triceps flare",
      "lateral head"
    ]
  },
  {
    "id": "straight-bar-pushdown",
    "name": {
      "en": "Straight-Bar Pushdown",
      "hi": "स्ट्रेट-बार पुशडाउन (Straight-Bar Pushdown)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Long & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "High Cable, Straight Bar",
    "description": {
      "en": "Allows heavier weight overload than ropes for pure elbow extension power.",
      "hi": "शुद्ध कोहनी विस्तार शक्ति के लिए रस्सियों की तुलना में भारी वजन की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Grasp solid straight bar with overhand shoulder-width grip.",
      "hi": "कंधे की चौड़ाई पर ओवरहैंड पकड़ के साथ सीधी बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Push bar down until arms lock straight.",
        "hi": "बार को नीचे दबाएं जब तक कि बाहें सीधी न हो जाएं।"
      },
      {
        "en": "Hold lockout for 1 second.",
        "hi": "1 सेकंड के लिए लॉकआउट बनाए रखें।"
      },
      {
        "en": "Control weight back up slowly.",
        "hi": "वजन को धीरे-धीरे वापस ऊपर नियंत्रित करें।"
      }
    ],
    "breathing": {
      "en": "Exhale down, inhale up.",
      "hi": "नीचे सांस छोड़ें, ऊपर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bouncing shoulders to start movement.",
        "hi": "मूवमेंट शुरू करने के लिए कंधों को उछालना।"
      }
    ],
    "tips": [
      {
        "en": "Use a thumbless grip to align wrist pressure straight through bar.",
        "hi": "कलाई के दबाव को सीधा करने के लिए थंबलेस ग्रिप का उपयोग करें।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "straight bar pushdown",
      "triceps",
      "overload"
    ]
  },
  {
    "id": "reverse-grip-pushdown",
    "name": {
      "en": "Reverse-Grip Pushdown",
      "hi": "रिवर्स-ग्रिप पुशडाउन (Reverse-Grip Pushdown)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Medial Head)"
    ],
    "secondaryMuscles": [
      "Forearm Extensors"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "High Cable Pulley, Straight or EZ Bar",
    "description": {
      "en": "Underhand grip pushdown that shifts mechanical tension heavily onto the medial head near the elbow joint.",
      "hi": "अंडरहैंड ग्रिप पुशडाउन जो कोहनी के जोड़ के पास स्थित मीडियल हेड पर भारी तनाव डालता है।"
    },
    "startingPosition": {
      "en": "Grasp bar with underhand (supinated) grip at chest height, elbows at sides.",
      "hi": "छाती की ऊंचाई पर अंडरहैंड ग्रिप से बार पकड़ें, कोहनियां किनारों पर।"
    },
    "steps": [
      {
        "en": "Push bar downward until arms are completely straight.",
        "hi": "बार को नीचे धकेलें जब तक कि बाहें पूरी तरह सीधी न हो जाएं।"
      },
      {
        "en": "Feel intense contraction on the medial inner tricep.",
        "hi": "आंतरिक ट्राइसेप पर तीव्र संकुचन महसूस करें।"
      },
      {
        "en": "Return smoothly to 90 degrees.",
        "hi": "90 डिग्री तक आसानी से वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale down, inhale up.",
      "hi": "नीचे सांस छोड़ें, ऊपर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Losing grip due to sweat; use chalk if needed.",
        "hi": "पसीने के कारण पकड़ खोना।"
      }
    ],
    "tips": [
      {
        "en": "Great for building elbow stability and tendon health.",
        "hi": "कोहनी की स्थिरता और कण्डरा स्वास्थ्य के लिए बढ़िया।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "reverse grip pushdown",
      "medial head",
      "triceps"
    ]
  },
  {
    "id": "overhead-dumbbell-triceps-extension",
    "name": {
      "en": "Overhead Dumbbell Triceps Extension",
      "hi": "ओवरहेड डम्बल ट्राइसेप्स एक्सटेंशन (Overhead Dumbbell Triceps Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Single Heavy Dumbbell, Bench",
    "description": {
      "en": "The king of long-head tricep mass builders, fully stretching the long head at the shoulder joint.",
      "hi": "लंबे सिर के ट्राइसेप्स का सबसे बड़ा निर्माता, जो कंधे के जोड़ पर लंबे सिर को पूरी तरह फैलाता है।"
    },
    "startingPosition": {
      "en": "Sit upright holding a single dumbbell overhead with both hands in a diamond grip under top plate.",
      "hi": "शीर्ष प्लेट के नीचे डायमंड ग्रिप में दोनों हाथों से एक डम्बल को ओवरहेड पकड़कर सीधे बैठें।"
    },
    "steps": [
      {
        "en": "Lower dumbbell behind your head by bending elbows, keeping elbows pointing upward.",
        "hi": "कोहनियों को ऊपर की ओर रखते हुए सिर के पीछे डम्बल को नीचे लाएं।"
      },
      {
        "en": "Descend into a deep, safe stretch along the back of arms.",
        "hi": "बाहों के पीछे एक गहरे, सुरक्षित खिंचाव में नीचे जाएं।"
      },
      {
        "en": "Extend elbows to press dumbbell back overhead to lockout.",
        "hi": "डम्बल को वापस ओवरहेड लॉकआउट तक दबाने के लिए कोहनियों को सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Inhale lowering behind head; exhale pressing overhead.",
      "hi": "सिर के पीछे नीचे लाते समय सांस लें; ऊपर दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Flaring elbows excessively wide outward, straining shoulder capsules.",
        "hi": "कोहनियों को अत्यधिक चौड़ा बाहर फैलाना।"
      }
    ],
    "tips": [
      {
        "en": "The long head only fully stretches when arms are elevated overhead.",
        "hi": "लंबा सिर केवल तभी पूरी तरह से खिंचता है जब बाहें ओवरहेड उठी हों।"
      }
    ],
    "alternative": {
      "en": "Overhead Cable Triceps Extension",
      "hi": "ओवरहेड केबल ट्राइसेप्स एक्सटेंशन"
    },
    "keywords": [
      "overhead dumbbell extension",
      "long head",
      "triceps stretch",
      "french press"
    ]
  },
  {
    "id": "overhead-cable-triceps-extension",
    "name": {
      "en": "Overhead Cable Triceps Extension",
      "hi": "ओवरहेड केबल ट्राइसेप्स एक्सटेंशन (Overhead Cable Triceps Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Low or Mid Cable Pulley, Rope",
    "description": {
      "en": "Facing away from cable with arms overhead, maintaining continuous stretch tension through the long head.",
      "hi": "केबल से दूर मुंह करके बाहों को ओवरहेड रखना, जिससे लंबे सिर में निरंतर खिंचाव तनाव बना रहता है।"
    },
    "startingPosition": {
      "en": "Hold rope behind head, face away from pulley in a staggered lunge stance, torso angled forward.",
      "hi": "सिर के पीछे रस्सी पकड़ें, पुली से दूर मुंह करके खड़े हों, धड़ आगे झुका हो।"
    },
    "steps": [
      {
        "en": "Extend elbows forward and overhead until arms lock straight.",
        "hi": "कोहनियों को आगे और ओवरहेड तब तक फैलाएं जब तक कि बाहें सीधी न हो जाएं।"
      },
      {
        "en": "Separate rope ends at peak extension.",
        "hi": "पीक विस्तार पर रस्सी के सिरों को अलग करें।"
      },
      {
        "en": "Allow rope to return behind head for a deep stretch.",
        "hi": "गहरे खिंचाव के लिए रस्सी को सिर के पीछे वापस आने दें।"
      }
    ],
    "breathing": {
      "en": "Exhale extending; inhale on stretch.",
      "hi": "विस्तार पर सांस छोड़ें; खिंचाव पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Moving shoulders instead of pivoting at elbows.",
        "hi": "कोहनियों से मोड़ने के बजाय कंधों को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Superior continuous tension curve compared to free dumbbells.",
        "hi": "डम्बल की तुलना में बेहतर निरंतर तनाव वक्र।"
      }
    ],
    "alternative": {
      "en": "Overhead Dumbbell Extension",
      "hi": "ओवरहेड डम्बल एक्सटेंशन"
    },
    "keywords": [
      "overhead cable extension",
      "rope extension",
      "long head triceps"
    ]
  },
  {
    "id": "ez-bar-skull-crushers",
    "name": {
      "en": "EZ-Bar Skull Crushers",
      "hi": "ईज़ी-बार स्कल क्रशर्स (EZ-Bar Skull Crushers)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (All 3 Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "EZ-Bar, Flat Bench",
    "description": {
      "en": "Lying triceps extension lowering the bar toward forehead, delivering legendary tricep horseshoe development.",
      "hi": "माथे की ओर बार को नीचे लाने वाला क्लासिक ट्राइसेप्स व्यायाम, जो शानदार विकास प्रदान करता है।"
    },
    "startingPosition": {
      "en": "Lie flat on bench holding EZ-bar over chest with narrow overhand grip, arms vertical.",
      "hi": "फ्लैट बेंच पर लेटें, संकीर्ण पकड़ के साथ छाती के ऊपर ईज़ी-बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Keeping upper arms fixed, hinge at elbows to lower bar toward your forehead or crown.",
        "hi": "ऊपरी बाहों को स्थिर रखते हुए, बार को अपने माथे या सिर के ऊपर की ओर नीचे लाएं।"
      },
      {
        "en": "Stop 1 inch from skull in full tricep stretch.",
        "hi": "पूर्ण खिंचाव में खोपड़ी से 1 इंच ऊपर रुकें।"
      },
      {
        "en": "Extend elbows forcefully to return bar to starting lockout.",
        "hi": "बार को वापस शुरुआती लॉकआउट में लाने के लिए कोहनियों को सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Inhale lowering to head; exhale pressing to lockout.",
      "hi": "सिर की ओर लाते समय सांस लें; ऊपर दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Flaring elbows wide or turning movement into a close-grip bench press.",
        "hi": "कोहनियों को चौड़ा फैलाना या इसे बेंच प्रेस में बदलना।"
      }
    ],
    "tips": [
      {
        "en": "Angling upper arms slightly backward toward your head (10 degrees) keeps tension constant at lockout.",
        "hi": "ऊपरी बाहों को थोड़ा पीछे झुकाने से लॉकआउट पर तनाव बना रहता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Maintain strict control and secure thumbs around bar to avoid dropping weights.",
      "hi": "वजन गिरने से बचाने के लिए सख्त नियंत्रण बनाए रखें।"
    },
    "alternative": {
      "en": "Dumbbell Skull Crushers",
      "hi": "डम्बल स्कल क्रशर्स"
    },
    "keywords": [
      "skull crushers",
      "lying tricep extension",
      "ez bar",
      "horseshoe"
    ]
  },
  {
    "id": "dumbbell-skull-crushers",
    "name": {
      "en": "Dumbbell Skull Crushers",
      "hi": "डम्बल स्कल क्रशर्स (Dumbbell Skull Crushers)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "Independent dumbbell lying extension with neutral grip that is very forgiving on wrists and elbow tendons.",
      "hi": "न्यूट्रल ग्रिप के साथ स्वतंत्र डम्बल एक्सटेंशन जो कलाई और कोहनी के लिए बहुत सुरक्षित है।"
    },
    "startingPosition": {
      "en": "Lie flat holding dumbbells over chest, palms facing each other (neutral grip).",
      "hi": "छाती के ऊपर डम्बल लेकर लेटें, हथेलियां एक दूसरे के सामने।"
    },
    "steps": [
      {
        "en": "Bend elbows to lower dumbbells beside your ears.",
        "hi": "कानों के पास डम्बल को नीचे लाने के लिए कोहनियों को मोड़ें।"
      },
      {
        "en": "Feel deep tricep stretch at bottom.",
        "hi": "निचले हिस्से में गहरा ट्राइसेप्स खिंचाव महसूस करें।"
      },
      {
        "en": "Extend elbows to press weights back up.",
        "hi": "वजन को वापस ऊपर दबाने के लिए कोहनियों को सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Moving shoulders back and forth.",
        "hi": "कंधों को आगे-पीछे हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Lowering dumbbells beside ears allows greater range of motion without risk of hitting head.",
        "hi": "कानों के पास नीचे लाना बिना जोखिम के अधिक रेंज ऑफ मोशन देता है।"
      }
    ],
    "alternative": {
      "en": "EZ-Bar Skull Crushers",
      "hi": "ईज़ी-बार स्कल क्रशर्स"
    },
    "keywords": [
      "dumbbell skull crushers",
      "lying extension",
      "neutral grip"
    ]
  },
  {
    "id": "close-grip-bench-press",
    "name": {
      "en": "Close-Grip Bench Press",
      "hi": "क्लोज़-ग्रिप बेंच प्रेस (Close-Grip Bench Press)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (All 3 Heads)"
    ],
    "secondaryMuscles": [
      "Pectoralis Major (Inner)",
      "Anterior Deltoid"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Flat Bench",
    "description": {
      "en": "Heavy compound bench press with shoulder-width grip, allowing the heaviest mechanical load on the triceps.",
      "hi": "कंधे की चौड़ाई की पकड़ के साथ भारी कंपाउंड बेंच प्रेस, जो ट्राइसेप्स पर सबसे भारी वजन की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Lie on flat bench. Grip bar with hands shoulder-width apart (approx 12-14 inches).",
      "hi": "फ्लैट बेंच पर लेटें। कंधे की चौड़ाई पर हाथों से बार पकड़ें (लगभग 12-14 इंच)।"
    },
    "steps": [
      {
        "en": "Unrack bar over chest.",
        "hi": "छाती के ऊपर बार अनरैक करें।"
      },
      {
        "en": "Lower bar to lower chest while keeping elbows tucked close to ribcage.",
        "hi": "कोहनियों को पसलियों के पास रखते हुए बार को निचली छाती तक नीचे लाएं।"
      },
      {
        "en": "Press up forcefully through palms to full elbow lockout.",
        "hi": "पूर्ण कोहनी लॉकआउट तक हथेलियों से बलपूर्वक ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down; exhale powerfully on the press.",
      "hi": "नीचे सांस लें; प्रेस पर जोर से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Placing hands too close (touching), placing severe strain on wrists.",
        "hi": "हाथों को बहुत पास रखना, जिससे कलाइयों पर अत्यधिक तनाव पड़ता है।"
      }
    ],
    "tips": [
      {
        "en": "Shoulder-width grip is optimal; tuck elbows tight to torso.",
        "hi": "कंधे की चौड़ाई की पकड़ इष्टतम है; कोहनियों को धड़ के करीब रखें।"
      }
    ],
    "alternative": {
      "en": "Parallel Bar Dips or Diamond Push-Ups",
      "hi": "पैरेलल बार डिप्स या डायमंड पुश-अप्स"
    },
    "keywords": [
      "close grip bench",
      "cgbp",
      "triceps mass",
      "heavy compound"
    ]
  },
  {
    "id": "diamond-push-ups",
    "name": {
      "en": "Diamond Push-Ups",
      "hi": "डायमंड पुश-अप्स (Diamond Push-Ups)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Anterior Deltoids",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "Bodyweight push-up placing index fingers and thumbs together under chest to overload triceps lockout.",
      "hi": "ट्राइसेप्स को अधिभारित करने के लिए छाती के नीचे उंगलियों और अंगूठों को मिलाकर किया जाने वाला पुश-अप।"
    },
    "startingPosition": {
      "en": "Plank position with hands touching under chest, thumbs and pointer fingers forming a diamond/triangle.",
      "hi": "हाथ छाती के नीचे छूते हुए प्लैंक स्थिति, अंगूठे और तर्जनी एक डायमंड बनाते हुए।"
    },
    "steps": [
      {
        "en": "Lower chest until it touches the diamond shape of hands.",
        "hi": "छाती को तब तक नीचे लाएं जब तक यह हाथों के डायमंड आकार को न छू ले।"
      },
      {
        "en": "Keep elbows tucked close to torso.",
        "hi": "कोहनियों को धड़ के करीब रखें।"
      },
      {
        "en": "Press back up to straight arms.",
        "hi": "सीधी बाहों में वापस ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Flaring elbows wide.",
        "hi": "कोहनियों को चौड़ा फैलाना।"
      }
    ],
    "tips": [
      {
        "en": "Highest tricep EMG activation among all bodyweight movements.",
        "hi": "सभी बॉडीवेट व्यायामों में उच्चतम ट्राइसेप्स ईएमजी एक्टिवेशन।"
      }
    ],
    "alternative": {
      "en": "Close-Grip Bench Press",
      "hi": "क्लोज़-ग्रिप बेंच प्रेस"
    },
    "keywords": [
      "diamond pushup",
      "triangle pushup",
      "bodyweight triceps"
    ]
  },
  {
    "id": "bench-dips",
    "name": {
      "en": "Bench Dips",
      "hi": "बेंच डिप्स (Bench Dips)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Chest"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Flat Bench",
    "description": {
      "en": "Hands braced on edge of bench behind torso, dipping hips down to overload tricep extension.",
      "hi": "धड़ के पीछे बेंच के किनारे पर हाथ रखकर हिप्स को नीचे ले जाकर ट्राइसेप्स को लोड करने वाला डिप।"
    },
    "startingPosition": {
      "en": "Sit on bench edge, hands gripping edge beside hips, legs extended forward.",
      "hi": "बेंच के किनारे बैठें, हाथों से किनारा पकड़ें, पैर आगे फैले हुए।"
    },
    "steps": [
      {
        "en": "Slide hips off bench and lower body until elbows reach 90 degrees.",
        "hi": "हिप्स को बेंच से आगे लाएं और शरीर को तब तक नीचे करें जब तक कोहनियां 90 डिग्री न हो जाएं।"
      },
      {
        "en": "Press up through palms to full arm extension.",
        "hi": "पूर्ण विस्तार तक हथेलियों से ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Drifting hips too far forward from bench, straining anterior shoulders.",
        "hi": "बेंच से हिप्स को बहुत आगे ले जाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep back skimming the bench pad during descent.",
        "hi": "नीचे जाते समय पीठ को बेंच पैड के करीब रखें।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "bench dips",
      "triceps dips",
      "bodyweight"
    ]
  },
  {
    "id": "assisted-triceps-dips",
    "name": {
      "en": "Assisted Triceps Dips",
      "hi": "असिस्टेड ट्राइसेप्स डिप्स (Assisted Triceps Dips)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Assisted Dip Machine or Resistance Band",
    "description": {
      "en": "Counterweighted dip machine allowing progressive strength building for parallel bar dips.",
      "hi": "पैरेलल बार डिप्स के लिए प्रगतिशील ताकत बनाने की अनुमति देने वाली काउंटर-वेटेड मशीन।"
    },
    "startingPosition": {
      "en": "Kneel on assisted pad, grasp parallel bars with upright torso.",
      "hi": "असिस्टेड पैड पर घुटने टेकें, सीधे धड़ के साथ बार पकड़ें।"
    },
    "steps": [
      {
        "en": "Lower body keeping torso upright to focus on triceps.",
        "hi": "ट्राइसेप्स पर ध्यान केंद्रित करने के लिए धड़ को सीधा रखते हुए शरीर को नीचे करें।"
      },
      {
        "en": "Press back up to lockout.",
        "hi": "लॉकआउट तक वापस ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Leaning forward into a chest dip.",
        "hi": "चेस्ट डिप की तरह आगे झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Reduce counterweight gradually as you grow stronger.",
        "hi": "जैसे-जैसे आप मजबूत हों, काउंटरवेट को धीरे-धीरे कम करें।"
      }
    ],
    "alternative": {
      "en": "Bench Dips",
      "hi": "बेंच डिप्स"
    },
    "keywords": [
      "assisted dips",
      "triceps machine"
    ]
  },
  {
    "id": "single-arm-cable-extension",
    "name": {
      "en": "Single-Arm Cable Extension",
      "hi": "सिंगल-आर्म केबल एक्सटेंशन (Single-Arm Cable Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Medial Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "High Cable, D-Handle or Bare Cable",
    "description": {
      "en": "Unilateral cable extension isolating each tricep independently to fix strength discrepancies.",
      "hi": "ताकत की विसंगतियों को ठीक करने के लिए प्रत्येक ट्राइसेप्स को स्वतंत्र रूप से अलग करने वाला व्यायाम।"
    },
    "startingPosition": {
      "en": "Grasp single handle at high pulley, elbow locked at side.",
      "hi": "हाई पुली पर सिंगल हैंडल पकड़ें, कोहनी किनारे पर स्थिर।"
    },
    "steps": [
      {
        "en": "Extend arm straight down to hip.",
        "hi": "बांह को सीधे हिप तक नीचे फैलाएं।"
      },
      {
        "en": "Squeeze triceps at lockout.",
        "hi": "लॉकआउट पर ट्राइसेप्स को निचोड़ें।"
      },
      {
        "en": "Return slowly to 90 degrees.",
        "hi": "90 डिग्री तक धीरे-धीरे वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale down, inhale up.",
      "hi": "नीचे सांस छोड़ें, ऊपर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Twisting torso to push weight.",
        "hi": "वजन दबाने के लिए धड़ को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Grip the rubber cable ball directly for natural joint tracking.",
        "hi": "प्राकृतिक संयुक्त गति के लिए सीधे रबर केबल बॉल को पकड़ें।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "single arm triceps",
      "unilateral extension",
      "cable"
    ]
  },
  {
    "id": "cross-body-cable-triceps-extension",
    "name": {
      "en": "Cross-Body Cable Triceps Extension",
      "hi": "क्रॉस-बॉडी केबल ट्राइसेप्स एक्सटेंशन (Cross-Body Cable Triceps Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Medial & Lateral Heads)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dual High Cables (Crossed)",
    "description": {
      "en": "Extensions across the body following the natural anatomical fiber alignment of the triceps.",
      "hi": "ट्राइसेप्स के प्राकृतिक शारीरिक फाइबर संरेखण के बाद शरीर के पार एक्सटेंशन।"
    },
    "startingPosition": {
      "en": "Cross arms to hold opposite high cables without attachments at chest level.",
      "hi": "छाती के स्तर पर बिना अटैचमेंट के विपरीत हाई केबल्स को पकड़ने के लिए बाहों को क्रॉस करें।"
    },
    "steps": [
      {
        "en": "Extend both arms diagonally downward and outward.",
        "hi": "दोनों बाहों को तिरछे नीचे और बाहर फैलाएं।"
      },
      {
        "en": "Lock out elbows fully and flex triceps.",
        "hi": "कोहनियों को पूरी तरह सीधा करें और ट्राइसेप्स को फ्लेक्स करें।"
      },
      {
        "en": "Return hands across chest under control.",
        "hi": "नियंत्रण में हाथों को वापस छाती पर लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on extension; inhale on return.",
      "hi": "विस्तार पर सांस छोड़ें; वापसी पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging shoulders.",
        "hi": "कंधों को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Popularized by modern hypertrophy coaches for peak joint comfort.",
        "hi": "संयुक्त आराम के लिए आधुनिक कोचों द्वारा अत्यधिक अनुशंसित।"
      }
    ],
    "alternative": {
      "en": "Cable Pushdown",
      "hi": "केबल पुशडाउन"
    },
    "keywords": [
      "cross body triceps",
      "cable extension",
      "medial head"
    ]
  },
  {
    "id": "lying-triceps-extension",
    "name": {
      "en": "Lying Triceps Extension",
      "hi": "लाइंग ट्राइसेप्स एक्सटेंशन (Lying Triceps Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Long Head)"
    ],
    "secondaryMuscles": [
      "Lateral Head"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Barbell or Dumbbells, Bench",
    "description": {
      "en": "Extension performed lowering bar behind the head rather than to forehead to maximize long-head stretch.",
      "hi": "लंबे सिर के खिंचाव को अधिकतम करने के लिए माथे के बजाय सिर के पीछे बार को नीचे लाने वाला एक्सटेंशन।"
    },
    "startingPosition": {
      "en": "Lie on bench, arms angled 45 degrees back toward head.",
      "hi": "बेंच पर लेटें, बाहें सिर की ओर 45 डिग्री पीछे झुकी हों।"
    },
    "steps": [
      {
        "en": "Bend elbows to lower bar behind bench top.",
        "hi": "बेंच के शीर्ष के पीछे बार को नीचे लाने के लिए कोहनियों को मोड़ें।"
      },
      {
        "en": "Extend elbows back to 45-degree angled starting position.",
        "hi": "45-डिग्री कोणीय शुरुआती स्थिति में वापस कोहनियों को सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bringing arms back to vertical, losing tension.",
        "hi": "बाहों को सीधा लंबवत लाना, जिससे तनाव खत्म हो जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Maintains uninterrupted tension on the long head at lockout.",
        "hi": "लॉकआउट पर लंबे सिर पर निर्बाध तनाव बनाए रखता है।"
      }
    ],
    "alternative": {
      "en": "EZ-Bar Skull Crushers",
      "hi": "ईज़ी-बार स्कल क्रशर्स"
    },
    "keywords": [
      "lying extension",
      "long head triceps",
      "french press"
    ]
  },
  {
    "id": "seated-machine-triceps-extension",
    "name": {
      "en": "Seated Machine Triceps Extension",
      "hi": "सीटेड मशीन ट्राइसेप्स एक्सटेंशन (Seated Machine Triceps Extension)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Triceps Extension Machine",
    "description": {
      "en": "Seated machine bracing elbows on pads for strict, guided tricep extension overload.",
      "hi": "सख्त, निर्देशित ट्राइसेप्स विस्तार के लिए पैड पर कोहनियों को सहारा देने वाली सीटेड मशीन।"
    },
    "startingPosition": {
      "en": "Sit with back supported, elbows aligned with machine axis, hands on grips.",
      "hi": "पीठ के सहारे बैठें, कोहनियां मशीन की धुरी से संरेखित, हाथों से ग्रिप पकड़ें।"
    },
    "steps": [
      {
        "en": "Push handles forward until arms are fully locked.",
        "hi": "हैंडल को आगे दबाएं जब तक कि बाहें पूरी तरह सीधी न हो जाएं।"
      },
      {
        "en": "Hold contraction 1 second.",
        "hi": "1 सेकंड संकुचन बनाए रखें।"
      },
      {
        "en": "Return slowly to full flexion.",
        "hi": "पूर्ण मोड़ तक धीरे-धीरे वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale extending; inhale returning.",
      "hi": "विस्तार पर सांस छोड़ें; लौटने पर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Lifting elbows off support pads.",
        "hi": "सपोर्ट पैड से कोहनियों को उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Great for safe drop sets to failure.",
        "hi": "विफलता तक सुरक्षित ड्रॉप सेट के लिए बढ़िया।"
      }
    ],
    "alternative": {
      "en": "Cable Triceps Pushdown",
      "hi": "केबल ट्राइसेप्स पुशडाउन"
    },
    "keywords": [
      "machine triceps",
      "seated extension"
    ]
  },
  {
    "id": "dumbbell-kickbacks",
    "name": {
      "en": "Dumbbell Kickbacks",
      "hi": "डम्बल किकबैक्स (Dumbbell Kickbacks)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Lateral & Long Head)"
    ],
    "secondaryMuscles": [
      "Rear Deltoid"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells, Bench",
    "description": {
      "en": "Hinged elbow extension keeping upper arm parallel to torso, peaking maximum shortened contraction.",
      "hi": "ऊपरी बांह को धड़ के समानांतर रखकर कोहनी को सीधा करना, जो अधिकतम संकुचन प्रदान करता है।"
    },
    "startingPosition": {
      "en": "One knee and hand on bench, torso parallel to floor, upper arm pinned parallel to torso.",
      "hi": "बेंच पर एक घुटना और हाथ, धड़ फर्श के समानांतर, ऊपरी बांह धड़ के समानांतर चिपकी हुई।"
    },
    "steps": [
      {
        "en": "Extend forearm backward until arm is completely straight.",
        "hi": "फोरआर्म को पीछे तब तक सीधा करें जब तक बांह पूरी तरह सीधी न हो जाए।"
      },
      {
        "en": "Squeeze triceps intensely at top for 2 seconds.",
        "hi": "शीर्ष पर 2 सेकंड के लिए ट्राइसेप्स को तीव्रता से निचोड़ें।"
      },
      {
        "en": "Lower dumbbell back to 90 degrees.",
        "hi": "डम्बल को 90 डिग्री तक वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale kicking back; inhale returning.",
      "hi": "पीछे लाते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping upper arm down toward floor.",
        "hi": "ऊपरी बांह को फर्श की ओर नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Use light weight and prioritize the 2-second peak squeeze.",
        "hi": "हल्के वजन का उपयोग करें और 2-सेकंड के पीक निचोड़ को प्राथमिकता दें।"
      }
    ],
    "alternative": {
      "en": "Cable Kickbacks",
      "hi": "केबल किकबैक्स"
    },
    "keywords": [
      "dumbbell kickback",
      "triceps peak",
      "arm contraction"
    ]
  },
  {
    "id": "cable-kickbacks",
    "name": {
      "en": "Cable Kickbacks",
      "hi": "केबल किकबैक्स (Cable Kickbacks)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Rear Deltoid"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Low or Mid Cable, Single Handle",
    "description": {
      "en": "Cable version of kickbacks solving the free-weight dead zone at the start of the movement.",
      "hi": "किकबैक का केबल संस्करण जो मूवमेंट की शुरुआत में फ्री-वेट के तनाव-मुक्त क्षेत्र को हल करता है।"
    },
    "startingPosition": {
      "en": "Hinge forward facing cable, upper arm pinned to side.",
      "hi": "केबल की ओर मुंह करके झुकें, ऊपरी बांह किनारे से चिपकी हो।"
    },
    "steps": [
      {
        "en": "Extend arm straight back against cable pull.",
        "hi": "केबल खिंचाव के खिलाफ बांह को सीधे पीछे फैलाएं।"
      },
      {
        "en": "Hold peak contraction.",
        "hi": "पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Control return to 90 degrees.",
        "hi": "90 डिग्री तक नियंत्रित वापसी।"
      }
    ],
    "breathing": {
      "en": "Exhale back, inhale forward.",
      "hi": "पीछे सांस छोड़ें, आगे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging upper arm.",
        "hi": "ऊपरी बांह को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Continuous tension makes this far superior to dumbbell kickbacks.",
        "hi": "निरंतर तनाव इसे डम्बल किकबैक से कहीं बेहतर बनाता है।"
      }
    ],
    "alternative": {
      "en": "Dumbbell Kickbacks",
      "hi": "डम्बल किकबैक्स"
    },
    "keywords": [
      "cable kickback",
      "triceps isolation"
    ]
  },
  {
    "id": "tate-press",
    "name": {
      "en": "Tate Press",
      "hi": "टेट प्रेस (Tate Press)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii (Lateral Head)"
    ],
    "secondaryMuscles": [
      "Anconeus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "Powerlifting tricep builder invented by Dave Tate, hinging dumbbells inward across chest and pressing outward.",
      "hi": "डेव टेट द्वारा आविष्कृत पावरलिफ्टिंग ट्राइसेप्स व्यायाम, छाती पर डम्बल को अंदर मोड़कर बाहर की ओर दबाना।"
    },
    "startingPosition": {
      "en": "Lie flat holding dumbbells over chest, palms facing feet, dumbbells touching.",
      "hi": "छाती के ऊपर डम्बल लेकर सपाट लेटें, हथेलियां पैरों की ओर, डम्बल छूते हुए।"
    },
    "steps": [
      {
        "en": "Hinge at elbows to lower inside bells of dumbbells down to touch chest.",
        "hi": "डम्बल को छाती को छूने के लिए कोहनियों से अंदर मोड़ें।"
      },
      {
        "en": "Press dumbbells back up and outward to lockout using triceps.",
        "hi": "ट्राइसेप्स का उपयोग करके डम्बल को वापस ऊपर और बाहर लॉकआउट तक दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Allowing elbows to flare uncontrollably.",
        "hi": "कोहनियों को अनियंत्रित रूप से बाहर फैलने देना।"
      }
    ],
    "tips": [
      {
        "en": "Sensational for bench press lockout power and thick lateral triceps.",
        "hi": "बेंच प्रेस लॉकआउट पावर और मजबूत ट्राइसेप्स के लिए शानदार।"
      }
    ],
    "alternative": {
      "en": "JM Press or Skull Crushers",
      "hi": "जेएम प्रेस या स्कल क्रशर्स"
    },
    "keywords": [
      "tate press",
      "dave tate",
      "powerlifting triceps",
      "bench lockout"
    ]
  },
  {
    "id": "jm-press",
    "name": {
      "en": "JM Press",
      "hi": "जेएम प्रेस (JM Press)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Chest",
      "Anterior Deltoid"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Bench, Squat Rack",
    "description": {
      "en": "Hybrid between a close-grip bench press and a skull crusher invented by JM Blakley, the ultimate lockout power builder.",
      "hi": "क्लोज़-ग्रिप बेंच प्रेस और स्कल क्रशर के बीच का हाइब्रिड व्यायाम, अंतिम लॉकआउट पावर बिल्डर।"
    },
    "startingPosition": {
      "en": "Lie flat on bench, unrack barbell with narrow overhand grip directly over clavicles.",
      "hi": "फ्लैट बेंच पर लेटें, हंसली के ऊपर संकीर्ण पकड़ से बार अनरैक करें।"
    },
    "steps": [
      {
        "en": "Lower bar in a straight line toward throat/neck by simultaneously bending elbows and letting them drift forward.",
        "hi": "कोहनियों को मोड़ते हुए और उन्हें थोड़ा आगे जाने देते हुए बार को गले की ओर नीचे लाएं।"
      },
      {
        "en": "Stop 2 inches above neck in deep tricep bend.",
        "hi": "गहरे ट्राइसेप्स मोड़ में गर्दन से 2 इंच ऊपर रुकें।"
      },
      {
        "en": "Drive up aggressively through triceps back to starting position.",
        "hi": "ट्राइसेप्स से आक्रामक रूप से वापस शुरुआती स्थिति में दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rushing with too much weight before mastering the unique bar path.",
        "hi": "अनोखे बार पथ में महारत हासिल करने से पहले बहुत अधिक वजन उठाना।"
      }
    ],
    "tips": [
      {
        "en": "The secret weapon behind legendary powerlifting bench presses.",
        "hi": "पौराणिक पावरलिफ्टिंग बेंच प्रेस के पीछे का गुप्त हथियार।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always use safety pins or a spotter.",
      "hi": "हमेशा सेफ्टी पिन या स्पॉटर का उपयोग करें।"
    },
    "alternative": {
      "en": "Close-Grip Bench Press",
      "hi": "क्लोज़-ग्रिप बेंच प्रेस"
    },
    "keywords": [
      "jm press",
      "jm blakley",
      "triceps power",
      "bench lock"
    ]
  },
  {
    "id": "parallel-bar-triceps-dips",
    "name": {
      "en": "Parallel Bar Triceps Dips",
      "hi": "पैरेलल बार ट्राइसेप्स डिप्स (Parallel Bar Triceps Dips)"
    },
    "muscle": "Triceps",
    "primaryMuscles": [
      "Triceps Brachii"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Lower Pectoralis"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dip Bars",
    "description": {
      "en": "Bodyweight dip executed with an upright vertical torso to place maximum mechanical shear on the triceps.",
      "hi": "ट्राइसेप्स पर अधिकतम भार डालने के लिए सीधे लंबवत धड़ के साथ किया जाने वाला बॉडीवेट डिप।"
    },
    "startingPosition": {
      "en": "Mount parallel bars, lock arms out, keep torso completely vertical (no forward lean).",
      "hi": "पैरेलल बार पर चढ़ें, बाहें सीधी करें, धड़ को पूरी तरह से लंबवत रखें।"
    },
    "steps": [
      {
        "en": "Lower body by bending elbows straight back, keeping torso upright.",
        "hi": "धड़ को सीधा रखते हुए कोहनियों को सीधा पीछे मोड़कर शरीर को नीचे लाएं।"
      },
      {
        "en": "Descend to 90 degrees elbow bend.",
        "hi": "90 डिग्री कोहनी मोड़ तक नीचे जाएं।"
      },
      {
        "en": "Press back up forcefully to full tricep lockout.",
        "hi": "पूर्ण लॉकआउट तक बलपूर्वक वापस ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Leaning forward, which turns it into a chest dip.",
        "hi": "आगे झुकना, जिससे यह चेस्ट डिप बन जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Keep legs straight down below you to maintain vertical torso.",
        "hi": "लंबवत धड़ बनाए रखने के लिए पैरों को सीधा नीचे रखें।"
      }
    ],
    "alternative": {
      "en": "Close-Grip Bench Press",
      "hi": "क्लोज़-ग्रिप बेंच प्रेस"
    },
    "keywords": [
      "triceps dips",
      "bodyweight triceps",
      "parallel bars"
    ]
  },
  {
    "id": "barbell-back-squat",
    "name": {
      "en": "Barbell Back Squat",
      "hi": "बार्बेल बैक स्क्वाट (Barbell Back Squat)"
    },
    "muscle": "Legs",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Squat Rack, Weight Plates",
    "description": {
      "en": "The undisputed king of leg exercises, forging unmatched quadriceps mass, lower-body power, and systemic strength.",
      "hi": "पैरों के व्यायामों का निर्विवाद राजा, जो बेजोड़ क्वाड्रिसेप्स आकार, शक्ति और समग्र शक्ति का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "Unrack barbell across upper trapezius (high bar) or rear deltoids (low bar). Stand with feet shoulder-width, toes angled slightly out, chest proud.",
      "hi": "ऊपरी ट्रैप्स पर बारबेल रखें। पैरों को कंधे की चौड़ाई पर रखकर खड़े हों, पंजे थोड़े बाहर, छाती आगे।"
    },
    "steps": [
      {
        "en": "Take a deep breath into your belly and brace your core 360 degrees.",
        "hi": "पेट में गहरी सांस लें और अपने कोर को 360 डिग्री कस लें।"
      },
      {
        "en": "Descend by simultaneously bending knees and breaking at the hips, keeping chest elevated.",
        "hi": "छाती को ऊपर रखते हुए एक साथ घुटनों और कूल्हों को मोड़कर नीचे जाएं।"
      },
      {
        "en": "Squat down until hips dip below parallel with knee joints.",
        "hi": "तब तक नीचे बैठें जब तक कूल्हे घुटनों के समानांतर से नीचे न चले जाएं।"
      },
      {
        "en": "Drive through mid-foot and heels to stand back up powerfully to lockout.",
        "hi": "वापस सीधे खड़े होने के लिए मध्य-पैर और एड़ी से जोर से ऊपर धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale and Valsalva brace at top; hold during descent and sticking point; exhale forcefully at lockout.",
      "hi": "शीर्ष पर सांस लें और कोर कसें; नीचे जाते समय रोके रखें; खड़े होने पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Allowing knees to cave inward (knee valgus) upon ascent.",
        "hi": "ऊपर उठते समय घुटनों को अंदर की ओर झुकने देना।"
      },
      {
        "en": "Rising onto the toes and letting heels lift off the platform.",
        "hi": "पंजों पर उठना और एड़ियों को फर्श से उठने देना।"
      },
      {
        "en": "Rounding the lower back (butt wink) at maximum depth.",
        "hi": "अधिकतम गहराई पर निचली पीठ को गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "Screw your feet into the floor to activate external hip rotators and glutes.",
        "hi": "कूल्हों को सक्रिय करने के लिए अपने पैरों को फर्श पर पेंच की तरह घुमाने का प्रयास करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always set safety spotter arms inside a power rack at proper depth.",
      "hi": "हमेशा पावर रैक के अंदर उचित गहराई पर सेफ्टी आर्म्स सेट करें।"
    },
    "alternative": {
      "en": "Front Squat or Leg Press",
      "hi": "फ्रंट स्क्वाट या लेग प्रेस"
    },
    "keywords": [
      "squat",
      "back squat",
      "quads",
      "quadriceps",
      "legs",
      "king of exercises"
    ]
  },
  {
    "id": "front-squat",
    "name": {
      "en": "Front Squat",
      "hi": "फ्रंट स्क्वाट (Front Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris, Vastus Medialis)"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back",
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "Racking the barbell across the anterior deltoids forces an upright torso, transferring maximum loading directly into the quads.",
      "hi": "सामने के कंधों पर बारबेल रखने से धड़ सीधा रहता है, जिससे सारा भार सीधे क्वाड्स पर जाता है।"
    },
    "startingPosition": {
      "en": "Clean grip or cross-arm grip with bar resting on front deltoids, elbows driven high.",
      "hi": "क्लीन ग्रिप या क्रॉस-आर्म ग्रिप में बार सामने के कंधों पर, कोहनियां ऊंची।"
    },
    "steps": [
      {
        "en": "Squat down keeping elbows pointed straight forward.",
        "hi": "कोहनियों को सीधा आगे रखते हुए नीचे बैठें।"
      },
      {
        "en": "Descend into full deep knee flexion with an upright torso.",
        "hi": "सीधे धड़ के साथ पूर्ण गहरे घुटने के मोड़ में नीचे जाएं।"
      },
      {
        "en": "Drive up through heels while keeping elbows lifted.",
        "hi": "कोहनियों को उठाए रखते हुए एड़ी से ऊपर उठें।"
      }
    ],
    "breathing": {
      "en": "Inhale at top, brace, exhale past sticking point.",
      "hi": "शीर्ष पर सांस लें, कोर कसें, ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Dropping elbows down, dumping the bar forward.",
        "hi": "कोहनियों को नीचे गिराना, जिससे बार आगे गिर जाती है।"
      }
    ],
    "tips": [
      {
        "en": "Requires superior thoracic spine mobility and builds immense quad sweep.",
        "hi": "शानदार गतिशीलता की आवश्यकता होती है और बड़ा क्वाड स्वीप बनाता है।"
      }
    ],
    "alternative": {
      "en": "Goblet Squat or Hack Squat",
      "hi": "गोब्लेट स्क्वाट या हैक स्क्वाट"
    },
    "keywords": [
      "front squat",
      "quads",
      "upright squat",
      "clean grip"
    ]
  },
  {
    "id": "goblet-squat",
    "name": {
      "en": "Goblet Squat",
      "hi": "गोब्लेट स्क्वाट (Goblet Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Glutes"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Single Dumbbell or Kettlebell",
    "description": {
      "en": "Holding a dumbbell vertically at chest level serves as a natural counterbalance to learn perfect squat mechanics.",
      "hi": "सही स्क्वाट सीखने के लिए छाती पर डम्बल को पकड़कर किया जाने वाला उत्कृष्ट शुरुआती व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand with feet shoulder-width, hold dumbbell cupped vertically at chest height.",
      "hi": "पैरों को कंधे की चौड़ाई पर रखकर खड़े हों, छाती पर डम्बल को सीधा पकड़ें।"
    },
    "steps": [
      {
        "en": "Squat down between your hips, letting elbows track inside knees.",
        "hi": "अपने कूल्हों के बीच नीचे बैठें, कोहनियों को घुटनों के अंदर जाने दें।"
      },
      {
        "en": "Pause for a split-second at parallel.",
        "hi": "समानांतर पर एक पल के लिए रुकें।"
      },
      {
        "en": "Stand up forcefully squeezing quads.",
        "hi": "क्वाड्स को निचोड़ते हुए बलपूर्वक सीधे खड़े हों।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Allowing weight to pull chest forward.",
        "hi": "वजन को छाती आगे खींचने देना।"
      }
    ],
    "tips": [
      {
        "en": "The gold-standard squat teaching tool for all lifters.",
        "hi": "सभी लिफ्टर्स के लिए सबसे बेहतरीन स्क्वाट सीखने का उपकरण।"
      }
    ],
    "alternative": {
      "en": "Barbell Back Squat",
      "hi": "बार्बेल बैक स्क्वाट"
    },
    "keywords": [
      "goblet squat",
      "kettlebell squat",
      "quads",
      "beginner leg"
    ]
  },
  {
    "id": "hack-squat",
    "name": {
      "en": "Hack Squat",
      "hi": "हैक स्क्वाट (Hack Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Vastus Lateralis Sweep)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Hack Squat Machine",
    "description": {
      "en": "45-degree angled machine squat stabilizing the back to direct all mechanical shear directly into the quadriceps.",
      "hi": "45-डिग्री कोणीय मशीन स्क्वाट जो पीठ को सहारा देकर सारा भार सीधे क्वाड्स पर डालता है।"
    },
    "startingPosition": {
      "en": "Shoulders snug under pads, back flat against backrest, feet placed low/mid on footplate.",
      "hi": "पैड के नीचे कंधे, बैकरेस्ट पर पीठ सपाट, फुटप्लेट पर पैर।"
    },
    "steps": [
      {
        "en": "Disengage safety handles and squat down under full control.",
        "hi": "सेफ्टी हैंडल हटाएं और पूर्ण नियंत्रण में नीचे बैठें।"
      },
      {
        "en": "Descend to full depth where knees reach 90+ degrees bend.",
        "hi": "पूर्ण गहराई तक नीचे जाएं जहां घुटने 90+ डिग्री मुड़ते हैं।"
      },
      {
        "en": "Press through entire foot back to lockout without slamming knees.",
        "hi": "घुटनों को जोर से लॉक किए बिना पूरे पैर से ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Placing feet too high, shifting load onto glutes instead of quads.",
        "hi": "पैरों को बहुत ऊपर रखना, जिससे भार क्वाड्स के बजाय ग्लूट्स पर जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Placing feet low on platform maximizes knee travel and quad hypertrophy.",
        "hi": "प्लेटफ़ॉर्म पर पैरों को नीचे रखने से क्वाड्स का विकास अधिकतम होता है।"
      }
    ],
    "alternative": {
      "en": "Leg Press",
      "hi": "लेग प्रेस"
    },
    "keywords": [
      "hack squat",
      "quad sweep",
      "machine squat",
      "outer quads"
    ]
  },
  {
    "id": "leg-press",
    "name": {
      "en": "Leg Press",
      "hi": "लेग प्रेस (Leg Press)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "45-Degree Incline Leg Press Machine",
    "description": {
      "en": "Allows monstrous lower-body loading without any spinal compression, ideal for pure quad overload.",
      "hi": "रीढ़ की हड्डी पर दबाव के बिना निचले शरीर पर भारी भार डालने की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Sit in sled, lower back flush against pad, feet shoulder-width in center of plate.",
      "hi": "स्लेड में बैठें, निचली पीठ पैड से चिपकी हुई, प्लेट के केंद्र में पैर।"
    },
    "steps": [
      {
        "en": "Release safeties and lower sled slowly toward chest.",
        "hi": "सेफ्टी हैंडल हटाएं और स्लेड को धीरे-धीरे छाती की ओर नीचे लाएं।"
      },
      {
        "en": "Stop just before lower back or hips peel off the pad.",
        "hi": "कमर पैड से उठने से ठीक पहले रुकें।"
      },
      {
        "en": "Press platform away forcefully through mid-foot to soft lockout.",
        "hi": "प्लेटफ़ॉर्म को मध्य-पैर से ऊपर दबाएं, घुटनों को सॉफ्ट रखें।"
      }
    ],
    "breathing": {
      "en": "Inhale lowering; exhale pressing.",
      "hi": "नीचे लाते समय सांस लें; दबाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hyperextending and locking knees out hard at top (extreme joint injury risk).",
        "hi": "शीर्ष पर घुटनों को बहुत तेजी से लॉक करना (गंभीर चोट का जोखिम)।"
      },
      {
        "en": "Allowing butt to roll off the pad, causing lumbar disc compression.",
        "hi": "कूल्हों को पैड से उठने देना।"
      }
    ],
    "tips": [
      {
        "en": "Never lock knees out completely; maintain a micro-bend at the top.",
        "hi": "घुटनों को कभी भी पूरी तरह से सीधा लॉक न करें; हल्का मोड़ बनाए रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep safeties in position to prevent entrapment.",
      "hi": "फंसने से रोकने के लिए सेफ्टी स्टॉप को सही जगह पर रखें।"
    },
    "alternative": {
      "en": "Hack Squat or Barbell Squat",
      "hi": "हैक स्क्वाट या बार्बेल स्क्वाट"
    },
    "keywords": [
      "leg press",
      "quads",
      "machine legs",
      "heavy press"
    ]
  },
  {
    "id": "bulgarian-split-squat",
    "name": {
      "en": "Bulgarian Split Squat",
      "hi": "बुल्गारियन स्प्लिट स्क्वाट (Bulgarian Split Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Hamstrings",
      "Calves"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells, Flat Bench",
    "description": {
      "en": "Rear-foot-elevated split squat that incinerates the front quad and glute while fixing left-to-right leg imbalances.",
      "hi": "पिछला पैर बेंच पर रखकर किया जाने वाला स्प्लिट स्क्वाट जो क्वाड्स और ग्लूट्स का बेजोड़ विकास करता है।"
    },
    "startingPosition": {
      "en": "Stand 2-3 feet in front of bench. Elevate rear foot laces-down on bench. Hold dumbbells at sides.",
      "hi": "बेंच से 2-3 फीट आगे खड़े हों। पिछला पैर बेंच पर रखें। किनारों पर डम्बल पकड़ें।"
    },
    "steps": [
      {
        "en": "Descend into front leg by bending knee until front thigh is parallel to floor.",
        "hi": "सामने के घुटने को मोड़कर नीचे जाएं जब तक कि जांघ फर्श के समानांतर न हो जाए।"
      },
      {
        "en": "Rear knee descends straight down to within 1-2 inches of ground.",
        "hi": "पिछला घुटना जमीन से 1-2 इंच ऊपर तक सीधा नीचे जाता है।"
      },
      {
        "en": "Drive through front mid-foot to return to top.",
        "hi": "वापस ऊपर आने के लिए सामने के पैर से ऊपर धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Front foot placed too close, jamming knee into deep acute angle.",
        "hi": "सामने के पैर को बहुत पास रखना।"
      }
    ],
    "tips": [
      {
        "en": "Keep torso upright to emphasize quadriceps; lean forward to hit glutes.",
        "hi": "क्वाड्स पर जोर देने के लिए धड़ को सीधा रखें।"
      }
    ],
    "alternative": {
      "en": "Walking Lunges or Split Squats",
      "hi": "वॉकिंग लंजेस या स्प्लिट स्क्वाट्स"
    },
    "keywords": [
      "bulgarian split squat",
      "bss",
      "single leg",
      "quads",
      "glutes"
    ]
  },
  {
    "id": "walking-lunges",
    "name": {
      "en": "Walking Lunges",
      "hi": "वॉकिंग लंजेस (Walking Lunges)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells or Barbell",
    "description": {
      "en": "Dynamic unilateral leg movement taking continuous steps forward, building functional strength and leg stamina.",
      "hi": "लगातार आगे कदम बढ़ाते हुए किया जाने वाला डायनेमिक लेग व्यायाम, जो कार्यात्मक ताकत बनाता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding dumbbells at sides, clear runway in front of you.",
      "hi": "किनारों पर डम्बल पकड़कर सीधे खड़े हों, सामने स्पष्ट रास्ता हो।"
    },
    "steps": [
      {
        "en": "Take an exaggerated step forward and drop hips until both knees form 90 degrees.",
        "hi": "आगे एक लंबा कदम बढ़ाएं और तब तक नीचे बैठें जब तक दोनों घुटने 90 डिग्री न बना लें।"
      },
      {
        "en": "Lightly kiss rear knee to ground.",
        "hi": "पिछले घुटने को जमीन से हल्के से छुएं।"
      },
      {
        "en": "Push through front heel and step straight through into the next forward lunge.",
        "hi": "सामने की एड़ी से ऊपर उठें और सीधे अगले कदम में कदम रखें।"
      }
    ],
    "breathing": {
      "en": "Rhythmic breathing matching footstep pace.",
      "hi": "कदमों की गति से मेल खाती लयबद्ध श्वास।"
    },
    "mistakes": [
      {
        "en": "Slamming back knee onto hard floor.",
        "hi": "पिछले घुटने को फर्श पर पटकना।"
      }
    ],
    "tips": [
      {
        "en": "Maintain walking hip-width distance between footsteps for balance.",
        "hi": "संतुलन के लिए पैरों के बीच हिप-चौड़ाई की दूरी बनाए रखें।"
      }
    ],
    "alternative": {
      "en": "Reverse Lunges",
      "hi": "रिवर्स लंजेस"
    },
    "keywords": [
      "walking lunges",
      "quads",
      "dynamic leg",
      "conditioning"
    ]
  },
  {
    "id": "reverse-lunges",
    "name": {
      "en": "Reverse Lunges",
      "hi": "रिवर्स लंजेस (Reverse Lunges)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells or Bodyweight",
    "description": {
      "en": "Stepping backward into a lunge, which significantly reduces anterior knee joint shearing stress compared to forward lunges.",
      "hi": "पीछे कदम रखकर लंज करना, जो आगे के घुटने के जोड़ पर तनाव को काफी कम करता है।"
    },
    "startingPosition": {
      "en": "Stand tall with feet together, holding dumbbells.",
      "hi": "पैरों को एक साथ रखकर सीधे खड़े हों, डम्बल पकड़े हुए।"
    },
    "steps": [
      {
        "en": "Step backward with one foot and lower rear knee toward floor.",
        "hi": "एक पैर से पीछे कदम रखें और पिछले घुटने को फर्श की ओर नीचे लाएं।"
      },
      {
        "en": "Front shin stays vertical.",
        "hi": "सामने की पिंडली लंबवत रहती है।"
      },
      {
        "en": "Drive through front heel to step back together.",
        "hi": "वापस एक साथ आने के लिए सामने की एड़ी से धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale stepping back; exhale driving forward.",
      "hi": "पीछे कदम रखते समय सांस लें; आगे उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Pushing off the back toe instead of driving through front heel.",
        "hi": "सामने की एड़ी से धकेलने के बजाय पीछे के पैर के पंजे से धकेलना।"
      }
    ],
    "tips": [
      {
        "en": "The best lunge variation for lifters with knee pain.",
        "hi": "घुटने के दर्द वाले लोगों के लिए सबसे अच्छा लंज व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Bulgarian Split Squat",
      "hi": "बुल्गारियन स्प्लिट स्क्वाट"
    },
    "keywords": [
      "reverse lunge",
      "knee friendly lunge",
      "quads"
    ]
  },
  {
    "id": "forward-lunges",
    "name": {
      "en": "Forward Lunges",
      "hi": "फॉरवर्ड लंजेस (Forward Lunges)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells or Bodyweight",
    "description": {
      "en": "Classic forward stepping lunge emphasizing the deceleration braking power of the front quadriceps.",
      "hi": "सामने कदम रखकर किया जाने वाला क्लासिक लंज जो सामने के क्वाड्स पर जोर देता है।"
    },
    "startingPosition": {
      "en": "Stand tall, core engaged, dumbbells at sides.",
      "hi": "कोर को कसकर सीधे खड़े हों, डम्बल किनारों पर।"
    },
    "steps": [
      {
        "en": "Step forward, plant foot flat, bend knees to 90 degrees.",
        "hi": "आगे कदम रखें, पैर सपाट रखें, घुटनों को 90 डिग्री पर मोड़ें।"
      },
      {
        "en": "Push back explosively off front foot to return to standing.",
        "hi": "वापस खड़े होने के लिए सामने के पैर से तेजी से पीछे धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale forward, exhale back.",
      "hi": "आगे जाते समय सांस लें, पीछे आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Torso collapsing forward onto front thigh.",
        "hi": "धड़ को सामने की जांघ पर आगे गिरने देना।"
      }
    ],
    "tips": [
      {
        "en": "Keep torso upright to maximize quad loading.",
        "hi": "क्वाड लोडिंग को अधिकतम करने के लिए धड़ को सीधा रखें।"
      }
    ],
    "alternative": {
      "en": "Reverse Lunges",
      "hi": "रिवर्स लंजेस"
    },
    "keywords": [
      "forward lunge",
      "quads",
      "single leg"
    ]
  },
  {
    "id": "step-ups",
    "name": {
      "en": "Step-Ups",
      "hi": "स्टेप-अप्स (Step-Ups)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Calves",
      "Hamstrings"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Plyo Box or Sturdy Bench, Dumbbells",
    "description": {
      "en": "Stepping onto an elevated box to build unilateral quad drive and athletic vertical jumping power.",
      "hi": "एक ऊंचे बॉक्स पर कदम रखकर किया जाने वाला व्यायाम जो एक पैर की ताकत और कूदने की शक्ति बनाता है।"
    },
    "startingPosition": {
      "en": "Stand facing knee-height box, hold dumbbells, place lead foot flat on box center.",
      "hi": "घुटने की ऊंचाई वाले बॉक्स के सामने खड़े हों, डम्बल पकड़ें, पहला पैर बॉक्स पर रखें।"
    },
    "steps": [
      {
        "en": "Drive through lead heel to elevate body onto the box.",
        "hi": "शरीर को बॉक्स पर उठाने के लिए पहले पैर की एड़ी से धकेलें।"
      },
      {
        "en": "Stand tall on top of the box.",
        "hi": "बॉक्स के शीर्ष पर सीधे खड़े हों।"
      },
      {
        "en": "Lower down slowly under eccentric control.",
        "hi": "नियंत्रित गति के तहत धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale stepping up; inhale stepping down.",
      "hi": "ऊपर चढ़ते समय सांस छोड़ें; नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bouncing off the floor with the trailing foot.",
        "hi": "पीछे के पैर से फर्श से उछलना।"
      }
    ],
    "tips": [
      {
        "en": "Do not let trailing leg assist; force lead leg to do 100% of the work.",
        "hi": "पीछे के पैर को मदद न करने दें; केवल आगे के पैर से जोर लगाएं।"
      }
    ],
    "alternative": {
      "en": "Bulgarian Split Squat",
      "hi": "बुल्गारियन स्प्लिट स्क्वाट"
    },
    "keywords": [
      "step ups",
      "box step up",
      "quadriceps",
      "athletic legs"
    ]
  },
  {
    "id": "leg-extension",
    "name": {
      "en": "Leg Extension",
      "hi": "लेग एक्सटेंशन (Leg Extension)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris Isolation)"
    ],
    "secondaryMuscles": [
      "Vastus Medialis",
      "Vastus Lateralis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Leg Extension Machine",
    "description": {
      "en": "The premiere open-chain quad isolation exercise, creating an intense burn and targeting the rectus femoris.",
      "hi": "प्रमुख क्वाड आइसोलेशन व्यायाम, जो रेक्टस फेमोरिस को सीधे लक्षित करता है।"
    },
    "startingPosition": {
      "en": "Sit in machine, knees aligned with pivot point, roller pad resting snugly against lower shins.",
      "hi": "मशीन में बैठें, घुटने धुरी से संरेखित, रोलर पैड पिंडलियों पर टिका हुआ।"
    },
    "steps": [
      {
        "en": "Extend knees smoothly to raise weight until legs are straight.",
        "hi": "पैरों के सीधे होने तक वजन उठाने के लिए घुटनों को आसानी से सीधा करें।"
      },
      {
        "en": "Squeeze quads intensely at full lockout for 1-2 seconds.",
        "hi": "1-2 सेकंड के लिए पूर्ण लॉकआउट पर क्वाड्स को तीव्रता से निचोड़ें।"
      },
      {
        "en": "Lower weight with a strict 3-second negative.",
        "hi": "सख्त 3-सेकंड की नकारात्मक गति के साथ वजन कम करें।"
      }
    ],
    "breathing": {
      "en": "Exhale on extension; inhale on lowering.",
      "hi": "विस्तार पर सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Kicking weight up fast and letting plates crash.",
        "hi": "वजन को तेजी से लात मारकर उठाना और प्लेटों को टकराने देना।"
      }
    ],
    "tips": [
      {
        "en": "Only exercise that trains the rectus femoris in its fully shortened state.",
        "hi": "एकमात्र व्यायाम जो रेक्टस फेमोरिस को उसकी पूरी तरह से संकुचित अवस्था में प्रशिक्षित करता है।"
      }
    ],
    "alternative": {
      "en": "Sissy Squat",
      "hi": "सिसी स्क्वाट"
    },
    "keywords": [
      "leg extension",
      "quad isolation",
      "rectus femoris",
      "teardrop quad"
    ]
  },
  {
    "id": "smith-machine-squat",
    "name": {
      "en": "Smith Machine Squat",
      "hi": "स्मिथ मशीन स्क्वाट (Smith Machine Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Smith Machine",
    "description": {
      "en": "Fixed track squatting allows feet to be placed forward to eliminate spinal shear and isolate quads completely.",
      "hi": "फिक्स्ड ट्रैक स्क्वाट जो पैरों को आगे रखने की अनुमति देता है ताकि रीढ़ के तनाव को खत्म करके क्वाड्स को अलग किया जा सके।"
    },
    "startingPosition": {
      "en": "Bar on traps, feet placed 6-12 inches forward of the bar line.",
      "hi": "ट्रैप्स पर बार, पैर बार लाइन से 6-12 इंच आगे।"
    },
    "steps": [
      {
        "en": "Squat down with vertical back supported by the fixed track.",
        "hi": "फिक्स्ड ट्रैक द्वारा समर्थित सीधी पीठ के साथ नीचे बैठें।"
      },
      {
        "en": "Reach parallel depth.",
        "hi": "समानांतर गहराई तक पहुंचें।"
      },
      {
        "en": "Press back to top.",
        "hi": "शीर्ष पर वापस दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding back off the bar.",
        "hi": "पीठ को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Placing feet forward replicates a hack squat setup.",
        "hi": "पैरों को आगे रखना हैक स्क्वाट जैसा सेटअप बनाता है।"
      }
    ],
    "alternative": {
      "en": "Hack Squat",
      "hi": "हैक स्क्वाट"
    },
    "keywords": [
      "smith machine squat",
      "quads",
      "guided squat"
    ]
  },
  {
    "id": "heels-elevated-squat",
    "name": {
      "en": "Heels-Elevated Squat",
      "hi": "हील्स-एलीवेटेड स्क्वाट (Heels-Elevated Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Vastus Medialis Teardrop)"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell or Dumbbell, Squat Wedge or Plates",
    "description": {
      "en": "Elevating heels on a wedge removes ankle mobility restrictions, pushing knees forward to incinerate the teardrop quad.",
      "hi": "एड़ियों को ऊपर उठाने से टखने की गतिशीलता की बाधाएं दूर होती हैं, जिससे घुटने आगे जाते हैं और टियरड्रॉप क्वाड पर भारी जोर पड़ता है।"
    },
    "startingPosition": {
      "en": "Place heels on 1-2 inch wedge or weight plates. Hold barbell or goblet dumbbell.",
      "hi": "1-2 इंच वेज या प्लेट्स पर एड़ियां रखें। बारबेल या डम्बल पकड़ें।"
    },
    "steps": [
      {
        "en": "Squat straight down, allowing knees to travel forward over toes.",
        "hi": "घुटनों को पंजों के ऊपर आगे जाने देते हुए सीधे नीचे बैठें।"
      },
      {
        "en": "Achieve deep Olympic-depth knee bend.",
        "hi": "गहरे घुटने के मोड़ को प्राप्त करें।"
      },
      {
        "en": "Drive back up through balls of feet and heels.",
        "hi": "पैरों और एड़ियों से वापस ऊपर उठें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hinging too far at the hips.",
        "hi": "कूल्हों पर बहुत अधिक झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Unmatched exercise for developing the vastus medialis 'teardrop' muscle above the knee.",
        "hi": "घुटने के ऊपर 'टियरड्रॉप' मांसपेशी विकसित करने के लिए बेजोड़ व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Front Squat",
      "hi": "फ्रंट स्क्वाट"
    },
    "keywords": [
      "heels elevated squat",
      "squat wedge",
      "teardrop quad",
      "vmo"
    ]
  },
  {
    "id": "sissy-squat",
    "name": {
      "en": "Sissy Squat",
      "hi": "सिसी स्क्वाट (Sissy Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Rectus Femoris)"
    ],
    "secondaryMuscles": [
      "Patellar Tendons",
      "Core"
    ],
    "type": "isolation",
    "difficulty": "Advanced",
    "equipment": "Bodyweight or Sissy Squat Bench",
    "description": {
      "en": "Named after King Sisyphus: leaning torso backward while projecting knees forward for extreme quad stretch.",
      "hi": "क्वाड खिंचाव के लिए घुटनों को आगे बढ़ाते हुए धड़ को पीछे झुकाने वाला क्लासिक व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand holding a rack post for balance, or lock shins into a sissy squat apparatus.",
      "hi": "संतुलन के लिए एक खंभा पकड़ें, या सिसी स्क्वाट मशीन में पिंडलियों को लॉक करें।"
    },
    "steps": [
      {
        "en": "Lean torso backward into a straight line with thighs while pushing knees forward and rising onto toes.",
        "hi": "घुटनों को आगे धकेलते हुए और पंजों पर उठते हुए धड़ को पीछे झुकाएं।"
      },
      {
        "en": "Descend into maximum safe knee flexion.",
        "hi": "अधिकतम सुरक्षित घुटने के मोड़ में नीचे जाएं।"
      },
      {
        "en": "Contract quads violently to pull body back to standing.",
        "hi": "शरीर को वापस खड़े होने के लिए क्वाड्स को जोर से सिकोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending at the hips (must maintain straight torso-to-thigh line).",
        "hi": "कूल्हों से झुकना (धड़ और जांघ सीधी होनी चाहिए)।"
      }
    ],
    "tips": [
      {
        "en": "Unbelievable quad isolation without needing heavy weights.",
        "hi": "भारी वजन की आवश्यकता के बिना शानदार क्वाड अलगाव।"
      }
    ],
    "safetyPrecautions": {
      "en": "Progress gradually to allow patellar tendon adaptation.",
      "hi": "घुटने के कण्डरा अनुकूलन के लिए धीरे-धीरे प्रगति करें।"
    },
    "alternative": {
      "en": "Leg Extension",
      "hi": "लेग एक्सटेंशन"
    },
    "keywords": [
      "sissy squat",
      "quad stretch",
      "rectus femoris",
      "old school leg"
    ]
  },
  {
    "id": "split-squat",
    "name": {
      "en": "Split Squat",
      "hi": "स्प्लिट स्क्वाट (Split Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells or Bodyweight",
    "description": {
      "en": "Stationary split stance squat with both feet planted on the floor, building foundational quad stability.",
      "hi": "फर्श पर दोनों पैरों के साथ स्थिर स्प्लिट स्क्वाट जो क्वाड स्थिरता बनाता है।"
    },
    "startingPosition": {
      "en": "Staggered stance with one foot forward and one foot back, holding dumbbells at sides.",
      "hi": "एक पैर आगे और एक पैर पीछे रखकर खड़े हों, किनारों पर डम्बल पकड़े हुए।"
    },
    "steps": [
      {
        "en": "Drop straight down by bending both knees to 90 degrees.",
        "hi": "दोनों घुटनों को 90 डिग्री पर मोड़कर सीधे नीचे जाएं।"
      },
      {
        "en": "Drive back up to top without moving feet.",
        "hi": "पैरों को हिलाए बिना वापस ऊपर धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Front heel peeling off floor.",
        "hi": "सामने की एड़ी का फर्श से उठना।"
      }
    ],
    "tips": [
      {
        "en": "Stationary alternative to lunges with higher balance control.",
        "hi": "संतुलन पर उच्च नियंत्रण के साथ लंजेस का स्थिर विकल्प।"
      }
    ],
    "alternative": {
      "en": "Bulgarian Split Squat",
      "hi": "बुल्गारियन स्प्लिट स्क्वाट"
    },
    "keywords": [
      "split squat",
      "stationary lunge",
      "quads"
    ]
  },
  {
    "id": "belt-squat",
    "name": {
      "en": "Belt Squat",
      "hi": "बेल्ट स्क्वाट (Belt Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Belt Squat Machine or Dip Belt on Elevated Boxes",
    "description": {
      "en": "Loading the hips directly through a weight belt, delivering 100% leg stimulus with zero axial spinal compression.",
      "hi": "वेट बेल्ट के माध्यम से सीधे कूल्हों को लोड करना, रीढ़ पर शून्य दबाव के साथ पैरों को प्रशिक्षित करता है।"
    },
    "startingPosition": {
      "en": "Stand on platform with heavy belt strapped around hips, connected to cable or lever arm.",
      "hi": "कूल्हों पर भारी बेल्ट बांधकर प्लेटफॉर्म पर खड़े हों।"
    },
    "steps": [
      {
        "en": "Squat down into deep hip and knee flexion.",
        "hi": "गहरे हिप और घुटने के मोड़ में नीचे बैठें।"
      },
      {
        "en": "Drive through feet to stand up to lockout.",
        "hi": "सीधे खड़े होने के लिए पैरों से ऊपर धकेलें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding shoulders forward.",
        "hi": "कंधों को आगे झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Beloved by powerlifters to train legs through back injuries.",
        "hi": "पीठ की चोटों के दौरान पैरों को प्रशिक्षित करने के लिए अत्यधिक लोकप्रिय।"
      }
    ],
    "alternative": {
      "en": "Hack Squat or Leg Press",
      "hi": "हैक स्क्वाट या लेग प्रेस"
    },
    "keywords": [
      "belt squat",
      "no spinal load",
      "quads"
    ]
  },
  {
    "id": "single-leg-leg-press",
    "name": {
      "en": "Single-Leg Leg Press",
      "hi": "सिंगल-लेग लेग प्रेस (Single-Leg Leg Press)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "45-Degree Leg Press Machine",
    "description": {
      "en": "Unilateral leg press that completely evens out strength discrepancies between left and right quads.",
      "hi": "एक पैर से लेग प्रेस जो बाएं और दाएं क्वाड्स के बीच ताकत की विसंगतियों को ठीक करता है।"
    },
    "startingPosition": {
      "en": "Position one foot in center of plate, opposite leg resting safely to the side.",
      "hi": "प्लेट के केंद्र में एक पैर रखें, दूसरा पैर सुरक्षित रूप से किनारे पर।"
    },
    "steps": [
      {
        "en": "Lower sled under slow control until knee reaches 90 degrees.",
        "hi": "स्लेड को धीरे-धीरे नीचे लाएं जब तक कि घुटना 90 डिग्री न हो जाए।"
      },
      {
        "en": "Press back up without hyper-locking knee.",
        "hi": "घुटने को तेजी से लॉक किए बिना वापस ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Knee collapsing inward.",
        "hi": "घुटने का अंदर की ओर झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Start with 30-40% of your two-leg working weight.",
        "hi": "अपने दो-पैर वाले वजन के 30-40% से शुरू करें।"
      }
    ],
    "alternative": {
      "en": "Bulgarian Split Squat",
      "hi": "बुल्गारियन स्प्लिट स्क्वाट"
    },
    "keywords": [
      "single leg press",
      "unilateral quads"
    ]
  },
  {
    "id": "wall-sit",
    "name": {
      "en": "Wall Sit",
      "hi": "वॉल सिट (Wall Sit)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris (Isometric Hold)"
    ],
    "secondaryMuscles": [
      "Calves",
      "Core"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Smooth Wall",
    "description": {
      "en": "Isometric quad endurance hold against a wall, building joint resiliency and tendon strength without movement.",
      "hi": "दीवार के सहारे आइसोमेट्रिक क्वाड होल्ड, जो बिना गति के कण्डरा शक्ति का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "Back flat against wall, slide down until thighs are parallel to floor (knees at 90 degrees).",
      "hi": "दीवार के सहारे पीठ सपाट, नीचे खिसकें जब तक कि जांघें फर्श के समानांतर न हों (घुटने 90 डिग्री)।"
    },
    "steps": [
      {
        "en": "Hold position with arms crossed over chest or resting at sides.",
        "hi": "छाती पर हाथ रखकर या किनारों पर रखकर स्थिति बनाए रखें।"
      },
      {
        "en": "Maintain 90-degree angle for time (30-60 seconds).",
        "hi": "समय के लिए (30-60 सेकंड) 90-डिग्री कोण बनाए रखें।"
      }
    ],
    "breathing": {
      "en": "Steady, deep diaphragmatic breathing.",
      "hi": "स्थिर, गहरी डायाफ्रामिक श्वास।"
    },
    "mistakes": [
      {
        "en": "Resting hands on knees to relieve quad tension.",
        "hi": "तनाव कम करने के लिए घुटनों पर हाथ रखना।"
      }
    ],
    "tips": [
      {
        "en": "Brilliant finisher for knee rehab and mental toughness.",
        "hi": "घुटने के पुनर्वास और मानसिक मजबूती के लिए शानदार फिनिशर।"
      }
    ],
    "alternative": {
      "en": "Bodyweight Squat Hold",
      "hi": "बॉडीवेट स्क्वाट होल्ड"
    },
    "keywords": [
      "wall sit",
      "isometric quads",
      "tendon strength"
    ]
  },
  {
    "id": "zercher-squat",
    "name": {
      "en": "Zercher Squat",
      "hi": "ज़र्चर स्क्वाट (Zercher Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back",
      "Biceps",
      "Glutes"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "Holding the barbell in the crook of the elbows, forcing an ultra-deep squat with massive quad and core loading.",
      "hi": "कोहनियों के मोड़ में बारबेल पकड़ना, जो भारी क्वाड और कोर लोडिंग के साथ अल्ट्रा-डीप स्क्वाट को मजबूर करता है।"
    },
    "startingPosition": {
      "en": "Hook barbell in the crooks of elbows, clasp hands together against chest.",
      "hi": "कोहनियों के मोड़ में बारबेल हुक करें, हाथों को छाती पर एक साथ जोड़ें।"
    },
    "steps": [
      {
        "en": "Squat down deeply until elbows touch inside of thighs.",
        "hi": "गहराई से नीचे बैठें जब तक कि कोहनियां जांघों के अंदर न छू लें।"
      },
      {
        "en": "Drive up through heels back to upright standing.",
        "hi": "वापस सीधे खड़े होने के लिए एड़ी से ऊपर उठें।"
      }
    ],
    "breathing": {
      "en": "Inhale at top, brace abs heavily, exhale standing.",
      "hi": "शीर्ष पर सांस लें, एब्स को कसें, खड़े होने पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding upper back under load.",
        "hi": "वजन के नीचे ऊपरी पीठ को गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "Wear elbow sleeves or use a barbell pad to cushion the elbow crooks.",
        "hi": "कोहनियों को सहारा देने के लिए बारबेल पैड का उपयोग करें।"
      }
    ],
    "alternative": {
      "en": "Front Squat",
      "hi": "फ्रंट स्क्वाट"
    },
    "keywords": [
      "zercher squat",
      "ed zercher",
      "core and quads",
      "deep squat"
    ]
  },
  {
    "id": "bodyweight-squat",
    "name": {
      "en": "Bodyweight Squat",
      "hi": "बॉडीवेट स्क्वाट (Bodyweight Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Calves"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Fundamental air squat building leg endurance, functional mobility, and squat motor patterns.",
      "hi": "पैरों की सहनशक्ति, कार्यात्मक गतिशीलता और स्क्वाट पैटर्न का निर्माण करने वाला बुनियादी एयर स्क्वाट।"
    },
    "startingPosition": {
      "en": "Stand shoulder-width apart, arms extended forward for balance.",
      "hi": "कंधे की चौड़ाई पर खड़े हों, संतुलन के लिए बाहें आगे फैली हों।"
    },
    "steps": [
      {
        "en": "Hinge hips back and bend knees down past parallel.",
        "hi": "कूल्हों को पीछे करें और घुटनों को समानांतर से नीचे मोड़ें।"
      },
      {
        "en": "Stand back up smoothly.",
        "hi": "आसानी से वापस सीधे खड़े हों।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rushing repetitions without hitting depth.",
        "hi": "पूरी गहराई तक पहुंचे बिना जल्दबाजी में रेप्स करना।"
      }
    ],
    "tips": [
      {
        "en": "Great warmup drill before loaded barbell squats.",
        "hi": "वेटेड बारबेल स्क्वाट से पहले बेहतरीन वार्मअप।"
      }
    ],
    "alternative": {
      "en": "Goblet Squat",
      "hi": "गोब्लेट स्क्वाट"
    },
    "keywords": [
      "air squat",
      "bodyweight squat",
      "quads"
    ]
  },
  {
    "id": "landmine-squat",
    "name": {
      "en": "Landmine Squat",
      "hi": "लैंडमाइन स्क्वाट (Landmine Squat)"
    },
    "muscle": "Legs",
    "primaryMuscles": [
      "Quadriceps Femoris"
    ],
    "secondaryMuscles": [
      "Core",
      "Glutes"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Landmine Base, Barbell",
    "description": {
      "en": "Holding end of landmine bar at chest creates an arc path that teaches upright torso squatting with minimal spine stress.",
      "hi": "छाती पर लैंडमाइन बार के सिरे को पकड़ना एक चाप पथ बनाता है जो कम रीढ़ के तनाव के साथ सीधा स्क्वाट सिखाता है।"
    },
    "startingPosition": {
      "en": "Hold loaded end of landmine barbell with both hands at collarbone, feet shoulder-width.",
      "hi": "हंसली पर दोनों हाथों से लैंडमाइन बारबेल को पकड़ें।"
    },
    "steps": [
      {
        "en": "Squat down into the bar arc, knees traveling forward.",
        "hi": "बार आर्क में नीचे बैठें, घुटने आगे जाते हुए।"
      },
      {
        "en": "Hit parallel depth.",
        "hi": "समानांतर गहराई तक पहुंचें।"
      },
      {
        "en": "Press back up to standing.",
        "hi": "वापस खड़े होने के लिए ऊपर दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Standing too far back from the bar.",
        "hi": "बार से बहुत दूर पीछे खड़े होना।"
      }
    ],
    "tips": [
      {
        "en": "Very joint-friendly squat alternative.",
        "hi": "जोड़ों के लिए बहुत अनुकूल स्क्वाट विकल्प।"
      }
    ],
    "alternative": {
      "en": "Goblet Squat",
      "hi": "गोब्लेट स्क्वाट"
    },
    "keywords": [
      "landmine squat",
      "quads",
      "joint friendly squat"
    ]
  },
  {
    "id": "romanian-deadlift",
    "name": {
      "en": "Romanian Deadlift",
      "hi": "रोमानियाई डेडलिफ्ट (Romanian Deadlift)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Erector Spinae",
      "Adductor Magnus"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Weight Plates",
    "description": {
      "en": "The premiere hip-hinge exercise for developing explosive hamstring mass, stretch-mediated hypertrophy, and strong glutes.",
      "hi": "विस्फोटक हैमस्ट्रिंग द्रव्यमान, खिंचाव-मध्यस्थता हाइपरट्रॉफी और मजबूत ग्लूट्स विकसित करने के लिए प्रमुख हिप-हिंज व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand tall holding a barbell in front of thighs with overhand grip, feet hip-width apart, knees unlocked with a slight 15-degree bend.",
      "hi": "जांघों के सामने ओवरहैंड पकड़ के साथ बारबेल पकड़कर सीधे खड़े हों, पैर हिप-चौड़ाई पर, घुटने थोड़े 15-डिग्री मुड़े हुए।"
    },
    "steps": [
      {
        "en": "Initiate the movement by pushing your hips directly backward as if trying to touch a wall behind you with your glutes.",
        "hi": "अपने कूल्हों को सीधे पीछे धकेलकर मूवमेंट शुरू करें जैसे कि ग्लूट्स से दीवार को छूने की कोशिश कर रहे हों।"
      },
      {
        "en": "Keep the barbell skimming tight along your thighs and shins with a flat, neutral spine.",
        "hi": "सपाट, तटस्थ रीढ़ के साथ बारबेल को अपनी जांघों और पिंडलियों के करीब बनाए रखें।"
      },
      {
        "en": "Descend until you feel an intense stretch in the hamstrings (typically mid-shin level).",
        "hi": "हैमस्ट्रिंग में गहरा खिंचाव महसूस होने तक (आमतौर पर मध्य-पिंडली स्तर) नीचे जाएं।"
      },
      {
        "en": "Drive your hips forward and squeeze glutes/hamstrings hard to return to standing tall.",
        "hi": "खड़े होने के लिए अपने कूल्हों को आगे बढ़ाएं और ग्लूट्स/हैमस्ट्रिंग को जोर से निचोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale at the top, brace core; hold during hinge down; exhale as hips drive through.",
      "hi": "शीर्ष पर सांस लें और कोर कसें; नीचे झुकते समय रोकें; ऊपर आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending the knees into a squat instead of hinging at the hips.",
        "hi": "कूल्हों पर झुकने के बजाय घुटनों को मोड़कर स्क्वाट करना।"
      },
      {
        "en": "Rounding the lower lumbar spine to reach lower to the floor.",
        "hi": "फर्श के करीब पहुंचने के लिए निचली पीठ को गोल करना।"
      },
      {
        "en": "Allowing the barbell to drift away from the legs.",
        "hi": "बारबेल को पैरों से दूर जाने देना।"
      }
    ],
    "tips": [
      {
        "en": "The range of motion ends when your hips stop moving backward; do not force depth with your spine.",
        "hi": "रेंज ऑफ मोशन तब समाप्त होता है जब आपके कूल्हे पीछे जाना बंद कर देते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always keep back straight; never round spine under load.",
      "hi": "हमेशा पीठ सीधी रखें; भार के नीचे कभी भी रीढ़ को गोल न करें।"
    },
    "alternative": {
      "en": "Dumbbell Romanian Deadlift or Good Morning",
      "hi": "डम्बल रोमानियन डेडलिफ्ट या गुड मॉर्निंग"
    },
    "keywords": [
      "rdl",
      "romanian deadlift",
      "hamstrings",
      "hip hinge",
      "posterior chain"
    ]
  },
  {
    "id": "dumbbell-romanian-deadlift",
    "name": {
      "en": "Dumbbell Romanian Deadlift",
      "hi": "डम्बल रोमानियाई डेडलिफ्ट (Dumbbell Romanian Deadlift)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Forearms"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Independent dumbbells allow hands to track naturally along the sides of legs, reducing lower back shear.",
      "hi": "स्वतंत्र डम्बल हाथों को पैरों के किनारों पर स्वाभाविक रूप से जाने की अनुमति देते हैं, जिससे कमर का तनाव कम होता है।"
    },
    "startingPosition": {
      "en": "Stand holding dumbbells in front of thighs, feet hip-width, knees soft.",
      "hi": "जांघों के सामने डम्बल पकड़कर खड़े हों, पैर हिप-चौड़ाई पर।"
    },
    "steps": [
      {
        "en": "Push hips back, lowering dumbbells along the shins.",
        "hi": "कूल्हों को पीछे धकेलें, पिंडलियों के साथ डम्बल को नीचे लाएं।"
      },
      {
        "en": "Stop at mid-shin when hamstrings are fully stretched.",
        "hi": "हैमस्ट्रिंग पूरी तरह से खिंचने पर मध्य-पिंडली पर रुकें।"
      },
      {
        "en": "Contract hamstrings and drive hips forward to stand.",
        "hi": "हैमस्ट्रिंग को सिकोड़ें और खड़े होने के लिए कूल्हों को आगे बढ़ाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale hinging down; exhale driving up.",
      "hi": "नीचे झुकते समय सांस लें; ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Squatting down with knees.",
        "hi": "घुटनों से नीचे बैठना।"
      }
    ],
    "tips": [
      {
        "en": "Keep dumbbells glued to your legs the entire repetition.",
        "hi": "पूरे रेप में डम्बल को अपने पैरों से सटाकर रखें।"
      }
    ],
    "alternative": {
      "en": "Barbell Romanian Deadlift",
      "hi": "बार्बेल रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "dumbbell rdl",
      "hamstrings",
      "glutes"
    ]
  },
  {
    "id": "stiff-leg-deadlift",
    "name": {
      "en": "Stiff-Leg Deadlift",
      "hi": "स्टिफ-लेग डेडलिफ्ट (Stiff-Leg Deadlift)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings (Proximal Insertion)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Erector Spinae"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Plates",
    "description": {
      "en": "Deadlift performed starting from the floor with elevated hips and nearly straight legs for severe hamstring elongation.",
      "hi": "गहरे हैमस्ट्रिंग खिंचाव के लिए ऊंचे कूल्हों और लगभग सीधे पैरों के साथ फर्श से शुरू होने वाला डेडलिफ्ट।"
    },
    "startingPosition": {
      "en": "Step to bar, keep knees almost straight with high hip position.",
      "hi": "बार के पास आएं, घुटनों को लगभग सीधा रखें और कूल्हों को ऊंचा रखें।"
    },
    "steps": [
      {
        "en": "Pull bar from floor primarily through hip extension.",
        "hi": "मुख्य रूप से हिप एक्सटेंशन के माध्यम से फर्श से बार खींचें।"
      },
      {
        "en": "Lock out hips at top.",
        "hi": "शीर्ष पर कूल्हों को लॉक करें।"
      },
      {
        "en": "Lower bar back down to floor dead stop with high hips.",
        "hi": "ऊंचे कूल्हों के साथ बार को वापस फर्श पर लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale at floor, exhale at top.",
      "hi": "फर्श पर सांस लें, शीर्ष पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding back excessively under heavy weight.",
        "hi": "भारी वजन के तहत पीठ को अत्यधिक गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "Use lighter weight than conventional deadlift; focus on hamstring stretch.",
        "hi": "पारंपरिक डेडलिफ्ट से कम वजन का उपयोग करें; खिंचाव पर ध्यान दें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not lock knees completely straight; keep micro-bend.",
      "hi": "घुटनों को पूरी तरह सीधा न करें; हल्का मोड़ रखें।"
    },
    "alternative": {
      "en": "Romanian Deadlift",
      "hi": "रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "stiff leg deadlift",
      "sldl",
      "hamstring elongation"
    ]
  },
  {
    "id": "seated-leg-curl",
    "name": {
      "en": "Seated Leg Curl",
      "hi": "सीटेड लेग कर्ल (Seated Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings (Semitendinosus, Semimembranosus, Biceps Femoris)"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Seated Leg Curl Machine",
    "description": {
      "en": "Clinical research shows seated leg curls produce superior hypertrophy over lying curls because the flexed hip stretches the hamstrings.",
      "hi": "सीटेड लेग कर्ल लेटे हुए कर्ल की तुलना में बेहतर विकास प्रदान करता है क्योंकि मुड़ा हुआ हिप हैमस्ट्रिंग को अधिक खींचता है।"
    },
    "startingPosition": {
      "en": "Sit in machine, thighs locked firmly under lap pad, lower roller resting against Achilles tendon.",
      "hi": "मशीन में बैठें, जांघें पैड के नीचे सुरक्षित, निचला रोलर अकिलीस कण्डरा पर टिका हो।"
    },
    "steps": [
      {
        "en": "Curl heels smoothly downward and backward under seat.",
        "hi": "एड़ियों को सीट के नीचे आसानी से नीचे और पीछे मोड़ें।"
      },
      {
        "en": "Hold full knee flexion for a 1-second peak squeeze.",
        "hi": "1-सेकंड के पीक निचोड़ के लिए पूर्ण घुटने के मोड़ को बनाए रखें।"
      },
      {
        "en": "Return roller slowly over 3 seconds to a full leg stretch.",
        "hi": "पूरे खिंचाव के लिए 3 सेकंड में धीरे-धीरे वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling; inhale returning.",
      "hi": "कर्ल करते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing lap pad to be loose, letting thighs rise during the curl.",
        "hi": "पैड को ढीला रखना, जिससे कर्ल के दौरान जांघें उठ जाती हैं।"
      }
    ],
    "tips": [
      {
        "en": "Dorsiflex ankles (pull toes toward shins) to isolate hamstrings from calves.",
        "hi": "हैमस्ट्रिंग को अलग करने के लिए पंजों को पिंडलियों की ओर खींचें।"
      }
    ],
    "alternative": {
      "en": "Lying Leg Curl",
      "hi": "लाइंग लेग कर्ल"
    },
    "keywords": [
      "seated leg curl",
      "hamstrings isolation",
      "hypertrophy champion"
    ]
  },
  {
    "id": "lying-leg-curl",
    "name": {
      "en": "Lying Leg Curl",
      "hi": "लाइंग लेग कर्ल (Lying Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings (Biceps Femoris Short & Long Heads)"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Prone Leg Curl Machine",
    "description": {
      "en": "Classic prone hamstring curl emphasizing knee flexion to build the lower sweep of the hamstring muscle.",
      "hi": "क्लासिक प्रोन हैमस्ट्रिंग कर्ल जो हैमस्ट्रिंग के निचले हिस्से के निर्माण पर जोर देता है।"
    },
    "startingPosition": {
      "en": "Lie face down on machine, hips pressed into angled pad, roller positioned behind ankles.",
      "hi": "मशीन पर मुंह नीचे करके लेटें, कूल्हे पैड पर टिके हुए, रोलर टखनों के पीछे।"
    },
    "steps": [
      {
        "en": "Curl heels up toward glutes smoothly.",
        "hi": "एड़ियों को आसानी से ग्लूट्स की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Squeeze hamstrings tightly at peak contraction.",
        "hi": "पीक संकुचन पर हैमस्ट्रिंग को कसकर निचोड़ें।"
      },
      {
        "en": "Lower slowly without letting weight stack touch.",
        "hi": "वजन स्टैक को छुए बिना धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Lifting hips off the pad to assist the curl.",
        "hi": "कर्ल में मदद करने के लिए पैड से कूल्हों को उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep hips glued to the bench pad at all times.",
        "hi": "कूल्हों को हर समय बेंच पैड से चिपकाए रखें।"
      }
    ],
    "alternative": {
      "en": "Seated Leg Curl",
      "hi": "सीटेड लेग कर्ल"
    },
    "keywords": [
      "lying leg curl",
      "prone curl",
      "hamstrings"
    ]
  },
  {
    "id": "standing-single-leg-curl",
    "name": {
      "en": "Standing Single-Leg Curl",
      "hi": "स्टैंडिंग सिंगल-लेग कर्ल (Standing Single-Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Standing Leg Curl Machine or Cable",
    "description": {
      "en": "Unilateral knee flexion to identify and isolate strength discrepancies between legs.",
      "hi": "पैरों के बीच ताकत की विसंगतियों को पहचानने और अलग करने के लिए एक पैर से घुटने मोड़ना।"
    },
    "startingPosition": {
      "en": "Stand in machine with front of thigh against pad, roller behind working ankle.",
      "hi": "पैड पर जांघ के सामने के साथ मशीन में खड़े हों, काम करने वाले टखने के पीछे रोलर।"
    },
    "steps": [
      {
        "en": "Curl heel up toward glute with one leg.",
        "hi": "एक पैर से एड़ी को ग्लूट की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Hold peak contraction 1 second.",
        "hi": "1 सेकंड पीक संकुचन बनाए रखें।"
      },
      {
        "en": "Lower under control.",
        "hi": "नियंत्रण में नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Arching lower back.",
        "hi": "कमर को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Great for athletes correcting sprint imbalances.",
        "hi": "धावकों के लिए असंतुलन को ठीक करने के लिए बेहतरीन।"
      }
    ],
    "alternative": {
      "en": "Lying Leg Curl",
      "hi": "लाइंग लेग कर्ल"
    },
    "keywords": [
      "single leg curl",
      "unilateral hamstrings"
    ]
  },
  {
    "id": "nordic-hamstring-curl",
    "name": {
      "en": "Nordic Hamstring Curl",
      "hi": "नॉर्डिक हैमस्ट्रिंग कर्ल (Nordic Hamstring Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings (Eccentric Overload)"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Calves",
      "Core"
    ],
    "type": "isolation",
    "difficulty": "Advanced",
    "equipment": "Partner holding ankles or Nordic Bench",
    "description": {
      "en": "The gold standard for eccentric hamstring strength and sprint tear prevention, resisting gravity forward.",
      "hi": "एक्सेंट्रिक हैमस्ट्रिंग ताकत और चोट की रोकथाम के लिए सबसे प्रमुख व्यायाम।"
    },
    "startingPosition": {
      "en": "Kneel tall on padded mat with ankles securely anchored down behind you, body straight.",
      "hi": "पैडेड मैट पर घुटने टेकें, टखनों को पीछे सुरक्षित रूप से लॉक करें, शरीर सीधा।"
    },
    "steps": [
      {
        "en": "Slowly lower body forward toward the floor by extending knees, using hamstrings to brake.",
        "hi": "घुटनों को सीधा करते हुए और हैमस्ट्रिंग से ब्रेक लगाते हुए शरीर को धीरे-धीरे फर्श की ओर नीचे लाएं।"
      },
      {
        "en": "Fight the fall as long as possible before catching yourself with hands.",
        "hi": "हाथों से सहारा लेने से पहले जितनी देर हो सके गिरने से रोकें।"
      },
      {
        "en": "Push lightly off floor to return to kneeling.",
        "hi": "घुटने टेकने की स्थिति में वापस आने के लिए फर्श से हल्का धक्का दें।"
      }
    ],
    "breathing": {
      "en": "Hold breath and brace descent; exhale on pushback.",
      "hi": "नीचे जाते समय सांस रोकें और कोर कसें; पीछे आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending at the hips (breaking the straight line).",
        "hi": "कूल्हों से झुकना।"
      }
    ],
    "tips": [
      {
        "en": "Clinically proven to reduce hamstring strain injuries in athletes by over 50%.",
        "hi": "खिलाड़ियों में हैमस्ट्रिंग की चोटों को 50% से अधिक कम करने के लिए चिकित्सकीय रूप से सिद्ध।"
      }
    ],
    "alternative": {
      "en": "Assisted Nordic Curl or Lying Leg Curl",
      "hi": "असिस्टेड नॉर्डिक कर्ल"
    },
    "keywords": [
      "nordic curl",
      "eccentric hamstrings",
      "injury prevention",
      "bulletproof"
    ]
  },
  {
    "id": "glute-ham-raise",
    "name": {
      "en": "Glute-Ham Raise",
      "hi": "ग्लूट-हैम रेज़ (Glute-Ham Raise)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae",
      "Calves"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "GHD (Glute-Ham Developer) Machine",
    "description": {
      "en": "Trains both functions of the hamstrings simultaneously: hip extension and knee flexion on a specialized GHD apparatus.",
      "hi": "हैमस्ट्रिंग के दोनों कार्यों को एक साथ प्रशिक्षित करता है: हिप एक्सटेंशन और घुटने मोड़ना।"
    },
    "startingPosition": {
      "en": "Mount GHD with thighs on half-moon pad, feet secured tightly between foot rollers.",
      "hi": "पैड पर जांघों के साथ GHD पर चढ़ें, पैरों को रोलर्स के बीच कसकर सुरक्षित करें।"
    },
    "steps": [
      {
        "en": "Lower torso forward until body is horizontal.",
        "hi": "धड़ को आगे तब तक नीचे लाएं जब तक शरीर क्षैतिज न हो जाए।"
      },
      {
        "en": "Pull body upright by bending knees and flexing hamstrings/calves hard.",
        "hi": "घुटनों को मोड़कर और हैमस्ट्रिंग को सिकोड़कर शरीर को सीधा ऊपर खींचें।"
      },
      {
        "en": "Finish kneeling upright on the pad.",
        "hi": "पैड पर सीधे घुटने टेकते हुए समाप्त करें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Using momentum instead of hamstring knee flexion.",
        "hi": "हैमस्ट्रिंग फ्लेक्सन के बजाय गति का उपयोग करना।"
      }
    ],
    "tips": [
      {
        "en": "Exceptional for athletic posterior chain development.",
        "hi": "एथलेटिक पोस्टीरियर चेन विकास के लिए असाधारण।"
      }
    ],
    "alternative": {
      "en": "Nordic Hamstring Curl",
      "hi": "नॉर्डिक हैमस्ट्रिंग कर्ल"
    },
    "keywords": [
      "glute ham raise",
      "ghd",
      "posterior chain",
      "hamstrings"
    ]
  },
  {
    "id": "good-morning",
    "name": {
      "en": "Good Morning",
      "hi": "गुड मॉर्निंग (Good Morning)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Erector Spinae"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell, Squat Rack",
    "description": {
      "en": "Barbell resting on traps while hinging hips backward, creating a massive stretch across the entire posterior chain.",
      "hi": "कूल्हों को पीछे झुकाते हुए ट्रैप्स पर बारबेल रखना, जिससे पूरी पोस्टीरियर चेन में गहरा खिंचाव आता है।"
    },
    "startingPosition": {
      "en": "Barbell on upper traps like a squat, stand hip-width, knees unlocked.",
      "hi": "स्क्वाट की तरह ऊपरी ट्रैप्स पर बारबेल, पैर हिप-चौड़ाई पर, घुटने हल्के मुड़े।"
    },
    "steps": [
      {
        "en": "Hinge hips back while bowing forward with a completely flat back.",
        "hi": "पूरी तरह से सपाट पीठ के साथ आगे झुकते हुए कूल्हों को पीछे करें।"
      },
      {
        "en": "Descend until torso is nearly parallel to floor.",
        "hi": "तब तक नीचे जाएं जब तक धड़ फर्श के लगभग समानांतर न हो जाए।"
      },
      {
        "en": "Drive hips forward to stand back up.",
        "hi": "वापस खड़े होने के लिए कूल्हों को आगे बढ़ाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale hinging down; exhale driving forward.",
      "hi": "नीचे झुकते समय सांस लें; आगे आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding the lower back.",
        "hi": "निचली पीठ को गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "Start with light weight to build confidence in the hip hinge pattern.",
        "hi": "हिप हिंज पैटर्न में आत्मविश्वास बनाने के लिए हल्के वजन से शुरू करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Never round lumbar spine under bar.",
      "hi": "बार के नीचे कभी भी कमर को न मोड़ें।"
    },
    "alternative": {
      "en": "Romanian Deadlift",
      "hi": "रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "good morning",
      "hip hinge",
      "hamstrings",
      "erectors"
    ]
  },
  {
    "id": "single-leg-romanian-deadlift",
    "name": {
      "en": "Single-Leg Romanian Deadlift",
      "hi": "सिंगल-लेग रोमानियाई डेडलिफ्ट (Single-Leg Romanian Deadlift)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Core",
      "Calves"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbell or Kettlebell",
    "description": {
      "en": "Balancing on one leg while hinging to stretch the hamstring, building stability and ankle proprioception.",
      "hi": "हैमस्ट्रिंग को खींचने के लिए एक पैर पर संतुलन बनाकर झुकना, स्थिरता का निर्माण करता है।"
    },
    "startingPosition": {
      "en": "Stand on one leg holding dumbbell in opposite hand.",
      "hi": "विपरीत हाथ में डम्बल पकड़कर एक पैर पर खड़े हों।"
    },
    "steps": [
      {
        "en": "Hinge forward on standing hip while extending free leg straight back as a counterbalance.",
        "hi": "संतुलन के लिए मुक्त पैर को सीधा पीछे फैलाते हुए खड़े हिप पर आगे झुकें।"
      },
      {
        "en": "Descend until torso and back leg form a horizontal line.",
        "hi": "तब तक नीचे जाएं जब तक धड़ और पिछला पैर एक क्षैतिज रेखा न बना लें।"
      },
      {
        "en": "Squeeze hamstring to return to standing.",
        "hi": "खड़े होने के लिए हैमस्ट्रिंग को निचोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rotating pelvis open to the side.",
        "hi": "पेल्विस को किनारे की ओर खोलना।"
      }
    ],
    "tips": [
      {
        "en": "Keep hips square to the floor.",
        "hi": "कूल्हों को फर्श के समानांतर रखें।"
      }
    ],
    "alternative": {
      "en": "Romanian Deadlift",
      "hi": "रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "single leg rdl",
      "balance",
      "hamstrings",
      "unilateral"
    ]
  },
  {
    "id": "cable-pull-through",
    "name": {
      "en": "Cable Pull-Through",
      "hi": "केबल पुल-थ्रू (Cable Pull-Through)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Erector Spinae"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Low Cable Pulley, Rope Attachment",
    "description": {
      "en": "Facing away from a low cable, pulling rope between legs to grooving the hip hinge under horizontal tension.",
      "hi": "लो केबल से दूर मुंह करके पैरों के बीच से रस्सी खींचना, क्षैतिज तनाव में हिप हिंज सिखाता है।"
    },
    "startingPosition": {
      "en": "Straddle low cable facing away, hold rope between legs with arms extended.",
      "hi": "लो केबल से दूर मुंह करके खड़े हों, फैली हुई बाहों के साथ पैरों के बीच रस्सी पकड़ें।"
    },
    "steps": [
      {
        "en": "Hinge hips back letting cable pull hands between legs.",
        "hi": "कूल्हों को पीछे करें जिससे केबल हाथों को पैरों के बीच खींच ले।"
      },
      {
        "en": "Feel deep stretch in hamstrings.",
        "hi": "हैमस्ट्रिंग में गहरा खिंचाव महसूस करें।"
      },
      {
        "en": "Drive hips forward forcefully and lock out glutes.",
        "hi": "कूल्हों को बलपूर्वक आगे बढ़ाएं और ग्लूट्स को लॉक करें।"
      }
    ],
    "breathing": {
      "en": "Inhale hinging back; exhale snapping hips forward.",
      "hi": "पीछे झुकते समय सांस लें; आगे आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Squatting with knees instead of hinging.",
        "hi": "कूल्हों से झुकने के बजाय घुटनों से बैठना।"
      }
    ],
    "tips": [
      {
        "en": "Terrific exercise for mastering hip-hinge mechanics safely.",
        "hi": "सुरक्षित रूप से हिप-हिंज यांत्रिकी में महारत हासिल करने के लिए शानदार व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Kettlebell Swing",
      "hi": "केटलबेल स्विंग"
    },
    "keywords": [
      "cable pull through",
      "hip hinge",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "stability-ball-leg-curl",
    "name": {
      "en": "Stability Ball Leg Curl",
      "hi": "स्टेबिलिटी बॉल लेग कर्ल (Stability Ball Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Core"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Swiss / Stability Ball, Mat",
    "description": {
      "en": "Lying supine with heels on a swiss ball, bridging hips up and curling heels into glutes.",
      "hi": "स्विस बॉल पर एड़ियां रखकर पीठ के बल लेटना, हिप्स को ऊपर उठाना और एड़ियों को ग्लूट्स में कर्ल करना।"
    },
    "startingPosition": {
      "en": "Lie on back, heels on top of swiss ball, bridge hips up off floor in straight plank.",
      "hi": "पीठ के बल लेटें, स्विस बॉल के ऊपर एड़ियां, हिप्स को फर्श से ऊपर उठाकर सीधा प्लैंक बनाएं।"
    },
    "steps": [
      {
        "en": "Curl ball inward toward your glutes by bending knees while keeping hips elevated.",
        "hi": "कूल्हों को ऊपर रखते हुए घुटनों को मोड़कर गेंद को अपने ग्लूट्स की ओर अंदर कर्ल करें।"
      },
      {
        "en": "Squeeze hamstrings at peak ball roll.",
        "hi": "गेंद के अंदर आने पर हैमस्ट्रिंग को निचोड़ें।"
      },
      {
        "en": "Extend legs back out without letting hips touch floor.",
        "hi": "कूल्हों को फर्श से छुए बिना पैरों को वापस बाहर फैलाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling; inhale extending.",
      "hi": "कर्ल करते समय सांस छोड़ें; फैलाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping hips toward floor during the curl.",
        "hi": "कर्ल के दौरान कूल्हों को फर्श की ओर गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Combines hip extension and knee flexion simultaneously.",
        "hi": "हिप एक्सटेंशन और घुटने के मोड़ को एक साथ जोड़ता है।"
      }
    ],
    "alternative": {
      "en": "Slider Leg Curl",
      "hi": "स्लाइडर लेग कर्ल"
    },
    "keywords": [
      "stability ball curl",
      "swiss ball",
      "hamstrings bridge"
    ]
  },
  {
    "id": "slider-leg-curl",
    "name": {
      "en": "Slider Leg Curl",
      "hi": "स्लाइडर लेग कर्ल (Slider Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Furniture Sliders or Towel on Smooth Floor",
    "description": {
      "en": "Heels on sliders on smooth floor, sliding out and curling back into glutes while maintaining glute bridge.",
      "hi": "फर्श पर स्लाइडर्स पर एड़ियां रखकर बाहर खिसकाना और ग्लूट्स में वापस कर्ल करना।"
    },
    "startingPosition": {
      "en": "Supine bridge position with heels on sliders.",
      "hi": "स्लाइडर्स पर एड़ियों के साथ ब्रिज स्थिति।"
    },
    "steps": [
      {
        "en": "Slide heels outward to nearly straight legs.",
        "hi": "एड़ियों को लगभग सीधे पैरों तक बाहर खिसकाएं।"
      },
      {
        "en": "Pull heels back in under tension.",
        "hi": "तनाव में एड़ियों को वापस अंदर खींचें।"
      }
    ],
    "breathing": {
      "en": "Inhale extending, exhale curling.",
      "hi": "फैलाते समय सांस लें, कर्ल करते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Resting butt on ground.",
        "hi": "जमीन पर कूल्हों को आराम देना।"
      }
    ],
    "tips": [
      {
        "en": "Low-cost high-stimulus home gym exercise.",
        "hi": "होम जिम के लिए कम लागत वाला उच्च उत्तेजना वाला व्यायाम।"
      }
    ],
    "alternative": {
      "en": "Stability Ball Leg Curl",
      "hi": "स्टेबिलिटी बॉल लेग कर्ल"
    },
    "keywords": [
      "slider curl",
      "home hamstrings",
      "leg curl"
    ]
  },
  {
    "id": "resistance-band-leg-curl",
    "name": {
      "en": "Resistance Band Leg Curl",
      "hi": "रेसिस्टेंस बैंड लेग कर्ल (Resistance Band Leg Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Resistance Band, Ankle Strap or Anchor",
    "description": {
      "en": "Anchored band curl providing increasing tension as the heel approaches the glute.",
      "hi": "एंकर किया गया बैंड कर्ल जो एड़ी के ग्लूट के पास पहुंचने पर बढ़ता हुआ तनाव प्रदान करता है।"
    },
    "startingPosition": {
      "en": "Lie prone with band looped around ankle and anchored behind you.",
      "hi": "टखने के चारों ओर बंधे बैंड के साथ लेटें।"
    },
    "steps": [
      {
        "en": "Curl heel toward glute against band resistance.",
        "hi": "बैंड प्रतिरोध के खिलाफ एड़ी को ग्लूट की ओर कर्ल करें।"
      },
      {
        "en": "Hold peak squeeze 1 second.",
        "hi": "1 सेकंड पीक निचोड़ बनाए रखें।"
      },
      {
        "en": "Lower slowly.",
        "hi": "धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up, inhale down.",
      "hi": "ऊपर सांस छोड़ें, नीचे सांस लें।"
    },
    "mistakes": [
      {
        "en": "Lifting hips off floor.",
        "hi": "फर्श से कूल्हों को उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Great for home or travel hamstring training.",
        "hi": "घर या यात्रा के दौरान प्रशिक्षण के लिए बढ़िया।"
      }
    ],
    "alternative": {
      "en": "Lying Leg Curl",
      "hi": "लाइंग लेग कर्ल"
    },
    "keywords": [
      "band leg curl",
      "home hamstrings",
      "resistance band"
    ]
  },
  {
    "id": "kettlebell-deadlift",
    "name": {
      "en": "Kettlebell Deadlift",
      "hi": "केटलबेल डेडलिफ्ट (Kettlebell Deadlift)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Core",
      "Erector Spinae"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Kettlebell",
    "description": {
      "en": "Centered kettlebell deadlift between feet, perfect for learning clean hip-hinge mechanics.",
      "hi": "पैरों के बीच केटलबेल डेडलिफ्ट, सही हिप-हिंज सीखने के लिए बिल्कुल सही।"
    },
    "startingPosition": {
      "en": "Stand over kettlebell with feet shoulder-width, handle in line with ankle bones.",
      "hi": "पैरों के बीच केटलबेल के ऊपर खड़े हों, हैंडल टखने की रेखा में।"
    },
    "steps": [
      {
        "en": "Hinge at hips, grasp handle with both hands, back flat.",
        "hi": "कूल्हों पर झुकें, दोनों हाथों से हैंडल पकड़ें, पीठ सपाट।"
      },
      {
        "en": "Drive through heels and extend hips to stand tall.",
        "hi": "सीधे खड़े होने के लिए एड़ी से धकेलें और कूल्हों को सीधा करें।"
      },
      {
        "en": "Hinge hips back and set kettlebell dead stop on floor.",
        "hi": "कूल्हों को पीछे करें और केटलबेल को फर्श पर रखें।"
      }
    ],
    "breathing": {
      "en": "Inhale at bottom, exhale standing.",
      "hi": "नीचे सांस लें, खड़े होते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Squatting down instead of hinging.",
        "hi": "झुकने के बजाय नीचे बैठना।"
      }
    ],
    "tips": [
      {
        "en": "Ideal entry point for beginner deadlifters.",
        "hi": "शुरुआती डेडलिफ्टर्स के लिए आदर्श प्रवेश बिंदु।"
      }
    ],
    "alternative": {
      "en": "Romanian Deadlift",
      "hi": "रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "kettlebell deadlift",
      "kb hinge",
      "hamstrings"
    ]
  },
  {
    "id": "single-leg-hip-hinge",
    "name": {
      "en": "Single-Leg Hip Hinge",
      "hi": "सिंगल-लेग हिप हिंज (Single-Leg Hip Hinge)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Core"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Bodyweight hip hinge balancing on one leg to isolate hamstring loading without equipment.",
      "hi": "उपकरण के बिना हैमस्ट्रिंग लोडिंग को अलग करने के लिए एक पैर पर संतुलन बनाने वाला व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand on one leg, arms at sides.",
      "hi": "एक पैर पर खड़े हों, बाहें किनारों पर।"
    },
    "steps": [
      {
        "en": "Hinge forward extending rear leg straight behind.",
        "hi": "पिछले पैर को सीधे पीछे फैलाते हुए आगे झुकें।"
      },
      {
        "en": "Feel hamstring tension on standing leg.",
        "hi": "खड़े पैर पर हैमस्ट्रिंग तनाव महसूस करें।"
      },
      {
        "en": "Return to standing upright.",
        "hi": "सीधे खड़े होने की स्थिति में लौटें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Opening hips sideways.",
        "hi": "कूल्हों को किनारे खोलना।"
      }
    ],
    "tips": [
      {
        "en": "Great warmup drill for athletic sprinting.",
        "hi": "एथलेटिक दौड़ के लिए बेहतरीन वार्मअप ड्रिल।"
      }
    ],
    "alternative": {
      "en": "Single-Leg Romanian Deadlift",
      "hi": "सिंगल-लेग रोमानियन डेडलिफ्ट"
    },
    "keywords": [
      "single leg hinge",
      "bodyweight hamstrings"
    ]
  },
  {
    "id": "machine-hamstring-curl",
    "name": {
      "en": "Machine Hamstring Curl",
      "hi": "मशीन हैमस्ट्रिंग कर्ल (Machine Hamstring Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Hamstring Machine",
    "description": {
      "en": "Machine-guided knee flexion ensuring smooth resistance profile through the full range of motion.",
      "hi": "मशीन-निर्देशित घुटने मोड़ना जो गति की पूरी श्रृंखला में सहज प्रतिरोध सुनिश्चित करता है।"
    },
    "startingPosition": {
      "en": "Position legs in machine according to equipment instructions.",
      "hi": "उपकरण के निर्देशों के अनुसार मशीन में पैर रखें।"
    },
    "steps": [
      {
        "en": "Flex knees pulling roller through full range.",
        "hi": "पूरी रेंज में रोलर को खींचते हुए घुटनों को मोड़ें।"
      },
      {
        "en": "Hold 1 second squeeze.",
        "hi": "1 सेकंड निचोड़ें।"
      },
      {
        "en": "Control release back.",
        "hi": "नियंत्रित वापसी।"
      }
    ],
    "breathing": {
      "en": "Exhale curling, inhale returning.",
      "hi": "कर्ल करते समय सांस छोड़ें, लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Jerking the stack.",
        "hi": "वजन को झटका देना।"
      }
    ],
    "tips": [
      {
        "en": "Focus entirely on the hamstring muscle contraction.",
        "hi": "पूरी तरह से हैमस्ट्रिंग मांसपेशी के संकुचन पर ध्यान दें।"
      }
    ],
    "alternative": {
      "en": "Seated Leg Curl",
      "hi": "सीटेड लेग कर्ल"
    },
    "keywords": [
      "machine hamstring curl",
      "leg curl"
    ]
  },
  {
    "id": "assisted-nordic-curl",
    "name": {
      "en": "Assisted Nordic Curl",
      "hi": "असिस्टेड नॉर्डिक कर्ल (Assisted Nordic Curl)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Resistance Band, Ankle Anchor",
    "description": {
      "en": "Using a resistance band looped around chest to take off bodyweight load, allowing full range Nordic reps.",
      "hi": "शरीर का भार कम करने के लिए छाती पर रेसिस्टेंस बैंड का उपयोग करना, जिससे पूर्ण नॉर्डिक रेप्स संभव होते हैं।"
    },
    "startingPosition": {
      "en": "Kneel with ankles strapped down, holding band anchored behind or above you.",
      "hi": "टखनों को बांधकर घुटने टेकें, पीछे या ऊपर बंधे बैंड को पकड़ें।"
    },
    "steps": [
      {
        "en": "Lower forward under band assistance.",
        "hi": "बैंड की सहायता से आगे नीचे जाएं।"
      },
      {
        "en": "Use hamstrings to pull back up to kneeling.",
        "hi": "वापस घुटने टेकने की स्थिति में आने के लिए हैमस्ट्रिंग का उपयोग करें।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending at hips.",
        "hi": "कूल्हों से झुकना।"
      }
    ],
    "tips": [
      {
        "en": "The best progression method to achieve an unassisted Nordic curl.",
        "hi": "पूर्ण नॉर्डिक कर्ल प्राप्त करने का सबसे अच्छा प्रगति तरीका।"
      }
    ],
    "alternative": {
      "en": "Nordic Hamstring Curl",
      "hi": "नॉर्डिक हैमस्ट्रिंग कर्ल"
    },
    "keywords": [
      "assisted nordic",
      "band nordic",
      "hamstrings progression"
    ]
  },
  {
    "id": "glute-ham-raise-machine",
    "name": {
      "en": "Glute-Ham Raise Machine",
      "hi": "ग्लूट-हैम रेज़ मशीन (Glute-Ham Raise Machine)"
    },
    "muscle": "Hamstrings",
    "primaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Spinal Erectors"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "GHD Machine",
    "description": {
      "en": "Dedicated commercial glute-ham developer station allowing full hip and knee posterior chain flexion.",
      "hi": "समर्पित ग्लूट-हैम डेवलपर स्टेशन जो पूर्ण हिप और घुटने की पोस्टीरियर चेन फ्लेक्सन की अनुमति देता है।"
    },
    "startingPosition": {
      "en": "Adjust foot plate so knees rest slightly behind pad apex.",
      "hi": "फुट प्लेट को समायोजित करें ताकि घुटने पैड के ठीक पीछे रहें।"
    },
    "steps": [
      {
        "en": "Lower torso down over pad.",
        "hi": "पैड पर धड़ को नीचे लाएं।"
      },
      {
        "en": "Contract hamstrings and drive calves into rollers to pull body up.",
        "hi": "हैमस्ट्रिंग को सिकोड़ें और शरीर को ऊपर खींचने के लिए बछड़ों को रोलर्स में दबाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hyperextending spine at top.",
        "hi": "शीर्ष पर रीढ़ को अत्यधिक मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Elite posterior chain builder.",
        "hi": "अभिजात वर्ग का पोस्टीरियर चेन बिल्डर।"
      }
    ],
    "alternative": {
      "en": "Nordic Hamstring Curl",
      "hi": "नॉर्डिक हैमस्ट्रिंग कर्ल"
    },
    "keywords": [
      "ghd machine",
      "glute ham developer",
      "posterior power"
    ]
  },
  {
    "id": "sumo-deadlift",
    "name": {
      "en": "Sumo Deadlift",
      "hi": "सुमो डेडलिफ्ट (Sumo Deadlift)"
    },
    "muscle": "Hamstrings",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Barbell, Plates",
    "description": {
      "en": "Wide stance deadlift with hands inside knees, placing massive tension on inner hamstrings, adductors, and glutes.",
      "hi": "घुटनों के अंदर हाथों के साथ चौड़े पैरों वाला डेडलिफ्ट, जो आंतरिक हैमस्ट्रिंग और ग्लूट्स पर भारी तनाव डालता है।"
    },
    "startingPosition": {
      "en": "Take wide stance, shins touching bar, toes flared 45 degrees, grip inside knees.",
      "hi": "चौड़े पैर रखें, पिंडलियां बार को छूती हों, पंजे 45 डिग्री बाहर, घुटनों के अंदर पकड़।"
    },
    "steps": [
      {
        "en": "Wedge hips close to bar, chest tall.",
        "hi": "कूल्हों को बार के करीब लाएं, छाती ऊंची।"
      },
      {
        "en": "Push floor away spreading knees outward.",
        "hi": "घुटनों को बाहर फैलाते हुए फर्श को नीचे धकेलें।"
      },
      {
        "en": "Lock out hips and knees simultaneously.",
        "hi": "कूल्हों और घुटनों को एक साथ लॉक करें।"
      }
    ],
    "breathing": {
      "en": "Inhale brace at floor, exhale at lockout.",
      "hi": "फर्श पर सांस लें, लॉकआउट पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hips rising before the chest.",
        "hi": "छाती से पहले कूल्हों का उठना।"
      }
    ],
    "tips": [
      {
        "en": "Shorter range of motion than conventional deadlift.",
        "hi": "पारंपरिक डेडलिफ्ट की तुलना में छोटी रेंज ऑफ मोशन।"
      }
    ],
    "alternative": {
      "en": "Conventional Deadlift",
      "hi": "कन्वेंशनल डेडलिफ्ट"
    },
    "keywords": [
      "sumo deadlift",
      "adductors",
      "hamstrings",
      "wide stance"
    ]
  },
  {
    "id": "trap-bar-deadlift",
    "name": {
      "en": "Trap Bar Deadlift",
      "hi": "ट्रैप बार डेडलिफ्ट (Trap Bar Deadlift)"
    },
    "muscle": "Hamstrings",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Hex / Trap Bar, Weight Plates",
    "description": {
      "en": "Deadlift inside a hexagonal bar placing weight in line with center of gravity, safe for spine and massive for legs.",
      "hi": "हेक्सागोनल बार के अंदर डेडलिफ्ट जो वजन को गुरुत्वाकर्षण के केंद्र में रखता है, रीढ़ के लिए सुरक्षित।"
    },
    "startingPosition": {
      "en": "Stand inside hex bar, feet hip-width, grip neutral side handles.",
      "hi": "हेक्स बार के अंदर खड़े हों, पैर हिप-चौड़ाई पर, न्यूट्रल साइड हैंडल पकड़ें।"
    },
    "steps": [
      {
        "en": "Drop hips, brace core, chest up.",
        "hi": "कूल्हों को नीचे करें, कोर कसें, छाती ऊपर।"
      },
      {
        "en": "Drive through feet to stand tall.",
        "hi": "सीधे खड़े होने के लिए पैरों से ऊपर धकेलें।"
      },
      {
        "en": "Lower bar smoothly back to floor.",
        "hi": "बार को आसानी से वापस फर्श पर लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding back off the floor.",
        "hi": "फर्श से उठाते समय पीठ को गोल करना।"
      }
    ],
    "tips": [
      {
        "en": "High handles are ideal for lifters with limited mobility.",
        "hi": "ऊंचे हैंडल सीमित गतिशीलता वाले लोगों के लिए आदर्श हैं।"
      }
    ],
    "alternative": {
      "en": "Conventional Deadlift",
      "hi": "कन्वेंशनल डेडलिफ्ट"
    },
    "keywords": [
      "trap bar deadlift",
      "hex bar",
      "safe deadlift"
    ]
  },
  {
    "id": "standing-calf-raise",
    "name": {
      "en": "Standing Machine Calf Raise",
      "hi": "स्टैंडिंग मशीन काफ रेज (Standing Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius (Medial & Lateral Heads)"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Plantaris"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Machine",
    "description": {
      "en": "The king of calf builders that emphasizes the gastrocnemius using a straight-knee position under direct vertical load.",
      "hi": "काफ निर्माण के लिए मुख्य व्यायाम जो सीधे घुटने की स्थिति में गैस्ट्रोकनेमियस मांसपेशियों को लक्षित करता है।"
    },
    "startingPosition": {
      "en": "Position shoulders under padded shoulder pads with balls of feet firmly on the block edge, heels hanging free.",
      "hi": "पैरों के अगले हिस्से को ब्लॉक पर रखते हुए कंधों को पैड के नीचे रखें, एड़ियां नीचे लटकी रहें।"
    },
    "steps": [
      {
        "en": "Lower heels down into a deep, full calf stretch for a 2-second pause without bouncing.",
        "hi": "बिना उछले 2 सेकंड के ठहराव के लिए एड़ियों को नीचे एक गहरे खिंचाव में लाएं।"
      },
      {
        "en": "Explosively drive through the balls of both big toes to elevate heels as high as possible.",
        "hi": "एड़ियों को जितना संभव हो उतना ऊंचा उठाने के लिए दोनों बड़े पैर की उंगलियों से जोर लगाएं।"
      },
      {
        "en": "Contract hard at peak plantarflexion for 1-2 seconds.",
        "hi": "शीर्ष पर 1-2 सेकंड के लिए मजबूत संकुचन बनाए रखें।"
      },
      {
        "en": "Lower under control back to the deep stretched starting point.",
        "hi": "नियंत्रित तरीके से वापस गहरे खिंचाव वाली स्थिति में आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale slowly while descending into the stretch; exhale forcefully driving up to peak contraction.",
      "hi": "खिंचाव में नीचे जाते समय सांस लें; ऊपर जोर लगाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bouncing off the Achilles tendon at the bottom without achieving a full stretch pause.",
        "hi": "पूरे खिंचाव के बिना नीचे उछलना।"
      },
      {
        "en": "Bending the knees during the movement, shifting load away from the gastrocnemius.",
        "hi": "घुटनों को मोड़ना जिससे गैस्ट्रोकनेमियस से लोड हट जाता है।"
      }
    ],
    "tips": [
      {
        "en": "Press through your big toes rather than rolling your weight to the outer edge of your feet.",
        "hi": "पैरों के बाहरी किनारे के बजाय अंगूठे से वजन ऊपर धकेलें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Never bounce or jerk the weight at the bottom of the stretch.",
      "hi": "खिंचाव के निचले बिंदु पर कभी भी झटके न दें।"
    },
    "alternative": {
      "en": "Smith Machine Calf Raise or Leg Press Calf Press",
      "hi": "स्मिथ मशीन काफ रेज या लेग प्रेस काफ प्रेस"
    },
    "keywords": [
      "standing calf raise",
      "calves",
      "gastrocnemius",
      "machine",
      "lower leg"
    ]
  },
  {
    "id": "seated-calf-raise",
    "name": {
      "en": "Seated Calf Raise",
      "hi": "सीटेड काफ रेज (Seated Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Plantaris"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Machine",
    "description": {
      "en": "The premier soleus muscle developer. Bending the knees to 90 degrees slackens the gastrocnemius, isolating the deep soleus beneath.",
      "hi": "सोलियस मांसपेशी के विकास के लिए सबसे बेहतरीन व्यायाम। घुटनों को 90 डिग्री मोड़ने से गहरी सोलियस मांसपेशी अलग से सक्रिय होती है।"
    },
    "startingPosition": {
      "en": "Sit on the machine with thighs snugly under pads and balls of feet resting on the lower platform, heels off the edge.",
      "hi": "जांघों को पैड के नीचे रखते हुए मशीन पर बैठें और पंजों को प्लेटफॉर्म पर रखें, एड़ियां बाहर रहें।"
    },
    "steps": [
      {
        "en": "Disengage safety catch and lower heels as far as comfortably possible into full dorsiflexion.",
        "hi": "सुरक्षा कैच हटाएं और एड़ियों को आरामदायक गहरी स्थिति तक नीचे ले जाएं।"
      },
      {
        "en": "Hold the bottom stretched position for 2 full seconds to eliminate elastic bounce.",
        "hi": "इलास्टिक बाउंस को खत्म करने के लिए नीचे 2 सेकंड रुकें।"
      },
      {
        "en": "Press toes into the platform to raise heels as high as possible.",
        "hi": "एड़ियों को यथासंभव ऊंचा उठाने के लिए पंजों से दबाएं।"
      },
      {
        "en": "Squeeze the soleus muscle hard at the peak for a 1-second pause.",
        "hi": "शीर्ष पर 1 सेकंड के लिए सोलियस को जोर से सिकोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale while lowering heels; exhale smoothly while lifting heels.",
      "hi": "एड़ियां नीचे लाते समय सांस लें; एड़ियां उठाते समय आसानी से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rushing repetitions using Achilles bounce rather than controlled muscular contractions.",
        "hi": "नियंत्रित संकुचन के बजाय उछल-कूद करके तेजी से रैप्स करना।"
      }
    ],
    "tips": [
      {
        "en": "Soleus has a very high slow-twitch percentage; higher rep sets (15-25 reps) produce great hypertrophy.",
        "hi": "सोलियस में स्लो-ट्विच फाइबर अधिक होते हैं; 15-25 रैप्स शानदार परिणाम देते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure the thigh pads are locked tight before lifting.",
      "hi": "वजन उठाने से पहले सुनिश्चित करें कि जांघ पैड अच्छी तरह कसे हों।"
    },
    "alternative": {
      "en": "Seated Dumbbell Calf Raise",
      "hi": "सीटेड डंबल काफ रेज"
    },
    "keywords": [
      "seated calf raise",
      "soleus",
      "calves",
      "machine",
      "lower leg"
    ]
  },
  {
    "id": "leg-press-calf-press",
    "name": {
      "en": "Leg Press Calf Press",
      "hi": "लेग प्रेस काफ प्रेस (Leg Press Calf Press)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Machine",
    "description": {
      "en": "A safe and effective way to load the gastrocnemius with high intensity without spinal compression.",
      "hi": "रीढ़ पर बिना दबाव डाले गैस्ट्रोकनेमियस को भारी वजन से ट्रेन करने का सुरक्षित तरीका।"
    },
    "startingPosition": {
      "en": "Sit in the 45-degree leg press with balls of feet along the bottom rim of the footplate, heels hanging freely in space.",
      "hi": "45-डिग्री लेग प्रेस में बैठें, पंजों को फुटप्लेट के निचले किनारे पर रखें, एड़ियां बाहर लटकी रहें।"
    },
    "steps": [
      {
        "en": "Unlock the sled safely while maintaining almost straight knees (soft lockout, not hyperextended).",
        "hi": "घुटनों को हल्का सीधा रखते हुए स्लेज को सुरक्षित रूप से अनलॉक करें।"
      },
      {
        "en": "Allow toes to flex backwards toward shins for a deep calf stretch.",
        "hi": "गहरे खिंचाव के लिए पंजों को पिंडलियों की ओर मुड़ने दें।"
      },
      {
        "en": "Press through balls of feet to push the sled forward into full plantarflexion.",
        "hi": "स्लेज को आगे धकेलने के लिए पंजों से दबाएं।"
      },
      {
        "en": "Pause for a solid second at maximum contraction, then return smoothly.",
        "hi": "अधिकतम संकुचन पर एक सेकंड रुकें, फिर धीरे-धीरे लौटें।"
      }
    ],
    "breathing": {
      "en": "Inhale as sled sinks back; exhale as you point toes and press sled forward.",
      "hi": "जब स्लेज नीचे आए सांस लें; जब पंजों से आगे धकेलें सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Placing feet too high or allowing heels to touch the plate, slipping off the edge.",
        "hi": "पैरों को बहुत ऊपर रखना या एड़ियों को फिसलने देना।"
      },
      {
        "en": "Bending knees aggressively to turn the calf raise into a mini leg press.",
        "hi": "घुटनों को मोड़कर इसे मिनी लेग प्रेस बनाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep safety stops set high so if feet slip, the sled catches safely above you.",
        "hi": "सुरक्षा स्टॉप्स को हमेशा सही ऊंचाई पर रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always leave safety levers in reachable position.",
      "hi": "सेफ्टी लीवर को हमेशा पहुंच के भीतर रखें।"
    },
    "alternative": {
      "en": "Standing Calf Raise or Smith Machine Calf Raise",
      "hi": "स्टैंडिंग काफ रेज या स्मिथ मशीन काफ रेज"
    },
    "keywords": [
      "leg press calf press",
      "calves",
      "gastrocnemius",
      "leg press",
      "sled"
    ]
  },
  {
    "id": "single-leg-calf-raise",
    "name": {
      "en": "Single-Leg Dumbbell Calf Raise",
      "hi": "सिंगल-लेग डंबल काफ रेज (Single-Leg Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Tibialis Posterior"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Unilateral calf builder that fixes muscle imbalances, develops ankle stabilizer strength, and doubles the effective load.",
      "hi": "एक-एक पैर से किया जाने वाला काफ व्यायाम जो असंतुलन दूर करता है और टखने की स्थिरता बढ़ाता है।"
    },
    "startingPosition": {
      "en": "Stand on one foot on a calf block or sturdy ledge, holding a dumbbell in the working side's hand while using the other hand for balance.",
      "hi": "ब्लॉक पर एक पैर से खड़े हों, उसी हाथ में डंबल पकड़ें और संतुलन के लिए दूसरे हाथ का सहारा लें।"
    },
    "steps": [
      {
        "en": "Lower working heel slowly into a deep stretch below the step level for 2 seconds.",
        "hi": "काम करने वाली एड़ी को स्टेप से नीचे 2 सेकंड तक गहरे खिंचाव में लाएं।"
      },
      {
        "en": "Press powerfully through the big toe knuckle straight upward to full extension.",
        "hi": "अंगूठे के जोड़ से सीधा ऊपर की ओर पूरा जोर लगाएं।"
      },
      {
        "en": "Lock into a tight peak contraction at the top for 1 full second.",
        "hi": "ऊपर 1 सेकंड के लिए टाइट पीक कॉन्ट्रैक्शन बनाएं।"
      },
      {
        "en": "Lower slowly over 3 seconds and repeat for desired reps before switching legs.",
        "hi": "3 सेकंड में धीरे-धीरे नीचे आएं और दूसरे पैर पर स्विच करने से पहले रैप्स पूरे करें।"
      }
    ],
    "breathing": {
      "en": "Inhale while descending into stretch; exhale forcefully at the top of the raise.",
      "hi": "खिंचाव में नीचे जाते समय सांस लें; ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Using the non-working leg or balance hand to push up and assist the movement.",
        "hi": "संतुलन वाले हाथ या दूसरे पैर से सहारा लेकर धक्का देना।"
      }
    ],
    "tips": [
      {
        "en": "Keep ankle centered without rolling inward (pronation) or outward (supination).",
        "hi": "टखने को अंदर या बाहर झुकाए बिना सीधा रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure the step or calf block is completely stable and cannot slip.",
      "hi": "सुनिश्चित करें कि ब्लॉक या स्टेप फिसले नहीं।"
    },
    "alternative": {
      "en": "Standing Calf Raise or Stair Calf Raise",
      "hi": "स्टैंडिंग काफ रेज या स्टेयर काफ रेज"
    },
    "keywords": [
      "single leg calf raise",
      "unilateral",
      "calves",
      "dumbbell",
      "ankle"
    ]
  },
  {
    "id": "dumbbell-standing-calf-raise",
    "name": {
      "en": "Standing Dumbbell Calf Raise",
      "hi": "स्टैंडिंग डंबल काफ रेज (Dumbbell Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "A versatile free-weight calf exercise done with dumbbells held at sides while standing on an elevated block.",
      "hi": "एक बहुमुखी फ्री-वेट काफ व्यायाम जिसमें दोनों हाथों में डंबल पकड़कर ब्लॉक पर खड़े होकर किया जाता है।"
    },
    "startingPosition": {
      "en": "Hold a pair of dumbbells at sides with a neutral grip, standing on the edge of a calf block with heels suspended.",
      "hi": "दोनों तरफ डंबल पकड़ें और ब्लॉक के किनारे पर खड़े हों ताकि एड़ियां लटकी रहें।"
    },
    "steps": [
      {
        "en": "Lower heels down below the block level until a comfortable calf stretch is felt.",
        "hi": "एड़ियों को ब्लॉक से नीचे तब तक लाएं जब तक खिंचाव महसूस न हो।"
      },
      {
        "en": "Hold the stretch for 1 second to negate the stretch reflex.",
        "hi": "स्ट्रेच रिफ्लेक्स को रोकने के लिए खिंचाव को 1 सेकंड रोकें।"
      },
      {
        "en": "Rise up onto the balls of your feet as high as possible.",
        "hi": "पंजों के बल जितना हो सके उतना ऊंचा उठें।"
      },
      {
        "en": "Hold the top peak squeeze for 1 second, then lower steadily.",
        "hi": "शीर्ष पर 1 सेकंड रुकें, फिर धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale down, exhale up.",
      "hi": "नीचे सांस लें, ऊपर छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Swinging dumbbells with momentum or shrugging shoulders during the lift.",
        "hi": "डंबल को गति से हिलाना या कंधे उचकाना।"
      }
    ],
    "tips": [
      {
        "en": "Use lifting straps if your grip tires before your calves do.",
        "hi": "यदि पकड़ थक जाए तो स्ट्रैप्स का उपयोग करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep core brace tight to maintain balance.",
      "hi": "संतुलन बनाए रखने के लिए कोर टाइट रखें।"
    },
    "alternative": {
      "en": "Barbell Calf Raise or Machine Calf Raise",
      "hi": "बारबेल काफ रेज या मशीन काफ रेज"
    },
    "keywords": [
      "dumbbell calf raise",
      "calves",
      "free weights",
      "standing calf"
    ]
  },
  {
    "id": "smith-machine-calf-raise",
    "name": {
      "en": "Smith Machine Calf Raise",
      "hi": "स्मिथ मशीन काफ रेज (Smith Machine Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Smith Machine",
    "description": {
      "en": "Allows heavy progressive overload on the calves with fixed barbell track stability, maximizing gastrocnemius tension.",
      "hi": "निश्चित ट्रैक स्थिरता के साथ भारी वजन उठाने और काफ पर अधिकतम तनाव डालने में मदद करता है।"
    },
    "startingPosition": {
      "en": "Place a secure calf block under the Smith bar. Unrack bar across upper traps and step balls of feet onto block.",
      "hi": "बार के नीचे ब्लॉक रखें। बार को ऊपरी ट्रैप्स पर रखें और पंजों को ब्लॉक पर जमाएं।"
    },
    "steps": [
      {
        "en": "Lower heels into a full deficit stretch for 2 seconds.",
        "hi": "एड़ियों को 2 सेकंड के लिए गहरे खिंचाव में नीचे ले जाएं।"
      },
      {
        "en": "Push directly through the first two toes to drive bar upwards.",
        "hi": "बार को ऊपर उठाने के लिए पहले दो पंजों से सीधा जोर लगाएं।"
      },
      {
        "en": "Squeeze calves at maximum elevation for 2 seconds.",
        "hi": "अधिकतम ऊंचाई पर 2 सेकंड के लिए काफ को सिकोड़ें।"
      },
      {
        "en": "Descend under strict control to repeat.",
        "hi": "सख्त नियंत्रण के साथ नीचे आएं और दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Inhale deep as heels descend; exhale sharply as you press up.",
      "hi": "नीचे जाते समय गहरी सांस लें; ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending knees and using quad thrust to move the bar.",
        "hi": "घुटने मोड़कर क्वाड्स के झटके से बार उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Spin the Smith bar safety hooks clear and keep safety stops engaged at lowest heel point.",
        "hi": "सेफ्टी स्टॉप्स को सही ऊंचाई पर लॉक रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Set safety stoppers just below your bottom stretch level.",
      "hi": "सेफ्टी स्टॉपर्स को स्ट्रेच लेवल से ठीक नीचे सेट करें।"
    },
    "alternative": {
      "en": "Standing Calf Machine",
      "hi": "स्टैंडिंग काफ मशीन"
    },
    "keywords": [
      "smith machine calf raise",
      "calves",
      "heavy calves",
      "gastrocnemius"
    ]
  },
  {
    "id": "donkey-calf-raise",
    "name": {
      "en": "Donkey Calf Raise",
      "hi": "डोंकी काफ रेज (Donkey Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Hamstrings"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Machine",
    "description": {
      "en": "Arnold Schwarzenegger's favorite calf exercise. Bending at the hips puts the hamstrings and gastrocnemius into an intense pre-stretch.",
      "hi": "अर्नोल्ड श्वार्ज़नेगर का पसंदीदा काफ व्यायाम। कूल्हों से झुकने से काफ में गहरा प्री-स्ट्रेच मिलता है।"
    },
    "startingPosition": {
      "en": "Hinge forward 90 degrees at hips with lower back pad across sacrum or resting forearms on a high support block.",
      "hi": "कूल्हों से 90 डिग्री झुकें और पंजों को ब्लॉक पर रखकर एड़ियों को नीचे लटकाएं।"
    },
    "steps": [
      {
        "en": "Let heels sink deep below the footplate, feeling the intense stretch in the upper calves.",
        "hi": "एड़ियों को नीचे गहरा डूबने दें और ऊपरी काफ में खिंचाव महसूस करें।"
      },
      {
        "en": "Pause for 2 seconds in the full stretched position.",
        "hi": "पूरी तरह से खिंची हुई स्थिति में 2 सेकंड रुकें।"
      },
      {
        "en": "Extend ankles powerfully to raise your hips and weight upward onto tiptoes.",
        "hi": "पंजों के बल ऊपर उठने के लिए टखनों को पूरी ताकत से सीधा करें।"
      },
      {
        "en": "Contract calves hard at the peak for a full count.",
        "hi": "शीर्ष पर एक गिनती के लिए काफ को मजबूती से सिकोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale during the lowering stretch; exhale while pressing up onto toes.",
      "hi": "नीचे खिंचाव में सांस लें; पंजों पर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding the lower back excessively or bending the knees during reps.",
        "hi": "निचली पीठ को मोड़ना या घुटनों को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "The hip hinge pre-stretches the gastrocnemius across the knee joint for peak muscle activation.",
        "hi": "कूल्हों का झुकाव गैस्ट्रोकनेमियस को बेहतर सक्रिय करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep spine neutral and supported throughout.",
      "hi": "रीढ़ को हमेशा न्यूट्रल और सहारा देकर रखें।"
    },
    "alternative": {
      "en": "Standing Calf Raise or Leg Press Calf Press",
      "hi": "स्टैंडिंग काफ रेज या लेग प्रेस काफ प्रेस"
    },
    "keywords": [
      "donkey calf raise",
      "arnold calves",
      "gastrocnemius",
      "hip hinge"
    ]
  },
  {
    "id": "seated-dumbbell-calf-raise",
    "name": {
      "en": "Seated Dumbbell Calf Raise",
      "hi": "सीटेड डंबल काफ रेज (Seated DB Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "A great home or gym gym alternative to the seated machine calf raise, targeting the soleus with dumbbells on knees.",
      "hi": "सीटेड मशीन का बेहतरीन विकल्प, घुटनों पर डंबल रखकर सोलियस मांसपेशी को लक्षित करता है।"
    },
    "startingPosition": {
      "en": "Sit on a flat bench with balls of feet elevated on a weight plate or block. Rest heavy dumbbells vertically or across knees with a pad.",
      "hi": "फ्लैट बेंच पर बैठें, पंजों को प्लेट पर रखें और घुटनों पर पैड रखकर डंबल रखें।"
    },
    "steps": [
      {
        "en": "Lower heels down slowly until Achilles and calves are fully stretched.",
        "hi": "काफ में पूरा खिंचाव आने तक एड़ियों को धीरे-धीरे नीचे ले जाएं।"
      },
      {
        "en": "Pause for 2 seconds at the bottom.",
        "hi": "निचले बिंदु पर 2 सेकंड रुकें।"
      },
      {
        "en": "Drive through toes to raise dumbbells as high as calves allow.",
        "hi": "डंबल को यथासंभव ऊंचा उठाने के लिए पंजों से दबाएं।"
      },
      {
        "en": "Squeeze the soleus at the top and hold for 1-2 seconds.",
        "hi": "शीर्ष पर सोलियस को 1-2 सेकंड सिकोड़ कर रखें।"
      }
    ],
    "breathing": {
      "en": "Inhale down into the stretch; exhale up into the peak contraction.",
      "hi": "नीचे सांस लें; शीर्ष पर सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Allowing dumbbells to bounce on the thighs without complete range of motion.",
        "hi": "पूरी गति के बिना डंबल को जांघों पर उछालना।"
      }
    ],
    "tips": [
      {
        "en": "Place a folded towel or foam pad over thighs for comfort under heavy dumbbells.",
        "hi": "भारी डंबल के नीचे आराम के लिए तौलिया या पैड रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Balance dumbbells securely with hands on the handles.",
      "hi": "डंबल को हाथों से मजबूती से संतुलित रखें।"
    },
    "alternative": {
      "en": "Seated Calf Raise Machine",
      "hi": "सीटेड काफ रेज मशीन"
    },
    "keywords": [
      "seated dumbbell calf raise",
      "soleus",
      "calves",
      "home workout",
      "dumbbells"
    ]
  },
  {
    "id": "bent-knee-calf-raise",
    "name": {
      "en": "Bent-Knee Calf Raise (Wall / Squat Position)",
      "hi": "बेंट-नी काफ रेज (Bent-Knee Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Quadriceps"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "Isolates the soleus without any equipment by maintaining a 90-degree knee bend in a quarter-squat or wall sit stance.",
      "hi": "बिना उपकरण के 90 डिग्री घुटने मोड़कर क्वार्टर-स्क्वाट या वॉल सिट स्थिति में सोलियस को अलग करता है।"
    },
    "startingPosition": {
      "en": "Squat down into a half-squat against a wall or free-standing with knees bent at roughly 90 degrees.",
      "hi": "दीवार के सहारे या खड़े होकर घुटनों को लगभग 90 डिग्री मोड़कर आधा स्क्वाट करें।"
    },
    "steps": [
      {
        "en": "Maintain the knee flexion strictly while resting on balls of feet.",
        "hi": "पंजों पर रहते हुए घुटने के झुकाव को मजबूती से बनाए रखें।"
      },
      {
        "en": "Lower heels to the floor for a full soleus stretch.",
        "hi": "पूरे खिंचाव के लिए एड़ियों को फर्श पर नीचे लाएं।"
      },
      {
        "en": "Drive up onto the balls of your feet, holding peak heel lift for 2 seconds.",
        "hi": "पंजों के बल ऊपर उठें और 2 सेकंड तक रोकें।"
      },
      {
        "en": "Lower heels under control without changing knee angle.",
        "hi": "घुटने का कोण बदले बिना एड़ियों को धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Breathe continuously and smoothly throughout the set.",
      "hi": "पूरे सेट के दौरान लगातार सामान्य सांस लें।"
    },
    "mistakes": [
      {
        "en": "Straightening knees as you raise heels, turning it into a gastrocnemius exercise.",
        "hi": "एड़ियां उठाते समय घुटने सीधे करना।"
      }
    ],
    "tips": [
      {
        "en": "Focus entirely on the deep burning sensation in the lower portion of the calf.",
        "hi": "काफ के निचले हिस्से में गहरी जलन पर ध्यान केंद्रित करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep back supported against wall if balance is difficult.",
      "hi": "संतुलन कठिन होने पर पीठ को दीवार का सहारा दें।"
    },
    "alternative": {
      "en": "Seated Calf Raise",
      "hi": "सीटेड काफ रेज"
    },
    "keywords": [
      "bent knee calf raise",
      "soleus",
      "bodyweight calves",
      "wall sit calves"
    ]
  },
  {
    "id": "bodyweight-standing-calf-raise",
    "name": {
      "en": "Bodyweight Standing Calf Raise",
      "hi": "बॉडीवेट स्टैंडिंग काफ रेज (Bodyweight Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "A foundational calf movement requiring zero equipment, ideal for high-rep pump sets, warm-ups, or home training.",
      "hi": "शून्य उपकरण वाला बुनियादी व्यायाम, उच्च रैप्स, वार्म-अप या घर पर वर्कआउट के लिए उत्तम।"
    },
    "startingPosition": {
      "en": "Stand tall on flat ground or a step with feet hip-width apart and hands lightly touching a wall for balance.",
      "hi": "पैरों को कूल्हे की चौड़ाई पर रखकर सीधे खड़े हों और संतुलन के लिए दीवार को हल्के से छुएं।"
    },
    "steps": [
      {
        "en": "Rise up onto the balls of both feet as high as you can possibly reach.",
        "hi": "दोनों पैरों के पंजों पर जितना ऊंचा हो सके उतना ऊपर उठें।"
      },
      {
        "en": "Squeeze the calves hard at the peak for 2 full seconds.",
        "hi": "शीर्ष पर 2 सेकंड के लिए काफ को जोर से सिकोड़ें।"
      },
      {
        "en": "Lower down slowly until heels touch the ground lightly.",
        "hi": "एड़ियों के फर्श को हल्के से छूने तक धीरे-धीरे नीचे आएं।"
      },
      {
        "en": "Perform high-rep sets (25-50 reps) to ignite intense muscular endurance.",
        "hi": "सहनशक्ति बढ़ाने के लिए 25-50 रैप्स के सेट करें।"
      }
    ],
    "breathing": {
      "en": "Exhale on elevation; inhale on descent.",
      "hi": "ऊपर उठते समय सांस छोड़ें; नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rushing repetitions with mini bounces instead of full calf contraction.",
        "hi": "पूरे संकुचन के बजाय छोटे-छोटे उछाल के साथ जल्दी-जल्दी करना।"
      }
    ],
    "tips": [
      {
        "en": "Progress from flat floor to an elevated stair edge to introduce a deep deficit stretch.",
        "hi": "गहरा खिंचाव पाने के लिए फर्श से सीढ़ी के किनारे पर आएं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep ankles straight without collapsing inward.",
      "hi": "टखनों को बिना अंदर झुकाए सीधा रखें।"
    },
    "alternative": {
      "en": "Stair Calf Raise or Single-Leg Calf Raise",
      "hi": "स्टेयर काफ रेज या सिंगल-लेग काफ रेज"
    },
    "keywords": [
      "bodyweight calf raise",
      "calves",
      "home workout",
      "no equipment"
    ]
  },
  {
    "id": "stair-calf-raise-deficit",
    "name": {
      "en": "Deficit Stair Calf Raise",
      "hi": "डेफिसिट स्टेयर काफ रेज (Stair Deficit Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Achilles Tendon"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Utilizes a staircase step to create an extended range of motion, providing a deep Achilles and gastrocnemius stretch.",
      "hi": "सीढ़ी के स्टेप का उपयोग करके गति का दायरा बढ़ाता है, जिससे गहरा खिंचाव मिलता है।"
    },
    "startingPosition": {
      "en": "Stand on the bottom step of a staircase with balls of feet secure and heels extending off the edge. Hold the handrail.",
      "hi": "सीढ़ी के निचले पायदान पर पंजों को टिकाकर खड़े हों, एड़ियां बाहर लटकी रहें। रेलिंग पकड़ें।"
    },
    "steps": [
      {
        "en": "Sink heels as low as possible below the step until a full calf stretch is achieved.",
        "hi": "स्टेप से जितना हो सके उतना नीचे एड़ियां ले जाएं।"
      },
      {
        "en": "Hold the deep stretch for a full 3-second pause.",
        "hi": "गहरे खिंचाव को पूरे 3 सेकंड तक बनाए रखें।"
      },
      {
        "en": "Rise smoothly onto tiptoes, squeezing hard at top for 2 seconds.",
        "hi": "पंजों पर आसानी से ऊपर उठें और शीर्ष पर 2 सेकंड तक दबाएं।"
      },
      {
        "en": "Slowly descend over 3 seconds back into maximum stretch.",
        "hi": "3 सेकंड में धीरे-धीरे अधिकतम खिंचाव में वापस आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale deeply in the stretch; exhale as you raise heels.",
      "hi": "खिंचाव में गहरी सांस लें; एड़ियां उठाते समय छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bouncing off the bottom tendon stretch to cheat the upward phase.",
        "hi": "उछाल का सहारा लेकर चीटिंग करना।"
      }
    ],
    "tips": [
      {
        "en": "Hold the handrail strictly for balance, not for pulling your weight up.",
        "hi": "रेलिंग को केवल संतुलन के लिए पकड़ें, शरीर खींचने के लिए नहीं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure shoes have good non-slip traction on the stair edge.",
      "hi": "सुनिश्चित करें कि जूते सीढ़ी पर फिसलें नहीं।"
    },
    "alternative": {
      "en": "Standing Machine Calf Raise",
      "hi": "स्टैंडिंग मशीन काफ रेज"
    },
    "keywords": [
      "stair calf raise",
      "deficit calf",
      "calves",
      "bodyweight stretch"
    ]
  },
  {
    "id": "hack-squat-calf-raise",
    "name": {
      "en": "Hack Squat Machine Calf Press",
      "hi": "हैक स्क्वाट मशीन काफ प्रेस (Hack Squat Calf Press)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Machine",
    "description": {
      "en": "An angled calf raise performed on the hack squat machine, providing solid back support and stable heavy loading.",
      "hi": "हैक स्क्वाट मशीन पर किया जाने वाला काफ रेज, जो स्थिर पीठ सहारा और भारी वजन उठाने की सुविधा देता है।"
    },
    "startingPosition": {
      "en": "Step into hack squat with back firmly against pad and balls of feet at bottom edge of footplate, heels hanging.",
      "hi": "पीठ को पैड से सटाकर रखें और पंजों को फुटप्लेट के निचले किनारे पर रखें।"
    },
    "steps": [
      {
        "en": "Disengage safety handles with knees kept extended with a soft lock.",
        "hi": "घुटनों को हल्का सीधा रखते हुए सेफ्टी हैंडल हटाएं।"
      },
      {
        "en": "Drop heels below platform edge for a deep 2-second stretch pause.",
        "hi": "2 सेकंड के गहरे खिंचाव के लिए एड़ियों को नीचे जाने दें।"
      },
      {
        "en": "Press toes into the plate to elevate the sled as high as possible.",
        "hi": "स्लेज को ऊंचा उठाने के लिए पंजों से दबाएं।"
      },
      {
        "en": "Hold top contraction for 1 second before lowering.",
        "hi": "नीचे जाने से पहले शीर्ष संकुचन को 1 सेकंड रोकें।"
      }
    ],
    "breathing": {
      "en": "Inhale lowering into stretch; exhale driving the sled upward.",
      "hi": "नीचे सांस लें; स्लेज ऊपर धकेलते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Allowing heels to slip off the plate under heavy weight.",
        "hi": "भारी वजन में एड़ियों को प्लेट से फिसलने देना।"
      }
    ],
    "tips": [
      {
        "en": "The 45-degree back support removes direct vertical spinal compression compared to standing barbell raises.",
        "hi": "45-डिग्री कोण रीढ़ पर सीधा भार कम करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep hands close to safety release catches.",
      "hi": "हाथों को हमेशा सेफ्टी कैच के पास रखें।"
    },
    "alternative": {
      "en": "Leg Press Calf Press",
      "hi": "लेग प्रेस काफ प्रेस"
    },
    "keywords": [
      "hack squat calf raise",
      "calves",
      "gastrocnemius",
      "hack squat"
    ]
  },
  {
    "id": "resistance-band-calf-raise",
    "name": {
      "en": "Resistance Band Calf Raise",
      "hi": "रेसिस्टेंस बैंड काफ रेज (Band Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Plantaris"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Resistance Bands",
    "description": {
      "en": "Provides accommodating resistance that increases peak tension at top plantarflexion, ideal for travel and home workouts.",
      "hi": "लचीला प्रतिरोध प्रदान करता है जिससे शीर्ष पर अधिकतम तनाव मिलता है, यात्रा और होम वर्कआउट के लिए उत्तम।"
    },
    "startingPosition": {
      "en": "Stand on a heavy looped resistance band with the balls of both feet, looping the top end over your shoulders or holding tight at chest.",
      "hi": "पंजों के नीचे लूप बैंड दबाएं और दूसरे सिरे को कंधों के ऊपर रखें या छाती पर मजबूती से पकड़ें।"
    },
    "steps": [
      {
        "en": "Lower heels fully to touch the floor under constant band tension.",
        "hi": "बैंड के तनाव के तहत एड़ियों को फर्श पर नीचे लाएं।"
      },
      {
        "en": "Explode up onto tiptoes against increasing elastic band tension.",
        "hi": "बैंड के बढ़ते प्रतिरोध के खिलाफ पंजों पर ऊपर उठें।"
      },
      {
        "en": "Hold the peak squeeze for 2 seconds as the band reaches peak resistance.",
        "hi": "जब बैंड का खिंचाव सबसे ज्यादा हो, 2 सेकंड तक रोकें।"
      },
      {
        "en": "Lower under control back to the floor.",
        "hi": "नियंत्रण के साथ वापस फर्श पर आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale up against band resistance; inhale as you lower.",
      "hi": "बैंड के खिंचाव के खिलाफ ऊपर सांस छोड़ें; नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting the band snap your heels down rapidly without controlling the descent.",
        "hi": "बिना नियंत्रण के बैंड को तेजी से नीचे खींचने देना।"
      }
    ],
    "tips": [
      {
        "en": "Place band under a wooden calf block for deficit band training.",
        "hi": "डेफिसिट ट्रेनिंग के लिए ब्लॉक के नीचे बैंड लगाएं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure band is securely positioned under the midfoot/balls of feet so it cannot slip.",
      "hi": "सुनिश्चित करें कि बैंड पंजों से फिसले नहीं।"
    },
    "alternative": {
      "en": "Dumbbell Calf Raise",
      "hi": "डंबल काफ रेज"
    },
    "keywords": [
      "resistance band calf raise",
      "band calves",
      "home workout",
      "calves"
    ]
  },
  {
    "id": "isometric-calf-hold",
    "name": {
      "en": "Isometric Peak Calf Hold",
      "hi": "आइसोमेट्रिक पीक काफ होल्ड (Isometric Calf Hold)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Achilles Tendon"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "Strengthens tendon stiffness, builds mental toughness, and produces intense blood occlusion in the calf musculature.",
      "hi": "टेंडन को मजबूत करता है और काफ की मांसपेशियों में रक्त प्रवाह बढ़ाकर शानदार पंप देता है।"
    },
    "startingPosition": {
      "en": "Stand on balls of feet on a flat surface or calf block, holding light support for balance.",
      "hi": "समतल फर्श या ब्लॉक पर पंजों के बल खड़े हों और संतुलन के लिए हल्का सहारा लें।"
    },
    "steps": [
      {
        "en": "Rise to the absolute highest possible tiptoe position.",
        "hi": "पंजों के बल जितना संभव हो उतना ऊंचा उठें।"
      },
      {
        "en": "Lock ankles into maximum plantarflexion and flex calves with 100% effort.",
        "hi": "टखनों को पूरी तरह ऊपर रखें और 100% ताकत से काफ सिकोड़ें।"
      },
      {
        "en": "Hold this rigid position motionless for 30 to 60 seconds.",
        "hi": "30 से 60 सेकंड तक बिना हिले इस स्थिति में बने रहें।"
      },
      {
        "en": "Slowly descend under control once time expires.",
        "hi": "समय पूरा होने पर धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Maintain steady, rhythmic breathing through the nose while holding the contraction.",
      "hi": "होल्ड के दौरान नाक से नियमित और शांत सांस लेते रहें।"
    },
    "mistakes": [
      {
        "en": "Allowing heels to slowly sag toward the floor as fatigue sets in.",
        "hi": "थकान आने पर एड़ियों को धीरे-धीरे नीचे झुकने देना।"
      }
    ],
    "tips": [
      {
        "en": "Great finisher at the end of a calf workout to empty the muscle fibers completely.",
        "hi": "काफ वर्कआउट के अंत में मांसपेशियों को पूरी तरह थकाने के लिए शानदार फिनिशर।"
      }
    ],
    "safetyPrecautions": {
      "en": "If calf cramps, gently lower heels and stretch.",
      "hi": "काफ में ऐंठन आने पर धीरे-धीरे नीचे आएं और स्ट्रेच करें।"
    },
    "alternative": {
      "en": "Paused Deficit Calf Raise",
      "hi": "पॉज्ड डेफिसिट काफ रेज"
    },
    "keywords": [
      "isometric calf hold",
      "calf burn",
      "tendon stiffness",
      "static hold"
    ]
  },
  {
    "id": "paused-deficit-calf-raise",
    "name": {
      "en": "Paused Deficit Calf Raise",
      "hi": "पॉज्ड डेफिसिट काफ रेज (Paused Deficit Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Achilles Tendon"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Machine",
    "description": {
      "en": "Specifically eliminates the stretch-shortening cycle by forcing a strict 3-second dead-stop pause at the absolute bottom of the stretch.",
      "hi": "खिंचाव के निचले बिंदु पर 3 सेकंड का ठहराव देकर इलास्टिक उछाल को पूरी तरह खत्म करता है।"
    },
    "startingPosition": {
      "en": "Set up on a standing calf machine or calf block under load.",
      "hi": "स्टैंडिंग मशीन या वजन के साथ ब्लॉक पर स्थिति लें।"
    },
    "steps": [
      {
        "en": "Lower heels as deep as humanly possible below the block edge.",
        "hi": "ब्लॉक से जितना संभव हो उतना नीचे एड़ियां ले जाएं।"
      },
      {
        "en": "Hold completely still at dead bottom for a counted 3 full seconds.",
        "hi": "निचले बिंदु पर पूरे 3 सेकंड तक बिना हिले रुकें।"
      },
      {
        "en": "Contract calves purely with muscular force to drive up onto big toes.",
        "hi": "बिना किसी उछाल के केवल मांसपेशियों की ताकत से ऊपर उठें।"
      },
      {
        "en": "Hold top contraction for 2 seconds, then lower over 3 seconds.",
        "hi": "शीर्ष पर 2 सेकंड रुकें, फिर 3 सेकंड में नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale during the slow descent; hold during pause; exhale forcefully driving up.",
      "hi": "नीचे जाते समय सांस लें; ठहराव में रोकें; ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Cutting the 3-second bottom pause to 1 second when the stretch begins to burn.",
        "hi": "जलन होने पर 3 सेकंड के ठहराव को छोटा करना।"
      }
    ],
    "tips": [
      {
        "en": "This technique generates massive muscle hypertrophy because every ounce of work is done by muscle fibers, not tendons.",
        "hi": "यह तकनीक मांसपेशियों के विकास के लिए सबसे बेहतरीन है क्योंकि सारा काम टेंडन नहीं बल्कि मांसपेशियां करती हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Use moderate weights to master the bottom stretch comfortably.",
      "hi": "निचले खिंचाव में सहज रहने के लिए मध्यम वजन का उपयोग करें।"
    },
    "alternative": {
      "en": "Standing Machine Calf Raise",
      "hi": "स्टैंडिंग मशीन काफ रेज"
    },
    "keywords": [
      "paused calf raise",
      "deficit calf",
      "gastrocnemius",
      "hypertrophy"
    ]
  },
  {
    "id": "eccentric-heel-drop",
    "name": {
      "en": "Eccentric Heel Drop (Achilles Rehabilitation)",
      "hi": "एक्सेंट्रिक हील ड्रॉप (Eccentric Heel Drop)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Achilles Tendon",
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "The clinically proven Alfredson protocol exercise for strengthening the Achilles tendon, preventing tendinopathy, and building eccentric calf control.",
      "hi": "अकिलीस टेंडन को मजबूत करने, चोट से बचाने और काफ का एक्सेंट्रिक नियंत्रण बढ़ाने के लिए चिकित्सकीय रूप से प्रमाणित व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand on a step edge with balls of both feet, holding a handrail for stability.",
      "hi": "स्टेप के किनारे पर दोनों पंजों के बल खड़े हों, संतुलन के लिए रेलिंग पकड़ें।"
    },
    "steps": [
      {
        "en": "Rise onto tiptoes using both feet.",
        "hi": "दोनों पैरों का उपयोग करके पंजों के बल ऊपर उठें।"
      },
      {
        "en": "Lift the non-target foot off the step so all weight is on the target leg.",
        "hi": "दूसरे पैर को उठा लें ताकि पूरा वजन एक पैर पर आ जाए।"
      },
      {
        "en": "Lower the working heel down below the step over a very slow 5-second descent.",
        "hi": "काम करने वाले पैर की एड़ी को 5 सेकंड में बहुत धीरे-धीरे नीचे लाएं।"
      },
      {
        "en": "Place both feet back on step and rise back up with both feet to save energy for the eccentric lowering.",
        "hi": "दोनों पैर रखकर ऊपर उठें और केवल नीचे आने में एक पैर का उपयोग करें।"
      }
    ],
    "breathing": {
      "en": "Inhale slowly over the entire 5-second lowering duration; exhale as you assist up with both feet.",
      "hi": "5 सेकंड के धीमे उतार के दौरान सांस लें; ऊपर उठते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Lowering too quickly or failing to get a full deep heel drop.",
        "hi": "बहुत तेजी से नीचे आना या पूरी तरह नीचे न जाना।"
      }
    ],
    "tips": [
      {
        "en": "Perform with straight knee for gastrocnemius/Achilles, and bent knee for soleus tendon loading.",
        "hi": "गैस्ट्रोकनेमियस के लिए सीधा घुटना और सोलियस के लिए मुड़ा हुआ घुटना रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Stop immediately if sharp tendon pain occurs.",
      "hi": "तेज दर्द होने पर तुरंत रुकें।"
    },
    "alternative": {
      "en": "Single-Leg Calf Raise",
      "hi": "सिंगल-लेग काफ रेज"
    },
    "keywords": [
      "eccentric heel drop",
      "achilles tendon",
      "calves",
      "alfredson protocol",
      "rehab"
    ]
  },
  {
    "id": "farmers-walk-on-toes",
    "name": {
      "en": "Tip-Toe Farmer's Walk",
      "hi": "टिप-टो फार्मर्स वॉक (Tip-Toe Farmer's Walk)"
    },
    "muscle": "Calves",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Dumbbells",
    "description": {
      "en": "A punishing loaded carry variation where you walk purely on the balls of your feet, building incredible calf endurance and ankle stability.",
      "hi": "भारी डंबल लेकर केवल पंजों के बल चलने वाला व्यायाम, जो काफ की सहनशक्ति और टखने की स्थिरता बढ़ाता है।"
    },
    "startingPosition": {
      "en": "Deadlift two heavy dumbbells or kettlebells to sides with shoulders back and core tight.",
      "hi": "दोनों तरफ भारी डंबल या केतलीबेल उठाएं, कंधे पीछे और कोर टाइट रखें।"
    },
    "steps": [
      {
        "en": "Rise up as high as possible onto the balls of your feet.",
        "hi": "पंजों के बल जितना हो सके उतना ऊंचा उठें।"
      },
      {
        "en": "Take deliberate, controlled small steps forward while keeping heels elevated off the ground.",
        "hi": "एड़ियों को फर्श से ऊपर रखते हुए छोटे-छोटे नियंत्रित कदम आगे बढ़ाएं।"
      },
      {
        "en": "Walk for 30 to 50 feet without letting your heels touch the floor.",
        "hi": "एड़ियों को बिना फर्श छुए 30 से 50 फीट तक चलें।"
      },
      {
        "en": "Safely set dumbbells down, rest, and repeat.",
        "hi": "डंबल को सुरक्षित रूप से नीचे रखें और दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Breathe in controlled, rhythmic breaths into your belly to brace core under heavy load.",
      "hi": "भारी भार में कोर को सहारा देने के लिए नियंत्रित सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting heels drop and walking flat-footed as calves fatigue.",
        "hi": "थकान आने पर एड़ियों को फर्श पर रखकर चलना।"
      }
    ],
    "tips": [
      {
        "en": "Keep steps short, quick, and light like a boxer dancing on toes.",
        "hi": "कदमों को छोटा और हल्का रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep walking path completely clear of trip hazards.",
      "hi": "रास्ते में कोई रुकावट न हो।"
    },
    "alternative": {
      "en": "Farmer's Carry or Isometric Calf Hold",
      "hi": "फार्मर्स कैरी या आइसोमेट्रिक काफ होल्ड"
    },
    "keywords": [
      "farmers walk on toes",
      "calves",
      "grip",
      "loaded carry",
      "ankle stability"
    ]
  },
  {
    "id": "tibialis-anterior-raise",
    "name": {
      "en": "Wall Tibialis Anterior Raise",
      "hi": "वॉल टिबियालिस एंटीरियर रेज (Wall Tibialis Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Tibialis Anterior (Front of Shin)"
    ],
    "secondaryMuscles": [
      "Extensor Digitorum Longus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Strengthens the front of the lower leg to bulletproof knees, balance calf strength, and prevent painful shin splints.",
      "hi": "घुटनों को मजबूत करने, काफ संतुलन और शिन स्प्लिंट्स से बचाव के लिए पिंडली के सामने के हिस्से को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Lean your upper back and buttocks flat against a smooth wall with feet placed about 12-18 inches forward, legs straight.",
      "hi": "पीठ और कूल्हों को दीवार से सटाएं, पैरों को 12-18 इंच आगे रखें और पैर सीधे रखें।"
    },
    "steps": [
      {
        "en": "Keep heels glued to the floor and pull your toes up toward your shins into maximum dorsiflexion.",
        "hi": "एड़ियों को फर्श पर टिकाकर रखें और पंजों को ऊपर पिंडलियों की ओर खींचें।"
      },
      {
        "en": "Hold the top contraction for 1 full second, feeling the shins burn.",
        "hi": "शीर्ष पर 1 सेकंड रुकें और पिंडलियों में संकुचन महसूस करें।"
      },
      {
        "en": "Lower toes smoothly until they lightly tap the ground.",
        "hi": "पंजों को धीरे-धीरे नीचे लाएं जब तक वे फर्श को न छू लें।"
      },
      {
        "en": "Repeat for 15 to 25 controlled repetitions.",
        "hi": "15 से 25 नियंत्रित रैप्स दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale as you pull toes up; inhale as you lower them.",
      "hi": "पंजों को ऊपर खींचते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bending knees or sliding down the wall during repetitions.",
        "hi": "घुटने मोड़ना या दीवार से नीचे फिसलना।"
      }
    ],
    "tips": [
      {
        "en": "The further your feet are placed away from the wall, the harder the exercise becomes.",
        "hi": "पैर दीवार से जितने दूर होंगे, व्यायाम उतना ही कठिन होगा।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure the floor has good grip so your heels do not slip.",
      "hi": "सुनिश्चित करें कि एड़ियां फर्श पर फिसलें नहीं।"
    },
    "alternative": {
      "en": "Dumbbell Tibialis Raise or Tib Bar",
      "hi": "डंबल टिबियालिस रेज"
    },
    "keywords": [
      "tibialis anterior raise",
      "shin splints",
      "knees over toes",
      "shins",
      "calves"
    ]
  },
  {
    "id": "reverse-calf-raise",
    "name": {
      "en": "Dumbbell Tibialis / Reverse Calf Raise",
      "hi": "डंबल रिवर्स काफ रेज (Reverse Calf Raise)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Tibialis Anterior"
    ],
    "secondaryMuscles": [
      "Extensor Hallucis Longus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "A seated weighted variation targeting the tibialis anterior using a dumbbell or kettlebell hooked across the toes.",
      "hi": "पंजों पर डंबल रखकर पिंडली के सामने की मांसपेशियों को मजबूत करने वाला व्यायाम।"
    },
    "startingPosition": {
      "en": "Sit on a high bench with legs extended forward and heels supported on a block, toes free in space. Secure a dumbbell vertically across your toes.",
      "hi": "ऊंची बेंच पर बैठें, एड़ियों को ब्लॉक पर टिकाएं और पंजों पर डंबल रखें।"
    },
    "steps": [
      {
        "en": "Point toes downward into full plantarflexion stretch.",
        "hi": "पंजों को नीचे की ओर पूरा फैलाएं।"
      },
      {
        "en": "Flex feet upward toward your knees against the weight of the dumbbell.",
        "hi": "डंबल के भार के खिलाफ पंजों को ऊपर घुटनों की ओर खींचें।"
      },
      {
        "en": "Hold the peak dorsiflexion squeeze for 2 seconds.",
        "hi": "शीर्ष संकुचन को 2 सेकंड तक बनाए रखें।"
      },
      {
        "en": "Lower under control to the starting stretch.",
        "hi": "नियंत्रण के साथ वापस नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pulling up; inhale lowering down.",
      "hi": "ऊपर खींचते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting the dumbbell slip off the foot due to jerky motions.",
        "hi": "झटकेदार गति से डंबल को पैर से फिसलने देना।"
      }
    ],
    "tips": [
      {
        "en": "You can also use a kettlebell by hanging the handle over the toes.",
        "hi": "आप केतलीबेल का हैंडल पंजों पर लटकाकर भी यह कर सकते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Secure dumbbell firmly between feet or use a strap.",
      "hi": "डंबल को पैरों के बीच मजबूती से सुरक्षित रखें।"
    },
    "alternative": {
      "en": "Wall Tibialis Raise",
      "hi": "वॉल टिबियालिस रेज"
    },
    "keywords": [
      "reverse calf raise",
      "tibialis anterior",
      "shins",
      "ankle health"
    ]
  },
  {
    "id": "jump-rope",
    "name": {
      "en": "Jump Rope (Calf Conditioning & Plyometrics)",
      "hi": "जंप रोप / रस्सी कूदना (Jump Rope for Calves)"
    },
    "muscle": "Calves",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Jump Rope",
    "description": {
      "en": "High-frequency plyometric calf conditioning that builds springy, reactive calves and extreme ankle tendon elasticity.",
      "hi": "उच्च गति वाला प्लायोमेट्रिक व्यायाम जो लचीले, मजबूत काफ और टखने की असाधारण लोच बनाता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding jump rope handles at hip height with elbows bent near your sides.",
      "hi": "कूल्हे की ऊंचाई पर रस्सी के हैंडल पकड़कर सीधे खड़े हों, कोहनियां कमर के पास रखें।"
    },
    "steps": [
      {
        "en": "Rotate wrists to whip the rope overhead and underneath your feet.",
        "hi": "रस्सी को सिर के ऊपर से और पैरों के नीचे घुमाने के लिए कलाइयों को घुमाएं।"
      },
      {
        "en": "Bounce lightly purely on the balls of your feet, staying off your heels.",
        "hi": "एड़ियों को फर्श से ऊपर रखते हुए केवल पंजों के बल हल्के उछलें।"
      },
      {
        "en": "Keep knees slightly bent and use ankles as springs for quick, short jumps.",
        "hi": "घुटनों को हल्का मोड़कर रखें और टखनों को स्प्रिंग की तरह इस्तेमाल करें।"
      },
      {
        "en": "Maintain a steady rhythm for 2-3 minute rounds.",
        "hi": "2-3 मिनट के राउंड के लिए स्थिर लय बनाए रखें।"
      }
    ],
    "breathing": {
      "en": "Establish a rhythmic breathing cadence synchronized with rope rotations.",
      "hi": "रस्सी के घूमने के साथ तालमेल बिठाकर लयबद्ध सांस लें।"
    },
    "mistakes": [
      {
        "en": "Jumping too high off the floor and slamming heels down.",
        "hi": "बहुत ऊंचा कूदना और एड़ियों को फर्श पर पटकना।"
      },
      {
        "en": "Using arms and shoulders instead of wrists to turn the rope.",
        "hi": "कलाई के बजाय बाहों और कंधों से रस्सी घुमाना।"
      }
    ],
    "tips": [
      {
        "en": "Jump only 1-2 inches off the ground to minimize fatigue and maximize calf reactive rebound.",
        "hi": "जमीन से केवल 1-2 इंच ऊपर कूदें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Jump on a forgiving surface such as a gym rubber mat, wooden floor, or turf.",
      "hi": "रबर मैट या लकड़ी के फर्श जैसी सुरक्षित सतह पर कूदें।"
    },
    "alternative": {
      "en": "Box Hops or Bodyweight Calf Raise",
      "hi": "बॉक्स हॉप्स या बॉडीवेट काफ रेज"
    },
    "keywords": [
      "jump rope",
      "calves",
      "plyometrics",
      "achilles",
      "cardio"
    ]
  },
  {
    "id": "seated-band-calf-extension",
    "name": {
      "en": "Seated Resistance Band Calf Extension",
      "hi": "सीटेड बैंड काफ एक्सटेंशन (Seated Band Calf Press)"
    },
    "muscle": "Calves",
    "primaryMuscles": [
      "Soleus",
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Plantaris"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Resistance Bands",
    "description": {
      "en": "A seated ankle plantarflexion exercise using a resistance band looped around the ball of the foot, excellent for isolated mind-muscle connection.",
      "hi": "पंजों के चारों ओर बैंड लपेटकर किया जाने वाला व्यायाम, मांसपेशियों के अलग खिंचाव के लिए बेहतरीन।"
    },
    "startingPosition": {
      "en": "Sit on the floor with legs extended straight in front of you. Loop the center of a resistance band around the ball of one foot, holding both ends tightly.",
      "hi": "पैरों को सीधा फैलाकर बैठें। एक पैर के पंजे पर बैंड लपेटें और दोनों सिरों को हाथों से पकड़ें।"
    },
    "steps": [
      {
        "en": "Allow the band to pull your toes toward your body into a deep calf stretch.",
        "hi": "बैंड को पंजों को अपनी ओर खींचने दें ताकि गहरा खिंचाव मिले।"
      },
      {
        "en": "Press the ball of your foot forward like pushing a gas pedal against band tension.",
        "hi": "गैस पेडल दबाने की तरह बैंड के खिंचाव के खिलाफ पंजे को आगे दबाएं।"
      },
      {
        "en": "Squeeze the calf at maximum extension for 2 seconds.",
        "hi": "अधिकतम विस्तार पर 2 सेकंड के लिए काफ को सिकोड़ें।"
      },
      {
        "en": "Slowly release back to the stretched position.",
        "hi": "धीरे-धीरे वापस खिंचाव वाली स्थिति में आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale pushing toes away; inhale returning.",
      "hi": "पंजे आगे दबाते समय सांस छोड़ें; लौटते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing the band to slip off the toes toward the face.",
        "hi": "बैंड को पंजों से फिसलने देना।"
      }
    ],
    "tips": [
      {
        "en": "Pull band tighter with your hands to progressively overload the calf muscle.",
        "hi": "भार बढ़ाने के लिए बैंड को हाथों से और कसकर खींचें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep band centered securely on the ball of the foot.",
      "hi": "बैंड को पंजे के बीच में मजबूती से रखें।"
    },
    "alternative": {
      "en": "Seated Calf Raise",
      "hi": "सीटेड काफ रेज"
    },
    "keywords": [
      "seated band calf",
      "calves",
      "home calf workout",
      "plantarflexion"
    ]
  },
  {
    "id": "standard-crunch",
    "name": {
      "en": "Standard Floor Crunch",
      "hi": "स्टैंडर्ड फ्लोर क्रंच (Floor Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis (Upper)"
    ],
    "secondaryMuscles": [
      "Internal Obliques",
      "External Obliques",
      "Transversus Abdominis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "A foundational abdominal exercise that isolates the rectus abdominis by flexing the thoracic spine without pulling through the hip flexors.",
      "hi": "एक बुनियादी पेट का व्यायाम जो हिप फ्लेक्सर्स पर खिंचाव दिए बिना रीढ़ को मोड़कर रेक्टस एब्डोमिनिस को सक्रिय करता है।"
    },
    "startingPosition": {
      "en": "Lie on your back on a mat with knees bent at 90 degrees and feet flat on the floor. Lightly touch fingertips to your temples or cross arms over chest.",
      "hi": "मैट पर पीठ के बल लेटें, घुटने 90 डिग्री पर मुड़े हों और पैर फर्श पर हों। उंगलियों को कनपटी पर हल्के से रखें।"
    },
    "steps": [
      {
        "en": "Press your lower back flat into the mat by tilting your pelvis slightly upward.",
        "hi": "कूल्हों को थोड़ा ऊपर झुकाकर निचली पीठ को मैट पर सीधा दबाएं।"
      },
      {
        "en": "Exhale sharply and curl your shoulders and upper back off the floor toward your knees.",
        "hi": "तेजी से सांस छोड़ें और कंधों और ऊपरी पीठ को घुटनों की ओर ऊपर उठाएं।"
      },
      {
        "en": "Squeeze your abdominal wall hard at the peak for a full 1-2 second contraction.",
        "hi": "शीर्ष पर 1-2 सेकंड के लिए पेट की मांसपेशियों को जोर से सिकोड़ें।"
      },
      {
        "en": "Lower back down with control until shoulder blades lightly brush the floor.",
        "hi": "नियंत्रण के साथ वापस नीचे आएं जब तक कंधे के ब्लेड फर्श को हल्के से न छू लें।"
      }
    ],
    "breathing": {
      "en": "Inhale while lying flat; exhale forcefully as you crunch your ribs toward your pelvis.",
      "hi": "नीचे लेटते समय सांस लें; पसलियों को कूल्हों की ओर सिकोड़ते समय तेजी से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Interlocking fingers behind the neck and violently yanking the head forward.",
        "hi": "गर्दन के पीछे उंगलियां फंसाकर सिर को जोर से आगे खींचना।"
      },
      {
        "en": "Sitting all the way up using hip flexor momentum instead of isolating the abs.",
        "hi": "पेट के बजाय हिप फ्लेक्सर्स के सहारे पूरा उठ जाना।"
      }
    ],
    "tips": [
      {
        "en": "Focus on pulling your ribcage down toward your hip bones, curling your spine like a shrimp.",
        "hi": "अपनी पसलियों को कूल्हे की हड्डियों की ओर खींचने पर ध्यान दें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep a fist-sized distance between your chin and your chest to protect the neck.",
      "hi": "गर्दन की सुरक्षा के लिए ठुड्डी और छाती के बीच मुट्ठी भर दूरी रखें।"
    },
    "alternative": {
      "en": "Cable Crunch or Stability Ball Crunch",
      "hi": "केबल क्रंच या स्टेबिलिटी बॉल क्रंच"
    },
    "keywords": [
      "crunch",
      "abs",
      "six pack",
      "core",
      "rectus abdominis"
    ]
  },
  {
    "id": "decline-crunch",
    "name": {
      "en": "Decline Bench Crunch",
      "hi": "डिक्लाइन बेंच क्रंच (Decline Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Hip Flexors"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Bodyweight",
    "description": {
      "en": "Performed on a decline bench to increase the gravitational resistance against abdominal flexion across an extended range of motion.",
      "hi": "डिक्लाइन बेंच पर किया जाने वाला क्रंच, जो गुरुत्वाकर्षण के खिलाफ पेट की मांसपेशियों पर अधिक तनाव डालता है।"
    },
    "startingPosition": {
      "en": "Hook feet securely under the padded rollers of a decline bench set at 30-45 degrees, crossing arms over chest.",
      "hi": "30-45 डिग्री पर सेट डिक्लाइन बेंच के पैड के नीचे पैरों को सुरक्षित फंसाएं, हाथों को छाती पर रखें।"
    },
    "steps": [
      {
        "en": "Lower your torso until upper back is parallel with the bench angle without resting on it.",
        "hi": "अपने धड़ को तब तक नीचे लाएं जब तक ऊपरी पीठ बेंच के समानांतर न हो जाए।"
      },
      {
        "en": "Curl your ribcage toward your pelvis, flexing your abs hard.",
        "hi": "अपनी पसलियों को कूल्हों की ओर मोड़ें और एब्स को जोर से सिकोड़ें।"
      },
      {
        "en": "Pause at peak contraction for 1 second, expelling all air.",
        "hi": "पूरी हवा बाहर निकालते हुए शीर्ष संकुचन पर 1 सेकंड रुकें।"
      },
      {
        "en": "Lower slowly over 3 seconds under full abdominal tension.",
        "hi": "पूरे पेट के तनाव के साथ 3 सेकंड में धीरे-धीरे नीचे आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on the way down; exhale forcefully as you crunch up.",
      "hi": "नीचे जाते समय सांस लें; ऊपर क्रंच करते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Arching the lumbar spine or hyperextending backward at the bottom.",
        "hi": "नीचे पीठ को अत्यधिक मोड़ना या पीछे खींचना।"
      }
    ],
    "tips": [
      {
        "en": "Hold a weight plate across your chest for progressive overload once bodyweight becomes easy.",
        "hi": "आसान होने पर छाती पर वेट प्लेट पकड़ें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure ankle pads are adjusted snugly before lying back.",
      "hi": "पीछे लेटने से पहले टखने के पैड को अच्छी तरह कस लें।"
    },
    "alternative": {
      "en": "Standard Crunch or Cable Crunch",
      "hi": "स्टैंडर्ड क्रंच या केबल क्रंच"
    },
    "keywords": [
      "decline crunch",
      "abs",
      "core",
      "decline bench",
      "six pack"
    ]
  },
  {
    "id": "cable-crunch",
    "name": {
      "en": "Kneeling Cable Crunch",
      "hi": "नीलिंग केबल क्रंच (Kneeling Cable Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis (Total)"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Serratus Anterior"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Cables",
    "description": {
      "en": "The best exercise for progressive overload on the abs. Allows precise weight resistance to stimulate abdominal hypertrophy.",
      "hi": "पेट की मांसपेशियों पर प्रगतिशील भार डालने के लिए सबसे बेहतरीन व्यायाम, जो एब्स को उभारने में मदद करता है।"
    },
    "startingPosition": {
      "en": "Attach a rope to a high pulley. Kneel 2-3 feet back with rope held at either side of your head/ears and hips locked over knees.",
      "hi": "हाई पुली पर रस्सी लगाएं। 2-3 फीट पीछे घुटनों के बल बैठें, रस्सी को कानों के पास रखें और कूल्हों को स्थिर रखें।"
    },
    "steps": [
      {
        "en": "Fix your hips in place—do not sit back onto your heels.",
        "hi": "कूल्हों को स्थिर रखें—एड़ियों पर पीछे न बैठें।"
      },
      {
        "en": "Exhale and flex your spine, crunching your elbows down toward your knees.",
        "hi": "सांस छोड़ें और रीढ़ को मोड़ते हुए कोहनियों को घुटनों की ओर लाएं।"
      },
      {
        "en": "Curl your torso inward like rolling a carpet, feeling your entire six-pack contract.",
        "hi": "अपने धड़ को अंदर की ओर समेटें जैसे कालीन लपेटी जा रही हो।"
      },
      {
        "en": "Hold peak contraction for 2 seconds, then slowly return until your back is just straight.",
        "hi": "शीर्ष पर 2 सेकंड रुकें, फिर धीरे-धीरे तब तक लौटें जब तक पीठ सीधी न हो जाए।"
      }
    ],
    "breathing": {
      "en": "Inhale at the top; exhale completely as you curl downward.",
      "hi": "ऊपर सांस लें; नीचे झुकते समय पूरी सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Hinging at the hips and sitting down onto heels instead of flexing the spine.",
        "hi": "रीढ़ को मोड़ने के बजाय कूल्हों से झुककर एड़ियों पर बैठ जाना।"
      },
      {
        "en": "Using arms and lats to pull the rope down instead of abs doing the work.",
        "hi": "एब्स के बजाय बाहों और लैट्स से रस्सी को नीचे खींचना।"
      }
    ],
    "tips": [
      {
        "en": "Keep hands anchored rigidly beside ears so your arms act only as passive hooks.",
        "hi": "हाथों को कानों के पास स्थिर रखें ताकि बाहें केवल हुक की तरह रहें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not hyperextend your lower back at the top.",
      "hi": "शीर्ष पर अपनी निचली पीठ को ज्यादा पीछे न खींचे।"
    },
    "alternative": {
      "en": "Machine Crunch or Decline Crunch",
      "hi": "मशीन क्रंच या डिक्लाइन क्रंच"
    },
    "keywords": [
      "cable crunch",
      "kneeling cable crunch",
      "abs",
      "cables",
      "six pack"
    ]
  },
  {
    "id": "bicycle-crunch",
    "name": {
      "en": "Bicycle Crunch",
      "hi": "बाइसिकिल क्रंच (Bicycle Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis",
      "External & Internal Obliques"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Transversus Abdominis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Ranked by biomechanical EMG studies as one of the most effective abdominal exercises for activating both rectus abdominis and obliques simultaneously.",
      "hi": "बायोमैकेनिकल अध्ययनों के अनुसार रेक्टस एब्डोमिनिस और ओब्लिक्स दोनों को एक साथ सक्रिय करने वाला सबसे प्रभावी व्यायाम।"
    },
    "startingPosition": {
      "en": "Lie on your back with hands resting lightly behind head and shoulder blades elevated. Lift knees to a 90-degree tabletop position.",
      "hi": "हाथों को सिर के पीछे हल्के से रखें, कंधे ऊपर उठाएं और घुटनों को 90 डिग्री टेबलटॉप स्थिति में लाएं।"
    },
    "steps": [
      {
        "en": "Extend your right leg straight out at a 45-degree angle while drawing left knee in toward chest.",
        "hi": "दाहिने पैर को 45 डिग्री पर सीधा फैलाएं और बाएं घुटने को छाती की ओर खींचें।"
      },
      {
        "en": "Rotate your torso to bring your right shoulder/elbow across to meet the left knee.",
        "hi": "दाहिने कंधे को मोड़कर बाएं घुटने की ओर ले जाएं।"
      },
      {
        "en": "Hold the cross-body squeeze for 1 second.",
        "hi": "क्रॉस-बॉडी संकुचन को 1 सेकंड रोकें।"
      },
      {
        "en": "Smoothly reverse the motion, extending left leg and bringing left shoulder to right knee.",
        "hi": "आसानी से दूसरी तरफ बदलें और बाएं कंधे को दाएं घुटने की ओर लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on each diagonal rotation; inhale as you transition through center.",
      "hi": "प्रत्येक घुमाव पर सांस छोड़ें; बीच में आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rushing through reps with manic cycling motion without pausing or achieving rotation.",
        "hi": "बिना रुके तेजी से साइकिल चलाने की तरह झटके से करना।"
      },
      {
        "en": "Pulling on the neck with hands.",
        "hi": "हाथों से गर्दन को आगे खींचना।"
      }
    ],
    "tips": [
      {
        "en": "Think about driving your shoulder to the opposite knee, not just your elbow.",
        "hi": "केवल कोहनी के बजाय कंधे को विपरीत घुटने तक ले जाने का प्रयास करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep lower back gently touching the mat throughout.",
      "hi": "निचली पीठ को हमेशा मैट के संपर्क में रखें।"
    },
    "alternative": {
      "en": "Russian Twists or Dead Bug",
      "hi": "रूसी ट्विस्ट या डेड बग"
    },
    "keywords": [
      "bicycle crunch",
      "obliques",
      "abs",
      "core",
      "six pack",
      "rotation"
    ]
  },
  {
    "id": "reverse-crunch",
    "name": {
      "en": "Reverse Crunch",
      "hi": "रिवर्स क्रंच (Reverse Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Lower Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Transversus Abdominis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Focuses on the lower portion of the rectus abdominis by curling the pelvis and hips upward toward the ribcage.",
      "hi": "कूल्हों और पेल्विस को ऊपर पसलियों की ओर मोड़कर निचले एब्स को गहराई से लक्षित करता है।"
    },
    "startingPosition": {
      "en": "Lie on your back on a mat with arms flat at your sides for stability. Bend knees at 90 degrees with feet raised.",
      "hi": "मैट पर लेटें, बाहें दोनों तरफ फैलाएं, घुटने 90 डिग्री मोड़कर पैरों को ऊपर उठाएं।"
    },
    "steps": [
      {
        "en": "Engage your lower abs to pull your knees toward your chest.",
        "hi": "घुटनों को छाती की ओर खींचने के लिए निचले एब्स को सक्रिय करें।"
      },
      {
        "en": "Roll your pelvis and lower back off the floor by 2-3 inches, curling your tailbone up.",
        "hi": "टेलबोन को ऊपर मोड़ते हुए पेल्विस और निचली पीठ को फर्श से 2-3 इंच ऊपर उठाएं।"
      },
      {
        "en": "Hold the peak lower abdominal squeeze for 1 second.",
        "hi": "शीर्ष संकुचन को 1 सेकंड के लिए रोकें।"
      },
      {
        "en": "Lower your hips slowly back to the mat without arching your spine.",
        "hi": "पीठ को बिना मोड़े कूल्हों को धीरे-धीरे वापस मैट पर लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale as hips curl off the floor; inhale as you slowly lower hips back down.",
      "hi": "कूल्हे ऊपर उठते समय सांस छोड़ें; नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging legs with momentum to kick hips in the air.",
        "hi": "कूल्हों को हवा में उछालने के लिए पैरों को झटके से हिलाना।"
      },
      {
        "en": "Pushing hard with palms against the floor to lift the pelvis.",
        "hi": "कूल्हों को उठाने के लिए हथेलियों से फर्श पर जोर से धक्का देना।"
      }
    ],
    "tips": [
      {
        "en": "Move in a very short, controlled arc—it is a pelvic tilt, not a leg kick.",
        "hi": "यह एक पेल्विक टिल्ट है, कोई लेग किक नहीं; गति को छोटा और नियंत्रित रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not let lower back arch off the floor on the return.",
      "hi": "वापस आते समय निचली पीठ को फर्श से उठने न दें।"
    },
    "alternative": {
      "en": "Hanging Knee Raise or Captain's Chair Leg Raise",
      "hi": "हैंगिंग नी रेज या कैप्टन चेयर लेग रेज"
    },
    "keywords": [
      "reverse crunch",
      "lower abs",
      "rectus abdominis",
      "pelvic tilt"
    ]
  },
  {
    "id": "hanging-knee-raise",
    "name": {
      "en": "Hanging Knee Raise",
      "hi": "हैंगिंग नी रेज (Hanging Knee Raise)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Lower Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Forearms / Grip",
      "Lats"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "An outstanding hanging exercise for lower ab development that decompresses the spine while taxing core and grip strength.",
      "hi": "निचले एब्स के लिए बेहतरीन लटकने वाला व्यायाम जो रीढ़ पर दबाव कम करता है और ग्रिप ताकत बढ़ाता है।"
    },
    "startingPosition": {
      "en": "Hang from a pull-up bar with an overhand shoulder-width grip and legs straight, body motionless.",
      "hi": "पुल-अप बार से कंधे की चौड़ाई पर ओवरहैंड पकड़ के साथ लटकें, शरीर को स्थिर रखें।"
    },
    "steps": [
      {
        "en": "Engage your core to prevent swinging.",
        "hi": "झूलने से बचने के लिए अपने कोर को कस लें।"
      },
      {
        "en": "Bend your knees and draw them smoothly up toward your chest.",
        "hi": "घुटनों को मोड़ें और उन्हें आसानी से छाती की ओर ऊपर खींचें।"
      },
      {
        "en": "At top, tilt your pelvis upward so your knees reach chest height to fully engage the abs.",
        "hi": "एब्स को पूरी तरह सक्रिय करने के लिए पेल्विस को ऊपर झुकाएं ताकि घुटने छाती तक पहुंचें।"
      },
      {
        "en": "Lower legs back down slowly over 2-3 seconds to a dead hang without swinging.",
        "hi": "बिना झूले 2-3 सेकंड में पैरों को धीरे-धीरे वापस सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Inhale in the dead hang; exhale fully as knees reach maximum height.",
      "hi": "लटकते समय सांस लें; घुटने ऊपर लाते समय पूरी सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Swinging back and forth and using kipping momentum to launch knees up.",
        "hi": "आगे-पीछे झूलकर गति के सहारे घुटने ऊपर फेंकना।"
      },
      {
        "en": "Only lifting thighs to 90 degrees without curling the pelvis.",
        "hi": "पेल्विस को मोड़े बिना केवल जांघों को 90 डिग्री तक उठाना।"
      }
    ],
    "tips": [
      {
        "en": "To engage the abdominal wall, your tailbone must rotate forward and up at the top.",
        "hi": "एब्स को सक्रिय करने के लिए टेलबोन का शीर्ष पर आगे और ऊपर घूमना आवश्यक है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure pull-up bar is securely mounted.",
      "hi": "सुनिश्चित करें कि पुल-अप बार सुरक्षित रूप से लगा हो।"
    },
    "alternative": {
      "en": "Captain's Chair Leg Raise or Reverse Crunch",
      "hi": "कैप्टन चेयर लेग रेज या रिवर्स क्रंच"
    },
    "keywords": [
      "hanging knee raise",
      "lower abs",
      "pull up bar",
      "core",
      "grip"
    ]
  },
  {
    "id": "hanging-leg-raise",
    "name": {
      "en": "Hanging Straight-Leg Raise",
      "hi": "हैंगिंग स्ट्रेट-लेग रेज (Hanging Leg Raise)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis (Lower & Upper)",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Forearms",
      "Lats"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "One of the most challenging core movements. The extended leg lever places immense demand on the entire abdominal wall.",
      "hi": "सबसे चुनौतीपूर्ण कोर व्यायामों में से एक। सीधे पैर की लंबी लीवर पूरे एब्स पर भारी खिंचाव डालती है।"
    },
    "startingPosition": {
      "en": "Hang from a pull-up bar with an overhand grip, legs held together completely straight and toes pointed.",
      "hi": "पुल-अप बार से लटकें, पैरों को पूरी तरह सीधा और आपस में मिलाकर रखें।"
    },
    "steps": [
      {
        "en": "Depress shoulders and brace abdominal wall with zero forward/backward swing.",
        "hi": "कंधों को नीचे रखें और बिना झूले कोर को टाइट करें।"
      },
      {
        "en": "Raise straight legs upward together in a smooth, unhurried arc.",
        "hi": "दोनों सीधे पैरों को एक साथ एक चिकने, नियंत्रित चाप में ऊपर उठाएं।"
      },
      {
        "en": "Bring toes all the way to parallel with the floor or up to touch the bar.",
        "hi": "पंजों को फर्श के समानांतर या बार को छूने तक ऊपर ले जाएं।"
      },
      {
        "en": "Hold top position for 1 second, then lower with strict control over 3 seconds.",
        "hi": "शीर्ष पर 1 सेकंड रुकें, फिर 3 सेकंड में पूरी तरह नियंत्रण के साथ नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale powerfully on the ascent; inhale slowly as legs return down.",
      "hi": "ऊपर उठते समय जोर से सांस छोड़ें; पैर नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Kicking legs aggressively with hip swing instead of smooth core contraction.",
        "hi": "कोर संकुचन के बजाय हिप स्विंग से पैरों को झटके से किक करना।"
      },
      {
        "en": "Dropping legs instantly at the top without eccentric control.",
        "hi": "शीर्ष से पैरों को तुरंत नीचे गिरने देना।"
      }
    ],
    "tips": [
      {
        "en": "Imagine rolling your hips up into your chest to ensure the abs flex the spine.",
        "hi": "एब्स द्वारा रीढ़ को मोड़ने के लिए कूल्हों को छाती की ओर समेटने की कल्पना करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Requires strong grip and shoulder stabilization.",
      "hi": "इसके लिए मजबूत ग्रिप और कंधे की स्थिरता आवश्यक है।"
    },
    "alternative": {
      "en": "Hanging Knee Raise or Captain's Chair Leg Raise",
      "hi": "हैंगिंग नी रेज या कैप्टन चेयर लेग रेज"
    },
    "keywords": [
      "hanging leg raise",
      "toes to bar",
      "lower abs",
      "six pack",
      "advanced core"
    ]
  },
  {
    "id": "captains-chair-leg-raise",
    "name": {
      "en": "Captain's Chair Knee/Leg Raise",
      "hi": "कैप्टन चेयर लेग रेज (Captain's Chair Leg Raise)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Lower Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Internal & External Obliques"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Machine",
    "description": {
      "en": "A supported vertical raise that removes the grip fatigue of hanging from a bar, allowing 100% focus on curling the pelvis and lower abs.",
      "hi": "सहारे वाला वर्टिकल रेज जो ग्रिप की थकान को हटाता है, जिससे पूरा ध्यान निचले एब्स पर रहता है।"
    },
    "startingPosition": {
      "en": "Step into the tower, resting forearms firmly on padded armrests and gripping handles. Keep back flush against back pad.",
      "hi": "टॉवर में कदम रखें, अग्रभाग को पैड पर रखें और हैंडल पकड़ें। पीठ को पीछे के पैड से सटाकर रखें।"
    },
    "steps": [
      {
        "en": "Suspend your legs straight down with feet off the footpegs.",
        "hi": "पैरों को सीधे नीचे लटकाएं।"
      },
      {
        "en": "Raise knees or straight legs up toward chest by curling hips forward and upward.",
        "hi": "कूल्हों को आगे और ऊपर मोड़ते हुए घुटनों को छाती की ओर उठाएं।"
      },
      {
        "en": "Squeeze lower abs at the top point for 1-2 seconds.",
        "hi": "शीर्ष पर 1-2 सेकंड के लिए निचले एब्स को सिकोड़ें।"
      },
      {
        "en": "Lower legs back down slowly under control until legs are perpendicular.",
        "hi": "नियंत्रण के साथ पैरों को धीरे-धीरे वापस सीधा करें।"
      }
    ],
    "breathing": {
      "en": "Exhale as you lift knees toward chest; inhale smoothly as you lower.",
      "hi": "घुटने ऊपर उठाते समय सांस छोड़ें; नीचे लाते समय आसानी से सांस लें।"
    },
    "mistakes": [
      {
        "en": "Shrugging neck into shoulders or arching lower back off the back pad.",
        "hi": "कंधों को उचकाना या निचली पीठ को पैड से हटाना।"
      }
    ],
    "tips": [
      {
        "en": "Push down firmly into your forearms to maintain shoulder depression throughout.",
        "hi": "कंधों को स्थिर रखने के लिए अग्रभाग से पैड को नीचे दबाकर रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not swing legs forward and backward.",
      "hi": "पैरों को आगे-पीछे न झुलाएं।"
    },
    "alternative": {
      "en": "Hanging Knee Raise or Reverse Crunch",
      "hi": "हैंगिंग नी रेज या रिवर्स क्रंच"
    },
    "keywords": [
      "captains chair",
      "vertical knee raise",
      "abs",
      "lower abs",
      "roman chair"
    ]
  },
  {
    "id": "ab-wheel-rollout",
    "name": {
      "en": "Ab Wheel Rollout",
      "hi": "एब व्हील रोलआउट (Ab Wheel Rollout)"
    },
    "muscle": "Abs",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Ab Wheel",
    "description": {
      "en": "The supreme anti-extension core builder. Forces the abdominal wall to resist extreme extension forces under high tension.",
      "hi": "सर्वोच्च एंटी-एक्सटेंशन कोर व्यायाम। यह पेट की दीवार को भारी खिंचाव के खिलाफ मजबूत बनाए रखने पर मजबूर करता है।"
    },
    "startingPosition": {
      "en": "Kneel on a soft mat with ab wheel directly beneath your shoulders, gripping handles firmly.",
      "hi": "मुलायम मैट पर घुटने टेकें, व्हील को कंधों के ठीक नीचे रखें और हैंडल मजबूती से पकड़ें।"
    },
    "steps": [
      {
        "en": "Round your upper back slightly into a hollow position and brace core 100%.",
        "hi": "ऊपरी पीठ को हल्का गोल (हॉलो) करें और कोर को पूरी तरह कस लें।"
      },
      {
        "en": "Roll the wheel forward in a controlled straight path, extending hips and arms.",
        "hi": "कूल्हों और बाहों को फैलाते हुए पहिए को सीधे नियंत्रित तरीके से आगे रोल करें।"
      },
      {
        "en": "Descend as far forward as you can hold without your lower back sagging or arching.",
        "hi": "पीठ को बिना झुकाए जितना संभव हो उतना आगे जाएं।"
      },
      {
        "en": "Pull with your abdominal wall and lats to drag the wheel back beneath your chest.",
        "hi": "पहिए को वापस छाती के नीचे खींचने के लिए एब्स और लैट्स से जोर लगाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale slowly while rolling outward; exhale forcefully as you pull the wheel back.",
      "hi": "आगे रोल करते समय सांस लें; वापस खींचते समय जोर से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Letting hips sag toward the floor and hyper-extending the lumbar spine.",
        "hi": "कूल्हों को नीचे झुकने देना और पीठ को मोड़ना (बहुत खतरनाक)।"
      },
      {
        "en": "Pulling back with hips first like a dog rather than rolling with core.",
        "hi": "कोर के बजाय केवल कूल्हों को पीछे खींचना।"
      }
    ],
    "tips": [
      {
        "en": "Start by rolling out to a wall bumper that limits distance until core strength develops.",
        "hi": "ताकत बनने तक दूरी सीमित करने के लिए दीवार के सहारे शुरू करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Never allow lower back to cave or dip; stop immediately if back pinches.",
      "hi": "निचली पीठ को कभी नीचे न झुकने दें; चुभन होने पर तुरंत रुकें।"
    },
    "alternative": {
      "en": "Plank or Stability Ball Rollout",
      "hi": "प्लैंक या स्टेबिलिटी बॉल रोलआउट"
    },
    "keywords": [
      "ab wheel rollout",
      "ab roller",
      "core anti-extension",
      "six pack",
      "abs"
    ]
  },
  {
    "id": "plank",
    "name": {
      "en": "Elbow / Forearm Plank",
      "hi": "एल्बो प्लैंक (Elbow Forearm Plank)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Transversus Abdominis",
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Internal/External Obliques",
      "Glutes",
      "Shoulders"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "The classic isometric core exercise that trains total trunk rigidity, spinal stabilization, and deep transversus abdominis bracing.",
      "hi": "क्लासिक आइसोमेट्रिक कोर व्यायाम जो शरीर की स्थिरता, रीढ़ की सुरक्षा और गहरी कोर मांसपेशियों को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Lie face down, resting on forearms with elbows directly beneath shoulders. Extend legs back on tiptoes hip-width apart.",
      "hi": "पेट के बल लेटें, कोहनियों को कंधों के नीचे रखें और पैरों को पंजों के बल सीधा पीछे फैलाएं।"
    },
    "steps": [
      {
        "en": "Lift your hips and body off the floor, forming a perfectly straight line from head to heels.",
        "hi": "कूल्हों को उठाकर सिर से एड़ी तक बिल्कुल सीधी रेखा बनाएं।"
      },
      {
        "en": "Squeeze glutes tight, pull belly button into spine, and lock quads.",
        "hi": "ग्लूट्स को कसें, नाभि को रीढ़ की ओर खींचें और क्वाड्स टाइट रखें।"
      },
      {
        "en": "Actively pull elbows backward toward toes (RKC plank style) to amplify core tension.",
        "hi": "कोर तनाव को दोगुना करने के लिए कोहनियों को पंजों की ओर खींचने का बल लगाएं।"
      },
      {
        "en": "Hold rigid motionless posture for 30 to 60 seconds.",
        "hi": "30 से 60 सेकंड तक स्थिर मुद्रा में बने रहें।"
      }
    ],
    "breathing": {
      "en": "Take steady, shallow diaphragmatic breaths while maintaining full abdominal tension.",
      "hi": "पेट का तनाव बनाए रखते हुए सामान्य रूप से सांस लेते रहें।"
    },
    "mistakes": [
      {
        "en": "Sagging hips down toward the floor, straining the lumbar spine.",
        "hi": "कूल्हों को नीचे की ओर झुकने देना।"
      },
      {
        "en": "Piking hips up like a mountain to make the hold easier.",
        "hi": "कूल्हों को पहाड़ की तरह ऊपर उठाना।"
      }
    ],
    "tips": [
      {
        "en": "A high-tension 20-second active plank builds far more strength than a passive 2-minute saggy plank.",
        "hi": "2 मिनट के ढीले प्लैंक की तुलना में 20 सेकंड का टाइट प्लैंक कहीं अधिक ताकतवर होता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep neck in line with spine; look at the floor between your hands.",
      "hi": "गर्दन को रीढ़ की सीध में रखें; हाथों के बीच फर्श पर देखें।"
    },
    "alternative": {
      "en": "Ab Wheel Rollout or Dead Bug",
      "hi": "एब व्हील रोलआउट या डेड बग"
    },
    "keywords": [
      "plank",
      "forearm plank",
      "core",
      "abs",
      "isometric",
      "stability"
    ]
  },
  {
    "id": "side-plank",
    "name": {
      "en": "Side Plank",
      "hi": "साइड प्लैंक (Side Plank)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "External & Internal Obliques",
      "Quadratus Lumborum"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Transversus Abdominis",
      "Shoulders"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "Isolates the lateral core wall, obliques, and quadratus lumborum to protect the lower back from shear injury.",
      "hi": "ओब्लिक्स और कमर की सुरक्षात्मक मांसपेशियों को मजबूत करता है ताकि निचली पीठ चोट से सुरक्षित रहे।"
    },
    "startingPosition": {
      "en": "Lie on your side with legs straight and feet stacked or staggered. Prop upper body on your bottom elbow directly below shoulder.",
      "hi": "करवट लेकर लेटें, पैर सीधे रखें और नीचे की कोहनी को कंधे के ठीक नीचे रखकर शरीर उठाएं।"
    },
    "steps": [
      {
        "en": "Lift hips off the floor until your body forms a straight diagonal line from ankles to shoulders.",
        "hi": "कूल्हों को फर्श से उठाएं जब तक टखनों से कंधों तक एक सीधी विकर्ण रेखा न बन जाए।"
      },
      {
        "en": "Place top hand on hip or extend it straight up toward the ceiling.",
        "hi": "ऊपर का हाथ कमर पर रखें या छत की ओर सीधा उठाएं।"
      },
      {
        "en": "Brace obliques and glutes firmly to prevent hips from dropping toward floor.",
        "hi": "कूल्हों को नीचे गिरने से रोकने के लिए ओब्लिक्स और ग्लूट्स को टाइट रखें।"
      },
      {
        "en": "Hold for 30 to 45 seconds, then switch sides.",
        "hi": "30 से 45 सेकंड तक रोकें, फिर दूसरी तरफ दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Breathe in controlled, rhythmic breaths through the nose.",
      "hi": "नाक से नियंत्रित और शांत सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing top hip to roll forward or backward instead of staying stacked.",
        "hi": "ऊपरी कूल्हे को आगे या पीछे झुकने देना।"
      },
      {
        "en": "Letting lower hip sag toward the mat.",
        "hi": "निचले कूल्हे को मैट की ओर लटकने देना।"
      }
    ],
    "tips": [
      {
        "en": "Squeeze the bottom glute hard to keep hips pushed forward and aligned.",
        "hi": "कूल्हों को सीधा रखने के लिए नीचे के ग्लूट को जोर से कसें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Stack elbow directly underneath shoulder to protect the joint.",
      "hi": "कंधे की सुरक्षा के लिए कोहनी को सीधे कंधे के नीचे रखें।"
    },
    "alternative": {
      "en": "Pallof Press or Russian Twists",
      "hi": "पैलोफ प्रेस या रूसी ट्विस्ट"
    },
    "keywords": [
      "side plank",
      "obliques",
      "core stability",
      "abs",
      "lateral core"
    ]
  },
  {
    "id": "dead-bug",
    "name": {
      "en": "Dead Bug",
      "hi": "डेड बग (Dead Bug Core Exercise)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Transversus Abdominis",
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Hip Flexors",
      "Pelvic Floor"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "The gold-standard physical therapy and core bracing movement that teaches lumbo-pelvic control with contra-lateral limb movement.",
      "hi": "फिजिकल थेरेपी का स्वर्ण-मानक व्यायाम जो विपरीत हाथ-पैर के साथ रीढ़ और पेल्विस को स्थिर रखना सिखाता है।"
    },
    "startingPosition": {
      "en": "Lie flat on your back with arms reaching straight up toward the ceiling and knees bent at 90 degrees above hips (tabletop).",
      "hi": "पीठ के बल लेटें, हाथ छत की ओर सीधे और घुटने कूल्हों के ऊपर 90 डिग्री पर मुड़े हों।"
    },
    "steps": [
      {
        "en": "Flatten your lower back firmly into the floor—there must be zero gap under lumbar spine.",
        "hi": "अपनी निचली पीठ को फर्श पर पूरी तरह सपाट रखें—पीठ के नीचे कोई जगह न रहे।"
      },
      {
        "en": "Slowly lower your right arm behind head while simultaneously extending left leg forward.",
        "hi": "दाएं हाथ को सिर के पीछे ले जाएं और साथ ही बाएं पैर को आगे सीधा फैलाएं।"
      },
      {
        "en": "Hover arm and heel 1-2 inches above floor without allowing lower back to arch.",
        "hi": "पीठ को बिना उठाए हाथ और एड़ी को फर्श से 1-2 इंच ऊपर रोकें।"
      },
      {
        "en": "Return to center with control, then alternate to left arm and right leg.",
        "hi": "नियंत्रण के साथ बीच में आएं, फिर दूसरी तरफ दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale through pursed lips as limbs extend; inhale as they return to center.",
      "hi": "हाथ-पैर फैलाते समय सांस छोड़ें; केंद्र में आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing lower back to arch off the floor as the leg straightens out.",
        "hi": "पैर सीधा करते समय निचली पीठ का फर्श से ऊपर उठना।"
      }
    ],
    "tips": [
      {
        "en": "Imagine crushing a grape under your lower back for the entire set.",
        "hi": "कल्पना करें कि आपकी निचली पीठ के नीचे एक अंगूर दबा हुआ है।"
      }
    ],
    "safetyPrecautions": {
      "en": "If your back arches, shorten the range of leg extension.",
      "hi": "यदि पीठ उठे, तो पैर को पूरा सीधा न फैलाएं।"
    },
    "alternative": {
      "en": "Hollow Body Hold or Bird Dog",
      "hi": "हॉलो बॉडी होल्ड या बर्ड डॉग"
    },
    "keywords": [
      "dead bug",
      "core bracing",
      "transversus abdominis",
      "rehab",
      "spine health"
    ]
  },
  {
    "id": "hollow-body-hold",
    "name": {
      "en": "Hollow Body Hold",
      "hi": "हॉलो बॉडी होल्ड (Hollow Body Hold)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Obliques",
      "Quadriceps"
    ],
    "type": "isolation",
    "difficulty": "Advanced",
    "equipment": "Bodyweight",
    "description": {
      "en": "The cornerstone gymnastic strength hold that creates unmatched abdominal bracing, full-body tension, and a rock-hard core.",
      "hi": "जिम्नास्टिक का मुख्य व्यायाम जो कोर में बेजोड़ कसाव, पूरे शरीर में तनाव और फौलादी एब्स बनाता है।"
    },
    "startingPosition": {
      "en": "Lie on your back with arms extended past your ears and legs glued together completely straight.",
      "hi": "पीठ के बल लेटें, हाथ कानों के पीछे सीधे और पैर आपस में मिलाकर सीधे रखें।"
    },
    "steps": [
      {
        "en": "Tilt pelvis posteriorly to crush lumbar spine into the floor.",
        "hi": "निचली पीठ को फर्श पर मजबूती से दबाने के लिए पेल्विस को पीछे झुकाएं।"
      },
      {
        "en": "Simultaneously lift shoulder blades, head, and straight legs 4-6 inches off the floor.",
        "hi": "कंधे, सिर और सीधे पैरों को फर्श से 4-6 इंच ऊपर उठाएं।"
      },
      {
        "en": "Shape your entire body into a gentle banana or shallow bowl curve.",
        "hi": "अपने पूरे शरीर को केले या उथले कटोरे के आकार में ढालें।"
      },
      {
        "en": "Hold completely rigid for 20 to 45 seconds without letting lower back lift.",
        "hi": "20 से 45 सेकंड तक पूरी तरह स्थिर बने रहें।"
      }
    ],
    "breathing": {
      "en": "Take shallow, rapid breaths from the upper chest while keeping core locked tight.",
      "hi": "कोर को टाइट रखते हुए छाती से छोटी और नियमित सांसें लें।"
    },
    "mistakes": [
      {
        "en": "Lower back arching off the floor—this defeats the purpose and stresses spine.",
        "hi": "निचली पीठ का फर्श से उठना।"
      }
    ],
    "tips": [
      {
        "en": "Regress by bending knees to 90 degrees or bringing arms forward to hips if holding is difficult.",
        "hi": "शुरुआत में घुटने मोड़कर या हाथों को आगे रखकर अभ्यास करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Maintain posterior pelvic tilt 100% of the time.",
      "hi": "पूरे समय पेल्विस को सही स्थिति में रखें।"
    },
    "alternative": {
      "en": "Dead Bug or Plank",
      "hi": "डेड बग या प्लैंक"
    },
    "keywords": [
      "hollow body hold",
      "gymnastics core",
      "abs",
      "transversus abdominis",
      "core bracing"
    ]
  },
  {
    "id": "mountain-climbers",
    "name": {
      "en": "Mountain Climbers (Core & Conditioning)",
      "hi": "माउंटेन क्लाइम्बर्स (Mountain Climbers)"
    },
    "muscle": "Abs",
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
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "A dynamic core and metabolic conditioning exercise done in a push-up plank, building core endurance and burning calories.",
      "hi": "पुश-अप प्लैंक स्थिति में किया जाने वाला गतिशील कोर और कार्डियो व्यायाम जो सहनशक्ति और कैलोरी बर्न बढ़ाता है।"
    },
    "startingPosition": {
      "en": "Assume a high push-up plank position with hands under shoulders, core braced, and feet hip-width apart.",
      "hi": "हाथों को कंधों के नीचे रखकर हाई पुश-अप प्लैंक में आएं, कोर टाइट और पैर कूल्हे की चौड़ाई पर रखें।"
    },
    "steps": [
      {
        "en": "Drive right knee explosively up toward your chest without touching foot to floor.",
        "hi": "पैर को फर्श छुए बिना दाएं घुटने को तेजी से छाती की ओर लाएं।"
      },
      {
        "en": "Quickly step right foot back while simultaneously driving left knee up toward chest.",
        "hi": "दाएं पैर को पीछे ले जाते हुए बाएं घुटने को तुरंत छाती की ओर लाएं।"
      },
      {
        "en": "Alternate legs in a rapid, fluid running motion.",
        "hi": "दौड़ने की तरह तेजी और लय के साथ पैरों को बारी-बारी चलाएं।"
      },
      {
        "en": "Keep hips low and level—do not allow hips to bounce into the air.",
        "hi": "कूल्हों को नीचे और स्थिर रखें—उन्हें हवा में उछलने न दें।"
      }
    ],
    "breathing": {
      "en": "Maintain rapid, rhythmic breathing matching your running cadence.",
      "hi": "कदमों की गति के साथ तालमेल बिठाकर तेज और लयबद्ध सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bouncing hips up and down toward the ceiling.",
        "hi": "कूल्हों को बार-बार ऊपर-नीचे उछालना।"
      },
      {
        "en": "Letting hands drift forward ahead of shoulders.",
        "hi": "हाथों को कंधों से आगे खिसकने देना।"
      }
    ],
    "tips": [
      {
        "en": "Perform slow and controlled for pure ab hypertrophy, or fast for metabolic conditioning.",
        "hi": "एब्स के लिए धीमा और नियंत्रित करें, कार्डियो के लिए तेज करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep wrists aligned under shoulders.",
      "hi": "कलाइयों को कंधों के नीचे रखें।"
    },
    "alternative": {
      "en": "Plank or Bicycle Crunch",
      "hi": "प्लैंक या बाइसिकिल क्रंच"
    },
    "keywords": [
      "mountain climbers",
      "abs",
      "core",
      "cardio",
      "hiit"
    ]
  },
  {
    "id": "v-ups",
    "name": {
      "en": "V-Ups (Jackknife Crunch)",
      "hi": "वी-अप्स (V-Ups Jackknife Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis (Total)"
    ],
    "secondaryMuscles": [
      "Hip Flexors",
      "Obliques"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Bodyweight",
    "description": {
      "en": "Simultaneously lifts the upper torso and straight legs to fold the body into a sharp V-shape, hammering upper and lower abs together.",
      "hi": "ऊपरी धड़ और सीधे पैरों को एक साथ उठाकर शरीर को वी-आकार में मोड़ता है, जिससे पूरे एब्स पर गहरा प्रभाव पड़ता है।"
    },
    "startingPosition": {
      "en": "Lie on your back on a mat with legs straight together and arms extended overhead on the floor.",
      "hi": "मैट पर लेटें, पैर सीधे जुड़े हों और हाथ सिर के ऊपर फर्श पर फैले हों।"
    },
    "steps": [
      {
        "en": "In one explosive, coordinated movement, flex abs to raise torso and straight legs simultaneously.",
        "hi": "एक साथ धड़ और सीधे पैरों को ऊपर उठाने के लिए एब्स से जोर लगाएं।"
      },
      {
        "en": "Reach your fingertips toward your toes at the peak, balancing on your sit bones.",
        "hi": "शीर्ष पर उंगलियों से पंजों को छूने की कोशिश करें, कूल्हों की हड्डियों पर संतुलन बनाएं।"
      },
      {
        "en": "Squeeze the 'V' shape for 1 solid second.",
        "hi": "वी-आकार में 1 सेकंड तक मजबूती से रुकें।"
      },
      {
        "en": "Lower both torso and legs under strict control back toward the floor without slamming.",
        "hi": "बिना पटके धड़ और पैरों को नियंत्रित तरीके से वापस नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale while lying flat; exhale forcefully as you fold into the V.",
      "hi": "नीचे लेटते समय सांस लें; वी-शेप में ऊपर आते समय तेजी से सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending knees excessively to cheat the movement.",
        "hi": "घुटनों को अत्यधिक मोड़कर चीटिंग करना।"
      },
      {
        "en": "Throwing arms with momentum rather than curling with the abs.",
        "hi": "एब्स के बजाय बाहों को झटके से आगे फेंकना।"
      }
    ],
    "tips": [
      {
        "en": "If hamstrings are tight, a slight soft knee bend is acceptable.",
        "hi": "यदि हैमस्ट्रिंग टाइट हों तो घुटनों को हल्का मोड़ सकते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Lower slowly to prevent lower back slamming the floor.",
      "hi": "पीठ को फर्श पर टकराने से बचाने के लिए धीरे-धीरे नीचे आएं।"
    },
    "alternative": {
      "en": "Toe Touches or Standard Crunch",
      "hi": "टो टचेस या स्टैंडर्ड क्रंच"
    },
    "keywords": [
      "v-ups",
      "v ups",
      "jackknife",
      "abs",
      "six pack",
      "core"
    ]
  },
  {
    "id": "toe-touches",
    "name": {
      "en": "Vertical Leg Toe Touches",
      "hi": "वर्टिकल लेग टो टचेस (Vertical Toe Touches)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Upper Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Lower Rectus Abdominis",
      "Hamstrings"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "With legs held straight up toward the ceiling, you curl the thoracic spine to reach for your toes, concentrating work on the upper abs.",
      "hi": "पैरों को सीधा छत की ओर रखकर उंगलियों से पंजों को छूने का प्रयास किया जाता है, जो ऊपरी एब्स पर ध्यान केंद्रित करता है।"
    },
    "startingPosition": {
      "en": "Lie flat on your back and raise both legs straight up toward ceiling at a 90-degree angle to torso.",
      "hi": "पीठ के बल लेटें और दोनों पैरों को 90 डिग्री के कोण पर छत की ओर सीधा उठाएं।"
    },
    "steps": [
      {
        "en": "Extend arms straight up toward your feet.",
        "hi": "हाथों को सीधा पैरों की ओर ऊपर उठाएं।"
      },
      {
        "en": "Crunch your shoulder blades off the floor and reach your fingers to touch your toes/ankles.",
        "hi": "कंधों को फर्श से ऊपर उठाएं और उंगलियों से पंजों या टखनों को छूने की कोशिश करें।"
      },
      {
        "en": "Hold the peak contraction at the top for 1 full second.",
        "hi": "शीर्ष पर 1 सेकंड का ठहराव रखें।"
      },
      {
        "en": "Lower shoulder blades back down with control while keeping legs vertical.",
        "hi": "पैरों को सीधा रखते हुए कंधों को धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale reaching for toes; inhale lowering upper back.",
      "hi": "पंजों की ओर बढ़ते समय सांस छोड़ें; नीचे आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Dropping legs forward or swinging them to meet hands.",
        "hi": "पैरों को आगे गिराना या हाथों की ओर झुलाना।"
      }
    ],
    "tips": [
      {
        "en": "Focus entirely on lifting your chest toward the ceiling rather than forward toward knees.",
        "hi": "घुटनों के बजाय छत की ओर छाती उठाने पर ध्यान दें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep neck neutral; do not pull with chin.",
      "hi": "गर्दन को न्यूट्रल रखें।"
    },
    "alternative": {
      "en": "Standard Floor Crunch or Decline Crunch",
      "hi": "स्टैंडर्ड फ्लोर क्रंच या डिक्लाइन क्रंच"
    },
    "keywords": [
      "toe touches",
      "vertical toe touches",
      "abs",
      "upper abs",
      "core"
    ]
  },
  {
    "id": "pallof-press",
    "name": {
      "en": "Cable / Band Pallof Press",
      "hi": "पैलॉफ प्रेस (Cable Pallof Press)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Internal & External Obliques",
      "Transversus Abdominis"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Glutes",
      "Rectus Abdominis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Cables",
    "description": {
      "en": "The premier anti-rotation exercise that bulletproofs the spine by training core musculature to resist rotational torque.",
      "hi": "सर्वश्रेष्ठ एंटी-रोटेशन व्यायाम जो रीढ़ को मजबूत करता है और शरीर को घूमने से रोकने की ताकत देता है।"
    },
    "startingPosition": {
      "en": "Stand perpendicular to a cable pulley set at chest height. Grasp handle with both hands at center of chest in athletic stance.",
      "hi": "छाती की ऊंचाई पर केबल पुली के लंबवत खड़े हों। हैंडल को दोनों हाथों से छाती के बीच में पकड़ें।"
    },
    "steps": [
      {
        "en": "Set feet shoulder-width, soft knees, glutes and abs locked.",
        "hi": "पैरों को कंधे की चौड़ाई पर रखें, घुटने हल्के मुड़े, ग्लूट्स और एब्स टाइट रखें।"
      },
      {
        "en": "Press the handle straight forward in front of your chest until arms are fully extended.",
        "hi": "हैंडल को छाती के आगे सीधा तब तक धकेलें जब तक बाहें पूरी सीधी न हो जाएं।"
      },
      {
        "en": "Resist the lateral pull of the cable—do not allow torso or hips to twist.",
        "hi": "केबल के खिंचाव का विरोध करें—धड़ या कूल्हों को मुड़ने न दें।"
      },
      {
        "en": "Hold extended position for 2-3 seconds, then slowly draw hands back to chest.",
        "hi": "फैली हुई स्थिति में 2-3 सेकंड रोकें, फिर धीरे-धीरे हाथों को छाती पर वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale as you press arms forward; inhale as you bring hands back to chest.",
      "hi": "बाहें आगे धकेलते समय सांस छोड़ें; वापस लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Allowing the cable to pull your shoulders and twist your torso toward the machine.",
        "hi": "केबल को अपने कंधों और धड़ को मशीन की ओर मोड़ने देना।"
      }
    ],
    "tips": [
      {
        "en": "The longer your arms extend, the greater the rotational torque lever becomes.",
        "hi": "हाथ जितने आगे फैलेंगे, कोर पर उतना ही ज्यादा तनाव पड़ेगा।"
      }
    ],
    "safetyPrecautions": {
      "en": "Use moderate load; this is a control exercise, not a max weight lift.",
      "hi": "मध्यम भार का उपयोग करें; यह नियंत्रण का व्यायाम है।"
    },
    "alternative": {
      "en": "Side Plank or Resistance Band Pallof Press",
      "hi": "साइड प्लैंक या बैंड पैलॉफ प्रेस"
    },
    "keywords": [
      "pallof press",
      "anti rotation",
      "obliques",
      "core stability",
      "spine health"
    ]
  },
  {
    "id": "russian-twist",
    "name": {
      "en": "Seated Russian Twist",
      "hi": "सीटेड रशियन ट्विस्ट (Russian Twists)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "External Obliques",
      "Internal Obliques"
    ],
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "A rotational core movement performed in a V-sit position that engages obliques and hip flexors under dynamic twisting.",
      "hi": "वी-सिट स्थिति में किया जाने वाला घूर्णन व्यायाम जो ओब्लिक्स और कोर को घुमावदार गति में मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Sit on a mat with knees bent, heels elevated slightly off the floor, and torso leaned back 45 degrees holding a dumbbell or medicine ball.",
      "hi": "मैट पर बैठें, घुटने मुड़े हों, एड़ियां हल्की उठी हों और धड़ 45 डिग्री पीछे झुका हो। डंबल दोनों हाथों में पकड़ें।"
    },
    "steps": [
      {
        "en": "Brace your core tight in the 45-degree V-sit position.",
        "hi": "45 डिग्री वी-सिट स्थिति में अपने कोर को टाइट रखें।"
      },
      {
        "en": "Rotate your torso smoothly to the right, tapping the weight lightly beside your right hip.",
        "hi": "धड़ को दाईं ओर घुमाएं और डंबल को हल्के से कूल्हे के पास लाएं।"
      },
      {
        "en": "Rotate through center to the left side, tapping the weight beside left hip.",
        "hi": "बीच से होते हुए बाईं ओर घूमें और बाईं तरफ डंबल लाएं।"
      },
      {
        "en": "Perform controlled, rhythmic twists without swinging arms wildly.",
        "hi": "बाहों को झटके से घुमाए बिना नियंत्रित और लयबद्ध ट्विस्ट करें।"
      }
    ],
    "breathing": {
      "en": "Exhale on each twist to the side; inhale as you rotate through the middle.",
      "hi": "प्रत्येक तरफ घूमते समय सांस छोड़ें; बीच में आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Only moving arms side to side without rotating the actual ribcage and shoulders.",
        "hi": "कंधों और पसलियों को घुमाए बिना केवल हाथों को हिलाना।"
      },
      {
        "en": "Rounding the lower back into a slouch.",
        "hi": "निचली पीठ को झुकाकर ढीला छोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Follow the weight with your eyes and chest so your whole torso rotates.",
        "hi": "डंबल को अपनी आंखों और छाती से ट्रैक करें ताकि पूरा धड़ घूमे।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep chest proud and spine neutral to protect lower back discs.",
      "hi": "पीठ की सुरक्षा के लिए छाती चौड़ी और रीढ़ सीधी रखें।"
    },
    "alternative": {
      "en": "Bicycle Crunch or Pallof Press",
      "hi": "बाइसिकिल क्रंच या पैलॉफ प्रेस"
    },
    "keywords": [
      "russian twist",
      "obliques",
      "rotational core",
      "v sit",
      "six pack"
    ]
  },
  {
    "id": "weighted-sit-ups",
    "name": {
      "en": "Weighted Sit-Ups",
      "hi": "वेटेड सिट-अप्स (Weighted Sit-Ups)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Chest"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Full range of motion sit-ups overloaded with a weight plate or dumbbell, building thick, dense abdominal muscle blocks.",
      "hi": "वेट प्लेट या डंबल के साथ पूरे दायरे में किया जाने वाला सिट-अप, जो एब्स को घना और मजबूत बनाता है।"
    },
    "startingPosition": {
      "en": "Lie on your back with knees bent at 90 degrees, feet anchored securely. Hold a weight plate or dumbbell firmly against your upper chest.",
      "hi": "पीठ के बल लेटें, घुटने 90 डिग्री मुड़े हों, पैर टिके हों। छाती पर वेट प्लेट या डंबल मजबूती से पकड़ें।"
    },
    "steps": [
      {
        "en": "Tuck chin slightly and curl shoulders off the mat.",
        "hi": "ठुड्डी को हल्का दबाएं और कंधों को मैट से ऊपर उठाएं।"
      },
      {
        "en": "Curl your entire spine up into a full seated position, keeping the weight pinned to chest.",
        "hi": "वजन को छाती पर रखते हुए पूरी रीढ़ को मोड़कर बैठने की स्थिति में आएं।"
      },
      {
        "en": "Touch elbows to knees at the top.",
        "hi": "शीर्ष पर कोहनियों से घुटनों को छुएं।"
      },
      {
        "en": "Lower your spine down vertebrae by vertebrae over 3 controlled seconds.",
        "hi": "3 सेकंड में धीरे-धीरे एक-एक कशेरुका को मैट पर वापस लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale forcefully as you curl up to seated; inhale as you roll back down.",
      "hi": "ऊपर उठते समय सांस छोड़ें; नीचे जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Throwing the weight plate forward to generate momentum.",
        "hi": "वजन को आगे फेंककर गति बनाना।"
      },
      {
        "en": "Hyperextending and slamming the lower back onto the floor.",
        "hi": "निचली पीठ को फर्श पर झटके से पटकना।"
      }
    ],
    "tips": [
      {
        "en": "Hold the plate behind head for advanced leverage overload once chest loading is mastered.",
        "hi": "छाती पर भार आसान होने पर प्लेट को सिर के पीछे पकड़ें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure feet are anchored securely under heavy loads.",
      "hi": "भारी भार में सुनिश्चित करें कि पैर अच्छी तरह टिके हों।"
    },
    "alternative": {
      "en": "Decline Crunch or Cable Crunch",
      "hi": "डिक्लाइन क्रंच या केबल क्रंच"
    },
    "keywords": [
      "weighted sit ups",
      "abs",
      "core",
      "six pack",
      "heavy abs"
    ]
  },
  {
    "id": "dragon-flag",
    "name": {
      "en": "Dragon Flag (Bruce Lee Ab Exercise)",
      "hi": "ड्रैगन फ्लैग (Bruce Lee Dragon Flag)"
    },
    "muscle": "Abs",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Bodyweight",
    "description": {
      "en": "The legendary Bruce Lee core exercise. The entire body is suspended as a straight rigid plank off only the upper back and shoulders.",
      "hi": "ब्रूस ली का प्रसिद्ध कोर व्यायाम। पूरा शरीर केवल ऊपरी पीठ और कंधों के सहारे एक सीधी छड़ की तरह हवा में रहता है।"
    },
    "startingPosition": {
      "en": "Lie on a sturdy flat bench, reaching overhead to grip the bench edges firmly behind your head with both hands.",
      "hi": "समतल बेंच पर लेटें, सिर के पीछे दोनों हाथों से बेंच के किनारों को मजबूती से पकड़ें।"
    },
    "steps": [
      {
        "en": "Roll your hips up and drive your entire body straight up into a vertical candle position, balancing only on your upper back.",
        "hi": "कूल्हों को ऊपर उठाएं और पूरे शरीर को ऊपर सीधा करें, केवल ऊपरी पीठ पर संतुलन बनाएं।"
      },
      {
        "en": "Lock your knees, squeeze glutes, and brace your abdominal wall 100%.",
        "hi": "घुटनों को सीधा रखें, ग्लूट्स कसें और एब्स को पूरी ताकत से टाइट रखें।"
      },
      {
        "en": "Lower your entire body as one completely rigid board down toward the bench.",
        "hi": "अपने पूरे शरीर को एक सीधी लकड़ी के तख्ते की तरह धीरे-धीरे बेंच की ओर नीचे लाएं।"
      },
      {
        "en": "Hover just an inch above the bench without touching, then pull back up or reset.",
        "hi": "बेंच से ठीक एक इंच ऊपर रोकें, फिर वापस ऊपर खींचें।"
      }
    ],
    "breathing": {
      "en": "Take a deep belly breath and brace at top; exhale slowly through pursed lips during descent.",
      "hi": "शीर्ष पर गहरी सांस लेकर रोकें; नीचे आते समय धीरे-धीरे सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bending at the hips and sagging the buttocks down first (breaking the straight line).",
        "hi": "कूल्हों से मुड़कर नितंबों को पहले नीचे गिराना (सीधी रेखा टूटना)।"
      }
    ],
    "tips": [
      {
        "en": "Master the negative (eccentric-only) lowering phase first before attempting the concentric lift.",
        "hi": "ऊपर उठने से पहले केवल धीरे-धीरे नीचे आने (नेगेटिव) का अभ्यास करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Only attempt if you possess advanced core strength and a healthy spine.",
      "hi": "उन्नत कोर ताकत होने पर ही इसका प्रयास करें।"
    },
    "alternative": {
      "en": "Hanging Leg Raise or Ab Wheel Rollout",
      "hi": "हैंगिंग लेग रेज या एब व्हील रोलआउट"
    },
    "keywords": [
      "dragon flag",
      "bruce lee abs",
      "calisthenics core",
      "advanced abs",
      "lever"
    ]
  },
  {
    "id": "stability-ball-crunch",
    "name": {
      "en": "Stability Ball Crunch",
      "hi": "स्टेबिलिटी बॉल क्रंच (Stability Ball Crunch)"
    },
    "muscle": "Abs",
    "primaryMuscles": [
      "Rectus Abdominis"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Transversus Abdominis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Bodyweight",
    "description": {
      "en": "The curved surface of the exercise ball allows full lumbar hyperextension, pre-stretching the rectus abdominis for maximum range and contraction.",
      "hi": "गेंद की घुमावदार सतह पीठ को पूरा खिंचाव देती है, जिससे एब्स को पूरी गति में अधिकतम संकुचन मिलता है।"
    },
    "startingPosition": {
      "en": "Sit on a stability ball, then walk feet forward until lower and mid-back are supported by the curve of the ball. Feet flat on floor, knees at 90 degrees.",
      "hi": "गेंद पर बैठें, पैरों को आगे बढ़ाएं जब तक निचली पीठ गेंद के सहारे न आ जाए। पैर फर्श पर टिके हों।"
    },
    "steps": [
      {
        "en": "Lower your head and shoulders back over the ball curve into a gentle full abdominal stretch.",
        "hi": "एब्स में खिंचाव के लिए सिर और कंधों को गेंद के ऊपर पीछे ले जाएं।"
      },
      {
        "en": "Exhale and curl your ribcage forward and up toward your pelvis.",
        "hi": "सांस छोड़ें और अपनी पसलियों को आगे और ऊपर कूल्हों की ओर मोड़ें।"
      },
      {
        "en": "Squeeze the rectus abdominis intensely at peak elevation for 1-2 seconds.",
        "hi": "शीर्ष पर 1-2 सेकंड के लिए एब्स को गहराई से सिकोड़ें।"
      },
      {
        "en": "Slowly extend back over the curve to return to the stretched position.",
        "hi": "धीरे-धीरे वापस पीछे खिंचाव में आएं।"
      }
    ],
    "breathing": {
      "en": "Inhale expanding over the ball; exhale curling upward.",
      "hi": "गेंद पर पीछे फैलते समय सांस लें; ऊपर आते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Bouncing hips up and down on the ball to generate elastic momentum.",
        "hi": "गेंद पर कूल्हों को उछालकर गति बनाना।"
      }
    ],
    "tips": [
      {
        "en": "The extended stretch at the bottom recruits up to 30% more muscle fibers than a flat floor crunch.",
        "hi": "नीचे का खिंचाव फर्श के क्रंच की तुलना में 30% अधिक मांसपेशी फाइबर को सक्रिय करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure the exercise ball is inflated properly and feet have good traction.",
      "hi": "सुनिश्चित करें कि गेंद में सही हवा हो और पैर फिसलें नहीं।"
    },
    "alternative": {
      "en": "Standard Floor Crunch or Decline Bench Crunch",
      "hi": "स्टैंडर्ड फ्लोर क्रंच या डिक्लाइन बेंच क्रंच"
    },
    "keywords": [
      "stability ball crunch",
      "swiss ball abs",
      "core stretch",
      "six pack",
      "abs"
    ]
  },
  {
    "id": "barbell-wrist-curl",
    "name": {
      "en": "Seated Barbell Wrist Curl (Over-Bench)",
      "hi": "सीटेड बारबेल रिस्ट कर्ल (Barbell Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Flexor Carpi Radialis",
      "Flexor Carpi Ulnaris",
      "Flexor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Pronator Teres"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Barbell",
    "description": {
      "en": "The standard mass builder for inner forearm flexors, targeting wrist flexion with forearms pinned to bench for isolation.",
      "hi": "कलाई के फ्लेक्सर्स के विकास के लिए क्लासिक व्यायाम, जिसमें कलाई को मोड़कर अग्रभाग के भीतरी हिस्से को ट्रेन किया जाता है।"
    },
    "startingPosition": {
      "en": "Kneel beside a flat bench with forearms resting flat across the bench pad, palms facing up, wrists hanging just past the edge.",
      "hi": "बेंच के पास घुटने टेकें, अग्रभाग को बेंच पर रखें, हथेलियां ऊपर की ओर हों और कलाइयां किनारे से आगे निकली हों।"
    },
    "steps": [
      {
        "en": "Hold barbell with an underhand grip shoulder-width apart.",
        "hi": "कंधे की चौड़ाई पर अंडरहैंड ग्रिप से बारबेल पकड़ें।"
      },
      {
        "en": "Slowly lower the barbell by extending wrists downward as far as comfortable.",
        "hi": "कलाइयों को जितना संभव हो उतना नीचे झुकाकर बारबेल को नीचे लाएं।"
      },
      {
        "en": "Allow the bar to roll down into fingertips for an extended stretch.",
        "hi": "गहरे खिंचाव के लिए बार को उंगलियों के पोरों तक लुढ़कने दें।"
      },
      {
        "en": "Curl fingers back up into the palm, then flex wrists aggressively toward the ceiling.",
        "hi": "उंगलियों को हथेली में समेटें, फिर कलाइयों को छत की ओर जोर से मोड़ें।"
      },
      {
        "en": "Squeeze the inner forearms at peak flexion for 1 full second.",
        "hi": "शीर्ष पर 1 सेकंड के लिए भीतरी अग्रभाग को मजबूती से सिकोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale as you lower and roll to fingertips; exhale forcefully curling wrists up.",
      "hi": "नीचे लाते समय सांस लें; कलाई ऊपर मोड़ते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Lifting elbows off the bench to assist the movement with biceps momentum.",
        "hi": "बाइसेप्स के सहारे बार उठाने के लिए कोहनियों को बेंच से उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Keep forearms completely flush against the bench padding to ensure 100% wrist isolation.",
        "hi": "कलाइयों को पूरी तरह अलग रखने के लिए अग्रभाग को बेंच से सटाकर रखें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not use excessively heavy weight that compromises wrist joint alignment.",
      "hi": "कलाइयों पर असामान्य दबाव डालने वाले अत्यधिक भारी वजन से बचें।"
    },
    "alternative": {
      "en": "Dumbbell Wrist Curl or Behind-the-Back Wrist Curl",
      "hi": "डंबल रिस्ट कर्ल या बिहाइंड-द-बैक रिस्ट कर्ल"
    },
    "keywords": [
      "barbell wrist curl",
      "forearms",
      "flexors",
      "wrist curl",
      "grip"
    ]
  },
  {
    "id": "barbell-reverse-wrist-curl",
    "name": {
      "en": "Barbell Reverse Wrist Curl (Extensors)",
      "hi": "बारबेल रिवर्स रिस्ट कर्ल (Reverse Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Extensor Carpi Radialis",
      "Extensor Carpi Ulnaris",
      "Extensor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Barbell",
    "description": {
      "en": "Builds outer forearm thickness and strengthens wrist extensors to prevent tennis elbow and balance wrist flexion strength.",
      "hi": "बाहरी अग्रभाग को मोटा बनाता है और कलाई के एक्सटेंसर्स को मजबूत करके टेनिस एल्बो से बचाता है।"
    },
    "startingPosition": {
      "en": "Kneel beside a flat bench with forearms resting across pad, palms facing downward (pronated), wrists hanging off edge.",
      "hi": "बेंच पर अग्रभाग रखें, हथेलियां नीचे की ओर (ओवरहैंड) हों और कलाइयां किनारे से बाहर निकली हों।"
    },
    "steps": [
      {
        "en": "Grip a light barbell with hands shoulder-width apart.",
        "hi": "हल्की बारबेल को कंधे की चौड़ाई पर पकड़ें।"
      },
      {
        "en": "Lower the bar downward by flexing wrists toward the floor.",
        "hi": "कलाइयों को फर्श की ओर झुकाकर बार को नीचे लाएं।"
      },
      {
        "en": "Extend wrists straight upward against gravity as high as possible.",
        "hi": "गुरुत्वाकर्षण के खिलाफ कलाइयों को जितना हो सके उतना ऊपर सीधा उठाएं।"
      },
      {
        "en": "Squeeze the top extensor muscles hard for a counted 2 seconds.",
        "hi": "शीर्ष एक्सटेंसर मांसपेशियों को 2 सेकंड तक जोर से सिकोड़ें।"
      },
      {
        "en": "Lower back down under strict 3-second eccentric tempo.",
        "hi": "3 सेकंड के धीमे नियंत्रण के साथ वापस नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale while lowering wrists; exhale while curling wrists upward.",
      "hi": "नीचे जाते समय सांस लें; कलाई ऊपर उठाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Using too heavy a barbell, causing wrist hyperextension pain or jerky half-reps.",
        "hi": "बहुत भारी वजन लेना जिससे दर्द हो या आधे-अधूरे रैप्स हों।"
      }
    ],
    "tips": [
      {
        "en": "Extensor muscles are smaller than flexors; focus on strict high-rep (15-20 reps) pump sets.",
        "hi": "एक्सटेंसर छोटी मांसपेशियां हैं; 15-20 रैप्स के सेट अधिक प्रभावी होते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Start with an empty bar or light preloaded barbell.",
      "hi": "खाली बार या हल्के वजन से शुरुआत करें।"
    },
    "alternative": {
      "en": "Dumbbell Reverse Wrist Curl",
      "hi": "डंबल रिवर्स रिस्ट कर्ल"
    },
    "keywords": [
      "reverse wrist curl",
      "extensors",
      "forearms",
      "tennis elbow",
      "grip"
    ]
  },
  {
    "id": "dumbbell-wrist-curl",
    "name": {
      "en": "Seated Dumbbell Wrist Curl",
      "hi": "सीटेड डंबल रिस्ट कर्ल (Dumbbell Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Wrist Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Finger Flexors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Unilateral wrist curl that allows each wrist to move through its natural anatomical plane of motion, fixing left-to-right forearm imbalances.",
      "hi": "एक-एक हाथ से किया जाने वाला कलाई कर्ल जो दोनों अग्रभागों के असंतुलन को दूर करता है।"
    },
    "startingPosition": {
      "en": "Sit on a flat bench with your right forearm resting flat on your right thigh, palm facing up, wrist past the knee.",
      "hi": "बेंच पर बैठें, दाहिने अग्रभाग को दाहिनी जांघ पर रखें, हथेली ऊपर हो और कलाई घुटने से आगे निकली हो।"
    },
    "steps": [
      {
        "en": "Hold dumbbell in fingers and lower it toward the floor into full extension.",
        "hi": "डंबल को उंगलियों में पकड़ें और पूरा नीचे खिंचाव में ले जाएं।"
      },
      {
        "en": "Let the dumbbell roll open onto your finger tips.",
        "hi": "डंबल को उंगलियों के पोरों तक लुढ़कने दें।"
      },
      {
        "en": "Roll fingers closed and curl wrist upward toward your chest.",
        "hi": "उंगलियां बंद करें और कलाई को ऊपर छाती की दिशा में मोड़ें।"
      },
      {
        "en": "Pause at peak contraction for 1 second, then lower steadily.",
        "hi": "शीर्ष पर 1 सेकंड रुकें, फिर धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale on the eccentric descent; exhale curling the dumbbell up.",
      "hi": "नीचे आते समय सांस लें; ऊपर कर्ल करते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Letting the forearm lift off the thigh during the curl.",
        "hi": "कर्ल के दौरान अग्रभाग को जांघ से उठने देना।"
      }
    ],
    "tips": [
      {
        "en": "The dumbbell allows subtle wrist supination at top for maximum flexor fiber engagement.",
        "hi": "डंबल कलाई को थोड़ा घुमाने की आजादी देता है जिससे बेहतर संकुचन मिलता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Maintain a secure grip so dumbbell does not slip from fingertips.",
      "hi": "मजबूत पकड़ बनाए रखें ताकि डंबल उंगलियों से फिसले नहीं।"
    },
    "alternative": {
      "en": "Barbell Wrist Curl",
      "hi": "बारबेल रिस्ट कर्ल"
    },
    "keywords": [
      "dumbbell wrist curl",
      "forearms",
      "unilateral",
      "wrist flexors"
    ]
  },
  {
    "id": "dumbbell-reverse-wrist-curl",
    "name": {
      "en": "Seated Dumbbell Reverse Wrist Curl",
      "hi": "सीटेड डंबल रिवर्स रिस्ट कर्ल (DB Reverse Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Wrist Extensors",
      "Extensor Digitorum"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Develops the dorsal forearm extensors unilaterally, strengthening grip stabilization for heavy deadlifts and presses.",
      "hi": "एक-एक हाथ से बाहरी कलाई एक्सटेंसर्स को विकसित करता है और भारी डेडलिफ्ट के लिए ग्रिप को स्थिर करता है।"
    },
    "startingPosition": {
      "en": "Rest forearm across thigh with palm facing downward toward floor, wrist hanging clear of the knee.",
      "hi": "अग्रभाग को जांघ पर रखें, हथेली नीचे की ओर हो और कलाई घुटने से आगे निकली रहे।"
    },
    "steps": [
      {
        "en": "Hold a moderate dumbbell with an overhand (pronated) grip.",
        "hi": "ओवरहैंड पकड़ के साथ मध्यम डंबल पकड़ें।"
      },
      {
        "en": "Lower the weight toward the floor by flexing wrist downward.",
        "hi": "कलाई को नीचे मोड़ते हुए वजन को नीचे लाएं।"
      },
      {
        "en": "Extend wrist straight up toward ceiling as high as possible.",
        "hi": "कलाई को छत की ओर जितना हो सके उतना ऊपर सीधा उठाएं।"
      },
      {
        "en": "Hold peak squeeze for 2 seconds, feeling the outer forearm burn.",
        "hi": "शीर्ष पर 2 सेकंड रुकें और बाहरी अग्रभाग में संकुचन महसूस करें।"
      },
      {
        "en": "Lower slowly over 3 seconds to starting position.",
        "hi": "3 सेकंड में धीरे-धीरे नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Inhale lowering dumbbell; exhale extending wrist upward.",
      "hi": "नीचे लाते समय सांस लें; ऊपर उठाते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Jerking the dumbbell with full arm swing instead of pure wrist extension.",
        "hi": "कलाई के बजाय पूरी बांह के झटके से डंबल उठाना।"
      }
    ],
    "tips": [
      {
        "en": "Use light weight with strict mind-muscle connection for best results.",
        "hi": "सर्वोत्तम परिणामों के लिए हल्के वजन और सटीक फॉर्म का उपयोग करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not twist the wrist laterally; keep extension straight.",
      "hi": "कलाई को तिरछा न मोड़ें; सीधा विस्तार रखें।"
    },
    "alternative": {
      "en": "Barbell Reverse Wrist Curl",
      "hi": "बारबेल रिवर्स रिस्ट कर्ल"
    },
    "keywords": [
      "dumbbell reverse wrist curl",
      "forearms",
      "extensors",
      "grip stability"
    ]
  },
  {
    "id": "behind-the-back-wrist-curl",
    "name": {
      "en": "Standing Behind-the-Back Barbell Wrist Curl",
      "hi": "बिहाइंड-द-बैक बारबेल रिस्ट कर्ल (Behind Back Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Wrist Flexors",
      "Finger Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Trapezius"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Barbell",
    "description": {
      "en": "Popularized by champion bodybuilders, this standing movement loads the wrist flexors in an anatomically comfortable neutral arm position.",
      "hi": "बॉडीबिल्डरों द्वारा लोकप्रिय, यह व्यायाम खड़े होकर आरामदायक स्थिति में कलाई के फ्लेक्सर्स पर भारी लोड डालता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding a barbell behind your thighs with palms facing backward/away from body, feet shoulder-width.",
      "hi": "जांघों के पीछे बारबेल पकड़कर सीधे खड़े हों, हथेलियां पीछे की ओर हों, पैर कंधे की चौड़ाई पर रखें।"
    },
    "steps": [
      {
        "en": "Let the bar roll down into your fingers as far as possible without dropping.",
        "hi": "बार को बिना गिराए उंगलियों के पोरों तक जितना हो सके नीचे लुढ़कने दें।"
      },
      {
        "en": "Curl fingers closed, gripping the bar tightly into palms.",
        "hi": "उंगलियां बंद करें और बार को हथेलियों में मजबूती से जकड़ें।"
      },
      {
        "en": "Flex wrists straight upward behind your glutes to full contraction.",
        "hi": "ग्लूट्स के पीछे कलाइयों को पूरी तरह ऊपर मोड़ें।"
      },
      {
        "en": "Squeeze the forearm flexors hard for 1-2 seconds at the peak.",
        "hi": "शीर्ष पर 1-2 सेकंड के लिए अग्रभाग को जोर से सिकोड़ें।"
      },
      {
        "en": "Lower bar smoothly back into fingers and repeat.",
        "hi": "बार को वापस उंगलियों में धीरे-धीरे नीचे लाएं और दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling wrists up behind back; inhale as bar rolls down into fingers.",
      "hi": "कलाई ऊपर मोड़ते समय सांस छोड़ें; उंगलियों में नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Bending elbows and shrugging shoulders to lift the barbell.",
        "hi": "बार उठाने के लिए कोहनियां मोड़ना या कंधे उचकाना।"
      }
    ],
    "tips": [
      {
        "en": "Unrack the barbell from a power rack set at hip height for effortless setup.",
        "hi": "आसान सेटअप के लिए पावर रैक से बारबेल उठाएं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep glutes slightly out of the bar's direct vertical path.",
      "hi": "बार के रास्ते से ग्लूट्स को हल्का अलग रखें।"
    },
    "alternative": {
      "en": "Behind-the-Back Cable Wrist Curl or Seated Wrist Curl",
      "hi": "बिहाइंड बैक केबल रिस्ट कर्ल या सीटेड रिस्ट कर्ल"
    },
    "keywords": [
      "behind the back wrist curl",
      "forearms",
      "standing wrist curl",
      "grip"
    ]
  },
  {
    "id": "reverse-barbell-forearm-curl",
    "name": {
      "en": "Standing Reverse Barbell Curl",
      "hi": "रिवर्स बारबेल कर्ल (Reverse Barbell Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Extensors"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Barbell",
    "description": {
      "en": "The single best exercise for developing the brachioradialis muscle on top of the forearm and the underlying brachialis.",
      "hi": "अग्रभाग के शीर्ष पर स्थित ब्रैकिओरेडियलिस और नीचे की ब्रैकिआलिस मांसपेशी को विकसित करने के लिए सर्वश्रेष्ठ व्यायाम।"
    },
    "startingPosition": {
      "en": "Stand tall holding a straight bar or EZ-bar with an overhand (pronated) grip shoulder-width apart, elbows pinned to sides.",
      "hi": "कंधे की चौड़ाई पर ओवरहैंड पकड़ के साथ बारबेल पकड़कर सीधे खड़े हों, कोहनियों को कमर से सटाकर रखें।"
    },
    "steps": [
      {
        "en": "Keep wrists straight and rigid—do not allow wrists to bend backward.",
        "hi": "कलाइयों को बिल्कुल सीधा और कड़ा रखें—उन्हें पीछे न मुड़ने दें।"
      },
      {
        "en": "Curl the barbell upward toward chest by flexing elbows only.",
        "hi": "केवल कोहनियों को मोड़ते हुए बारबेल को छाती की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Hold top contraction at chest height for 1 second, flexing brachioradialis hard.",
        "hi": "छाती की ऊंचाई पर 1 सेकंड रुकें और अग्रभाग की ऊपरी मांसपेशी को सिकोड़ें।"
      },
      {
        "en": "Lower barbell under strict 3-second control back to straight arms.",
        "hi": "3 सेकंड के सख्त नियंत्रण के साथ बारबेल को वापस नीचे लाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling bar up; inhale lowering down under control.",
      "hi": "ऊपर कर्ल करते समय सांस छोड़ें; नियंत्रित तरीके से नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Letting wrists collapse into hyperextension, stressing the wrist tendons.",
        "hi": "कलाइयों को ढीला छोड़कर पीछे मुड़ने देना।"
      },
      {
        "en": "Flaring elbows out to sides or using hip swing.",
        "hi": "कोहनियों को बाहर फैलाना या हिप स्विंग से झटका देना।"
      }
    ],
    "tips": [
      {
        "en": "An EZ-curl bar reduces wrist joint torque while preserving maximum brachioradialis activation.",
        "hi": "ईज़ी-कर्ल बार कलाई के जोड़ों पर तनाव कम करती है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Use about 60% of your normal curl weight to maintain strict wrist posture.",
      "hi": "सख्त फॉर्म के लिए सामान्य कर्ल वजन का लगभग 60% उपयोग करें।"
    },
    "alternative": {
      "en": "Cross-Body Hammer Curl or Zottman Curl",
      "hi": "क्रॉस-बॉडी हैमर कर्ल या ज़ॉटमैन कर्ल"
    },
    "keywords": [
      "reverse barbell curl",
      "brachioradialis",
      "forearms",
      "biceps",
      "ez bar"
    ]
  },
  {
    "id": "cross-body-forearm-hammer-curl",
    "name": {
      "en": "Cross-Body Hammer Curl (Forearms Focus)",
      "hi": "क्रॉस-बॉडी हैमर कर्ल (Cross-Body Hammer Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Brachioradialis",
      "Brachialis"
    ],
    "secondaryMuscles": [
      "Biceps (Long Head)",
      "Forearm Extensors"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Curling diagonally across the torso places the brachioradialis and brachialis in direct mechanical alignment, maximizing forearm thickness.",
      "hi": "धड़ के आर-पार तिरछा कर्ल करने से ब्रैकिओरेडियलिस पर सीधा तनाव पड़ता है, जिससे अग्रभाग की मोटाई बढ़ती है।"
    },
    "startingPosition": {
      "en": "Stand tall with dumbbells held at sides in a neutral (palms facing inward) grip.",
      "hi": "दोनों तरफ न्यूट्रल ग्रिप (हथेलियां अंदर) में डंबल पकड़कर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Curl right dumbbell diagonally across your chest toward your left collarbone.",
        "hi": "दाहिने डंबल को छाती के आर-पार बाएं कॉलरबोन की ओर ऊपर कर्ल करें।"
      },
      {
        "en": "Keep palm facing your torso throughout the entire arc.",
        "hi": "पूरी गति के दौरान हथेली को धड़ की ओर बनाए रखें।"
      },
      {
        "en": "Squeeze top contraction hard for 1 second.",
        "hi": "शीर्ष पर 1 सेकंड के लिए मजबूत संकुचन बनाए रखें।"
      },
      {
        "en": "Lower dumbbell under control, then curl left dumbbell across toward right collarbone.",
        "hi": "डंबल को नीचे लाएं, फिर बाएं डंबल से दाईं ओर दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale curling across chest; inhale lowering.",
      "hi": "छाती के आर-पार कर्ल करते समय सांस छोड़ें; नीचे लाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging torso side to side to throw dumbbells upward.",
        "hi": "डंबल फेंकने के लिए धड़ को इधर-उधर झुलाना।"
      }
    ],
    "tips": [
      {
        "en": "Focus entirely on the muscle ridge running from outside of elbow down to thumb.",
        "hi": "कोहनी के बाहरी हिस्से से अंगूठे तक चलने वाली मांसपेशी पर ध्यान दें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Do not let dumbbell bump your collarbone at top.",
      "hi": "शीर्ष पर डंबल को कॉलरबोन से टकराने न दें।"
    },
    "alternative": {
      "en": "Dumbbell Hammer Curl or Reverse Curl",
      "hi": "डंबल हैमर कर्ल या रिवर्स कर्ल"
    },
    "keywords": [
      "cross body hammer curl",
      "forearms",
      "brachioradialis",
      "grip",
      "biceps"
    ]
  },
  {
    "id": "zottman-forearm-rotation-curl",
    "name": {
      "en": "Zottman Curl (Eccentric Forearm Overload)",
      "hi": "ज़ॉटमैन कर्ल (Zottman Forearm Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Brachioradialis",
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Brachialis"
    ],
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Combines a supinated concentric bicep curl with a pronated eccentric lowering phase to heavily overload forearm extensors.",
      "hi": "ऊपर उठते समय बाइसेप्स और नीचे आते समय कलाइयों को घुमाकर अग्रभाग के एक्सटेंसर्स पर भारी तनाव डालता है।"
    },
    "startingPosition": {
      "en": "Stand tall holding dumbbells at sides with palms facing forward (supinated).",
      "hi": "हथेलियां आगे रखकर दोनों तरफ डंबल पकड़कर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Curl dumbbells upward with palms up to chest height as a standard bicep curl.",
        "hi": "हथेलियां ऊपर रखते हुए सामान्य बाइसेप्स कर्ल की तरह छाती तक उठाएं।"
      },
      {
        "en": "At top, rotate wrists 180 degrees so palms face forward/downward (pronated).",
        "hi": "शीर्ष पर कलाइयों को 180 डिग्री घुमाएं ताकि हथेलियां आगे/नीचे की ओर हो जाएं।"
      },
      {
        "en": "Lower dumbbells over a very slow 3-4 second negative with palms down.",
        "hi": "हथेलियां नीचे रखते हुए 3-4 सेकंड में बहुत धीरे-धीरे डंबल को नीचे लाएं।"
      },
      {
        "en": "At bottom, rotate wrists back to supinated and repeat.",
        "hi": "निचले बिंदु पर कलाइयों को वापस घुमाएं और दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on upward curl; inhale slowly during the 4-second pronated eccentric descent.",
      "hi": "ऊपर कर्ल करते समय सांस छोड़ें; 4 सेकंड के धीमे उतार के दौरान सांस लें।"
    },
    "mistakes": [
      {
        "en": "Rotating wrists before reaching the top or during the concentric phase.",
        "hi": "शीर्ष पर पहुंचने से पहले ही कलाइयों को घुमा देना।"
      },
      {
        "en": "Dropping the dumbbells quickly on the way down instead of controlling the negative.",
        "hi": "नीचे आते समय डंबल को तेजी से गिरने देना।"
      }
    ],
    "tips": [
      {
        "en": "The slow pronated negative is where 80% of forearm hypertrophy occurs.",
        "hi": "धीमा प्रोनैटेड उतार ही अग्रभाग के विकास का मुख्य केंद्र है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep wrists aligned with forearms—do not let them cock backward.",
      "hi": "कलाइयों को अग्रभाग की सीध में रखें।"
    },
    "alternative": {
      "en": "Reverse Barbell Curl or Hammer Curl",
      "hi": "रिवर्स बारबेल कर्ल या हैमर कर्ल"
    },
    "keywords": [
      "zottman curl",
      "forearms",
      "biceps",
      "eccentric",
      "brachioradialis"
    ]
  },
  {
    "id": "heavy-farmers-carry",
    "name": {
      "en": "Heavy Dumbbell Farmer's Carry / Walk",
      "hi": "हैवी डंबल फार्मर्स कैरी (Heavy Farmer's Carry)"
    },
    "muscle": "Forearms",
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
    "type": "compound",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "The ultimate real-world grip builder. Walking with heavy weights at your sides forces forearms and hands to maintain crushing isometric tension.",
      "hi": "वास्तविक दुनिया का सर्वश्रेष्ठ ग्रिप बिल्डर। दोनों तरफ भारी वजन लेकर चलने से अग्रभाग और हाथों पर जबरदस्त तनाव पड़ता है।"
    },
    "startingPosition": {
      "en": "Deadlift two heavy dumbbells or kettlebells from the floor with a flat back, standing tall with shoulders pulled down and back.",
      "hi": "सीधी पीठ के साथ फर्श से दो भारी डंबल उठाएं, कंधे पीछे और कोर टाइट रखकर सीधे खड़े हों।"
    },
    "steps": [
      {
        "en": "Squeeze dumbbell handles as hard as possible with a crushing grip.",
        "hi": "डंबल के हैंडल को पूरी ताकत से कसकर पकड़ें।"
      },
      {
        "en": "Walk forward with deliberate, smooth, heel-to-toe strides.",
        "hi": "नियंत्रित, छोटे और स्थिर कदमों के साथ आगे बढ़ें।"
      },
      {
        "en": "Keep chest tall, head up, and core fully braced—do not let weights sway.",
        "hi": "छाती चौड़ी, सिर सीधा और कोर टाइट रखें—वजन को झूलने न दें।"
      },
      {
        "en": "Carry for 50-100 feet or 30-45 seconds, then safely lower dumbbells.",
        "hi": "50-100 फीट या 30-45 सेकंड तक चलें, फिर सुरक्षित रूप से नीचे रखें।"
      }
    ],
    "breathing": {
      "en": "Take short, rhythmic breaths into your abdomen while keeping your core braced.",
      "hi": "कोर को टाइट रखते हुए पेट से छोटी और लयबद्ध सांसें लें।"
    },
    "mistakes": [
      {
        "en": "Shrugging shoulders into ears or slouching forward with rounded shoulders.",
        "hi": "कंधों को उचकाना या आगे की ओर झुक जाना।"
      },
      {
        "en": "Rushing strides and losing balance.",
        "hi": "जल्दी-जल्दी कदम बढ़ाकर संतुलन खोना।"
      }
    ],
    "tips": [
      {
        "en": "Use chalk if your gym allows to prevent slipping from sweaty palms.",
        "hi": "पसीने से फिसलने से बचने के लिए चॉक का उपयोग करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Always deadlift the weights up and down with safe spinal mechanics.",
      "hi": "वजन उठाते और रखते समय हमेशा रीढ़ सीधी रखें।"
    },
    "alternative": {
      "en": "Trap Bar Carry or Dead Hang",
      "hi": "ट्रैप बार कैरी या डेड हैंग"
    },
    "keywords": [
      "farmers carry",
      "farmers walk",
      "grip strength",
      "forearms",
      "loaded carry"
    ]
  },
  {
    "id": "grip-dead-hang",
    "name": {
      "en": "Dead Hang (Grip & Forearm Endurance)",
      "hi": "डेड हैंग (Dead Hang for Grip & Forearms)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Core"
    ],
    "type": "compound",
    "difficulty": "Beginner",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "Hanging from a bar tests and builds pure crushing finger and forearm endurance while decompressing the spine and opening shoulder joints.",
      "hi": "बार से लटककर उंगलियों और अग्रभाग की सहनशक्ति बढ़ाता है, रीढ़ को डीकंप्रेस करता है और कंधों को खोलता है।"
    },
    "startingPosition": {
      "en": "Grip an overhead pull-up bar with an overhand shoulder-width grip, wrapping thumbs completely around the bar.",
      "hi": "कंधे की चौड़ाई पर ओवरहैंड ग्रिप से बार को पकड़ें, अंगूठों को बार के चारों ओर लपेटें।"
    },
    "steps": [
      {
        "en": "Step off the box or bench into a full suspended dead hang.",
        "hi": "बॉक्स से हटकर पूरी तरह हवा में लटकें।"
      },
      {
        "en": "Squeeze the bar with maximum finger pressure.",
        "hi": "उंगलियों से बार पर अधिकतम दबाव बनाएं।"
      },
      {
        "en": "Keep core lightly braced and breathe steadily.",
        "hi": "कोर को हल्का कसकर रखें और स्थिर सांस लें।"
      },
      {
        "en": "Hang for maximum duration (aim for 45 to 90 seconds).",
        "hi": "अधिकतम समय तक लटके रहें (45 से 90 सेकंड का लक्ष्य रखें)।"
      },
      {
        "en": "Safely step back onto support platform before grip fails completely.",
        "hi": "ग्रिप पूरी तरह छूटने से पहले सुरक्षित रूप से प्लेटफॉर्म पर पैर रखें।"
      }
    ],
    "breathing": {
      "en": "Take deep, calming belly breaths to stay relaxed under grip fatigue.",
      "hi": "थकान के बावजूद शांत रहने के लिए पेट से गहरी सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging back and forth or twisting on the bar.",
        "hi": "बार पर आगे-पीछे झूलना या मुड़ना।"
      },
      {
        "en": "Holding breath while hanging.",
        "hi": "लटकते समय सांस रोककर रखना।"
      }
    ],
    "tips": [
      {
        "en": "Active hang (pulling shoulder blades down slightly) engages lats; passive dead hang maximizes spinal stretch and finger work.",
        "hi": "पैसिव डेड हैंग रीढ़ के खिंचाव और उंगलियों के काम को अधिकतम करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure a stable platform is underneath to step down safely.",
      "hi": "नीचे उतरने के लिए स्थिर प्लेटफॉर्म रखें।"
    },
    "alternative": {
      "en": "Towel Pull-Up Hang or Farmer's Carry",
      "hi": "तौलिया हैंग या फार्मर्स कैरी"
    },
    "keywords": [
      "dead hang",
      "grip strength",
      "forearms",
      "decompression",
      "pull up bar"
    ]
  },
  {
    "id": "towel-grip-hang",
    "name": {
      "en": "Towel Pull-Up Bar Hang",
      "hi": "टॉवेल ग्रिप हैंग (Towel Pull-Up Bar Hang)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Thumb Adductors",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Lats"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "Draping towels over a pull-up bar forces open-hand grip recruitment and builds massive thumb and pinch strength used in martial arts and climbing.",
      "hi": "पुल-अप बार पर तौलिया लटकाकर पकड़ने से खुली हथेली की ग्रिप ताकत और अंगूठे की शक्ति असाधारण रूप से बढ़ती है।"
    },
    "startingPosition": {
      "en": "Drape two thick gym towels over a pull-up bar about shoulder-width apart.",
      "hi": "कंधे की चौड़ाई पर पुल-अप बार के ऊपर दो मोटे तौलिए लटकाएं।"
    },
    "steps": [
      {
        "en": "Grasp the hanging towel ends firmly with a vertical neutral grip.",
        "hi": "लटकते हुए तौलिये के सिरों को वर्टिकल न्यूट्रल ग्रिप से मजबूती से पकड़ें।"
      },
      {
        "en": "Step off the ground into a suspended hang, squeezing the cloth with 100% force.",
        "hi": "हवा में लटकें और 100% ताकत से कपड़े को दबाएं।"
      },
      {
        "en": "Resist the towel fibers slipping through your fingers.",
        "hi": "तौलिये को उंगलियों से फिसलने से रोकें।"
      },
      {
        "en": "Hold for 20 to 45 seconds.",
        "hi": "20 से 45 सेकंड तक बने रहें।"
      },
      {
        "en": "Step down under control before hands slip.",
        "hi": "हाथ फिसलने से पहले नियंत्रित तरीके से नीचे उतरें।"
      }
    ],
    "breathing": {
      "en": "Maintain steady nasal breathing.",
      "hi": "नाक से नियमित सांस लेते रहें।"
    },
    "mistakes": [
      {
        "en": "Using a thin slippery towel that rips or slides off the bar.",
        "hi": "पतले या फिसलने वाले तौलिये का उपयोग करना।"
      }
    ],
    "tips": [
      {
        "en": "Once able to hang for 45 seconds, progress to Towel Pull-Ups for massive back and forearm power.",
        "hi": "45 सेकंड होल्ड करने के बाद टॉवेल पुल-अप्स का प्रयास करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure towel is high tensile and wrapped securely.",
      "hi": "सुनिश्चित करें कि तौलिया मजबूत हो।"
    },
    "alternative": {
      "en": "Dead Hang or Fat Grip Hang",
      "hi": "डेड हैंग या फैट ग्रिप हैंग"
    },
    "keywords": [
      "towel hang",
      "grip strength",
      "climbing grip",
      "forearms",
      "pinch grip"
    ]
  },
  {
    "id": "plate-pinch-hold",
    "name": {
      "en": "Two-Handed Weight Plate Pinch Hold",
      "hi": "वेट प्लेट पिंच होल्ड (Plate Pinch Hold)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Thumb Flexors / Adductors",
      "Forearm Extensors & Flexors"
    ],
    "secondaryMuscles": [
      "Finger Flexors",
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Weight Plates",
    "description": {
      "en": "Develops crushing pinch strength by holding smooth-sided weight plates together purely between fingers and thumbs.",
      "hi": "उंगलियों और अंगूठे के बीच चिकनी वेट प्लेट्स को पकड़कर पिंच ग्रिप ताकत विकसित करता है।"
    },
    "startingPosition": {
      "en": "Place two identical smooth weight plates (5kg or 10kg each) smooth-sides facing outward, pinched together.",
      "hi": "दो समान वेट प्लेट्स को चिकनी सतह बाहर की ओर रखते हुए आपस में सटाकर रखें।"
    },
    "steps": [
      {
        "en": "Grasp the top rims of both plates with fingers on one side and thumb on the other (pinch grip).",
        "hi": "एक तरफ उंगलियां और दूसरी तरफ अंगूठा रखकर दोनों प्लेटों के ऊपरी किनारे को पकड़ें।"
      },
      {
        "en": "Stand up tall, lifting the plates off the floor at your side.",
        "hi": "प्लेट्स को फर्श से उठाकर अपनी बगल में सीधे खड़े हों।"
      },
      {
        "en": "Squeeze the plates together with maximum thumb and finger pinch pressure.",
        "hi": "अंगूठे और उंगलियों से दोनों प्लेटों को आपस में कसकर दबाएं।"
      },
      {
        "en": "Hold for 15 to 30 seconds until pinch grip gives out.",
        "hi": "ग्रिप छूटने तक 15 से 30 सेकंड तक रोकें।"
      },
      {
        "en": "Safely set plates down and switch hands.",
        "hi": "प्लेट्स को सुरक्षित नीचे रखें और दूसरे हाथ से करें।"
      }
    ],
    "breathing": {
      "en": "Breathe steadily and do not hold your breath during the isometric hold.",
      "hi": "होल्ड के दौरान सांस न रोकें, सामान्य सांस लेते रहें।"
    },
    "mistakes": [
      {
        "en": "Hooking fingers inside the plate lip or holes (defeats the pinch).",
        "hi": "प्लेट के छेद में उंगली फंसाकर चीटिंग करना।"
      }
    ],
    "tips": [
      {
        "en": "Pinch grip strengthens the often-neglected thumb adductor pollicis muscle.",
        "hi": "पिंच ग्रिप अंगूठे की अंदरूनी ताकत को जबरदस्त मजबूत करती है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep toes clear of the drop zone in case plates slip.",
      "hi": "प्लेट गिरने की स्थिति में पैरों को सुरक्षित दूरी पर रखें।"
    },
    "alternative": {
      "en": "Pinch Grip Deadlift or Farmer's Carry",
      "hi": "पिंच ग्रिप डेडलिफ्ट या फार्मर्स कैरी"
    },
    "keywords": [
      "plate pinch hold",
      "pinch grip",
      "forearms",
      "thumb strength",
      "grip"
    ]
  },
  {
    "id": "wrist-roller",
    "name": {
      "en": "Wrist Roller (Flexion & Extension)",
      "hi": "रिस्ट रोलर (Wrist Roller Forearms)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Wrist Roller",
    "description": {
      "en": "Widely regarded as the most brutal forearm pump exercise in existence. Winding a weighted rope up and down creates relentless, uninterrupted tension.",
      "hi": "अग्रभाग के लिए सबसे तीव्र पंप देने वाला व्यायाम। वजन से बंधी रस्सी को घुमाकर ऊपर और नीचे ले जाने से लगातार तनाव बना रहता है।"
    },
    "startingPosition": {
      "en": "Hold wrist roller bar out at chest height with both arms extended straight forward, weight hanging suspended near floor.",
      "hi": "दोनों बाहों को छाती के आगे सीधा फैलाकर रोलर बार पकड़ें, वजन फर्श के पास लटक रहा हो।"
    },
    "steps": [
      {
        "en": "Alternately rotate wrists upward to wind the rope around the cylinder, rolling the weight to the top.",
        "hi": "कलाइयों को बारी-बारी से ऊपर घुमाकर रस्सी को लपेटें और वजन को ऊपर तक लाएं।"
      },
      {
        "en": "Once the weight reaches the top bar, reverse the direction slowly to roll it back down.",
        "hi": "वजन ऊपर पहुंचने पर दिशा बदलकर धीरे-धीरे नीचे उतारें।"
      },
      {
        "en": "Repeat in the opposite direction (rolling backward) to hit both flexors and extensors.",
        "hi": "फ्लेक्सर्स और एक्सटेंसर्स दोनों को ट्रेन करने के लिए विपरीत दिशा में भी दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Maintain continuous, steady breathing throughout the roll.",
      "hi": "रोल के दौरान लगातार सामान्य सांस लेते रहें।"
    },
    "mistakes": [
      {
        "en": "Dropping arms to waist level because shoulders get tired (rest bar on a rack if needed).",
        "hi": "कंधे थकने पर बाहों को नीचे गिराना।"
      }
    ],
    "tips": [
      {
        "en": "Mount the roller onto a barbell or power rack pin so shoulders don't limit your forearm work.",
        "hi": "कंधे की थकान से बचने के लिए रोलर को रैक पिन पर टिका सकते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Start with very light weights (1-2.5 kg is surprisingly brutal).",
      "hi": "बहुत हल्के वजन (1-2.5 किग्रा) से शुरुआत करें।"
    },
    "alternative": {
      "en": "Barbell Wrist Curl and Reverse Wrist Curl Superset",
      "hi": "बारबेल रिस्ट कर्ल और रिवर्स कर्ल का सुपरसेट"
    },
    "keywords": [
      "wrist roller",
      "forearms",
      "forearm pump",
      "grip endurance",
      "wrist strength"
    ]
  },
  {
    "id": "hand-gripper-squeeze",
    "name": {
      "en": "Hand Gripper Squeeze",
      "hi": "हैंड ग्रिपर स्क्वीज (Hand Gripper Squeeze)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Crush Grip",
      "Deep Finger Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Gripper",
    "description": {
      "en": "Develops raw crushing grip strength by closing a torsion-spring hand gripper with maximal force.",
      "hi": "स्प्रिंग वाले हैंड ग्रिपर को पूरी ताकत से दबाकर हाथों की क्रशिंग ग्रिप ताकत विकसित करता है।"
    },
    "startingPosition": {
      "en": "Position the gripper handle along the base of your palm with fingers wrapped around the opposite handle.",
      "hi": "ग्रिपर के एक हैंडल को हथेली पर रखें और दूसरे हैंडल पर उंगलियां मजबूती से लपेटें।"
    },
    "steps": [
      {
        "en": "Squeeze fingers forcefully into palm until the two handles touch together completely.",
        "hi": "उंगलियों से पूरी ताकत लगाएं जब तक कि दोनों हैंडल आपस में पूरी तरह न छू जाएं।"
      },
      {
        "en": "Hold the closed gripper for a counted 1-2 second click.",
        "hi": "बंद ग्रिपर को 1-2 सेकंड तक दबाकर रखें।"
      },
      {
        "en": "Release slowly over 3 seconds under full eccentric spring resistance.",
        "hi": "3 सेकंड में धीरे-धीरे स्प्रिंग के विरोध के साथ हाथ खोलें।"
      },
      {
        "en": "Complete reps, then switch to other hand.",
        "hi": "रैप्स पूरे करें और दूसरे हाथ पर जाएं।"
      }
    ],
    "breathing": {
      "en": "Exhale sharply on crush; inhale slowly on opening.",
      "hi": "दबाते समय तेजी से सांस छोड़ें; हाथ खोलते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Failing to touch handles together on every rep (partial closes).",
        "hi": "हर रैप पर हैंडल को पूरी तरह न छूने देना।"
      }
    ],
    "tips": [
      {
        "en": "Set the gripper properly in the hand using your non-working hand before closing.",
        "hi": "दबाने से पहले दूसरे हाथ से ग्रिपर को हथेली में सही सेट करें।"
      }
    ],
    "safetyPrecautions": {
      "en": "Warm up fingers with lighter resistance before attempting heavy grippers.",
      "hi": "भारी ग्रिपर से पहले उंगलियों को अच्छी तरह वार्मअप करें।"
    },
    "alternative": {
      "en": "Finger Roll Wrist Curl or Dead Hang",
      "hi": "फिंगर रोल रिस्ट कर्ल या डेड हैंग"
    },
    "keywords": [
      "hand gripper",
      "crush grip",
      "forearms",
      "grip strength",
      "coC"
    ]
  },
  {
    "id": "finger-extension-band",
    "name": {
      "en": "Rubber Band Finger Extensions",
      "hi": "रबर बैंड फिंगर एक्सटेंशन (Finger Extensions)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Extensor Digitorum (Finger Extensors)"
    ],
    "secondaryMuscles": [
      "Wrist Extensors"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Resistance Bands",
    "description": {
      "en": "The essential antidote to gripping fatigue and tendonitis. Expands fingers against elastic resistance to balance crushing flexors.",
      "hi": "उंगलियों को बाहर खोलकर एक्सटेंसर्स को ट्रेन करता है, जिससे कलाई और उंगलियों में संतुलन आता है और दर्द दूर होता है।"
    },
    "startingPosition": {
      "en": "Place a thick rubber band or dedicated finger extensor band around the tips of all five fingers grouped tightly together.",
      "hi": "पांचों उंगलियों के पोरों के चारों ओर एक मोटा रबर बैंड या फिंगर बैंड लगाएं।"
    },
    "steps": [
      {
        "en": "Spread fingers and thumb outward as wide as possible against band tension.",
        "hi": "बैंड के खिंचाव के खिलाफ उंगलियों और अंगूठे को जितना हो सके उतना चौड़ा फैलाएं।"
      },
      {
        "en": "Hold the fully opened hand position for 2 seconds.",
        "hi": "पूरी तरह खुले हाथ की स्थिति में 2 सेकंड रुकें।"
      },
      {
        "en": "Slowly bring fingers back together against resistance.",
        "hi": "प्रतिरोध के साथ उंगलियों को धीरे-धीरे वापस पास लाएं।"
      },
      {
        "en": "Perform high-rep sets (20 to 30 reps) for joint longevity.",
        "hi": "जोड़ों के स्वास्थ्य के लिए 20 से 30 रैप्स के सेट करें।"
      }
    ],
    "breathing": {
      "en": "Exhale expanding fingers; inhale closing.",
      "hi": "उंगलियां फैलाते समय सांस छोड़ें; बंद करते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using a band that is too loose to provide tension at full extension.",
        "hi": "बहुत ढीले बैंड का उपयोग करना।"
      }
    ],
    "tips": [
      {
        "en": "Essential for anyone who deadlifts, climbs, or uses heavy hand grippers regularly.",
        "hi": "डेडलिफ्ट करने वालों और ग्रिप ट्रेनिंग करने वालों के लिए अनिवार्य व्यायाम।"
      }
    ],
    "safetyPrecautions": {
      "en": "Stop if finger joints feel overstretched.",
      "hi": "उंगलियों के जोड़ों में अधिक खिंचाव महसूस होने पर रुकें।"
    },
    "alternative": {
      "en": "Rice Bucket Hand Extensions",
      "hi": "राइस बकेट हैंड एक्सटेंशन"
    },
    "keywords": [
      "finger extensions",
      "rubber band fingers",
      "extensor digitorum",
      "forearms",
      "joint health"
    ]
  },
  {
    "id": "dumbbell-pronation-supination",
    "name": {
      "en": "Dumbbell Pronation & Supination",
      "hi": "डंबल प्रोनेशन और सुपिनेशन (Pronation & Supination)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Pronator Teres",
      "Supinator",
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Biceps Brachii",
      "Wrist Stabilizers"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Dumbbells",
    "description": {
      "en": "Rotates the forearm along its longitudinal axis using an offset dumbbell load, strengthening rotational elbow and forearm stabilizers.",
      "hi": "एक तरफ भार वाले डंबल से अग्रभाग को घुमाकर कोहनी और कलाई के रोटेशनल स्टेबलाइजर्स को मजबूत करता है।"
    },
    "startingPosition": {
      "en": "Sit with forearm supported flat on a table or thigh, holding a dumbbell by only one head (offset grip) so weight is on top.",
      "hi": "अग्रभाग को टेबल या जांघ पर रखें, डंबल को एक सिरे से पकड़ें ताकि सारा भार एक तरफ रहे।"
    },
    "steps": [
      {
        "en": "Start with hand vertical in a neutral handshake position.",
        "hi": "हाथ को न्यूट्रल (हैंडशेक) स्थिति में सीधा रखें।"
      },
      {
        "en": "Slowly rotate wrist inward (pronation) until palm faces flat down.",
        "hi": "कलाई को धीरे-धीरे अंदर घुमाएं (प्रोनेशन) जब तक हथेली नीचे न हो जाए।"
      },
      {
        "en": "Pause for 1 second, then rotate wrist outward through neutral into full external rotation (supination) until palm faces up.",
        "hi": "1 सेकंड रुकें, फिर कलाई को बाहर की ओर पूरा घुमाएं (सुपिनेशन) जब तक हथेली ऊपर न हो जाए।"
      },
      {
        "en": "Control the motion smoothly back to starting position.",
        "hi": "नियंत्रित तरीके से वापस प्रारंभिक स्थिति में आएं।"
      }
    ],
    "breathing": {
      "en": "Breathe steadily and smoothly throughout the rotation.",
      "hi": "रोटेशन के दौरान लगातार सामान्य सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using momentum to whip the dumbbell back and forth.",
        "hi": "डंबल को तेजी से इधर-उधर झटकना।"
      }
    ],
    "tips": [
      {
        "en": "You can also use a hammer or sledgehammer choked up on the handle.",
        "hi": "आप हैंडल से हथौड़ा पकड़कर भी यह व्यायाम कर सकते हैं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep forearm firmly glued to support surface.",
      "hi": "अग्रभाग को सतह से मजबूती से सटाकर रखें।"
    },
    "alternative": {
      "en": "Sledgehammer Lever Rotations",
      "hi": "स्लेजहैमर लीवर रोटेशन"
    },
    "keywords": [
      "pronation",
      "supination",
      "forearms",
      "pronator teres",
      "elbow health"
    ]
  },
  {
    "id": "radial-ulnar-deviation",
    "name": {
      "en": "Lever / Sledgehammer Radial & Ulnar Deviation",
      "hi": "रेडियल और अल्नार डेविएशन (Radial Ulnar Deviation)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Flexor & Extensor Carpi Radialis",
      "Flexor & Extensor Carpi Ulnaris"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Wrist Stabilizers"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Dumbbells",
    "description": {
      "en": "Strengthens side-to-side wrist tilting using a levered bar or sledgehammer, building unbreakable wrists for combat sports and arm wrestling.",
      "hi": "कलाई को अगल-बगल झुकाने वाली ताकत को मजबूत करता है, जो आर्म रेसलिंग और मार्शल आर्ट्स के लिए अत्यंत उपयोगी है।"
    },
    "startingPosition": {
      "en": "Stand tall holding a sledgehammer or an offset dumbbell down at your side with arm straight.",
      "hi": "हाथ को सीधा रखकर बगल में एक तरफ भारी डंबल या हथौड़ा पकड़कर खड़े हों।"
    },
    "steps": [
      {
        "en": "Tilt your wrist upward toward your thumb (radial deviation) like pointing a sword upward.",
        "hi": "कलाई को अंगूठे की दिशा में ऊपर झुकाएं (रेडियल डेविएशन)।"
      },
      {
        "en": "Hold top contraction for 1 second.",
        "hi": "शीर्ष पर 1 सेकंड रुकें।"
      },
      {
        "en": "Lower under control, then tilt wrist downward toward pinky finger (ulnar deviation).",
        "hi": "नियंत्रण में नीचे लाएं, फिर छोटी उंगली की दिशा में नीचे झुकाएं (अल्नार डेविएशन)।"
      },
      {
        "en": "Repeat for 12 to 15 strict repetitions.",
        "hi": "12 से 15 सटीक रैप्स दोहराएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on the deviation tilt; inhale on return to center.",
      "hi": "झुकाते समय सांस छोड़ें; बीच में आते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Swinging arm or bending elbow instead of isolating the wrist joint.",
        "hi": "कलाई के बजाय बांह या कोहनी को हिलाना।"
      }
    ],
    "tips": [
      {
        "en": "Choking down the handle toward the head makes it easier; holding further back increases leverage resistance.",
        "hi": "हैंडल पर पकड़ दूर करने से भार अपने आप बढ़ जाता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Use light leverage to protect delicate wrist ligaments.",
      "hi": "कलाई के लिगामेंट्स की सुरक्षा के लिए हल्के भार से शुरू करें।"
    },
    "alternative": {
      "en": "Dumbbell Pronation & Supination",
      "hi": "डंबल प्रोनेशन और सुपिनेशन"
    },
    "keywords": [
      "radial deviation",
      "ulnar deviation",
      "forearms",
      "arm wrestling",
      "wrist strength"
    ]
  },
  {
    "id": "pinch-grip-deadlift",
    "name": {
      "en": "Pinch Grip Weight Plate Deadlift / Lift",
      "hi": "पिंच ग्रिप वेट प्लेट डेडलिफ्ट (Pinch Grip Deadlift)"
    },
    "muscle": "Forearms",
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
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Weight Plates",
    "description": {
      "en": "Deadlifting weight plates by only pinching their smooth rims off the ground tests absolute maximum thumb clamping power.",
      "hi": "फर्श से केवल अंगूठे और उंगलियों के सहारे चिकनी प्लेट्स को डेडलिफ्ट करना, जो अंगूठे की अधिकतम क्लैंपिंग ताकत परखता है।"
    },
    "startingPosition": {
      "en": "Stand over two smooth weight plates standing upright on edge on the floor.",
      "hi": "फर्श पर सीधी खड़ी दो चिकनी वेट प्लेट्स के ऊपर खड़े हों।"
    },
    "steps": [
      {
        "en": "Hinge at hips with a flat back and pinch the top rims firmly between fingers and thumb.",
        "hi": "सीधी पीठ के साथ कूल्हों से झुकें और प्लेटों के ऊपरी किनारे को मजबूती से पिंच करें।"
      },
      {
        "en": "Brace core and drive through feet to stand up completely straight with plates in hand.",
        "hi": "कोर टाइट करें और प्लेटों को हाथ में पकड़े हुए पूरी तरह सीधे खड़े हों।"
      },
      {
        "en": "Lock out hips and hold plates for 3 to 5 seconds at the top.",
        "hi": "शीर्ष पर कूल्हों को लॉक करें और प्लेट्स को 3 से 5 सेकंड तक रोकें।"
      },
      {
        "en": "Hinge back down and return plates softly to the floor.",
        "hi": "नियंत्रित तरीके से प्लेट्स को वापस फर्श पर रखें।"
      }
    ],
    "breathing": {
      "en": "Inhale and brace at bottom; exhale as you stand up fully.",
      "hi": "नीचे सांस भरकर रोकें; ऊपर सीधे खड़े होते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Rounding back when lifting from floor.",
        "hi": "फर्श से उठाते समय पीठ को मोड़ना।"
      }
    ],
    "tips": [
      {
        "en": "Use chalk on fingertips and thumb pads to maximize skin friction on the iron plates.",
        "hi": "प्लेट्स पर पकड़ मजबूत करने के लिए चॉक लगाएं।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure weights will not pinch or drop onto your toes.",
      "hi": "पंजों को वजन के गिरने से बचाकर रखें।"
    },
    "alternative": {
      "en": "Plate Pinch Hold or Farmer's Carry",
      "hi": "प्लेट पिंच होल्ड या फार्मर्स कैरी"
    },
    "keywords": [
      "pinch grip deadlift",
      "grip strength",
      "thumb power",
      "forearms",
      "plates"
    ]
  },
  {
    "id": "fat-grip-dead-hang",
    "name": {
      "en": "Thick Bar / Fat Grip Hang",
      "hi": "फैट ग्रिप बार हैंग (Fat Grip Dead Hang)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Deep Finger Flexors",
      "Open Hand Grip",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "type": "compound",
    "difficulty": "Advanced",
    "equipment": "Pull-up Bar",
    "description": {
      "en": "Using thick grips (2 inches or larger) on a pull-up bar prevents fingers from overlapping, activating up to 200% more forearm motor units.",
      "hi": "मोटी बार (2 इंच या अधिक) से लटकने से उंगलियां आपस में लॉक नहीं हो पातीं, जिससे अग्रभाग पर दोगुना तनाव पड़ता है।"
    },
    "startingPosition": {
      "en": "Attach silicone thick grips (Fat Gripz) onto a pull-up bar, or use an axle bar. Grip with palms facing forward.",
      "hi": "पुल-अप बार पर फैट ग्रिप लगाएं। हथेलियां आगे रखते हुए बार को दोनों हाथों से पकड़ें।"
    },
    "steps": [
      {
        "en": "Squeeze the thick circumference with maximum open-hand force.",
        "hi": "खुली हथेली की पूरी ताकत से मोटे व्यास को दबाएं।"
      },
      {
        "en": "Step into full suspension, hanging motionless.",
        "hi": "पूरी तरह हवा में लटकें और शरीर को स्थिर रखें।"
      },
      {
        "en": "Fight the bar rolling open in your hands.",
        "hi": "बार को हाथों से फिसलने से रोकने के लिए लगातार जोर लगाएं।"
      },
      {
        "en": "Hold for 20 to 45 seconds.",
        "hi": "20 से 45 सेकंड तक होल्ड करें।"
      },
      {
        "en": "Step down safely before hands peel open.",
        "hi": "हाथ खुलने से पहले सुरक्षित नीचे उतरें।"
      }
    ],
    "breathing": {
      "en": "Breathe steadily and deeply through the nose.",
      "hi": "नाक से गहरी और स्थिर सांस लें।"
    },
    "mistakes": [
      {
        "en": "Using a thumbless (suicide) grip—always wrap thumb around thick bar.",
        "hi": "अंगूठे के बिना पकड़ना—अंगूठे को हमेशा चारों ओर लपेटें।"
      }
    ],
    "tips": [
      {
        "en": "Thick bar training transfers directly to breaking grip plateaus on deadlifts and rows.",
        "hi": "मोटी बार का अभ्यास डेडलिफ्ट की ग्रिप क्षमता को कई गुना बढ़ाता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Ensure thick grips are clamped securely around bar.",
      "hi": "सुनिश्चित करें कि ग्रिप्स बार पर सुरक्षित रूप से कसी हों।"
    },
    "alternative": {
      "en": "Standard Dead Hang or Towel Hang",
      "hi": "स्टैंडर्ड डेड हैंग या टॉवेल हैंग"
    },
    "keywords": [
      "fat grip hang",
      "thick bar",
      "forearms",
      "open hand grip",
      "grip strength"
    ]
  },
  {
    "id": "behind-back-cable-wrist-curl",
    "name": {
      "en": "Behind-the-Back Cable Wrist Curl",
      "hi": "बिहाइंड-द-बैक केबल रिस्ट कर्ल (Cable Behind Back Wrist Curl)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Finger Flexors",
      "Brachioradialis"
    ],
    "type": "isolation",
    "difficulty": "Intermediate",
    "equipment": "Cables",
    "description": {
      "en": "Provides continuous cable tension throughout the entire wrist flexion range of motion, keeping flexor muscles under constant load.",
      "hi": "पूरी गति के दौरान केबल का निरंतर तनाव प्रदान करता है, जिससे कलाई के फ्लेक्सर्स पर बिना रुके लोड बना रहता है।"
    },
    "startingPosition": {
      "en": "Set a straight bar on a low cable pulley. Stand facing away from the cable tower, holding bar behind hips with palms facing backward.",
      "hi": "लो पुली पर स्ट्रेट बार लगाएं। मशीन की ओर पीठ करके खड़े हों, कूल्हों के पीछे बार पकड़ें, हथेलियां पीछे हों।"
    },
    "steps": [
      {
        "en": "Step forward 1-2 feet so cable has constant diagonal tension.",
        "hi": "1-2 फीट आगे बढ़ें ताकि केबल में निरंतर तनाव रहे।"
      },
      {
        "en": "Allow the cable to pull wrists backward into extension.",
        "hi": "केबल को कलाइयों को पीछे खिंचाव में ले जाने दें।"
      },
      {
        "en": "Curl wrists powerfully upward against cable resistance.",
        "hi": "केबल के खिंचाव के खिलाफ कलाइयों को मजबूती से ऊपर मोड़ें।"
      },
      {
        "en": "Squeeze forearm flexors hard at the peak for 2 seconds.",
        "hi": "शीर्ष पर 2 सेकंड के लिए अग्रभाग को जोर से सिकोड़ें।"
      },
      {
        "en": "Lower slowly over 3 seconds back into stretch.",
        "hi": "3 सेकंड में धीरे-धीरे वापस खिंचाव में आएं।"
      }
    ],
    "breathing": {
      "en": "Exhale on the upward wrist curl; inhale as wrists extend.",
      "hi": "कलाई ऊपर मोड़ते समय सांस छोड़ें; पीछे जाते समय सांस लें।"
    },
    "mistakes": [
      {
        "en": "Leaning torso forward and back to jerk the weight.",
        "hi": "वजन को झटकने के लिए धड़ को आगे-पीछे झुकाना।"
      }
    ],
    "tips": [
      {
        "en": "Unlike barbells, cables keep peak tension even at the top of the curl.",
        "hi": "बारबेल के विपरीत, केबल शीर्ष पर भी पूरा तनाव बनाए रखती है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Keep shoulders depressed and relaxed.",
      "hi": "कंधों को नीचे और तनावमुक्त रखें।"
    },
    "alternative": {
      "en": "Standing Behind-the-Back Barbell Wrist Curl",
      "hi": "स्टैंडिंग बिहाइंड बैक बारबेल रिस्ट कर्ल"
    },
    "keywords": [
      "cable wrist curl",
      "behind back wrist curl",
      "forearms",
      "constant tension",
      "flexors"
    ]
  },
  {
    "id": "barbell-finger-curls",
    "name": {
      "en": "Barbell Finger Roll Wrist Curl",
      "hi": "बारबेल फिंगर रोल रिस्ट कर्ल (Barbell Finger Curls)"
    },
    "muscle": "Forearms",
    "primaryMuscles": [
      "Flexor Digitorum Superficialis & Profundus"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Palmaris Longus"
    ],
    "type": "isolation",
    "difficulty": "Beginner",
    "equipment": "Barbell",
    "description": {
      "en": "Isolates the long deep finger flexor muscles that run through the entire forearm, building crushing finger strength and massive forearm size.",
      "hi": "पूरे अग्रभाग में चलने वाली गहरी उंगली फ्लेक्सर्स को अलग से ट्रेन करता है, जिससे उंगलियों की शक्ति और अग्रभाग का आकार बढ़ता है।"
    },
    "startingPosition": {
      "en": "Stand tall or sit holding a barbell with arms hanging straight down, palms facing forward/upward, holding bar in palms.",
      "hi": "सीधे खड़े हों या बैठें, बाहें सीधी नीचे हों, हथेलियां आगे हों और बार हथेलियों में हो।"
    },
    "steps": [
      {
        "en": "Slowly unclamp fingers, allowing the bar to roll all the way down to the distal tips of your fingers.",
        "hi": "उंगलियां धीरे-धीरे खोलें और बार को उंगलियों के अंतिम पोरों तक लुढ़कने दें।"
      },
      {
        "en": "Pause for 1 second in the fingertip stretch position.",
        "hi": "उंगलियों के खिंचाव में 1 सेकंड रुकें।"
      },
      {
        "en": "Curl fingers tightly back into the palm, rolling the bar back up into a clenched fist.",
        "hi": "उंगलियों को कसकर हथेली में समेटें और बार को मुट्ठी में ऊपर रोल करें।"
      },
      {
        "en": "Add a slight wrist curl at the top for maximum flexion.",
        "hi": "अधिकतम संकुचन के लिए शीर्ष पर हल्का कलाई कर्ल भी जोड़ें।"
      }
    ],
    "breathing": {
      "en": "Inhale opening fingers; exhale rolling bar back up.",
      "hi": "उंगलियां खोलते समय सांस लें; मुट्ठी बंद करते समय सांस छोड़ें।"
    },
    "mistakes": [
      {
        "en": "Letting the barbell roll completely out of the hands onto the floor.",
        "hi": "बारबेल को हाथ से पूरी तरह फिसलकर फर्श पर गिरने देना।"
      }
    ],
    "tips": [
      {
        "en": "This directly builds the dense muscular belly of the inner forearm.",
        "hi": "यह भीतरी अग्रभाग के मांसल हिस्से को सीधे तौर पर विकसित करता है।"
      }
    ],
    "safetyPrecautions": {
      "en": "Control the speed of the roll so the bar never slips away.",
      "hi": "रोल की गति को नियंत्रित रखें ताकि बार छूटे नहीं।"
    },
    "alternative": {
      "en": "Hand Gripper Squeeze or Seated Wrist Curl",
      "hi": "हैंड ग्रिपर स्क्वीज या सीटेड रिस्ट कर्ल"
    },
    "keywords": [
      "finger curls",
      "barbell finger roll",
      "forearms",
      "finger flexors",
      "crush grip"
    ]
  }
];

export const MUSCLE_GROUPS = [
  "Chest", "Back", "Shoulders", "Biceps", "Triceps", 
  "Legs", "Hamstrings", "Calves", "Abs", "Forearms", "Full Body"
];
