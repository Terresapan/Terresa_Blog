'use server';
import sql from 'better-sqlite3';
import { redirect } from 'next/navigation';

const db = sql('./users.db');

async function saveSubscription(subscription: { name: string; email: string }) {
  const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  insert.run(subscription.name, subscription.email);
}

export async function handleSubscription(formData: FormData) {
  const subscription = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
  };

  await saveSubscription(subscription);

   // Clear the form fields
   for (const [name, _] of formData) {
    formData.set(name, '');
  }

  redirect('/');
} 