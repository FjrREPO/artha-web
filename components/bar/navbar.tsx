"use client"

import { cn } from "@/lib/utils";
import { BellDot, Bookmark, FolderDot, Menu, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import { ButtonConnectWallet } from "../web3/button-connect-wallet";
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { memo } from 'react';

// Move items outside component to prevent recreation on renders
const NAVIGATION_ITEMS = [
  { label: "Overview", link: "/overview", icon: <Info /> },
  { label: "Earn", link: "/earn", icon: <Bookmark /> },
  { label: "Pool", link: "/pool", icon: <BellDot /> },
  { label: "Dashboard", link: "/dashboard", icon: <FolderDot /> },
  { label: "Create Pool", link: "/create-pool", icon: <FolderDot /> },
  { label: "Create Accurator", link: "/create-accurator", icon: <FolderDot /> },
  { label: "Auctions", link: "/auctions", icon: <FolderDot /> },
] as const;

// Separate NavbarItem into a memoized component
const NavbarItem = memo(function NavbarItem({
  link,
  label,
  isActive,
}: {
  link: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          "w-full gap-2 justify-start font-medium transition-colors duration-200 hover:text-blue-500 text-[14px]",
          isActive && "text-blue-600 text-[14px]"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </div>
  );
});

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = useMemo(() => 
    NAVIGATION_ITEMS.map((item) => ({
      ...item,
      isActive: pathname.startsWith(item.link)
    })),
    [pathname]
  );

  return (
    <div className="absolute z-40 h-auto w-full py-5 xl:py-0">
      <div className="block xl:hidden">
        <nav className="flex items-center justify-between px-8">
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="w-8 h-8 shrink-0" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-[250px] sm:w-[540px]"
              side="left"
            >
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <Logo />
              <nav aria-label="Main navigation" className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => (
                  <NavbarItem
                    key={item.label}
                    link={item.link}
                    label={item.label}
                    isActive={item.isActive}
                  />
                ))}
              </nav>
              <ButtonConnectWallet />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </div>
  );
}

function DesktopNavbar() {
  const pathname = usePathname();
  
  const navItems = useMemo(() => 
    NAVIGATION_ITEMS.map((item) => ({
      ...item,
      isActive: pathname.startsWith(item.link)
    })),
    [pathname]
  );

  return (
    <div className="absolute z-40 h-fit w-full px-20 shadow-lg shadow-b-textSecondary dark:border">
      <div className="hidden xl:block">
        <nav className="flex items-center justify-between gap-x-4" aria-label="Main navigation">
          <div className="flex h-[80px] min-h-[60px] items-center gap-x-8">
            <Logo />
            <div className="flex items-center h-full gap-x-5">
              {navItems.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  isActive={item.isActive}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonConnectWallet />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}