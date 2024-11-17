import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={theme === "dark" ? "/logo_white.png" : "/logo_black.png"}
        width={40}
        height={40}
        alt="logo"
      />
    </Link>
  );
}