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
          className="relative w-full min-h-[520px] bg-primary rounded-[3rem] overflow-hidden flex flex-col justify-center gap-12 group p-12 md:p-24"
        >
          {/* Badge */}
          <div className="absolute top-12 left-12 md:top-20 md:left-24 z-10">
            <span className="bg-primary-fixed/20 text-on-primary rounded-full text-xs uppercase tracking-[0.3em] font-bold px-6 py-2 border border-on-primary/10">
              Флагманское решение
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-10">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-on-primary tracking-tight leading-[0.95] max-w-4xl">
              ИИ-Администратор
            </h3>

            <p className="text-xl md:text-3xl text-on-primary/80 max-w-2xl leading-relaxed font-medium">
              Полная замена ставки администратора — работает 24/7 без перерывов, выходных и человеческого фактора.
            </p>

            {/* Metrics row - simplified */}
            <div className="flex flex-wrap gap-10 md:gap-16 pt-4">
              {[
                { label: "Установка", value: "1–3 дня" },
                { label: "Экономия", value: "до 50%" },
                { label: "ROI", value: "450%+" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-on-primary tracking-tight">
                    {value}
                  </span>
                  <span className="text-xs md:text-sm text-on-primary/50 uppercase tracking-[0.2em] font-bold">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenModal("ИИ-Администратор (Флагман)")}
              className="bg-on-primary text-primary px-12 py-5 rounded-full font-bold hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-3 w-fit text-xl shadow-2xl"
            >
              Запросить демо
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Decorative elements - subtle clean feel */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-on-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <BrainCircuit
            size={500}
            strokeWidth={0.3}
            className="absolute top-1/2 -right-40 -translate-y-1/2 text-on-primary opacity-[0.05] group-hover:scale-110 transition-transform duration-1000 rotate-12 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
