import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(inputString: string): string {
  if (inputString.length <= 8) return inputString;

  const firstPart = inputString.slice(0, 4); 
  const lastPart = inputString.slice(-4); 
  return `${firstPart}…${lastPart}`;
}

export const formatPercent = (value: number | null) => {
  return value ? `${value.toFixed(2)}%` : 'N/A';
};

export const formatCurrency = (value: number | null) => {
  if (value === null) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};