"use client";
import Link from "next/link";
import { MenuItem } from "@/gql/graphql";
import Image from "next/image";
import LogoGreen from "@/public/green-logo.svg";
import LogoBeige from "@/public/beige-logo.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import Cart from "../Cart/Cart";

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
      className={`w-full h-[90px] shadow-custom hidden md:block ${
        pathName === "/at-miste/" ? "bg-PrimaryGreen" : "bg-white"
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
              <Link
                itemProp="url"
                href={item.uri}
                key={index}
                className={`text-[18px] ${
                  isActive
                    ? pathName === "/at-miste/"
                      ? "text-Beige border-b border-Beige"
                      : "text-PrimaryGreen border-b border-PrimaryGreen"
                    : pathName === "/at-miste/"
                    ? "text-white border-b border-PrimaryGreen hover:text-Beige hover:border-Beige cursor-pointer"
                    : "text-black border-b border-white hover:text-PrimaryGreen hover:border-PrimaryGreen cursor-pointer"
                }`}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <Link href="/">
          <Image
            src={pathName === "/at-miste/" ? LogoBeige : LogoGreen}
            alt="logo"
            width={125}
            height={52}
            className=""
            priority
          />
        </Link>
        <div className="flex justify-end gap-20 w-[400px]">
          {rightMenu.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;
            const isActive = pathName === item.uri;
            return (
              <Link
                itemProp="url"
                href={item.uri}
                key={index}
                className={`text-[18px] ${
                  isActive
                    ? pathName === "/at-miste/"
                      ? "text-Beige border-b border-Beige"
                      : "text-PrimaryGreen border-b border-PrimaryGreen"
                    : pathName === "/at-miste/"
                    ? "text-white border-b border-PrimaryGreen hover:text-Beige hover:border-Beige cursor-pointer"
                    : "text-black border-b border-white hover:text-PrimaryGreen hover:border-PrimaryGreen cursor-pointer"
                }`}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
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
