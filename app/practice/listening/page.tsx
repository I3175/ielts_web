import { auth } from '@clerk/nextjs/server';
import ListeningClient from './ListeningClient';

export default async function ListeningPracticePage() {
  await auth.protect();
  return <ListeningClient />;
}