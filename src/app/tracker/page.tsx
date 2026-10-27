"use client";

import { Suspense, useState, useEffect } from "react";
import { Plus, Save, Trash2, CheckCircle2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { useSearchParams } from "next/navigation";

function TrackerForm() {
  const { language } = useStore();
  const searchParams = useSearchParams();
  const [workoutName, setWorkoutName] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [exercises, setExercises] = useState([
    { id: 1, name: "", sets: [{ id: 1, reps: "", weight: "" }] }
  ]);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");

  useEffect(() => {
    const addExerciseParam = searchParams?.get('add');
    if (addExerciseParam) {
      setExercises((prev) => {
        if (prev.length === 1 && prev[0].name === "") {
          return [{ id: 1, name: addExerciseParam, sets: [{ id: 1, reps: "", weight: "" }] }];
        }
        if (prev.some((e) => e.name === addExerciseParam)) {
          return prev;
        }
        return [
          ...prev, 
          { id: Date.now(), name: addExerciseParam, sets: [{ id: Date.now(), reps: "", weight: "" }] }
        ];
      });
    }
  }, [searchParams]);

  const addExercise = () => {
    setExercises([
      ...exercises, 
      { id: Date.now(), name: "", sets: [{ id: Date.now(), reps: "", weight: "" }] }
    ]);
  };

  const addSet = (exerciseId: number) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        return { ...ex, sets: [...ex.sets, { id: Date.now(), reps: "", weight: "" }] };
      }
      return ex;
    }));
  };

  const updateExerciseName = (id: number, name: string) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, name } : ex));
  };

  const updateSet = (exerciseId: number, setId: number, field: "reps" | "weight", value: string) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        return {
          ...ex,
          sets: ex.sets.map(s => s.id === setId ? { ...s, [field]: value } : s)
        };
      }
      return ex;
    }));
  };

  const removeExercise = (id: number) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  const removeSet = (exerciseId: number, setId: number) => {
    setExercises(exercises.map(ex => {
      if (ex.id === exerciseId) {
        return { ...ex, sets: ex.sets.filter(s => s.id !== setId) };
      }
      return ex;
    }));
  };

  const saveWorkout = async () => {
    if (!workoutName) return;
    setStatus("saving");
    const { userId } = useStore.getState();
    try {
      const res = await fetch('/api/workouts', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-id': userId || ''
        },
        body: JSON.stringify({
          name: workoutName,
          duration: parseInt(duration) || 0,
          notes,
          exercises: exercises.map(ex => ({
            name: ex.name,
            sets: ex.sets.map(s => ({
              reps: parseInt(s.reps) || 0,
              weight: parseFloat(s.weight) || 0
            }))
          }))
        })
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setWorkoutName("");
          setDuration("");
          setNotes("");
          setExercises([{ id: 1, name: "", sets: [{ id: 1, reps: "", weight: "" }] }]);
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t(language, 'tracker')}</h1>
        <p className="text-foreground/60">Log your workout details below to keep your tracking data up to date.</p>
      </header>

      {status === "success" && (
        <div className="bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-xl flex items-center gap-3">
          <CheckCircle2 size={24} />
          <span>Workout saved successfully! Your dashboard and tracking data have been updated.</span>
        </div>
      )}

      <div className="glass-panel p-6 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Workout Name</label>
            <input 
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              placeholder="e.g. Upper Body Power"
              className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Duration (minutes)</label>
            <input 
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 60"
              className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Notes</label>
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How did the workout feel?"
            className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-24 resize-none"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Exercises</h2>
        
        {exercises.map((exercise, index) => (
          <div key={exercise.id} className="glass-panel p-6 rounded-2xl space-y-4 relative border-l-2 border-l-primary/50">
            <button 
              onClick={() => removeExercise(exercise.id)}
              className="absolute top-4 right-4 text-foreground/40 hover:text-red-400 transition-colors"
            >
              <Trash2 size={20} />
            </button>
            
            <div className="w-3/4">
              <input 
                value={exercise.name}
                onChange={(e) => updateExerciseName(exercise.id, e.target.value)}
                placeholder="Exercise Name (e.g. Bench Press)"
                className="w-full bg-transparent border-b border-white/10 py-2 px-1 text-lg font-medium focus:outline-none focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-2 text-xs font-medium text-foreground/50 px-2">
                <div className="col-span-2 text-center">Set</div>
                <div className="col-span-4 text-center">Weight (kg/lbs)</div>
                <div className="col-span-4 text-center">Reps</div>
                <div className="col-span-2"></div>
              </div>
              
              {exercise.sets.map((set, setIndex) => (
                <div key={set.id} className="grid grid-cols-12 gap-2 items-center bg-black/30 p-2 rounded-lg">
                  <div className="col-span-2 text-center font-medium">{setIndex + 1}</div>
                  <div className="col-span-4">
                    <input 
                      type="number"
                      value={set.weight}
                      onChange={(e) => updateSet(exercise.id, set.id, "weight", e.target.value)}
                      placeholder="0"
                      className="w-full bg-black/50 border border-white/10 rounded-md py-1 px-2 text-center focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="col-span-4">
                    <input 
                      type="number"
                      value={set.reps}
                      onChange={(e) => updateSet(exercise.id, set.id, "reps", e.target.value)}
                      placeholder="0"
                      className="w-full bg-black/50 border border-white/10 rounded-md py-1 px-2 text-center focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <button onClick={() => removeSet(exercise.id, set.id)} className="text-foreground/40 hover:text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => addSet(exercise.id)}
              className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              <Plus size={16} /> Add Set
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button 
          onClick={addExercise}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Plus size={20} /> Add Exercise
        </button>
        <button 
          onClick={saveWorkout}
          disabled={status === "saving" || !workoutName}
          className="px-8 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={20} /> {status === "saving" ? "Saving..." : "Save Workout"}
        </button>
      </div>
    </div>
  );
}

export default function Tracker() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading tracker...</div>}>
      <TrackerForm />
    </Suspense>
  );
}

