"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full p-4 bg-blue-100 gap-3">
      {/* App title */}
      <Link href="/" className="flex gap-2 flex-center">
        <p className="text-xl">Let me retire already</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden"></div>
    </nav>
  );
}

export default Nav;
