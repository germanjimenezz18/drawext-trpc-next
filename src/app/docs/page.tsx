import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="flex-1 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50 hidden md:block p-6 space-y-4">
        <nav className="space-y-2">
          <div className="font-medium text-sm text-gray-500 px-2">
            Getting Started
          </div>
          <a
            href="#introduction"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Introduction
          </a>
          <a
            href="#getting-started"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Quick Start
          </a>

          <div className="font-medium text-sm text-gray-500 px-2 mt-6">
            Features
          </div>
          <a
            href="#drawing-tools"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Drawing Tools
          </a>
          <a
            href="#saving"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Saving & Loading
          </a>

          <div className="font-medium text-sm text-gray-500 px-2 mt-6">
            Help
          </div>
          <a
            href="#troubleshooting"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Troubleshooting
          </a>
          <a
            href="#best-practices"
            className="block px-2 py-1 text-sm hover:text-blue-600"
          >
            Best Practices
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 max-w-3xl mx-auto py-12 px-6">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            DrawExt Documentation
          </h1>

          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              DrawExt is a modern collaborative drawing application powered by
              tldraw and tRPC. Create, save, and share your drawings with
              real-time synchronization.
            </div>
            <p className="text-gray-600 leading-relaxed">
              DrawExt provides a seamless drawing experience with real-time
              synchronization capabilities. Built with modern web technologies,
              it offers a robust platform for digital artwork creation.
            </p>
          </section>

          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <div className="bg-white border rounded-lg shadow-sm">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                  <p>
                    Navigate to the{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                      drawing interface
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <p>Start drawing on the blank canvas</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                  <p>Use the toolbar to access different tools</p>
                </div>
              </div>
            </div>
          </section>

          <section id="drawing-tools" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Drawing Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Basic Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Pen and pencil
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Shapes
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">Advanced Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Layer management
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Group operations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional sections follow the same pattern... */}

          <footer className="mt-16 pt-8 border-t">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>© 2024 DrawExt. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
