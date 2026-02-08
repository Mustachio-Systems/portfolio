import { Metadata } from 'next';
import TermsOfService from '@/components/client/terms';

export const metadata: Metadata = {
  title: 'Terms of Service - Mustachio Systems',
  description: 'Read the Terms of Service for Mustachio Systems, outlining our policies, intellectual property rights, and limitations of liability.',
};

export default function TermsPage() {
  return <TermsOfService />;
}