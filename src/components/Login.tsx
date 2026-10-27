"use client";

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { User, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const { setUserId } = useStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      // For this local app prototype, we simulate auth by just setting the user ID to the username
      // This automatically provisions them a space in the DB via upsert in our APIs
      setUserId(username.trim().toLowerCase());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md">
      <div className="glass-panel p-8 rounded-3xl w-full max-w-md animate-in zoom-in-95 duration-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] border-t border-primary/20">
        <div className="text-center mb-8">
          <Image 
            src="/logo.jpg" 
            alt="FORMIQ Logo" 
            width={80} 
            height={80} 
            priority
            className="w-20 h-20 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] mb-4 object-cover" 
          />
          <h1 className="text-3xl font-bold tracking-wider glow-text">FORMIQ</h1>
          <p className="text-foreground/60 mt-2">
            {isRegister ? "Create your ID to start tracking" : "Login to your workspace"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input 
                type="text" 
                required
                placeholder="Choose a Username (Your ID)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input 
                type="password" 
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 font-bold"
          >
            {isRegister ? "Create Account" : "Sign In"} <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-foreground/60">
          {isRegister ? "Already have an ID? " : "Don't have an ID? "}
          <button 
            onClick={() => setIsRegister(!isRegister)}
            className="text-primary hover:underline font-medium"
          >
            {isRegister ? "Sign In" : "Create one"}
          </button>
        </div>
      </div>
    </div>
  );
}
