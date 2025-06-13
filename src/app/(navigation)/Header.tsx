"use client";
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/data/data";
import { useScroll } from "@/hooks/useScroll";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { isScrolling } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const handleMobileState = () => {
    setIsMobile((prev) => !prev);
  };

  const handleLinkClick = () => setIsMobile(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-100 ease-in p-4 ${
        isScrolling ? "bg-background/95" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#1E88E5]">Faturati</h1>

        <nav className="hidden md:flex items-center gap-5 text-md">
          {NavLinks.map((link) => {
            const isActive = pathname === `/${link.href}`;
            return (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className={`transition-colors ${
                  isActive
                    ? "text-[#1E88E5] font-medium"
                    : "text-black/70 hover:text-[#1E88E5]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex max-md:hidden items-center gap-3">
          <Button asChild variant="outline">
            <SignInButton>Connexion</SignInButton>
          </Button>
          <Button asChild>
            <SignUpButton>Créer un compte</SignUpButton>
          </Button>
        </div>

        <div className="md:hidden relative">
          <Button onClick={handleMobileState} variant="secondary">
            {isMobile ? <X /> : <Menu />}
          </Button>

          <div
            className={`absolute top-full -right-4 w-screen bg-white flex flex-col items-start p-6 pt-4 shadow-lg z-50
      overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
      ${isMobile ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="flex flex-col items-start gap-5 text-md w-full">
              {NavLinks.map((link) => {
                const isActive = pathname === `/${link.href}`;
                return (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    className={`transition-colors ${
                      isActive
                        ? "text-[#1E88E5] font-medium"
                        : "text-black/70 hover:text-[#1E88E5]"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center flex-col gap-3 mt-6 w-full">
              <Button asChild variant="outline" className="w-full">
                <Link href="/connexion" onClick={handleLinkClick}>
                  Connexion
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/inscription" onClick={handleLinkClick}>
                  Créer un compte
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
