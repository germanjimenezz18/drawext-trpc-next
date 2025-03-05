import "./globals.css";
import { TRPCProvider } from "../providers/trpc-provider";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased ">
        <Toaster
          position="top-right"
          richColors
          theme="light"
          toastOptions={{ duration: 2500 }}
        />
        <TRPCProvider>
          <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-200  to-indigo-400">
            <header className="flex w-full items-center py-2.5 px-10  bg-gradient-to-r from-white/20 to-transparent text-white">
              <Navbar />
            </header>
            {children}
          </div>
        </TRPCProvider>
      </body>
    </html>
  );
}
