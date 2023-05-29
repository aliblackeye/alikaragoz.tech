"use client";

// Import Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import React
import { useEffect, useState } from "react";

// Import Icons
import { BiHome } from "react-icons/bi";

export default function Header() {
  // Hooks
  const pathname = usePathname();

  // States
  const [isHome, setIsHome] = useState(true);

  // UseEffects
  useEffect(() => {
    // If user in home page, user won't see the home button
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, []);

  return (
    <header className="app-header">
      {!isHome && (
        <a href={"/"}>
          <button className="go-home-btn">
            <BiHome />
          </button>
        </a>
      )}
    </header>
  );
}
