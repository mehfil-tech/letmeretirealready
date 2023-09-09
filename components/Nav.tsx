"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { IoMenu, IoClose } from "react-icons/io5";

function Nav() {
  const isUserLoggedIn = true;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleMenu = () => {
    setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);
  };
  return (
    <nav className="sticky top-0 flex w-full gap-3 align-middle bg-white dark:bg-gray-800">
      {/* App title */}
      <div className="z-20 w-full p-4 justify-between flex bg-inherit">
        <Link href="/" className="z-10" onClick={toggleMenu}>
          <p className="text-2xl font-mono">lmra</p>
        </Link>
        <button className="text-2xl sm:hidden" onClick={toggleMenu}>
          {hamburgerOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div
        className={
          "absolute w-full sm:h-auto sm:w-auto sm:opacity-100 sm:top-0 sm:left-20 sm:right-0 justify-center sm:m-auto gap-4 sm:gap-8 z-10 sm:z-30 translate sm:translate-y-0 flex flex-col sm:flex-row bg-inherit shadow-md sm:shadow-none p-4 duration-500" +
          (hamburgerOpen
            ? " translate-y-14 opacity-100"
            : " translate-y-[-100%] opacity-0")
        }
      >
        <Link href="/info" onClick={toggleMenu}>
          <p className="text-xl">Info</p>
        </Link>
        <Link href="/savings" onClick={toggleMenu}>
          <p className="text-xl">Savings</p>
        </Link>
        <Link href="/expenses" onClick={toggleMenu}>
          <p className="text-xl">Expenses</p>
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Nav;
