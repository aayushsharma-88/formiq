"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { useEffect, useState } from "react";
import { Dumbbell, Calendar, Clock, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function HistoryPage() {
  const { language } = useStore();
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const { userId } = useStore.getState();
    try {
      const res = await fetch('/api/workouts', {
        headers: { 'x-user-id': userId || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setWorkouts(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteWorkout = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const { userId } = useStore.getState();
    if (confirm("Are you sure you want to delete this workout?")) {
      try {
        const res = await fetch(`/api/workouts/${id}`, { 
          method: 'DELETE',
          headers: { 'x-user-id': userId || '' }
        });
        if (res.ok) {
          fetchWorkouts();
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase glow-text">{t(language, 'myTracking')}</h1>
        <p className="text-foreground/60">Your FORMIQ tracking data is organized here so you can review your fitness journey and understand your progress over time.</p>
      </header>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1,2,3].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl w-full"></div>)}
        </div>
      ) : workouts.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-2xl border-dashed">
          <Dumbbell className="mx-auto text-foreground/40 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">No tracking data yet</h2>
          <p className="text-foreground/60">{t(language, 'notEnoughData')}</p>
        </div>
      ) : (
        <div className="space-y-4 relative">
          {/* Vertical Timeline line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10 hidden md:block"></div>

          {workouts.map((workout) => (
            <div key={workout.id} className="relative pl-0 md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)] hidden md:block z-10"></div>
              
              <div 
                className="glass-panel p-6 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors border border-white/5 hover:border-primary/30"
                onClick={() => setExpandedId(expandedId === workout.id ? null : workout.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{workout.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mt-2">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(workout.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {workout.duration} min</span>
                      <span className="flex items-center gap-1"><Dumbbell size={14} /> {(workout.exercises || []).length} exercises</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => deleteWorkout(workout.id, e)}
                      className="p-2 text-foreground/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    {expandedId === workout.id ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-foreground/40" />}
                  </div>
                </div>

                {expandedId === workout.id && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-in slide-in-from-top-4">
                    {workout.notes && (
                      <div className="bg-black/30 p-4 rounded-xl text-sm italic text-foreground/80">
                        &quot;{workout.notes}&quot;
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      {(workout.exercises || []).map((ex: any) => (
                        <div key={ex.id} className="bg-black/20 rounded-xl p-4">
                          <h4 className="font-medium text-primary mb-3">{ex.name}</h4>
                          <div className="grid grid-cols-3 gap-2 text-sm text-foreground/60 mb-2 px-2">
                            <div>Set</div>
                            <div>Weight</div>
                            <div>Reps</div>
                          </div>
                          {(ex.sets || []).map((set: any, i: number) => (
                            <div key={set.id} className="grid grid-cols-3 gap-2 text-sm bg-black/40 p-2 rounded-lg mb-1">
                              <div className="font-medium">{i + 1}</div>
                              <div>{set.weight}</div>
                              <div>{set.reps}</div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
