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
    <nav className="p-4 flex justify-between items-center sticky top-0 w-full bg-white dark:bg-gray-800">
      <Link
        href="/"
        className="p-.5 h-12 w-12 border-[1px] border-black dark:border-white flex justify-center items-center"
      >
        <p className="text-[9px] leading-snug font-bold">
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
            className="rounded-full h-12 w-12"
            src={user?.photoURL ?? undefined}
            alt={user?.displayName || "User's profile"}
          />
        </Link>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="flex h-12 w-12 flex-col items-center"
        >
          <button className="text-xl bg-black p-2 rounded-full ">
            <IoPerson />
          </button>
        </button>
      )}
    </nav>
  );
}

export default Nav;
