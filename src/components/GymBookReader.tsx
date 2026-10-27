/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Maximize2, 
  Minimize2, 
  List, 
  X, 
  ArrowLeft,
  Share2,
  Sparkles
} from "lucide-react";
import { GYM_BOOK_SPREADS, BookPage, BookSpread } from "@/data/gymBookData";

interface GymBookReaderProps {
  onClose?: () => void;
  isStandalonePage?: boolean;
}

export default function GymBookReader({ onClose, isStandalonePage = false }: GymBookReaderProps) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<"spread" | "single">("spread");
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSpreads = GYM_BOOK_SPREADS.length;
  const currentSpread: BookSpread = GYM_BOOK_SPREADS[currentSpreadIndex];

  const nextSpread = useCallback(() => {
    setCurrentSpreadIndex((prev) => (prev < totalSpreads - 1 ? prev + 1 : prev));
  }, [totalSpreads]);

  const prevSpread = useCallback(() => {
    setCurrentSpreadIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        nextSpread();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSpread();
      } else if (e.key === "Escape") {
        if (isTocOpen) setIsTocOpen(false);
        else if (onClose) onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTocOpen, onClose, nextSpread, prevSpread]);

  const jumpToSpread = (index: number) => {
    setCurrentSpreadIndex(index);
    setIsTocOpen(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#0d0f12]/95 backdrop-blur-md flex flex-col select-none overflow-hidden text-neutral-900"
    >
      {/* Top Navigation Bar */}
      <header className="h-14 px-4 sm:px-6 bg-[#121418] border-b border-white/10 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-3">
          {isStandalonePage ? (
            <Link 
              href="/" 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-sm text-foreground/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </Link>
          ) : (
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-sm text-foreground/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Exit Reader</span>
            </button>
          )}

          <div className="h-5 w-px bg-white/10 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-primary/20 text-primary rounded-md">
              <BookOpen size={16} />
            </span>
            <span className="font-bold tracking-wider text-sm sm:text-base hidden sm:inline glow-text">
              FORMIQ CHRONICLES OF IRON
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-mono">
              Spread {currentSpreadIndex + 1} / {totalSpreads}
            </span>
          </div>
        </div>

        {/* Reader Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Table of Contents Button */}
          <button 
            onClick={() => setIsTocOpen(!isTocOpen)} 
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5"
            title="Table of Contents"
          >
            <List size={16} />
            <span className="hidden md:inline">Chapters</span>
          </button>

          {/* Spread vs Single Toggle */}
          <button 
            onClick={() => setViewMode(viewMode === "spread" ? "single" : "spread")}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors hidden lg:flex items-center gap-1.5"
            title="Toggle View Mode"
          >
            <span>{viewMode === "spread" ? "📖 Two-Page" : "📄 Single"}</span>
          </button>

          {/* Fullscreen Button */}
          <button 
            onClick={toggleFullscreen} 
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-foreground/70 hover:text-white"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          {/* Close X */}
          {onClose && (
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-red-500/20 text-foreground/70 hover:text-red-400 rounded-lg transition-colors ml-1"
              title="Close Reader"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </header>

      {/* Main Book Reader Canvas */}
      <main className="flex-1 overflow-y-auto lg:overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center relative">
        
        {/* Navigation Arrow: Previous */}
        <button 
          onClick={prevSpread}
          disabled={currentSpreadIndex === 0}
          className="absolute left-2 sm:left-4 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 shadow-2xl"
          title="Previous Spread (Left Arrow)"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Book Container with Realistic Depth and Center Fold */}
        <div className="w-full max-w-7xl h-full max-h-[880px] bg-[#fbf9f4] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_20px_rgba(0,0,0,0.3)] border border-[#e5dfd3] flex flex-col lg:flex-row relative overflow-hidden transition-all duration-300">
          
          {/* Central Book Spine Fold Effect (Desktop) */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-20 bg-gradient-to-r from-black/[0.12] via-black/[0.22] to-black/[0.12] shadow-inner" />
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-black/25 pointer-events-none z-20" />

          {/* Left Page (or Top on mobile) */}
          <div className={`w-full ${viewMode === "spread" ? "lg:w-1/2" : "w-full"} h-full overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-between bg-[#faf8f4] border-b lg:border-b-0 lg:border-r border-[#e5dfd3]/80`}>
            {/* Subtle paper grain & left margin gradient */}
            <div className="absolute inset-y-0 right-0 w-8 pointer-events-none bg-gradient-to-l from-black/[0.04] to-transparent hidden lg:block" />
            <PageRenderer page={currentSpread.leftPage} isLeft={true} />
          </div>

          {/* Right Page (or Bottom on mobile) */}
          {viewMode === "spread" && (
            <div className="w-full lg:w-1/2 h-full overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-between bg-[#fbf9f5]">
              {/* Subtle paper grain & right margin gradient */}
              <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-black/[0.04] to-transparent hidden lg:block" />
              <PageRenderer page={currentSpread.rightPage} isLeft={false} />
            </div>
          )}
        </div>

        {/* Navigation Arrow: Next */}
        <button 
          onClick={nextSpread}
          disabled={currentSpreadIndex === totalSpreads - 1}
          className="absolute right-2 sm:right-4 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 shadow-2xl"
          title="Next Spread (Right Arrow)"
        >
          <ChevronRight size={28} />
        </button>
      </main>

      {/* Bottom Progress Bar & Scrubbing Slider */}
      <footer className="h-14 px-4 sm:px-8 bg-[#121418] border-t border-white/10 flex items-center justify-between text-white shrink-0">
        <div className="text-xs text-foreground/60 hidden sm:flex items-center gap-2">
          <span>{currentSpread.leftPage.chapter}</span>
          <span>•</span>
          <span className="font-semibold text-white/90">{currentSpread.leftPage.title}</span>
        </div>

        {/* Interactive Spread Slider */}
        <div className="flex-1 max-w-md mx-4 flex items-center gap-3">
          <span className="text-xs font-mono text-white/60">P. {currentSpread.leftPage.pageNumber}</span>
          <input 
            type="range" 
            min={0} 
            max={totalSpreads - 1} 
            value={currentSpreadIndex}
            onChange={(e) => setCurrentSpreadIndex(parseInt(e.target.value))}
            className="w-full accent-primary h-1.5 bg-white/20 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-white/60">P. {currentSpread.rightPage.pageNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={prevSpread} 
            disabled={currentSpreadIndex === 0}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-xs font-medium disabled:opacity-30 transition-colors"
          >
            Prev
          </button>
          <button 
            onClick={nextSpread} 
            disabled={currentSpreadIndex === totalSpreads - 1}
            className="px-3 py-1 bg-primary text-white hover:bg-primary/90 rounded-md text-xs font-bold disabled:opacity-30 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.4)]"
          >
            Next
          </button>
        </div>
      </footer>

      {/* Table of Contents Drawer Modal */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#181a20] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl text-white">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/20 text-primary rounded-xl">
                  <List size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chronicle Chapter Index</h3>
                  <p className="text-xs text-foreground/50">Select any spread to jump instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsTocOpen(false)}
                className="p-2 text-foreground/40 hover:text-white rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {GYM_BOOK_SPREADS.map((spread, idx) => (
                <div 
                  key={spread.spreadIndex}
                  onClick={() => jumpToSpread(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between group ${
                    currentSpreadIndex === idx
                      ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 text-foreground/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center font-mono text-sm font-bold text-primary group-hover:scale-105 transition-transform">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-mono text-primary font-semibold">
                        {spread.leftPage.chapter}
                      </span>
                      <h4 className="font-bold text-base text-white group-hover:text-primary transition-colors">
                        {spread.leftPage.title} &amp; {spread.rightPage.title}
                      </h4>
                      <p className="text-xs text-foreground/50 truncate max-w-md">
                        {spread.leftPage.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-foreground/40 shrink-0">
                    P. {spread.leftPage.pageNumber}-{spread.rightPage.pageNumber}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponent: Renders individual page with editorial magazine typography
function PageRenderer({ page, isLeft }: { page: BookPage; isLeft: boolean }) {
  return (
    <div className="h-full flex flex-col justify-between font-sans text-[#1a1a1a]">
      {/* Top Running Header */}
      <div className="flex items-center justify-between border-b border-[#ded7c8] pb-3 mb-6 text-xs text-[#716b5e] uppercase tracking-widest font-mono">
        <span>{page.chapter}</span>
        {page.badge && (
          <span className="px-2 py-0.5 bg-[#b84724] text-white rounded font-bold text-[10px] tracking-wider">
            {page.badge}
          </span>
        )}
        <span className="font-bold text-[#b84724]">PAGE {page.pageNumber}</span>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 space-y-6">
        {/* Title & Subtitle */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-[#141416] leading-[1.05] font-serif">
            {page.title}
          </h2>
          {page.subtitle && (
            <p className="text-sm sm:text-base font-medium text-[#b84724] mt-2 italic font-serif">
              {page.subtitle}
            </p>
          )}
        </div>

        {/* Narrative Paragraphs */}
        {page.paragraphs && page.paragraphs.length > 0 && (
          <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#2d2d30]">
            {page.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#b84724] first-letter:font-serif leading-relaxed" : ""}>
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Bold Terracotta Quote Callout Box (Matching reference image) */}
        {page.quote && (
          <div className="bg-[#b84724] text-white p-5 sm:p-6 rounded-xl shadow-lg my-4 relative overflow-hidden">
            <span className="text-5xl font-serif text-white/30 absolute -top-2 left-2 leading-none">“</span>
            <p className="font-serif italic text-base sm:text-lg leading-snug relative z-10 pl-4">
              {page.quote.text}
            </p>
            <div className="mt-3 pt-2 border-t border-white/20 text-right">
              <span className="font-bold text-xs uppercase tracking-wider block">{page.quote.author}</span>
              {page.quote.role && (
                <span className="text-[10px] text-white/80 italic">{page.quote.role}</span>
              )}
            </div>
          </div>
        )}

        {/* Numbered Sections (01, 02, 03 - matching reference image) */}
        {page.sections && page.sections.length > 0 && (
          <div className="space-y-4 pt-2">
            {page.sections.map((sec, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-[#f0eae0]/60 p-3.5 rounded-xl border border-[#ded7c8]">
                {sec.num && (
                  <span className="text-2xl font-black font-serif text-[#b84724] leading-none shrink-0 w-8">
                    {sec.num}
                  </span>
                )}
                <div>
                  <h4 className="font-bold text-sm text-[#141416] uppercase tracking-wide">
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#4a473f] mt-1 leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Stats Bar */}
        {page.keyStats && (
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#ded7c8]">
            {page.keyStats.map((st, idx) => (
              <div key={idx} className="text-center p-2 bg-[#f0eae0]/80 rounded-lg">
                <span className="block text-base sm:text-lg font-black text-[#b84724] font-serif">{st.value}</span>
                <span className="block text-[9px] uppercase tracking-wider text-[#716b5e] font-semibold">{st.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-6 mt-6 border-t border-[#ded7c8] flex items-center justify-between text-[11px] text-[#716b5e] font-mono">
        <span>FORMIQ • THE CHRONICLES OF IRON</span>
        <span className="font-bold text-[#b84724]">{isLeft ? `P. ${page.pageNumber}` : `PAGE ${page.pageNumber}`}</span>
      </div>
    </div>
  );
}
