import { Metadata } from 'next';
import Process from '@/components/client/process';

export const metadata: Metadata = {
  title: "Process | Mustachio Systems",
  description: "Learn about the engineering process used by Mustachio Systems.",
};

export default function ProcessPage() {
  return <Process />;
}