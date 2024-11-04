"use client";

import { cn } from "@/lib/utils";
import { BellDot, Bookmark, FolderDot, Menu, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ButtonConnectWallet } from "../web3/button-connect-wallet";

const items = [
  { label: "Overview", link: "/overview", icon: <Info /> },
  { label: "Earn", link: "/earn", icon: <Bookmark /> },
  { label: "Pool", link: "/pool", icon: <BellDot /> },
  { label: "Dashboard", link: "/dashboard", icon: <FolderDot /> },
];

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="absolute z-40 h-fit w-full py-5 md:py-0"
    >
      <div className="block md:hidden" >
        <nav className="container flex items-center justify-between px-8">
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
              >
                <Menu className="w-8 h-8 shrink-0" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-[250px] sm:w-[540px]"
              side={"left"}
            >
              <Logo />
              <div className="flex flex-col gap-1 pt-4">
                {items.map((item) => (
                  <NavbarItem
                    key={item.label}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonConnectWallet />
          </div>
        </nav>
      </div>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div
      className="absolute z-40 h-fit w-full px-20 shadow-lg shadow-b-textSecondary dark:border"
    >
      <div className="hidden md:block" >
        <nav className="container flex items-center justify-between gap-x-4">
          <div className="flex h-[80px] min-h-[60px] items-center gap-x-8">
          <Logo />
            <div className="flex items-center h-full gap-x-5">
              {items.map((item, index) => (
                <NavbarItem
                  key={index}
                  link={item.link}
                  label={item.label}
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

function NavbarItem({
  link,
  label
}: {
  link: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link);
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          "w-full gap-2 justify-start font-medium hover:text-foreground text-[14px]",
          isActive && "text-blue-600 text-[14px]"
        )}
      >
        {label}
      </Link>
    </div>
  );
}