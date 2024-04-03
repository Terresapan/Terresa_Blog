"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export const LightDarkToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex justify-center">
      {currentTheme === "dark" ? (
        <button
          className="bg-slate-700 rounded-full p-2 hover:bg-slate-800"
          onClick={() => {
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme("light");
            document.cookie = "theme=${newTheme}; path=/";
          }}
        >
          <Image
            src={"/toggle/sun.svg"}
            width={20}
            height={20}
            alt="sun icon"
          />
        </button>
      ) : (
        <button
          className="bg-slate-200 rounded-full p-2 hover:bg-slate-300"
          onClick={() => {
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme("dark");
            document.cookie = "theme=${newTheme}; path=/";
          }}
        >
          <Image
            src={"/toggle/moon.svg"}
            width={20}
            height={20}
            alt="moon icon"
          />
        </button>
      )}
    </div>
  );
};
