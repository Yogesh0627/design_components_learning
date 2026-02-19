import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names intelligently:
 * - Supports conditionals (clsx)
 * - Merges Tailwind classes safely (twMerge)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
