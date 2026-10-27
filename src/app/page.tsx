"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { Activity, Flame, Dumbbell, Trophy, ArrowRight, Loader2, Sparkles, RotateCcw, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface ChatMessage {
  id: string;
  sender: 'formiq' | 'user';
  text: string;
}

const SUGGESTED_PROMPTS_EN = [
  { icon: "📱", label: "How to use app?", query: "How do I use this app and its features?" },
  { icon: "🏋️", label: "How to log workout?", query: "How do I log a workout in FORMIQ?" },
  { icon: "📊", label: "My last workout", query: "What was my last workout?" },
  { icon: "🍗", label: "Daily protein intake", query: "How much protein do I need daily for muscle gain?" },
  { icon: "💪", label: "Bench press form", query: "How to perform Barbell Bench Press with proper form?" },
  { icon: "🥗", label: "Pre/Post workout diet", query: "What should I eat before and after workout?" },
  { icon: "📅", label: "Hypertrophy routine", query: "Suggest a good workout split for hypertrophy" },
  { icon: "💧", label: "Creatine guide", query: "How should I take creatine?" },
  { icon: "🎯", label: "How goals work", query: "How do goals work in FORMIQ?" }
];

const SUGGESTED_PROMPTS_HI = [
  { icon: "📱", label: "ऐप कैसे चलाएं?", query: "FORMIQ ऐप को कैसे इस्तेमाल करें और इसके क्या फीचर्स हैं?" },
  { icon: "🏋️", label: "वर्कआउट कैसे लॉग करें?", query: "वर्कआउट कैसे लॉग और सेव करें?" },
  { icon: "📊", label: "मेरा पिछला वर्कआउट", query: "मेरा पिछला वर्कआउट क्या था?" },
  { icon: "🍗", label: "डेली प्रोटीन कितना लें?", query: "बॉडी बनाने के लिए रोज़ाना कितना प्रोटीन खाना चाहिए?" },
  { icon: "💪", label: "बेंच प्रेस सही फॉर्म", query: "बेंच प्रेस करने का सही तरीका और फॉर्म क्या है?" },
  { icon: "🥗", label: "वर्कआउट डाइट टिप्स", query: "वर्कआउट से पहले और बाद में क्या खाना चाहिए?" },
  { icon: "📅", label: "बेस्ट जिम रूटीन", query: "मसल्स बनाने के लिए बेस्ट जिम स्प्लिट रूटीन बताओ" },
  { icon: "💧", label: "क्रिएटिन कैसे लें?", query: "क्रिएटिन कब और कितना लेना चाहिए?" },
  { icon: "🎯", label: "लक्ष्य कैसे सेट करें?", query: "FORMIQ में गोल्स कैसे काम करते हैं?" }
];

export default function Dashboard() {
  const { language } = useStore();
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    streak: 0,
    activeGoals: 0,
    recentActivity: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  // Chat state
  const getInitialMessage = (lang: string): ChatMessage => ({
    id: "welcome",
    sender: "formiq",
    text: lang === 'hi'
      ? "👋 नमस्ते! मैं आपका FORMIQ AI फिटनेस व ऐप असिस्टेंट हूँ।\n\nआप मुझसे ऐप के फीचर्स, अपने वर्कआउट डेटा व प्रोग्रेस, जिम एक्सरसाइज फॉर्म, ट्रेनिंग रूटीन या डाइट और न्यूट्रिशन के बारे में कुछ भी पूछ सकते हैं! नीचे दिए गए किसी विषय पर क्लिक करें या अपना सवाल टाइप करें।"
      : "👋 Hello! I am your FORMIQ AI Fitness & App Assistant.\n\nAsk me how to use the app, check your workout history and volume, get exercise form guides, or ask any gym training & diet nutrition questions. Tap a quick topic below or type your question!"
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([getInitialMessage('en')]);
  const [query, setQuery] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If only welcome message exists, update it to matched language
    setChatMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [getInitialMessage(language)];
      }
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    const fetchStats = async () => {
      const { userId } = useStore.getState();
      try {
        const res = await fetch('/api/stats', {
          headers: { 'x-user-id': userId || '' }
        });
        if (res.ok) {
          const data = await res.json();
          setStats({
            totalWorkouts: data.totalWorkouts || 0,
            streak: data.streak || 0,
            activeGoals: data.activeGoals !== undefined ? data.activeGoals : 0,
            recentActivity: Array.isArray(data.recentActivity) ? data.recentActivity : []
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isAsking]);

  const sendQuery = async (cleanQuery: string) => {
    const trimmed = cleanQuery.trim();
    if (!trimmed || isAsking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: trimmed
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setIsAsking(true);

    try {
      const { userId } = useStore.getState();
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-id': userId || ''
        },
        body: JSON.stringify({ query: trimmed })
      });
      const data = await res.json();
      
      setChatMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "formiq",
          text: data.answer || (language === 'hi' 
            ? "मुझे आपके सवाल का सही जवाब नहीं मिला। कृपया ऐप, वर्कआउट, एक्सरसाइज या डाइट से जुड़ा सवाल पूछें!" 
            : "I could not analyze that request right now. Try asking about your workouts, exercise form, or diet tips!")
        }
      ]);
    } catch (e) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "formiq",
          text: language === 'hi'
            ? "असिस्टेंट से कनेक्ट करने में समस्या हुई। कृपया पुनः प्रयास करें।"
            : "Error connecting to FORMIQ assistant. Please check your connection."
        }
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  const handleAskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isAsking) return;
    await sendQuery(query);
  };

  const handleResetChat = () => {
    setChatMessages([getInitialMessage(language)]);
    setQuery("");
  };

  const activeSuggestedPrompts = language === 'hi' ? SUGGESTED_PROMPTS_HI : SUGGESTED_PROMPTS_EN;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t(language, 'dashboard')}</h1>
          <p className="text-foreground/60">{t(language, 'welcome')}. {t(language, 'trackTrainTransform')}</p>
        </div>
        <Link 
          href="/book" 
          className="self-start sm:self-auto px-4 py-2.5 bg-gradient-to-r from-[#b84724] to-[#c85a32] text-white rounded-xl shadow-[0_0_20px_rgba(184,71,36,0.4)] hover:brightness-110 transition-all flex items-center gap-2.5 font-bold text-sm border border-white/10 group"
        >
          <span className="text-base group-hover:scale-110 transition-transform">📖</span>
          <span>Read The Chronicles of Iron</span>
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title={t(language, 'totalWorkouts')} 
          value={loading ? "..." : stats.totalWorkouts.toString()} 
          icon={<Dumbbell className="text-primary" size={24} />} 
        />
        <StatCard 
          title={t(language, 'streak')} 
          value={loading ? "..." : `${stats.streak} days`} 
          icon={<Flame className="text-orange-500" size={24} />} 
        />
        <StatCard 
          title="Active Goals" 
          value={loading ? "..." : (stats.activeGoals > 0 ? stats.activeGoals.toString() : "3")} 
          icon={<Trophy className="text-yellow-400" size={24} />} 
        />
        <StatCard 
          title="Activity" 
          value={loading ? "..." : stats.streak > 0 ? "High" : "Normal"} 
          icon={<Activity className="text-green-400" size={24} />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="glass-panel rounded-2xl p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{t(language, 'recentActivity')}</h2>
            <Link href="/history" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          
          {loading ? (
            <div className="animate-pulse flex flex-col gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-white/5 rounded-lg w-full"></div>
              ))}
            </div>
          ) : stats.recentActivity.length === 0 ? (
            <div className="text-center py-10 bg-white/5 rounded-lg border border-white/5 border-dashed">
              <Dumbbell className="mx-auto text-foreground/40 mb-3" size={32} />
              <p className="text-foreground/60">{t(language, 'notEnoughData')}</p>
              <Link href="/tracker" className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                Log First Workout
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {stats.recentActivity.map((workout: any) => (
                <div key={workout.id} className="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-white/5 transition-colors border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Activity size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">{workout.name}</h3>
                      <p className="text-xs text-foreground/50">{new Date(workout.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{workout.exercises?.length || 0} exercises</p>
                    <p className="text-xs text-foreground/50">{workout.duration || 0} min</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FORMIQ AI Assistant Panel */}
        <div className="glass-panel rounded-2xl p-5 md:p-6 glow-border-subtle flex flex-col h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <span className="text-black font-black text-sm">FQ</span>
              </div>
              <div>
                <h2 className="text-lg font-bold leading-tight flex items-center gap-2">
                  <span>{t(language, 'askFormiq')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest font-semibold">
                    AI Assistant
                  </span>
                </h2>
                <p className="text-xs text-foreground/50">
                  {language === 'hi' ? 'ऐप गाइड • वर्कआउट कोच • डाइट व न्यूट्रिशन' : 'App Guide • Workout Coach • Diet & Nutrition'}
                </p>
              </div>
            </div>

            {chatMessages.length > 1 && (
              <button
                type="button"
                onClick={handleResetChat}
                title={language === 'hi' ? 'चैट रीसेट करें' : 'Reset Chat'}
                className="p-1.5 rounded-lg text-foreground/40 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw size={15} />
              </button>
            )}
          </div>
          
          {/* Messages Feed */}
          <div ref={chatScrollRef} className="flex-1 overflow-y-auto mb-3 space-y-3 pr-1 scroll-smooth">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={msg.sender === "user" ? "text-right" : "text-left"}
              >
                <div 
                  className={`rounded-2xl p-3.5 text-xs sm:text-sm inline-block max-w-[88%] whitespace-pre-line leading-relaxed text-left ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-primary to-cyan-600 text-white shadow-[0_2px_12px_rgba(6,182,212,0.3)] rounded-tr-sm"
                      : "bg-cyan-950/20 border border-cyan-500/20 text-foreground/90 shadow-sm rounded-tl-sm"
                  }`}
                >
                  {msg.sender === "formiq" && (
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary mb-1.5">
                      <Sparkles size={12} />
                      <span>FORMIQ</span>
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isAsking && (
              <div className="text-left">
                <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-2xl rounded-tl-sm p-3 text-xs sm:text-sm inline-flex items-center gap-2 text-foreground/70">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span>{language === 'hi' ? 'विश्लेषण किया जा रहा है...' : 'Analyzing with FORMIQ AI...'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Prompts Pills */}
          <div className="mb-3 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <span className="text-[11px] font-medium tracking-wider uppercase text-foreground/50 flex items-center gap-1">
                <Sparkles size={11} className="text-primary" />
                {language === 'hi' ? 'सुझाए गए विषय' : 'Suggested Topics'}
              </span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
              {activeSuggestedPrompts.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={isAsking}
                  onClick={() => sendQuery(item.query)}
                  className="whitespace-nowrap flex-shrink-0 text-xs px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-primary/20 hover:border-primary/40 border border-white/10 text-foreground/80 hover:text-white transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed group active:scale-95"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="group-hover:text-primary transition-colors">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Query Input */}
          <form 
            onSubmit={handleAskSubmit}
            className="relative"
          >
            <input 
              name="query"
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isAsking}
              placeholder={language === 'hi' ? 'जिम, डाइट या ऐप के बारे में पूछें...' : 'Ask about gym form, diet, or app guidance...'}
              className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all disabled:opacity-50 text-white placeholder:text-foreground/40"
            />
            <button 
              type="submit" 
              disabled={isAsking || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-t border-t-white/10 hover:-translate-y-1 transition-transform">
      <div className="p-3 bg-black/40 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-foreground/60">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
