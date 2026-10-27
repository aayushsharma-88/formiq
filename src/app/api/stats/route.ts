import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const workouts = await prisma.workout.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      include: { 
        exercises: {
          include: { sets: true }
        }
      }
    });

    const allGoals = await prisma.goal.findMany({
      where: { userId }
    });
    const activeGoals = allGoals.filter(g => (g.currentProgress || 0) < g.target).length;

    const totalWorkouts = workouts.length;
    const recentActivity = workouts.slice(0, 5);
    
    // Calculate accurate consecutive active workout streak
    let streak = 0;
    if (workouts.length > 0) {
      // Normalize unique calendar days (YYYY-MM-DD)
      const dayStrings = Array.from(
        new Set(
          workouts.map((w) => {
            const d = new Date(w.date);
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          })
        )
      ).sort().reverse(); // newest first

      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

      // If user has worked out today or yesterday, streak is currently active
      if (dayStrings.includes(todayStr) || dayStrings.includes(yesterdayStr)) {
        let currentCheck = dayStrings.includes(todayStr) ? new Date(now) : yesterday;
        
        for (const _day of dayStrings) {
          const checkStr = `${currentCheck.getFullYear()}-${String(currentCheck.getMonth() + 1).padStart(2, '0')}-${String(currentCheck.getDate()).padStart(2, '0')}`;
          if (dayStrings.includes(checkStr)) {
            streak++;
            currentCheck.setDate(currentCheck.getDate() - 1);
          } else {
            break;
          }
        }
      }
    }

    return NextResponse.json({
      totalWorkouts,
      streak,
      activeGoals,
      recentActivity
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
