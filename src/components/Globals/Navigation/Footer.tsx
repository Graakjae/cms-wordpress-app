import Image from "next/image";
import Logo from "@/public/gold-logo.svg";
import InstagramIcon from "@/components/icons/Instagram";
import Link from "next/link";
import StarBeige from "@/public/star-beige.svg";
import FacebookIcon from "@/components/icons/Facebook";

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
          src={Logo}
          alt="Logo"
          width={100}
          height={120}
        />
        <p className="font-light text-[16px] mb-4">Find os på:</p>
        <div className="flex gap-[15px]">
          <Link href="https://www.facebook.com/aftenstjerner">
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com/aftenstjerner/">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <p>Aftenstjerner ApS</p>
        <p className="uppercase mt-[10px] mb-[25px]">cvr:43660098</p>
        <Link href="mailto:info@aftenstjerner.dk">info@aftenstjerner.dk</Link>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Shop</p>
        <Link href="/vare/barnets-bog">
          <p>Barnets bog</p>
        </Link>
        <Link href="/vare/barnets-bog">
          <p>Mindeæske</p>
        </Link>
        <Link href="/vare/barnets-bog">
          <p>Bundle</p>
        </Link>
        <Link href="/vare/barnets-bog">
          <p>2. sortering</p>
        </Link>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Læs mere</p>
        <Link href="/at-miste">
          <p>At miste</p>
        </Link>
        <Link href="/blog">
          <p>Blog</p>
        </Link>
        <Link href="/historien">
          <p>Historien bag</p>
        </Link>
        <Link href="/kontakt">
          <p>Offentlige/erhverv --pil</p>
        </Link>
      </div>
      <div className="flex flex-col gap-[10px] mt-6">
        <p className="font-bold mb-1">Information</p>
        <Link href="/">
          <p>Handelsbetingelser</p>
        </Link>
        <Link href="/">
          <p>Levering og retur</p>
        </Link>
        <Link href="/">
          <p>Forlaget fortæl</p>
        </Link>
        <Link href="/">
          <p>Ofte stillede spørgsmål</p>
        </Link>
      </div>
    </footer>
  );
}
