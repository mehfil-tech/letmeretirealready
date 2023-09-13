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
      className={`p-2 mb-4 flex rounded-full duration-200 bg-slate-300 dark:bg-slate-700`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="pr-2">
        {theme === "light" ? (
          <div className="text-sm self-center text-black transition-opacity">
            Light
          </div>
        ) : (
          <div className="text-sm self-center text-white transition-opacity">
            Dark
          </div>
        )}
      </div>
      {theme === "light" ? <IoSunnyOutline /> : <IoMoon />}
    </button>
  );
};
