import { auth } from '@clerk/nextjs/server';
import SpeakingClient from './SpeakingClient';

export default async function SpeakingPracticePage() {
  await auth.protect();
  return <SpeakingClient />;
}