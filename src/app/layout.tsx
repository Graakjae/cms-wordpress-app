import { draftMode } from "next/headers";
import { Source_Sans_3 } from "next/font/google";

import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";
import OverNavigation from "@/components/Globals/Navigation/OverNavigation";
import Footer from "@/components/Globals/Navigation/Footer";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { RootQueryToMenuItemConnection } from "@/gql/graphql";
import { CartProvider } from "@/components/Globals/Cart/context/CartContext";
import BurgerMenu from "@/components/Globals/Navigation/BurgerMenu";

const source = Source_Sans_3({ subsets: ["latin"] });

async function getData() {
  const menuQuery = gql`
    query GetMenus {
      primaryMenu: menuItems(where: { location: PRIMARY_MENU }) {
        nodes {
          uri
          target
          label
        }
      }
      rightMenu: menuItems(where: { location: RIGHT_MENU }) {
        nodes {
          uri
          target
          label
        }
      }
      mobileMenu: menuItems(where: { location: MOBILE_MENU }) {
        nodes {
          uri
          target
          label
        }
      }
    }
  `;

  const { primaryMenu, rightMenu, mobileMenu } = await fetchGraphQL<{
    primaryMenu: RootQueryToMenuItemConnection;
    rightMenu: RootQueryToMenuItemConnection;
    mobileMenu: RootQueryToMenuItemConnection;
  }>(print(menuQuery));

  if (primaryMenu === null || rightMenu === null || mobileMenu === null) {
    throw new Error("Failed to fetch data");
  }

  return {
    primaryMenu: primaryMenu.nodes,
    rightMenu: rightMenu.nodes,
    mobileMenu: mobileMenu.nodes,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();
  const { primaryMenu, rightMenu, mobileMenu } = await getData();

  return (
    <html lang="en">
      <body className={`${source.className} relative`}>
        <CartProvider>
          {isEnabled && <PreviewNotice />}
          <div className="fixed top-0 z-50 w-full ">
            <OverNavigation />
            <Navigation primaryMenu={primaryMenu} rightMenu={rightMenu} />
            <BurgerMenu mobileMenu={mobileMenu} />
          </div>
          <div id="page-transition-box">{children}</div>
          <SpeedInsights />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
