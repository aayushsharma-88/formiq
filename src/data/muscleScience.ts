export interface MuscleAnatomy {
  id: string;
  name: string;
  commonName: string;
  category: "chest" | "back" | "shoulders" | "arms" | "legs" | "core";
  subdivision: string;
  location: string;
  origin: string;
  insertion: string;
  innervation: string;
  primaryActions: string[];
  secondaryFunctions: string[];
  roleInGym: string;
  angleInfluence?: string;
  misconceptions: string;
  summary: string;
  defaultView: "anterior" | "posterior" | "lateral" | "deep";
  exerciseIds: string[];
}

export interface MuscleCategoryMeta {
  id: "chest" | "back" | "shoulders" | "arms" | "legs" | "core";
  title: string;
  scientificName: string;
  subtitle: string;
  primaryRole: string;
  biomechanicsOverview: string;
  referenceImage: string;
  availableViews: ("anterior" | "posterior" | "lateral" | "deep")[];
}

export const MUSCLE_CATEGORIES: Record<string, MuscleCategoryMeta> = {
  chest: {
    id: "chest",
    title: "Chest",
    scientificName: "Thoracic Musculature (Pectoral Region)",
    subtitle: "Pectoralis Major (Clavicular, Sternal & Costal), Pectoralis Minor, Serratus Anterior & Subclavius",
    primaryRole: "Upper-body horizontal pushing, shoulder adduction, internal rotation, and scapular stabilization.",
    biomechanicsOverview: "The pectoral complex functions as the primary anterior engine for pushing force. Its fan-shaped fibers converge from the clavicle, sternum, and ribs onto the lateral lip of the humerus. By adjusting bench incline from 15° to 45°, pressing angles shift emphasis between the clavicular and sternocostal heads. The pectoralis minor and serratus anterior dictate scapular mechanics, preventing impingement and ensuring scapular protraction and upward rotation during pressing.",
    referenceImage: "/images/muscles/chest.png",
    availableViews: ["anterior", "deep", "lateral"]
  },
  back: {
    id: "back",
    title: "Back",
    scientificName: "Posterior Trunk & Spinal Musculature",
    subtitle: "Latissimus Dorsi, Trapezius (Upper, Mid, Lower), Rhomboids, Erector Spinae & Deep Stabilizers",
    primaryRole: "Upper-body pulling, scapular retraction/depression, spinal extension, and posterior chain stabilization.",
    biomechanicsOverview: "The back is a layered architectural masterpiece divided into superficial pulling movers (Lats, Trapezius, Rhomboids, Teres Major) and deep postural stabilizers (Erector Spinae, Multifidus, Quadratus Lumborum). The superficial muscles manipulate scapular and glenohumeral movement for vertical and horizontal pulling, while the deep spinal erectors resist flexion under axial load during deadlifts and squats, maintaining spinal integrity.",
    referenceImage: "/images/muscles/back.png",
    availableViews: ["posterior", "deep", "lateral"]
  },
  shoulders: {
    id: "shoulders",
    title: "Shoulders",
    scientificName: "Deltoid & Glenohumeral Musculature",
    subtitle: "Anterior, Lateral & Posterior Deltoids, Rotator Cuff (SITS) & Scapular Anchors",
    primaryRole: "Tri-planar arm elevation, overhead pressing, horizontal abduction, and glenohumeral joint centralization.",
    biomechanicsOverview: "The shoulder is the most mobile and inherently unstable joint in the body. The three deltoid heads deliver prime movement forces across different planes: anterior (flexion), lateral (abduction in the scapular plane), and posterior (horizontal abduction). Beneath the deltoids, the dynamic rotator cuff (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis) continuously compresses the humeral head into the glenoid fossa, stabilizing the joint against shear forces.",
    referenceImage: "/images/muscles/shoulders.png",
    availableViews: ["anterior", "lateral", "posterior", "deep"]
  },
  arms: {
    id: "arms",
    title: "Arms",
    scientificName: "Brachial & Antebrachial Musculature",
    subtitle: "Biceps Brachii, Brachialis, Triceps Brachii (3 Heads), Brachioradialis & Forearm Flexors/Extensors",
    primaryRole: "Elbow flexion and extension, radio-ulnar pronation/supination, wrist articulation, and grip power.",
    biomechanicsOverview: "The arm functions as the transmission unit connecting the torso to the hand. Elbow flexion is divided between the two-headed Biceps Brachii (maximized with forearm supination) and the deeper Brachialis (the pure elbow flexor active in all wrist positions). Elbow extension is governed by the three heads of the Triceps Brachii, where the biarticular Long Head requires shoulder flexion for a full stretch. The forearm musculature governs grip stability and rotational wrist torque.",
    referenceImage: "/images/muscles/biceps.png",
    availableViews: ["anterior", "posterior", "lateral"]
  },
  legs: {
    id: "legs",
    title: "Legs",
    scientificName: "Pelvic & Lower Extremity Musculature",
    subtitle: "Quadriceps, Hamstrings, Gluteals, Adductors, Calves (Gastrocnemius & Soleus) & Tibialis",
    primaryRole: "Locomotion, hip extension/abduction, knee flexion/extension, plantarflexion, and massive power generation.",
    biomechanicsOverview: "The lower body is divided into knee-dominant movements (quadriceps-focused squats, lunges, and leg presses) and hip-dominant movements (hamstring/glute-focused deadlifts, hinges, and hip thrusts). The Gluteus Maximus serves as the body's strongest hip extensor, while the biarticular Rectus Femoris and Hamstrings coordinate pelvis tilt and knee control. Calves balance explosive gastroc power with the endurance-oriented soleus.",
    referenceImage: "/images/muscles/legs.png",
    availableViews: ["anterior", "posterior", "lateral", "deep"]
  },
  core: {
    id: "core",
    title: "Core",
    scientificName: "Abdomino-Pelvic & Lumbo-Pelvic Cylinder",
    subtitle: "Rectus Abdominis, External & Internal Obliques, Transversus Abdominis, Diaphragm & Pelvic Floor",
    primaryRole: "Spinal anti-extension, anti-rotation, intra-abdominal pressure (IAP) generation, and force transfer.",
    biomechanicsOverview: "The core is an integrated cylindrical pressure canister. The visible Rectus Abdominis produces spinal flexion and resists hyperextension, while the layered Obliques control rotational torque and lateral stability. The deep Transversus Abdominis wraps horizontally like an anatomical weight belt, working synchronously with the Diaphragm and Pelvic Floor to generate Intra-Abdominal Pressure (IAP), bracing the lumbar spine during maximal compound lifts.",
    referenceImage: "/images/muscles/abs.png",
    availableViews: ["anterior", "lateral", "deep"]
  }
};

export const ALL_MUSCLES: MuscleAnatomy[] = [
  // ==========================================
  // 1. CHEST MUSCLES
  // ==========================================
  {
    id: "pec-major-clavicular",
    name: "Pectoralis Major — Clavicular Region",
    commonName: "Upper Chest",
    category: "chest",
    subdivision: "Superficial Pectoral (Superior Fibers)",
    location: "Anterior superior thoracic wall, originating along the medial half of the clavicle.",
    origin: "Anterior surface of the medial half of the clavicle.",
    insertion: "Lateral lip of the bicipital (intertubercular) groove of the humerus.",
    innervation: "Lateral pectoral nerve (C5, C6, C7).",
    primaryActions: [
      "Shoulder flexion (lifting arm forward and upward)",
      "Horizontal shoulder adduction (bringing arm across chest at upward angle)",
      "Internal (medial) rotation of the humerus"
    ],
    secondaryFunctions: [
      "Assists in deep inspiration when the upper limb is fixed",
      "Stabilizes the anterior glenohumeral joint during pushing"
    ],
    roleInGym: "Drives all incline pressing and low-to-high cable fly movements. The clavicular head has an upward fiber orientation, meaning it reaches maximal motor unit recruitment when the humerus flexes at a 30° to 45° angle relative to the torso.",
    angleInfluence: "A 30° incline bench press maximizes clavicular recruitment while minimizing excessive anterior deltoid dominance (which occurs above 45°). Low-to-high cable flyes specifically match the diagonal fiber line of this upper region.",
    misconceptions: "Bodybuilders often call this a 'separate muscle'. Scientifically, it is the superior division of the single pectoralis major, sharing a common insertion tendon with the sternocostal head.",
    summary: "The clavicular head of the pectoralis major originates from the medial clavicle and produces shoulder flexion and horizontal adduction, stimulated optimally by 30° incline presses and upward cable flyes.",
    defaultView: "anterior",
    exerciseIds: [
      "incline-barbell-bench-press",
      "incline-dumbbell-press",
      "incline-dumbbell-fly",
      "incline-push-ups",
      "decline-push-ups"
    ]
  },
  {
    id: "pec-major-sternocostal",
    name: "Pectoralis Major — Sternocostal Region",
    commonName: "Mid Chest / Sternal Head",
    category: "chest",
    subdivision: "Superficial Pectoral (Intermediate Fibers)",
    location: "Spans the anterior chest from the sternum across the anterior ribs to the humerus.",
    origin: "Anterior surface of the sternum and superior six costal cartilages.",
    insertion: "Lateral lip of the bicipital groove of the humerus (via shared bilaminar tendon).",
    innervation: "Medial and lateral pectoral nerves (C6, C7, C8, T1).",
    primaryActions: [
      "Horizontal shoulder adduction (drawing arm directly across torso)",
      "Glenohumeral internal rotation",
      "Adduction of the humerus toward anatomical midline"
    ],
    secondaryFunctions: [
      "Depresses the shoulder girdle under load",
      "Elevates ribs during heavy laboured breathing"
    ],
    roleInGym: "Forms the primary engine for standard flat barbell and dumbbell bench presses, machine chest presses, and horizontal pec deck flyes. It possesses the greatest physiological cross-sectional area (PCSA) of the pectoral complex.",
    angleInfluence: "Flat bench pressing (0° to 15°) aligns perpendicular to the sternocostal fiber orientation, providing the longest active moment arm and highest force output potential.",
    misconceptions: "The myth of the 'inner chest muscle'. EMG studies confirm that muscle fibers run horizontally across the entire width from sternum to arm; you cannot selectively grow the inner sternal attachment without growing the entire fiber.",
    summary: "The largest division of the pectoralis major, responsible for powerful horizontal pressing and adduction, trained maximally via flat bench presses and pec deck flyes.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-bench-press",
      "flat-dumbbell-bench-press",
      "pec-deck-fly",
      "dumbbell-chest-fly",
      "high-to-low-cable-fly"
    ]
  },
  {
    id: "pec-major-costal",
    name: "Pectoralis Major — Inferior Sternocostal & Abdominal Fibres",
    commonName: "Lower Chest",
    category: "chest",
    subdivision: "Superficial Pectoral (Inferior Fibers)",
    location: "Lower anterior chest border, running upward and laterally from the lower ribs and rectus sheath.",
    origin: "Aponeurosis of the external abdominal oblique and costal cartilages of ribs 6–7.",
    insertion: "Deep lamina of the lateral lip of the intertubercular sulcus of the humerus.",
    innervation: "Medial pectoral nerve (C8, T1).",
    primaryActions: [
      "Shoulder adduction from an abducted position",
      "Shoulder extension from a flexed position back to neutral",
      "Downward and forward horizontal adduction"
    ],
    secondaryFunctions: [
      "Depression of the shoulder girdle against resistance",
      "Assists in dynamic posture bracing during dips"
    ],
    roleInGym: "Dominates parallel bar dips, decline barbell presses, and high-to-low cable crossovers. The fibers twist under the sternal head to insert highest on the humerus, giving great mechanical leverage for downward pushing.",
    angleInfluence: "A 15° to 30° decline bench or a high-to-low cable crossover vector (pushing downward toward the pelvis) puts the resistance directly in line with these inferior oblique fibers.",
    misconceptions: "Many believe decline bench is the only way to build lower chest. Dips with a slight forward torso lean actually produce equal or superior activation due to full scapular depression and adduction.",
    summary: "The inferior fibers of the pectoralis major draw the arm down and across the torso, heavily recruited during dips, decline pressing, and high-to-low cable crossovers.",
    defaultView: "anterior",
    exerciseIds: [
      "decline-barbell-bench-press",
      "decline-dumbbell-press",
      "chest-dips",
      "high-to-low-cable-fly"
    ]
  },
  {
    id: "pectoralis-minor",
    name: "Pectoralis Minor",
    commonName: "Pec Minor (Deep Chest)",
    category: "chest",
    subdivision: "Deep Anterior Thoracic Musculature",
    location: "Deep beneath the pectoralis major on the upper anterior rib cage.",
    origin: "Anterior surfaces of ribs 3, 4, and 5 near their costal cartilages.",
    insertion: "Medial border and superior surface of the coracoid process of the scapula.",
    innervation: "Medial pectoral nerve (C8, T1).",
    primaryActions: [
      "Scapular depression (pulling shoulder blade downward)",
      "Scapular protraction and anterior tilting"
    ],
    secondaryFunctions: [
      "Accessory muscle of inspiration (elevates ribs 3–5 when scapula is stabilized)",
      "Dynamic stabilization of the scapula against the thoracic wall"
    ],
    roleInGym: "Crucial for scapular positioning. During dips and decline presses, the pec minor fires to depress and steady the shoulder girdle. When chronically shortened from poor posture or excessive pressing without rowing, it causes scapular anterior tilt and shoulder impingement.",
    angleInfluence: "Active during locked-out scapular depression drills and bottom stretch transitions of dips.",
    misconceptions: "Often confused with the lower pectoralis major. The pectoralis minor does not attach to the arm (humerus) at all; it attaches to the scapula and moves the shoulder blade, not the arm.",
    summary: "A deep triangular muscle beneath the pec major that stabilizes and depresses the scapula. Tightness causes anterior shoulder tilt; targeted by dips and scapular depression movements.",
    defaultView: "deep",
    exerciseIds: [
      "chest-dips",
      "high-to-low-cable-fly",
      "push-ups"
    ]
  },
  {
    id: "subclavius",
    name: "Subclavius",
    commonName: "Subclavius Muscle",
    category: "chest",
    subdivision: "Deep Subclavicular Stabilizer",
    location: "Small cylindrical muscle located horizontally beneath the clavicle.",
    origin: "Junction of the 1st rib and its costal cartilage.",
    insertion: "Inferior surface of the middle third of the clavicle (subclavian groove).",
    innervation: "Nerve to subclavius (C5, C6) from the superior trunk of the brachial plexus.",
    primaryActions: [
      "Depresses the clavicle",
      "Pulls the clavicle medially toward the sternum to stabilize the sternoclavicular (SC) joint"
    ],
    secondaryFunctions: [
      "Protects the underlying brachial plexus and subclavian vessels during shoulder impact"
    ],
    roleInGym: "Acts as a hydraulic anchor for the sternoclavicular joint during heavy overhead pressing and heavy bench pressing, preventing clavicular dislocation under maximal axial loads.",
    angleInfluence: "Active isometrically during all heavy compound pushing movements.",
    misconceptions: "Believed to be non-trainable. While it cannot be visually isolated for hypertrophy, its strength is critical for preventing sternoclavicular subluxation in elite strength athletes.",
    summary: "A small stabilizing muscle nestled under the collarbone that cushions neurovascular structures and stabilizes the SC joint during heavy pressing.",
    defaultView: "deep",
    exerciseIds: [
      "barbell-bench-press",
      "push-ups"
    ]
  },
  {
    id: "serratus-anterior",
    name: "Serratus Anterior",
    commonName: "The Boxer's Muscle",
    category: "chest",
    subdivision: "Lateral Thoracic Musculature",
    location: "Fan-shaped slips spanning the lateral rib cage from ribs 1–8 around to the medial scapula.",
    origin: "Outer surfaces of the upper 8 to 9 ribs.",
    insertion: "Costal (anterior) surface of the entire medial border of the scapula.",
    innervation: "Long thoracic nerve (roots C5, C6, C7).",
    primaryActions: [
      "Scapular protraction (drawing the shoulder blade forward around the ribcage)",
      "Scapular upward rotation (allowing the arm to raise overhead above 90°)"
    ],
    secondaryFunctions: [
      "Holds the scapula flush against the posterior thoracic wall, preventing scapular winging"
    ],
    roleInGym: "Vital for shoulder health and pressing power. At the lockout of push-ups ('push-up plus') and overhead presses, the serratus contracts to protract and rotate the scapula. Weakness causes scapular winging and rotator cuff impingement.",
    angleInfluence: "Lockout extension of push-ups, incline dumbbell presses, and overhead dumbbell carries heavily challenge the serratus anterior.",
    misconceptions: "Often mistaken for external obliques due to its finger-like interdigitations on the side ribs. It is an upper-body scapular protractor, not an abdominal rotator.",
    summary: "The finger-like muscle on the rib cage essential for healthy scapular protraction and upward rotation, preventing winging during push-ups and presses.",
    defaultView: "lateral",
    exerciseIds: [
      "push-ups",
      "incline-push-ups",
      "decline-push-ups",
      "chest-dips"
    ]
  },

  // ==========================================
  // 2. BACK MUSCLES
  // ==========================================
  {
    id: "latissimus-dorsi",
    name: "Latissimus Dorsi",
    commonName: "The Lats",
    category: "back",
    subdivision: "Superficial Posterior Trunk (V-Taper Muscle)",
    location: "Broadest muscle of the back, covering the lower half of the posterior thorax and lumbar region.",
    origin: "Spinous processes of T7–T12, thoracolumbar fascia, iliac crest, lower 3–4 ribs, and inferior scapular angle.",
    insertion: "Floor of the intertubercular groove of the humerus.",
    innervation: "Thoracodorsal nerve (C6, C7, C8).",
    primaryActions: [
      "Shoulder adduction (pulling the elbow down to the torso)",
      "Shoulder extension (pulling the arm backward in the sagittal plane)",
      "Internal rotation of the humerus"
    ],
    secondaryFunctions: [
      "Depresses the scapula via its downward vector",
      "Assists in lateral trunk flexion and pelvic stabilization"
    ],
    roleInGym: "The cornerstone of vertical and horizontal pulling (pull-ups, lat pulldowns, dumbbell rows). The latissimus dorsi creates the classic athletic 'V-taper' silhouette.",
    angleInfluence: "Vertical pulling with a neutral or supinated grip emphasizes lower lat thoracic fibers, while wide-grip pulldowns emphasize the upper sweeping fibers and teres major.",
    misconceptions: "Classifying all back exercises as 'lat' exercises. Rows with flared elbows target the upper back and rhomboids, whereas keeping elbows tucked close to the ribs routes the load directly into the lats.",
    summary: "The massive wing-like back muscle responsible for vertical pulling, shoulder extension, and the classic V-taper. Loaded heavily by pull-ups and tucked-elbow rows.",
    defaultView: "posterior",
    exerciseIds: [
      "pull-up",
      "chin-ups",
      "lat-pulldown",
      "close-grip-lat-pulldown",
      "one-arm-dumbbell-row",
      "straight-arm-cable-pulldown"
    ]
  },
  {
    id: "trapezius-upper",
    name: "Trapezius — Upper Fibres",
    commonName: "Upper Traps",
    category: "back",
    subdivision: "Superficial Posterior Cervico-Thoracic",
    location: "Posterior neck and upper shoulders, spanning from the base of the skull to the clavicle.",
    origin: "External occipital protuberance, superior nuchal line, and nuchal ligament.",
    insertion: "Posterior border of the lateral third of the clavicle and acromion.",
    innervation: "Spinal accessory nerve (Cranial Nerve XI) and C3–C4 cervical nerves.",
    primaryActions: [
      "Scapular elevation (shrugging the shoulders upward)",
      "Assists in scapular upward rotation during arm abduction"
    ],
    secondaryFunctions: [
      "Cervical extension and lateral flexion of the head and neck",
      "Resists downward traction of heavy weights held in hands"
    ],
    roleInGym: "Heavily stimulated during barbell shrugs, deadlifts, farmers walks, and rack pulls. Fires isometrically to support enormous loads hung from the arms.",
    angleInfluence: "Shrugging at a slight 30° forward angle matches the diagonal fiber orientation better than shrugging straight up into the ears.",
    misconceptions: "Rolling the shoulders in circles during shrugs. This places unnecessary grinding stress on the cervical spine and acromioclavicular joint without increasing trap hypertrophy.",
    summary: "Responsible for elevating the shoulder blades and carrying heavy loads. Built through heavy deadlifts, farmer walks, and controlled barbell shrugs.",
    defaultView: "posterior",
    exerciseIds: [
      "conventional-deadlift",
      "rack-pull",
      "face-pulls",
      "barbell-bent-over-row"
    ]
  },
  {
    id: "trapezius-mid-lower",
    name: "Trapezius — Middle & Lower Fibres",
    commonName: "Mid & Lower Traps",
    category: "back",
    subdivision: "Superficial Posterior Inter-Scapular",
    location: "Medial back between the shoulder blades and extending down to the mid-spine.",
    origin: "Spinous processes of C7 through T12 vertebrae.",
    insertion: "Spine of the scapula (middle) and tubercle of the scapular spine (lower).",
    innervation: "Spinal accessory nerve (Cranial Nerve XI).",
    primaryActions: [
      "Middle: Scapular retraction (pinching shoulder blades together)",
      "Lower: Scapular depression and upward rotation (countering upper trap dominance)"
    ],
    secondaryFunctions: [
      "Thoracic posture maintenance and preventing kyphotic hunched shoulders",
      "Stabilizes scapula during heavy bench pressing"
    ],
    roleInGym: "Key for back thickness and shoulder health. Mid-traps power wide-grip barbell rows and face pulls; lower traps are recruited in Y-raises, pull-ups, and overhead pressing stabilization.",
    angleInfluence: "Horizontal rowing with elbows flared to 45°–60° directly aligns resistance with the middle trapezius vectors.",
    misconceptions: "Thinking the traps only shrug. The middle and lower traps actually pull the shoulder blades down and back, acting as postural antagonists to rounded desk posture.",
    summary: "Essential for back thickness, scapular retraction, and posture. The lower fibers pull the scapula down while middle fibers pull it inward. Trained with wide rows and face pulls.",
    defaultView: "posterior",
    exerciseIds: [
      "barbell-bent-over-row",
      "seated-cable-row",
      "face-pulls",
      "chest-supported-row",
      "t-bar-row"
    ]
  },
  {
    id: "rhomboids",
    name: "Rhomboid Major & Minor",
    commonName: "The Rhomboids",
    category: "back",
    subdivision: "Intermediate Posterior Shoulder Girdle",
    location: "Deep to the middle trapezius between the vertebral column and the medial scapula.",
    origin: "Spinous processes of C7–T1 (Minor) and T2–T5 (Major).",
    insertion: "Medial border of the scapula from the spine to the inferior angle.",
    innervation: "Dorsal scapular nerve (C4, C5).",
    primaryActions: [
      "Scapular retraction (pulls scapula toward vertebral column)",
      "Scapular downward rotation (depresses the glenoid cavity)",
      "Fixates the scapula to the thoracic cage"
    ],
    secondaryFunctions: [
      "Prevents scapular winging alongside serratus anterior",
      "Supports posture during loaded carries"
    ],
    roleInGym: "Gives dense 3D thickness to the center of the back. Recruited intensely at the peak contraction of all rowing exercises (seated cable row, chest-supported row).",
    angleInfluence: "A pause at full retraction on rows drastically increases time under tension for rhomboid motor units.",
    misconceptions: "Believing they are active in pull-downs. Because rhomboids downwardly rotate the scapula, they actually relax during the initial upward rotation of an overhead pull.",
    summary: "Rhomboid major and minor anchor the shoulder blades to the spine, creating dense upper-back thickness during horizontal rows.",
    defaultView: "deep",
    exerciseIds: [
      "seated-cable-row",
      "barbell-bent-over-row",
      "chest-supported-row",
      "face-pulls"
    ]
  },
  {
    id: "erector-spinae",
    name: "Erector Spinae (Iliocostalis, Longissimus, Spinalis)",
    commonName: "Lower Back / Spinal Erectors",
    category: "back",
    subdivision: "Deep Intrinsic Vertebral Extensors",
    location: "Runs longitudinally along both sides of the vertebral column from the sacrum to the skull.",
    origin: "Broad tendon attached to the posterior sacrum, iliac crest, and lumbar spinous processes.",
    insertion: "Ribs, thoracic/cervical transverse processes, and mastoid process of temporal bone.",
    innervation: "Posterior rami of respective spinal nerves.",
    primaryActions: [
      "Bilateral contraction: Powerful spinal extension (straightening the back)",
      "Unilateral contraction: Lateral flexion and rotation of the spine"
    ],
    secondaryFunctions: [
      "Isometric anti-flexion: Resists forward spinal collapsing under heavy axial loads"
    ],
    roleInGym: "The hydraulic pillar of the posterior chain. Fires intensely during deadlifts, barbell back squats, good mornings, and romanian deadlifts to protect the intervertebral discs.",
    angleInfluence: "Undergo massive isometric stress at 90° hip hinges in Romanian deadlifts and bent-over rows.",
    misconceptions: "Training lower back exclusively through active spinal flexion and extension (like hyperextensions with a rounded spine). The erector spinae are designed primarily as anti-flexion stabilizers.",
    summary: "The deep column muscles flanking the spine that resist flexion and protect the spinal column during heavy deadlifts, squats, and rows.",
    defaultView: "deep",
    exerciseIds: [
      "conventional-deadlift",
      "romanian-deadlift",
      "barbell-back-squat",
      "barbell-bent-over-row"
    ]
  },
  {
    id: "teres-major",
    name: "Teres Major",
    commonName: "The Little Lat",
    category: "back",
    subdivision: "Scapulohumeral Muscle",
    location: "Thick oval muscle located above the latissimus dorsi on the lateral lower border of the scapula.",
    origin: "Posterior aspect of the inferior angle of the scapula.",
    insertion: "Medial lip of the intertubercular groove of the humerus.",
    innervation: "Lower subscapular nerve (C5, C6, C7).",
    primaryActions: [
      "Adduction of the humerus",
      "Internal rotation of the arm",
      "Shoulder extension from a flexed position"
    ],
    secondaryFunctions: [
      "Works synergistically with the latissimus dorsi to stabilize the humerus"
    ],
    roleInGym: "Assists the lats in all wide-grip pulldowns, pull-ups, and straight-arm pulldowns. Creates the outer upper frame of the back.",
    angleInfluence: "Maximal recruitment occurs during wide-grip vertical pulling movements where the shoulder moves through wide frontal plane adduction.",
    misconceptions: "Often confused as part of the rotator cuff. Teres major is NOT a rotator cuff muscle (Teres Minor is). It has no direct cuff attachment to the joint capsule.",
    summary: "The 'lat's little helper', originating on the lower scapula and inserting on the arm to assist in adduction, extension, and wide back width.",
    defaultView: "posterior",
    exerciseIds: [
      "pull-up",
      "lat-pulldown",
      "straight-arm-cable-pulldown",
      "one-arm-dumbbell-row"
    ]
  },
  {
    id: "deep-stabilizers-back",
    name: "Multifidus, Rotatores & Quadratus Lumborum",
    commonName: "Deep Segmental Stabilizers & QL",
    category: "back",
    subdivision: "Deep Intrinsic & Posterior Abdominal Wall",
    location: "Deepest back layer spanning vertebra-to-vertebra, with QL between the 12th rib and iliac crest.",
    origin: "Sacrum, mammillary processes, transverse processes (Multifidus/Rotatores); Iliac crest (QL).",
    insertion: "Spinous processes of vertebrae 2–4 segments above; 12th rib and L1–L4 transverse processes.",
    innervation: "Posterior rami of spinal nerves (Multifidus); T12, L1–L4 ventral rami (QL).",
    primaryActions: [
      "Inter-segmental spinal stabilization and micro-adjustments during movement",
      "Unilateral QL: Lateral trunk flexion and hip elevation ('hip hike')",
      "Resists shearing forces between adjacent lumbar vertebrae"
    ],
    secondaryFunctions: [
      "High density of muscle spindles provides critical proprioceptive feedback for balance"
    ],
    roleInGym: "Acts as dynamic rebar inside the lumbar spine during heavy squats and deadlifts, locking lumbar vertebrae in place to prevent disc herniation.",
    angleInfluence: "Challenged by single-leg Romanian deadlifts, suitcase carries, and isometric bracing.",
    misconceptions: "Ignoring deep stabilizers in favor of superficial muscles. Up to 80% of chronic gym lower-back pain stems from atrophy and delayed firing of the multifidus.",
    summary: "Deep microscopic stabilizers that lock the spine together vertebra-by-vertebra, preventing shearing injury during compound lifting.",
    defaultView: "deep",
    exerciseIds: [
      "conventional-deadlift",
      "plank",
      "barbell-back-squat"
    ]
  },

  // ==========================================
  // 3. SHOULDER MUSCLES
  // ==========================================
  {
    id: "anterior-deltoid",
    name: "Anterior Deltoid",
    commonName: "Front Delt",
    category: "shoulders",
    subdivision: "Superficial Deltoid (Clavicular Head)",
    location: "Anterior surface of the shoulder rounding over the clavicle.",
    origin: "Anterior border and superior surface of the lateral third of the clavicle.",
    insertion: "Deltoid tuberosity on the lateral surface of the humerus shaft.",
    innervation: "Axillary nerve (C5, C6).",
    primaryActions: [
      "Shoulder flexion (lifting arm directly forward)",
      "Horizontal shoulder adduction",
      "Internal rotation of the humerus"
    ],
    secondaryFunctions: [
      "Assists in stabilizing the humeral head during overhead carries"
    ],
    roleInGym: "Powers all overhead presses (barbell OHP, dumbbell shoulder press, Arnold press) and is heavily co-activated during all flat and incline chest presses.",
    angleInfluence: "Vertical overhead pressing places maximal gravitational resistance directly on the anterior fibers. Incline bench presses also generate up to 70% of maximal anterior delt EMG activation.",
    misconceptions: "Doing excessive front dumbbell raises. Because anterior deltoids get intense volume from all chest pressing and overhead pressing, isolated front raises are rarely necessary.",
    summary: "The front head of the shoulder responsible for pushing overhead and forward arm elevation. Frequently overdeveloped relative to the rear delts.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-overhead-press",
      "seated-dumbbell-shoulder-press",
      "standing-dumbbell-shoulder-press",
      "arnold-press",
      "cable-front-raise"
    ]
  },
  {
    id: "lateral-deltoid",
    name: "Lateral / Middle Deltoid",
    commonName: "Side Delt / Medial Delt",
    category: "shoulders",
    subdivision: "Superficial Deltoid (Acromial Head)",
    location: "Lateral outer aspect of the shoulder, forming the shoulder cap silhouette.",
    origin: "Superior surface and lateral margin of the acromion of the scapula.",
    insertion: "Deltoid tuberosity of the humerus.",
    innervation: "Axillary nerve (C5, C6).",
    primaryActions: [
      "Shoulder abduction (lifting arm outward to the side from 15° to 90°+)"
    ],
    secondaryFunctions: [
      "Stabilizes the glenohumeral joint against downward distraction forces"
    ],
    roleInGym: "The single muscle responsible for broad shoulder width and the classic 3D capped look. Targeted by dumbbell lateral raises, cable lateral raises, and upright rows.",
    angleInfluence: "Lifting in the scapular plane (30° forward of the pure lateral plane) matches the orientation of the glenoid fossa, maximizing side delt activation while eliminating subacromial impingement. Cable raises provide constant tension at the bottom where dumbbells offer none.",
    misconceptions: "Swinging heavy weights with torso momentum. The lateral deltoid is a pennate muscle with small moment arms; strict form with light-to-moderate loads and pauses creates far superior hypertrophy.",
    summary: "The side head of the shoulder that creates upper-body width. Abducts the arm in the scapular plane, best stimulated with controlled dumbbell and cable lateral raises.",
    defaultView: "lateral",
    exerciseIds: [
      "dumbbell-lateral-raise",
      "cable-lateral-raise",
      "upright-row",
      "leaning-lateral-raise"
    ]
  },
  {
    id: "posterior-deltoid",
    name: "Posterior Deltoid",
    commonName: "Rear Delt",
    category: "shoulders",
    subdivision: "Superficial Deltoid (Spinal Head)",
    location: "Posterior aspect of the shoulder rounding over the back of the joint.",
    origin: "Inferior lip of the posterior border of the spine of the scapula.",
    insertion: "Deltoid tuberosity of the humerus.",
    innervation: "Axillary nerve (C5, C6).",
    primaryActions: [
      "Horizontal shoulder abduction (pulling arm backward in horizontal plane)",
      "Shoulder hyperextension",
      "External rotation of the humerus"
    ],
    secondaryFunctions: [
      "Resists anterior subluxation of the humeral head during heavy pressing"
    ],
    roleInGym: "Provides 3D shoulder fullness from the side and back. Powers reverse pec deck flyes, face pulls, rear delt dumbbell flyes, and wide-grip rowing movements.",
    angleInfluence: "Setting the cable height at eye level with arms abducted to 45°–90° isolates the posterior fibers with minimal lat recruitment.",
    misconceptions: "Believing back rows adequately develop rear delts. EMG studies demonstrate that without dedicated horizontal abduction exercises (face pulls, reverse flyes), rear delts remain lagging behind front delts.",
    summary: "The back head of the deltoid that horizontally abducts and externally rotates the arm, crucial for joint balance, posture, and complete shoulder aesthetics.",
    defaultView: "posterior",
    exerciseIds: [
      "rear-delt-dumbbell-fly",
      "reverse-pec-deck",
      "face-pulls"
    ]
  },
  {
    id: "rotator-cuff",
    name: "Rotator Cuff (SITS: Supraspinatus, Infraspinatus, Teres Minor, Subscapularis)",
    commonName: "The Rotator Cuff",
    category: "shoulders",
    subdivision: "Deep Dynamic Glenohumeral Stabilizers",
    location: "Surrounds the glenohumeral joint capsule from all four sides.",
    origin: "Supraspinous fossa, infraspinous fossa, lateral scapular border, and subscapular fossa.",
    insertion: "Greater tubercle (Supraspinatus, Infraspinatus, Teres Minor) and lesser tubercle (Subscapularis) of the humerus.",
    innervation: "Suprascapular nerve (C5, C6), Axillary nerve (C5, C6), Upper & Lower Subscapular nerves (C5, C6).",
    primaryActions: [
      "Supraspinatus: Initiates the first 0°–15° of arm abduction",
      "Infraspinatus & Teres Minor: Powerful glenohumeral external rotation",
      "Subscapularis: Powerful internal rotation",
      "Collective: Dynamic centralization of the humeral head in the glenoid fossa"
    ],
    secondaryFunctions: [
      "Prevents superior, anterior, and posterior translation of the humerus during heavy loading"
    ],
    roleInGym: "The foundation of shoulder longevity. During every heavy bench press, pull-up, and overhead press, the rotator cuff fires synchronously to keep the ball centered in the shallow socket.",
    angleInfluence: "External cable rotations with elbow tucked at 90° train the infraspinatus and teres minor to balance against tight internal rotators (pecs and lats).",
    misconceptions: "Confusing the rotator cuff with the deltoid. The deltoids produce gross limb motion; the rotator cuff produces fine articular centration to prevent tearing and impingement.",
    summary: "A four-muscle stabilizing sleeve that locks the arm bone into the shoulder socket, preventing dislocations, tears, and impingement under heavy iron.",
    defaultView: "deep",
    exerciseIds: [
      "face-pulls",
      "rear-delt-dumbbell-fly"
    ]
  },

  // ==========================================
  // 4. ARMS MUSCLES
  // ==========================================
  {
    id: "biceps-brachii",
    name: "Biceps Brachii (Long Head & Short Head)",
    commonName: "The Biceps",
    category: "arms",
    subdivision: "Anterior Brachial Compartment",
    location: "Anterior aspect of the upper arm between the shoulder and elbow.",
    origin: "Long Head: Supraglenoid tubercle of the scapula. Short Head: Apex of the coracoid process.",
    insertion: "Radial tuberosity and bicipital aponeurosis into the deep fascia of the forearm.",
    innervation: "Musculocutaneous nerve (C5, C6).",
    primaryActions: [
      "Forearm supination (turning palm upward — strongest when elbow is flexed)",
      "Elbow flexion",
      "Weak shoulder flexion (due to crossing the glenohumeral joint)"
    ],
    secondaryFunctions: [
      "Stabilizes the anterior humeral head during abduction and external rotation"
    ],
    roleInGym: "The hallmark pulling muscle of the arm. Powers all curling variations (barbell curls, dumbbell curls, preacher curls) and assists in chin-ups and rows.",
    angleInfluence: "Incline dumbbell curls stretch the long head over the shoulder for a peak contraction. Preacher curls place the shoulder in flexion, shifting the resistance curve to emphasize the short head.",
    misconceptions: "Thinking the biceps only bends the elbow. Its most powerful biomechanical action is forearm supination; curling without supinating leaves significant motor units unrecruited.",
    summary: "A two-headed muscle on the front of the arm that powerfully supinates the wrist and flexes the elbow. Best trained with supinated barbell and dumbbell curls.",
    defaultView: "anterior",
    exerciseIds: [
      "standing-barbell-curl",
      "alternating-dumbbell-curl",
      "ez-bar-curl",
      "seated-dumbbell-curl",
      "chin-ups"
    ]
  },
  {
    id: "brachialis-coracobrachialis",
    name: "Brachialis & Coracobrachialis",
    commonName: "Deep Upper Arm Flexors",
    category: "arms",
    subdivision: "Deep Anterior Compartment",
    location: "Brachialis lies directly beneath the lower half of the biceps; Coracobrachialis is in the upper medial arm.",
    origin: "Brachialis: Distal half of the anterior humerus. Coracobrachialis: Coracoid process of the scapula.",
    insertion: "Brachialis: Coronoid process and tuberosity of the ulna. Coracobrachialis: Medial mid-shaft of the humerus.",
    innervation: "Musculocutaneous nerve (C5, C6, C7).",
    primaryActions: [
      "Brachialis: Pure elbow flexion regardless of forearm pronation or supination",
      "Coracobrachialis: Flexes and adducts the arm at the glenohumeral joint"
    ],
    secondaryFunctions: [
      "Brachialis serves as the true workhorse of elbow flexion due to its high PCSA and mechanical advantage"
    ],
    roleInGym: "Hypertrophy of the brachialis pushes the biceps brachii outward and upward, creating a thicker arm and taller peak. Heavily loaded during neutral-grip hammer curls and reverse curls.",
    angleInfluence: "Pronated (reverse) or neutral (hammer) grips downregulate biceps brachii contribution, transferring the primary load onto the brachialis and brachioradialis.",
    misconceptions: "Believing biceps peak is entirely genetic. Developing the underlying brachialis physically elevates the biceps peak by pushing it up from beneath.",
    summary: "The deep powerhouse beneath the biceps that inserts on the ulna. Fires purely to flex the elbow and creates impressive arm thickness via hammer curls.",
    defaultView: "anterior",
    exerciseIds: [
      "hammer-curl",
      "cross-body-hammer-curl",
      "ez-bar-curl"
    ]
  },
  {
    id: "triceps-long-head",
    name: "Triceps Brachii — Long Head",
    commonName: "Long Head Triceps",
    category: "arms",
    subdivision: "Posterior Brachial (Biarticular Head)",
    location: "Posterior-medial aspect of the upper arm, crossing both the shoulder and elbow joints.",
    origin: "Infraglenoid tubercle of the scapula.",
    insertion: "Posterior surface of the olecranon process of the ulna.",
    innervation: "Radial nerve (C6, C7, C8).",
    primaryActions: [
      "Elbow extension",
      "Shoulder extension and adduction (pulling arm backward and inward toward body)"
    ],
    secondaryFunctions: [
      "Assists in stabilizing the abducted shoulder joint"
    ],
    roleInGym: "Forms the largest mass of the triceps complex. Because it crosses the shoulder, it requires overhead triceps extensions (cable overhead extensions, skull crushers) to place it under an active stretch.",
    angleInfluence: "Shoulder elevation above 90° stretches the long head across the infraglenoid tubercle, placing it at optimal sarcomere length for maximum tension and hypertrophy.",
    misconceptions: "Thinking pushdowns maximally build the entire triceps. Standard pushdowns with elbows pinned by the ribs keep the long head in a shortened position, limiting its recruitment.",
    summary: "The largest head of the triceps that crosses the shoulder joint, requiring overhead extensions for full stretch and maximal muscle development.",
    defaultView: "posterior",
    exerciseIds: [
      "cable-pushdown",
      "rope-triceps-pushdown",
      "straight-bar-pushdown",
      "parallel-bar-triceps-dips"
    ]
  },
  {
    id: "triceps-lateral-medial",
    name: "Triceps Brachii — Lateral & Medial Heads",
    commonName: "Horseshoe Triceps",
    category: "arms",
    subdivision: "Posterior Brachial (Monoarticular Heads)",
    location: "Lateral and deep posterior arm, forming the outer horseshoe sweep.",
    origin: "Lateral: Posterior humerus superior to radial groove. Medial: Posterior humerus inferior to radial groove.",
    insertion: "Olecranon process of the ulna.",
    innervation: "Radial nerve (C7, C8).",
    primaryActions: [
      "Pure, powerful elbow extension across all angles"
    ],
    secondaryFunctions: [
      "Medial head is the active workhorse recruited in all elbow extension, even under light loads"
    ],
    roleInGym: "Creates the sharp lateral 'horseshoe' profile. Loaded heavily during heavy close-grip bench presses, cable pushdowns, and dips.",
    angleInfluence: "Pushdowns with elbows by the sides and pronated grip maximize lateral head tension near full extension lockout.",
    misconceptions: "Thinking you can completely isolate one head of the triceps. All three heads share the single olecranon insertion, meaning they all fire together during elbow extension with only relative emphasis changing.",
    summary: "The lateral and medial heads attach only to the arm bone, powering heavy lockouts, pushdowns, and close-grip pressing to create the triceps horseshoe.",
    defaultView: "posterior",
    exerciseIds: [
      "cable-pushdown",
      "straight-bar-pushdown",
      "reverse-grip-pushdown",
      "parallel-bar-triceps-dips"
    ]
  },
  {
    id: "forearms-brachioradialis",
    name: "Brachioradialis & Forearm Extensors",
    commonName: "Upper Forearm / Wrist Extensors",
    category: "arms",
    subdivision: "Anterior / Posterior Forearm Compartment",
    location: "Superficial lateral forearm, crossing the elbow to insert near the wrist thumb-side.",
    origin: "Proximal two-thirds of the lateral supracondylar ridge of the humerus.",
    insertion: "Lateral surface of the distal radius adjacent to the styloid process.",
    innervation: "Radial nerve (C5, C6).",
    primaryActions: [
      "Elbow flexion when the forearm is in a semi-pronated (neutral/hammer) position",
      "Wrist extension and stabilization against wrist flexion loads"
    ],
    secondaryFunctions: [
      "Acts as a semi-pronator and semi-supinator toward neutral"
    ],
    roleInGym: "Builds top-of-forearm thickness. Fired intensely during reverse barbell curls, neutral-grip hammer curls, and reverse wrist curls.",
    angleInfluence: "Neutral grip completely unleashes brachioradialis leverage due to its insertion far from the elbow axis on the radius.",
    misconceptions: "Believing the brachioradialis is just a grip muscle. It is actually a powerful elbow flexor that bypasses the upper arm entirely.",
    summary: "The prominent muscle along the top of the forearm that flexes the elbow in a neutral hammer position, built with hammer curls and reverse curls.",
    defaultView: "lateral",
    exerciseIds: [
      "barbell-reverse-wrist-curl",
      "dumbbell-reverse-wrist-curl",
      "hammer-curl"
    ]
  },
  {
    id: "forearms-flexors",
    name: "Wrist & Finger Flexors (FCR, FCU, Palmaris Longus, FDS, FDP)",
    commonName: "Inner Forearm / Grip Flexors",
    category: "arms",
    subdivision: "Anterior Forearm Compartment",
    location: "Inner fleshy anterior forearm spanning from the medial elbow epicondyle to the palm and fingers.",
    origin: "Common flexor tendon from the medial epicondyle of the humerus and anterior radius/ulna.",
    insertion: "Bases of metacarpals, palmar aponeurosis, and middle/distal phalanges of the fingers.",
    innervation: "Median nerve (C6–T1) and Ulnar nerve (C8, T1).",
    primaryActions: [
      "Wrist flexion (pulling palm toward inner forearm)",
      "Finger flexion (gripping, closing hand into a tight fist)",
      "Wrist adduction/abduction"
    ],
    secondaryFunctions: [
      "Dynamic wrist stability during heavy pressing and carrying"
    ],
    roleInGym: "The engine behind crushing grip strength for deadlifts, rows, and pull-ups. Directly loaded via barbell wrist curls and dead hangs.",
    angleInfluence: "Wrist curls with forearms supported on a bench isolate the wrist flexors through their full contraction range.",
    misconceptions: "Thinking straps make your forearms weak. Using straps on heavy deadlifts allows prime movers to be trained without grip failure, while dedicated forearm curls develop targeted grip volume.",
    summary: "The anterior forearm muscles responsible for crushing grip and wrist flexion, essential for holding heavy barbells and built with wrist curls.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-wrist-curl",
      "dumbbell-wrist-curl",
      "conventional-deadlift",
      "pull-up"
    ]
  },

  // ==========================================
  // 5. LEGS MUSCLES
  // ==========================================
  {
    id: "quadriceps-rectus-femoris",
    name: "Quadriceps — Rectus Femoris",
    commonName: "Rectus Femoris (Central Quad)",
    category: "legs",
    subdivision: "Anterior Thigh (Biarticular Quad Head)",
    location: "Runs straight down the center of the front thigh, crossing both the hip and knee joints.",
    origin: "Anterior inferior iliac spine (AIIS) and superior groove of the acetabulum.",
    insertion: "Base of the patella and via the patellar ligament into the tibial tuberosity.",
    innervation: "Femoral nerve (L2, L3, L4).",
    primaryActions: [
      "Knee extension (straightening the leg)",
      "Hip flexion (lifting the thigh toward the pelvis)"
    ],
    secondaryFunctions: [
      "Anterior pelvic stabilizer during single-leg balance"
    ],
    roleInGym: "The only quadriceps muscle that crosses the hip. In squats and leg presses, the hip flexes while the knee flexes (active insufficiency), leaving the rectus femoris under-stimulated. It requires seated leg extensions to reach maximal mechanical tension.",
    angleInfluence: "Seated leg extensions with a slightly reclined torso place the hip in extension, stretching the rectus femoris for peak hypertrophy.",
    misconceptions: "Believing back squats maximally build all four quad heads. Squats build massive vasti (lateralis, medialis, intermedius), but EMG and MRI prove the rectus femoris requires open-chain knee extensions.",
    summary: "The central two-joint quad muscle that flexes the hip and extends the knee. Squats under-train it; seated leg extensions are essential for full development.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-back-squat",
      "front-squat",
      "hack-squat",
      "goblet-squat"
    ]
  },
  {
    id: "quadriceps-vasti",
    name: "Quadriceps — Vastus Lateralis, Medialis (VMO) & Intermedius",
    commonName: "The Vasti / Quad Sweep & Teardrop",
    category: "legs",
    subdivision: "Anterior Thigh (Monoarticular Heads)",
    location: "Envelops the femur from lateral to medial across the entire front of the thigh.",
    origin: "Greater trochanter, intertrochanteric line, linea aspera, and anterior/lateral femoral shaft.",
    insertion: "Patella and tibial tuberosity via the shared quadriceps tendon.",
    innervation: "Femoral nerve (L2, L3, L4).",
    primaryActions: [
      "Powerful, pure knee extension"
    ],
    secondaryFunctions: [
      "Vastus Medialis Oblique (VMO) stabilizes patellar tracking medially against lateral dislocation"
    ],
    roleInGym: "The massive prime movers of squats, front squats, hack squats, and leg presses. Vastus Lateralis provides the wide outer 'quad sweep', while Vastus Medialis forms the inner 'teardrop' above the knee.",
    angleInfluence: "Deep knee flexion (ATG squats) under heavy load provides a massive stretch on the vastus lateralis and intermedius. Foot angle does not substantially isolate inner vs outer quad; knee depth is the key variable.",
    misconceptions: "Trying to isolate the VMO 'teardrop' with quirky foot rotations. The entire vastus group contracts as an integrated unit; complete knee extension under full range of motion is what hypertrophies the VMO.",
    summary: "The three single-joint quad muscles that power knee extension in squats, hack squats, and leg presses, creating the outer quad sweep and inner teardrop.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-back-squat",
      "front-squat",
      "hack-squat",
      "goblet-squat"
    ]
  },
  {
    id: "hamstrings-complex",
    name: "Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)",
    commonName: "The Hamstrings",
    category: "legs",
    subdivision: "Posterior Thigh Compartment",
    location: "Posterior aspect of the thigh spanning from the ischial tuberosity (sit bones) to below the knee.",
    origin: "Ischial tuberosity (all long heads) & linea aspera of femur (Biceps Femoris short head).",
    insertion: "Head of fibula (Biceps Femoris) & medial condyle/surface of tibia (Semimembranosus/Semitendinosus).",
    innervation: "Sciatic nerve (Tibial division for semitendinosus/semimembranosus/long head; Common fibular division for short head).",
    primaryActions: [
      "Knee flexion (bending the knee, pulling heel to glutes)",
      "Hip extension (driving the leg backward at the hip)",
      "Tibial internal/external rotation when knee is bent"
    ],
    secondaryFunctions: [
      "Dynamic knee joint stabilization, preventing anterior tibial translation (protecting the ACL)"
    ],
    roleInGym: "The engine of the posterior chain. Divided between hip-dominant exercises (Romanian deadlifts, stiff-leg deadlifts) and knee-flexion exercises (seated and lying leg curls).",
    angleInfluence: "Seated leg curls produce superior hypertrophy compared to lying leg curls because the flexed hip puts the hamstrings in a stretched position. Romanian deadlifts overload the lengthened hip-extension vector.",
    misconceptions: "Thinking deadlifts alone are enough for hamstrings. Deadlifts train hip extension but involve virtually zero knee flexion; leg curls are mandatory to train the short head of biceps femoris.",
    summary: "The three posterior thigh muscles that extend the hip and flex the knee. Complete development requires both Romanian deadlifts and seated leg curls.",
    defaultView: "posterior",
    exerciseIds: [
      "romanian-deadlift",
      "dumbbell-romanian-deadlift",
      "stiff-leg-deadlift",
      "seated-leg-curl"
    ]
  },
  {
    id: "gluteus-maximus",
    name: "Gluteus Maximus",
    commonName: "The Glutes",
    category: "legs",
    subdivision: "Superficial Gluteal Compartment",
    location: "Forms the bulk of the buttock, extending diagonally downward and outward toward the femur.",
    origin: "Posterior gluteal line of the ilium, posterior sacrum and coccyx, and sacrotuberous ligament.",
    insertion: "Iliotibial tract (IT band) of tensor fasciae latae and the gluteal tuberosity of the femur.",
    innervation: "Inferior gluteal nerve (L5, S1, S2).",
    primaryActions: [
      "Powerful hip extension (driving the pelvis forward or thigh backward)",
      "External rotation of the thigh",
      "Upper fibers: Hip abduction"
    ],
    secondaryFunctions: [
      "Steadies the pelvis on the femur to maintain upright bipedal posture",
      "Locks the knee joint in extension via tension on the iliotibial tract"
    ],
    roleInGym: "The single largest and most powerful muscle in the human body. Drives barbell hip thrusts, deadlifts, deep squats, lunges, and Bulgarian split squats.",
    angleInfluence: "Barbell hip thrusts place peak mechanical tension at the shortened lockout point, while deep squats overload the lengthened position.",
    misconceptions: "Believing high-rep kickbacks with ankle weights build maximum glute size. Gluteus maximus is composed of high-threshold motor units that respond best to heavy progressive overload on hip thrusts and squats.",
    summary: "The body's strongest hip extensor, responsible for upright posture and heavy pushing/thrusting power. Targeted with hip thrusts, squats, and Romanian deadlifts.",
    defaultView: "posterior",
    exerciseIds: [
      "barbell-back-squat",
      "romanian-deadlift",
      "conventional-deadlift",
      "front-squat"
    ]
  },
  {
    id: "gluteus-medius-minimus",
    name: "Gluteus Medius & Minimus",
    commonName: "Side Glutes / Hip Abductors",
    category: "legs",
    subdivision: "Lateral Gluteal Compartment",
    location: "Upper outer side of the pelvis, partially covered by the gluteus maximus.",
    origin: "Outer surface of the ilium between the anterior and posterior gluteal lines.",
    insertion: "Lateral and anterior surfaces of the greater trochanter of the femur.",
    innervation: "Superior gluteal nerve (L4, L5, S1).",
    primaryActions: [
      "Hip abduction (moving the leg outward away from midline)",
      "Internal rotation (anterior fibers) & external rotation (posterior fibers)"
    ],
    secondaryFunctions: [
      "Critical pelvic stabilizer during single-leg stance, preventing Trendelenburg pelvic drop"
    ],
    roleInGym: "Prevents knees from caving in (valgus collapse) during heavy squats. Targeted via cable hip abductions, Bulgarian split squats, and side-lying abductions.",
    angleInfluence: "Single-leg exercises (lunges, step-ups) force the gluteus medius to contract isometrically at high thresholds to keep the pelvis level.",
    misconceptions: "Dismissing hip abduction machines as 'non-functional'. Strong hip abductors are essential for protecting knees and lower back during heavy compound lifting.",
    summary: "The lateral hip stabilizers that keep your pelvis level when standing on one leg and prevent knee collapse during squats.",
    defaultView: "lateral",
    exerciseIds: [
      "barbell-back-squat",
      "goblet-squat"
    ]
  },
  {
    id: "adductors-complex",
    name: "Hip Adductors (Magnus, Longus, Brevis, Gracilis, Pectineus)",
    commonName: "Inner Thighs / The Groin",
    category: "legs",
    subdivision: "Medial Thigh Compartment",
    location: "Medial aspect of the thigh spanning from the pubic bone to the entire length of the femur.",
    origin: "Pubic body and inferior pubic ramus, ischial ramus, and ischial tuberosity (Adductor Magnus).",
    insertion: "Linea aspera and adductor tubercle of the femur; medial surface of tibia (Gracilis).",
    innervation: "Obturator nerve (L2, L3, L4) and Sciatic nerve (tibial division for 'hamstring' part of adductor magnus).",
    primaryActions: [
      "Hip adduction (drawing the leg inward toward the body's midline)",
      "Hip flexion assistance (anterior adductors)",
      "Powerful hip extension from deep flexion (Adductor Magnus)"
    ],
    secondaryFunctions: [
      "Stabilizes the pelvis during gait and deep squat transitions"
    ],
    roleInGym: "Adductor Magnus has a massive cross-sectional area second only to gluteus maximus. During the bottom 'hole' of a squat, adductor magnus acts as the primary hip extensor, working harder than the hamstrings.",
    angleInfluence: "Sumo deadlifts and wide-stance squats drastically increase the moment arm for the adductor complex.",
    misconceptions: "Believing squats don't train the inner thigh. Research shows deep squats cause substantial hypertrophy of the adductor magnus.",
    summary: "The inner thigh muscles that pull the legs together. Adductor magnus is a massive hip extensor that fires intensely at the bottom of deep squats and sumo deadlifts.",
    defaultView: "anterior",
    exerciseIds: [
      "barbell-back-squat",
      "goblet-squat",
      "conventional-deadlift"
    ]
  },
  {
    id: "calves-complex",
    name: "Calves — Gastrocnemius & Soleus",
    commonName: "The Calves",
    category: "legs",
    subdivision: "Posterior Crural (Superficial Lower Leg)",
    location: "Posterior lower leg from behind the knee down to the heel bone.",
    origin: "Gastrocnemius: Medial and lateral condyles of the femur. Soleus: Posterior head and upper shaft of fibula and tibia.",
    insertion: "Posterior calcaneus (heel bone) via the Achilles tendon (calcaneal tendon).",
    innervation: "Tibial nerve (S1, S2).",
    primaryActions: [
      "Plantarflexion (pointing toes down, elevating heel)",
      "Gastrocnemius: Assists in knee flexion (crosses knee joint)"
    ],
    secondaryFunctions: [
      "Soleus acts as a postural stabilizer preventing forward sway during quiet standing",
      "Acts as the 'skeletal-muscle pump' assisting venous blood return to the heart"
    ],
    roleInGym: "Trained via standing calf raises (loads gastrocnemius with knees straight) and seated calf raises (bends knee to 90°, putting gastroc in active insufficiency to isolate the slow-twitch soleus).",
    angleInfluence: "Standing calf raises train the explosive, fast-twitch gastrocnemius under a deep stretch. Seated calf raises route tension directly into the thick soleus underneath.",
    misconceptions: "Bouncing through rapid reps. The Achilles tendon is the thickest tendon in the body and stores immense elastic recoil; a 2-second pause at the bottom stretch is mandatory to eliminate tendon rebound and force the calf muscle to contract.",
    summary: "Gastrocnemius powers straight-leg standing calf raises, while the deeper soleus is isolated in seated calf raises. Controlled pauses at the bottom stretch are vital.",
    defaultView: "posterior",
    exerciseIds: [
      "standing-calf-raise",
      "seated-calf-raise",
      "single-leg-calf-raise"
    ]
  },
  {
    id: "lower-leg-tibialis-fibularis",
    name: "Tibialis Anterior & Fibularis (Peroneus) Muscles",
    commonName: "Shins & Outer Lower Leg",
    category: "legs",
    subdivision: "Anterior & Lateral Crural Compartment",
    location: "Anterior and lateral surface of the lower leg flanking the shin bone.",
    origin: "Lateral condyle and upper shaft of tibia; head and upper lateral fibula.",
    insertion: "Medial cuneiform and 1st metatarsal (Tibialis Anterior); 1st and 5th metatarsals (Fibularis longus/brevis).",
    innervation: "Deep fibular nerve (L4, L5) & Superficial fibular nerve (L5, S1).",
    primaryActions: [
      "Tibialis Anterior: Ankle dorsiflexion (pulling toes up toward shin) and inversion",
      "Fibularis: Ankle eversion (turning sole outward) and weak plantarflexion"
    ],
    secondaryFunctions: [
      "Maintains the medial and transverse arches of the foot; absorbs ground impact during running"
    ],
    roleInGym: "Dorsiflexion strength allows deep knee-over-toe squatting without heel lift, while strong shins protect against shin splints and patellar tendon strain.",
    angleInfluence: "Loaded toe raises against a wall or with a specialized tib bar build the tibialis anterior.",
    misconceptions: "Neglecting the front of the shin while only training calves leads to severe ankle imbalance and chronic knee pain.",
    summary: "The shin muscle responsible for pulling toes up and stabilizing the foot arch, crucial for squat depth and impact absorption.",
    defaultView: "anterior",
    exerciseIds: [
      "tibialis-anterior-raise",
      "standing-calf-raise",
      "single-leg-calf-raise"
    ]
  },

  // ==========================================
  // 6. CORE MUSCLES
  // ==========================================
  {
    id: "rectus-abdominis",
    name: "Rectus Abdominis",
    commonName: "The Six-Pack",
    category: "core",
    subdivision: "Superficial Anterior Abdominal Wall",
    location: "Paired strap-like muscle running vertically down the front of the abdomen separated by the linea alba.",
    origin: "Pubic crest and pubic symphysis.",
    insertion: "Cartilages of ribs 5, 6, and 7 and the xiphoid process of the sternum.",
    innervation: "Thoracoabdominal nerves (T7–T11) and subcostal nerve (T12).",
    primaryActions: [
      "Flexion of the lumbar spine (drawing rib cage toward pelvis or pelvis toward rib cage)",
      "Compresses abdominal viscera"
    ],
    secondaryFunctions: [
      "Posterior pelvic tilt (flattening lumbar lordosis against extension forces)"
    ],
    roleInGym: "Trained through spinal flexion movements like cable crunches, hanging leg raises, and decline crunches, as well as anti-extension holds like planks and ab wheel rollouts.",
    angleInfluence: "Hanging leg raises emphasize the lower region via posterior pelvic tilt; cable crunches bend the upper thoracic spine down toward the hips, emphasizing upper fibers.",
    misconceptions: "The myth of 'upper and lower abs' as separate muscles. It is a single continuous muscle segmented by fibrous tendinous intersections. While emphasis can slightly shift, the entire sheet fires together.",
    summary: "The vertical six-pack muscle that flexes the spine and resists lumbar extension, trained via cable crunches, leg raises, and rollouts.",
    defaultView: "anterior",
    exerciseIds: [
      "standard-crunch",
      "decline-crunch",
      "cable-crunch",
      "hanging-leg-raise",
      "hanging-knee-raise",
      "plank"
    ]
  },
  {
    id: "obliques-external-internal",
    name: "External & Internal Obliques",
    commonName: "The Obliques",
    category: "core",
    subdivision: "Lateral Antero-Lateral Abdominal Wall",
    location: "Flanks the sides of the abdomen in diagonal criss-cross layers.",
    origin: "External: Ribs 5–12. Internal: Thoracolumbar fascia, iliac crest, and lateral inguinal ligament.",
    insertion: "External: Linea alba, pubic tubercle, iliac crest. Internal: Ribs 10–12, linea alba, pubic crest.",
    innervation: "Thoracoabdominal nerves (T7–T11), subcostal nerve (T12), iliohypogastric and ilioinguinal nerves (L1).",
    primaryActions: [
      "Bilateral: Flexes vertebral column and compresses abdominal cavity",
      "Unilateral: Lateral trunk flexion (side bending) and axial trunk rotation"
    ],
    secondaryFunctions: [
      "Transfers rotational torque from the lower body to the upper limbs in throwing and punching",
      "Anti-rotation: Resists unwanted twisting under load (e.g., Pallof press)"
    ],
    roleInGym: "Powers side planks, bicycle crunches, woodchoppers, and Pallof presses. Critical for rotational athleticism and waist stability.",
    angleInfluence: "Anti-rotation isometric drills (Pallof press) build functional stability without thickening the waistline excessively.",
    misconceptions: "Doing heavy dumbbell side bends to 'burn love handles'. Fat loss cannot be spot-reduced, and heavy loaded side bends hypertrophy the obliques outward, potentially widening the waist.",
    summary: "The diagonal muscles flanking the waist that control trunk rotation, lateral flexion, and resist rotational forces during lifting.",
    defaultView: "lateral",
    exerciseIds: [
      "bicycle-crunch",
      "side-plank",
      "pallof-press",
      "dead-bug",
      "plank"
    ]
  },
  {
    id: "transversus-abdominis",
    name: "Transversus Abdominis (TVA)",
    commonName: "The Inner Corset / Deep Core",
    category: "core",
    subdivision: "Deep Abdominal Wall",
    location: "Deepest muscle layer of the abdominal wall, fibers running horizontally like a corset.",
    origin: "Thoracolumbar fascia, iliac crest, lateral third of inguinal ligament, and inner surfaces of costal cartilages 7–12.",
    insertion: "Linea alba, aponeurosis of internal oblique, and pubic crest via conjoint tendon.",
    innervation: "Lower intercostal nerves (T7–T11), subcostal (T12), iliohypogastric and ilioinguinal nerves (L1).",
    primaryActions: [
      "Constricts abdominal contents, flatting the abdomen",
      "Creates Intra-Abdominal Pressure (IAP) to support the lumbar spine"
    ],
    secondaryFunctions: [
      "Pre-activates milliseconds prior to any arm or leg movement to stabilize the trunk"
    ],
    roleInGym: "The human weight belt. When you take a deep belly breath and brace into your midsection before a heavy squat or deadlift (Valsalva maneuver), the TVA clamps the spine rigid.",
    angleInfluence: "Activated during stomach vacuums, planks, dead bugs, and braced heavy compound lifting.",
    misconceptions: "Believing standard crunches strengthen the TVA. Crunches flex the spine; the TVA requires isometric bracing and abdominal drawing-in to activate.",
    summary: "The deep anatomical corset that wraps around your organs. Generates intra-abdominal pressure to protect the spine during heavy compound lifts.",
    defaultView: "deep",
    exerciseIds: [
      "plank",
      "dead-bug",
      "pallof-press",
      "barbell-back-squat",
      "conventional-deadlift"
    ]
  },
  {
    id: "deep-core-stabilizers",
    name: "Diaphragm, Pelvic Floor & Quadratus Lumborum",
    commonName: "Core Cylinder & IAP Engine",
    category: "core",
    subdivision: "Deep Lumbo-Pelvic Floor & Ceiling",
    location: "Diaphragm forms the roof; Pelvic floor forms the basin; QL forms the posterior wall.",
    origin: "Ribs, sternum, lumbar vertebrae (Diaphragm); Pubis, ischium (Pelvic Floor); Iliac crest (QL).",
    insertion: "Central tendon (Diaphragm); Perineal body and coccyx (Pelvic Floor); 12th rib and L1–L4 (QL).",
    innervation: "Phrenic nerve (C3, C4, C5 for Diaphragm); Pudendal nerve (S2, S3, S4 for Pelvic Floor); T12–L4 (QL).",
    primaryActions: [
      "Diaphragm: Primary breathing muscle; descends to pressurize the abdominal cylinder",
      "Pelvic Floor: Supports pelvic organs and maintains baseline intra-abdominal pressure",
      "Quadratus Lumborum: Stabilizes the 12th rib and anchors the lumbar spine against lateral sway"
    ],
    secondaryFunctions: [
      "Synchronous co-contraction with TVA creates a rigid pneumatic cylinder that unloads the spinal discs by up to 40%"
    ],
    roleInGym: "The foundation of the Valsalva maneuver during maximal squats and deadlifts. Allows athletes to move hundreds of kilograms safely through coordinated breathing and bracing.",
    angleInfluence: "Trained through diaphragmatic belly breathing drills, loaded carries, and braced isometric planks.",
    misconceptions: "Thinking the core is just the abdominals. Without the pelvic floor and diaphragm, the core cannot generate pressure, leading to energy leaks and herniated discs.",
    summary: "The floor, ceiling, and posterior anchors of the core cylinder. Together they generate intra-abdominal pressure to protect the spine under heavy loads.",
    defaultView: "deep",
    exerciseIds: [
      "plank",
      "dead-bug",
      "conventional-deadlift",
      "barbell-back-squat"
    ]
  }
];
