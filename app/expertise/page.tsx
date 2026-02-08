import { Metadata } from 'next';
import ExpertiseClient from '@/components/client/expertise';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Discover the technical capabilities and services offered by Mustachio Systems.',
};

export default function ExpertisePage() {
  return <ExpertiseClient />;
}