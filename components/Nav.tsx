"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { IoMenu, IoClose } from "react-icons/io5";

function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="p-4 flex justify-between">
      <Link href="/">
        <p className="text-2xl font-mono">lmra</p>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/home">
          <p>Home</p>
        </Link>
        <Link href="/savings">
          <p>Savings</p>
        </Link>
        <Link href="/expenses">
          <p>Expenses</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
