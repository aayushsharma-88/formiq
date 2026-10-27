import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const existingWorkout = await prisma.workout.findFirst({
      where: { id, userId }
    });

    if (!existingWorkout) {
      return NextResponse.json({ error: 'Workout not found or unauthorized' }, { status: 404 });
    }

    // Prisma cascades deletes to exercises and sets
    await prisma.workout.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting workout:", error);
    return NextResponse.json({ error: 'Failed to delete workout' }, { status: 500 });
  }
}
