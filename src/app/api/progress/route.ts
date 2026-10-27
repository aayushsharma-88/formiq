import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const records = await prisma.progressRecord.findMany({
      where: { userId },
      orderBy: { date: 'asc' }
    });
    return NextResponse.json(records);
  } catch (error) {
    console.error("Error fetching progress records:", error);
    return NextResponse.json({ error: 'Failed to fetch progress records' }, { status: 500 });
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

    const weight = data.weight ? parseFloat(data.weight) : null;
    const bodyFat = data.bodyFat ? parseFloat(data.bodyFat) : null;
    const notes = typeof data.notes === 'string' ? data.notes.trim() : null;

    const record = await prisma.progressRecord.create({
      data: {
        userId,
        weight,
        bodyFat,
        notes,
        date: data.date ? new Date(data.date) : new Date()
      }
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error("Error creating progress record:", error);
    return NextResponse.json({ error: 'Failed to create progress record' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const userId = req.headers.get('x-user-id')?.trim().toLowerCase();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    if (!id) return NextResponse.json({ error: 'Record ID required' }, { status: 400 });

    await prisma.progressRecord.deleteMany({
      where: { id, userId }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting progress record:", error);
    return NextResponse.json({ error: 'Failed to delete progress record' }, { status: 500 });
  }
}
