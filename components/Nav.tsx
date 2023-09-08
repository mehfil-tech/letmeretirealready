"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="sticky top-0 flex w-full p-4 gap-3 bg-white dark:bg-gray-800">
      {/* App title */}
      <Link href="/" className="flex-center gap-3">
        <p className="text-2xl font-mono text-center">let me retire already</p>
      </Link>
      <ThemeSwitcher />
      {/* Desktop Navigation */}
      <div className="sm:flex hidden"></div>
    </nav>
  );
}

export default Nav;
