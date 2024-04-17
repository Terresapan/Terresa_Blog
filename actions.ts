'use server';
import { redirect } from 'next/navigation';
import prisma  from './prisma';

export async function handleSubscription(data: FormData) {
  const subscription = {
    name: data.get('name') as string,
    email: data.get('email') as string,
  };

  await prisma.user.create({ data: subscription });

  redirect('/');
} 