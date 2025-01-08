import { removeTrailingSlash } from "@/utils/remove-trailing-slash";
import { sleep } from "@/utils/sleep";
import { usePathname, useRouter } from "next/navigation";

export default function usePageTransition() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();

    if (
      href.includes("#") ||
      removeTrailingSlash(href) === removeTrailingSlash(pathname)
    ) {
      router.push(href);
      return;
    }

    const body = document.querySelector("#page-transition-container");

    body?.classList.add("page-transition");

    await sleep(250);
    router.push(href);
  };

  return { handleTransition };
}
