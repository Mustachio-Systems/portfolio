import { Metadata } from 'next';
import Privacy from '@/components/client/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mustachio Systems',
  description: 'Learn about the privacy practices of Mustachio Systems.',
};  

export default function PrivacyPage() {
  return <Privacy />;
}