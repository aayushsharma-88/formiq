import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const userEmail = userId.includes('@') ? userId : `${userId}@formiq.app`;

    // Ensure user exists
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: userEmail,
        password: 'mockpassword',
        name: userId
      }
    });

    const workoutName = typeof data.name === 'string' && data.name.trim() 
      ? data.name.trim() 
      : `Workout on ${new Date().toLocaleDateString()}`;
    const duration = typeof data.duration === 'number' ? data.duration : (parseInt(data.duration, 10) || 0);
    const notes = typeof data.notes === 'string' ? data.notes.trim() : null;

    const rawExercises = Array.isArray(data.exercises) ? data.exercises : [];
    const validExercises = rawExercises
      .filter((ex: any) => typeof ex?.name === 'string' && ex.name.trim() !== '')
      .map((ex: any) => {
        const rawSets = Array.isArray(ex.sets) ? ex.sets : [];
        return {
          name: ex.name.trim(),
          sets: {
            create: rawSets.map((s: any) => ({
              reps: Math.max(0, parseInt(s.reps, 10) || 0),
              weight: Math.max(0, parseFloat(s.weight) || 0)
            }))
          }
        };
      });

    const workout = await prisma.workout.create({
      data: {
        name: workoutName,
        duration: duration,
        notes: notes,
        userId: userId,
        exercises: {
          create: validExercises
        }
      },
      include: {
        exercises: {
          include: { sets: true }
        }
      }
    });

    return NextResponse.json(workout);
  } catch (error) {
    console.error("Error creating workout:", error);
    return NextResponse.json({ error: 'Failed to create workout' }, { status: 500 });
  }
}

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
    return NextResponse.json(workouts);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return NextResponse.json({ error: 'Failed to fetch workouts' }, { status: 500 });
  }
}
