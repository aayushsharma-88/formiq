"use client";

import React, { useState, useMemo } from "react";
import { useStore } from "@/store/useStore";
import { 
  BookHeart, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Info,
  ChevronRight,
  Dumbbell
} from "lucide-react";
import { 
  MUSCLE_CATEGORIES, 
  ALL_MUSCLES, 
  MuscleAnatomy,
  MuscleCategoryMeta 
} from "@/data/muscleScience";
import AnatomicalDiagram from "@/components/science/AnatomicalDiagram";
import MuscleDetailPanel from "@/components/science/MuscleDetailPanel";

export default function MuscleSciencePage() {
  const { language } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("chest");
  const [selectedMuscleId, setSelectedMuscleId] = useState<string>("pec-major-clavicular");

  const currentCategoryMeta: MuscleCategoryMeta = MUSCLE_CATEGORIES[selectedCategory] || MUSCLE_CATEGORIES.chest;

  // Filter muscles for the active category
  const categoryMuscles: MuscleAnatomy[] = useMemo(() => {
    return ALL_MUSCLES.filter(m => m.category === selectedCategory);
  }, [selectedCategory]);

  // Active muscle object
  const currentMuscle: MuscleAnatomy = useMemo(() => {
    const found = categoryMuscles.find(m => m.id === selectedMuscleId);
    return found || categoryMuscles[0] || ALL_MUSCLES[0];
  }, [categoryMuscles, selectedMuscleId]);

  // View state for anatomical diagram
  const [activeView, setActiveView] = useState<"anterior" | "posterior" | "lateral" | "deep">("anterior");

  // Handle switching categories
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const newMuscles = ALL_MUSCLES.filter(m => m.category === catId);
    if (newMuscles.length > 0) {
      setSelectedMuscleId(newMuscles[0].id);
      setActiveView(newMuscles[0].defaultView);
    }
  };

  // Handle switching muscle
  const handleSelectMuscle = (mId: string) => {
    setSelectedMuscleId(mId);
    const m = ALL_MUSCLES.find(item => item.id === mId);
    if (m) {
      setActiveView(m.defaultView);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24 px-2 sm:px-4">
      {/* 1. Header Banner */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 bg-primary/20 text-primary rounded-2xl glow-border shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <BookHeart size={36} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase glow-text">
                Muscle Science & Anatomy
              </h1>
              <span className="hidden sm:inline-flex text-[10px] px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest font-bold">
                Clinical Guide
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/60 mt-1">
              Complete biomechanical breakdown, exact attachments, and gym movement mechanics across all 6 human muscle systems.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Primary 6-Category Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {Object.values(MUSCLE_CATEGORIES).map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = ALL_MUSCLES.filter(m => m.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isActive
                  ? "bg-gradient-to-b from-primary/25 to-cyan-950/40 border-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-primary/40"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-foreground/70 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  isActive ? "bg-primary text-black" : "bg-white/10 text-foreground/60"
                }`}>
                  {count} Muscles
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                )}
              </div>
              <h3 className="font-extrabold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-[11px] text-foreground/50 truncate mt-0.5">
                {cat.subtitle.split(',')[0]}
              </p>
            </button>
          );
        })}
      </div>

      {/* 3. Category Biomechanics Overview Card */}
      <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-gradient-to-r from-slate-900/90 via-cyan-950/20 to-slate-900/90">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <Activity size={14} />
              <span>{currentCategoryMeta.scientificName}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentCategoryMeta.title} Muscular System
            </h2>
            <p className="text-xs sm:text-sm text-foreground/80 max-w-4xl leading-relaxed pt-1">
              {currentCategoryMeta.biomechanicsOverview}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex-shrink-0 flex items-center gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10 self-start md:self-center">
            <span className="text-[10px] uppercase font-bold text-foreground/40 px-2 flex items-center gap-1">
              <Layers size={11} />
              <span>View:</span>
            </span>
            {currentCategoryMeta.availableViews.map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setActiveView(view)}
                className={`text-xs px-2.5 py-1 rounded-lg capitalize font-medium transition-all ${
                  activeView === view
                    ? "bg-primary text-black shadow-sm font-bold"
                    : "text-foreground/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Muscle Selector Pill Buttons */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1.5">
            <Sparkles size={12} className="text-primary" />
            <span>Select Individual Muscle Subdivision ({categoryMuscles.length}):</span>
          </span>
          <span className="text-xs text-primary font-medium">
            Active: <strong className="text-white">{currentMuscle.name}</strong>
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categoryMuscles.map((muscle) => {
            const isSelected = muscle.id === currentMuscle.id;
            return (
              <button
                key={muscle.id}
                type="button"
                onClick={() => handleSelectMuscle(muscle.id)}
                className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-2 group ${
                  isSelected
                    ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold scale-[1.02]"
                    : "bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-white border-white/10"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-black" : "bg-primary/50 group-hover:bg-primary"}`}></span>
                <span>{muscle.commonName}</span>
                <span className={`text-[10px] opacity-70 ${isSelected ? "text-black/80" : "text-foreground/50"}`}>
                  ({muscle.subdivision.split(' ')[0]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Main Content Two-Column Grid: Left Diagram | Right Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Diagram (5 cols on lg) */}
        <div className="lg:col-span-5 sticky top-20">
          <AnatomicalDiagram
            category={selectedCategory as any}
            currentView={activeView}
            selectedMuscle={currentMuscle}
            onSelectMuscle={handleSelectMuscle}
            referenceImage={currentCategoryMeta.referenceImage}
          />
        </div>

        {/* Right Column: Full Scientific Breakdown Panel (7 cols on lg) */}
        <div className="lg:col-span-7">
          <MuscleDetailPanel muscle={currentMuscle} />
        </div>
      </div>
    </div>
  );
}
