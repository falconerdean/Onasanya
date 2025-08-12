import type { Metadata } from 'next';
import { therapistProfile } from '@/data/augustadvice';

export const metadata: Metadata = {
  title: therapistProfile.companyName,
  description: 'Professional counseling services for mental health, substance abuse, and men\'s mental health.',
};