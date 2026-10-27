"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Activity } from "lucide-react";

export default function AnalyticsPage() {
  const { language } = useStore();
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
        if (Array.isArray(data)) {
          setWorkouts([...data].reverse()); // chronological order for charts
        } else {
          setWorkouts([]);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Process data for charts
  const volumeData = workouts.map(w => {
    let totalVolume = 0;
    (w.exercises || []).forEach((ex: any) => {
      (ex.sets || []).forEach((set: any) => {
        totalVolume += (Number(set.weight) || 0) * (Number(set.reps) || 0);
      });
    });
    return {
      name: new Date(w.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      volume: totalVolume
    };
  });

  const durationData = workouts.map(w => ({
    name: new Date(w.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    duration: Number(w.duration) || 0
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase glow-text">{t(language, 'analytics')}</h1>
        <p className="text-foreground/60">Visualizing your tracked data and performance metrics.</p>
      </header>

      {loading ? (
        <div className="space-y-6 animate-pulse">
          <div className="h-80 bg-white/5 rounded-2xl w-full"></div>
          <div className="h-80 bg-white/5 rounded-2xl w-full"></div>
        </div>
      ) : workouts.length < 2 ? (
        <div className="text-center py-20 glass-panel rounded-2xl border-dashed">
          <Activity className="mx-auto text-foreground/40 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">{t(language, 'notEnoughData')}</h2>
          <p className="text-foreground/60">Log at least two workouts to see your progress charts.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Volume Chart */}
          <div className="glass-panel p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-6">Total Volume Progression (Weight × Reps)</h2>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,12,0.9)', borderColor: 'rgba(6,182,212,0.5)', borderRadius: '8px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Line type="monotone" dataKey="volume" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Duration Chart */}
          <div className="glass-panel p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-6">Workout Duration (Minutes)</h2>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={durationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,12,0.9)', borderColor: 'rgba(59,130,246,0.5)', borderRadius: '8px' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="duration" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
