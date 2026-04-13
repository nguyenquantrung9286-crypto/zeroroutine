"use client";

import { motion, Variants } from "framer-motion";
import { Headset, Bot, Star, ArrowRight, BrainCircuit } from "lucide-react";

interface SolutionsProps {
  onOpenModal: (source: string) => void;
}

export function Solutions({ onOpenModal }: SolutionsProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const bentoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="solutions" className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-6">
            Архитектура эффективности
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Внедрение за 1-3 дня. Окупаемость в первый месяц работы.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6"
        >
          <motion.div
            variants={bentoVariants}
            className="md:col-span-12 md:row-span-2 bg-primary rounded-[2rem] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform shadow-lg"
          >
            <div className="relative z-10 flex items-start justify-between">
              <span className="bg-secondary-container text-on-secondary-fixed-variant rounded-full text-xs uppercase tracking-[0.2em] font-bold px-4 py-2">
                Флагман
              </span>
              <Headset size={64} strokeWidth={1} className="text-on-primary/60" />
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <h3 className="text-5xl md:text-6xl font-bold text-on-primary mb-6 tracking-tighter leading-[1.1]">
                ИИ-Администратор
              </h3>
              <p className="text-xl text-on-primary/80 mb-10 max-w-2xl leading-relaxed">
                Полная замена ставки администратора. Принимает звонки, записывает клиентов, обрабатывает возражения и ведёт CRM — без перерывов, выходных и больничных. Удерживает до&nbsp;20% заявок, которые иначе теряются в&nbsp;пиковые часы.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 text-on-primary font-medium bg-on-primary-fixed/20 p-6 rounded-2xl w-fit backdrop-blur-md mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-lg">⚡</span> Установка: 1–3 дня
                </div>
                <div className="hidden sm:block w-px bg-on-primary/30" />
                <div className="flex items-center gap-3">
                  <span className="text-lg">💰</span> Окупаемость: 3–4 дня
                </div>
                <div className="hidden sm:block w-px bg-on-primary/30" />
                <div className="flex items-center gap-3">
                  <span className="text-lg">📈</span> ROI: 450%+
                </div>
              </div>

              <button
                onClick={() => onOpenModal("ИИ-Администратор")}
                className="bg-on-primary text-primary px-8 py-4 rounded-full font-bold hover:scale-[1.03] active:scale-95 transition-transform flex items-center gap-2"
              >
                Узнать подробнее
                <ArrowRight size={20} />
              </button>
            </div>
            
            <BrainCircuit
              size={350}
              strokeWidth={0.5}
              className="absolute -bottom-16 -right-16 text-on-primary opacity-10 group-hover:scale-110 transition-transform duration-1000 rotate-12 pointer-events-none"
            />
          </motion.div>

          </motion.div>
      </div>
    </section>
  );
}
