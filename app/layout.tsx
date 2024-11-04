import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers/providers";
import Navbar from "@/components/bar/navbar";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artha Finance",
  description: "Lending and borrowing.",
  // icons: {
  //   icon: '/favicon.ico',
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
          <Navbar />
          <div className="px-10 sm:px-20 min-h-screen w-full">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
