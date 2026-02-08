import { Metadata } from 'next';
import AboutClient from '@/components/client/about';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Mustachio Systems, our mission, and our team.',
};

export default function AboutPage() {
  return <AboutClient />;
}