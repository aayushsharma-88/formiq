// FORMIQ - Complete Exercise Image Guide Registry
// Maps all 207 exercises in FORMIQ to their verified local tutorial illustrations.

export interface ExerciseImageGuide {
  image: string;
  alt: string;
  badgeEn: string;
  badgeHi: string;
  titleEn: string;
  titleHi: string;
}

export const EXERCISE_GUIDE_IMAGES: Record<string, ExerciseImageGuide> = {
  "barbell-bench-press": {
    "image": "/images/exercises/barbell-bench-press.png",
    "alt": "How to do Barbell Bench Press - Lower and Press positions",
    "titleEn": "Exercise Guide: Barbell Bench Press",
    "titleHi": "व्यायाम गाइड: बार्बेल बेंच प्रेस",
    "badgeEn": "Lower & Press",
    "badgeHi": "लोअर और प्रेस"
  },
  "incline-barbell-bench-press": {
    "image": "/images/exercises/incline-barbell-bench-press.png",
    "alt": "How to do Incline Barbell Bench Press - Lower and Press positions",
    "titleEn": "Exercise Guide: Incline Barbell Bench Press",
    "titleHi": "व्यायाम गाइड: इनक्लाइन बार्बेल बेंच प्रेस",
    "badgeEn": "Upper Chest Focus",
    "badgeHi": "अपर चेस्ट फोकस"
  },
  "decline-barbell-bench-press": {
    "image": "/images/exercises/decline-barbell-bench-press.png",
    "alt": "How to do Decline Barbell Bench Press - Lower and Press positions",
    "titleEn": "Exercise Guide: Decline Barbell Bench Press",
    "titleHi": "व्यायाम गाइड: डिक्लाइन बार्बेल बेंच प्रेस",
    "badgeEn": "Lower Chest Focus",
    "badgeHi": "लोअर चेस्ट फोकस"
  },
  "flat-dumbbell-bench-press": {
    "image": "/images/exercises/flat-dumbbell-bench-press.png",
    "alt": "How to do Flat Dumbbell Bench Press - Stretch and Press positions",
    "titleEn": "Exercise Guide: Flat Dumbbell Bench Press",
    "titleHi": "व्यायाम गाइड: फ्लैट डम्बल बेंच प्रेस",
    "badgeEn": "Full Stretch & Press",
    "badgeHi": "फुल स्ट्रेच और प्रेस"
  },
  "incline-dumbbell-press": {
    "image": "/images/exercises/incline-dumbbell-press.png",
    "alt": "How to do Incline Dumbbell Press - Setup and Press positions",
    "titleEn": "Exercise Guide: Incline Dumbbell Press",
    "titleHi": "व्यायाम गाइड: इनक्लाइन डम्बल प्रेस",
    "badgeEn": "Upper Chest Drive",
    "badgeHi": "अपर चेस्ट ड्राइव"
  },
  "decline-dumbbell-press": {
    "image": "/images/exercises/decline-dumbbell-press.png",
    "alt": "How to do Decline Dumbbell Press - Setup and Press positions",
    "titleEn": "Exercise Guide: Decline Dumbbell Press",
    "titleHi": "व्यायाम गाइड: डिक्लाइन डम्बल प्रेस",
    "badgeEn": "Lower Pec Squeeze",
    "badgeHi": "लोअर पेक स्क्वीज"
  },
  "dumbbell-chest-fly": {
    "image": "/images/exercises/dumbbell-chest-fly.webp",
    "alt": "How to perform Dumbbell Chest Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Chest Fly",
    "titleHi": "व्यायाम गाइड: डम्बल चेस्ट फ्लाई (Dumbbell Chest Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "incline-dumbbell-fly": {
    "image": "/images/exercises/incline-dumbbell-fly.webp",
    "alt": "How to perform Incline Dumbbell Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Incline Dumbbell Fly",
    "titleHi": "व्यायाम गाइड: इन्क्लाइन डम्बल फ्लाई (Incline Dumbbell Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "cable-chest-fly": {
    "image": "/images/exercises/cable-chest-fly.webp",
    "alt": "How to perform Cable Chest Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Chest Fly",
    "titleHi": "व्यायाम गाइड: केबल चेस्ट फ्लाई (Cable Chest Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "low-to-high-cable-fly": {
    "image": "/images/exercises/low-to-high-cable-fly.webp",
    "alt": "How to perform Low-to-High Cable Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Low-to-High Cable Fly",
    "titleHi": "व्यायाम गाइड: लो-टू-हाई केबल फ्लाई (Low-to-High Cable Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "high-to-low-cable-fly": {
    "image": "/images/exercises/high-to-low-cable-fly.webp",
    "alt": "How to perform High-to-Low Cable Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: High-to-Low Cable Fly",
    "titleHi": "व्यायाम गाइड: हाई-टू-लो केबल फ्लाई (High-to-Low Cable Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "machine-chest-press": {
    "image": "/images/exercises/machine-chest-press.webp",
    "alt": "How to perform Machine Chest Press - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Chest Press",
    "titleHi": "व्यायाम गाइड: मशीन चेस्ट प्रेस (Machine Chest Press)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "pec-deck-fly": {
    "image": "/images/exercises/pec-deck-fly.webp",
    "alt": "How to perform Pec Deck Fly - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Pec Deck Fly",
    "titleHi": "व्यायाम गाइड: पेक डेक फ्लाई (Pec Deck Fly)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "push-ups": {
    "image": "/images/exercises/push-ups.webp",
    "alt": "How to perform Push-Ups - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Push-Ups",
    "titleHi": "व्यायाम गाइड: पुश-अप्स (Push-Ups)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "wide-grip-push-ups": {
    "image": "/images/exercises/wide-grip-push-ups.webp",
    "alt": "How to perform Wide-Grip Push-Ups - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Wide-Grip Push-Ups",
    "titleHi": "व्यायाम गाइड: वाइड-ग्रिप पुश-अप्स (Wide-Grip Push-Ups)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "incline-push-ups": {
    "image": "/images/exercises/incline-push-ups.webp",
    "alt": "How to perform Incline Push-Ups - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Incline Push-Ups",
    "titleHi": "व्यायाम गाइड: इन्क्लाइन पुश-अप्स (Incline Push-Ups)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "decline-push-ups": {
    "image": "/images/exercises/decline-push-ups.webp",
    "alt": "How to perform Decline Push-Ups - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Decline Push-Ups",
    "titleHi": "व्यायाम गाइड: डिक्लाइन पुश-अप्स (Decline Push-Ups)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "chest-dips": {
    "image": "/images/exercises/chest-dips.webp",
    "alt": "How to perform Chest Dips - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Chest Dips",
    "titleHi": "व्यायाम गाइड: चेस्ट डिप्स (Chest Dips)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "dumbbell-pullover": {
    "image": "/images/exercises/dumbbell-pullover.webp",
    "alt": "How to perform Dumbbell Pullover - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Pullover",
    "titleHi": "व्यायाम गाइड: डम्बल पुलओवर (Dumbbell Pullover)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "smith-machine-bench-press": {
    "image": "/images/exercises/smith-machine-bench-press.webp",
    "alt": "How to perform Smith Machine Bench Press - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Smith Machine Bench Press",
    "titleHi": "व्यायाम गाइड: स्मिथ मशीन बेंच प्रेस (Smith Machine Bench Press)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "barbell-floor-press": {
    "image": "/images/exercises/barbell-floor-press.webp",
    "alt": "How to perform Barbell Floor Press - Chest exercise tutorial guide",
    "titleEn": "Exercise Guide: Barbell Floor Press",
    "titleHi": "व्यायाम गाइड: बार्बेल फ्लोर प्रेस (Barbell Floor Press)",
    "badgeEn": "Chest Focus",
    "badgeHi": "चेस्ट फोकस"
  },
  "pull-up": {
    "image": "/images/exercises/pull-up.png",
    "alt": "How to do Pull-Up - Dead Hang and Top Contracted positions",
    "titleEn": "Exercise Guide: Pull-Up",
    "titleHi": "व्यायाम गाइड: पुल-अप",
    "badgeEn": "Hang & Pull",
    "badgeHi": "हैंग और पुल"
  },
  "chin-ups": {
    "image": "/images/exercises/chin-ups.webp",
    "alt": "How to perform Chin-Ups - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Chin-Ups",
    "titleHi": "व्यायाम गाइड: चिन-अप्स (Chin-Ups)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "lat-pulldown": {
    "image": "/images/exercises/lat-pulldown.webp",
    "alt": "How to perform Lat Pulldown - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Lat Pulldown",
    "titleHi": "व्यायाम गाइड: लैट पुलडाउन (Lat Pulldown)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "close-grip-lat-pulldown": {
    "image": "/images/exercises/close-grip-lat-pulldown.webp",
    "alt": "How to perform Close-Grip Lat Pulldown - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Close-Grip Lat Pulldown",
    "titleHi": "व्यायाम गाइड: क्लोज़-ग्रिप लैट पुलडाउन (Close-Grip Lat Pulldown)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "neutral-grip-lat-pulldown": {
    "image": "/images/exercises/neutral-grip-lat-pulldown.webp",
    "alt": "How to perform Neutral-Grip Lat Pulldown - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Neutral-Grip Lat Pulldown",
    "titleHi": "व्यायाम गाइड: न्यूट्रल-ग्रिप लैट पुलडाउन (Neutral-Grip Lat Pulldown)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "barbell-bent-over-row": {
    "image": "/images/exercises/barbell-bent-over-row.webp",
    "alt": "How to perform Barbell Bent-Over Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Barbell Bent-Over Row",
    "titleHi": "व्यायाम गाइड: बार्बेल बेंट-ओवर रो (Barbell Bent-Over Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "pendlay-row": {
    "image": "/images/exercises/pendlay-row.webp",
    "alt": "How to perform Pendlay Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Pendlay Row",
    "titleHi": "व्यायाम गाइड: पेंडले रो (Pendlay Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "one-arm-dumbbell-row": {
    "image": "/images/exercises/one-arm-dumbbell-row.webp",
    "alt": "How to perform One-Arm Dumbbell Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: One-Arm Dumbbell Row",
    "titleHi": "व्यायाम गाइड: वन-आर्म डम्बल रो (One-Arm Dumbbell Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "seated-cable-row": {
    "image": "/images/exercises/seated-cable-row.webp",
    "alt": "How to perform Seated Cable Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Cable Row",
    "titleHi": "व्यायाम गाइड: सीटेड केबल रो (Seated Cable Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "chest-supported-row": {
    "image": "/images/exercises/chest-supported-row.webp",
    "alt": "How to perform Chest-Supported Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Chest-Supported Row",
    "titleHi": "व्यायाम गाइड: चेस्ट-सपोर्टेड रो (Chest-Supported Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "t-bar-row": {
    "image": "/images/exercises/t-bar-row.webp",
    "alt": "How to perform T-Bar Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: T-Bar Row",
    "titleHi": "व्यायाम गाइड: टी-बार रो (T-Bar Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "machine-row": {
    "image": "/images/exercises/machine-row.webp",
    "alt": "How to perform Machine Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Row",
    "titleHi": "व्यायाम गाइड: मशीन रो (Machine Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "inverted-row": {
    "image": "/images/exercises/inverted-row.webp",
    "alt": "How to perform Inverted Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Inverted Row",
    "titleHi": "व्यायाम गाइड: इनवर्टेड रो (Inverted Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "straight-arm-cable-pulldown": {
    "image": "/images/exercises/straight-arm-cable-pulldown.webp",
    "alt": "How to perform Straight-Arm Cable Pulldown - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Straight-Arm Cable Pulldown",
    "titleHi": "व्यायाम गाइड: स्ट्रेट-आर्म केबल पुलडाउन (Straight-Arm Cable Pulldown)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "rack-pull": {
    "image": "/images/exercises/rack-pull.webp",
    "alt": "How to perform Rack Pull - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Rack Pull",
    "titleHi": "व्यायाम गाइड: रैक पुल (Rack Pull)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "conventional-deadlift": {
    "image": "/images/exercises/conventional-deadlift.png",
    "alt": "How to do Conventional Barbell Deadlift - Floor Setup and Top Lockout positions",
    "titleEn": "Exercise Guide: Conventional Deadlift",
    "titleHi": "व्यायाम गाइड: कन्वेंशनल डेडलिफ्ट",
    "badgeEn": "Hinge & Lockout",
    "badgeHi": "हिंज और लॉकआउट"
  },
  "back-extensions": {
    "image": "/images/exercises/back-extensions.webp",
    "alt": "How to perform Back Extensions - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Back Extensions",
    "titleHi": "व्यायाम गाइड: बैक एक्सटेंशन्स (Back Extensions)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "face-pulls": {
    "image": "/images/exercises/face-pulls.webp",
    "alt": "How to perform Face Pulls - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Face Pulls",
    "titleHi": "व्यायाम गाइड: फेस पुल्स (Face Pulls)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "meadows-row": {
    "image": "/images/exercises/meadows-row.webp",
    "alt": "How to perform Meadows Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Meadows Row",
    "titleHi": "व्यायाम गाइड: मीडोज़ रो (Meadows Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "kroc-row": {
    "image": "/images/exercises/kroc-row.webp",
    "alt": "How to perform Kroc Row - Back exercise tutorial guide",
    "titleEn": "Exercise Guide: Kroc Row",
    "titleHi": "व्यायाम गाइड: क्रॉक रो (Kroc Row)",
    "badgeEn": "Back Focus",
    "badgeHi": "बैक फोकस"
  },
  "barbell-overhead-press": {
    "image": "/images/exercises/barbell-overhead-press.png",
    "alt": "How to do Barbell Overhead Press - Front Rack and Overhead Lockout positions",
    "titleEn": "Exercise Guide: Barbell Overhead Press",
    "titleHi": "व्यायाम गाइड: बार्बेल ओवरहेड प्रेस",
    "badgeEn": "Rack & Press",
    "badgeHi": "रैक और प्रेस"
  },
  "seated-dumbbell-shoulder-press": {
    "image": "/images/exercises/seated-dumbbell-shoulder-press.webp",
    "alt": "How to perform Seated Dumbbell Shoulder Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Dumbbell Shoulder Press",
    "titleHi": "व्यायाम गाइड: सीटेड डम्बल शोल्डर प्रेस (Seated Dumbbell Shoulder Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "standing-dumbbell-shoulder-press": {
    "image": "/images/exercises/standing-dumbbell-shoulder-press.webp",
    "alt": "How to perform Standing Dumbbell Shoulder Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Dumbbell Shoulder Press",
    "titleHi": "व्यायाम गाइड: स्टैंडिंग डम्बल शोल्डर प्रेस (Standing Dumbbell Shoulder Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "arnold-press": {
    "image": "/images/exercises/arnold-press.webp",
    "alt": "How to perform Arnold Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Arnold Press",
    "titleHi": "व्यायाम गाइड: अर्नोल्ड प्रेस (Arnold Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "machine-shoulder-press": {
    "image": "/images/exercises/machine-shoulder-press.webp",
    "alt": "How to perform Machine Shoulder Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Shoulder Press",
    "titleHi": "व्यायाम गाइड: मशीन शोल्डर प्रेस (Machine Shoulder Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "dumbbell-lateral-raise": {
    "image": "/images/exercises/dumbbell-lateral-raise.webp",
    "alt": "How to perform Dumbbell Lateral Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Lateral Raise",
    "titleHi": "व्यायाम गाइड: डम्बल लैटरल रेज़ (Dumbbell Lateral Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "cable-lateral-raise": {
    "image": "/images/exercises/cable-lateral-raise.webp",
    "alt": "How to perform Cable Lateral Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Lateral Raise",
    "titleHi": "व्यायाम गाइड: केबल लैटरल रेज़ (Cable Lateral Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "machine-lateral-raise": {
    "image": "/images/exercises/machine-lateral-raise.webp",
    "alt": "How to perform Machine Lateral Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Lateral Raise",
    "titleHi": "व्यायाम गाइड: मशीन लैटरल रेज़ (Machine Lateral Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "front-dumbbell-raise": {
    "image": "/images/exercises/front-dumbbell-raise.webp",
    "alt": "How to perform Front Dumbbell Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Front Dumbbell Raise",
    "titleHi": "व्यायाम गाइड: फ्रंट डम्बल रेज़ (Front Dumbbell Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "cable-front-raise": {
    "image": "/images/exercises/cable-front-raise.webp",
    "alt": "How to perform Cable Front Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Front Raise",
    "titleHi": "व्यायाम गाइड: केबल फ्रंट रेज़ (Cable Front Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "rear-delt-dumbbell-fly": {
    "image": "/images/exercises/rear-delt-dumbbell-fly.webp",
    "alt": "How to perform Rear Delt Dumbbell Fly - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Rear Delt Dumbbell Fly",
    "titleHi": "व्यायाम गाइड: रियर डेल्ट डम्बल फ्लाई (Rear Delt Dumbbell Fly)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "reverse-pec-deck": {
    "image": "/images/exercises/reverse-pec-deck.webp",
    "alt": "How to perform Reverse Pec Deck - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Reverse Pec Deck",
    "titleHi": "व्यायाम गाइड: रिवर्स पेक डेक (Reverse Pec Deck)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "cable-rear-delt-fly": {
    "image": "/images/exercises/cable-rear-delt-fly.webp",
    "alt": "How to perform Cable Rear Delt Fly - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Rear Delt Fly",
    "titleHi": "व्यायाम गाइड: केबल रियर डेल्ट फ्लाई (Cable Rear Delt Fly)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "upright-row": {
    "image": "/images/exercises/upright-row.webp",
    "alt": "How to perform Upright Row - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Upright Row",
    "titleHi": "व्यायाम गाइड: अपराइट रो (Upright Row)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "landmine-press": {
    "image": "/images/exercises/landmine-press.webp",
    "alt": "How to perform Landmine Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Landmine Press",
    "titleHi": "व्यायाम गाइड: लैंडमाइन प्रेस (Landmine Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "push-press": {
    "image": "/images/exercises/push-press.webp",
    "alt": "How to perform Push Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Push Press",
    "titleHi": "व्यायाम गाइड: पुश प्रेस (Push Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "dumbbell-y-raise": {
    "image": "/images/exercises/dumbbell-y-raise.webp",
    "alt": "How to perform Dumbbell Y-Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Y-Raise",
    "titleHi": "व्यायाम गाइड: डम्बल वाई-रेज़ (Dumbbell Y-Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "leaning-lateral-raise": {
    "image": "/images/exercises/leaning-lateral-raise.webp",
    "alt": "How to perform Leaning Lateral Raise - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Leaning Lateral Raise",
    "titleHi": "व्यायाम गाइड: लीनिंग लैटरल रेज़ (Leaning Lateral Raise)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "pike-push-ups": {
    "image": "/images/exercises/pike-push-ups.webp",
    "alt": "How to perform Pike Push-Ups - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Pike Push-Ups",
    "titleHi": "व्यायाम गाइड: पाइक पुश-अप्स (Pike Push-Ups)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "behind-the-neck-press": {
    "image": "/images/exercises/behind-the-neck-press.webp",
    "alt": "How to perform Behind-the-Neck Press - Shoulders exercise tutorial guide",
    "titleEn": "Exercise Guide: Behind-the-Neck Press",
    "titleHi": "व्यायाम गाइड: बिहाइंड-द-नेक प्रेस (Behind-the-Neck Press)",
    "badgeEn": "Shoulders Focus",
    "badgeHi": "शोल्डर्स फोकस"
  },
  "standing-barbell-curl": {
    "image": "/images/exercises/standing-barbell-curl.png",
    "alt": "How to do Standing Barbell Bicep Curl - Starting and Peak Contraction positions",
    "titleEn": "Exercise Guide: Standing Barbell Curl",
    "titleHi": "व्यायाम गाइड: स्टैंडिंग बार्बेल कर्ल",
    "badgeEn": "Lower & Curl",
    "badgeHi": "लोअर और कर्ल"
  },
  "ez-bar-curl": {
    "image": "/images/exercises/ez-bar-curl.webp",
    "alt": "How to perform EZ-Bar Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: EZ-Bar Curl",
    "titleHi": "व्यायाम गाइड: ईज़ी-बार कर्ल (EZ-Bar Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "alternating-dumbbell-curl": {
    "image": "/images/exercises/alternating-dumbbell-curl.webp",
    "alt": "How to perform Alternating Dumbbell Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Alternating Dumbbell Curl",
    "titleHi": "व्यायाम गाइड: अल्टरनेटिंग डम्बल कर्ल (Alternating Dumbbell Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "seated-dumbbell-curl": {
    "image": "/images/exercises/seated-dumbbell-curl.webp",
    "alt": "How to perform Seated Dumbbell Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Dumbbell Curl",
    "titleHi": "व्यायाम गाइड: सीटेड डम्बल कर्ल (Seated Dumbbell Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "incline-dumbbell-curl": {
    "image": "/images/exercises/incline-dumbbell-curl.webp",
    "alt": "How to perform Incline Dumbbell Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Incline Dumbbell Curl",
    "titleHi": "व्यायाम गाइड: इन्क्लाइन डम्बल कर्ल (Incline Dumbbell Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "hammer-curl": {
    "image": "/images/exercises/hammer-curl.webp",
    "alt": "How to perform Hammer Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Hammer Curl",
    "titleHi": "व्यायाम गाइड: हैमर कर्ल (Hammer Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "cross-body-hammer-curl": {
    "image": "/images/exercises/cross-body-hammer-curl.webp",
    "alt": "How to perform Cross-Body Hammer Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Cross-Body Hammer Curl",
    "titleHi": "व्यायाम गाइड: क्रॉस-बॉडी हैमर कर्ल (Cross-Body Hammer Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "preacher-curl": {
    "image": "/images/exercises/preacher-curl.webp",
    "alt": "How to perform Preacher Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Preacher Curl",
    "titleHi": "व्यायाम गाइड: प्रीचर कर्ल (Preacher Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "machine-preacher-curl": {
    "image": "/images/exercises/machine-preacher-curl.webp",
    "alt": "How to perform Machine Preacher Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Preacher Curl",
    "titleHi": "व्यायाम गाइड: मशीन प्रीचर कर्ल (Machine Preacher Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "concentration-curl": {
    "image": "/images/exercises/concentration-curl.webp",
    "alt": "How to perform Concentration Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Concentration Curl",
    "titleHi": "व्यायाम गाइड: कंसंट्रेशन कर्ल (Concentration Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "cable-biceps-curl": {
    "image": "/images/exercises/cable-biceps-curl.webp",
    "alt": "How to perform Cable Biceps Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Biceps Curl",
    "titleHi": "व्यायाम गाइड: केबल बाइसेप्स कर्ल (Cable Biceps Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "bayesian-cable-curl": {
    "image": "/images/exercises/bayesian-cable-curl.webp",
    "alt": "How to perform Bayesian Cable Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Bayesian Cable Curl",
    "titleHi": "व्यायाम गाइड: बायेसियन केबल कर्ल (Bayesian Cable Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "spider-curl": {
    "image": "/images/exercises/spider-curl.webp",
    "alt": "How to perform Spider Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Spider Curl",
    "titleHi": "व्यायाम गाइड: स्पाइडर कर्ल (Spider Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "drag-curl": {
    "image": "/images/exercises/drag-curl.webp",
    "alt": "How to perform Drag Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Drag Curl",
    "titleHi": "व्यायाम गाइड: ड्रैग कर्ल (Drag Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "reverse-curl": {
    "image": "/images/exercises/reverse-curl.webp",
    "alt": "How to perform Reverse Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Reverse Curl",
    "titleHi": "व्यायाम गाइड: रिवर्स कर्ल (Reverse Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "zottman-curl": {
    "image": "/images/exercises/zottman-curl.webp",
    "alt": "How to perform Zottman Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Zottman Curl",
    "titleHi": "व्यायाम गाइड: ज़ॉटमैन कर्ल (Zottman Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "resistance-band-curl": {
    "image": "/images/exercises/resistance-band-curl.webp",
    "alt": "How to perform Resistance Band Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Resistance Band Curl",
    "titleHi": "व्यायाम गाइड: रेसिस्टेंस बैंड कर्ल (Resistance Band Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "high-cable-curl": {
    "image": "/images/exercises/high-cable-curl.webp",
    "alt": "How to perform High Cable Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: High Cable Curl",
    "titleHi": "व्यायाम गाइड: हाई केबल कर्ल (High Cable Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "single-arm-cable-curl": {
    "image": "/images/exercises/single-arm-cable-curl.webp",
    "alt": "How to perform Single-Arm Cable Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Arm Cable Curl",
    "titleHi": "व्यायाम गाइड: सिंगल-आर्म केबल कर्ल (Single-Arm Cable Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "waiter-curl": {
    "image": "/images/exercises/waiter-curl.webp",
    "alt": "How to perform Waiter Curl - Biceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Waiter Curl",
    "titleHi": "व्यायाम गाइड: वेटर कर्ल (Waiter Curl)",
    "badgeEn": "Biceps Focus",
    "badgeHi": "बाइसेप्स फोकस"
  },
  "cable-pushdown": {
    "image": "/images/exercises/cable-pushdown.png",
    "alt": "How to do Cable Triceps Pushdown - 90 Degree Ready and Triceps Lockout positions",
    "titleEn": "Exercise Guide: Cable Triceps Pushdown",
    "titleHi": "व्यायाम गाइड: केबल ट्राइसेप्स पुशडाउन",
    "badgeEn": "Extend & Squeeze",
    "badgeHi": "एक्सटेंड और स्क्वीज"
  },
  "rope-triceps-pushdown": {
    "image": "/images/exercises/rope-triceps-pushdown.webp",
    "alt": "How to perform Rope Triceps Pushdown - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Rope Triceps Pushdown",
    "titleHi": "व्यायाम गाइड: रोप ट्राइसेप्स पुशडाउन (Rope Triceps Pushdown)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "straight-bar-pushdown": {
    "image": "/images/exercises/straight-bar-pushdown.webp",
    "alt": "How to perform Straight-Bar Pushdown - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Straight-Bar Pushdown",
    "titleHi": "व्यायाम गाइड: स्ट्रेट-बार पुशडाउन (Straight-Bar Pushdown)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "reverse-grip-pushdown": {
    "image": "/images/exercises/reverse-grip-pushdown.webp",
    "alt": "How to perform Reverse-Grip Pushdown - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Reverse-Grip Pushdown",
    "titleHi": "व्यायाम गाइड: रिवर्स-ग्रिप पुशडाउन (Reverse-Grip Pushdown)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "overhead-dumbbell-triceps-extension": {
    "image": "/images/exercises/overhead-dumbbell-triceps-extension.webp",
    "alt": "How to perform Overhead Dumbbell Triceps Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Overhead Dumbbell Triceps Extension",
    "titleHi": "व्यायाम गाइड: ओवरहेड डम्बल ट्राइसेप्स एक्सटेंशन (Overhead Dumbbell Triceps Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "overhead-cable-triceps-extension": {
    "image": "/images/exercises/overhead-cable-triceps-extension.webp",
    "alt": "How to perform Overhead Cable Triceps Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Overhead Cable Triceps Extension",
    "titleHi": "व्यायाम गाइड: ओवरहेड केबल ट्राइसेप्स एक्सटेंशन (Overhead Cable Triceps Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "ez-bar-skull-crushers": {
    "image": "/images/exercises/ez-bar-skull-crushers.webp",
    "alt": "How to perform EZ-Bar Skull Crushers - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: EZ-Bar Skull Crushers",
    "titleHi": "व्यायाम गाइड: ईज़ी-बार स्कल क्रशर्स (EZ-Bar Skull Crushers)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "dumbbell-skull-crushers": {
    "image": "/images/exercises/dumbbell-skull-crushers.webp",
    "alt": "How to perform Dumbbell Skull Crushers - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Skull Crushers",
    "titleHi": "व्यायाम गाइड: डम्बल स्कल क्रशर्स (Dumbbell Skull Crushers)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "close-grip-bench-press": {
    "image": "/images/exercises/close-grip-bench-press.webp",
    "alt": "How to perform Close-Grip Bench Press - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Close-Grip Bench Press",
    "titleHi": "व्यायाम गाइड: क्लोज़-ग्रिप बेंच प्रेस (Close-Grip Bench Press)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "diamond-push-ups": {
    "image": "/images/exercises/diamond-push-ups.webp",
    "alt": "How to perform Diamond Push-Ups - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Diamond Push-Ups",
    "titleHi": "व्यायाम गाइड: डायमंड पुश-अप्स (Diamond Push-Ups)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "bench-dips": {
    "image": "/images/exercises/bench-dips.webp",
    "alt": "How to perform Bench Dips - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Bench Dips",
    "titleHi": "व्यायाम गाइड: बेंच डिप्स (Bench Dips)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "assisted-triceps-dips": {
    "image": "/images/exercises/assisted-triceps-dips.webp",
    "alt": "How to perform Assisted Triceps Dips - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Assisted Triceps Dips",
    "titleHi": "व्यायाम गाइड: असिस्टेड ट्राइसेप्स डिप्स (Assisted Triceps Dips)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "single-arm-cable-extension": {
    "image": "/images/exercises/single-arm-cable-extension.webp",
    "alt": "How to perform Single-Arm Cable Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Arm Cable Extension",
    "titleHi": "व्यायाम गाइड: सिंगल-आर्म केबल एक्सटेंशन (Single-Arm Cable Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "cross-body-cable-triceps-extension": {
    "image": "/images/exercises/cross-body-cable-triceps-extension.webp",
    "alt": "How to perform Cross-Body Cable Triceps Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Cross-Body Cable Triceps Extension",
    "titleHi": "व्यायाम गाइड: क्रॉस-बॉडी केबल ट्राइसेप्स एक्सटेंशन (Cross-Body Cable Triceps Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "lying-triceps-extension": {
    "image": "/images/exercises/lying-triceps-extension.webp",
    "alt": "How to perform Lying Triceps Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Lying Triceps Extension",
    "titleHi": "व्यायाम गाइड: लाइंग ट्राइसेप्स एक्सटेंशन (Lying Triceps Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "seated-machine-triceps-extension": {
    "image": "/images/exercises/seated-machine-triceps-extension.webp",
    "alt": "How to perform Seated Machine Triceps Extension - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Machine Triceps Extension",
    "titleHi": "व्यायाम गाइड: सीटेड मशीन ट्राइसेप्स एक्सटेंशन (Seated Machine Triceps Extension)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "dumbbell-kickbacks": {
    "image": "/images/exercises/dumbbell-kickbacks.webp",
    "alt": "How to perform Dumbbell Kickbacks - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Kickbacks",
    "titleHi": "व्यायाम गाइड: डम्बल किकबैक्स (Dumbbell Kickbacks)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "cable-kickbacks": {
    "image": "/images/exercises/cable-kickbacks.webp",
    "alt": "How to perform Cable Kickbacks - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Kickbacks",
    "titleHi": "व्यायाम गाइड: केबल किकबैक्स (Cable Kickbacks)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "tate-press": {
    "image": "/images/exercises/tate-press.webp",
    "alt": "How to perform Tate Press - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Tate Press",
    "titleHi": "व्यायाम गाइड: टेट प्रेस (Tate Press)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "jm-press": {
    "image": "/images/exercises/jm-press.webp",
    "alt": "How to perform JM Press - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: JM Press",
    "titleHi": "व्यायाम गाइड: जेएम प्रेस (JM Press)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "parallel-bar-triceps-dips": {
    "image": "/images/exercises/parallel-bar-triceps-dips.webp",
    "alt": "How to perform Parallel Bar Triceps Dips - Triceps exercise tutorial guide",
    "titleEn": "Exercise Guide: Parallel Bar Triceps Dips",
    "titleHi": "व्यायाम गाइड: पैरेलल बार ट्राइसेप्स डिप्स (Parallel Bar Triceps Dips)",
    "badgeEn": "Triceps Focus",
    "badgeHi": "ट्राइसेप्स फोकस"
  },
  "barbell-back-squat": {
    "image": "/images/exercises/barbell-back-squat.png",
    "alt": "How to do Barbell Back Squat - Squat and Stand positions",
    "titleEn": "Exercise Guide: Barbell Back Squat",
    "titleHi": "व्यायाम गाइड: बार्बेल बैक स्क्वैट",
    "badgeEn": "Squat & Lockout",
    "badgeHi": "स्क्वैट और लॉकआउट"
  },
  "front-squat": {
    "image": "/images/exercises/front-squat.webp",
    "alt": "How to perform Front Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Front Squat",
    "titleHi": "व्यायाम गाइड: फ्रंट स्क्वाट (Front Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "goblet-squat": {
    "image": "/images/exercises/goblet-squat.webp",
    "alt": "How to perform Goblet Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Goblet Squat",
    "titleHi": "व्यायाम गाइड: गोब्लेट स्क्वाट (Goblet Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "hack-squat": {
    "image": "/images/exercises/hack-squat.webp",
    "alt": "How to perform Hack Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Hack Squat",
    "titleHi": "व्यायाम गाइड: हैक स्क्वाट (Hack Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "leg-press": {
    "image": "/images/exercises/leg-press.webp",
    "alt": "How to perform Leg Press - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Leg Press",
    "titleHi": "व्यायाम गाइड: लेग प्रेस (Leg Press)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "bulgarian-split-squat": {
    "image": "/images/exercises/bulgarian-split-squat.webp",
    "alt": "How to perform Bulgarian Split Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Bulgarian Split Squat",
    "titleHi": "व्यायाम गाइड: बुल्गारियन स्प्लिट स्क्वाट (Bulgarian Split Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "walking-lunges": {
    "image": "/images/exercises/walking-lunges.webp",
    "alt": "How to perform Walking Lunges - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Walking Lunges",
    "titleHi": "व्यायाम गाइड: वॉकिंग लंजेस (Walking Lunges)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "reverse-lunges": {
    "image": "/images/exercises/reverse-lunges.webp",
    "alt": "How to perform Reverse Lunges - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Reverse Lunges",
    "titleHi": "व्यायाम गाइड: रिवर्स लंजेस (Reverse Lunges)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "forward-lunges": {
    "image": "/images/exercises/forward-lunges.webp",
    "alt": "How to perform Forward Lunges - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Forward Lunges",
    "titleHi": "व्यायाम गाइड: फॉरवर्ड लंजेस (Forward Lunges)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "step-ups": {
    "image": "/images/exercises/step-ups.webp",
    "alt": "How to perform Step-Ups - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Step-Ups",
    "titleHi": "व्यायाम गाइड: स्टेप-अप्स (Step-Ups)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "leg-extension": {
    "image": "/images/exercises/leg-extension.webp",
    "alt": "How to perform Leg Extension - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Leg Extension",
    "titleHi": "व्यायाम गाइड: लेग एक्सटेंशन (Leg Extension)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "smith-machine-squat": {
    "image": "/images/exercises/smith-machine-squat.webp",
    "alt": "How to perform Smith Machine Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Smith Machine Squat",
    "titleHi": "व्यायाम गाइड: स्मिथ मशीन स्क्वाट (Smith Machine Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "heels-elevated-squat": {
    "image": "/images/exercises/heels-elevated-squat.webp",
    "alt": "How to perform Heels-Elevated Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Heels-Elevated Squat",
    "titleHi": "व्यायाम गाइड: हील्स-एलीवेटेड स्क्वाट (Heels-Elevated Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "sissy-squat": {
    "image": "/images/exercises/sissy-squat.webp",
    "alt": "How to perform Sissy Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Sissy Squat",
    "titleHi": "व्यायाम गाइड: सिसी स्क्वाट (Sissy Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "split-squat": {
    "image": "/images/exercises/split-squat.webp",
    "alt": "How to perform Split Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Split Squat",
    "titleHi": "व्यायाम गाइड: स्प्लिट स्क्वाट (Split Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "belt-squat": {
    "image": "/images/exercises/belt-squat.webp",
    "alt": "How to perform Belt Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Belt Squat",
    "titleHi": "व्यायाम गाइड: बेल्ट स्क्वाट (Belt Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "single-leg-leg-press": {
    "image": "/images/exercises/single-leg-leg-press.webp",
    "alt": "How to perform Single-Leg Leg Press - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Leg Leg Press",
    "titleHi": "व्यायाम गाइड: सिंगल-लेग लेग प्रेस (Single-Leg Leg Press)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "wall-sit": {
    "image": "/images/exercises/wall-sit.webp",
    "alt": "How to perform Wall Sit - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Wall Sit",
    "titleHi": "व्यायाम गाइड: वॉल सिट (Wall Sit)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "zercher-squat": {
    "image": "/images/exercises/zercher-squat.webp",
    "alt": "How to perform Zercher Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Zercher Squat",
    "titleHi": "व्यायाम गाइड: ज़र्चर स्क्वाट (Zercher Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "bodyweight-squat": {
    "image": "/images/exercises/bodyweight-squat.webp",
    "alt": "How to perform Bodyweight Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Bodyweight Squat",
    "titleHi": "व्यायाम गाइड: बॉडीवेट स्क्वाट (Bodyweight Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "landmine-squat": {
    "image": "/images/exercises/landmine-squat.webp",
    "alt": "How to perform Landmine Squat - Legs exercise tutorial guide",
    "titleEn": "Exercise Guide: Landmine Squat",
    "titleHi": "व्यायाम गाइड: लैंडमाइन स्क्वाट (Landmine Squat)",
    "badgeEn": "Legs Focus",
    "badgeHi": "लेग्स फोकस"
  },
  "romanian-deadlift": {
    "image": "/images/exercises/romanian-deadlift.webp",
    "alt": "How to perform Romanian Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Romanian Deadlift",
    "titleHi": "व्यायाम गाइड: रोमानियाई डेडलिफ्ट (Romanian Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "dumbbell-romanian-deadlift": {
    "image": "/images/exercises/dumbbell-romanian-deadlift.webp",
    "alt": "How to perform Dumbbell Romanian Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Romanian Deadlift",
    "titleHi": "व्यायाम गाइड: डम्बल रोमानियाई डेडलिफ्ट (Dumbbell Romanian Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "stiff-leg-deadlift": {
    "image": "/images/exercises/stiff-leg-deadlift.webp",
    "alt": "How to perform Stiff-Leg Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Stiff-Leg Deadlift",
    "titleHi": "व्यायाम गाइड: स्टिफ-लेग डेडलिफ्ट (Stiff-Leg Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "seated-leg-curl": {
    "image": "/images/exercises/seated-leg-curl.webp",
    "alt": "How to perform Seated Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Leg Curl",
    "titleHi": "व्यायाम गाइड: सीटेड लेग कर्ल (Seated Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "lying-leg-curl": {
    "image": "/images/exercises/lying-leg-curl.webp",
    "alt": "How to perform Lying Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Lying Leg Curl",
    "titleHi": "व्यायाम गाइड: लाइंग लेग कर्ल (Lying Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "standing-single-leg-curl": {
    "image": "/images/exercises/standing-single-leg-curl.webp",
    "alt": "How to perform Standing Single-Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Single-Leg Curl",
    "titleHi": "व्यायाम गाइड: स्टैंडिंग सिंगल-लेग कर्ल (Standing Single-Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "nordic-hamstring-curl": {
    "image": "/images/exercises/nordic-hamstring-curl.webp",
    "alt": "How to perform Nordic Hamstring Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Nordic Hamstring Curl",
    "titleHi": "व्यायाम गाइड: नॉर्डिक हैमस्ट्रिंग कर्ल (Nordic Hamstring Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "glute-ham-raise": {
    "image": "/images/exercises/glute-ham-raise.webp",
    "alt": "How to perform Glute-Ham Raise - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Glute-Ham Raise",
    "titleHi": "व्यायाम गाइड: ग्लूट-हैम रेज़ (Glute-Ham Raise)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "good-morning": {
    "image": "/images/exercises/good-morning.webp",
    "alt": "How to perform Good Morning - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Good Morning",
    "titleHi": "व्यायाम गाइड: गुड मॉर्निंग (Good Morning)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "single-leg-romanian-deadlift": {
    "image": "/images/exercises/single-leg-romanian-deadlift.webp",
    "alt": "How to perform Single-Leg Romanian Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Leg Romanian Deadlift",
    "titleHi": "व्यायाम गाइड: सिंगल-लेग रोमानियाई डेडलिफ्ट (Single-Leg Romanian Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "cable-pull-through": {
    "image": "/images/exercises/cable-pull-through.webp",
    "alt": "How to perform Cable Pull-Through - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable Pull-Through",
    "titleHi": "व्यायाम गाइड: केबल पुल-थ्रू (Cable Pull-Through)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "stability-ball-leg-curl": {
    "image": "/images/exercises/stability-ball-leg-curl.webp",
    "alt": "How to perform Stability Ball Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Stability Ball Leg Curl",
    "titleHi": "व्यायाम गाइड: स्टेबिलिटी बॉल लेग कर्ल (Stability Ball Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "slider-leg-curl": {
    "image": "/images/exercises/slider-leg-curl.webp",
    "alt": "How to perform Slider Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Slider Leg Curl",
    "titleHi": "व्यायाम गाइड: स्लाइडर लेग कर्ल (Slider Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "resistance-band-leg-curl": {
    "image": "/images/exercises/resistance-band-leg-curl.webp",
    "alt": "How to perform Resistance Band Leg Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Resistance Band Leg Curl",
    "titleHi": "व्यायाम गाइड: रेसिस्टेंस बैंड लेग कर्ल (Resistance Band Leg Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "kettlebell-deadlift": {
    "image": "/images/exercises/kettlebell-deadlift.webp",
    "alt": "How to perform Kettlebell Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Kettlebell Deadlift",
    "titleHi": "व्यायाम गाइड: केटलबेल डेडलिफ्ट (Kettlebell Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "single-leg-hip-hinge": {
    "image": "/images/exercises/single-leg-hip-hinge.webp",
    "alt": "How to perform Single-Leg Hip Hinge - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Leg Hip Hinge",
    "titleHi": "व्यायाम गाइड: सिंगल-लेग हिप हिंज (Single-Leg Hip Hinge)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "machine-hamstring-curl": {
    "image": "/images/exercises/machine-hamstring-curl.webp",
    "alt": "How to perform Machine Hamstring Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Machine Hamstring Curl",
    "titleHi": "व्यायाम गाइड: मशीन हैमस्ट्रिंग कर्ल (Machine Hamstring Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "assisted-nordic-curl": {
    "image": "/images/exercises/assisted-nordic-curl.webp",
    "alt": "How to perform Assisted Nordic Curl - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Assisted Nordic Curl",
    "titleHi": "व्यायाम गाइड: असिस्टेड नॉर्डिक कर्ल (Assisted Nordic Curl)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "glute-ham-raise-machine": {
    "image": "/images/exercises/glute-ham-raise-machine.webp",
    "alt": "How to perform Glute-Ham Raise Machine - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Glute-Ham Raise Machine",
    "titleHi": "व्यायाम गाइड: ग्लूट-हैम रेज़ मशीन (Glute-Ham Raise Machine)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "sumo-deadlift": {
    "image": "/images/exercises/sumo-deadlift.webp",
    "alt": "How to perform Sumo Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Sumo Deadlift",
    "titleHi": "व्यायाम गाइड: सुमो डेडलिफ्ट (Sumo Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "trap-bar-deadlift": {
    "image": "/images/exercises/trap-bar-deadlift.webp",
    "alt": "How to perform Trap Bar Deadlift - Hamstrings exercise tutorial guide",
    "titleEn": "Exercise Guide: Trap Bar Deadlift",
    "titleHi": "व्यायाम गाइड: ट्रैप बार डेडलिफ्ट (Trap Bar Deadlift)",
    "badgeEn": "Hamstrings Focus",
    "badgeHi": "हैमस्ट्रिंग्स फोकस"
  },
  "standing-calf-raise": {
    "image": "/images/exercises/standing-calf-raise.webp",
    "alt": "How to perform Standing Machine Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Machine Calf Raise",
    "titleHi": "व्यायाम गाइड: स्टैंडिंग मशीन काफ रेज (Standing Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "seated-calf-raise": {
    "image": "/images/exercises/seated-calf-raise.webp",
    "alt": "How to perform Seated Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Calf Raise",
    "titleHi": "व्यायाम गाइड: सीटेड काफ रेज (Seated Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "leg-press-calf-press": {
    "image": "/images/exercises/leg-press-calf-press.webp",
    "alt": "How to perform Leg Press Calf Press - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Leg Press Calf Press",
    "titleHi": "व्यायाम गाइड: लेग प्रेस काफ प्रेस (Leg Press Calf Press)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "single-leg-calf-raise": {
    "image": "/images/exercises/single-leg-calf-raise.webp",
    "alt": "How to perform Single-Leg Dumbbell Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Single-Leg Dumbbell Calf Raise",
    "titleHi": "व्यायाम गाइड: सिंगल-लेग डंबल काफ रेज (Single-Leg Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "dumbbell-standing-calf-raise": {
    "image": "/images/exercises/dumbbell-standing-calf-raise.webp",
    "alt": "How to perform Standing Dumbbell Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Dumbbell Calf Raise",
    "titleHi": "व्यायाम गाइड: स्टैंडिंग डंबल काफ रेज (Dumbbell Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "smith-machine-calf-raise": {
    "image": "/images/exercises/smith-machine-calf-raise.webp",
    "alt": "How to perform Smith Machine Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Smith Machine Calf Raise",
    "titleHi": "व्यायाम गाइड: स्मिथ मशीन काफ रेज (Smith Machine Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "donkey-calf-raise": {
    "image": "/images/exercises/donkey-calf-raise.webp",
    "alt": "How to perform Donkey Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Donkey Calf Raise",
    "titleHi": "व्यायाम गाइड: डोंकी काफ रेज (Donkey Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "seated-dumbbell-calf-raise": {
    "image": "/images/exercises/seated-dumbbell-calf-raise.webp",
    "alt": "How to perform Seated Dumbbell Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Dumbbell Calf Raise",
    "titleHi": "व्यायाम गाइड: सीटेड डंबल काफ रेज (Seated DB Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "bent-knee-calf-raise": {
    "image": "/images/exercises/bent-knee-calf-raise.webp",
    "alt": "How to perform Bent-Knee Calf Raise (Wall / Squat Position) - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Bent-Knee Calf Raise (Wall / Squat Position)",
    "titleHi": "व्यायाम गाइड: बेंट-नी काफ रेज (Bent-Knee Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "bodyweight-standing-calf-raise": {
    "image": "/images/exercises/bodyweight-standing-calf-raise.webp",
    "alt": "How to perform Bodyweight Standing Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Bodyweight Standing Calf Raise",
    "titleHi": "व्यायाम गाइड: बॉडीवेट स्टैंडिंग काफ रेज (Bodyweight Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "stair-calf-raise-deficit": {
    "image": "/images/exercises/stair-calf-raise-deficit.webp",
    "alt": "How to perform Deficit Stair Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Deficit Stair Calf Raise",
    "titleHi": "व्यायाम गाइड: डेफिसिट स्टेयर काफ रेज (Stair Deficit Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "hack-squat-calf-raise": {
    "image": "/images/exercises/hack-squat-calf-raise.webp",
    "alt": "How to perform Hack Squat Machine Calf Press - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Hack Squat Machine Calf Press",
    "titleHi": "व्यायाम गाइड: हैक स्क्वाट मशीन काफ प्रेस (Hack Squat Calf Press)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "resistance-band-calf-raise": {
    "image": "/images/exercises/resistance-band-calf-raise.webp",
    "alt": "How to perform Resistance Band Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Resistance Band Calf Raise",
    "titleHi": "व्यायाम गाइड: रेसिस्टेंस बैंड काफ रेज (Band Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "isometric-calf-hold": {
    "image": "/images/exercises/isometric-calf-hold.webp",
    "alt": "How to perform Isometric Peak Calf Hold - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Isometric Peak Calf Hold",
    "titleHi": "व्यायाम गाइड: आइसोमेट्रिक पीक काफ होल्ड (Isometric Calf Hold)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "paused-deficit-calf-raise": {
    "image": "/images/exercises/paused-deficit-calf-raise.webp",
    "alt": "How to perform Paused Deficit Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Paused Deficit Calf Raise",
    "titleHi": "व्यायाम गाइड: पॉज्ड डेफिसिट काफ रेज (Paused Deficit Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "eccentric-heel-drop": {
    "image": "/images/exercises/eccentric-heel-drop.webp",
    "alt": "How to perform Eccentric Heel Drop (Achilles Rehabilitation) - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Eccentric Heel Drop (Achilles Rehabilitation)",
    "titleHi": "व्यायाम गाइड: एक्सेंट्रिक हील ड्रॉप (Eccentric Heel Drop)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "farmers-walk-on-toes": {
    "image": "/images/exercises/farmers-walk-on-toes.webp",
    "alt": "How to perform Tip-Toe Farmer's Walk - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Tip-Toe Farmer's Walk",
    "titleHi": "व्यायाम गाइड: टिप-टो फार्मर्स वॉक (Tip-Toe Farmer's Walk)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "tibialis-anterior-raise": {
    "image": "/images/exercises/tibialis-anterior-raise.webp",
    "alt": "How to perform Wall Tibialis Anterior Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Wall Tibialis Anterior Raise",
    "titleHi": "व्यायाम गाइड: वॉल टिबियालिस एंटीरियर रेज (Wall Tibialis Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "reverse-calf-raise": {
    "image": "/images/exercises/reverse-calf-raise.webp",
    "alt": "How to perform Dumbbell Tibialis / Reverse Calf Raise - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Tibialis / Reverse Calf Raise",
    "titleHi": "व्यायाम गाइड: डंबल रिवर्स काफ रेज (Reverse Calf Raise)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "jump-rope": {
    "image": "/images/exercises/jump-rope.webp",
    "alt": "How to perform Jump Rope (Calf Conditioning & Plyometrics) - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Jump Rope (Calf Conditioning & Plyometrics)",
    "titleHi": "व्यायाम गाइड: जंप रोप / रस्सी कूदना (Jump Rope for Calves)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "seated-band-calf-extension": {
    "image": "/images/exercises/seated-band-calf-extension.webp",
    "alt": "How to perform Seated Resistance Band Calf Extension - Calves exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Resistance Band Calf Extension",
    "titleHi": "व्यायाम गाइड: सीटेड बैंड काफ एक्सटेंशन (Seated Band Calf Press)",
    "badgeEn": "Calves Focus",
    "badgeHi": "काव्स फोकस"
  },
  "standard-crunch": {
    "image": "/images/exercises/standard-crunch.webp",
    "alt": "How to perform Standard Floor Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Standard Floor Crunch",
    "titleHi": "व्यायाम गाइड: स्टैंडर्ड फ्लोर क्रंच (Floor Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "decline-crunch": {
    "image": "/images/exercises/decline-crunch.webp",
    "alt": "How to perform Decline Bench Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Decline Bench Crunch",
    "titleHi": "व्यायाम गाइड: डिक्लाइन बेंच क्रंच (Decline Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "cable-crunch": {
    "image": "/images/exercises/cable-crunch.webp",
    "alt": "How to perform Kneeling Cable Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Kneeling Cable Crunch",
    "titleHi": "व्यायाम गाइड: नीलिंग केबल क्रंच (Kneeling Cable Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "bicycle-crunch": {
    "image": "/images/exercises/bicycle-crunch.webp",
    "alt": "How to perform Bicycle Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Bicycle Crunch",
    "titleHi": "व्यायाम गाइड: बाइसिकिल क्रंच (Bicycle Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "reverse-crunch": {
    "image": "/images/exercises/reverse-crunch.webp",
    "alt": "How to perform Reverse Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Reverse Crunch",
    "titleHi": "व्यायाम गाइड: रिवर्स क्रंच (Reverse Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "hanging-knee-raise": {
    "image": "/images/exercises/hanging-knee-raise.webp",
    "alt": "How to perform Hanging Knee Raise - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Hanging Knee Raise",
    "titleHi": "व्यायाम गाइड: हैंगिंग नी रेज (Hanging Knee Raise)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "hanging-leg-raise": {
    "image": "/images/exercises/hanging-leg-raise.webp",
    "alt": "How to perform Hanging Straight-Leg Raise - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Hanging Straight-Leg Raise",
    "titleHi": "व्यायाम गाइड: हैंगिंग स्ट्रेट-लेग रेज (Hanging Leg Raise)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "captains-chair-leg-raise": {
    "image": "/images/exercises/captains-chair-leg-raise.webp",
    "alt": "How to perform Captain's Chair Knee/Leg Raise - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Captain's Chair Knee/Leg Raise",
    "titleHi": "व्यायाम गाइड: कैप्टन चेयर लेग रेज (Captain's Chair Leg Raise)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "ab-wheel-rollout": {
    "image": "/images/exercises/ab-wheel-rollout.webp",
    "alt": "How to perform Ab Wheel Rollout - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Ab Wheel Rollout",
    "titleHi": "व्यायाम गाइड: एब व्हील रोलआउट (Ab Wheel Rollout)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "plank": {
    "image": "/images/exercises/plank.png",
    "alt": "How to do Isometric Forearm Plank - Head to Heels Straight Line",
    "titleEn": "Exercise Guide: Forearm Plank",
    "titleHi": "व्यायाम गाइड: फोरआर्म प्लैंक",
    "badgeEn": "Core Bracing",
    "badgeHi": "कोर ब्रेसिंग"
  },
  "side-plank": {
    "image": "/images/exercises/side-plank.webp",
    "alt": "How to perform Side Plank - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Side Plank",
    "titleHi": "व्यायाम गाइड: साइड प्लैंक (Side Plank)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "dead-bug": {
    "image": "/images/exercises/dead-bug.webp",
    "alt": "How to perform Dead Bug - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Dead Bug",
    "titleHi": "व्यायाम गाइड: डेड बग (Dead Bug Core Exercise)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "hollow-body-hold": {
    "image": "/images/exercises/hollow-body-hold.webp",
    "alt": "How to perform Hollow Body Hold - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Hollow Body Hold",
    "titleHi": "व्यायाम गाइड: हॉलो बॉडी होल्ड (Hollow Body Hold)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "mountain-climbers": {
    "image": "/images/exercises/mountain-climbers.webp",
    "alt": "How to perform Mountain Climbers (Core & Conditioning) - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Mountain Climbers (Core & Conditioning)",
    "titleHi": "व्यायाम गाइड: माउंटेन क्लाइम्बर्स (Mountain Climbers)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "v-ups": {
    "image": "/images/exercises/v-ups.webp",
    "alt": "How to perform V-Ups (Jackknife Crunch) - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: V-Ups (Jackknife Crunch)",
    "titleHi": "व्यायाम गाइड: वी-अप्स (V-Ups Jackknife Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "toe-touches": {
    "image": "/images/exercises/toe-touches.webp",
    "alt": "How to perform Vertical Leg Toe Touches - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Vertical Leg Toe Touches",
    "titleHi": "व्यायाम गाइड: वर्टिकल लेग टो टचेस (Vertical Toe Touches)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "pallof-press": {
    "image": "/images/exercises/pallof-press.webp",
    "alt": "How to perform Cable / Band Pallof Press - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Cable / Band Pallof Press",
    "titleHi": "व्यायाम गाइड: पैलॉफ प्रेस (Cable Pallof Press)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "russian-twist": {
    "image": "/images/exercises/russian-twist.webp",
    "alt": "How to perform Seated Russian Twist - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Russian Twist",
    "titleHi": "व्यायाम गाइड: सीटेड रशियन ट्विस्ट (Russian Twists)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "weighted-sit-ups": {
    "image": "/images/exercises/weighted-sit-ups.webp",
    "alt": "How to perform Weighted Sit-Ups - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Weighted Sit-Ups",
    "titleHi": "व्यायाम गाइड: वेटेड सिट-अप्स (Weighted Sit-Ups)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "dragon-flag": {
    "image": "/images/exercises/dragon-flag.webp",
    "alt": "How to perform Dragon Flag (Bruce Lee Ab Exercise) - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Dragon Flag (Bruce Lee Ab Exercise)",
    "titleHi": "व्यायाम गाइड: ड्रैगन फ्लैग (Bruce Lee Dragon Flag)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "stability-ball-crunch": {
    "image": "/images/exercises/stability-ball-crunch.webp",
    "alt": "How to perform Stability Ball Crunch - Abs exercise tutorial guide",
    "titleEn": "Exercise Guide: Stability Ball Crunch",
    "titleHi": "व्यायाम गाइड: स्टेबिलिटी बॉल क्रंच (Stability Ball Crunch)",
    "badgeEn": "Abs Focus",
    "badgeHi": "एब्स फोकस"
  },
  "barbell-wrist-curl": {
    "image": "/images/exercises/barbell-wrist-curl.webp",
    "alt": "How to perform Seated Barbell Wrist Curl (Over-Bench) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Barbell Wrist Curl (Over-Bench)",
    "titleHi": "व्यायाम गाइड: सीटेड बारबेल रिस्ट कर्ल (Barbell Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "barbell-reverse-wrist-curl": {
    "image": "/images/exercises/barbell-reverse-wrist-curl.webp",
    "alt": "How to perform Barbell Reverse Wrist Curl (Extensors) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Barbell Reverse Wrist Curl (Extensors)",
    "titleHi": "व्यायाम गाइड: बारबेल रिवर्स रिस्ट कर्ल (Reverse Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "dumbbell-wrist-curl": {
    "image": "/images/exercises/dumbbell-wrist-curl.webp",
    "alt": "How to perform Seated Dumbbell Wrist Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Dumbbell Wrist Curl",
    "titleHi": "व्यायाम गाइड: सीटेड डंबल रिस्ट कर्ल (Dumbbell Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "dumbbell-reverse-wrist-curl": {
    "image": "/images/exercises/dumbbell-reverse-wrist-curl.webp",
    "alt": "How to perform Seated Dumbbell Reverse Wrist Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Seated Dumbbell Reverse Wrist Curl",
    "titleHi": "व्यायाम गाइड: सीटेड डंबल रिवर्स रिस्ट कर्ल (DB Reverse Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "behind-the-back-wrist-curl": {
    "image": "/images/exercises/behind-the-back-wrist-curl.webp",
    "alt": "How to perform Standing Behind-the-Back Barbell Wrist Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Behind-the-Back Barbell Wrist Curl",
    "titleHi": "व्यायाम गाइड: बिहाइंड-द-बैक बारबेल रिस्ट कर्ल (Behind Back Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "reverse-barbell-forearm-curl": {
    "image": "/images/exercises/reverse-barbell-forearm-curl.webp",
    "alt": "How to perform Standing Reverse Barbell Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Standing Reverse Barbell Curl",
    "titleHi": "व्यायाम गाइड: रिवर्स बारबेल कर्ल (Reverse Barbell Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "cross-body-forearm-hammer-curl": {
    "image": "/images/exercises/cross-body-forearm-hammer-curl.webp",
    "alt": "How to perform Cross-Body Hammer Curl (Forearms Focus) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Cross-Body Hammer Curl (Forearms Focus)",
    "titleHi": "व्यायाम गाइड: क्रॉस-बॉडी हैमर कर्ल (Cross-Body Hammer Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "zottman-forearm-rotation-curl": {
    "image": "/images/exercises/zottman-forearm-rotation-curl.webp",
    "alt": "How to perform Zottman Curl (Eccentric Forearm Overload) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Zottman Curl (Eccentric Forearm Overload)",
    "titleHi": "व्यायाम गाइड: ज़ॉटमैन कर्ल (Zottman Forearm Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "heavy-farmers-carry": {
    "image": "/images/exercises/heavy-farmers-carry.webp",
    "alt": "How to perform Heavy Dumbbell Farmer's Carry / Walk - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Heavy Dumbbell Farmer's Carry / Walk",
    "titleHi": "व्यायाम गाइड: हैवी डंबल फार्मर्स कैरी (Heavy Farmer's Carry)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "grip-dead-hang": {
    "image": "/images/exercises/grip-dead-hang.webp",
    "alt": "How to perform Dead Hang (Grip & Forearm Endurance) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Dead Hang (Grip & Forearm Endurance)",
    "titleHi": "व्यायाम गाइड: डेड हैंग (Dead Hang for Grip & Forearms)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "towel-grip-hang": {
    "image": "/images/exercises/towel-grip-hang.webp",
    "alt": "How to perform Towel Pull-Up Bar Hang - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Towel Pull-Up Bar Hang",
    "titleHi": "व्यायाम गाइड: टॉवेल ग्रिप हैंग (Towel Pull-Up Bar Hang)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "plate-pinch-hold": {
    "image": "/images/exercises/plate-pinch-hold.webp",
    "alt": "How to perform Two-Handed Weight Plate Pinch Hold - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Two-Handed Weight Plate Pinch Hold",
    "titleHi": "व्यायाम गाइड: वेट प्लेट पिंच होल्ड (Plate Pinch Hold)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "wrist-roller": {
    "image": "/images/exercises/wrist-roller.webp",
    "alt": "How to perform Wrist Roller (Flexion & Extension) - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Wrist Roller (Flexion & Extension)",
    "titleHi": "व्यायाम गाइड: रिस्ट रोलर (Wrist Roller Forearms)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "hand-gripper-squeeze": {
    "image": "/images/exercises/hand-gripper-squeeze.webp",
    "alt": "How to perform Hand Gripper Squeeze - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Hand Gripper Squeeze",
    "titleHi": "व्यायाम गाइड: हैंड ग्रिपर स्क्वीज (Hand Gripper Squeeze)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "finger-extension-band": {
    "image": "/images/exercises/finger-extension-band.webp",
    "alt": "How to perform Rubber Band Finger Extensions - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Rubber Band Finger Extensions",
    "titleHi": "व्यायाम गाइड: रबर बैंड फिंगर एक्सटेंशन (Finger Extensions)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "dumbbell-pronation-supination": {
    "image": "/images/exercises/dumbbell-pronation-supination.webp",
    "alt": "How to perform Dumbbell Pronation & Supination - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Dumbbell Pronation & Supination",
    "titleHi": "व्यायाम गाइड: डंबल प्रोनेशन और सुपिनेशन (Pronation & Supination)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "radial-ulnar-deviation": {
    "image": "/images/exercises/radial-ulnar-deviation.webp",
    "alt": "How to perform Lever / Sledgehammer Radial & Ulnar Deviation - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Lever / Sledgehammer Radial & Ulnar Deviation",
    "titleHi": "व्यायाम गाइड: रेडियल और अल्नार डेविएशन (Radial Ulnar Deviation)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "pinch-grip-deadlift": {
    "image": "/images/exercises/pinch-grip-deadlift.webp",
    "alt": "How to perform Pinch Grip Weight Plate Deadlift / Lift - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Pinch Grip Weight Plate Deadlift / Lift",
    "titleHi": "व्यायाम गाइड: पिंच ग्रिप वेट प्लेट डेडलिफ्ट (Pinch Grip Deadlift)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "fat-grip-dead-hang": {
    "image": "/images/exercises/fat-grip-dead-hang.webp",
    "alt": "How to perform Thick Bar / Fat Grip Hang - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Thick Bar / Fat Grip Hang",
    "titleHi": "व्यायाम गाइड: फैट ग्रिप बार हैंग (Fat Grip Dead Hang)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "behind-back-cable-wrist-curl": {
    "image": "/images/exercises/behind-back-cable-wrist-curl.webp",
    "alt": "How to perform Behind-the-Back Cable Wrist Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Behind-the-Back Cable Wrist Curl",
    "titleHi": "व्यायाम गाइड: बिहाइंड-द-बैक केबल रिस्ट कर्ल (Cable Behind Back Wrist Curl)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "barbell-finger-curls": {
    "image": "/images/exercises/barbell-finger-curls.webp",
    "alt": "How to perform Barbell Finger Roll Wrist Curl - Forearms exercise tutorial guide",
    "titleEn": "Exercise Guide: Barbell Finger Roll Wrist Curl",
    "titleHi": "व्यायाम गाइड: बारबेल फिंगर रोल रिस्ट कर्ल (Barbell Finger Curls)",
    "badgeEn": "Forearms Focus",
    "badgeHi": "फोरआर्म्स फोकस"
  },
  "pull-ups": {
    "image": "/images/exercises/pull-up.png",
    "alt": "How to do Pull-Up - Dead Hang and Top Contracted positions",
    "titleEn": "Exercise Guide: Pull-Up",
    "titleHi": "व्यायाम गाइड: पुल-अप",
    "badgeEn": "Hang & Pull",
    "badgeHi": "हैंग और पुल"
  },
  "incline-bench-press": {
    "image": "/images/exercises/incline-barbell-bench-press.png",
    "alt": "How to do Incline Barbell Bench Press - Lower and Press positions",
    "titleEn": "Exercise Guide: Incline Barbell Bench Press",
    "titleHi": "व्यायाम गाइड: इनक्लाइन बार्बेल बेंच प्रेस",
    "badgeEn": "Upper Chest Focus",
    "badgeHi": "अपर चेस्ट फोकस"
  },
  "decline-bench-press": {
    "image": "/images/exercises/decline-barbell-bench-press.png",
    "alt": "How to do Decline Barbell Bench Press - Lower and Press positions",
    "titleEn": "Exercise Guide: Decline Barbell Bench Press",
    "titleHi": "व्यायाम गाइड: डिक्लाइन बार्बेल बेंच प्रेस",
    "badgeEn": "Lower Chest Focus",
    "badgeHi": "लोअर चेस्ट फोकस"
  },
  "flat-dumbbell-press": {
    "image": "/images/exercises/flat-dumbbell-bench-press.png",
    "alt": "How to do Flat Dumbbell Bench Press - Stretch and Press positions",
    "titleEn": "Exercise Guide: Flat Dumbbell Bench Press",
    "titleHi": "व्यायाम गाइड: फ्लैट डम्बल बेंच प्रेस",
    "badgeEn": "Full Stretch & Press",
    "badgeHi": "फुल स्ट्रेच और प्रेस"
  },
  "incline-dumbbell-bench-press": {
    "image": "/images/exercises/incline-dumbbell-press.png",
    "alt": "How to do Incline Dumbbell Press - Setup and Press positions",
    "titleEn": "Exercise Guide: Incline Dumbbell Press",
    "titleHi": "व्यायाम गाइड: इनक्लाइन डम्बल प्रेस",
    "badgeEn": "Upper Chest Drive",
    "badgeHi": "अपर चेस्ट ड्राइव"
  },
  "decline-dumbbell-bench-press": {
    "image": "/images/exercises/decline-dumbbell-press.png",
    "alt": "How to do Decline Dumbbell Press - Setup and Press positions",
    "titleEn": "Exercise Guide: Decline Dumbbell Press",
    "titleHi": "व्यायाम गाइड: डिक्लाइन डम्बल प्रेस",
    "badgeEn": "Lower Pec Squeeze",
    "badgeHi": "लोअर पेक स्क्वीज"
  }
};

export function getExerciseGuide(id: string): ExerciseImageGuide | undefined {
  if (EXERCISE_GUIDE_IMAGES[id]) return EXERCISE_GUIDE_IMAGES[id];
  const cleaned = id.toLowerCase().replace(/_/g, '-');
  return EXERCISE_GUIDE_IMAGES[cleaned];
}
