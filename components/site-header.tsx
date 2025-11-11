"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div className="hidden md:flex space-x-4">
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Components
          </Link>
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Showcase
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="hidden text-black md:inline-flex border-slate-700 hover:bg-slate-800 hover:bg-slate-200 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
            </svg>
            Sign in
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
