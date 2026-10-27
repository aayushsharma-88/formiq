"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MuscleAnatomy } from "@/data/muscleScience";
import { EXERCISES, Exercise } from "@/data/exercises";
import { 
  Zap, 
  MapPin, 
  Anchor, 
  Activity, 
  AlertTriangle, 
  Dumbbell, 
  ArrowRight, 
  Compass, 
  CheckCircle2,
  BookOpen
} from "lucide-react";

interface MuscleDetailPanelProps {
  muscle: MuscleAnatomy;
}

export default function MuscleDetailPanel({ muscle }: MuscleDetailPanelProps) {
  // Retrieve corresponding exercises from existing library
  const matchedExercises: Exercise[] = EXERCISES.filter(ex => 
    muscle.exerciseIds.includes(ex.id)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Header Card with Nomenclature & Innervation */}
      <div className="glass-panel rounded-2xl p-6 border-t-2 border-t-primary glow-border-subtle relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-black/80">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider">
              {muscle.category.toUpperCase()}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-foreground/80 border border-white/10 text-xs font-medium">
              {muscle.subdivision}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full">
            <Zap size={13} className="text-cyan-400" />
            <span className="font-mono">{muscle.innervation}</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
          {muscle.name}
        </h2>
        <p className="text-sm font-semibold text-primary mb-3">
          Gym Vernacular: &ldquo;{muscle.commonName}&rdquo;
        </p>

        <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground/75 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
          <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
          <span><strong className="text-white">Anatomical Location:</strong> {muscle.location}</span>
        </div>
      </div>

      {/* 2. Attachments: Origin & Insertion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Origin */}
        <div className="glass-panel rounded-xl p-4 border border-white/5 bg-slate-900/60">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
            <Anchor size={14} />
            <span>Origin (Proximal Anchor)</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
            {muscle.origin}
          </p>
        </div>

        {/* Insertion */}
        <div className="glass-panel rounded-xl p-4 border border-white/5 bg-slate-900/60">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Compass size={14} />
            <span>Insertion (Distal Lever)</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
            {muscle.insertion}
          </p>
        </div>
      </div>

      {/* 3. Biomechanical Actions (Primary & Secondary) */}
      <div className="glass-panel rounded-xl p-5 border border-white/5 space-y-4 bg-slate-900/70">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-2.5">
            <Activity size={14} />
            <span>Primary Biomechanical Actions</span>
          </h3>
          <ul className="grid grid-cols-1 gap-2">
            {muscle.primaryActions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {muscle.secondaryFunctions.length > 0 && (
          <div className="pt-3 border-t border-white/5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-2">
              Secondary & Stabilizing Functions
            </h4>
            <ul className="space-y-1.5">
              {muscle.secondaryFunctions.map((fn, idx) => (
                <li key={idx} className="text-xs text-foreground/75 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-1.5 flex-shrink-0"></span>
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 4. Gym Biomechanics & Angle Influence */}
      <div className="glass-panel rounded-xl p-5 border border-white/5 space-y-3 bg-gradient-to-r from-slate-900/80 to-cyan-950/20">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Dumbbell size={16} className="text-primary" />
          <span>Role in Gym Movements & Mechanical Lever Arms</span>
        </h3>
        <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
          {muscle.roleInGym}
        </p>

        {muscle.angleInfluence && (
          <div className="bg-cyan-950/40 border border-cyan-500/20 rounded-lg p-3 text-xs text-cyan-200 leading-relaxed mt-2">
            <strong className="text-white block mb-1">📐 Vector & Angle Biomechanics:</strong>
            {muscle.angleInfluence}
          </div>
        )}
      </div>

      {/* 5. Common Misconceptions Debunked */}
      <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 space-y-1.5">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle size={15} />
          <span>Common Anatomical Misconceptions Debunked</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
          {muscle.misconceptions}
        </p>
      </div>

      {/* 6. Scientific Summary */}
      <div className="glass-panel rounded-xl p-4 border border-white/5 text-xs text-foreground/70 leading-relaxed italic bg-black/30">
        <span className="font-semibold text-foreground/90 not-italic block mb-1">
          🔬 Clinical & Anatomical Summary:
        </span>
        &ldquo;{muscle.summary}&rdquo;
      </div>

      {/* 7. Connected FORMIQ Exercises from Library */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <BookOpen size={16} className="text-primary" />
            <span>Target Exercises in FORMIQ Library ({matchedExercises.length})</span>
          </h3>
          <Link
            href={`/library?muscle=${encodeURIComponent(matchedExercises[0]?.muscle || 'Chest')}`}
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            <span>Open Library</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {matchedExercises.length === 0 ? (
          <p className="text-xs text-foreground/50 italic p-3 bg-white/5 rounded-lg">
            No direct isolation exercises found in library. This stabilizer is trained synergistically in compound lifts.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedExercises.map((ex) => (
              <Link
                key={ex.id}
                href={`/library?muscle=${encodeURIComponent(ex.muscle)}&search=${encodeURIComponent(ex.name.en)}`}
                className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 transition-all flex items-center gap-3 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={`/images/exercises/${ex.id}.webp`}
                    alt={ex.name.en}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                    onError={(e: any) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Dumbbell size={18} className="text-foreground/40 group-hover:text-primary transition-colors" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white group-hover:text-primary transition-colors truncate">
                    {ex.name.en}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-foreground/50 mt-1">
                    <span className="px-1.5 py-0.5 rounded bg-white/10 capitalize font-medium">
                      {ex.difficulty}
                    </span>
                    <span className="truncate">
                      {ex.equipment.split(',')[0]}
                    </span>
                  </div>
                </div>

                <ArrowRight size={14} className="text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
