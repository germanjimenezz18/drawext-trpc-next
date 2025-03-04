import { Settings } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">DrawExt</span>
          <span className="rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-800 px-2 py-1 text-xs text-white">
            Beta
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Canvas
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Documentation
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Settings></Settings>
      </div>
    </div>
  );
}
