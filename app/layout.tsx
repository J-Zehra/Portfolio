import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jazen | Portfolio",
  description: "Portfolio Website",
  icons: "/logo_symbol.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
