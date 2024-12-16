"use client";
import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    setIsLoading(true);
    const body = document.querySelector("#page-transition-box");

    body?.classList.add("page-transition");

    await sleep(250);
    router.push(href);
    await sleep(250);

    body?.classList.remove("page-transition");
    setIsLoading(false);
  };

  return (
    <>
      <Link
        {...props}
        href={href}
        onClick={handleTransition}
        className={`${className}`}
      >
        {children}
      </Link>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner">spinner..</div>
        </div>
      )}
    </>
  );
};
