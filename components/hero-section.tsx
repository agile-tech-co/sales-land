import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import logo from "../public/logo-png.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <Image
          src={logo}
          alt="Logo"
          width={300}
          className="mb-5"
        />
        <h2
          className="
            text-2xl sm:text-3xl lg:text-4xl /* 1. Tamanho de fonte responsivo */
            relative 
            w-full max-w-4xl /* 2. Largura controlada */
            mx-auto z-20 
            font-bold text-center text-white font-sans tracking-tight
          "
        >
          Soluções comerciais de inteligência artificial que te geram mais vendas
          e mais lucro.
          <div
            className="
              relative mx-auto inline-block w-max 
              [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]
              mt-4 /* Adiciona um espaço acima */
              text-base sm:text-lg lg:text-xl /* 3. Tamanho de fonte do subtítulo */
            "
          >
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-0">
              <span className="">
                Inteligência artificial & comercial: + de 120 empresas que
                otimizaram seus setores com I.A.
              </span>
            </div>
          </div>
        </h2>
        <div
          className="
            flex flex-col sm:flex-row justify-center gap-4 
            w-full max-w-md /* 4. Largura do contêiner do botão */
            mx-auto py-2
            mt-4 /* 3. Adicionada margem superior para manter o espaço do botão */
          "
        >
          <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className="
                inline-flex h-full w-full cursor-pointer items-center justify-center 
                rounded-full bg-slate-950 
                px-8 sm:px-12 /* 5. Padding do botão responsivo */
                py-5 text-sm font-medium text-white backdrop-blur-3xl
              "
            >
              QUERO APLICAR PARA O MEU NEGÓCIO
            </span>
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}