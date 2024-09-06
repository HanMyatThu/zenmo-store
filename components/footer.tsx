import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-48 mt-10 bg-stone-950">
      <nav className="flex items-center justify-center w-full py-6 border-b-2 border-zinc-700 max-w-7xl">
        <section className="flex pr-2 md:pr-0 gap-x-6">
          <Link href="/">
            <Facebook color="white" size={36} />
          </Link>
          <Link href="/">
            <Youtube color="white" size={36} />
          </Link>
          <Link href="/">
            <Instagram color="white" size={36} />
          </Link>
        </section>
        <div className="hidden mr-20 md:flex"></div>
      </nav>
      <section className="flex py-6">
        <p className="text-xs text-white">
          &copy; 2024 Zenmo, Draz. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
