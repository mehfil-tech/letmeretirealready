"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit right-5 top-2 p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-slate-400`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <IoSunnyOutline /> : <IoMoon />}
    </button>
  );
};
