"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { User, Globe, Shield, Database, LogOut, CheckCircle, Info } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const { language, setLanguage, userId, setUserId } = useStore();
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    if (userId) {
      navigator.clipboard.writeText(userId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to sign out of this profile?")) {
      setUserId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase glow-text">{t(language, 'settings')}</h1>
        <p className="text-foreground/60">Manage your profile, language preferences, and application settings.</p>
      </header>

      <div className="space-y-6">
        {/* Profile Card */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            <div className="p-3 bg-primary/20 text-primary rounded-xl">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold">User Profile</h2>
              <p className="text-xs text-foreground/50">Your FORMIQ tracking identity</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-foreground/60 uppercase">User ID / Username</label>
              <div className="mt-1 flex items-center gap-2 bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="font-mono text-sm text-primary truncate flex-1">{userId || "Not logged in"}</span>
                <button
                  onClick={handleCopyId}
                  className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground/60 uppercase">Assigned Email</label>
              <div className="mt-1 bg-black/40 p-3 rounded-xl border border-white/10 text-sm text-foreground/80 font-mono truncate">
                {userId ? (userId.includes('@') ? userId : `${userId}@formiq.app`) : "--"}
              </div>
            </div>
          </div>
        </div>

        {/* Language & Preferences */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            <div className="p-3 bg-accent/20 text-accent rounded-xl">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold">{t(language, 'language')} Preferences</h2>
              <p className="text-xs text-foreground/50">Choose your interface language</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => setLanguage('en')}
              className={`p-4 rounded-xl border text-left transition-all ${
                language === 'en'
                  ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-black/30 border-white/5 text-foreground/70 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-base">English</span>
                {language === 'en' && <CheckCircle size={18} className="text-primary" />}
              </div>
              <span className="text-xs text-foreground/50">Default system language</span>
            </button>

            <button
              onClick={() => setLanguage('hi')}
              className={`p-4 rounded-xl border text-left transition-all ${
                language === 'hi'
                  ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-black/30 border-white/5 text-foreground/70 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-base">हिंदी (Hindi)</span>
                {language === 'hi' && <CheckCircle size={18} className="text-primary" />}
              </div>
              <span className="text-xs text-foreground/50">हिंदी अनुवाद इंटरफ़ेस</span>
            </button>
          </div>
        </div>

        {/* Database & App Information */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
              <Database size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Storage & System</h2>
              <p className="text-xs text-foreground/50">Local data persistence status</p>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-sm text-foreground/70">
            <div className="flex items-center justify-between py-2 border-b border-white/5">
              <span>Database Provider</span>
              <span className="font-mono text-white">SQLite (dev.db via Prisma)</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/5">
              <span>Local Storage Sync</span>
              <span className="text-green-400 flex items-center gap-1">
                <CheckCircle size={14} /> Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/5">
              <span>App Version</span>
              <span className="font-mono text-white">FORMIQ v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-white">Session Management</h3>
            <p className="text-xs text-foreground/50">Switch to another tracking profile or log out</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl hover:bg-red-500/30 transition-colors flex items-center gap-2 text-sm font-semibold"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
