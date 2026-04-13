"use client";

import { motion, Variants } from "framer-motion";

interface HeroProps {
  onOpenModal: (source: string) => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Ambient glow background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-fixed/30 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary-fixed/15 blur-[160px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs uppercase tracking-[0.25em] font-bold text-primary bg-primary-fixed/40 px-5 py-2 rounded-full"
        >
          ИИ-интегратор для малого бизнеса
        </motion.span>

        <motion.h1
          custom={0.12}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] text-on-background"
        >
          Ноль рутины<br />в вашем бизнесе
        </motion.h1>

        <motion.p
          custom={0.24}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-[#4B5563] leading-relaxed max-w-2xl"
        >
          Заменяем ставку администратора ИИ-решением за 1–3 дня. Сокращаем ФОТ на 40 000 ₽/мес и удерживаем 20% заявок, которые теряются в нерабочие часы.
        </motion.p>

        <motion.div
          custom={0.36}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button
            onClick={() => onOpenModal("Hero: Получить демо")}
            className="bg-gradient-to-br from-[#005235] to-[#1a6b4a] text-on-primary px-10 py-4 rounded-full font-semibold active:scale-95 transition-transform flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 text-lg"
          >
            Получить бесплатное демо
          </button>
          <a
            href="#demo"
            className="bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-semibold hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center text-lg"
          >
            Смотреть примеры
          </a>
        </motion.div>

        {/* Subtle metrics row */}
        <motion.div
          custom={0.48}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-10 mt-8 pt-8 border-t border-outline-variant/40 w-full"
        >
          {[
            { value: "40 000 ₽", label: "экономия ФОТ/мес" },
            { value: "+20%", label: "заявок не теряется" },
            { value: "1–3 дня", label: "до полного запуска" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-tighter">{s.value}</span>
              <span className="text-sm text-[#4B5563] uppercase tracking-[0.15em] font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
