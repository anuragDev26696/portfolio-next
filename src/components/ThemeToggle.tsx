// 'use client'

// import { useEffect, useState } from 'react'

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     const root = document.documentElement
//     const dark = localStorage.getItem('theme') === 'dark'
//     setIsDark(dark)
//     root.classList.toggle('dark', dark)
//   }, [])

//   const toggleTheme = () => {
//     const root = document.documentElement
//     const nextTheme = !isDark
//     root.classList.toggle('dark', nextTheme)
//     localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
//     setIsDark(nextTheme)
//   }

//   return (
//     <button onClick={toggleTheme} className="ml-2 text-xl">
//       {isDark ? '🌞' : '🌙'}
//     </button>
//   )
// }
// This component toggles between light and dark themes using localStorage to persist the user's choice.
// It uses the `useEffect` hook to set the initial theme based on localStorage when
// the component mounts. The button displays a sun icon for dark mode and a moon icon for light mode.
// The `toggleTheme` function updates the class on the root

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <BiSun className="h-5 w-5" /> : <BiMoon className="h-5 w-5" />}
    </Button>
  );
}