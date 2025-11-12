"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";

// Componente de input reutilizável para manter o estilo consistente
const FormInput = ({ id, type = "text", placeholder }) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full bg-white/10 text-white placeholder-slate-400 rounded-lg p-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
    />
  </div>
);

function FormSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32" id="form-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Coluna da Esquerda: Texto */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center md:text-left mb-4 md:mb-6">
              Para aplicar dentro do seu negócio, queremos fazer um diagnóstico 3i atual da sua empresa
            </h2>
            <ul className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8 list-decimal list-inside space-y-2 text-center md:text-left">
              <li>Identificaremos os fatores do comercial que te fazem vender menos</li>
              <li>Identificaremos tudo que pode ser automatizado</li>
              <li>Implementaremos em tempo recorde</li>
            </ul>
            <p className="text-base sm:text-lg text-slate-300 text-center md:text-left">
              Para isso, preencha abaixo e te chamaremos.
            </p>
          </div>

          {/* Coluna da Direita: Formulário */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 md:p-8 rounded-lg shadow-4xl w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              <FormInput id="nome" placeholder="SEU NOME" />
              <FormInput id="telefone" type="tel" placeholder="TELEFONE" />
              <FormInput id="negocio" placeholder="NOME DO SEU NEGÓCIO" />
              
              <Button
                type="submit"
                className="w-full bg-[#FE4634] hover:bg-[#ff2e1b] text-white font-semibold h-12 px-6 rounded-lg transition-colors duration-300"
              >
                Receber mais informações
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;