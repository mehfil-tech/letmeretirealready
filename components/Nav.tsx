"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full p-4 bg-slate-400 gap-3">
      {/* App title */}
      <Link href="/" className="flex-center gap-2">
        <p className="text-2xl text-white font-mono text-center">
          let me retire already
        </p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden"></div>
    </nav>
  );
}

export default Nav;
