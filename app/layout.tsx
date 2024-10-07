import type { Metadata } from "next";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import Header from "@/components/non-reusables/header/header";
import ChakraProviderWrapper from "@/components/wrappers/chakraWrapper";
import ProgressProviderWrapper from "@/components/wrappers/progressWrapper";
import StateWrapper from "@/components/wrappers/stateWrapper";
import QueryWrapper from "@/components/wrappers/queryWrapper";
import ScrollObserver from "@/components/non-reusables/scrollObserver";

export const metadata: Metadata = {
  title: "Jazen | Developer, Innovator, Tech Enthusiast",
  description:
    "Welcome to my digital domain where I share insights on web development, cutting-edge technology, and innovative projects. Dive into my world of creativity, code, and constant learning.",
  icons: {
    icon: "/logo.png",
  },
  themeColor: "#6FBFBF",
  metadataBase: new URL("https://jazenm.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderWrapper>
          <ProgressProviderWrapper>
            <QueryWrapper>
              <StateWrapper>
                <ScrollObserver>
                  <Header />
                  {children}
                </ScrollObserver>
              </StateWrapper>
            </QueryWrapper>
          </ProgressProviderWrapper>
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
