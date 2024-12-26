import Layout from "@/components/layout";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { Manjari } from "next/font/google";

import Providers from "./providers";

const quicksand = Quicksand({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const manjari = Manjari({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Benjamin Skinner",
  description: "Personal website of Benjamin Skinner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manjari.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
