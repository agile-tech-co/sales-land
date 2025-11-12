"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";

function SolutionListSection() {
  return (
    <section className="py-10 lg:py-24" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-12 items-center justify-center">

          <div className="flex flex-col justify-center items-center w-full max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
              Trazemos soluções de I.A personalizadas para o seu negócio.
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-4 md:mb-6">
              Mas podemos te entregar:
            </h3>
            <div className="mb-6 md:mb-8 text-left">
              <ul className="text-base sm:text-lg text-slate-300 space-y-4">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-[#FE4634] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Atendimento automático por I.A</span>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-[#FE4634] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Acompanhamento de clientes para recompra com I.A (Cliente compra mais de uma vez de você)</span>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-[#FE4634] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Criação de um novo canal automático de prospecção para o seu negócio.</span>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-[#FE4634] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Abordagem comercial e de dados que aumentará sua conversão em vendas.</span>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-[#FE4634] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Dashboards com todos os dados de Marketing e vendas em um lugar só, na tela do seu computador</span>
                </li>
              </ul>

              <p className="text-base sm:text-lg text-slate-400 mt-6 italic">
                <strong>OBS:</strong> Integramos com toda sua base de estoque e clientes atual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionListSection;
