"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Scale, Plus, Trash2, Calendar, TrendingDown, TrendingUp } from "lucide-react";

interface ProgressRecord {
  id: string;
  date: string;
  weight: number | null;
  bodyFat: number | null;
  notes: string | null;
}

export default function ProgressPage() {
  const { language } = useStore();
  const [records, setRecords] = useState<ProgressRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchRecords = async () => {
    const { userId } = useStore.getState();
    try {
      const res = await fetch('/api/progress', {
        headers: { 'x-user-id': userId || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setRecords(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleAddRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight && !bodyFat) return;

    setSubmitting(true);
    const { userId } = useStore.getState();

    try {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId || ''
        },
        body: JSON.stringify({
          weight: weight ? parseFloat(weight) : null,
          bodyFat: bodyFat ? parseFloat(bodyFat) : null,
          notes: notes.trim() || null
        })
      });

      if (res.ok) {
        setWeight("");
        setBodyFat("");
        setNotes("");
        fetchRecords();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteRecord = async (id: string) => {
    if (!confirm("Are you sure you want to remove this log?")) return;
    const { userId } = useStore.getState();
    try {
      const res = await fetch(`/api/progress?id=${id}`, {
        method: 'DELETE',
        headers: { 'x-user-id': userId || '' }
      });
      if (res.ok) {
        setRecords((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const chartData = records
    .filter((r) => r.weight !== null)
    .map((r) => ({
      date: new Date(r.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      weight: r.weight,
      bodyFat: r.bodyFat
    }));

  const latestWeight = records.filter(r => r.weight !== null).slice(-1)[0]?.weight;
  const initialWeight = records.filter(r => r.weight !== null)[0]?.weight;
  const weightChange = latestWeight && initialWeight ? (latestWeight - initialWeight).toFixed(1) : null;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase glow-text">{t(language, 'progress')}</h1>
        <p className="text-foreground/60">Log your body weight and body composition to monitor your physical transformation.</p>
      </header>

      {/* Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/5">
          <p className="text-xs text-foreground/60 uppercase">Current Weight</p>
          <p className="text-2xl font-bold mt-1 text-primary">{latestWeight ? `${latestWeight} kg` : "--"}</p>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-white/5">
          <p className="text-xs text-foreground/60 uppercase">Total Change</p>
          <div className="flex items-center gap-1 mt-1">
            {weightChange && parseFloat(weightChange) !== 0 ? (
              parseFloat(weightChange) > 0 ? (
                <>
                  <TrendingUp size={20} className="text-red-400" />
                  <span className="text-2xl font-bold text-red-400">+{weightChange} kg</span>
                </>
              ) : (
                <>
                  <TrendingDown size={20} className="text-green-400" />
                  <span className="text-2xl font-bold text-green-400">{weightChange} kg</span>
                </>
              )
            ) : (
              <span className="text-2xl font-bold text-foreground/60">0.0 kg</span>
            )}
          </div>
        </div>
        <div className="glass-panel p-5 rounded-2xl border border-white/5">
          <p className="text-xs text-foreground/60 uppercase">Total Entries</p>
          <p className="text-2xl font-bold mt-1 text-white">{records.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Entry Form */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 h-fit">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Scale size={20} className="text-primary" /> Log Body Metrics
          </h2>
          <form onSubmit={handleAddRecord} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-foreground/60 uppercase">Weight (kg / lbs)</label>
              <input
                type="number"
                step="0.1"
                placeholder="e.g., 75.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full mt-1 bg-black/50 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground/60 uppercase">Body Fat % (optional)</label>
              <input
                type="number"
                step="0.1"
                placeholder="e.g., 15.0"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                className="w-full mt-1 bg-black/50 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground/60 uppercase">Notes (optional)</label>
              <input
                type="text"
                placeholder="e.g., Morning weigh-in, fasted"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full mt-1 bg-black/50 border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={submitting || (!weight && !bodyFat)}
              className="w-full mt-2 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Plus size={18} /> {submitting ? "Logging..." : "Log Entry"}
            </button>
          </form>
        </div>

        {/* Progress Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Body Weight Trend</h2>
          {loading ? (
            <div className="h-64 bg-white/5 rounded-xl animate-pulse flex items-center justify-center text-foreground/40">
              Loading chart...
            </div>
          ) : chartData.length < 2 ? (
            <div className="h-64 flex flex-col items-center justify-center text-foreground/40 border border-dashed border-white/10 rounded-xl">
              <Scale size={32} className="mb-2 opacity-50" />
              <p className="text-sm">Log at least two entries to view your weight progression chart.</p>
            </div>
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,12,0.95)', borderColor: 'rgba(6,182,212,0.5)', borderRadius: '8px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Line type="monotone" dataKey="weight" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Historical Log Entries */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <h3 className="text-sm font-semibold uppercase text-foreground/60 mb-3">Recent Logs</h3>
            {records.length === 0 ? (
              <p className="text-xs text-foreground/40 italic">No logs recorded yet.</p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {[...records].reverse().map((r) => (
                  <div key={r.id} className="flex items-center justify-between p-3 bg-black/30 rounded-xl border border-white/5 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-primary" />
                      <div>
                        <span className="font-semibold text-white">{r.weight ? `${r.weight} kg` : "--"}</span>
                        {r.bodyFat && <span className="ml-2 text-xs text-foreground/60">({r.bodyFat}% BF)</span>}
                        {r.notes && <p className="text-xs text-foreground/50 italic">{r.notes}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-foreground/40">{new Date(r.date).toLocaleDateString()}</span>
                      <button 
                        onClick={() => handleDeleteRecord(r.id)} 
                        className="p-1 text-foreground/40 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
