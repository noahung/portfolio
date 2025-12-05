import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Simplified version if dependencies are missing in environment, 
// but assuming standard setup or providing a fallback implementation
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
