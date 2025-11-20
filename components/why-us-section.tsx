"use client";

import { motion } from "framer-motion";
import React from "react";
// Importando ícones da 'lucide-react'
import {
  CalendarCheck, // Para "Experiência"
  Building2,     // Para "Tipos de Empresas"
  Zap,             // Para "Processo Rápido"
  TrendingUp,    // Para "Aumento de Vendas"
} from "lucide-react";

// 1. Definindo os pontos fortes com os novos ícones
const features = [
  {
    icon: CalendarCheck,
    text: "Antes da I.A entrar em pauta em 2025, já estávamos há 2 anos atuando no mercado.",
  },
  {
    icon: Building2,
    text: "Experiência em pequenas, médias e grandes empresas.",
  },
  {
    icon: Zap,
    text: "Processo rápido e prático.",
  },
  {
    icon: TrendingUp,
    text: "Só descansaremos quando seu número de vendas aumentar.",
  },
];

// 2. Variantes de animação (não precisam mudar)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function WhyUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-transparent" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12 sm:mb-16">
          Por que a Sales Land?
        </h2>

        {/* Grid com os Pontos Fortes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon; // Pega o componente do ícone
            return (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-lg flex items-start space-x-4 hover:ring-2 hover:ring-[#FE4634]/80 hover:shadow-[#FE4634]/20 cursor-pointer transition-all duration-300"
                variants={gridItemVariants}
              >
                {/* Wrapper do Ícone (COM A COR ATUALIZADA) */}
                <div Half-Duplex
                  className="flex-shrink-0 bg-[#FE4634]/10 text-[#FE4634] rounded-lg p-3"
                >
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                {/* Texto do Ponto Forte */}
                <div className="pt-1">
                  <p className="text-base sm:text-lg text-slate-200">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUsSection;