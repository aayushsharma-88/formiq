/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { EXERCISES, MUSCLE_GROUPS, Exercise } from "@/data/exercises";
import { EXERCISE_GUIDE_IMAGES, getExerciseGuide } from "@/data/exerciseImages";
import { 
  Search, 
  X, 
  Dumbbell, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  PlusCircle, 
  ArrowLeft,
  Wind,
  ShieldAlert,
  Compass
} from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const MUSCLE_METADATA: Record<string, { image: string; alt: string; anatomicalFocus: string }> = {
  Chest: {
    image: "/images/muscles/chest.png",
    alt: "Accurate human chest muscle anatomy showing the pectoralis major and pectoralis minor highlighted in teal",
    anatomicalFocus: "Pectoralis Major & Minor"
  },
  Back: {
    image: "/images/muscles/back.png",
    alt: "Accurate back muscle anatomy showing the latissimus dorsi, trapezius, rhomboids, and spinal erectors highlighted in teal",
    anatomicalFocus: "Latissimus Dorsi, Trapezius & Rhomboids"
  },
  Shoulders: {
    image: "/images/muscles/shoulders.png",
    alt: "Accurate shoulder muscle anatomy showing the anterior, lateral, and posterior deltoids highlighted in teal",
    anatomicalFocus: "Anterior, Lateral & Posterior Deltoids"
  },
  Biceps: {
    image: "/images/muscles/biceps.png",
    alt: "Accurate biceps brachii anatomy, including the long and short heads highlighted in teal",
    anatomicalFocus: "Biceps Brachii (Long & Short Heads)"
  },
  Triceps: {
    image: "/images/muscles/triceps.png",
    alt: "Accurate triceps brachii anatomy, including the long, lateral, and medial heads highlighted in teal",
    anatomicalFocus: "Triceps Brachii (Long, Lateral & Medial)"
  },
  Legs: {
    image: "/images/muscles/legs.png",
    alt: "Accurate quadriceps anatomy showing the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius highlighted in teal",
    anatomicalFocus: "Quadriceps Femoris"
  },
  Hamstrings: {
    image: "/images/muscles/hamstrings.png",
    alt: "Accurate posterior thigh anatomy showing the biceps femoris, semitendinosus, and semimembranosus highlighted in teal",
    anatomicalFocus: "Biceps Femoris, Semitendinosus & Semimembranosus"
  },
  Calves: {
    image: "/images/muscles/calves.png",
    alt: "Accurate calf muscle anatomy showing the gastrocnemius and soleus highlighted in teal",
    anatomicalFocus: "Gastrocnemius & Soleus"
  },
  Abs: {
    image: "/images/muscles/abs.png",
    alt: "Accurate abdominal muscle anatomy showing the rectus abdominis, external obliques, internal obliques, and transversus abdominis highlighted in teal",
    anatomicalFocus: "Rectus Abdominis & Obliques"
  },
  Forearms: {
    image: "/images/muscles/forearms.png",
    alt: "Accurate forearm muscle anatomy showing the major wrist flexors, wrist extensors, and brachioradialis highlighted in teal",
    anatomicalFocus: "Brachioradialis & Wrist Flexors/Extensors"
  }
};

export default function LibraryPage() {
  const { language } = useStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMuscleCategory, setSelectedMuscleCategory] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  // Restore category filter from URL on initial page load if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("muscle") || params.get("category");
      if (cat && (MUSCLE_GROUPS.includes(cat) || cat === "All")) {
        setSelectedMuscleCategory(cat);
      }
    }
  }, []);

  const handleSelectCategory = (cat: string | null) => {
    setSelectedMuscleCategory(cat);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (cat && cat !== "All") {
        url.searchParams.set("muscle", cat);
      } else {
        url.searchParams.delete("muscle");
        url.searchParams.delete("category");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const cleanQuery = searchQuery.trim().toLowerCase();

  const filteredExercises = EXERCISES.filter(ex => {
    // 1. Strict primary muscle filter check - 100% accurate category isolation
    if (selectedMuscleCategory && selectedMuscleCategory !== "All") {
      if (ex.muscle !== selectedMuscleCategory) {
        return false;
      }
    }

    // 2. Search query check
    if (!cleanQuery) return true;

    const inEnName = ex.name.en.toLowerCase().includes(cleanQuery);
    const inHiName = ex.name.hi.toLowerCase().includes(cleanQuery);
    const inMuscle = ex.muscle.toLowerCase().includes(cleanQuery);
    const inEquipment = ex.equipment.toLowerCase().includes(cleanQuery);
    const inDifficulty = ex.difficulty.toLowerCase().includes(cleanQuery);
    const inType = ex.type ? ex.type.toLowerCase().includes(cleanQuery) : false;
    const inPrimary = ex.primaryMuscles ? ex.primaryMuscles.some(m => m.toLowerCase().includes(cleanQuery)) : false;
    const inKeywords = ex.keywords ? ex.keywords.some(k => k.toLowerCase().includes(cleanQuery)) : false;

    return inEnName || inHiName || inMuscle || inEquipment || inDifficulty || inType || inPrimary || inKeywords;
  });

  const handleAddToWorkout = (exerciseName: string) => {
    router.push(`/tracker?add=${encodeURIComponent(exerciseName)}`);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (selectedMuscleCategory === "All") {
      handleSelectCategory(null);
    }
  };

  const handleBackToMuscles = () => {
    handleSelectCategory(null);
    setSearchQuery("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20 relative">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase glow-text">{t(language, 'library')}</h1>
        <p className="text-foreground/60">
          Search, learn, and perfect your form across 200+ anatomically accurate exercises.
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input 
            type="text" 
            placeholder={t(language, 'searchExercises')}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value && !selectedMuscleCategory) {
                handleSelectCategory("All"); // Auto-show list if searching
              } else if (!e.target.value && selectedMuscleCategory === "All") {
                handleSelectCategory(null);
              }
            }}
            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-foreground/40"
          />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {!selectedMuscleCategory ? (
        /* Muscle Group Grid View */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in slide-in-from-bottom-4">
          {MUSCLE_GROUPS.filter(m => m !== "Full Body").map(muscle => {
            const meta = MUSCLE_METADATA[muscle];
            const exerciseCount = EXERCISES.filter(ex => ex.muscle === muscle).length;

            return (
              <div 
                key={muscle} 
                onClick={() => handleSelectCategory(muscle)}
                className="glass-panel p-4 sm:p-5 rounded-2xl cursor-pointer hover:-translate-y-2 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/50 group text-center flex flex-col items-center justify-between min-h-[220px] sm:min-h-[250px] relative overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              >
                {/* Header: Teal Dumbbell Icon + Exercise count */}
                <div className="w-full flex items-center justify-between z-10 px-1 mb-1">
                  <Dumbbell className="text-primary opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={20} />
                  <span className="text-[11px] font-mono text-foreground/50 group-hover:text-primary transition-colors font-medium">
                    {exerciseCount} {exerciseCount === 1 ? 'exercise' : 'exercises'}
                  </span>
                </div>

                {/* Center: Anatomical Muscle Illustration */}
                <div className="w-full flex-1 flex items-center justify-center relative my-1 overflow-hidden py-1">
                  {meta ? (
                    <img 
                      src={meta.image} 
                      alt={meta.alt}
                      className="w-full h-32 sm:h-36 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300 pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                    />
                  ) : (
                    <Dumbbell className="text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={48} />
                  )}
                </div>

                {/* Bottom: Muscle Group Title */}
                <div className="w-full pt-1 z-10">
                  <h3 className="font-bold text-base sm:text-lg uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                    {muscle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Exercises List View */
        <div className="space-y-6 animate-in slide-in-from-bottom-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToMuscles}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-foreground/80 hover:text-white flex items-center gap-2 text-sm font-medium"
              >
                <ArrowLeft size={18} /> Back to Muscles
              </button>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                {selectedMuscleCategory === "All" ? `Search Results (${filteredExercises.length})` : `${selectedMuscleCategory} Exercises (${filteredExercises.length})`}
              </h2>
            </div>

            {selectedMuscleCategory && selectedMuscleCategory !== "All" && MUSCLE_METADATA[selectedMuscleCategory] && (
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <img 
                  src={MUSCLE_METADATA[selectedMuscleCategory].image} 
                  alt={MUSCLE_METADATA[selectedMuscleCategory].alt}
                  className="w-8 h-8 object-contain rounded"
                />
                <span className="text-xs font-mono text-primary/90 font-medium">
                  {MUSCLE_METADATA[selectedMuscleCategory].anatomicalFocus}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            {filteredExercises.map(ex => (
              <div 
                key={ex.id} 
                onClick={() => setSelectedExercise(ex)}
                className="glass-panel p-4 rounded-xl cursor-pointer hover:-translate-y-0.5 hover:bg-white/5 transition-all border border-white/5 hover:border-primary/50 group flex items-center justify-between"
              >
                <div className="space-y-1.5 pr-4 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors text-white">
                      {language === 'en' ? ex.name.en : ex.name.hi}
                    </h3>

                    {ex.type && (
                      <span className={clsx(
                        "text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border",
                        ex.type === 'compound' 
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                          : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      )}>
                        {ex.type}
                      </span>
                    )}

                    <span className={clsx(
                      "text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border",
                      ex.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      ex.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    )}>
                      {ex.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-foreground/60 line-clamp-1">
                    {language === 'en' ? ex.description.en : ex.description.hi}
                  </p>

                  {ex.primaryMuscles && ex.primaryMuscles.length > 0 && (
                    <p className="text-xs text-foreground/40 font-mono">
                      <span className="text-primary/80">Primary:</span> {ex.primaryMuscles.join(', ')}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                  {(() => {
                    const guide = getExerciseGuide(ex.id);
                    if (!guide) return null;
                    return (
                      <div className="w-12 h-12 rounded-lg bg-white/95 p-1 border border-white/10 overflow-hidden flex items-center justify-center shadow-sm">
                        <img 
                          src={guide.image} 
                          alt={guide.alt}
                          className="w-full h-full object-contain pointer-events-none"
                          loading="lazy"
                        />
                      </div>
                    );
                  })()}
                  <span className="text-xs px-3 py-1 bg-white/5 rounded-md text-foreground/70 uppercase tracking-wide hidden sm:block font-mono">
                    {ex.muscle}
                  </span>
                  <Dumbbell className="text-foreground/30 group-hover:text-primary transition-colors" size={20} />
                </div>
              </div>
            ))}

            {filteredExercises.length === 0 && (
              <div className="text-center py-12 text-foreground/40 glass-panel rounded-2xl border-dashed">
                <Dumbbell className="mx-auto text-foreground/20 mb-3" size={32} />
                No exercises found matching your search. Try adjusting keywords or category.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Detail Modal Overlay */}
      {selectedExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0a0a0c] border border-white/10 shadow-2xl rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setSelectedExercise(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Left Column: Animation & Meta */}
            <div className="w-full md:w-2/5 p-6 md:border-r border-white/10 bg-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {selectedExercise.type && (
                    <span className={clsx(
                      "text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border",
                      selectedExercise.type === 'compound' 
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                        : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    )}>
                      {selectedExercise.type}
                    </span>
                  )}
                  <span className={clsx(
                    "font-bold uppercase text-[10px] px-2 py-0.5 rounded border",
                    selectedExercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    selectedExercise.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border-red-500/30'
                  )}>{selectedExercise.difficulty}</span>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-2">
                  {language === 'en' ? selectedExercise.name.en : selectedExercise.name.hi}
                </h2>
                <p className="text-sm text-foreground/70 mb-6 italic leading-relaxed">
                  {language === 'en' ? selectedExercise.description.en : selectedExercise.description.hi}
                </p>

                {(() => {
                  const guide = getExerciseGuide(selectedExercise.id);
                  if (!guide) return null;
                  return (
                    <div className="w-full bg-slate-900/90 rounded-2xl border border-white/10 overflow-hidden p-3 my-4">
                      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider mb-2 px-1 text-slate-300">
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <Dumbbell size={14} /> {language === 'hi' ? guide.titleHi : guide.titleEn}
                        </span>
                        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded text-[10px]">
                          {language === 'hi' ? guide.badgeHi : guide.badgeEn}
                        </span>
                      </div>
                      <div className="w-full bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.alt}
                          className="w-full h-auto max-h-64 object-contain"
                        />
                      </div>
                    </div>
                  );
                })()}

                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-foreground/50">{t(language, 'primaryMuscle')}</span>
                    <span className="font-semibold text-right">
                      {selectedExercise.primaryMuscles ? selectedExercise.primaryMuscles.join(', ') : selectedExercise.muscle}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-foreground/50">{t(language, 'secondaryMuscles')}</span>
                    <span className="font-medium text-right text-foreground/80">{selectedExercise.secondaryMuscles.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-foreground/50">{t(language, 'equipment')}</span>
                    <span className="font-medium text-right text-primary/90">{selectedExercise.equipment}</span>
                  </div>
                  {selectedExercise.type && (
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-foreground/50">{t(language, 'exerciseType')}</span>
                      <span className="font-semibold capitalize text-right text-cyan-400">{selectedExercise.type}</span>
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={() => handleAddToWorkout(selectedExercise.name.en)}
                className="w-full mt-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                <PlusCircle size={20} /> {t(language, 'addToWorkout')}
              </button>
            </div>

            {/* Right Column: Instructions */}
            <div className="w-full md:w-3/5 p-6 md:p-10 space-y-6">
              
              {/* Starting Position (if available) */}
              {selectedExercise.startingPosition && (
                <section className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-primary tracking-wider uppercase flex items-center gap-2">
                    <Compass size={14} /> {t(language, 'startingPosition')}
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {language === 'en' ? selectedExercise.startingPosition.en : selectedExercise.startingPosition.hi}
                  </p>
                </section>
              )}

              {/* Steps */}
              <section>
                <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
                  <Target size={16} /> {t(language, 'howToPerform')}
                </h3>
                <div className="space-y-4">
                  {selectedExercise.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                        {idx + 1}
                      </div>
                      <p className="text-foreground/80 leading-relaxed pt-1 text-sm sm:text-base">
                        {language === 'en' ? step.en : step.hi}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Breathing (if available) */}
              {selectedExercise.breathing && (
                <section className="p-3.5 bg-cyan-950/20 border border-cyan-800/30 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                    <Wind size={14} /> {t(language, 'breathing')}
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {language === 'en' ? selectedExercise.breathing.en : selectedExercise.breathing.hi}
                  </p>
                </section>
              )}

              {/* Tips & Mistakes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/10">
                <section>
                  <h3 className="text-sm font-bold text-green-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} /> {t(language, 'formTips')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedExercise.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        {language === 'en' ? tip.en : tip.hi}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-sm font-bold text-red-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <AlertTriangle size={16} /> {t(language, 'commonMistakes')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedExercise.mistakes.map((mistake, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✕</span>
                        {language === 'en' ? mistake.en : mistake.hi}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Safety Precautions (if available) */}
              {selectedExercise.safetyPrecautions && (
                <section className="p-3.5 bg-yellow-950/20 border border-yellow-800/30 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-yellow-400 tracking-wider uppercase flex items-center gap-2">
                    <ShieldAlert size={14} /> {t(language, 'safetyPrecautions')}
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {language === 'en' ? selectedExercise.safetyPrecautions.en : selectedExercise.safetyPrecautions.hi}
                  </p>
                </section>
              )}

              {/* Beginner Alternative */}
              {selectedExercise.alternative && (
                <section className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <span className="font-bold text-primary mr-2 text-sm">{t(language, 'beginnerAlternative')}</span>
                  <span className="text-foreground/80 text-sm">
                    {language === 'en' ? selectedExercise.alternative.en : selectedExercise.alternative.hi}
                  </span>
                </section>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
