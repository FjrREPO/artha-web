"use client"

import { cn } from "@/lib/utils";
import { BellDot, Bookmark, FolderDot, Menu, Info, ChevronDown } from "lucide-react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Label } from "../ui/label";

const NAVIGATION_ITEMS = [
  { label: "Overview", link: "/overview", icon: <Info /> },
  { label: "Earn", link: "/earn", icon: <Bookmark /> },
  { label: "Borrow", link: "/borrow", icon: <Bookmark /> },
  { label: "Pool", link: "/pool", icon: <BellDot /> },
  { label: "Auctions", link: "/auctions", icon: <FolderDot /> },
] as const;

const NavbarItem = memo(function NavbarItem({
  link,
  label,
  isActive,
  onNavigate,
}: {
  link: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          "w-full gap-3 justify-start font-medium transition-colors duration-200 hover:text-blue-500 text-[14px] py-2",
          isActive && "text-blue-600 text-[14px] border-r-2 border-blue-500 sm:border-none font-bold"
        )}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >
        {label}
      </Link>
    </div>
  );
});

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigate = () => {
    setIsOpen(false);
  };

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
              className="w-3/4 sm:w-[500px]"
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
                    onNavigate={handleNavigate}
                  />
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className={`pt-[2px] focus-visible:outline-none cursor-pointer hover:text-blue-500 ${pathname.startsWith("/create-pool") || pathname.startsWith("/create-curator") ? "text-blue-600 font-bold border-r-2 border-blue-500" : ""}`}>
                    <div className="flex flex-row gap-1 py-2">
                      <Label className="cursor-pointer">Create</Label>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href={"/create-pool"} className="cursor-pointer" onClick={handleNavigate}>
                      <DropdownMenuItem className={pathname.startsWith("/create-pool") ? "text-blue-600 cursor-pointer font-bold" : "cursor-pointer"}>
                        Create Pool
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/create-curator"} className="cursor-pointer" onClick={handleNavigate}>
                      <DropdownMenuItem className={pathname.startsWith("/create-curator") ? "text-blue-600 cursor-pointer font-bold" : "cursor-pointer"}>
                        Create Curator
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
                <NavbarItem
                  link="/dashboard"
                  label="Dashboard"
                  isActive={pathname.startsWith('/dashboard')}
                  onNavigate={handleNavigate}
                />
              </nav>
              <div className="pt-5">
                <ButtonConnectWallet />
              </div>
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
              <DropdownMenu>
                <DropdownMenuTrigger className={`pt-[2px] focus-visible:outline-none cursor-pointer hover:text-blue-500 ${pathname.startsWith("/create-pool") || pathname.startsWith("/create-curator") ? "text-blue-600 font-bold" : ""}`}>
                  <div className="flex flex-row gap-1">
                    <Label className="cursor-pointer">Create</Label>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={"/create-pool"} className="cursor-pointer">
                    <DropdownMenuItem className={pathname.startsWith("/create-pool") ? "text-blue-600 cursor-pointer font-bold" : "cursor-pointer"}>
                      Create Pool
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/create-curator"} className="cursor-pointer">
                    <DropdownMenuItem className={pathname.startsWith("/create-curator") ? "text-blue-600 cursor-pointer font-bold" : "cursor-pointer"}>
                      Create Curator
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <NavbarItem
                link="/dashboard"
                label="Dashboard"
                isActive={pathname.startsWith('/dashboard')}
              />
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