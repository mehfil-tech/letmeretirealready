"use client";

import Link from "next/link";
import {
  IoBarChart,
  IoCash,
  IoClose,
  IoCloudDownload,
  IoCloudUpload,
  IoHelp,
  IoHome,
  IoInformation,
  IoMenu,
  IoOptions,
  IoPerson,
  IoSettings,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@store/user";

function NavLink({
  href,
  currentPath,
  children,
  onClick,
}: {
  href: string;
  currentPath: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const isActive = href === currentPath;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`items-center text-center px-4 py-2 border-[0.5px] text-sm w-28  ${
        isActive ? "text-gray-900 font-semibold border-gray-900" : "text-gray-500 border-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}

function Nav() {
  // TODO add login implementation
  const { user } = useUserStore();
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);
  const handleClickOutside = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuVisible
    ) {
      setMenuVisible(false);
    }
  };
  const signInWithGoogle = () => {
    // TODO Implement Google sign in
  };
  return (
    <nav className="p-6 flex justify-between items-center sticky top-0 w-full bg-white dark:bg-gray-800 z-50">
      <Link
        href={user ? "/user" : "/"}
        className={`${
          pathname === "/" ? "sm:ml-[90px]" : ""
        } py-2 px-4 border-[0.5px] border-black dark:border-white flex justify-center items-center`}
      >
        <p className="text-sm leading-snug font-semibold">
          {user?.data?.user?.email ?? "let me retire already"}
        </p>
      </Link>
      {/* Desktop menu */}
      <div
        className={
          pathname === "/" ? "hidden" : "items-center gap-4 hidden sm:block"
        }
      >
        <div className="gap-4 flex items-center">
          <NavLink href="/home" currentPath={pathname}>
            home
          </NavLink>
          <NavLink href="/savings" currentPath={pathname}>
            savings
          </NavLink>
          <NavLink href="/expenses" currentPath={pathname}>
            expenses
          </NavLink>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="block sm:hidden z-50">
        <div
          ref={menuRef}
          className={`bg-gray-800 opacity-100 flex flex-col pt-6 drop-shadow-2xl fixed top-0 right-0 h-full w-64 z-[1000000] transform ${
            menuVisible ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="px-4 py-2 flex items-center gap-2 border-[0.5px] border-l-0 border-red-400 mb-8 mr-6"
          >
            <IoClose className="text-lg text-red-400" />
            <div className="text-sm font-semibold leading-snug text-red-400">
              Close
            </div>
          </button>
          <NavLink
            href="/home"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoHome />
            Home
          </NavLink>
          <NavLink
            href="/savings"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoCloudDownload />
            Savings
          </NavLink>
          <NavLink
            href="/expenses"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoCloudUpload />
            Expenses
          </NavLink>
          <NavLink
            href="/expenses"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoBarChart />
            Goals
          </NavLink>
          <NavLink
            href="/expenses"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoInformation />
            About
          </NavLink>
          <NavLink
            href="/expenses"
            currentPath={pathname}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoHelp />
            Help
          </NavLink>
        </div>
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className={pathname === "/" ? "hidden" : ""}
        >
          <IoMenu className="text-2xl mt-0.5" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
