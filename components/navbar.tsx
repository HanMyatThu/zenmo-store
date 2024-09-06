"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Category, Store } from "@/types";
import getCategories from "@/actions/get-categories";
import getStoreInfo from "@/actions/get-store";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";

import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [store, setStore] = useState<Store>({} as Store);

  useEffect(() => {
    const fetchInitialData = async () => {
      const result = await getCategories();
      const store = await getStoreInfo();
      setStore(store);
      setCategories(result);
    };

    fetchInitialData();
  }, []);

  return (
    <nav className="sticky top-0 z-10 py-4 bg-white border-b-2 shadow-md border-accent/10 shadow-accent/5">
      <Container>
        <section className="relative flex items-center h-16 px-4 sm:px-6">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
          <ul className="w-full px-3 py-2 text-xl font-bold md:w-1/3 lg:w-1/5">
            <Link href="/" className="flex ml-r lg:ml-0 gap-x-2">
              <h1 className="text-xl font-extrabold bg-gradient-to-bl from-green-500 to-blue-800 bg-clip-text text-transparent leading-normal">
                {store.name}
              </h1>
            </Link>
          </ul>

          {/* Normal navbar on md screens and up */}
          <div className="w-full">
            <MainNav data={categories} />
          </div>

          {/* Mobile navbar on sm screens */}
          <div className="md:hidden">
            <MainNav
              data={categories}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>

          <NavbarActions />
        </section>
      </Container>
    </nav>
  );
};

export default Navbar;
