"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { 
  Target, 
  Trophy, 
  Dumbbell, 
  Zap, 
  Plus, 
  Trash2, 
  X, 
  Check, 
  Sparkles, 
  Flame, 
  Calendar, 
  RefreshCw, 
  Award,
  ChevronRight,
  TrendingUp,
  Layers,
  CheckCircle2
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";

interface CustomGoal {
  id: string;
  title: string;
  type: string;
  target: number;
  currentProgress: number;
  deadline?: string | null;
  createdAt?: string;
}

const PRESET_TEMPLATES = [
  { title: "Bench Press 100 kg Club", type: "strength", target: 100, icon: "🏋️", desc: "Reach a 100 kg 1-rep max bench press" },
  { title: "Squat 140 kg Target", type: "strength", target: 140, icon: "🦵", desc: "Master deep heavy squats at 140 kg" },
  { title: "Deadlift 180 kg Milestone", type: "strength", target: 180, icon: "⚡", desc: "Power through 180 kg conventional deadlift" },
  { title: "10,000 kg Volume Titan", type: "volume", target: 10000, icon: "📦", desc: "Move 10 tons of cumulative iron volume" },
  { title: "100 Working Sets Milestone", type: "sets", target: 100, icon: "💪", desc: "Complete 100 high-effort working sets" },
  { title: "14-Day Consistency Streak", type: "consistency", target: 14, icon: "🔥", desc: "Train consistently for 14 active days" }
];

export default function Goals() {
  const { language } = useStore();
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [customGoals, setCustomGoals] = useState<CustomGoal[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Tab filter
  const [activeTab, setActiveTab] = useState<"all" | "in_progress" | "completed" | "milestones">("all");

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("workouts");
  const [modalTarget, setModalTarget] = useState("");
  const [modalProgress, setModalProgress] = useState("");
  const [modalDeadline, setModalDeadline] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchData = async () => {
    const { userId } = useStore.getState();
    try {
      const [workoutsRes, goalsRes] = await Promise.all([
        fetch('/api/workouts', { headers: { 'x-user-id': userId || '' } }),
        fetch('/api/goals', { headers: { 'x-user-id': userId || '' } })
      ]);

      if (workoutsRes.ok) {
        const wData = await workoutsRes.json();
        setWorkouts(Array.isArray(wData) ? wData : []);
      }
      if (goalsRes.ok) {
        const gData = await goalsRes.json();
        // Filter out any unwanted Workout Frequency goals completely
        const filtered = Array.isArray(gData) 
          ? gData.filter((g: any) => !g.title?.toLowerCase().includes('workout frequency') && g.type !== 'frequency')
          : [];
        setCustomGoals(filtered);
      }
    } catch (e) {
      console.error("Error fetching goals data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Compute stats from real workouts
  const stats = useMemo(() => {
    let totalExercises = 0;
    let totalSets = 0;
    let totalVolume = 0;

    workouts.forEach((w) => {
      totalExercises += w.exercises?.length || 0;
      (w.exercises || []).forEach((ex: any) => {
        (ex.sets || []).forEach((s: any) => {
          totalSets++;
          const reps = Number(s.reps) || 0;
          const weight = Number(s.weight) || 0;
          totalVolume += reps * weight;
        });
      });
    });

    return {
      totalWorkouts: workouts.length,
      totalExercises,
      totalSets,
      totalVolume: Math.round(totalVolume)
    };
  }, [workouts]);

  // Handle Preset selection
  const handleApplyPreset = (preset: typeof PRESET_TEMPLATES[0]) => {
    setModalTitle(preset.title);
    setModalType(preset.type);
    setModalTarget(preset.target.toString());
    
    // Auto-fill current progress if applicable
    if (preset.type === "workouts") setModalProgress(stats.totalWorkouts.toString());
    else if (preset.type === "sets") setModalProgress(stats.totalSets.toString());
    else if (preset.type === "volume") setModalProgress(stats.totalVolume.toString());
    else setModalProgress("0");

    setShowAddModal(true);
  };

  // Create Goal
  const handleCreateGoal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalTitle.trim() || !modalTarget) return;

    setSubmitting(true);
    const { userId } = useStore.getState();

    try {
      const res = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId || ''
        },
        body: JSON.stringify({
          title: modalTitle.trim(),
          type: modalType,
          target: parseFloat(modalTarget) || 10,
          currentProgress: parseFloat(modalProgress) || 0,
          deadline: modalDeadline || null
        })
      });

      if (res.ok) {
        setModalTitle("");
        setModalType("workouts");
        setModalTarget("");
        setModalProgress("");
        setModalDeadline("");
        setShowAddModal(false);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  // Quick adjust progress directly on card (+delta or -delta)
  const handleQuickAdjust = async (goal: CustomGoal, delta: number) => {
    const newProgress = Math.max(0, (goal.currentProgress || 0) + delta);
    setUpdatingId(goal.id);
    const { userId } = useStore.getState();

    // Optimistic UI update
    setCustomGoals((prev) =>
      prev.map((g) => (g.id === goal.id ? { ...g, currentProgress: newProgress } : g))
    );

    try {
      await fetch('/api/goals', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId || ''
        },
        body: JSON.stringify({
          id: goal.id,
          currentProgress: newProgress
        })
      });
    } catch (e) {
      console.error(e);
      fetchData(); // Rollback on error
    } finally {
      setUpdatingId(null);
    }
  };

  // Auto-sync a goal with real database tracker numbers
  const handleSyncGoal = async (goal: CustomGoal) => {
    let syncedValue = goal.currentProgress;
    if (goal.type === "workouts" || goal.title.toLowerCase().includes("workout")) {
      syncedValue = stats.totalWorkouts;
    } else if (goal.type === "sets" || goal.title.toLowerCase().includes("set")) {
      syncedValue = stats.totalSets;
    } else if (goal.type === "volume" || goal.title.toLowerCase().includes("volume")) {
      syncedValue = stats.totalVolume;
    }

    if (syncedValue !== goal.currentProgress) {
      await handleQuickAdjust(goal, syncedValue - goal.currentProgress);
    }
  };

  // Delete Goal instantly (no blocking popup for mobile compatibility)
  const handleDeleteGoal = async (id: string) => {
    // Optimistic UI removal
    setCustomGoals((prev) => prev.filter((g) => g.id !== id));
    const { userId } = useStore.getState();
    try {
      await fetch(`/api/goals?id=${id}`, {
        method: 'DELETE',
        headers: { 'x-user-id': userId || '' }
      });
    } catch (e) {
      console.error("Error deleting goal:", e);
      fetchData(); // Rollback on failure
    }
  };

  // Clear All Custom Targets
  const handleClearAllGoals = async () => {
    if (customGoals.length === 0) return;
    const goalsToDelete = [...customGoals];
    setCustomGoals([]);
    const { userId } = useStore.getState();
    try {
      await Promise.all(
        goalsToDelete.map((g) =>
          fetch(`/api/goals?id=${g.id}`, {
            method: 'DELETE',
            headers: { 'x-user-id': userId || '' }
          })
        )
      );
    } catch (e) {
      console.error("Error clearing goals:", e);
      fetchData();
    }
  };

  // Tiered Milestone Achievements (Auto-calculated from Tracker)
  const milestones = [
    {
      tier: "Bronze",
      badgeColor: "from-amber-700 to-amber-900 border-amber-600/50 text-amber-200",
      items: [
        { id: "b1", title: "Iron Initiate", target: 5, current: stats.totalWorkouts, unit: "workouts", desc: "Complete 5 workout sessions" },
        { id: "b2", title: "Set Crusher", target: 25, current: stats.totalSets, unit: "sets", desc: "Log 25 completed working sets" },
        { id: "b3", title: "Tonnage Starter", target: 2500, current: stats.totalVolume, unit: "kg volume", desc: "Move 2,500 kg total volume" }
      ]
    },
    {
      tier: "Silver",
      badgeColor: "from-slate-400 to-slate-600 border-slate-300/50 text-slate-100",
      items: [
        { id: "s1", title: "Disciplined Athlete", target: 15, current: stats.totalWorkouts, unit: "workouts", desc: "Complete 15 workout sessions" },
        { id: "s2", title: "Volume Warrior", target: 100, current: stats.totalSets, unit: "sets", desc: "Complete 100 total working sets" },
        { id: "s3", title: "10-Ton Club", target: 10000, current: stats.totalVolume, unit: "kg volume", desc: "Move 10,000 kg cumulative volume" }
      ]
    },
    {
      tier: "Gold",
      badgeColor: "from-yellow-500 to-amber-600 border-yellow-400/60 text-yellow-100",
      items: [
        { id: "g1", title: "Fitness Titan", target: 30, current: stats.totalWorkouts, unit: "workouts", desc: "Log 30 rigorous training sessions" },
        { id: "g2", title: "Set Master", target: 250, current: stats.totalSets, unit: "sets", desc: "Conquer 250 heavy working sets" },
        { id: "g3", title: "Heavy Lifter", target: 25000, current: stats.totalVolume, unit: "kg volume", desc: "Surpass 25,000 kg volume lifted" }
      ]
    },
    {
      tier: "Diamond",
      badgeColor: "from-cyan-400 to-blue-600 border-cyan-300/70 text-cyan-50 shadow-[0_0_15px_rgba(6,182,212,0.4)]",
      items: [
        { id: "d1", title: "FORMIQ Legend", target: 50, current: stats.totalWorkouts, unit: "workouts", desc: "Complete 50 elite workout sessions" },
        { id: "d2", title: "500 Sets Elite", target: 500, current: stats.totalSets, unit: "sets", desc: "Achieve 500 total gym working sets" },
        { id: "d3", title: "50-Ton Goliath", target: 50000, current: stats.totalVolume, unit: "kg volume", desc: "Surpass 50,000 kg total volume moved" }
      ]
    }
  ];

  // Filter custom goals by active tab
  const filteredGoals = useMemo(() => {
    if (activeTab === "all") return customGoals;
    if (activeTab === "in_progress") return customGoals.filter(g => (g.currentProgress || 0) < g.target);
    if (activeTab === "completed") return customGoals.filter(g => (g.currentProgress || 0) >= g.target);
    return customGoals;
  }, [customGoals, activeTab]);

  const completedCount = customGoals.filter(g => (g.currentProgress || 0) >= g.target).length;
  const inProgressCount = customGoals.length - completedCount;
  const overallRate = customGoals.length > 0 ? Math.round((completedCount / customGoals.length) * 100) : 0;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-foreground/60">Loading your goals and workout tracker data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24 px-2 sm:px-4">
      {/* 1. Header & Create Button */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black tracking-tight uppercase glow-text">
              {t(language, 'goals')} & Milestones
            </h1>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest font-bold">
              Dynamic Tracker
            </span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 mt-1">
            {language === 'hi' 
              ? 'अपने फिटनेस और स्ट्रेंथ लक्ष्य सेट करें जो आपके लॉग किए गए वर्कआउट्स के साथ ऑटो-अपडेट होते हैं।'
              : 'Set targeted strength and frequency milestones that automatically sync with your logged workout sessions.'}
          </p>
        </div>

        <button
          onClick={() => {
            setModalTitle("");
            setModalType("workouts");
            setModalTarget("");
            setModalProgress(stats.totalWorkouts.toString());
            setModalDeadline("");
            setShowAddModal(true);
          }}
          className="self-start sm:self-auto px-5 py-2.5 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 text-sm active:scale-95"
        >
          <Plus size={18} />
          <span>New Target</span>
        </button>
      </header>

      {/* 2. Top KPI Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border-t-2 border-t-primary flex items-center gap-3.5">
          <div className="p-3 bg-primary/20 text-primary rounded-xl">
            <Target size={22} />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase font-semibold">Active Targets</p>
            <p className="text-2xl font-black text-white">{inProgressCount}</p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-t-2 border-t-green-500 flex items-center gap-3.5">
          <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
            <Trophy size={22} />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase font-semibold">Achieved</p>
            <p className="text-2xl font-black text-white">
              {completedCount} <span className="text-xs text-green-400 font-bold">({overallRate}%)</span>
            </p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-t-2 border-t-purple-500 flex items-center gap-3.5">
          <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
            <Zap size={22} />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase font-semibold">Total Sets Logged</p>
            <p className="text-2xl font-black text-white">{stats.totalSets}</p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-t-2 border-t-yellow-500 flex items-center gap-3.5">
          <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl">
            <Flame size={22} />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase font-semibold">Lifetime Volume</p>
            <p className="text-2xl font-black text-white">
              {stats.totalVolume.toLocaleString()} <span className="text-xs text-foreground/50 font-normal">kg</span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Quick Goal Templates Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1.5">
            <Sparkles size={12} className="text-primary" />
            <span>Instant Goal Templates:</span>
          </span>
          <span className="text-xs text-foreground/40 hidden sm:inline">Tap any template to customize</span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {PRESET_TEMPLATES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPreset(preset)}
              className="flex-shrink-0 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 transition-all text-left group max-w-[210px] active:scale-95"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">{preset.icon}</span>
                <span className="text-xs font-bold text-white group-hover:text-primary transition-colors truncate">
                  {preset.title}
                </span>
              </div>
              <p className="text-[11px] text-foreground/50 line-clamp-1">
                {preset.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Filter Tabs */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "all"
                ? "bg-primary text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                : "text-foreground/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>All Goals</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">
              {customGoals.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("in_progress")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "in_progress"
                ? "bg-primary text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                : "text-foreground/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>In Progress</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">
              {inProgressCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "completed"
                ? "bg-primary text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                : "text-foreground/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Trophy size={14} />
            <span>Achieved</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">
              {completedCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("milestones")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "milestones"
                ? "bg-primary text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                : "text-foreground/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Award size={14} />
            <span>Milestone Badges (Tiers)</span>
          </button>
        </div>

        {customGoals.length > 0 && (
          <button
            onClick={handleClearAllGoals}
            className="text-xs text-foreground/40 hover:text-red-400 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-white/5 whitespace-nowrap shrink-0"
            title="Delete all custom goals"
          >
            <Trash2 size={13} />
            <span className="hidden sm:inline">Clear All</span>
          </button>
        )}
      </div>

      {/* 5. Custom Goals Grid */}
      {activeTab !== "milestones" && (
        <section className="space-y-4">
          {filteredGoals.length === 0 ? (
            <div className="text-center py-14 glass-panel rounded-2xl border-dashed border-white/10 space-y-3">
              <Target className="mx-auto text-foreground/30" size={40} />
              <p className="text-foreground/60 text-sm">
                {activeTab === "completed"
                  ? "No targets achieved yet. Keep lifting and pushing your limits!"
                  : "No goals in this category. Click 'New Target' or choose a template above!"}
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-xl transition-all text-xs font-bold"
              >
                Create Target Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGoals.map((goal) => {
                const isCompleted = (goal.currentProgress || 0) >= goal.target;
                const progressPercent = Math.min(100, Math.round(((goal.currentProgress || 0) / (goal.target || 1)) * 100));
                const remaining = Math.max(0, goal.target - (goal.currentProgress || 0));

                return (
                  <div 
                    key={goal.id} 
                    className={`glass-panel p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isCompleted 
                        ? "border-green-500/40 bg-gradient-to-br from-green-950/20 via-slate-900/90 to-black shadow-[0_0_20px_rgba(34,197,94,0.15)]" 
                        : "border-white/10 hover:border-primary/40 bg-slate-900/80"
                    }`}
                  >
                    <div>
                      {/* Top Badges & Actions */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isCompleted 
                              ? "bg-green-500/20 text-green-300 border border-green-500/40" 
                              : "bg-primary/20 text-primary border border-primary/30"
                          }`}>
                            {isCompleted ? "🏆 Achieved" : "In Progress"}
                          </span>
                          <span className="text-[10px] font-mono uppercase bg-white/10 text-foreground/60 px-2 py-0.5 rounded-md">
                            {goal.type}
                          </span>
                          {goal.deadline && (
                            <span className="text-[10px] text-foreground/60 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md">
                              <Calendar size={11} />
                              <span>{new Date(goal.deadline).toLocaleDateString()}</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          {/* Sync with real tracker data */}
                          {(goal.type === "workouts" || goal.type === "sets" || goal.type === "volume") && (
                            <button
                              onClick={() => handleSyncGoal(goal)}
                              title="Sync with workout tracker"
                              className="p-1.5 text-foreground/40 hover:text-primary rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <RefreshCw size={14} className={updatingId === goal.id ? "animate-spin text-primary" : ""} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteGoal(goal.id)}
                            title="Delete Goal"
                            className="p-1.5 text-foreground/40 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-xs text-foreground/50 mb-4">
                        {isCompleted 
                          ? "Target fully achieved! Phenomenal dedication."
                          : `${remaining.toLocaleString()} left to achieve target.`}
                      </p>
                    </div>

                    {/* Progress Bar & Quick Adjust */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-foreground/80">
                          {goal.currentProgress.toLocaleString()} / {goal.target.toLocaleString()}
                        </span>
                        <span className={`font-black text-sm ${isCompleted ? "text-green-400" : "text-primary"}`}>
                          {progressPercent}%
                        </span>
                      </div>

                      <div className="h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/5 p-0.5">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ease-out ${
                            isCompleted
                              ? "bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_10px_#22c55e]"
                              : "bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06b6d4]"
                          }`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>

                      {/* Quick Adjust Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                        <span className="text-[11px] text-foreground/40 font-medium">Quick Log:</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleQuickAdjust(goal, -1)}
                            disabled={goal.currentProgress <= 0 || updatingId === goal.id}
                            className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-white border border-white/10 disabled:opacity-30 text-[11px] font-bold"
                          >
                            -1
                          </button>
                          <button
                            onClick={() => handleQuickAdjust(goal, 1)}
                            disabled={updatingId === goal.id}
                            className="px-2 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-[11px] font-bold"
                          >
                            +1
                          </button>
                          <button
                            onClick={() => handleQuickAdjust(goal, 5)}
                            disabled={updatingId === goal.id}
                            className="px-2 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-[11px] font-bold"
                          >
                            +5
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 6. Tiered Milestones Section */}
      {(activeTab === "all" || activeTab === "milestones") && (
        <section className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Trophy size={20} className="text-yellow-400" /> Lifetime Milestone Achievements
              </h2>
              <p className="text-xs text-foreground/50">
                Tiered milestones earned automatically based on your real workout volume and sets.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {milestones.map((tierGroup) => (
              <div key={tierGroup.tier} className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r border ${tierGroup.badgeColor}`}>
                    {tierGroup.tier} Tier
                  </span>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tierGroup.items.map((m) => {
                    const pct = Math.min(100, Math.round((m.current / m.target) * 100));
                    const isUnlocked = m.current >= m.target;

                    return (
                      <div 
                        key={m.id} 
                        className={`glass-panel p-5 rounded-2xl border transition-all ${
                          isUnlocked 
                            ? "border-yellow-500/40 bg-gradient-to-br from-yellow-950/20 via-slate-900/90 to-black shadow-[0_0_15px_rgba(234,179,8,0.15)]"
                            : "border-white/5 bg-slate-900/60"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl ${isUnlocked ? "bg-yellow-500/20 text-yellow-300" : "bg-white/5 text-foreground/40"}`}>
                              {isUnlocked ? <Trophy size={20} /> : <Award size={20} />}
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-white">{m.title}</h4>
                              <p className="text-[11px] text-foreground/50">{m.desc}</p>
                            </div>
                          </div>
                          {isUnlocked && (
                            <span className="text-[10px] font-bold text-yellow-400 bg-yellow-500/20 px-2 py-0.5 rounded-full border border-yellow-500/30">
                              UNLOCKED
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5 mt-3">
                          <div className="flex justify-between text-xs text-foreground/60">
                            <span>{m.current.toLocaleString()} / {m.target.toLocaleString()} {m.unit}</span>
                            <span className={`font-bold ${isUnlocked ? "text-yellow-400" : "text-primary"}`}>{pct}%</span>
                          </div>
                          <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5">
                            <div 
                              className={`h-full transition-all duration-700 ease-out ${
                                isUnlocked 
                                  ? "bg-gradient-to-r from-yellow-400 to-amber-500" 
                                  : "bg-gradient-to-r from-primary to-accent"
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. New Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full max-w-lg border border-white/10 shadow-2xl relative bg-slate-950">
            <button 
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 p-2 text-foreground/40 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <Target size={20} className="text-primary" />
              <h2 className="text-xl font-bold text-white">Create Fitness Target</h2>
            </div>
            <p className="text-xs text-foreground/50 mb-5">
              Define a measurable strength, volume, frequency, or habit target.
            </p>

            <form onSubmit={handleCreateGoal} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground/70 uppercase">Goal Title</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g., Bench Press 100 kg or 20 Workouts This Month"
                  value={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  className="w-full mt-1.5 bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase">Goal Type</label>
                  <select
                    value={modalType}
                    onChange={(e) => {
                      const t = e.target.value;
                      setModalType(t);
                      if (t === "workouts") setModalProgress(stats.totalWorkouts.toString());
                      if (t === "sets") setModalProgress(stats.totalSets.toString());
                      if (t === "volume") setModalProgress(stats.totalVolume.toString());
                    }}
                    className="w-full mt-1.5 bg-black/60 border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm text-white"
                  >
                    <option value="workouts">Workouts Count</option>
                    <option value="strength">Strength / PR (kg)</option>
                    <option value="volume">Total Volume (kg)</option>
                    <option value="sets">Working Sets</option>
                    <option value="consistency">Consistency (Days)</option>
                    <option value="custom">Custom Habit</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase">Target Value</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    placeholder="e.g., 20 or 100"
                    value={modalTarget}
                    onChange={(e) => setModalTarget(e.target.value)}
                    className="w-full mt-1.5 bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase">Current Progress</label>
                  <input 
                    type="number"
                    min="0"
                    placeholder="e.g., 0"
                    value={modalProgress}
                    onChange={(e) => setModalProgress(e.target.value)}
                    className="w-full mt-1.5 bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase">Target Deadline (Optional)</label>
                  <input 
                    type="date"
                    value={modalDeadline}
                    onChange={(e) => setModalDeadline(e.target.value)}
                    className="w-full mt-1.5 bg-black/60 border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:border-primary text-sm text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] text-sm flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
              >
                {submitting ? "Saving Target..." : "Save Goal Target"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
