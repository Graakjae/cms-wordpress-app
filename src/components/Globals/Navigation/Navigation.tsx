import Link from "next/link";
import { print } from "graphql/language/printer";
import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import gql from "graphql-tag";
import Image from "next/image";
import Logo from "@/public/green-logo.svg";
import SearchIcon from "@/public/search-icon.svg";
import ShoppingIcon from "@/public/shopping-bag.svg";

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

  return { primaryMenu, rightMenu };
}

export default async function Navigation() {
  const { primaryMenu, rightMenu } = await getData();

  return (
    <nav
      className="w-full h-[90px] bg-white text-black shadow-custom"
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="flex justify-between items-center h-[90px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex gap-20 w-[400px] ">
          {primaryMenu.nodes.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;
            return (
              <Link
                itemProp="url"
                href={item.uri}
                key={index}
                target={item.target || "_self"}
                className="text-[18px]"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <Link href="/">
          <Image src={Logo} alt="logo" width={125} height={52} className="" />
        </Link>
        <div className="flex justify-end gap-20 w-[400px]">
          {rightMenu.nodes.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;
            return (
              <Link
                itemProp="url"
                href={item.uri}
                key={index}
                target={item.target || "_self"}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            );
          })}
          <div className="flex gap-[38px] items-center">
            <Image
              src={SearchIcon}
              alt="search"
              width={23}
              height={23}
              className=""
            />
            <Image
              src={ShoppingIcon}
              alt="shopping"
              width={23}
              height={23}
              className=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
