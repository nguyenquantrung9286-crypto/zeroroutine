"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenModal: (source: string) => void;
}

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cases" className="py-32 bg-surface px-6 relative overflow-hidden">
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto bg-surface-container-low p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center relative overflow-hidden shadow-sm"
      >
        <div className="w-20 h-20 bg-primary-fixed/40 rounded-full flex items-center justify-center text-primary mb-8 relative z-10">
          <Rocket size={40} className="text-primary" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-6 relative z-10">
          Готовы к трансформации?
        </h2>
        
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
          Получите бесплатное демо и аудит процессов от ведущих экспертов. Мы наглядно покажем, где бизнес теряет деньги и как это исправить.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative z-10">
          <button
            onClick={() => onOpenModal("Финальный CTA")}
            className="w-full sm:w-auto bg-primary text-on-primary rounded-full px-12 py-5 text-xl font-bold hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-primary/20"
          >
            Получить демо 🚀
          </button>
          
          <a
            href="https://t.me/zeroroutinesbot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-primary font-bold hover:text-primary-container active:scale-95 transition-all flex items-center justify-center gap-2 px-8 py-5"
          >
            Написать в Telegram <ArrowRight size={20} />
          </a>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-fixed/30 blur-[80px] -translate-y-1/2 translate-x-1/2 mt-10 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed/20 blur-[80px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
      </motion.div>
    </section>
  );
}
