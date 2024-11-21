"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Hamburger from "hamburger-react";
import { RemoveScroll } from "react-remove-scroll";
import { MenuItem } from "@/gql/graphql";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Image from "next/image";
import Divider from "@/components/ui/divider";

interface BurgerMenuProps {
  mobileMenu: MenuItem[];
}

export default function BurgerMenu({ mobileMenu }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RemoveScroll
      enabled={isOpen}
      className="md:hidden block relative bg-white h-[65px] px-4 shadow-lg"
    >
      <div className="flex justify-between items-center z-10 relative">
        <div>
          <AnimatePresence>
            {isOpen && (
              <div className="z-20 ">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ duration: 0.2, opacity: 0 }}
                  className="bg-black/50 inset-0 fixed w-[100svw] "
                  onClick={() => setIsOpen(false)}
                />
                <m.aside
                  initial={{ x: "-100%" }}
                  animate={{
                    x: "0",
                    transition: { delay: 0.2, type: "tween" },
                  }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.2 }}
                  className={`w-[80%] h-full  top-0 left-0 p-8 flex flex-col fixed bg-white z-30 overflow-y-auto
                                `}
                >
                  <div className="text-center md:text-end flex-col gap-4 mt-[100px]">
                    {mobileMenu &&
                      mobileMenu.map(({ label, uri }, i) => (
                        <div className="">
                          <Link
                            href={uri || "/"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.25,
                              delay: i / 10,
                            }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="my-[15px] relative block text-[20px] text-black transition-colors duration-200 w-fit after:content-[''] after:absolute after:w-[0] after:bottom-0 after:left-0 after:h-[4px] after:mt-2 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                          >
                            {label}
                          </Link>
                          <div className="w-full">
                            <div className="border-b border-[#C6C6C6]"></div>
                          </div>
                        </div>
                      ))}
                    <div className=" absolute bottom-[50px]">
                      <div className="flex items-center gap-[15px]">
                        <p className="font-light text-[16px]">Find os på:</p>
                        <FacebookIcon />
                        <InstagramIcon />
                      </div>
                    </div>
                  </div>
                </m.aside>
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            <m.button
              whileTap={{ scale: 0.85 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 7,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  ease: [0, 0.71, 0.2, 1.01],
                  duration: 0.2,
                  scale: 0,
                },
              }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex justify-start items-center w-full ml-[-6px]  duration-200  z-50 h-[65px] "
              name="menu-button"
            >
              <Hamburger
                toggled={isOpen}
                toggle={() => setIsOpen(!isOpen)}
                rounded
                color={"black"}
              />
            </m.button>
          </AnimatePresence>
        </div>
        {/* <Link href="/">
          <Image
            src={pathName === "/at-miste/" ? LogoBeige : LogoGreen}
            alt="logo"
            width={80}
            height={30}
            className=""
            priority
          />
        </Link> */}
      </div>
    </RemoveScroll>
  );
}
