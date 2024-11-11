import { draftMode } from "next/headers";
import { Source_Sans_3 } from "next/font/google";

import "@/app/globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";
import OverNavigation from "@/components/Globals/Navigation/OverNavigation";
import Footer from "@/components/Globals/Navigation/Footer";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { RootQueryToMenuItemConnection } from "@/gql/graphql";
import { CartProvider } from "@/components/Globals/Cart/context/CartContext";

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
    }
  `;

  const { primaryMenu, rightMenu } = await fetchGraphQL<{
    primaryMenu: RootQueryToMenuItemConnection;
    rightMenu: RootQueryToMenuItemConnection;
  }>(print(menuQuery));

  if (primaryMenu === null || rightMenu === null) {
    throw new Error("Failed to fetch data");
  }

  return { primaryMenu: primaryMenu.nodes, rightMenu: rightMenu.nodes };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();
  const { primaryMenu, rightMenu } = await getData();

  return (
    <html lang="en">
      <body className={source.className}>
        <CartProvider>
          {isEnabled && <PreviewNotice />}
          <div className="fixed top-0 z-50 w-full">
            <OverNavigation />
            <Navigation primaryMenu={primaryMenu} rightMenu={rightMenu} />
          </div>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
