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
      className={`h-10 py-2 px-4 mb-4 flex justify-between items-center w-full rounded-md bg-gray-200 dark:bg-gray-900`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="pr-2">
        {theme === "light" ? (
          <div className="self-center text-black transition-opacity">Light</div>
        ) : (
          <div className="self-center text-white transition-opacity">Dark</div>
        )}
      </div>
      {theme === "light" ? <IoSunnyOutline /> : <IoMoon />}
    </button>
  );
};
