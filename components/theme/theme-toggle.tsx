"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonFilledIcon, SunFilledIcon } from "../icons/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      className="rounded-xl"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <MoonFilledIcon size={22} className="text-yellow-500" />
      ) : (
        <SunFilledIcon size={22} className="text-yellow-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;