"use client";

import { useStore } from "@/store/useStore";
import Login from "./Login";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { userId } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background text-primary">
        <Loader2 size={36} className="animate-spin" />
      </div>
    );
  }

  if (!userId) {
    return <Login />;
  }

  return <>{children}</>;
}
