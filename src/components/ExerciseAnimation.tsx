/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback, useId } from "react";
import { useStore } from "@/store/useStore";
import { Exercise } from "@/data/exercises";
import { getExerciseAnimation, ExerciseAnimationConfig, AnimationPhase } from "@/data/exerciseAnimations";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Gauge, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle
} from "lucide-react";

interface ExerciseAnimationProps {
  exercise?: Exercise | null;
  exerciseId?: string;
  muscleGroup?: string;
}

export default function ExerciseAnimation({ exercise, exerciseId }: ExerciseAnimationProps) {
  const { language } = useStore();
  const shadowFilterId = useId();

  // Resolve target exercise ID
  const activeId = exercise?.id || exerciseId || "barbell-bench-press";
  const animConfig: ExerciseAnimationConfig | null = getExerciseAnimation(activeId);

  const [currentPhaseIdx, setCurrentPhaseIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 0.5>(1);

  // Reset to phase 0 whenever exercise changes
  useEffect(() => {
    setCurrentPhaseIdx(0);
    setIsPlaying(true);
  }, [activeId]);

  // Automated phase looping interval
  useEffect(() => {
    if (!isPlaying) return;

    const phaseDuration = (playbackSpeed === 0.5 ? 2400 : 1500);
    const timer = setInterval(() => {
      setCurrentPhaseIdx((prev) => (prev + 1) % 4);
    }, phaseDuration);

    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, activeId]);

  const handleNextPhase = useCallback(() => {
    setIsPlaying(false);
    setCurrentPhaseIdx((prev) => (prev + 1) % 4);
  }, []);

  const handlePrevPhase = useCallback(() => {
    setIsPlaying(false);
    setCurrentPhaseIdx((prev) => (prev === 0 ? 3 : prev - 1));
  }, []);

  const handleSelectPhase = useCallback((idx: number) => {
    setIsPlaying(false);
    setCurrentPhaseIdx(idx);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentPhaseIdx(0);
    setIsPlaying(true);
  }, []);

  // Keyboard shortcut listener: Spacebar to toggle play/pause, Left/Right arrows to step phases
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNextPhase();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrevPhase();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextPhase, handlePrevPhase]);

  // If configuration is missing, show an explicit diagnostic error state rather than fake fallback
  if (!animConfig) {
    return (
      <div className="w-full h-80 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="text-red-400 mb-3" size={36} />
        <h4 className="text-red-300 font-bold text-base mb-1">Animation Specification Required</h4>
        <p className="text-xs text-foreground/60 max-w-xs font-mono">
          Exercise ID &quot;{activeId}&quot; does not have an audited animation profile.
        </p>
      </div>
    );
  }

  const currentPhase: AnimationPhase = animConfig.phases[currentPhaseIdx] || animConfig.phases[0];
  const primaryMuscleName = animConfig.primaryMuscles[0] || animConfig.category;

  return (
    <div 
      className="w-full flex flex-col items-center select-none"
      role="region"
      aria-label={`${animConfig.exerciseName} 2D vector tutorial animation`}
    >
      {/* Visual Canvas Container: Clean White / Light-Neutral Background (matches user reference image) */}
      <div className="w-full h-72 sm:h-84 bg-white rounded-2xl border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 group">
        
        {/* SVG Definition Filters & Gradients */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id={shadowFilterId} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.12" />
            </filter>
            <linearGradient id="barbellChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="blueOlympicPlate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="blueShirt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="darkShorts" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#fba973" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top Header: Exercise Identity & Target Muscle Pill on Light Canvas */}
        <div className="w-full flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? "bg-blue-500 opacity-75" : "bg-slate-400 opacity-0"}`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? "bg-blue-600" : "bg-slate-400"}`} />
            </span>
            <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
              {animConfig.exerciseName}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-700 font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Target: {primaryMuscleName}</span>
          </div>
        </div>

        {/* Center: Dynamic 2D Vector Illustration Scene (White Background, Inspired by Reference Image) */}
        <div className="w-full flex-1 relative flex items-center justify-center my-0.5">
          <svg 
            viewBox="0 0 460 260" 
            className="w-full h-full max-h-60 transition-all duration-300"
            aria-label={`2D Vector animation of ${animConfig.exerciseName} at phase ${currentPhaseIdx + 1}`}
          >
            {/* Subtle Studio Floor Contact Shadow */}
            <ellipse cx="230" cy="235" rx="190" ry="14" fill="#e2e8f0" opacity="0.6" />

            {/* Render Biomechanically Exact 2D Vector Scene */}
            {renderVectorScene(animConfig, currentPhaseIdx, shadowFilterId)}
          </svg>
        </div>

        {/* Bottom Banner on Light Canvas: Active Phase & Real-Time Biomechanical Coaching Cue */}
        <div className="w-full z-10 flex items-center justify-between bg-slate-900/90 text-white backdrop-blur-md rounded-xl px-3 py-2 text-xs shadow-md">
          <div className="flex items-center gap-2 flex-1 mr-2 min-w-0">
            <span className="px-2 py-0.5 rounded bg-blue-500 text-white font-bold font-mono text-[10px] flex-shrink-0">
              PHASE {currentPhaseIdx + 1}/4
            </span>
            <div className="min-w-0 truncate">
              <span className="font-bold text-white mr-1.5">
                {language === 'en' ? currentPhase.label.en : currentPhase.label.hi}:
              </span>
              <span className="text-slate-300 hidden sm:inline text-[11px]">
                {language === 'en' ? currentPhase.desc.en : currentPhase.desc.hi}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[10px] flex-shrink-0">
            <ShieldCheck size={13} className="text-cyan-400" />
            <span className="hidden md:inline">{currentPhase.cue}</span>
          </div>
        </div>
      </div>

      {/* Control Toolbar (Play, Pause, Replay, Speed, Prev, Next, Phase Selectors) */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mt-3 px-1">
        {/* Playback Transport Buttons */}
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
            className="p-1.5 rounded-lg bg-primary text-black hover:bg-primary/90 transition-all font-bold flex items-center justify-center cursor-pointer"
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
          </button>

          <button
            onClick={handleReset}
            aria-label="Restart animation"
            className="p-1.5 rounded-lg text-foreground/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
          </button>

          <div className="h-4 w-[1px] bg-white/10 mx-0.5" />

          <button
            onClick={handlePrevPhase}
            aria-label="Previous phase"
            className="p-1.5 rounded-lg text-foreground/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={handleNextPhase}
            aria-label="Next phase"
            className="p-1.5 rounded-lg text-foreground/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>

          <div className="h-4 w-[1px] bg-white/10 mx-0.5" />

          {/* Speed Toggle (1x / 0.5x Slower) */}
          <button
            onClick={() => setPlaybackSpeed((s) => (s === 1 ? 0.5 : 1))}
            aria-label="Toggle playback speed"
            className="px-2 py-1 rounded text-[10px] font-mono font-bold flex items-center gap-1 text-foreground/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Gauge size={12} className="text-cyan-400" />
            <span>{playbackSpeed}x</span>
          </button>
        </div>

        {/* Phase Pill Indicators (Clickable) */}
        <div className="flex items-center gap-1.5">
          {animConfig.phases.map((ph, idx) => {
            const isActive = currentPhaseIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectPhase(idx)}
                aria-label={`Select phase ${idx + 1}: ${ph.label.en}`}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer ${
                  isActive 
                    ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] font-bold" 
                    : "bg-white/5 text-foreground/60 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-primary animate-pulse" : "bg-white/30"}`} />
                <span className="hidden sm:inline">{language === 'en' ? ph.label.en : ph.label.hi}</span>
                <span className="sm:hidden font-mono">{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2D VECTOR SCENE RENDERER ENGINE
// Faithfully matches user's reference illustration style:
// Blue athletic tank top, dark shorts, blue shoes with white socks,
// grey steel rack & bench, silver barbell, vibrant blue Olympic plates.
// ============================================================================

function renderVectorScene(config: ExerciseAnimationConfig, phaseIdx: number, shadowId: string): React.ReactNode {
  const { posture } = config;

  // 1. BARBELL BENCH PRESS (Exact Reference Implementation in 3/4 Isometric Perspective)
  if (config.exerciseId === 'barbell-bench-press' || config.exerciseId === 'smith-machine-bench-press' || config.exerciseId === 'close-grip-bench-press') {
    return renderBarbellBenchReferenceScene(config, phaseIdx, shadowId);
  }

  // 2. DUMBBELL BENCH PRESS (Flat, Incline, Decline)
  if (posture.includes('bench') && config.equipment.includes('dumbbell')) {
    return renderDumbbellBenchScene(config, phaseIdx, shadowId);
  }

  // 3. INCLINE & DECLINE BARBELL BENCH PRESS
  if (posture.includes('incline_bench') || posture.includes('decline_bench')) {
    return renderAngledBenchPressScene(config, phaseIdx, shadowId);
  }

  // 4. BARBELL BACK SQUAT & FRONT SQUAT
  if (posture.includes('squat') || posture.includes('leg_press') || posture.includes('lunge')) {
    return renderSquatVectorScene(config, phaseIdx, shadowId);
  }

  // 5. PULL-UPS, CHIN-UPS & LAT PULLDOWN
  if (posture.includes('hanging') || posture.includes('lat_') || posture.includes('pullup')) {
    return renderVerticalPullVectorScene(config, phaseIdx, shadowId);
  }

  // 6. ROWS & DEADLIFTS (Bent-Over Rows, Pendlay, Deadlifts, RDLs)
  if (posture.includes('row') || posture.includes('hinge') || posture.includes('deadlift')) {
    return renderRowDeadliftVectorScene(config, phaseIdx, shadowId);
  }

  // 7. BICEPS CURLS (Barbell, Dumbbell, Preacher, Hammer)
  if (posture.includes('curl') && !posture.includes('leg')) {
    return renderBicepCurlVectorScene(config, phaseIdx, shadowId);
  }

  // 8. TRICEPS (Pushdowns, Skull Crushers, Dips)
  if (posture.includes('pushdown') || posture.includes('dips') || posture.includes('triceps')) {
    return renderTricepVectorScene(config, phaseIdx, shadowId);
  }

  // 9. SHOULDERS (Overhead Press, Dumbbell Press, Lateral Raises)
  if (posture.includes('press') || posture.includes('raises') || posture.includes('face_pull')) {
    return renderShoulderVectorScene(config, phaseIdx, shadowId);
  }

  // 10. CALVES & FEET (Standing Deficit, Seated)
  if (posture.includes('calf') || posture.includes('tibialis')) {
    return renderCalfVectorScene(config, phaseIdx, shadowId);
  }

  // 11. CORE & ABS (Plank, Crunches, Ab Wheel Rollout)
  if (posture.includes('crunch') || posture.includes('plank') || posture.includes('floor') || posture.includes('rollout') || posture.includes('sit')) {
    return renderAbsVectorScene(config, phaseIdx, shadowId);
  }

  // 12. FOREARMS & GRIP
  if (posture.includes('wrist') || posture.includes('grip') || posture.includes('farmer') || posture.includes('finger') || posture.includes('plate')) {
    return renderForearmVectorScene(config, phaseIdx, shadowId);
  }

  // Default Universal Clean Vector Scene
  return renderUniversalVectorScene(config, phaseIdx, shadowId);
}

// ----------------------------------------------------------------------------
// REFERENCE IMPLEMENTATION: BARBELL BENCH PRESS
// 3/4 Isometric Perspective matching the provided image reference precisely.
// Features: Grey steel rack with cross feet & J-hooks, flat bench with dark pad,
// athlete in blue top, dark shorts, blue shoes with white socks, rigid chrome bar
// with vibrant blue Olympic plates moving continuously from lockout to chest & back.
// ----------------------------------------------------------------------------
function renderBarbellBenchReferenceScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  // Movement coordinates:
  // Phase 0: Lockout aloft over chest (barY = 75)
  // Phase 1: Lowering smoothly (barY = 110)
  // Phase 2: Bar touching mid-to-lower chest (barY = 132)
  // Phase 3: Pressing up back toward lockout (barY = 92)
  const barYMap = [75, 110, 132, 92];
  const barY = barYMap[phase];

  // Coordinated elbow deflection during bench press:
  // Phase 0: Left elbow at (176, 102), Right elbow at (254, 106)
  // Phase 1: Left elbow at (160, 126), Right elbow at (268, 132)
  // Phase 2: Deep chest stretch: Left elbow at (148, 142), Right elbow at (278, 148)
  // Phase 3: Left elbow at (168, 112), Right elbow at (260, 118)
  const leftElbowMap = [
    { x: 176, y: 102 },
    { x: 160, y: 126 },
    { x: 148, y: 142 },
    { x: 168, y: 112 }
  ];
  const rightElbowMap = [
    { x: 254, y: 106 },
    { x: 268, y: 132 },
    { x: 278, y: 148 },
    { x: 260, y: 118 }
  ];
  const leftElbow = leftElbowMap[phase];
  const rightElbow = rightElbowMap[phase];

  // Barbell coordinates in 3/4 perspective:
  // The bar passes through Left Hand at (180, barY) and Right Hand at (255, barY + 4)
  const leftHand = { x: 180, y: barY };
  const rightHand = { x: 255, y: barY + 4 };

  // Shoulders on bench (fixed anatomical anchors)
  const leftShoulder = { x: 195, y: 132 };
  const rightShoulder = { x: 232, y: 136 };

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* 1. REAR RACK UPRIGHT (Background 3/4 perspective) */}
      <g>
        {/* Cross Base at floor */}
        <polygon points="120,205 130,200 140,205 130,210" fill="#475569" />
        <line x1="105" y1="205" x2="145" y2="205" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        <line x1="125" y1="195" x2="125" y2="215" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        {/* Vertical Steel Post */}
        <rect x="122" y="80" width="8" height="125" fill="#64748b" rx="1" />
        {/* J-Hook at top */}
        <path d="M 122 100 L 128 100 L 128 92" fill="none" stroke="#334155" strokeWidth="4" />
      </g>

      {/* 2. FLAT WORKOUT BENCH FRAME & CUSHION (Diagonal 3/4 angle) */}
      <g>
        {/* Rear Bench Leg */}
        <line x1="170" y1="145" x2="170" y2="205" stroke="#64748b" strokeWidth="7" strokeLinecap="square" />
        <line x1="155" y1="205" x2="185" y2="205" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        {/* Front Bench Leg */}
        <line x1="260" y1="168" x2="260" y2="225" stroke="#64748b" strokeWidth="8" strokeLinecap="square" />
        <line x1="242" y1="225" x2="278" y2="225" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
        {/* Horizontal Steel Spine */}
        <line x1="170" y1="180" x2="260" y2="198" stroke="#475569" strokeWidth="6" />

        {/* Bench Padded Top Surface (Dark Slate / Charcoal) */}
        <polygon 
          points="145,130 162,124 285,158 268,166" 
          fill="#334155" 
          stroke="#1e293b" 
          strokeWidth="1.5"
        />
        {/* Bench Cushion Side Depth */}
        <polygon 
          points="145,130 268,166 268,174 145,138" 
          fill="#1e293b" 
        />
      </g>

      {/* 3. FRONT RACK UPRIGHT (Midground) */}
      <g>
        {/* Cross Base at floor */}
        <line x1="220" y1="225" x2="260" y2="225" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        <line x1="240" y1="215" x2="240" y2="235" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        {/* Vertical Steel Post */}
        <rect x="236" y="98" width="8" height="127" fill="#64748b" rx="1" />
        {/* J-Hook at top */}
        <path d="M 236 118 L 242 118 L 242 110" fill="none" stroke="#334155" strokeWidth="4" />
      </g>

      {/* 4. ATHLETIC HUMAN PERFORMING BENCH PRESS */}
      {/* Head Resting on Bench */}
      <g>
        <circle cx="160" cy="120" r="13" fill="url(#skinTone)" />
        {/* Dark Short Hair */}
        <path d="M 150 120 Q 155 107 168 112 Q 174 116 172 122 Q 165 115 152 118 Z" fill="#1e293b" />
      </g>

      {/* Torso in Bright Athletic Blue Workout Top */}
      <g>
        {/* Blue Tank Top Body */}
        <polygon 
          points="172,125 210,132 235,142 225,162 185,148" 
          fill="url(#blueShirt)" 
          stroke="#1d4ed8" 
          strokeWidth="1"
        />
      </g>

      {/* Dark Athletic Shorts */}
      <g>
        <polygon 
          points="225,142 256,150 250,172 218,164" 
          fill="url(#darkShorts)" 
        />
      </g>

      {/* Right Leg (Foreground - bent at knee with foot firmly planted) */}
      <g>
        {/* Thigh (skin) */}
        <line x1="246" y1="156" x2="278" y2="174" stroke="url(#skinTone)" strokeWidth="15" strokeLinecap="round" />
        {/* Shin / Calf */}
        <line x1="278" y1="174" x2="282" y2="218" stroke="url(#skinTone)" strokeWidth="13" strokeLinecap="round" />
        {/* White Sock */}
        <line x1="282" y1="212" x2="282" y2="220" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
        {/* Blue Athletic Shoe */}
        <polygon points="274,218 296,218 304,226 272,226" fill="#2563eb" />
        <line x1="272" y1="226" x2="304" y2="226" stroke="#ffffff" strokeWidth="2" />
      </g>

      {/* Left Leg (Background - bent at knee with foot planted) */}
      <g>
        {/* Thigh */}
        <line x1="230" y1="146" x2="310" y2="156" stroke="url(#skinTone)" strokeWidth="14" strokeLinecap="round" />
        {/* Shin / Calf */}
        <line x1="310" y1="156" x2="330" y2="198" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
        {/* White Sock */}
        <line x1="330" y1="192" x2="330" y2="200" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
        {/* Blue Athletic Shoe */}
        <polygon points="322,198 344,198 350,205 320,205" fill="#2563eb" />
        <line x1="320" y1="205" x2="350" y2="205" stroke="#ffffff" strokeWidth="2" />
      </g>

      {/* 5. ARMS & SHOULDERS (Kinematically attached to body and barbell) */}
      {/* Left Arm: Shoulder (195,132) -> Left Elbow -> Left Hand (180, barY) */}
      <g>
        <line 
          x1={leftShoulder.x} y1={leftShoulder.y} 
          x2={leftElbow.x} y2={leftElbow.y} 
          stroke="url(#skinTone)" 
          strokeWidth="12" 
          strokeLinecap="round" 
        />
        <line 
          x1={leftElbow.x} y1={leftElbow.y} 
          x2={leftHand.x} y2={leftHand.y} 
          stroke="url(#skinTone)" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
        {/* Hand Closed Firmly Around Bar */}
        <circle cx={leftHand.x} cy={leftHand.y} r="6.5" fill="url(#skinTone)" stroke="#ea580c" strokeWidth="0.8" />
      </g>

      {/* Right Arm: Shoulder (232,136) -> Right Elbow -> Right Hand (255, barY + 4) */}
      <g>
        <line 
          x1={rightShoulder.x} y1={rightShoulder.y} 
          x2={rightElbow.x} y2={rightElbow.y} 
          stroke="url(#skinTone)" 
          strokeWidth="13" 
          strokeLinecap="round" 
        />
        <line 
          x1={rightElbow.x} y1={rightElbow.y} 
          x2={rightHand.x} y2={rightHand.y} 
          stroke="url(#skinTone)" 
          strokeWidth="11" 
          strokeLinecap="round" 
        />
        {/* Hand Closed Firmly Around Bar */}
        <circle cx={rightHand.x} cy={rightHand.y} r="6.5" fill="url(#skinTone)" stroke="#ea580c" strokeWidth="0.8" />
      </g>

      {/* 6. RIGID CHROME BARBELL WITH BLUE OLYMPIC PLATES (Passes through hands) */}
      <g>
        {/* Chrome Barbell Bar extending through hands */}
        <line 
          x1="100" y1={barY - 5} 
          x2="335" y2={barY + 11} 
          stroke="url(#barbellChrome)" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />

        {/* Left Olympic Blue Plate (Rear) */}
        <g transform={`translate(118, ${barY - 4})`}>
          <circle cx="0" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="0" cy="0" r="10" fill="#0f172a" />
          <circle cx="0" cy="0" r="4.5" fill="#94a3b8" />
        </g>

        {/* Right Olympic Blue Plate (Front) */}
        <g transform={`translate(315, ${barY + 9})`}>
          <circle cx="0" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="0" cy="0" r="10" fill="#0f172a" />
          <circle cx="0" cy="0" r="4.5" fill="#94a3b8" />
        </g>
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: DUMBBELL BENCH PRESS (FLAT, INCLINE, DECLINE)
// Features athlete in blue top & dark shorts on bench independently holding
// two separate dumbbells, pressing them up & down through complete ROM.
// ----------------------------------------------------------------------------
function renderDumbbellBenchScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  // DB height phases: 0: lockout (y=70), 1: lowering (y=105), 2: deep stretch (y=128), 3: pressing (y=88)
  const dbYMap = [70, 105, 128, 88];
  const dbY = dbYMap[phase];

  const leftElbow = [{ x: 172, y: 102 }, { x: 156, y: 128 }, { x: 144, y: 144 }, { x: 165, y: 112 }][phase];
  const rightElbow = [{ x: 258, y: 106 }, { x: 272, y: 132 }, { x: 282, y: 148 }, { x: 264, y: 116 }][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Flat Bench Frame & Pad */}
      <line x1="170" y1="145" x2="170" y2="205" stroke="#64748b" strokeWidth="7" strokeLinecap="square" />
      <line x1="155" y1="205" x2="185" y2="205" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <line x1="260" y1="168" x2="260" y2="225" stroke="#64748b" strokeWidth="8" strokeLinecap="square" />
      <line x1="242" y1="225" x2="278" y2="225" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
      <polygon points="145,130 162,124 285,158 268,166" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
      <polygon points="145,130 268,166 268,174 145,138" fill="#1e293b" />

      {/* Athlete Body on Bench */}
      <circle cx="160" cy="120" r="13" fill="url(#skinTone)" />
      <polygon points="172,125 210,132 235,142 225,162 185,148" fill="url(#blueShirt)" />
      <polygon points="225,142 256,150 250,172 218,164" fill="url(#darkShorts)" />
      
      {/* Legs & Planted Feet in Blue Shoes */}
      <line x1="246" y1="156" x2="278" y2="174" stroke="url(#skinTone)" strokeWidth="15" strokeLinecap="round" />
      <line x1="278" y1="174" x2="282" y2="218" stroke="url(#skinTone)" strokeWidth="13" strokeLinecap="round" />
      <line x1="282" y1="212" x2="282" y2="220" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
      <polygon points="274,218 296,218 304,226 272,226" fill="#2563eb" />

      {/* Left Arm & Left Dumbbell */}
      <line x1="195" y1="132" x2={leftElbow.x} y2={leftElbow.y} stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <line x1={leftElbow.x} y1={leftElbow.y} x2="175" y2={dbY} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="175" cy={dbY} r="6" fill="url(#skinTone)" />
      <g transform={`translate(175, ${dbY})`}>
        <rect x="-12" y="-3" width="24" height="6" fill="#cbd5e1" rx="1" />
        <rect x="-18" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="11" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
      </g>

      {/* Right Arm & Right Dumbbell */}
      <line x1="232" y1="136" x2={rightElbow.x} y2={rightElbow.y} stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <line x1={rightElbow.x} y1={rightElbow.y} x2="252" y2={dbY + 4} stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="252" cy={dbY + 4} r="6" fill="url(#skinTone)" />
      <g transform={`translate(252, ${dbY + 4})`}>
        <rect x="-12" y="-3" width="24" height="6" fill="#cbd5e1" rx="1" />
        <rect x="-18" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="11" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: INCLINE / DECLINE BARBELL BENCH PRESS
// ----------------------------------------------------------------------------
function renderAngledBenchPressScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const isIncline = config.posture.includes('incline');
  const barYMap = isIncline ? [62, 98, 124, 82] : [80, 115, 138, 98];
  const barY = barYMap[phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Angled Bench Frame */}
      <g transform={`rotate(${isIncline ? -28 : 18} 210 150)`}>
        <rect x="110" y="142" width="200" height="15" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
      </g>
      <line x1="160" y1="165" x2="160" y2="215" stroke="#64748b" strokeWidth="7" />
      <line x1="260" y1="175" x2="260" y2="215" stroke="#64748b" strokeWidth="7" />

      {/* Human Body Lying Angled */}
      <g transform={`rotate(${isIncline ? -28 : 18} 210 150)`}>
        <circle cx="135" cy="135" r="13" fill="url(#skinTone)" />
        <polygon points="148,138 215,142 225,160 155,152" fill="url(#blueShirt)" />
        <polygon points="215,142 245,145 240,165 210,160" fill="url(#darkShorts)" />
      </g>

      {/* Feet on Ground */}
      <line x1="265" y1="165" x2="280" y2="215" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <polygon points="274,215 296,215 302,223 270,223" fill="#2563eb" />

      {/* Hands and Rigid Barbell */}
      <line x1="120" y1={barY} x2="310" y2={barY} stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="135" cy={barY} r="25" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
      <circle cx="295" cy={barY} r="25" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
      <circle cx="185" cy={barY} r="6" fill="url(#skinTone)" />
      <circle cx="245" cy={barY} r="6" fill="url(#skinTone)" />
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: SQUATS & LEG PRESS (BARBELL SQUAT RACK, PARALLEL DEPTH)
// ----------------------------------------------------------------------------
function renderSquatVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  // Phases: 0: standing lockout, 1: descending, 2: parallel depth, 3: driving up
  const hipY = [120, 145, 168, 138][phase];
  const kneeY = [160, 172, 172, 166][phase];
  const kneeX = [242, 255, 264, 248][phase];
  const barY = [70, 102, 128, 88][phase];
  const torsoAngle = [0, 16, 26, 10][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Squat Rack Uprights */}
      <line x1="145" y1="40" x2="145" y2="225" stroke="#64748b" strokeWidth="6" />
      <line x1="315" y1="40" x2="315" y2="225" stroke="#64748b" strokeWidth="6" />
      <line x1="145" y1="170" x2="315" y2="170" stroke="#475569" strokeWidth="3" strokeDasharray="5 3" />

      {/* Athlete Body */}
      <g transform={`rotate(${torsoAngle} 220 ${hipY})`}>
        {/* Torso in Blue Shirt */}
        <line x1="220" y1={hipY} x2="220" y2={hipY - 48} stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
        {/* Head */}
        <circle cx="220" cy={hipY - 65} r="13" fill="url(#skinTone)" />
        <path d="M 210 120 Q 215 107 228 112" stroke="#1e293b" />
      </g>

      {/* Dark Shorts at Hips */}
      <polygon points="208,115 232,115 238,135 212,135" fill="url(#darkShorts)" transform={`translate(0, ${hipY - 120})`} />

      {/* Muscular Thighs (Quads in Natural Skin Tone) */}
      <line x1="220" y1={hipY} x2={kneeX} y2={kneeY} stroke="url(#skinTone)" strokeWidth="15" strokeLinecap="round" />
      {/* Shin & Calf */}
      <line x1={kneeX} y1={kneeY} x2="245" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      {/* White Socks & Blue Shoes */}
      <line x1="245" y1="216" x2="245" y2="224" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
      <polygon points="236,222 262,222 268,228 232,228" fill="#2563eb" />

      {/* Barbell with Blue Olympic Plates Resting on Upper Back */}
      <g transform={`translate(0, ${barY})`}>
        <line x1="90" y1="0" x2="370" y2="0" stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="115" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="115" cy="0" r="10" fill="#0f172a" />
        <circle cx="345" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="345" cy="0" r="10" fill="#0f172a" />
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: VERTICAL PULLS (PULL-UPS, CHIN-UPS & LAT PULLDOWN)
// ----------------------------------------------------------------------------
function renderVerticalPullVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const isLatPulldown = config.equipment.includes('lat_pulldown') || config.posture.includes('lat');
  const bodyY = isLatPulldown ? 0 : [75, 48, 20, 52][phase];
  const barY = isLatPulldown ? [45, 72, 102, 60][phase] : 38;
  const elbowY = isLatPulldown ? [60, 85, 115, 75][phase] : [88, 70, 48, 76][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Equipment: Overhead Pull-Up Rig or Lat Pulldown Machine */}
      {isLatPulldown ? (
        <g>
          {/* Machine Frame & Pulley Wheel */}
          <line x1="230" y1="15" x2="230" y2="45" stroke="#64748b" strokeWidth="4" />
          <circle cx="230" cy="25" r="12" fill="#334155" stroke="#2563eb" strokeWidth="2" />
          {/* Lat Pulldown Seat and Thigh Pad */}
          <rect x="190" y="165" width="80" height="12" rx="3" fill="#334155" />
          <rect x="205" y="145" width="50" height="10" rx="4" fill="#1e293b" />
          <line x1="230" y1="177" x2="230" y2="225" stroke="#64748b" strokeWidth="6" />
        </g>
      ) : (
        <g>
          <line x1="100" y1="15" x2="100" y2="40" stroke="#64748b" strokeWidth="5" />
          <line x1="360" y1="15" x2="360" y2="40" stroke="#64748b" strokeWidth="5" />
          <line x1="80" y1="40" x2="380" y2="40" stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      {/* Athlete Body in Blue Shirt & Dark Shorts */}
      <g transform={`translate(230, ${bodyY})`}>
        {/* Head */}
        <circle cx="0" cy="52" r="13" fill="url(#skinTone)" />
        {/* Blue Shirt Torso */}
        <line x1="0" y1="65" x2="0" y2="122" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
        {/* Dark Shorts */}
        <polygon points="-12,120 12,120 15,142 -15,142" fill="url(#darkShorts)" />
        {/* Legs hanging or seated */}
        <line x1="-7" y1="142" x2="-8" y2="195" stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
        <line x1="7" y1="142" x2="8" y2="195" stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
        {/* Blue Shoes */}
        <polygon points="-16,195 0,195 -2,203 -18,203" fill="#2563eb" />
        <polygon points="0,195 16,195 18,203 2,203" fill="#2563eb" />
      </g>

      {/* Arms Driving Down from Bar */}
      <line x1="210" y1={bodyY + 68} x2="185" y2={elbowY} stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <line x1="185" y1={elbowY} x2="190" y2={barY} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="190" cy={barY} r="5.5" fill="url(#skinTone)" />

      <line x1="250" y1={bodyY + 68} x2="275" y2={elbowY} stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <line x1="275" y1={elbowY} x2="270" y2={barY} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="270" cy={barY} r="5.5" fill="url(#skinTone)" />

      {/* Lat Pulldown Wide Bar */}
      {isLatPulldown && (
        <g transform={`translate(0, ${barY})`}>
          <line x1="230" y1="0" x2="230" y2="-28" stroke="#64748b" strokeWidth="2.5" />
          <path d="M 145 10 Q 230 -2 315 10" stroke="url(#barbellChrome)" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: ROWS & DEADLIFTS (BENT-OVER ROWS, PENDLAY, DEADLIFTS, RDLS)
// ----------------------------------------------------------------------------
function renderRowDeadliftVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const isDeadlift = config.exerciseId.includes('deadlift');
  const barY = isDeadlift ? [195, 145, 105, 155][phase] : [175, 145, 118, 155][phase];
  const elbowY = [155, 128, 105, 138][phase];
  const elbowX = [215, 198, 185, 205][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Athlete Hinged at Hips at 45° with Flat Back */}
      <line x1="185" y1="222" x2="198" y2="165" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <line x1="198" y1="165" x2="218" y2="128" stroke="url(#skinTone)" strokeWidth="14" strokeLinecap="round" />
      <line x1="185" y1="216" x2="185" y2="224" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
      <polygon points="175,222 202,222 208,228 172,228" fill="#2563eb" />

      {/* Dark Shorts */}
      <polygon points="208,122 228,125 222,148 200,144" fill="url(#darkShorts)" />

      {/* Torso in Blue Shirt */}
      <line x1="218" y1="128" x2="265" y2="92" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="278" cy="82" r="13" fill="url(#skinTone)" />

      {/* Arms Rowing Up */}
      <line x1="255" y1="98" x2={elbowX} y2={elbowY} stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <line x1={elbowX} y1={elbowY} x2="235" y2={barY} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="235" cy={barY} r="5.5" fill="url(#skinTone)" />

      {/* Barbell with Blue Olympic Plates */}
      <g transform={`translate(0, ${barY})`}>
        <line x1="130" y1="0" x2="340" y2="0" stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="150" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="150" cy="0" r="10" fill="#0f172a" />
        <circle cx="320" cy="0" r="28" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="320" cy="0" r="10" fill="#0f172a" />
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: BICEPS CURLS (DUMBBELLS, BARBELL, HAMMER)
// ----------------------------------------------------------------------------
function renderBicepCurlVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  // Phases: 0: arms extended down (y=175), 1: curling (y=135), 2: peak squeeze (y=95), 3: eccentric lowering (y=148)
  const handY = [175, 135, 95, 148][phase];
  const handX = [245, 252, 240, 250][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Athlete Standing Tall in Blue Top & Dark Shorts */}
      <line x1="220" y1="140" x2="220" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <line x1="220" y1="216" x2="220" y2="224" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
      <polygon points="210,222 236,222 242,228 208,228" fill="#2563eb" />

      {/* Dark Shorts */}
      <polygon points="208,135 232,135 236,155 204,155" fill="url(#darkShorts)" />

      {/* Torso in Blue Shirt */}
      <line x1="220" y1="135" x2="220" y2="78" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="220" cy="58" r="13" fill="url(#skinTone)" />

      {/* Upper Arm Pinned to Torso */}
      <line x1="220" y1="84" x2="225" y2="132" stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      {/* Forearm Curling Up */}
      <line x1="225" y1="132" x2={handX} y2={handY} stroke="url(#skinTone)" strokeWidth="9.5" strokeLinecap="round" />
      <circle cx={handX} cy={handY} r="5.5" fill="url(#skinTone)" />

      {/* Dumbbell in Hand */}
      <g transform={`translate(${handX}, ${handY})`}>
        <rect x="-12" y="-3" width="24" height="6" fill="#cbd5e1" rx="1" />
        <rect x="-18" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="11" y="-12" width="7" height="24" rx="2" fill="#1e293b" stroke="#2563eb" strokeWidth="1.5" />
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: TRICEPS PUSHDOWNS, EXTENSIONS & DIPS
// ----------------------------------------------------------------------------
function renderTricepVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const handY = [128, 155, 185, 142][phase];
  const handX = [238, 232, 226, 235][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Cable Tower Upright & Pulley */}
      <line x1="290" y1="20" x2="290" y2="225" stroke="#64748b" strokeWidth="5" />
      <circle cx="240" cy="20" r="11" fill="#334155" stroke="#2563eb" strokeWidth="2" />
      <line x1="240" y1="20" x2={handX} y2={handY - 6} stroke="#94a3b8" strokeWidth="2.5" />

      {/* Athlete Body Standing at Cable */}
      <line x1="190" y1="140" x2="190" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <polygon points="180,222 206,222 212,228 178,228" fill="#2563eb" />
      <polygon points="178,135 202,135 206,155 174,155" fill="url(#darkShorts)" />
      <line x1="190" y1="135" x2="200" y2="78" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="204" cy="58" r="13" fill="url(#skinTone)" />

      {/* Upper Arm Fixed */}
      <line x1="200" y1="84" x2="204" y2="132" stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      {/* Forearm Pushing Down */}
      <line x1="204" y1="132" x2={handX} y2={handY} stroke="url(#skinTone)" strokeWidth="9.5" strokeLinecap="round" />
      <circle cx={handX} cy={handY} r="5.5" fill="url(#skinTone)" />
      <rect x={handX - 8} y={handY - 2} width="16" height="5" rx="2" fill="#2563eb" />
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: SHOULDERS (OVERHEAD PRESS, LATERAL RAISES)
// ----------------------------------------------------------------------------
function renderShoulderVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const barY = [82, 54, 25, 68][phase];
  const elbowY = [112, 84, 56, 98][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Athlete Body Standing Upright */}
      <line x1="220" y1="140" x2="210" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <line x1="220" y1="140" x2="230" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <polygon points="198,222 222,222 226,228 196,228" fill="#2563eb" />
      <polygon points="220,222 244,222 248,228 218,228" fill="#2563eb" />

      {/* Dark Shorts */}
      <polygon points="206,135 234,135 238,155 202,155" fill="url(#darkShorts)" />

      {/* Torso in Blue Shirt */}
      <line x1="220" y1="135" x2="220" y2="78" stroke="url(#blueShirt)" strokeWidth="20" strokeLinecap="round" />
      <circle cx="220" cy="58" r="13" fill="url(#skinTone)" />

      {/* Arms Pressing Barbell Overhead */}
      <line x1="202" y1="78" x2="190" y2={elbowY} stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
      <line x1="190" y1={elbowY} x2="205" y2={barY + 6} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="205" cy={barY + 6} r="5.5" fill="url(#skinTone)" />

      <line x1="238" y1="78" x2="250" y2={elbowY} stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
      <line x1="250" y1={elbowY} x2="235" y2={barY + 6} stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="235" cy={barY + 6} r="5.5" fill="url(#skinTone)" />

      {/* Barbell with Blue Olympic Plates Overhead */}
      <g transform={`translate(0, ${barY})`}>
        <line x1="110" y1="6" x2="330" y2="6" stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="130" cy="6" r="26" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="130" cy="6" r="9" fill="#0f172a" />
        <circle cx="310" cy="6" r="26" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="2" />
        <circle cx="310" cy="6" r="9" fill="#0f172a" />
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: CALVES (STANDING DEFICIT, SEATED CALF RAISE)
// ----------------------------------------------------------------------------
function renderCalfVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  // Heel elevation: 0: deficit below block (y=226), 1: driving up (y=210), 2: peak tiptoe (y=190), 3: lowering (y=218)
  const heelY = [226, 210, 190, 218][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Calf Block Ledge */}
      <rect x="180" y="210" width="90" height="16" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="2" />
      <line x1="180" y1="226" x2="270" y2="226" stroke="#0f172a" strokeWidth="4" />

      {/* Athlete Body Standing */}
      <line x1="220" y1="130" x2="220" y2="72" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="220" cy="52" r="13" fill="url(#skinTone)" />
      <polygon points="208,130 232,130 236,150 204,150" fill="url(#darkShorts)" />

      {/* Thigh */}
      <line x1="220" y1="140" x2="220" y2="175" stroke="url(#skinTone)" strokeWidth="13" strokeLinecap="round" />
      {/* Calf & Foot: Ball on block (fixed), heel elevating */}
      <line x1="220" y1="175" x2="218" y2={heelY} stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <line x1="218" y1={heelY} x2="238" y2="210" stroke="#2563eb" strokeWidth="9" strokeLinecap="round" />
      <circle cx="238" cy="210" r="5" fill="#1d4ed8" />
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: CORE & ABS (PLANKS, CRUNCHES, AB WHEEL)
// ----------------------------------------------------------------------------
function renderAbsVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const isPlank = config.exerciseId.includes('plank');
  const isAbWheel = config.exerciseId.includes('ab-wheel');

  if (isPlank) {
    // Static isometric forearm plank on gym mat
    return (
      <g className="transition-all duration-400 ease-in-out">
        {/* Floor Mat */}
        <rect x="90" y="200" width="280" height="12" rx="3" fill="#334155" stroke="#2563eb" strokeWidth="1.5" />
        {/* Athlete Body in Horizontal Line */}
        <line x1="140" y1="165" x2="280" y2="190" stroke="url(#blueShirt)" strokeWidth="16" strokeLinecap="round" />
        <circle cx="125" cy="160" r="13" fill="url(#skinTone)" />
        {/* Forearms Supporting on Mat */}
        <line x1="145" y1="168" x2="148" y2="200" stroke="url(#skinTone)" strokeWidth="10" strokeLinecap="round" />
        {/* Legs and Toes on Mat */}
        <line x1="280" y1="190" x2="335" y2="198" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
        <polygon points="330,198 345,198 348,205 328,205" fill="#2563eb" />
      </g>
    );
  }

  // Floor Crunch Curling
  const chestY = [180, 162, 150, 170][phase];
  const chestX = [170, 180, 188, 175][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Floor Mat */}
      <rect x="80" y="195" width="300" height="12" rx="3" fill="#334155" stroke="#2563eb" strokeWidth="1.5" />
      {/* Pelvis on Mat */}
      <circle cx="230" cy="186" r="11" fill="url(#darkShorts)" />
      {/* Torso Curling Up in Blue Top */}
      <line x1="230" y1="186" x2={chestX} y2={chestY} stroke="url(#blueShirt)" strokeWidth="16" strokeLinecap="round" />
      <circle cx={chestX - 16} cy={chestY - 8} r="13" fill="url(#skinTone)" />
      {/* Bent Knees and Planted Feet */}
      <line x1="230" y1="186" x2="268" y2="155" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <line x1="268" y1="155" x2="295" y2="195" stroke="url(#skinTone)" strokeWidth="11" strokeLinecap="round" />
      <polygon points="288,195 310,195 315,202 285,202" fill="#2563eb" />
    </g>
  );
}

// ----------------------------------------------------------------------------
// SCENE: FOREARMS & WRIST CURLS
// ----------------------------------------------------------------------------
function renderForearmVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const wristAngle = [25, 0, -35, 10][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Bench Cushion Support */}
      <rect x="110" y="150" width="220" height="20" rx="4" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="150" y1="170" x2="150" y2="225" stroke="#64748b" strokeWidth="6" />
      <line x1="290" y1="170" x2="290" y2="225" stroke="#64748b" strokeWidth="6" />

      {/* Forearm Resting Flat on Bench */}
      <line x1="130" y1="144" x2="260" y2="144" stroke="url(#skinTone)" strokeWidth="14" strokeLinecap="round" />

      {/* Hand & Barbell Rotating at Wrist Joint */}
      <g transform={`translate(260, 144) rotate(${wristAngle})`}>
        <line x1="0" y1="0" x2="28" y2="0" stroke="url(#skinTone)" strokeWidth="9" strokeLinecap="round" />
        <circle cx="28" cy="0" r="6.5" fill="url(#skinTone)" />
        {/* Barbell in Hand with Blue Plates */}
        <g transform="translate(28, 0)">
          <line x1="0" y1="-35" x2="0" y2="35" stroke="url(#barbellChrome)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="0" cy="-35" r="16" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="1.5" />
          <circle cx="0" cy="35" r="16" fill="url(#blueOlympicPlate)" stroke="#1e3a8a" strokeWidth="1.5" />
        </g>
      </g>
    </g>
  );
}

// ----------------------------------------------------------------------------
// UNIVERSAL CLEAN 2D VECTOR ATHLETE SCENE
// ----------------------------------------------------------------------------
function renderUniversalVectorScene(config: ExerciseAnimationConfig, phase: number, shadowId: string) {
  const armY = [130, 105, 80, 115][phase];

  return (
    <g className="transition-all duration-400 ease-in-out">
      {/* Athlete Standing Tall */}
      <line x1="230" y1="140" x2="230" y2="222" stroke="url(#skinTone)" strokeWidth="12" strokeLinecap="round" />
      <polygon points="218,222 244,222 250,228 214,228" fill="#2563eb" />
      <polygon points="216,135 244,135 248,155 212,155" fill="url(#darkShorts)" />
      <line x1="230" y1="135" x2="230" y2="78" stroke="url(#blueShirt)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="230" cy="58" r="13" fill="url(#skinTone)" />

      {/* Moving Arm */}
      <line x1="230" y1="84" x2="260" y2={armY} stroke="url(#skinTone)" strokeWidth="9.5" strokeLinecap="round" />
      <circle cx="260" cy={armY} r="6" fill="url(#skinTone)" />
    </g>
  );
}
