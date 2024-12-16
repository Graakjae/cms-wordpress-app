"use client";
import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("#page-transition-box");

    setIsLoading(true);

    body?.classList.add("page-transition");

    await sleep(250);

    router.push(href);

    await sleep(500);
    setIsLoading(false);
    body?.classList.remove("page-transition");
  };

  return (
    <>
      {isLoading && (
        <div
          id="loading-spinner"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <ClipLoader color="#005E61" size={50} />
        </div>
      )}
      <Link
        {...props}
        href={href}
        onClick={handleTransition}
        className={`${className}`}
      >
        {children}
      </Link>
    </>
  );
};
