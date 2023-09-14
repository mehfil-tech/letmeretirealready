"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { IoPerson } from "react-icons/io5";
import { signInWithPopup, auth, GoogleAuthProvider } from "../lib/firebase";
import useAuth from "@lib/useAuth";

function Nav() {
  const { user, loading } = useAuth();
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };
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
      ) : !user?.isAnonymous ? (
        <Link className="flex items-center gap-1" href="/user">
          <img
            className="rounded-full h-10 w-10"
            src={user?.photoURL ?? undefined}
            alt={user?.displayName || "User's profile"}
          />
        </Link>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="flex flex-col items-center"
        >
          <button className="text-xl bg-black p-2 rounded-full ">
            <IoPerson />
          </button>
        </button>
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
