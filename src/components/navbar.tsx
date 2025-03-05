import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <button className="group relative drop-shadow-lg rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-1 text-white ">
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                DrawExt
              </div>
              <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                DrawExt
              </div>
            </span>
          </button>
        </Link>
        <nav className="hidden gap-6 md:flex">
          
          <Link
            href="/settings"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
}
