'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLinks } from "@/app/data/navLinks";
import Image from  "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 border-b border-blue-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}


        {/* Logo visible only on mobile */}
        <Link href="/" className="block md:hidden">
          <Image
              src="/GSLogo.jpeg"
              alt="Generator Solutions Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
          />
        </Link>

        {/* Company Name (text) hidden on mobile */}
        <Link
            href="/"
            className="hidden md:inline text-xl font-bold text-red-600 whitespace-nowrap"
        >
          Generator Solutions (Pty) LTD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-blue-800 font-medium items-center">
          {NavLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href={NavLinks[NavLinks.length - 1].href}>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              {NavLinks[NavLinks.length - 1].name}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="text-blue-800" />
            ) : (
              <Menu className="text-blue-800" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 pb-4 text-blue-800 font-medium space-y-3">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
