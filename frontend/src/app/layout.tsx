import type { Metadata } from "next";
import "./globals.css";
import { APP } from "@/config/app.config";
import { QueryProvider } from "@/provider/query.provider";

export const metadata: Metadata = {
  title: APP.NAME,
  description: APP.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
