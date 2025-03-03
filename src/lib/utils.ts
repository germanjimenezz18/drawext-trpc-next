import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Editor } from "tldraw";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function editorToB64Image (editor : Editor)  {
  const shapeIds = editor.getCurrentPageShapeIds()
  if (shapeIds.size === 0) return
  const { blob } = await editor.toImage(Array.from(shapeIds), { format: 'png', background: false })
  const base64 = await blobToBase64(blob)
  return base64
}