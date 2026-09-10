import { auth } from '@clerk/nextjs/server';
import ResourcesClient from './ResourcesClient';

export default async function ResourcesPage() {
  await auth.protect();
  return <ResourcesClient />;
}