import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import AuthGuard from "@/components/AuthGuard";

export const metadata: Metadata = {
  title: "FORMIQ | Premium Fitness Tracking",
  description: "Track, Train, Transform with FORMIQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex bg-background text-foreground">
        <AuthGuard>
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 ml-0 md:ml-64 transition-all">
            {children}
          </main>
        </AuthGuard>
      </body>
    </html>
  );
}
