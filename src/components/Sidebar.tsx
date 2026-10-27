"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { 
  LayoutDashboard, 
  Dumbbell, 
  LineChart, 
  Target, 
  History, 
  PieChart, 
  HelpCircle, 
  Settings,
  BookOpen,
  Menu,
  X,
  BookHeart
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();
  const { language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t(language, 'dashboard'), path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Gym Chronicle (Book)", path: "/book", icon: <BookHeart size={20} /> },
    { name: t(language, 'tracker'), path: "/tracker", icon: <Dumbbell size={20} /> },
    { name: t(language, 'library'), path: "/library", icon: <BookOpen size={20} /> },
    { name: t(language, 'progress'), path: "/progress", icon: <LineChart size={20} /> },
    { name: t(language, 'goals'), path: "/goals", icon: <Target size={20} /> },
    { name: t(language, 'history'), path: "/history", icon: <History size={20} /> },
    { name: t(language, 'analytics'), path: "/analytics", icon: <PieChart size={20} /> },
    { name: t(language, 'help'), path: "/help", icon: <HelpCircle size={20} /> },
    { name: t(language, 'muscleScience'), path: "/science", icon: <BookHeart size={20} /> },
    { name: t(language, 'settings'), path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-card rounded-lg glow-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
      </button>

      {/* Sidebar */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 z-40 w-64 glass-panel transform transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Link 
          href="/book" 
          onClick={() => setIsOpen(false)}
          className="p-5 flex items-center gap-3.5 hover:bg-white/5 transition-all group border-b border-white/5"
          title="Click to Open the Gym Chronicle Book 📖"
        >
          <div className="relative shrink-0">
            <Image 
              src="/logo.jpg" 
              alt="FORMIQ Logo" 
              width={42} 
              height={42} 
              priority
              className="w-11 h-11 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] object-cover group-hover:scale-105 transition-transform" 
            />
            <span className="absolute -bottom-1 -right-1 text-[10px] bg-primary text-black font-bold px-1 rounded-full shadow">
              📖
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider glow-text group-hover:text-primary transition-colors flex items-center gap-1.5">
              FORMIQ
            </h1>
            <span className="text-[10px] text-primary/80 uppercase tracking-widest font-mono font-medium block">
              Gym Chronicle ↗
            </span>
          </div>
        </Link>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                  isActive 
                    ? "bg-primary/10 text-primary glow-border-subtle" 
                    : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                )}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="flex items-center justify-between bg-black/30 p-1 rounded-lg">
            <button
              onClick={() => setLanguage('en')}
              className={clsx(
                "flex-1 text-sm py-1.5 rounded-md transition-all text-center font-medium",
                language === 'en' ? "bg-primary text-white shadow-md" : "text-foreground/60 hover:text-foreground"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={clsx(
                "flex-1 text-sm py-1.5 rounded-md transition-all text-center font-medium",
                language === 'hi' ? "bg-primary text-white shadow-md" : "text-foreground/60 hover:text-foreground"
              )}
            >
              HI
            </button>
          </div>
          
          <button
            onClick={() => useStore.getState().setUserId(null)}
            className="w-full py-2 text-sm text-foreground/60 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
