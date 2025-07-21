"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061429] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2">
              Get In Touch
            </h3>
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="text-red-500" size={20} />
              <p>647 Central Road, Noordgesig, Soweto, 1804, South Africa</p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <Mail className="text-red-500" size={20} />
              <p>info@ktmygenerators.co.za</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-red-500" size={20} />
              <p>+27 73 653 4344</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2">
              Popular Links
            </h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <Link href="/" className="hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link
                href="/pages/aboutus"
                className="hover:text-red-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/pages/services"
                className="hover:text-red-400 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/pages/gallery"
                className="hover:text-red-400 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/pages/contactus"
                className="hover:text-red-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Optional Signup Section (Can be removed or customized) */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2">
              Stay Updated
            </h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter to get the latest updates on generator
              offers and energy tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-white text-black w-full focus:outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Generator Solutions PTY LTD
          </span>
          . Created by{" "}
          <a
            href="https://hackboltstudios.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-semibold"
          >
            Hack Bolt Studios
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
