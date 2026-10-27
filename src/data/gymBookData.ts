export interface BookPage {
  pageNumber: number;
  chapter: string;
  badge?: string;
  title: string;
  subtitle?: string;
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  sections?: {
    num?: string;
    heading: string;
    text: string;
  }[];
  paragraphs?: string[];
  bulletPoints?: string[];
  keyStats?: {
    label: string;
    value: string;
  }[];
  theme?: "cover" | "editorial" | "quoteFocus" | "timeline" | "grid";
}

export interface BookSpread {
  spreadIndex: number;
  leftPage: BookPage;
  rightPage: BookPage;
}

export const GYM_BOOK_SPREADS: BookSpread[] = [
  // SPREAD 1: Cover & Prologue
  {
    spreadIndex: 1,
    leftPage: {
      pageNumber: 1,
      chapter: "SPECIAL EDITION",
      badge: "THE IRON CHRONICLE",
      title: "THE CHRONICLES OF IRON",
      subtitle: "The Definitive Illustrated Anthology of Gym History, Legendary Icons, and Physical Mastery",
      paragraphs: [
        "Welcome to the sacred history of physical culture. For over three millennia, humanity has pursued strength not merely as an attribute of the flesh, but as the supreme forge of the human will.",
        "From the sunlit marble palaestras of Ancient Greece to the chalk-filled dungeons of Gold's Gym and Metroflex, this chronicle documents the pioneers, the science, the philosophy, and the hard truths of the iron lifestyle."
      ],
      quote: {
        text: "The Iron never lies to you. You can walk outside and listen to all kinds of talk... The Iron will always kick you the real deal. The Iron is the great reference point.",
        author: "Henry Rollins",
        role: "The Iron and The Soul"
      },
      theme: "cover"
    },
    rightPage: {
      pageNumber: 2,
      chapter: "TABLE OF CONTENTS",
      badge: "CHRONICLE INDEX",
      title: "WHAT LIES WITHIN",
      subtitle: "A Journey Through Epochs of Strength",
      sections: [
        {
          num: "01",
          heading: "The Ancient Roots",
          text: "Greek Palaestras, Roman gladiatorial conditioning, and the origins of progressive resistance."
        },
        {
          num: "02",
          heading: "The Pioneers of Modern Culture",
          text: "Eugen Sandow, the 1901 Royal Albert Hall contest, and the invention of symmetry."
        },
        {
          num: "03",
          heading: "The Golden Era Legends",
          text: "Arnold Schwarzenegger, Frank Zane, Franco Columbu, and the Venice Beach explosion."
        },
        {
          num: "04",
          heading: "The Heavyweight Titans",
          text: "Lee Haney, Dorian Yates' Blood & Guts, Ronnie Coleman's unstoppable reign, and Jay Cutler."
        },
        {
          num: "05",
          heading: "The Modern Renaissance & CBum",
          text: "Chris Bumstead, classic lines, and the global return to aesthetic symmetry."
        },
        {
          num: "06",
          heading: "The Truth: Advantages vs. Disadvantages",
          text: "Sarcopenia prevention, neurogenesis, and metabolic power vs. ego lifting, PEDs, and injury traps."
        }
      ],
      keyStats: [
        { label: "Centuries Documented", value: "30+" },
        { label: "Olympia Titles Covered", value: "45" },
        { label: "Core Philosophy", value: "Progressive Overload" }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 2: Ancient Greece & Strongmen Era
  {
    spreadIndex: 2,
    leftPage: {
      pageNumber: 3,
      chapter: "EPOCH I: ANTIQUITY",
      badge: "776 BC — 1800 AD",
      title: "THE ANCIENT PALAESTRA",
      subtitle: "Where Philosophy Met Physical Hardship",
      paragraphs: [
        "In ancient Athens and Sparta, the gymnasium was not a luxury; it was the bedrock of citizenship. Young men entered the palaestra to cultivate 'Kalokagathia' — the harmonious integration of bodily beauty and moral virtue.",
        "Milo of Croton, the greatest wrestler of antiquity, established the universal principle of progressive overload. Legend recounts that he lifted a newborn calf upon his shoulders every day until it grew into a full-grown bull. As the animal grew heavier, Milo became stronger."
      ],
      quote: {
        text: "No citizen has a right to be an amateur in the matter of physical training. What a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.",
        author: "Socrates",
        role: "Classical Greek Philosopher"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 4,
      chapter: "EPOCH II: 19TH CENTURY",
      badge: "THE DAWN OF IRON",
      title: "THE TRAVELLING STRONGMEN",
      subtitle: "The Circus Performers Who Sparked a Revolution",
      paragraphs: [
        "Before modern barbells, 19th-century strongmen toured European vaudeville stages, bending iron bars, lifting horses, and wrestling bears. Figures like Louis Cyr and George Hackenschmidt proved the astonishing limits of human tendon and bone.",
        "Hackenschmidt invented the Hack Squat and the Bench Press predecessor (the floor press). These pioneers proved that muscle was not merely genetic fate, but an adaptable organ system that could be shaped through calculated defiance of gravity."
      ],
      sections: [
        {
          num: "01",
          heading: "The Invention of the Barbell",
          text: "The globe barbell evolved into revolving-sleeve Olympic bars, transforming chaotic lifting into scientific repetition."
        },
        {
          num: "02",
          heading: "The Shift to Health",
          text: "Lifting shifted from theatrical spectacle to preventive medicine as urbanization increased sedentary work."
        }
      ],
      quote: {
        text: "The body will become whatever you force it to endure, provided the will never surrenders.",
        author: "George Hackenschmidt",
        role: "The Russian Lion (1877–1968)"
      },
      theme: "editorial"
    }
  },

  // SPREAD 3: Eugen Sandow — The Father of Modern Bodybuilding
  {
    spreadIndex: 3,
    leftPage: {
      pageNumber: 5,
      chapter: "THE PIONEERS",
      badge: "FATHER OF BODYBUILDING",
      title: "EUGEN SANDOW",
      subtitle: "Sculpting the Greek Ideal (1867 – 1925)",
      paragraphs: [
        "Friedrich Wilhelm Müller, known to the world as Eugen Sandow, single-handedly founded modern bodybuilding. Dissatisfied with brute, bulky strength without grace, Sandow traveled to Italy to measure classical Greco-Roman statues in museums.",
        "He measured his own waist, neck, chest, and arms, dedicating himself to matching the exact geometric golden ratios found in statues of Hercules and Apollo. In doing so, he showed the world that human anatomy could be intentionally sculpted like marble."
      ],
      quote: {
        text: "Life is movement. The secret of longevity lies in physical discipline and muscular mastery.",
        author: "Eugen Sandow",
        role: "The Father of Modern Bodybuilding"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 6,
      chapter: "THE 1901 REVOLUTION",
      badge: "ROYAL ALBERT HALL",
      title: "THE FIRST COMPETITION",
      subtitle: "When Bodybuilding Became a Sport",
      paragraphs: [
        "On September 14, 1901, Sandow hosted 'The Great Competition' at London's majestic Royal Albert Hall. The venue was packed to maximum capacity with over 15,000 spectators, turning away hundreds outside in the rain.",
        "The judges were Sandow himself, sculptor Sir Charles Lawes, and Sir Arthur Conan Doyle (author of Sherlock Holmes). The winner was presented with a solid bronze statuette of Sandow holding a barbell — the very trophy that is awarded today to Mr. Olympia winners."
      ],
      sections: [
        {
          num: "01",
          heading: "The Golden Sandow Trophy",
          text: "To this day, winning the Sandow statuette represents the pinnacle achievement in the sport of physical culture."
        },
        {
          num: "02",
          heading: "Commercial Fitness is Born",
          text: "Sandow published magazines, sold spring-grip dumbbells, and opened 'Institutes of Physical Culture' across the globe."
        }
      ],
      keyStats: [
        { label: "Contest Year", value: "1901" },
        { label: "Spectators", value: "15,000+" },
        { label: "Prize", value: "The Bronze Sandow" }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 4: Venice Beach & Gold's Gym (The Mecca)
  {
    spreadIndex: 4,
    leftPage: {
      pageNumber: 7,
      chapter: "THE HOLY LAND",
      badge: "CALIFORNIA 1965",
      title: "GOLD'S GYM VENICE",
      subtitle: "The Cinderblock Cathedral of Muscle",
      paragraphs: [
        "In 1965, merchant marine Joe Gold built a small, unadorned concrete building on Pacific Avenue in Venice Beach, California. There were no plush carpets, no air conditioning, and no saunas. Joe Gold welded his own heavy dumbbells and pulleys out of scrap steel and junkyard pipes.",
        "It soon earned the moniker 'The Mecca of Bodybuilding.' Athletes walked barefoot across sawdust floors, sharing barbells in the salt-sprayed Pacific breeze. It became the epicenter where lifting culture transformed the modern world."
      ],
      quote: {
        text: "You didn't go to Gold's to socialize; you went there to suffer and be reborn.",
        author: "Dave Draper",
        role: "The Blond Bomber (Mr. America 1965)"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 8,
      chapter: "THE BROTHERHOOD OF IRON",
      badge: "COMRADERIE",
      title: "THE MECCA CULTURE",
      subtitle: "Heavy Iron, Hard Truths & Unbroken Focus",
      paragraphs: [
        "What set the Venice era apart was its profound absence of ego. World champions spotted teenagers; heavy lifters shared their post-workout meals of ground beef, raw eggs, and cottage cheese on the pavement outside.",
        "The gym was a sanctuary from the Vietnam war and societal turmoil. Underneath the iron bar, all men were equal. The barbell cared nothing for your wealth, skin, or status. It asked only: 'Can you lift me?'"
      ],
      sections: [
        {
          num: "01",
          heading: "The Raw Atmosphere",
          text: "Weights clanged without rubber dampers. Motivation was palpable in every grunt and chalk-dusted handclap."
        },
        {
          num: "02",
          heading: "Universal Brotherhood",
          text: "Lifters pushed each other to extremes impossible to achieve alone, laying the foundation for modern training splits."
        }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 5: Arnold Schwarzenegger — The Golden Standard
  {
    spreadIndex: 5,
    leftPage: {
      pageNumber: 9,
      chapter: "THE GOLDEN STANDARD",
      badge: "7X MR. OLYMPIA",
      title: "ARNOLD SCHWARZENEGGER",
      subtitle: "The Austrian Oak Who Conquered the World",
      paragraphs: [
        "Born in the tiny Austrian village of Thal in 1947, Arnold Alois Schwarzenegger saw a photo of Reg Park in a magazine and decided his destiny. He trained in freezing barns, lifted tank parts during his mandatory Austrian military service, and moved to America with nothing but a gym bag.",
        "With unmatched chest development, peaking 22-inch biceps, and theatrical charisma, Arnold won 7 Mr. Olympia titles (1970–1975, 1980). The 1977 docudrama 'Pumping Iron' catapulted bodybuilding from an obscure subculture into global mainstream consciousness."
      ],
      quote: {
        text: "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
        author: "Arnold Schwarzenegger",
        role: "7x Mr. Olympia, Icon"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 10,
      chapter: "TRAINING PHILOSOPHY",
      badge: "THE OAK'S FORMULA",
      title: "THE PUMP & THE WILL",
      subtitle: "Antagonistic Supersets & High-Volume Warfare",
      paragraphs: [
        "Arnold was famous for his antagonistic supersets: pairing heavy Barbell Bench Press with Bent-Over Barbell Rows with zero rest. This engorged the entire upper torso with blood, creating the legendary 'double pump'.",
        "He believed that the last three or four reps of an agonizing set were the only ones that actually stimulated growth. While average lifters put the bar down when the muscle burns, champions lean into the fire."
      ],
      sections: [
        {
          num: "01",
          heading: "Visualization Technique",
          text: "When curling weights, Arnold visualized his biceps expanding to the size of mountain peaks, directing neurological drive."
        },
        {
          num: "02",
          heading: "Shocking the Muscle",
          text: "Never let the body adapt. Change reps, switch weights, strip sets, and attack the muscle from every conceivable angle."
        }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 6: Frank Zane & Franco Columbu
  {
    spreadIndex: 6,
    leftPage: {
      pageNumber: 11,
      chapter: "THE AESTHETES",
      badge: "3X MR. OLYMPIA",
      title: "FRANK ZANE: THE CHEMIST",
      subtitle: "The Master of Symmetry, Proportion, and Mind",
      paragraphs: [
        "Standing at 5'9\" and competing at just 185 pounds, Frank Zane defeated men 50 pounds heavier by perfecting the golden proportions of ancient Greek statues. He held degrees in mathematics and chemistry, treating physique development with scientific exactitude.",
        "His iconic vacuum pose, paper-thin skin, and razor-sharp abdominal wall proved that sheer mass is nothing without aesthetics, line, and flow. Zane remains the gold standard for aesthetic proportion."
      ],
      quote: {
        text: "Numbers are meaningless without proportion. A tiny waist and wide lats make a 185-pound man look like a 230-pound god.",
        author: "Frank Zane",
        role: "3x Mr. Olympia (1977–1979)"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 12,
      chapter: "THE SARDINIAN STRONGMAN",
      badge: "2X MR. OLYMPIA",
      title: "FRANCO COLUMBU",
      subtitle: "Unbreakable Density & Pure Functional Power",
      paragraphs: [
        "Franco Columbu was a former Italian amateur boxing champion and bricklayer from Sardinia who could deadlift over 750 pounds at a bodyweight under 190 lbs. He was Arnold's closest lifelong training partner and best friend.",
        "Franco was famous for his freakish upper chest cleft, lat spread, and unbelievable lung capacity (he would blow hot water bottles until they burst on television). He captured the Mr. Olympia in 1976 and made an inspirational comeback in 1981 after severe knee reconstruction."
      ],
      sections: [
        {
          num: "01",
          heading: "The Powerlifter's Base",
          text: "Franco insisted that real muscle density cannot be faked with isolation machines; it requires crushing heavy barbells."
        },
        {
          num: "02",
          heading: "Indomitable Resiliency",
          text: "After dislocating his knee carrying a refrigerator in World's Strongest Man, he rehabilitated himself to win Olympia."
        }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 7: Lee Haney & Dorian Yates
  {
    spreadIndex: 7,
    leftPage: {
      pageNumber: 13,
      chapter: "THE 8-TIME CHAMPION",
      badge: "8X MR. OLYMPIA",
      title: "LEE HANEY",
      subtitle: "The King of Longevity: Stimulate, Don't Annihilate",
      paragraphs: [
        "Dominating the 1980s with 8 consecutive Sandow trophies (1984–1991), Lee Haney broke Arnold's record. At 5'11\" and 245 pounds, Haney introduced an unprecedented scale of shoulder and lat width while keeping a tiny, aesthetic waist.",
        "More impressively, Haney retired at age 31 without a single major muscle tear or chronic orthopedic injury. His philosophy became a guiding beacon for lifters seeking longevity over short-term destruction."
      ],
      quote: {
        text: "Exercise to stimulate, not to annihilate. The world wasn't formed in a day, and neither were your muscles. Grow with patience and respect for your biology.",
        author: "Lee Haney",
        role: "8x Mr. Olympia"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 14,
      chapter: "THE SHADOW",
      badge: "6X MR. OLYMPIA",
      title: "DORIAN YATES",
      subtitle: "Blood, Guts & The High-Intensity Revolution",
      paragraphs: [
        "In the 1990s, a solitary figure emerged from Temple Gym — a damp, subterranean basement in Birmingham, England. Dorian Yates rejected the marathon 20-set workouts of Venice Beach in favor of Mike Mentzer's High-Intensity Training (HIT).",
        "Yates performed only 1 to 2 warm-up sets, followed by exactly ONE all-out working set taken completely to positive failure, followed by forced reps and negative contractions. He ushered in the modern 'Mass Monster' era with mind-boggling graininess and back thickness."
      ],
      quote: {
        text: "When most people stop because the pain burns too hot, that is where my workout actually begins. In that single set lies all the growth.",
        author: "Dorian Yates",
        role: "6x Mr. Olympia (1992–1997)"
      },
      theme: "editorial"
    }
  },

  // SPREAD 8: Ronnie Coleman & Jay Cutler
  {
    spreadIndex: 8,
    leftPage: {
      pageNumber: 15,
      chapter: "THE GREATEST EVER",
      badge: "8X MR. OLYMPIA",
      title: "RONNIE COLEMAN",
      subtitle: "The Uncrowned King of Heavy-Ass Weights",
      paragraphs: [
        "Full-time Arlington Texas police officer Ronald Dean Coleman redefined the boundaries of human physiology. Standing on stage at 295 pounds shredded to zero body fat, Ronnie paired superhuman mass with the smile and joy of a child.",
        "Inside Brian Dobson's sweltering Metroflex Gym, Ronnie famously squatted 800 pounds for 2 reps, deadlifted 800 pounds, and lunged down the Texas summer asphalt with 225 pounds across his shoulders. His joyful catchphrases became the universal battle-cries of gyms across the planet."
      ],
      quote: {
        text: "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weights! Ain't nothin' to it but to do it! LIGHTWEIGHT, BABY!",
        author: "Ronnie Coleman",
        role: "8x Mr. Olympia, Legend of Legends"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 16,
      chapter: "THE QUAD STOMP",
      badge: "4X MR. OLYMPIA",
      title: "JAY CUTLER",
      subtitle: "The Blueprint of Relentless Work Ethic & Comeback",
      paragraphs: [
        "For four agonizing years, Massachusetts native Jay Cutler placed runner-up behind Ronnie Coleman. Rather than retreating, Jay studied his losses, built an industrial empire, and in 2006 finally dethroned Coleman.",
        "After losing the title in 2008, critics claimed he was washed up. In 2009, Cutler returned in the best shape of his life, performed the legendary 'Quad Stomp' pose, and became the first and only man in history to regain the Mr. Olympia Sandow trophy after losing it."
      ],
      quote: {
        text: "Setbacks are inevitable; surrender is a choice. You don't lose when you get knocked down; you lose when you refuse to stand back up.",
        author: "Jay Cutler",
        role: "4x Mr. Olympia"
      },
      theme: "editorial"
    }
  },

  // SPREAD 9: Chris Bumstead & The Classic Renaissance
  {
    spreadIndex: 9,
    leftPage: {
      pageNumber: 17,
      chapter: "THE MODERN RENAISSANCE",
      badge: "5X CLASSIC OLYMPIA",
      title: "CHRIS BUMSTEAD (CBUM)",
      subtitle: "The Return of Golden Era Aesthetics",
      paragraphs: [
        "As modern Open bodybuilding grew excessively bloated with insulin and distended stomachs, fans yearned for the return of Arnold and Zane's tapering lines. In response, the IFBB created the Classic Physique division.",
        "Canadian superstar Chris Bumstead became the undisputed face of modern fitness. With his signature vacuum pose, sweeping quadriceps, and honest reflections on mental health and kidney disease, CBum built a global movement of millions of young lifters."
      ],
      quote: {
        text: "Champions are not made in the lights. They are forged in the quiet, freezing moments when no one is watching, when your body hurts, and you choose to do the work anyway.",
        author: "Chris Bumstead",
        role: "5x Classic Physique Mr. Olympia"
      },
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 18,
      chapter: "THE CULTURE TODAY",
      badge: "EVOLUTION 2026",
      title: "THE GLOBAL IRON TRIBE",
      subtitle: "From Dark Basements to Scientific Smart Gyms",
      paragraphs: [
        "Bodybuilding has evolved from a marginalized counterculture into the dominant fitness philosophy of modern society. Today, millions of lifters track their sets, measure macronutrients with precision, and apply sports science.",
        "Yet despite smart watches and high-tech equipment, the core reality remains unchanged: no machine can lift the weight for you. The bar demands genuine physical exertion, discipline, and grit."
      ],
      sections: [
        {
          num: "01",
          heading: "The Power of Community",
          text: "Social media and gyms have connected millions of lifters across every continent in shared pursuit of self-betterment."
        },
        {
          num: "02",
          heading: "Scientific Integration",
          text: "Biomechanical angle optimization, velocity-based training, and periodization now enhance raw hard work."
        }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 10: The Scientific Advantages of Gym
  {
    spreadIndex: 10,
    leftPage: {
      pageNumber: 19,
      chapter: "THE SCIENCE OF IRON",
      badge: "PHYSIOLOGY",
      title: "THE PHYSIOLOGICAL GIFTS",
      subtitle: "Why Resistance Training is the True Elixir of Life",
      paragraphs: [
        "Modern clinical medicine has confirmed what iron pioneers knew instinctively: skeletal muscle is the primary metabolic organ of the human body. Lifting heavy weights is the single most potent intervention for healthspan and lifespan.",
        "Here are the scientifically proven systemic transformations that occur when you train consistently:"
      ],
      sections: [
        {
          num: "01",
          heading: "Reversal of Sarcopenia & Bone Loss",
          text: "Resistance loading forces osteoblasts to lay down dense mineral matrix in bones, permanently preventing osteoporosis and age-related frailty."
        },
        {
          num: "02",
          heading: "Metabolic Mastery & Insulin Sensitivity",
          text: "Muscle tissue acts as a glucose sink. Expanding contractile proteins lowers blood sugar, prevents Type 2 diabetes, and elevates 24-hour basal metabolic rate."
        },
        {
          num: "03",
          heading: "Cardiovascular & Endothelial Vitality",
          text: "Compound lifting improves arterial compliance, lowers resting heart rate, and elevates HDL protective cholesterol."
        }
      ],
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 20,
      chapter: "THE PSYCHOLOGICAL ARMOR",
      badge: "NEUROSCIENCE",
      title: "THE UNBREAKABLE MIND",
      subtitle: "Forging Cognitive Resilience & Mental Fortitude",
      paragraphs: [
        "The greatest transformation that occurs in the gym does not happen in the mirror; it happens inside your brain. Under the bar, you repeatedly voluntary confront acute discomfort and conquer it.",
        "Neurologically, lifting triggers massive releases of Brain-Derived Neurotrophic Factor (BDNF), stimulating new neuronal connections, improving memory, and extinguishing chronic anxiety."
      ],
      sections: [
        {
          num: "01",
          heading: "Dopamine & Endorphin Regulation",
          text: "Unlike cheap digital dopamine from phone screens, the satisfaction of completing a grueling squat session recalibrates baseline dopamine receptors."
        },
        {
          num: "02",
          heading: "Internal Locus of Control",
          text: "You realize you cannot negotiate with the barbell. Your strength is 100% the outcome of your own effort. This builds unshakeable confidence in all aspects of life."
        }
      ],
      quote: {
        text: "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",
        author: "Arnold Schwarzenegger",
        role: "The Education of a Bodybuilder"
      },
      theme: "editorial"
    }
  },

  // SPREAD 11: The Disadvantages, Pitfalls & Hidden Dangers
  {
    spreadIndex: 11,
    leftPage: {
      pageNumber: 21,
      chapter: "THE HARD TRUTHS",
      badge: "THE PITFALLS",
      title: "THE DISADVANTAGES & RISKS",
      subtitle: "What Happens When Passion Turns Blind",
      paragraphs: [
        "Strength culture is glorious, but without wisdom and humility, it can extract a devastating toll. Millions of lifters sabotage their health through preventable mistakes, destructive ego, and toxic comparison.",
        "To lift for a lifetime, you must understand and evade the dark traps of the iron game:"
      ],
      sections: [
        {
          num: "01",
          heading: "The Curse of Ego Lifting",
          text: "Sacrificing biomechanical form to impress strangers leads to torn rotator cuffs, herniated lumbar discs, and permanent joint degeneration. The weight on the bar matters far less than tension on the target muscle."
        },
        {
          num: "02",
          heading: "Overtraining & CNS Exhaustion",
          text: "Muscles don't grow in the gym; they are broken down in the gym and grow while sleeping. Chronic overtraining without adequate sleep wrecks testosterone, elevates cortisol, and causes chronic fatigue."
        },
        {
          num: "03",
          heading: "Tendon & Ligament Lag",
          text: "Muscles adapt and strengthen in weeks; avascular tendons and connective ligaments take months. Lifting too heavy too quickly snaps tendons off the bone."
        }
      ],
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 22,
      chapter: "PSYCHOLOGICAL TRAPS",
      badge: "MENTAL HEALTH",
      title: "THE MIRROR OBSESSION",
      subtitle: "Muscle Dysmorphia & The Illusion of Perfection",
      paragraphs: [
        "In an era of hyper-filtered social media algorithms, young lifters are bombarded with unnaturally lean, chemically enhanced physiques 24 hours a day. This has fueled an epidemic of 'Bigorexia' — the persistent delusion that one is never big, lean, or impressive enough.",
        "Furthermore, the temptation of underground performance-enhancing drugs (anabolic steroids, SARMs, clenbuterol) has shortened countless lives, causing left ventricular heart hypertrophy, kidney failure, and irreversible endocrine shutdown."
      ],
      quote: {
        text: "Comparison is the thief of joy. Compete only against who you were yesterday. If you lose your health in pursuit of vanity, you have lost everything.",
        author: "The Iron Law",
        role: "Longevity Manifesto"
      },
      sections: [
        {
          num: "01",
          heading: "The Natural Standard",
          text: "Celebrate the natural human body. Slow, sustainable, natural progression over 5–10 years builds a physique you can keep into your 70s and 80s."
        },
        {
          num: "02",
          heading: "Balance with Real Life",
          text: "The gym is designed to enhance your life, your career, and your relationships — not to become a neurotic prison that consumes you."
        }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 12: Nutrition — The Forgotten Pillar
  {
    spreadIndex: 12,
    leftPage: {
      pageNumber: 23,
      chapter: "THE NUTRITIONAL BIBLE",
      badge: "DIET & MACROS",
      title: "FOOD IS THE DRUG",
      subtitle: "How Elite Athletes Eat to Build and Recover",
      paragraphs: [
        "Arnold ate 250 grams of protein daily from beef liver, steak, whole eggs, and cottage cheese. Ronnie Coleman consumed over 6,000 calories from rice, chicken, and broccoli during his mass-building phases.",
        "The hierarchy of nutrition for performance and body composition: total calories first, protein second (1.6–2.2g per kg bodyweight), carbohydrates as training fuel third, and healthy fats for hormone synthesis fourth."
      ],
      sections: [
        {
          num: "01",
          heading: "Protein Synthesis Window",
          text: "Distributing protein intake across 4–5 meals of 35–40g each maximizes muscle protein synthesis (MPS) rates throughout the day."
        },
        {
          num: "02",
          heading: "Carbohydrates: The Performance Fuel",
          text: "Glycogen stores in the muscle are the primary fuel for high-intensity resistance training. Low carb diets severely compromise strength output and hypertrophy stimulus."
        },
        {
          num: "03",
          heading: "The Creatine Advantage",
          text: "3–5g of creatine monohydrate daily is the most evidence-backed supplement for increasing phosphocreatine resynthesis, boosting strength and lean mass."
        }
      ],
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 24,
      chapter: "SLEEP & RECOVERY",
      badge: "THE THIRD PILLAR",
      title: "THE SILENT ANABOLIC",
      subtitle: "Why Sleep is the Most Powerful Drug in Bodybuilding",
      paragraphs: [
        "During deep sleep stages 3 and 4, the pituitary gland secretes 70% of its daily growth hormone output. This GH pulse triggers protein synthesis, repairs muscle micro-tears from training, and consolidates motor patterns learned in the gym.",
        "Chronic sleep deprivation below 6 hours reduces testosterone levels by up to 15%, spikes cortisol, elevates appetite hormones, and reduces insulin sensitivity — the exact physiological opposite of everything a lifter needs."
      ],
      sections: [
        {
          num: "01",
          heading: "The 7-9 Hour Mandate",
          text: "Every top-level athlete — from Ronnie Coleman to LeBron James — prioritizes 8–10 hours of sleep above almost every other recovery variable."
        },
        {
          num: "02",
          heading: "Deload Weeks",
          text: "Every 6–8 weeks, reduce volume by 40%. This allows connective tissues, the CNS, and hormonal systems to supercompensate and come back stronger."
        }
      ],
      keyStats: [
        { label: "GH Released in Sleep", value: "70%" },
        { label: "Optimal Sleep", value: "7-9 hrs" },
        { label: "Deload Frequency", value: "6-8 wks" }
      ],
      theme: "editorial"
    }
  },

  // SPREAD 13: The Iron Manifesto & Golden Rules
  {
    spreadIndex: 13,
    leftPage: {
      pageNumber: 25,
      chapter: "THE LIFTER'S MANIFESTO",
      badge: "LONGEVITY",
      title: "THE GOLDEN RULES",
      subtitle: "The 5 Commandments for Lifelong Strength",
      sections: [
        {
          num: "01",
          heading: "Master The Form First",
          text: "Never add weight to a flawed movement pattern. Check your ego at the gym door. Strict form protects your joints for decades."
        },
        {
          num: "02",
          heading: "Track Every Session",
          text: "What is measured is managed. If you don't track your weights, reps, and sets, you are merely exercising, not training."
        },
        {
          num: "03",
          heading: "Prioritize Sleep & Protein",
          text: "Aim for 7 to 9 hours of restorative sleep every night and 1.6 to 2.2 grams of protein per kilogram of bodyweight."
        },
        {
          num: "04",
          heading: "Take Scheduled Deload Weeks",
          text: "Every 6 to 8 weeks, reduce training volume by 40% to allow connective tissues and the central nervous system to supercompensate."
        },
        {
          num: "05",
          heading: "Consistency Outweighs Intensity",
          text: "A 7/10 workout done consistently for 5 years will beat a 10/10 brutal workout followed by three months of burnout and injury."
        }
      ],
      theme: "editorial"
    },
    rightPage: {
      pageNumber: 26,
      chapter: "FINAL WORDS",
      badge: "EPILOGUE",
      title: "TRACK. TRAIN. TRANSFORM.",
      subtitle: "Your Journey With FORMIQ Begins Today",
      paragraphs: [
        "You now hold the wisdom of three thousand years of physical culture. The champions who came before you — from Sandow in 1901 to Arnold, Coleman, and CBum — all stared at the same cold iron and made the same choice: to push through resistance.",
        "Your body is your only true temple on this earth. Treat it with relentless discipline, respect its biology, and never stop striving."
      ],
      quote: {
        text: "The gym is not a place where you change how you look. It is the crucible where you forge who you are.",
        author: "FORMIQ Iron Creed",
        role: "Train With Purpose"
      },
      keyStats: [
        { label: "Your Next Step", value: "Log A Workout" },
        { label: "Daily Mindset", value: "Discipline > Motivation" },
        { label: "The Outcome", value: "Total Transformation" }
      ],
      theme: "cover"
    }
  }
];
