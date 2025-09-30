import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import NextTopLoader from "nextjs-toploader";
import { Header } from "@/app/components";

export const metadata: Metadata = {
  title: "MORDADINO | مردادینو",
  description: "مردادینو: محصولتو از هر جای دنیا پیدا کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR;
  return (
    <html lang="fa" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <NextTopLoader color={primaryColor} showSpinner={false} />
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
