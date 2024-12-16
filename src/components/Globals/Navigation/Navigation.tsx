"use client";
import { MenuItem } from "@/gql/graphql";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchIcon from "@/components/icons/SearchIcon";
import Cart from "../Cart/Cart";
import { TransitionLink } from "@/utils/TransitionLink";

interface NavigationProps {
  primaryMenu: MenuItem[];
  rightMenu: MenuItem[];
}

export default function Navigation({
  primaryMenu,
  rightMenu,
}: NavigationProps) {
  const pathName = usePathname();
  return (
    <nav
      className={`w-full h-[90px] shadow-custom hidden lg:block ${
        pathName === "/at-miste" ? "bg-PrimaryGreen" : "bg-white"
      } `}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="flex justify-between items-center h-[90px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex gap-20 w-[400px] ">
          {primaryMenu.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;
            const isActive = pathName === item.uri;
            return (
              <TransitionLink
                href={item.uri}
                key={index}
                className={`text-[18px] ${
                  isActive
                    ? pathName === "/at-miste"
                      ? "text-PrimaryBeige border-b border-PrimaryBeige"
                      : "text-PrimaryGreen border-b border-PrimaryGreen"
                    : pathName === "/at-miste"
                    ? "text-white border-b border-PrimaryGreen hover:text-Beige hover:border-Beige cursor-pointer"
                    : "text-black border-b border-white hover:text-PrimaryGreen hover:border-PrimaryGreen cursor-pointer"
                }`}
              >
                <span itemProp="name">{item.label}</span>
              </TransitionLink>
            );
          })}
        </div>
        <TransitionLink href="/">
          <Image
            src={
              pathName === "/at-miste" ? "/beige-logo.png" : "/green-logo.png"
            }
            alt="logo"
            width={125}
            height={52}
            priority
          />
        </TransitionLink>
        <div className="flex justify-end gap-20 w-[400px]">
          {rightMenu.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;
            const isActive = pathName === item.uri;
            return (
              <TransitionLink
                href={item.uri}
                key={index}
                className={`text-[18px] ${
                  isActive
                    ? pathName === "/at-miste"
                      ? "text-Beige border-b border-PrimaryBeige"
                      : "text-PrimaryGreen border-b border-PrimaryGreen"
                    : pathName === "/at-miste"
                    ? "text-white border-b border-PrimaryGreen hover:text-PrimaryBeige hover:border-PrimaryBeige cursor-pointer"
                    : "text-black border-b border-white hover:text-PrimaryGreen hover:border-PrimaryGreen cursor-pointer"
                }`}
              >
                <span itemProp="name">{item.label}</span>
              </TransitionLink>
            );
          })}
          <div className="flex gap-[38px] items-center">
            <SearchIcon pathName={pathName} />
            <Cart pathName={pathName} />
          </div>
        </div>
      </div>
    </nav>
  );
}
