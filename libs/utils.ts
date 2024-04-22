import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: 'INR'
})

export const bannerColors = ["bg-green-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-orange-50",
  "bg-red-50",
  "bg-indigo-50"]

export const cardColors = ["bg-green-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-orange-50",
  "bg-red-50",
  "bg-indigo-50",
  "bg-cyan-50",
  "bg-black-50"]