import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toIndicator(array: any[]) {
  if (array.length === 0) return undefined;
  if (array.length >= 100) return "*";
  return array.length.toLocaleString();
}
