import Link from "next/link";
import * as React from "react";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-4">
            <div style={{ borderRadius: "5px", overflow: "hidden" }}>
              <Icons.logo className="w-12 h-12" />
            </div>
            <span className="inline-block font-sans text-lg font-bold">
              Schafkopf Tracker
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
