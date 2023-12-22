"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const ThemeSwitch = () => {
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
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-dark border-[0.1rem] border-solid border-[--bg-dark] shadow-md shadow-slate-400 dark:shadow-[--color-bg-primary]-100/10 rounded-full flex items-center justify-center transition duration-500 ease-in-out hover:shadow-none hover:bg-primary hover:text-primary hover:scale-[0.95] active:shadow-none active:scale-[0.95] active:bg-primary active:text-primary focus:outline-none focus:ring focus:ring-[--bg-primary]"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeSwitch;
