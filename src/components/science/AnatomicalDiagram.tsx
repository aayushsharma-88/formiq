"use client";

import React, { useState } from "react";
import { Eye, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import { MuscleAnatomy } from "@/data/muscleScience";

interface AnatomicalDiagramProps {
  category: "chest" | "back" | "shoulders" | "arms" | "legs" | "core";
  currentView: "anterior" | "posterior" | "lateral" | "deep";
  selectedMuscle: MuscleAnatomy;
  onSelectMuscle: (muscleId: string) => void;
  referenceImage: string;
}

export default function AnatomicalDiagram({
  category,
  currentView,
  selectedMuscle,
  onSelectMuscle,
  referenceImage
}: AnatomicalDiagramProps) {
  const [showPhotoRef, setShowPhotoRef] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const isSelected = (id: string) => selectedMuscle.id === id;
  const isHovered = (id: string) => hoveredPart === id;

  const getFill = (id: string) => {
    if (isSelected(id)) return "url(#selectedCyanGradient)";
    if (isHovered(id)) return "#0891b2";
    return "#1e293b";
  };

  const getStroke = (id: string) => {
    if (isSelected(id)) return "#22d3ee";
    if (isHovered(id)) return "#06b6d4";
    return "#475569";
  };

  const getFilter = (id: string) => {
    if (isSelected(id)) return "url(#cyanGlow)";
    return undefined;
  };

  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col items-center relative overflow-hidden bg-gradient-to-b from-slate-900/80 to-slate-950/90 shadow-2xl">
      {/* Header Controls */}
      <div className="w-full flex items-center justify-between gap-2 mb-3 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#06b6d4]"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {currentView} Anatomical Model
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowPhotoRef(!showPhotoRef)}
          className={`px-2.5 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
            showPhotoRef
              ? "bg-primary text-black border-primary shadow-[0_0_12px_rgba(6,182,212,0.4)]"
              : "bg-white/5 text-foreground/70 border-white/10 hover:text-white hover:bg-white/10"
          }`}
        >
          <Eye size={13} />
          <span>{showPhotoRef ? "Show Vector Guide" : "Medical Render"}</span>
        </button>
      </div>

      {/* Main Diagram Canvas */}
      <div className="w-full flex items-center justify-center min-h-[380px] sm:min-h-[440px] relative">
        {showPhotoRef ? (
          <div className="relative w-full h-[400px] flex items-center justify-center p-2 animate-in fade-in zoom-in-95 duration-300">
            <div className="relative w-full h-full max-w-[320px] rounded-xl overflow-hidden border border-primary/20 bg-black/40">
              <Image
                src={referenceImage}
                alt={`${category} muscular anatomy reference`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md rounded-lg p-2 text-center text-[11px] text-foreground/80 border border-white/10">
                Medical Reference Render • {category.toUpperCase()}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-[380px] h-[400px] sm:h-[440px] flex items-center justify-center">
            <svg
              viewBox="0 0 400 440"
              className="w-full h-full select-none cursor-pointer drop-shadow-md"
            >
              <defs>
                {/* Cyan Glow Filter */}
                <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Selected Muscle Gradient */}
                <linearGradient id="selectedCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.95" />
                </linearGradient>

                {/* Bone structure gradient */}
                <linearGradient id="boneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* BACKGROUND SKELETAL / SILHOUETTE GUIDE */}
              <g id="underlying-skeleton" opacity="0.35">
                {/* Head / Neck contour */}
                <circle cx="200" cy="45" r="28" fill="url(#boneGradient)" stroke="#475569" strokeWidth="1" />
                <path d="M 188 73 L 188 105 L 212 105 L 212 73 Z" fill="url(#boneGradient)" stroke="#475569" strokeWidth="1" />
                
                {/* Clavicles */}
                <path d="M 200 102 C 160 98 120 110 95 125" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 3" />
                <path d="M 200 102 C 240 98 280 110 305 125" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 3" />

                {/* Sternum */}
                <path d="M 194 105 L 206 105 L 203 195 L 197 195 Z" fill="#475569" opacity="0.5" />

                {/* Rib cage contour */}
                <ellipse cx="200" cy="190" rx="90" ry="85" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Spine (visible in back/core/deep) */}
                <line x1="200" y1="100" x2="200" y2="350" stroke="#475569" strokeWidth="3" strokeDasharray="5 5" opacity="0.4" />
              </g>

              {/* ======================================================== */}
              {/* 1. CHEST DIAGRAM PATHS                                   */}
              {/* ======================================================== */}
              {category === "chest" && (
                <g id="chest-group">
                  {/* Pectoralis Major - Clavicular Head (Upper) */}
                  <g
                    onClick={() => onSelectMuscle("pec-major-clavicular")}
                    onMouseEnter={() => setHoveredPart("pec-major-clavicular")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Left & Right upper chest petals */}
                    <path
                      d="M 197 108 C 165 106 135 118 102 135 C 108 152 120 162 145 160 C 170 156 195 138 197 108 Z"
                      fill={getFill("pec-major-clavicular")}
                      stroke={getStroke("pec-major-clavicular")}
                      strokeWidth={isSelected("pec-major-clavicular") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-clavicular")}
                    />
                    <path
                      d="M 203 108 C 235 106 265 118 298 135 C 292 152 280 162 255 160 C 230 156 205 138 203 108 Z"
                      fill={getFill("pec-major-clavicular")}
                      stroke={getStroke("pec-major-clavicular")}
                      strokeWidth={isSelected("pec-major-clavicular") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-clavicular")}
                    />
                    <text x="75" y="125" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("pec-major-clavicular") ? "1" : "0.7"}>
                      Clavicular Head (Upper)
                    </text>
                  </g>

                  {/* Pectoralis Major - Sternocostal Head (Mid) */}
                  <g
                    onClick={() => onSelectMuscle("pec-major-sternocostal")}
                    onMouseEnter={() => setHoveredPart("pec-major-sternocostal")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 197 114 C 195 142 170 160 145 163 C 120 165 108 154 102 138 C 98 165 105 188 120 200 C 150 202 185 188 197 165 Z"
                      fill={getFill("pec-major-sternocostal")}
                      stroke={getStroke("pec-major-sternocostal")}
                      strokeWidth={isSelected("pec-major-sternocostal") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-sternocostal")}
                    />
                    <path
                      d="M 203 114 C 205 142 230 160 255 163 C 280 165 292 154 298 138 C 302 165 295 188 280 200 C 250 202 215 188 203 165 Z"
                      fill={getFill("pec-major-sternocostal")}
                      stroke={getStroke("pec-major-sternocostal")}
                      strokeWidth={isSelected("pec-major-sternocostal") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-sternocostal")}
                    />
                    <text x="60" y="175" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("pec-major-sternocostal") ? "1" : "0.7"}>
                      Sternocostal (Mid)
                    </text>
                  </g>

                  {/* Pectoralis Major - Inferior Costal / Abdominal (Lower) */}
                  <g
                    onClick={() => onSelectMuscle("pec-major-costal")}
                    onMouseEnter={() => setHoveredPart("pec-major-costal")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 197 168 C 185 190 152 205 122 203 C 114 195 106 182 102 165 C 100 178 105 198 120 215 C 145 220 180 210 197 185 Z"
                      fill={getFill("pec-major-costal")}
                      stroke={getStroke("pec-major-costal")}
                      strokeWidth={isSelected("pec-major-costal") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-costal")}
                    />
                    <path
                      d="M 203 168 C 215 190 248 205 278 203 C 286 195 294 182 298 165 C 300 178 295 198 280 215 C 255 220 220 210 203 185 Z"
                      fill={getFill("pec-major-costal")}
                      stroke={getStroke("pec-major-costal")}
                      strokeWidth={isSelected("pec-major-costal") ? "2.5" : "1.5"}
                      filter={getFilter("pec-major-costal")}
                    />
                    <text x="65" y="222" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("pec-major-costal") ? "1" : "0.7"}>
                      Costal / Abdominal (Lower)
                    </text>
                  </g>

                  {/* Serratus Anterior (Ribs 1-8 finger slips) */}
                  <g
                    onClick={() => onSelectMuscle("serratus-anterior")}
                    onMouseEnter={() => setHoveredPart("serratus-anterior")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Left rib slips */}
                    <path d="M 98 190 C 85 198 75 212 90 220 L 110 212 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    <path d="M 95 218 C 82 226 72 238 88 246 L 108 238 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    <path d="M 92 245 C 80 252 70 262 86 270 L 105 262 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    
                    {/* Right rib slips */}
                    <path d="M 302 190 C 315 198 325 212 310 220 L 290 212 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    <path d="M 305 218 C 318 226 328 238 312 246 L 292 238 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    <path d="M 308 245 C 320 252 330 262 314 270 L 295 262 Z" fill={getFill("serratus-anterior")} stroke={getStroke("serratus-anterior")} strokeWidth="1.5" />
                    
                    <text x="315" y="240" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("serratus-anterior") ? "1" : "0.7"}>
                      Serratus Anterior
                    </text>
                  </g>

                  {/* Pectoralis Minor (Deep View) */}
                  <g
                    onClick={() => onSelectMuscle("pectoralis-minor")}
                    onMouseEnter={() => setHoveredPart("pectoralis-minor")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 125 130 L 155 175 L 140 182 L 118 135 Z"
                      fill={getFill("pectoralis-minor")}
                      stroke={getStroke("pectoralis-minor")}
                      strokeWidth={isSelected("pectoralis-minor") ? "2.5" : "1.2"}
                      strokeDasharray={isSelected("pectoralis-minor") ? undefined : "3 3"}
                      filter={getFilter("pectoralis-minor")}
                    />
                    <path
                      d="M 275 130 L 245 175 L 260 182 L 282 135 Z"
                      fill={getFill("pectoralis-minor")}
                      stroke={getStroke("pectoralis-minor")}
                      strokeWidth={isSelected("pectoralis-minor") ? "2.5" : "1.2"}
                      strokeDasharray={isSelected("pectoralis-minor") ? undefined : "3 3"}
                      filter={getFilter("pectoralis-minor")}
                    />
                    <text x="210" y="160" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("pectoralis-minor") ? "1" : "0.6"}>
                      Pec Minor (Deep)
                    </text>
                  </g>

                  {/* Subclavius (Deep beneath clavicle) */}
                  <g
                    onClick={() => onSelectMuscle("subclavius")}
                    onMouseEnter={() => setHoveredPart("subclavius")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 175 103 L 140 110 L 142 116 L 178 108 Z"
                      fill={getFill("subclavius")}
                      stroke={getStroke("subclavius")}
                      strokeWidth={isSelected("subclavius") ? "2.5" : "1.2"}
                    />
                    <path
                      d="M 225 103 L 260 110 L 258 116 L 222 108 Z"
                      fill={getFill("subclavius")}
                      stroke={getStroke("subclavius")}
                      strokeWidth={isSelected("subclavius") ? "2.5" : "1.2"}
                    />
                    <text x="220" y="95" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("subclavius") ? "1" : "0.6"}>
                      Subclavius
                    </text>
                  </g>
                </g>
              )}

              {/* ======================================================== */}
              {/* 2. BACK DIAGRAM PATHS                                    */}
              {/* ======================================================== */}
              {category === "back" && (
                <g id="back-group">
                  {/* Trapezius - Upper Fibres */}
                  <g
                    onClick={() => onSelectMuscle("trapezius-upper")}
                    onMouseEnter={() => setHoveredPart("trapezius-upper")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 200 68 L 182 102 L 125 118 L 145 135 L 200 120 Z"
                      fill={getFill("trapezius-upper")}
                      stroke={getStroke("trapezius-upper")}
                      strokeWidth={isSelected("trapezius-upper") ? "2.5" : "1.5"}
                      filter={getFilter("trapezius-upper")}
                    />
                    <path
                      d="M 200 68 L 218 102 L 275 118 L 255 135 L 200 120 Z"
                      fill={getFill("trapezius-upper")}
                      stroke={getStroke("trapezius-upper")}
                      strokeWidth={isSelected("trapezius-upper") ? "2.5" : "1.5"}
                      filter={getFilter("trapezius-upper")}
                    />
                    <text x="80" y="105" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("trapezius-upper") ? "1" : "0.7"}>
                      Upper Trapezius
                    </text>
                  </g>

                  {/* Trapezius - Middle & Lower Fibres */}
                  <g
                    onClick={() => onSelectMuscle("trapezius-mid-lower")}
                    onMouseEnter={() => setHoveredPart("trapezius-mid-lower")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 200 120 L 145 135 L 165 185 L 200 230 L 235 185 L 255 135 Z"
                      fill={getFill("trapezius-mid-lower")}
                      stroke={getStroke("trapezius-mid-lower")}
                      strokeWidth={isSelected("trapezius-mid-lower") ? "2.5" : "1.5"}
                      filter={getFilter("trapezius-mid-lower")}
                    />
                    <text x="210" y="160" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("trapezius-mid-lower") ? "1" : "0.7"}>
                      Mid / Lower Traps
                    </text>
                  </g>

                  {/* Rhomboid Major & Minor (Deep to Traps) */}
                  <g
                    onClick={() => onSelectMuscle("rhomboids")}
                    onMouseEnter={() => setHoveredPart("rhomboids")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 197 135 L 165 145 L 158 175 L 197 165 Z"
                      fill={getFill("rhomboids")}
                      stroke={getStroke("rhomboids")}
                      strokeWidth={isSelected("rhomboids") ? "2.5" : "1.2"}
                      strokeDasharray={isSelected("rhomboids") ? undefined : "3 3"}
                    />
                    <path
                      d="M 203 135 L 235 145 L 242 175 L 203 165 Z"
                      fill={getFill("rhomboids")}
                      stroke={getStroke("rhomboids")}
                      strokeWidth={isSelected("rhomboids") ? "2.5" : "1.2"}
                      strokeDasharray={isSelected("rhomboids") ? undefined : "3 3"}
                    />
                    <text x="65" y="155" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("rhomboids") ? "1" : "0.6"}>
                      Rhomboids (Deep)
                    </text>
                  </g>

                  {/* Latissimus Dorsi */}
                  <g
                    onClick={() => onSelectMuscle("latissimus-dorsi")}
                    onMouseEnter={() => setHoveredPart("latissimus-dorsi")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Left Lat wing */}
                    <path
                      d="M 115 165 C 105 185 110 225 125 270 C 150 295 185 305 198 308 L 198 220 L 165 185 Z"
                      fill={getFill("latissimus-dorsi")}
                      stroke={getStroke("latissimus-dorsi")}
                      strokeWidth={isSelected("latissimus-dorsi") ? "2.5" : "1.5"}
                      filter={getFilter("latissimus-dorsi")}
                    />
                    {/* Right Lat wing */}
                    <path
                      d="M 285 165 C 295 185 290 225 275 270 C 250 295 215 305 202 308 L 202 220 L 235 185 Z"
                      fill={getFill("latissimus-dorsi")}
                      stroke={getStroke("latissimus-dorsi")}
                      strokeWidth={isSelected("latissimus-dorsi") ? "2.5" : "1.5"}
                      filter={getFilter("latissimus-dorsi")}
                    />
                    <text x="60" y="240" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("latissimus-dorsi") ? "1" : "0.7"}>
                      Latissimus Dorsi (Lats)
                    </text>
                  </g>

                  {/* Teres Major */}
                  <g
                    onClick={() => onSelectMuscle("teres-major")}
                    onMouseEnter={() => setHoveredPart("teres-major")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 118 160 L 145 175 L 140 188 L 112 172 Z"
                      fill={getFill("teres-major")}
                      stroke={getStroke("teres-major")}
                      strokeWidth={isSelected("teres-major") ? "2.5" : "1.5"}
                      filter={getFilter("teres-major")}
                    />
                    <path
                      d="M 282 160 L 255 175 L 260 188 L 288 172 Z"
                      fill={getFill("teres-major")}
                      stroke={getStroke("teres-major")}
                      strokeWidth={isSelected("teres-major") ? "2.5" : "1.5"}
                      filter={getFilter("teres-major")}
                    />
                    <text x="295" y="165" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("teres-major") ? "1" : "0.7"}>
                      Teres Major
                    </text>
                  </g>

                  {/* Erector Spinae (Deep Spinal Columns) */}
                  <g
                    onClick={() => onSelectMuscle("erector-spinae")}
                    onMouseEnter={() => setHoveredPart("erector-spinae")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <rect
                      x="188"
                      y="180"
                      width="9"
                      height="170"
                      rx="4"
                      fill={getFill("erector-spinae")}
                      stroke={getStroke("erector-spinae")}
                      strokeWidth={isSelected("erector-spinae") ? "2.5" : "1.2"}
                      filter={getFilter("erector-spinae")}
                    />
                    <rect
                      x="203"
                      y="180"
                      width="9"
                      height="170"
                      rx="4"
                      fill={getFill("erector-spinae")}
                      stroke={getStroke("erector-spinae")}
                      strokeWidth={isSelected("erector-spinae") ? "2.5" : "1.2"}
                      filter={getFilter("erector-spinae")}
                    />
                    <text x="220" y="270" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("erector-spinae") ? "1" : "0.7"}>
                      Erector Spinae
                    </text>
                  </g>

                  {/* Deep Stabilizers (Multifidus & QL) */}
                  <g
                    onClick={() => onSelectMuscle("deep-stabilizers-back")}
                    onMouseEnter={() => setHoveredPart("deep-stabilizers-back")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 165 295 L 185 295 L 185 345 L 160 340 Z"
                      fill={getFill("deep-stabilizers-back")}
                      stroke={getStroke("deep-stabilizers-back")}
                      strokeWidth="1.2"
                    />
                    <path
                      d="M 235 295 L 215 295 L 215 345 L 240 340 Z"
                      fill={getFill("deep-stabilizers-back")}
                      stroke={getStroke("deep-stabilizers-back")}
                      strokeWidth="1.2"
                    />
                    <text x="65" y="325" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("deep-stabilizers-back") ? "1" : "0.6"}>
                      QL & Multifidus (Deep)
                    </text>
                  </g>
                </g>
              )}

              {/* ======================================================== */}
              {/* 3. SHOULDERS DIAGRAM PATHS                               */}
              {/* ======================================================== */}
              {category === "shoulders" && (
                <g id="shoulders-group">
                  {/* Anterior Deltoid (Front) */}
                  <g
                    onClick={() => onSelectMuscle("anterior-deltoid")}
                    onMouseEnter={() => setHoveredPart("anterior-deltoid")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 125 118 C 110 120 95 130 90 148 C 95 170 105 185 118 195 C 122 175 125 145 125 118 Z"
                      fill={getFill("anterior-deltoid")}
                      stroke={getStroke("anterior-deltoid")}
                      strokeWidth={isSelected("anterior-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("anterior-deltoid")}
                    />
                    <path
                      d="M 275 118 C 290 120 305 130 310 148 C 305 170 295 185 282 195 C 278 175 275 145 275 118 Z"
                      fill={getFill("anterior-deltoid")}
                      stroke={getStroke("anterior-deltoid")}
                      strokeWidth={isSelected("anterior-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("anterior-deltoid")}
                    />
                    <text x="290" y="130" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("anterior-deltoid") ? "1" : "0.7"}>
                      Anterior Deltoid (Front)
                    </text>
                  </g>

                  {/* Lateral / Middle Deltoid (Side Cap) */}
                  <g
                    onClick={() => onSelectMuscle("lateral-deltoid")}
                    onMouseEnter={() => setHoveredPart("lateral-deltoid")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 90 125 C 72 135 65 158 70 182 C 78 200 95 210 115 212 C 105 195 95 168 90 125 Z"
                      fill={getFill("lateral-deltoid")}
                      stroke={getStroke("lateral-deltoid")}
                      strokeWidth={isSelected("lateral-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("lateral-deltoid")}
                    />
                    <path
                      d="M 310 125 C 328 135 335 158 330 182 C 322 200 305 210 285 212 C 295 195 305 168 310 125 Z"
                      fill={getFill("lateral-deltoid")}
                      stroke={getStroke("lateral-deltoid")}
                      strokeWidth={isSelected("lateral-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("lateral-deltoid")}
                    />
                    <text x="35" y="160" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("lateral-deltoid") ? "1" : "0.7"}>
                      Lateral Deltoid (Side)
                    </text>
                  </g>

                  {/* Posterior Deltoid (Rear Delt) */}
                  <g
                    onClick={() => onSelectMuscle("posterior-deltoid")}
                    onMouseEnter={() => setHoveredPart("posterior-deltoid")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 105 118 C 95 125 82 142 85 165 C 92 180 102 188 112 185 C 112 165 110 140 105 118 Z"
                      fill={getFill("posterior-deltoid")}
                      stroke={getStroke("posterior-deltoid")}
                      strokeWidth={isSelected("posterior-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("posterior-deltoid")}
                    />
                    <path
                      d="M 295 118 C 305 125 318 142 315 165 C 308 180 298 188 288 185 C 288 165 290 140 295 118 Z"
                      fill={getFill("posterior-deltoid")}
                      stroke={getStroke("posterior-deltoid")}
                      strokeWidth={isSelected("posterior-deltoid") ? "2.5" : "1.5"}
                      filter={getFilter("posterior-deltoid")}
                    />
                    <text x="40" y="200" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("posterior-deltoid") ? "1" : "0.7"}>
                      Posterior Deltoid (Rear)
                    </text>
                  </g>

                  {/* Rotator Cuff (SITS: Deep Stabilizers) */}
                  <g
                    onClick={() => onSelectMuscle("rotator-cuff")}
                    onMouseEnter={() => setHoveredPart("rotator-cuff")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Supraspinatus & Infraspinatus capsule */}
                    <circle cx="118" cy="148" r="14" fill={getFill("rotator-cuff")} stroke={getStroke("rotator-cuff")} strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="282" cy="148" r="14" fill={getFill("rotator-cuff")} stroke={getStroke("rotator-cuff")} strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="145" y="145" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("rotator-cuff") ? "1" : "0.7"}>
                      Rotator Cuff (SITS Deep)
                    </text>
                  </g>
                </g>
              )}

              {/* ======================================================== */}
              {/* 4. ARMS DIAGRAM PATHS                                    */}
              {/* ======================================================== */}
              {category === "arms" && (
                <g id="arms-group">
                  {/* Biceps Brachii (Long & Short Heads) */}
                  <g
                    onClick={() => onSelectMuscle("biceps-brachii")}
                    onMouseEnter={() => setHoveredPart("biceps-brachii")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 112 188 C 100 205 98 238 108 260 C 122 258 128 235 125 205 Z"
                      fill={getFill("biceps-brachii")}
                      stroke={getStroke("biceps-brachii")}
                      strokeWidth={isSelected("biceps-brachii") ? "2.5" : "1.5"}
                      filter={getFilter("biceps-brachii")}
                    />
                    <path
                      d="M 288 188 C 300 205 302 238 292 260 C 278 258 272 235 275 205 Z"
                      fill={getFill("biceps-brachii")}
                      stroke={getStroke("biceps-brachii")}
                      strokeWidth={isSelected("biceps-brachii") ? "2.5" : "1.5"}
                      filter={getFilter("biceps-brachii")}
                    />
                    <text x="25" y="215" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("biceps-brachii") ? "1" : "0.7"}>
                      Biceps Brachii
                    </text>
                  </g>

                  {/* Brachialis & Coracobrachialis (Deep / Lateral peak) */}
                  <g
                    onClick={() => onSelectMuscle("brachialis-coracobrachialis")}
                    onMouseEnter={() => setHoveredPart("brachialis-coracobrachialis")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 96 220 C 92 235 95 255 105 268 L 108 258 C 102 242 100 230 96 220 Z"
                      fill={getFill("brachialis-coracobrachialis")}
                      stroke={getStroke("brachialis-coracobrachialis")}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 304 220 C 308 235 305 255 295 268 L 292 258 C 298 242 300 230 304 220 Z"
                      fill={getFill("brachialis-coracobrachialis")}
                      stroke={getStroke("brachialis-coracobrachialis")}
                      strokeWidth="1.5"
                    />
                    <text x="25" y="245" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("brachialis-coracobrachialis") ? "1" : "0.7"}>
                      Brachialis (Deep)
                    </text>
                  </g>

                  {/* Triceps - Long Head */}
                  <g
                    onClick={() => onSelectMuscle("triceps-long-head")}
                    onMouseEnter={() => setHoveredPart("triceps-long-head")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 125 190 C 132 210 135 235 128 262 L 122 258 C 124 235 122 210 118 192 Z"
                      fill={getFill("triceps-long-head")}
                      stroke={getStroke("triceps-long-head")}
                      strokeWidth={isSelected("triceps-long-head") ? "2.5" : "1.5"}
                      filter={getFilter("triceps-long-head")}
                    />
                    <path
                      d="M 275 190 C 268 210 265 235 272 262 L 278 258 C 276 235 278 210 282 192 Z"
                      fill={getFill("triceps-long-head")}
                      stroke={getStroke("triceps-long-head")}
                      strokeWidth={isSelected("triceps-long-head") ? "2.5" : "1.5"}
                      filter={getFilter("triceps-long-head")}
                    />
                    <text x="300" y="215" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("triceps-long-head") ? "1" : "0.7"}>
                      Triceps (Long Head)
                    </text>
                  </g>

                  {/* Triceps - Lateral & Medial Heads */}
                  <g
                    onClick={() => onSelectMuscle("triceps-lateral-medial")}
                    onMouseEnter={() => setHoveredPart("triceps-lateral-medial")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 88 185 C 80 205 82 235 94 258 L 102 248 C 95 230 92 205 96 190 Z"
                      fill={getFill("triceps-lateral-medial")}
                      stroke={getStroke("triceps-lateral-medial")}
                      strokeWidth={isSelected("triceps-lateral-medial") ? "2.5" : "1.5"}
                      filter={getFilter("triceps-lateral-medial")}
                    />
                    <path
                      d="M 312 185 C 320 205 318 235 306 258 L 298 248 C 305 230 308 205 304 190 Z"
                      fill={getFill("triceps-lateral-medial")}
                      stroke={getStroke("triceps-lateral-medial")}
                      strokeWidth={isSelected("triceps-lateral-medial") ? "2.5" : "1.5"}
                      filter={getFilter("triceps-lateral-medial")}
                    />
                    <text x="300" y="240" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("triceps-lateral-medial") ? "1" : "0.7"}>
                      Triceps (Lateral Horseshoe)
                    </text>
                  </g>

                  {/* Forearms - Brachioradialis */}
                  <g
                    onClick={() => onSelectMuscle("forearms-brachioradialis")}
                    onMouseEnter={() => setHoveredPart("forearms-brachioradialis")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 94 260 C 85 285 92 315 102 345 L 110 342 C 104 315 100 288 108 262 Z"
                      fill={getFill("forearms-brachioradialis")}
                      stroke={getStroke("forearms-brachioradialis")}
                      strokeWidth={isSelected("forearms-brachioradialis") ? "2.5" : "1.5"}
                      filter={getFilter("forearms-brachioradialis")}
                    />
                    <path
                      d="M 306 260 C 315 285 308 315 298 345 L 290 342 C 296 315 300 288 292 262 Z"
                      fill={getFill("forearms-brachioradialis")}
                      stroke={getStroke("forearms-brachioradialis")}
                      strokeWidth={isSelected("forearms-brachioradialis") ? "2.5" : "1.5"}
                      filter={getFilter("forearms-brachioradialis")}
                    />
                    <text x="25" y="300" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("forearms-brachioradialis") ? "1" : "0.7"}>
                      Brachioradialis
                    </text>
                  </g>

                  {/* Forearms - Flexors & Extensors */}
                  <g
                    onClick={() => onSelectMuscle("forearms-flexors")}
                    onMouseEnter={() => setHoveredPart("forearms-flexors")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 108 265 C 112 290 115 320 115 348 L 122 346 C 124 318 122 290 118 268 Z"
                      fill={getFill("forearms-flexors")}
                      stroke={getStroke("forearms-flexors")}
                      strokeWidth={isSelected("forearms-flexors") ? "2.5" : "1.5"}
                    />
                    <path
                      d="M 292 265 C 288 290 285 320 285 348 L 278 346 C 276 318 278 290 282 268 Z"
                      fill={getFill("forearms-flexors")}
                      stroke={getStroke("forearms-flexors")}
                      strokeWidth={isSelected("forearms-flexors") ? "2.5" : "1.5"}
                    />
                    <text x="290" y="315" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("forearms-flexors") ? "1" : "0.7"}>
                      Wrist Flexors / Extensors
                    </text>
                  </g>
                </g>
              )}

              {/* ======================================================== */}
              {/* 5. LEGS DIAGRAM PATHS                                    */}
              {/* ======================================================== */}
              {category === "legs" && (
                <g id="legs-group">
                  {/* Gluteus Maximus & Medius */}
                  <g
                    onClick={() => onSelectMuscle("gluteus-maximus")}
                    onMouseEnter={() => setHoveredPart("gluteus-maximus")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <ellipse cx="160" cy="85" rx="32" ry="38" fill={getFill("gluteus-maximus")} stroke={getStroke("gluteus-maximus")} strokeWidth="2" filter={getFilter("gluteus-maximus")} />
                    <ellipse cx="240" cy="85" rx="32" ry="38" fill={getFill("gluteus-maximus")} stroke={getStroke("gluteus-maximus")} strokeWidth="2" filter={getFilter("gluteus-maximus")} />
                    <text x="60" y="80" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("gluteus-maximus") ? "1" : "0.7"}>
                      Gluteus Maximus
                    </text>
                  </g>

                  {/* Gluteus Medius / Minimus (Side Hip) */}
                  <g
                    onClick={() => onSelectMuscle("gluteus-medius-minimus")}
                    onMouseEnter={() => setHoveredPart("gluteus-medius-minimus")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path d="M 125 55 C 135 60 145 70 142 85 C 128 85 120 75 120 60 Z" fill={getFill("gluteus-medius-minimus")} stroke={getStroke("gluteus-medius-minimus")} strokeWidth="1.5" />
                    <path d="M 275 55 C 265 60 255 70 258 85 C 272 85 280 75 280 60 Z" fill={getFill("gluteus-medius-minimus")} stroke={getStroke("gluteus-medius-minimus")} strokeWidth="1.5" />
                    <text x="270" y="65" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("gluteus-medius-minimus") ? "1" : "0.7"}>
                      Glute Medius
                    </text>
                  </g>

                  {/* Quadriceps - Rectus Femoris (Central Front Thigh) */}
                  <g
                    onClick={() => onSelectMuscle("quadriceps-rectus-femoris")}
                    onMouseEnter={() => setHoveredPart("quadriceps-rectus-femoris")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 152 105 C 145 130 148 180 152 215 C 160 215 168 180 168 105 Z"
                      fill={getFill("quadriceps-rectus-femoris")}
                      stroke={getStroke("quadriceps-rectus-femoris")}
                      strokeWidth={isSelected("quadriceps-rectus-femoris") ? "2.5" : "1.5"}
                      filter={getFilter("quadriceps-rectus-femoris")}
                    />
                    <path
                      d="M 248 105 C 255 130 252 180 248 215 C 240 215 232 180 232 105 Z"
                      fill={getFill("quadriceps-rectus-femoris")}
                      stroke={getStroke("quadriceps-rectus-femoris")}
                      strokeWidth={isSelected("quadriceps-rectus-femoris") ? "2.5" : "1.5"}
                      filter={getFilter("quadriceps-rectus-femoris")}
                    />
                    <text x="70" y="160" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("quadriceps-rectus-femoris") ? "1" : "0.7"}>
                      Rectus Femoris (Central)
                    </text>
                  </g>

                  {/* Quadriceps - Vastus Lateralis & Medialis (Sweep & Teardrop) */}
                  <g
                    onClick={() => onSelectMuscle("quadriceps-vasti")}
                    onMouseEnter={() => setHoveredPart("quadriceps-vasti")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Lateral sweep */}
                    <path
                      d="M 125 105 C 118 135 125 185 145 220 L 152 215 C 148 180 145 130 152 105 Z"
                      fill={getFill("quadriceps-vasti")}
                      stroke={getStroke("quadriceps-vasti")}
                      strokeWidth={isSelected("quadriceps-vasti") ? "2.5" : "1.5"}
                      filter={getFilter("quadriceps-vasti")}
                    />
                    <path
                      d="M 275 105 C 282 135 275 185 255 220 L 248 215 C 252 180 255 130 248 105 Z"
                      fill={getFill("quadriceps-vasti")}
                      stroke={getStroke("quadriceps-vasti")}
                      strokeWidth={isSelected("quadriceps-vasti") ? "2.5" : "1.5"}
                      filter={getFilter("quadriceps-vasti")}
                    />
                    {/* Medialis teardrop */}
                    <ellipse cx="170" cy="210" rx="9" ry="14" fill={getFill("quadriceps-vasti")} stroke={getStroke("quadriceps-vasti")} strokeWidth="1.5" />
                    <ellipse cx="230" cy="210" rx="9" ry="14" fill={getFill("quadriceps-vasti")} stroke={getStroke("quadriceps-vasti")} strokeWidth="1.5" />
                    <text x="270" y="145" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("quadriceps-vasti") ? "1" : "0.7"}>
                      Vasti (Sweep & VMO)
                    </text>
                  </g>

                  {/* Hamstrings Complex (Posterior Thigh) */}
                  <g
                    onClick={() => onSelectMuscle("hamstrings-complex")}
                    onMouseEnter={() => setHoveredPart("hamstrings-complex")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path
                      d="M 142 110 C 135 140 138 185 142 225 L 165 225 C 170 185 168 140 165 110 Z"
                      fill={getFill("hamstrings-complex")}
                      stroke={getStroke("hamstrings-complex")}
                      strokeWidth={isSelected("hamstrings-complex") ? "2.5" : "1.5"}
                      strokeDasharray="4 3"
                    />
                    <path
                      d="M 258 110 C 265 140 262 185 258 225 L 235 225 C 230 185 232 140 235 110 Z"
                      fill={getFill("hamstrings-complex")}
                      stroke={getStroke("hamstrings-complex")}
                      strokeWidth={isSelected("hamstrings-complex") ? "2.5" : "1.5"}
                      strokeDasharray="4 3"
                    />
                    <text x="65" y="195" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("hamstrings-complex") ? "1" : "0.6"}>
                      Hamstrings (Posterior)
                    </text>
                  </g>

                  {/* Hip Adductors (Inner Thigh) */}
                  <g
                    onClick={() => onSelectMuscle("adductors-complex")}
                    onMouseEnter={() => setHoveredPart("adductors-complex")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <path d="M 172 112 C 175 140 178 175 174 200 L 180 195 C 185 170 188 135 186 112 Z" fill={getFill("adductors-complex")} stroke={getStroke("adductors-complex")} strokeWidth="1.5" />
                    <path d="M 228 112 C 225 140 222 175 226 200 L 220 195 C 215 170 212 135 214 112 Z" fill={getFill("adductors-complex")} stroke={getStroke("adductors-complex")} strokeWidth="1.5" />
                    <text x="175" y="145" fill="#22d3ee" fontSize="8" fontWeight="bold" opacity={isSelected("adductors-complex") ? "1" : "0.7"}>
                      Adductors
                    </text>
                  </g>

                  {/* Calves - Gastrocnemius & Soleus */}
                  <g
                    onClick={() => onSelectMuscle("calves-complex")}
                    onMouseEnter={() => setHoveredPart("calves-complex")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <ellipse cx="152" cy="285" rx="18" ry="38" fill={getFill("calves-complex")} stroke={getStroke("calves-complex")} strokeWidth={isSelected("calves-complex") ? "2.5" : "1.5"} filter={getFilter("calves-complex")} />
                    <ellipse cx="248" cy="285" rx="18" ry="38" fill={getFill("calves-complex")} stroke={getStroke("calves-complex")} strokeWidth={isSelected("calves-complex") ? "2.5" : "1.5"} filter={getFilter("calves-complex")} />
                    <text x="60" y="290" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("calves-complex") ? "1" : "0.7"}>
                      Gastrocnemius & Soleus
                    </text>
                  </g>

                  {/* Tibialis Anterior & Shins */}
                  <g
                    onClick={() => onSelectMuscle("lower-leg-tibialis-fibularis")}
                    onMouseEnter={() => setHoveredPart("lower-leg-tibialis-fibularis")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <rect x="144" y="270" width="8" height="95" rx="4" fill={getFill("lower-leg-tibialis-fibularis")} stroke={getStroke("lower-leg-tibialis-fibularis")} strokeWidth="1.5" />
                    <rect x="248" y="270" width="8" height="95" rx="4" fill={getFill("lower-leg-tibialis-fibularis")} stroke={getStroke("lower-leg-tibialis-fibularis")} strokeWidth="1.5" />
                    <text x="270" y="325" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("lower-leg-tibialis-fibularis") ? "1" : "0.7"}>
                      Tibialis Anterior
                    </text>
                  </g>
                </g>
              )}

              {/* ======================================================== */}
              {/* 6. CORE DIAGRAM PATHS                                    */}
              {/* ======================================================== */}
              {category === "core" && (
                <g id="core-group">
                  {/* Rectus Abdominis (Six Pack Segments) */}
                  <g
                    onClick={() => onSelectMuscle("rectus-abdominis")}
                    onMouseEnter={() => setHoveredPart("rectus-abdominis")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Top Pair */}
                    <rect x="175" y="145" width="22" height="30" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />
                    <rect x="203" y="145" width="22" height="30" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />

                    {/* Middle Pair */}
                    <rect x="175" y="180" width="22" height="32" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />
                    <rect x="203" y="180" width="22" height="32" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />

                    {/* Lower Pair */}
                    <rect x="175" y="217" width="22" height="36" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />
                    <rect x="203" y="217" width="22" height="36" rx="4" fill={getFill("rectus-abdominis")} stroke={getStroke("rectus-abdominis")} strokeWidth={isSelected("rectus-abdominis") ? "2.5" : "1.5"} filter={getFilter("rectus-abdominis")} />

                    <text x="60" y="195" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("rectus-abdominis") ? "1" : "0.7"}>
                      Rectus Abdominis (6-Pack)
                    </text>
                  </g>

                  {/* Obliques (External & Internal) */}
                  <g
                    onClick={() => onSelectMuscle("obliques-external-internal")}
                    onMouseEnter={() => setHoveredPart("obliques-external-internal")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Left Obliques flank */}
                    <path
                      d="M 172 150 C 145 160 135 190 140 240 C 150 250 168 255 172 255 L 172 215 L 172 150 Z"
                      fill={getFill("obliques-external-internal")}
                      stroke={getStroke("obliques-external-internal")}
                      strokeWidth={isSelected("obliques-external-internal") ? "2.5" : "1.5"}
                      filter={getFilter("obliques-external-internal")}
                    />
                    {/* Right Obliques flank */}
                    <path
                      d="M 228 150 C 255 160 265 190 260 240 C 250 250 232 255 228 255 L 228 215 L 228 150 Z"
                      fill={getFill("obliques-external-internal")}
                      stroke={getStroke("obliques-external-internal")}
                      strokeWidth={isSelected("obliques-external-internal") ? "2.5" : "1.5"}
                      filter={getFilter("obliques-external-internal")}
                    />
                    <text x="270" y="200" fill="#22d3ee" fontSize="10" fontWeight="bold" opacity={isSelected("obliques-external-internal") ? "1" : "0.7"}>
                      External & Internal Obliques
                    </text>
                  </g>

                  {/* Transversus Abdominis (TVA / Deep Inner Belt) */}
                  <g
                    onClick={() => onSelectMuscle("transversus-abdominis")}
                    onMouseEnter={() => setHoveredPart("transversus-abdominis")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    <rect
                      x="142"
                      y="215"
                      width="116"
                      height="38"
                      rx="6"
                      fill={getFill("transversus-abdominis")}
                      stroke={getStroke("transversus-abdominis")}
                      strokeWidth={isSelected("transversus-abdominis") ? "2.5" : "1.2"}
                      strokeDasharray="4 3"
                    />
                    <text x="50" y="235" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("transversus-abdominis") ? "1" : "0.7"}>
                      TVA (Deep Belt)
                    </text>
                  </g>

                  {/* Deep Stabilizers (Diaphragm & Pelvic Floor) */}
                  <g
                    onClick={() => onSelectMuscle("deep-core-stabilizers")}
                    onMouseEnter={() => setHoveredPart("deep-core-stabilizers")}
                    onMouseLeave={() => setHoveredPart(null)}
                    className="transition-all duration-200"
                  >
                    {/* Diaphragmatic roof */}
                    <path
                      d="M 145 138 C 175 125 225 125 255 138"
                      fill="none"
                      stroke={getStroke("deep-core-stabilizers")}
                      strokeWidth={isSelected("deep-core-stabilizers") ? "3" : "1.5"}
                      strokeDasharray="3 3"
                    />
                    {/* Pelvic floor base */}
                    <path
                      d="M 160 268 C 185 278 215 278 240 268"
                      fill="none"
                      stroke={getStroke("deep-core-stabilizers")}
                      strokeWidth={isSelected("deep-core-stabilizers") ? "3" : "1.5"}
                      strokeDasharray="3 3"
                    />
                    <text x="135" y="125" fill="#22d3ee" fontSize="9" fontWeight="bold" opacity={isSelected("deep-core-stabilizers") ? "1" : "0.7"}>
                      Diaphragm (Roof) & Pelvic Basin
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>
        )}
      </div>

      {/* Interactive Helper Footer */}
      <div className="w-full mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-foreground/60">
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-primary" />
          <span>Click any muscle region above or use selector tabs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-primary border border-cyan-400"></span>
          <span className="text-[11px] text-primary font-medium">Selected Muscle</span>
        </div>
      </div>
    </div>
  );
}
