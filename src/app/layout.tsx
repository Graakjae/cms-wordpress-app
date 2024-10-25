import { draftMode } from "next/headers";
import { Source_Sans_3 } from "next/font/google";

import "@/app/globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";
import OverNavigation from "@/components/Globals/Navigation/OverNavigation";
import Footer from "@/components/Globals/Navigation/Footer";

const source = Source_Sans_3({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={source.className}>
        {isEnabled && <PreviewNotice />}
        <div className="fixed top-0 z-50 w-full">
          <OverNavigation />
          <Navigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
