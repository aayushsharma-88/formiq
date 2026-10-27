import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    
    const goals = await prisma.goal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(goals);
  } catch (error) {
    console.error("Error fetching goals:", error);
    return NextResponse.json({ error: 'Failed to fetch goals' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const userEmail = userId.includes('@') ? userId : `${userId}@formiq.app`;

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

    const title = typeof data.title === 'string' && data.title.trim() ? data.title.trim() : 'Fitness Goal';
    const type = typeof data.type === 'string' ? data.type : 'general';
    const target = Math.max(1, parseFloat(data.target) || 10);
    const currentProgress = Math.max(0, parseFloat(data.currentProgress) || 0);
    const deadline = data.deadline ? new Date(data.deadline) : null;
    const validDeadline = deadline && !isNaN(deadline.getTime()) ? deadline : null;

    const goal = await prisma.goal.create({
      data: {
        title,
        type,
        target,
        currentProgress,
        deadline: validDeadline,
        userId: userId
      }
    });

    return NextResponse.json(goal);
  } catch (error) {
    console.error("Error creating goal:", error);
    return NextResponse.json({ error: 'Failed to create goal' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    if (!id) return NextResponse.json({ error: 'Goal ID required' }, { status: 400 });

    await prisma.goal.deleteMany({
      where: { id, userId }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting goal:", error);
    return NextResponse.json({ error: 'Failed to delete goal' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    if (!data.id) return NextResponse.json({ error: 'Goal ID required' }, { status: 400 });

    const deadline = data.deadline ? new Date(data.deadline) : undefined;
    const validDeadline = deadline && !isNaN(deadline.getTime()) ? deadline : undefined;

    const updateData: any = {};
    if (data.title !== undefined && typeof data.title === 'string') updateData.title = data.title.trim();
    if (data.type !== undefined && typeof data.type === 'string') updateData.type = data.type;
    if (data.target !== undefined) updateData.target = Math.max(1, parseFloat(data.target) || 1);
    if (data.currentProgress !== undefined) updateData.currentProgress = Math.max(0, parseFloat(data.currentProgress) || 0);
    if (validDeadline !== undefined) updateData.deadline = validDeadline;

    await prisma.goal.updateMany({
      where: { id: data.id, userId },
      data: updateData
    });

    const updatedGoal = await prisma.goal.findFirst({
      where: { id: data.id, userId }
    });

    return NextResponse.json({ success: true, goal: updatedGoal });
  } catch (error) {
    console.error("Error updating goal:", error);
    return NextResponse.json({ error: 'Failed to update goal' }, { status: 500 });
  }
}
