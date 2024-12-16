import Image from "next/image";
import Logo from "/public/gold-logo.svg";
import InstagramIcon from "@/components/icons/Instagram";
import Link from "next/link";
import StarBeige from "/public/star-beige.svg";
import FacebookIcon from "@/components/icons/Facebook";
import { TransitionLink } from "@/utils/TransitionLink";

export default async function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 md:px-8 flex flex-col items-center md:flex-row md:justify-around md:items-start w-full bg-SecondaryBeige text-black text-[16px] shadow-custom py-[70px] md:py-[120px] text-center md:text-start">
      <Image
        src={StarBeige}
        alt="Star beige"
        width={75}
        height={75}
        className="absolute top-[-37px] left-0 right-0 mx-auto "
      />
      <div className="md:pr-[50px]">
        <Image
          className="mb-[70px]"
          src="/footer-logo.webp"
          alt="Logo"
          width={100}
          height={120}
        />
        <p className="font-light text-[16px] mb-4">Find os på:</p>
        <div className="flex gap-[15px]">
          <TransitionLink href="https://www.facebook.com/aftenstjerner">
            <FacebookIcon />
          </TransitionLink>
          <TransitionLink href="https://www.instagram.com/aftenstjerner/">
            <InstagramIcon />
          </TransitionLink>
        </div>
      </div>
      <div className="mt-6">
        <p>Aftenstjerner ApS</p>
        <p className="uppercase mt-[10px] mb-[25px]">cvr:43660098</p>
        <TransitionLink href="mailto:info@aftenstjerner.dk">
          info@aftenstjerner.dk
        </TransitionLink>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Shop</p>
        <TransitionLink href="/vare/barnets-bog">
          <p>Barnets bog</p>
        </TransitionLink>
        <TransitionLink href="/vare/barnets-bog">
          <p>Mindeæske</p>
        </TransitionLink>
        <TransitionLink href="/vare/barnets-bog">
          <p>Bundle</p>
        </TransitionLink>
        <TransitionLink href="/vare/barnets-bog">
          <p>2. sortering</p>
        </TransitionLink>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Læs mere</p>
        <TransitionLink href="/at-miste">
          <p>At miste</p>
        </TransitionLink>
        <TransitionLink href="/blog">
          <p>Blog</p>
        </TransitionLink>
        <TransitionLink href="/historien">
          <p>Historien bag</p>
        </TransitionLink>
        <TransitionLink href="/kontakt">
          <p>Offentlige/erhverv --pil</p>
        </TransitionLink>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Information</p>
        <TransitionLink href="/">
          <p>Handelsbetingelser</p>
        </TransitionLink>
        <TransitionLink href="/">
          <p>Levering og retur</p>
        </TransitionLink>
        <TransitionLink href="/">
          <p>Forlaget fortæl</p>
        </TransitionLink>
        <TransitionLink href="/">
          <p>Ofte stillede spørgsmål</p>
        </TransitionLink>
      </div>
    </footer>
  );
}
