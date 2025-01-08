"use client";
import usePageTransition from "@/hooks/use-page-transition";
import Link, { LinkProps } from "next/link";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const { handleTransition } = usePageTransition();

  return (
    <Link
      {...props}
      href={href}
      prefetch={false}
      onClick={(e) => handleTransition(e, href || "#")}
      className={`${className}`}
    >
      {children}
    </Link>
  );
};
