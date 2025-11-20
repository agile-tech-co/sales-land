"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "../public/logo.png";
import Image from "next/image";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={100} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="#features"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="#solutions"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Soluções
          </Link>
          <Link
            href="#showcase"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Showcase
          </Link>
          <Link
            href="#form-section"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Cadastro
          </Link>
          <Link
            href="#about"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Sobre
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
