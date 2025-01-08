"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const body = document.querySelector("#page-transition-container");

    body?.classList.remove("page-transition");
  }, []);

  return <>{children}</>;
}
