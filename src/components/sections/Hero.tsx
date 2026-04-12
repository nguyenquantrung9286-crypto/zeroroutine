"use client";

import { motion, Variants } from "framer-motion";
import { BrainCircuit, Bot, TrendingDown } from "lucide-react";

interface HeroProps {
  onOpenModal: (source: string) => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        <div className="flex flex-col items-start text-left">
          <motion.span
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6 bg-primary-fixed/40 px-4 py-1.5 rounded-full"
          >
            Трансформация бизнеса
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-on-background"
          >
            Ноль рутины<br />в вашем бизнесе
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg"
          >
            Мы внедряем автономных ИИ-агентов. Полная замена линейного персонала в коммуникациях и операционке. Сократите ФОТ и исключите человеческий фактор уже в этом месяце.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenModal("Hero: Получить демо")}
              className="bg-gradient-to-br from-[#005235] to-[#1a6b4a] text-on-primary px-8 py-4 rounded-full font-medium active:scale-95 transition-transform flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
            >
              Получить демо
            </button>
            <a
              href="#pricing-section"
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-medium hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center"
            >
              Узнать стоимость
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container-low group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-container to-surface-container-low" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col gap-6 justify-center">
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/50 flex items-center gap-5 w-4/5 shadow-sm transform -translate-y-2 hover:scale-[1.02] transition-transform cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary shrink-0">
                <BrainCircuit size={28} />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="h-3 bg-surface-container-high rounded w-3/4" />
                <div className="h-2 bg-surface-container rounded w-1/2" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/50 flex items-center gap-5 w-4/5 self-end shadow-sm relative z-10 pl-6 hover:scale-[1.02] transition-transform cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary shrink-0">
                <Bot size={28} />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="h-3 bg-surface-container-high rounded w-2/3" />
                <div className="h-2 bg-surface-container rounded w-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-[#ba1a1a]/5 p-6 rounded-2xl border border-error/10 flex items-center gap-5 w-3/4 shadow-sm mix-blend-multiply"
            >
              <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error shrink-0">
                <TrendingDown size={20} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="h-2 bg-error/20 rounded w-1/3" />
                <div className="h-2 bg-error/10 rounded w-1/4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-fixed/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-fixed/20 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
    </section>
  );
}
