"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { IoMenu, IoClose } from "react-icons/io5";
import { signInWithPopup, auth, GoogleAuthProvider } from "../lib/firebase";
import useAuth from "@lib/useAuth";

function Nav() {
  const isUserLoggedIn = true;
  const { user, loading } = useAuth();
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };
  console.log(user);
  return (
    <nav className="p-4 flex justify-between items-center">
      <Link href="/" className="p-1.5 border-[1.5px] rounded-md">
        <p className="text-xs font-mono">
          let me
          <br />
          retire
          <br />
          already
        </p>
      </Link>
      {/* Add a button for google login */}

      {loading ? (
        <div />
      ) : user ? (
        <Link href="/user">
          <img
            className="rounded-full h-10 w-10"
            src={user.photoURL ?? undefined}
            alt={user.displayName || "User's profile"}
          />
        </Link>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      {/* <div className="flex gap-4 items-center">
        <Link href="/home">
          <p>Home</p>
        </Link>
        <Link href="/savings">
          <p>Savings</p>
        </Link>
        <Link href="/expenses">
          <p>Expenses</p>
        </Link>
      </div> */}
    </nav>
  );
}

export default Nav;
