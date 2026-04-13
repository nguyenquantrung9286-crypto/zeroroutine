"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, BrainCircuit } from "lucide-react";

interface SolutionsProps {
  onOpenModal: (source: string) => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const metrics = [
  { emoji: "⚡", label: "Установка", value: "1–3 дня" },
  { emoji: "💰", label: "Окупаемость", value: "3–4 дня" },
  { emoji: "📈", label: "ROI", value: "450%+" },
];

export function Solutions({ onOpenModal }: SolutionsProps) {
  return (
    <section id="solutions" className="py-32 md:py-40 bg-surface px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-4">
            Архитектура эффективности
          </h2>
          <p className="text-xl text-[#4B5563] leading-relaxed">
            Внедрение за 1–3 дня. Окупаемость в первый месяц работы.
          </p>
        </motion.div>

        {/* Flagship full-width block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full min-h-[520px] bg-primary rounded-[2rem] overflow-hidden flex flex-col justify-between group"
        >
          {/* Top row */}
          <div className="flex items-start justify-between px-16 md:px-20 pt-16 relative z-10">
            <span className="bg-secondary-container text-on-secondary-fixed-variant rounded-full text-xs uppercase tracking-[0.25em] font-bold px-5 py-2">
              Флагман
            </span>
          </div>

          {/* Content */}
          <div className="px-16 md:px-20 pb-16 relative z-10 flex flex-col gap-12">
            <h3 className="text-5xl md:text-7xl font-bold text-on-primary tracking-tighter leading-[1.05] max-w-3xl">
              ИИ-Администратор
            </h3>

            <p className="text-xl text-on-primary/75 max-w-2xl leading-relaxed">
              Полная замена ставки администратора — без перерывов, выходных и больничных.
            </p>

            {/* Metrics row */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
              {metrics.map(({ emoji, label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-on-primary tracking-tighter">
                    {value}
                  </span>
                  <span className="text-sm text-on-primary/60 uppercase tracking-[0.18em] font-semibold">
                    {emoji} {label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenModal("ИИ-Администратор")}
              className="bg-on-primary text-primary px-10 py-4 rounded-full font-bold hover:scale-[1.03] active:scale-95 transition-transform flex items-center gap-2 w-fit text-lg"
            >
              Узнать подробнее
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Decorative icon */}
          <BrainCircuit
            size={400}
            strokeWidth={0.5}
            className="absolute -bottom-20 -right-20 text-on-primary opacity-[0.07] group-hover:scale-105 transition-transform duration-1000 rotate-12 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
