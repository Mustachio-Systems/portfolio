import { Metadata } from 'next';
import Work from '@/components/client/work';

export const metadata: Metadata = {
  title: 'Work - My Portfolio',
  description: 'Explore my projects and professional experience in the Work section of my portfolio.',
};

export default function WorkPage() {
  return (
    <div className="work-page">
      <h1>My Work</h1>
      <Work />
    </div>
  );
}