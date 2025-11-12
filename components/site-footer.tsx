import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../public/logo-png.png"; 

function SiteFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={100} />
            </Link>
          </div>

          {/* 2. Navegação (igual ao Header + "Home") */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </Link>
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
              href="#form-section"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Cadastro
            </Link>
            <Link
              href="#showcase"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Sobre
            </Link>
          </nav>

          {/* 3. Copyright Simplificado */}
          <p className="text-sm text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} Sales Land. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;