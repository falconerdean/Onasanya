import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Insurance, InsuranceProviderName } from '@/types';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function convertInsuranceNamesToTypes(insuranceNames: string[]): Insurance[] {
  const insuranceMap: Record<string, { logo: string; width: number }> = {
    'Aetna': { logo: '/images/logos/aetna.png', width: 150 },
    'BlueCross BlueShield': { logo: '/images/logos/BCBSMA_Logo.png', width: 150 },
    'UnitedHealthcare UHC | UBH': { logo: '/images/logos/united-healthcare.png', width: 150 },
    'Carelon': { logo: '/images/logos/carelon-logo.png', width: 150 },
    'Cigna': { logo: '/images/logos/Cigna-Logo.png', width: 150 },
    'Oscar': { logo: '/images/logos/oscar.png', width: 150 },
    'Oxford Health': { logo: '/images/logos/oxford-health-plans-logo-png-transparent.png', width: 150 },
    'Quest': { logo: '/images/logos/quest-logo-light.png', width: 150 }
  };

  return insuranceNames.map(name => ({
    name,
    logo: insuranceMap[name]?.logo || '/images/logos/default.png',
    width: insuranceMap[name]?.width || 150
  }));
}
