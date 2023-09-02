"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
function Nav() {
    const isUserLoggedIn = true;
    return (
        <nav className="flex-between w-full mb-16 pt-3 bg-blue-300 gap-3">
            {/* App title */}
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    className="rounded-full"
                    src={"https://lh3.googleusercontent.com/ogw/AGvuzYY8efmbK-ZlhBIcAjUuvw99RbVOiil3e3fO1qZvApc=s64-c-mo"}
                    width={30}
                    height={30}
                    alt="Sanu"
                />
                <p className="text-xl">Let me retire already</p>
            </Link>
            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
            </div>
        </nav>
    );
}

export default Nav;