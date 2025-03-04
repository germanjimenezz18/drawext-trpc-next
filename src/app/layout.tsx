import "./globals.css";
import { TRPCProvider } from "../providers/trpc-provider";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" richColors theme="light" />
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
