"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  LayoutDashboard,
  Send,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-[#FE4634]" />,
    title: "Agentes de inteligência artificial",
    description:
      "Nossos Agentes de IA automatizam tarefas, qualificam leads e otimizam seu funil de vendas 24/7.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#FE4634]" />,
    title: "CRM",
    description:
      "Gerencie todos os seus clientes em um só lugar. Tenha um histórico completo e nunca mais perca uma oportunidade.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-[#FE4634]" />,
    title: "Dashboards comerciais",
    description:
      "Visualize suas métricas de vendas em tempo real e tome decisões baseadas em dados com dashboards claros e intuitivos.",
  },
  {
    icon: <Send className="h-8 w-8 text-[#FE4634]" />,
    title: "Tráfego interno (Disparos de mensagens automáticas)",
    description:
      "Automatize o envio de e-mails, WhatsApp e SMS para nutrir leads, engajar clientes e fechar mais vendas no piloto automático.",
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 backdrop-blur-sm" id="features">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16">
          TUDO QUE ESTÁ INCLUSO EM NOSSO ECOSSISTEMA:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="
                bg-gray-900/60 backdrop-blur-md 
                rounded-xl shadow-lg p-6 
                ring-1 ring-white/10 
                transition-all duration-300
                hover:ring-2 hover:ring-[#FE4634]/80 hover:shadow-[#FE4634]/20 cursor-pointer
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5 p-3 bg-gray-800/70 rounded-full w-max">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;