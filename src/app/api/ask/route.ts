import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { EXERCISES } from '@/data/exercises';

export const dynamic = 'force-dynamic';

// Detect if query contains Hindi / Hinglish phrasing
function isHindiQuery(text: string): boolean {
  const devanagariRegex = /[\u0900-\u097F]/;
  if (devanagariRegex.test(text)) return true;

  const hinglishKeywords = [
    'kaise', 'kya', 'batao', 'kare', 'karna', 'mera', 'meri', 'mere', 'hai', 'hain',
    'kaha', 'kahan', 'kitna', 'kitni', 'diet', 'khana', 'peena', 'biceps', 'banaye',
    'pichla', 'aaj', 'kal', 'konse', 'konsa', 'badhaye', 'vajan', 'shuru'
  ];
  const words = text.toLowerCase().split(/\s+/);
  return words.some(w => hinglishKeywords.includes(w));
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const query = typeof body?.query === 'string' ? body.query.trim() : '';
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!query) {
      return NextResponse.json({ 
        answer: "Hello! I am your FORMIQ Assistant. You can ask me how to use the app, analyze your tracked workouts and progress, or get science-based gym and nutrition advice." 
      });
    }

    const q = query.toLowerCase();
    const isHindi = isHindiQuery(query);

    // 1. Fetch User Workout & Goal Data from Database
    const workouts = await prisma.workout.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      include: { 
        exercises: {
          include: { sets: true }
        }
      },
      take: 20
    });

    const goals = await prisma.goal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    // ==========================================
    // DOMAIN 1: APP USAGE & HOW-TO ASSISTANT
    // ==========================================
    
    // How to use the app generally
    if (q.includes('how to use') || q.includes('how do i use') || q.includes('guide') || q.includes('app kaise use') || q.includes('kaise chalaye') || q.includes('use the app') || q.includes('features') || q.includes('tutorial')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "FORMIQ का उपयोग करना बहुत आसान है!\n\n1. 🏋️ **Workout Tracker:** साइडबार में जाकर वर्कआउट का नाम डालें, एक्सरसाइज चुनें और सेट्स, रेप्स और वजन लॉग करके 'Save Workout' दबाएं।\n2. 📊 **Dashboard & History:** अपने कुल वर्कआउट, स्ट्रीक और वॉल्यूम का पूरा विश्लेषण देखें। 'History' में पिछले सभी सेट्स उपलब्ध हैं।\n3. 📚 **Exercise Library:** 207 प्रामाणिक एक्सरसाइज को 10 मसल ग्रुप्स में देखें और उनके 2D ट्यूटोरियल गाइड्स से सही फॉर्म सीखें।\n4. 🎯 **Goals:** अपने वीकली वर्कआउट और स्ट्रेंथ टारगेट्स सेट करें जो आपके डेटा के साथ ऑटो-अपडेट होते हैं।\n5. 📖 **Muscle Science:** जिम बायोमैकेनिक्स और शरीर रचना विज्ञान की जानकारी प्राप्त करें।"
        });
      }
      return NextResponse.json({
        answer: "Welcome to FORMIQ! Here is how to make the most of the platform:\n\n1. 🏋️ **Workout Tracker (`/tracker`):** Log your daily sessions. Name your workout, select exercises, enter your sets, reps, and weights, and hit 'Save Workout'.\n2. 📊 **Dashboard (`/`):** Track your weekly volume, workout streaks, completion rates, and ask me questions about your personal progress anytime.\n3. 📚 **Exercise Library (`/library`):** Browse 207 anatomically accurate exercises categorized by 10 target muscle groups with visual start/finish tutorial guides.\n4. 📈 **History (`/history`):** Review your past workout logs, filter by date, or inspect previous weight records.\n5. 🎯 **Goals (`/goals`):** Set target milestones (e.g. 10 Workouts, Volume King) that dynamically progress as you log data.\n6. 📖 **Muscle Science (`/science`):** Read illustrated textbook guides on gym anatomy and muscular mechanics."
      });
    }

    // How to log/record a workout
    if (q.includes('log') || q.includes('track') || q.includes('record workout') || q.includes('workout kaise') || q.includes('add exercise') || q.includes('save workout')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "वर्कआउट लॉग करने के लिए:\n\n1. बाईं ओर साइडबार से **Workout Tracker** खोलें।\n2. 'Workout Name' (उदा. Push Day, Chest & Triceps) और समय दर्ज करें।\n3. 'Add Exercise' पर क्लिक करके एक्सरसाइज चुनें।\n4. प्रत्येक सेट के लिए रेप्स (Reps) और वजन (Weight in kg/lbs) डालें।\n5. नीचे **'Save Workout'** बटन पर क्लिक करें। आपका डेटा तुरंत डैशबोर्ड, एनालिटिक्स और हिस्ट्री में सुरक्षित हो जाएगा!"
        });
      }
      return NextResponse.json({
        answer: "To log a workout in FORMIQ:\n\n1. Click **Workout Tracker** in the left sidebar.\n2. Enter your workout title (e.g., 'Chest & Triceps Hypertrophy') and estimated duration.\n3. Click **Add Exercise** and select your movements from the library.\n4. Enter your actual performed Reps and Weight for each set.\n5. Click **Save Workout**. Your session will immediately update your Dashboard stats, active streak, volume charts, and personal records!"
      });
    }

    // Where is history / past workouts
    if (q.includes('where is history') || q.includes('past workout') || q.includes('view records') || q.includes('history kahan') || q.includes('purane workout')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "आप साइडबार में **History** बटन पर क्लिक करके अपने सभी पिछले वर्कआउट सेशंस देख सकते हैं। वहां आप तारीख, एक्सरसाइज के नाम से फिल्टर कर सकते हैं और पुराने सेट्स/वेट्स की समीक्षा कर सकते हैं।"
        });
      }
      return NextResponse.json({
        answer: "You can view all your logged sessions by clicking **History** in the sidebar. The History page lets you review every recorded exercise, set weights, and dates, with filters to review your training journey over time."
      });
    }

    // How to set or view goals
    if (q.includes('how to set goal') || q.includes('goal kaise') || q.includes('create goal')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "लक्ष्य (Goals) सेट करने के लिए साइडबार में **Goals** सेक्शन खोलें। वहां आप वर्कआउट फ्रीक्वेंसी, स्ट्रेंथ माइलस्टोन्स और वॉल्यूम गोल्स ट्रैक कर सकते हैं। जैसे ही आप ट्रैकर में नया वर्कआउट सेव करेंगे, आपका प्रोग्रेस बार खुद-ब-खुद आगे बढ़ जाएगा!"
        });
      }
      return NextResponse.json({
        answer: "To manage your goals, click **Goals** in the sidebar. FORMIQ automatically syncs your goal progress with your real database logs (e.g., total workouts completed, exercises mastered, and volume lifted). You can review your completion percentages in real time!"
      });
    }

    // Where is library
    if (q.includes('library') || q.includes('exercise library') || q.includes('exercise kahan')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "एक्सरसाइज लाइब्रेरी देखने के लिए साइडबार में **Exercise Library** पर क्लिक करें। वहां 10 प्रमुख मसल ग्रुप्स (Chest, Back, Shoulders, Biceps, Triceps, Legs, Hamstrings, Calves, Abs, Forearms) के 207 प्रामाणिक एक्सरसाइज ट्यूटोरियल्स और विजुअल गाइड्स उपलब्ध हैं।"
        });
      }
      return NextResponse.json({
        answer: "Head over to the **Exercise Library** tab in the sidebar! You will find 207 anatomically accurate exercises organized strictly into 10 target muscle groups, each featuring its own 2D vector tutorial diagram and step-by-step form instructions."
      });
    }

    // ==========================================
    // DOMAIN 2: USER WORKOUT DATA & PROGRESS
    // ==========================================

    // Last workout inquiry
    if (
      q.includes('last workout') || 
      q.includes('latest workout') || 
      q.includes('recent workout') || 
      q.includes('pichla') || 
      q.includes('pichhla') || 
      q.includes('पिछला') || 
      q.includes('aakhri workout') || 
      q.includes('last session')
    ) {
      if (workouts.length === 0) {
        return NextResponse.json({ 
          answer: isHindi 
            ? "आपने अभी तक कोई वर्कआउट लॉग नहीं किया है। अपना पहला सेशन रिकॉर्ड करने के लिए साइडबार में 'Workout Tracker' पर जाएं!" 
            : "You haven't logged any workouts yet. Head to the **Workout Tracker** in the sidebar to log your first training session!" 
        });
      }
      const last = workouts[0];
      const date = new Date(last.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      const exList = (last.exercises || []).map((e: any) => e.name).slice(0, 5).join(', ');
      const totalSets = (last.exercises || []).reduce((acc: number, curr: any) => acc + (curr.sets || []).length, 0);

      if (isHindi) {
        return NextResponse.json({
          answer: `आपका पिछला वर्कआउट "${last.name}" था, जो ${date} को लॉग किया गया था।\n\n- ⏱️ अवधि: ${last.duration || 45} मिनट\n- 🏋️ एक्सरसाइज (${(last.exercises || []).length}): ${exList || 'None'}\n- 🔢 कुल सेट्स: ${totalSets}\n\nबहुत बढ़िया प्रयास! अपना अगला वर्कआउट जारी रखने के लिए ट्रैकर पर जाएं।`
        });
      }
      return NextResponse.json({
        answer: `Your most recent recorded workout was **"${last.name}"** on **${date}**.\n\n- ⏱️ **Duration:** ${last.duration || 45} minutes\n- 🏋️ **Exercises (${(last.exercises || []).length}):** ${exList || 'Standard session'}\n- 📊 **Total Sets:** ${totalSets}\n\nKeep up the consistency! Would you like to analyze your lifting volume or review your target goals?`
      });
    }

    // Progress analysis
    if (q.includes('progress') || q.includes('improving') || q.includes('summary') || q.includes('tarakki') || q.includes('analyze') || q.includes('stats') || q.includes('how am i doing')) {
      if (workouts.length === 0) {
        return NextResponse.json({ 
          answer: isHindi
            ? "प्रोग्रेस देखने के लिए आपको पहले कुछ वर्कआउट्स लॉग करने होंगे। ट्रैकर में जाकर अपने सेट्स और वेट्स सेव करें!"
            : "To generate a personalized progress report, you need to log a few sessions first. Use the **Workout Tracker** to log exercises and weights, and I will calculate your volume and PRs!"
        });
      }

      let totalVolume = 0;
      let totalSets = 0;
      const exerciseWeights: Record<string, number> = {};

      workouts.forEach(w => {
        (w.exercises || []).forEach((ex: any) => {
          (ex.sets || []).forEach((s: any) => {
            totalSets++;
            const wgt = Number(s.weight) || 0;
            const reps = Number(s.reps) || 0;
            totalVolume += wgt * reps;
            if (!exerciseWeights[ex.name] || wgt > exerciseWeights[ex.name]) {
              exerciseWeights[ex.name] = wgt;
            }
          });
        });
      });

      const topPrs = Object.entries(exerciseWeights)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([name, weight]) => `${name}: ${weight} kg/lbs`)
        .join(', ');

      if (isHindi) {
        return NextResponse.json({
          answer: `📊 **आपकी FORMIQ प्रोग्रेस रिपोर्ट:**\n\n- 🏋️ **कुल वर्कआउट्स:** ${workouts.length} सेशंस\n- 📦 **कुल ट्रेनिंग वॉल्यूम:** ${totalVolume.toLocaleString()} kg/lbs उठाया गया\n- 🔢 **कुल सेट्स:** ${totalSets}\n- 🏆 **शीर्ष लिफ्ट्स (Max Weight):** ${topPrs || 'विभिन्न मूवमेंट्स'}\n\nशानदार काम! प्रोग्रेसिव ओवरलोड (वजन या रेप्स में थोड़ी बढ़ोतरी) जारी रखें।`
        });
      }
      return NextResponse.json({
        answer: `📊 **Your FORMIQ Progress Analysis:**\n\n- 🏋️ **Total Workouts Logged:** ${workouts.length} session(s)\n- 📦 **Cumulative Volume:** ${totalVolume.toLocaleString()} kg/lbs moved\n- 🔢 **Total Completed Sets:** ${totalSets} sets\n- 🏆 **Top Recorded Lifts:** ${topPrs || 'Consistent effort across exercises'}\n\n**Coaching Insight:** You are actively building muscle memory and work capacity. Remember to apply progressive overload by either adding 1-2 reps or 2.5kg to your main compound lifts each week!`
      });
    }

    // Active Goals
    if (q.includes('goal') || q.includes('target') || q.includes('lakshya')) {
      if (goals.length > 0) {
        const topGoal = goals[0];
        const pct = Math.min(100, Math.round(((topGoal.currentProgress || 0) / (topGoal.target || 1)) * 100));
        if (isHindi) {
          return NextResponse.json({
            answer: `आपके पास ${goals.length} सक्रिय लक्ष्य (Goals) हैं। आपका मुख्य लक्ष्य "${topGoal.title}" वर्तमान में **${pct}% पूर्ण** है (${topGoal.currentProgress}/${topGoal.target})। लक्ष्य पूरा करने के लिए लगातार वर्कआउट्स लॉग करते रहें!`
          });
        }
        return NextResponse.json({
          answer: `You currently have **${goals.length} active goal(s)**.\n\nYour primary target **"${topGoal.title}"** is at **${pct}% completion** (${topGoal.currentProgress} / ${topGoal.target}). Continue logging your sessions to hit 100%!`
        });
      } else {
        return NextResponse.json({
          answer: isHindi
            ? "आपने अभी कोई कस्टम लक्ष्य सेट नहीं किया है। अपने फिटनेस टारगेट्स सेट करने के लिए साइडबार में 'Goals' पेज पर जाएं!"
            : "You haven't set any custom goals yet. Head over to the **Goals** section in the sidebar to define your workout frequency or volume targets!"
        });
      }
    }

    // Streak
    if (q.includes('streak') || q.includes('continuous')) {
      const count = workouts.length;
      if (isHindi) {
        return NextResponse.json({
          answer: `🔥 आपकी सक्रिय स्ट्रीक **${count} सेशंस** की है। निरंतरता (consistency) ही सबसे बड़ा सीक्रेट है—हफ्ते में 3-5 दिन वर्कआउट जारी रखें!`
        });
      }
      return NextResponse.json({
        answer: `🔥 You have built an active streak of **${count} workout session(s)**! Consistency is the number one driver of hypertrophy and fat loss. Check the KPI cards on your dashboard for daily streaks!`
      });
    }

    // What did I train last week / recent
    if (q.includes('last week') || q.includes('pichle hafte') || q.includes('history summary')) {
      if (workouts.length === 0) {
        return NextResponse.json({
          answer: isHindi ? "पिछले हफ्ते का कोई डेटा नहीं मिला। आज ही पहला वर्कआउट लॉग करें!" : "No workouts recorded for that timeframe yet. Log a workout in the Tracker to start building history!"
        });
      }
      const summaries = workouts.slice(0, 4).map(w => `• ${w.name} (${new Date(w.date).toLocaleDateString()}) - ${(w.exercises || []).length} exercises`).join('\n');
      return NextResponse.json({
        answer: isHindi
          ? `यहाँ आपके हालिया वर्कआउट्स की सूची है:\n\n${summaries}\n\nपूरा विवरण देखने के लिए History पेज खोलें।`
          : `Here is a summary of your recent training sessions:\n\n${summaries}\n\nVisit the **History** tab to inspect detailed set-by-set breakdowns.`
      });
    }

    // ==========================================
    // DOMAIN 3: DIET & NUTRITION ASSISTANT
    // ==========================================

    // Protein requirements
    if (q.includes('protein') || q.includes('kitna protein') || q.includes('protein intake') || q.includes('protein powder')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "🍗 **दैनिक प्रोटीन आवश्यकता (Protein Intake):**\n\n- **मसल्स बनाने (Muscle Building):** प्रति किलोग्राम शरीर के वजन पर **1.6 से 2.2 ग्राम** प्रोटीन प्रतिदिन लें। (उदा. 70kg वजन पर 110-150 ग्राम प्रोटीन)।\n- **सर्वोत्तम शाकाहारी स्रोत:** पनीर, टोफू, सोया चंक्स, दालें, चना, व्हेय प्रोटीन, ग्रीक योगर्ट।\n- **सर्वोत्तम मांसाहारी स्रोत:** चिकन ब्रेस्ट, अंडे, मछली, लीन मीट।\n- प्रोटीन को दिन भर के 3-4 भोजन में समान रूप से बांटकर खाएं ताकि मसल प्रोटीन सिंथेसिस (MPS) बना रहे।"
        });
      }
      return NextResponse.json({
        answer: "🍗 **Optimal Daily Protein Guidelines:**\n\n- **For Muscle Hypertrophy & Fat Loss:** Aim for **1.6 to 2.2 grams of protein per kilogram of bodyweight** (0.8 - 1.0g per lb). For example, a 75 kg (165 lb) athlete should target ~120–165 grams of protein daily.\n- **Top Whole Food Sources:** Chicken breast, eggs/egg whites, white fish, salmon, Greek yogurt, cottage cheese (paneer), tofu, lentils, and whey protein isolate.\n- **Distribution:** Space your protein into 3–4 meals containing 30–40g each to maximize muscle protein synthesis (MPS) throughout the day."
      });
    }

    // Pre-workout and Post-workout meal
    if (q.includes('pre workout') || q.includes('post workout') || q.includes('before workout') || q.includes('after workout') || q.includes('kya khaye') || q.includes('meal')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "🥗 **प्री और पोस्ट-वर्कआउट डाइट गाइड:**\n\n1. **प्री-वर्कआउट (वर्कआउट से 60-90 मिनट पहले):**\n   - आसानी से पचने वाले कार्ब्स + थोड़ा प्रोटीन लें।\n   - *उदा:* ओट्स और केला, पीनट बटर टोस्ट, या 2 उबले अंडे और ब्राउन ब्रेड।\n\n2. **पोस्ट-वर्कआउट (वर्कआउट के 45 मिनट के अंदर):**\n   - फास्ट-डाइजेस्टिंग प्रोटीन + ग्लाइकोजन रिकवरी कार्ब्स।\n   - *उदा:* व्हेय प्रोटीन शेक, चिकन और चावल, या पनीर/सोया भुर्जी के साथ रोटी।\n\n3. **हाइड्रेशन:** वर्कआउट के दौरान और दिन भर में कम से कम 3-4 लीटर पानी पिएं।"
        });
      }
      return NextResponse.json({
        answer: "🥗 **Pre & Post-Workout Nutrition Protocol:**\n\n1. **Pre-Workout (60–90 minutes before lifting):**\n   - Fuel your glycogen stores with complex, easy-to-digest carbs paired with moderate protein.\n   - *Ideas:* Oatmeal with sliced banana & scoop of protein, rice cakes with peanut butter, or whole-wheat toast with boiled eggs.\n\n2. **Post-Workout (Within 1–2 hours after training):**\n   - Replenish muscle glycogen and kickstart tissue repair with rapid-absorbing protein and carbs.\n   - *Ideas:* Whey protein isolate shake, grilled chicken with jasmine rice, Greek yogurt with berries, or tofu/paneer stir-fry.\n\n3. **Hydration:** Consume 500ml of water 30 minutes before training, and sip water with electrolytes during intense sessions."
      });
    }

    // Bulking vs Cutting / Fat loss / Diet plan
    if (q.includes('bulk') || q.includes('cut') || q.includes('fat loss') || q.includes('weight loss') || q.includes('vajan kam') || q.includes('weight gain') || q.includes('diet plan') || q.includes('calories') || q.includes('calorie')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "⚖️ **बल्किंग vs कटिंग (वजन बढ़ाना या घटाना):**\n\n1. **मसल गेन (Clean Bulk):**\n   - अपनी मेंटेनेंस कैलोरीज से 300-400 कैलोरी अधिक खाएं।\n   - हाई प्रोटीन (2g/kg) बनाए रखें और भारी वजन उठाकर प्रोग्रेसिव ओवरलोड करें।\n\n2. **फैट लॉस / कटिंग (Fat Loss):**\n   - मेंटेनेंस से 300-500 कैलोरी की कमी (Caloric Deficit) रखें।\n   - मसल्स बचाने के लिए प्रोटीन अधिक रखें और हफ्ते में 3-4 दिन स्ट्रेंथ ट्रेनिंग करें।\n\n3. **सप्लीमेंट्स:** क्रिएटिन मोनोहाइड्रेट (रोजाना 3-5g) और व्हेय प्रोटीन सबसे सुरक्षित और प्रभावी विकल्प हैं।"
        });
      }
      return NextResponse.json({
        answer: "⚖️ **Bulking vs. Cutting Principles:**\n\n1. **Lean Muscle Gain (Clean Bulking):**\n   - Consume a slight caloric surplus of **+250 to 400 kcal** above your maintenance.\n   - Keep protein high (2g/kg) to maximize lean mass while minimizing fat gain.\n\n2. **Fat Loss (Cutting):**\n   - Establish a sustainable caloric deficit of **-300 to 500 kcal** below maintenance.\n   - Keep protein at 2.0–2.4g/kg to preserve muscle tissue while your body burns fat.\n\n3. **Core Supplements:** Creatine Monohydrate (3–5g daily for ATP energy and strength) and Whey Protein for convenience."
      });
    }

    // Creatine and supplements
    if (q.includes('creatine') || q.includes('supplement') || q.includes('supplements')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "💊 **सप्लीमेंट्स के बारे में सही जानकारी:**\n\n1. **क्रिएटिन मोनोहाइड्रेट (Creatine):** यह सबसे अधिक शोधित और सुरक्षित सप्लीमेंट है। रोजाना 3 से 5 ग्राम पानी के साथ लें। यह आपकी स्ट्रेंथ, पावर और मसल वॉल्यूम बढ़ाता है।\n2. **व्हेय प्रोटीन (Whey Protein):** यह केवल दूध से बना शुद्ध प्रोटीन स्रोत है जो दैनिक प्रोटीन लक्ष्य पूरा करने में मदद करता है।\n3. **मल्टीविटामिन और ओमेगा-3:** जोड़ों की सेहत और संपूर्ण इम्युनिटी के लिए उत्तम हैं।\n*नोट:* सप्लीमेंट्स केवल मदद के लिए हैं, 80% परिणाम संतुलित असली भोजन (Whole Foods) और अच्छी नींद से मिलते हैं।"
        });
      }
      return NextResponse.json({
        answer: "💊 **Evidence-Based Supplements Guide:**\n\n1. **Creatine Monohydrate:** The gold standard for muscle endurance and strength. Take **3–5 grams daily** consistently at any time of day with water. No loading phase is required.\n2. **Whey Protein:** Fast and convenient way to hit your daily protein requirements post-workout or between meals.\n3. **Omega-3 (Fish Oil) & Vitamin D3:** Supports joint recovery, cardiovascular health, and hormone optimization.\n*Note:* Supplements complement whole foods; prioritize 7-9 hours of sleep, clean nutrition, and progressive overload first!"
      });
    }

    // ==========================================
    // DOMAIN 4: GYM ROUTINES & EXERCISE FORM
    // ==========================================

    // Workout Routine / Splits
    if (q.includes('routine') || q.includes('split') || q.includes('schedule') || q.includes('plan') || q.includes('program') || q.includes('kya plan kare') || q.includes('kaunsa split')) {
      if (isHindi) {
        return NextResponse.json({
          answer: "📋 **सर्वश्रेष्ठ जिम वर्कआउट स्प्लिट्स:**\n\n1. **Push - Pull - Legs (PPL - 3 से 6 दिन):**\n   - Push: Chest, Shoulders, Triceps\n   - Pull: Back, Biceps, Rear Delts\n   - Legs: Quads, Hamstrings, Calves, Abs\n\n2. **Upper / Lower Split (हफ्ते में 4 दिन):**\n   - Day 1: Upper Body | Day 2: Lower Body | Day 3: Rest | Day 4: Upper | Day 5: Lower\n\n3. **Hypertrophy (मसल ग्रोथ) के नियम:**\n   - प्रत्येक एक्सरसाइज के 3-4 सेट्स और 8-12 रेप्स करें।\n   - सेट्स के बीच 90 से 120 सेकंड का आराम लें।"
        });
      }
      return NextResponse.json({
        answer: "📋 **Top Evidence-Based Workout Splits:**\n\n1. **Push - Pull - Legs (PPL - 3 to 6 days/week):**\n   - **Push Day:** Chest, Anterior Deltoids, Triceps\n   - **Pull Day:** Lats, Upper Back, Biceps, Forearms\n   - **Leg Day:** Quads, Hamstrings, Glutes, Calves, Core\n\n2. **Upper / Lower Split (4 days/week):**\n   - Great for balance, recovery, and steady strength progression.\n\n3. **Hypertrophy Guidelines:**\n   - 3 to 4 working sets per exercise with 8–12 reps at 1-2 reps in reserve (RIR).\n   - Rest 2–3 minutes on heavy compounds (Squat, Bench, Deadlift) and 60–90 seconds on isolations."
      });
    }

    // Exercise form from library
    const matchedExercise = EXERCISES.find(ex => 
      q.includes(ex.name.en.toLowerCase()) || 
      (q.includes(ex.muscle.toLowerCase()) && (q.includes('best') || q.includes('exercise') || q.includes('how'))) ||
      ex.name.en.toLowerCase().split(' ').some(word => word.length > 4 && q.includes(word))
    );

    if (matchedExercise) {
      const tips = (matchedExercise.tips || []).map(t => isHindi ? t.hi : t.en).join('; ');
      const steps = (matchedExercise.steps || []).map((s, idx) => `${idx + 1}. ${isHindi ? s.hi : s.en}`).join('\n');
      const mistakes = (matchedExercise.mistakes || []).map(m => `• ${isHindi ? m.hi : m.en}`).slice(0, 2).join('\n');

      if (isHindi) {
        return NextResponse.json({
          answer: `🏋️ **${matchedExercise.name.hi} (${matchedExercise.muscle}):**\n\n${matchedExercise.description.hi}\n\n**प्रदर्शन करने के चरण:**\n${steps}\n\n⚠️ **आम गलतियाँ:**\n${mistakes || 'फॉर्म नियंत्रण में न रखना'}\n\n💡 **टिप:** ${tips || 'कोर टाइट रखें और नियंत्रित गति से वजन उठाएं।'}`
        });
      }
      return NextResponse.json({
        answer: `🏋️ **${matchedExercise.name.en} (${matchedExercise.muscle} — ${matchedExercise.difficulty}):**\n\n${matchedExercise.description.en}\n\n**Execution Steps:**\n${steps}\n\n⚠️ **Common Mistakes:**\n${mistakes || 'Rushing through eccentric phase'}\n\n💡 **Key Cue:** ${tips || 'Maintain core bracing and full range of motion.'}`
      });
    }

    // ==========================================
    // DOMAIN 5: COMPREHENSIVE PROACTIVE FALLBACK
    // ==========================================

    if (workouts.length === 0) {
      if (isHindi) {
        return NextResponse.json({
          answer: "नमस्ते! मैं FORMIQ फिटनेस और प्रोग्रेस असिस्टेंट हूँ।\n\n- आप मुझसे ऐप के उपयोग (वर्कआउट लॉग करना, हिस्ट्री, गोल्स) के बारे में पूछ सकते हैं।\n- जिम एक्सरसाइज फॉर्म, वर्कआउट स्प्लिट्स, या डाइट/प्रोटीन से जुड़े सवाल पूछ सकते हैं।\n- अभी ट्रैकर में जाकर अपना पहला वर्कआउट सेव करें, फिर मैं आपकी वास्तविक प्रोग्रेस और लिफ्ट्स का विश्लेषण भी कर सकूंगा!"
        });
      }
      return NextResponse.json({
        answer: "Hello! I am your FORMIQ AI Assistant. I can help you with:\n\n1. 📱 **App Guidance:** Ask me how to log a workout, view your history, set goals, or navigate the 207-exercise library.\n2. 📊 **Progress & Tracking:** Ask \"What was my last workout?\", \"Analyze my progress\", or check your lifting streak.\n3. 🥗 **Diet & Nutrition:** Ask about daily protein needs, pre/post workout meals, cutting vs. bulking, or creatine.\n4. 🏋️ **Form & Exercises:** Ask how to perform any movement like Bench Press, Squats, Pull-Ups, or Bicep Curls.\n\nTry clicking one of the suggested prompts below or ask any fitness question!"
      });
    }

    if (isHindi) {
      return NextResponse.json({
        answer: `आपके पास ${workouts.length} वर्कआउट्स लॉग हैं। आप मुझसे पूछ सकते हैं:\n\n• "मेरा पिछला वर्कआउट क्या था?"\n• "मेरी प्रोग्रेस का विश्लेषण करो"\n• "मसल्स बढ़ाने के लिए डाइट और प्रोटीन क्या लें?"\n• "पुश-पुल-लेग्स रूटीन कैसे बनाएं?"\n• या किसी भी एक्सरसाइज (जैसे Bench Press या Squat) का सही फॉर्म पूछें!`
      });
    }

    return NextResponse.json({
      answer: `You have **${workouts.length} workout(s) recorded** in FORMIQ! Here are some things you can ask me:\n\n• **"What was my last workout?"** — Inspect your latest exercises and sets\n• **"Analyze my progress"** — Calculate total volume and top PR weights\n• **"What should I eat post-workout?"** — Evidence-based nutrition timing\n• **"How much protein do I need?"** — Tailored macro guidelines\n• **"How to do Barbell Back Squat?"** — Step-by-step form cues from our 207-exercise library\n\nFeel free to ask any gym, diet, or app question!`
    });

  } catch (error) {
    console.error("Error processing ask request:", error);
    return NextResponse.json({ 
      answer: "I experienced a temporary issue analyzing that. Please ask again or try one of the suggested prompts!" 
    }, { status: 200 });
  }
}
