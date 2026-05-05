"use client";

import { motion, Variants, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThreeScene } from "@/components/ui/ThreeScene";

interface HeroProps {
  onOpenModal: (source: string) => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9], delay },
  }),
};

export function Hero({ onOpenModal }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springX = useSpring(mousePosition.x, { damping: 20, stiffness: 100 });
  const springY = useSpring(mousePosition.y, { damping: 20, stiffness: 100 });

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <ThreeScene />
      {/* Ambient glow background with mouse parallax */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-fixed/20 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" 
      />
      <motion.div 
        style={{ x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary-fixed/10 blur-[160px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" 
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary bg-primary-fixed/30 px-6 py-2 rounded-full">
            ИИ-интегратор номер 1
          </span>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight leading-[0.95] text-on-background max-w-4xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                ИИ-сотрудники
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="block text-primary"
              >
                для бизнеса
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-[#4B5563] leading-relaxed max-w-2xl font-medium"
        >
          Готовые решения под любую задачу — внедряем за 1–3 дня. Работают 24/7, не болеют, не уходят в отпуск.
        </motion.p>

        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-5 mt-6"
        >
          <MagneticButton>
            <a
              href="#catalog"
              className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold active:scale-95 transition-all flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/30 text-xl"
            >
              Смотреть продукты
            </a>
          </MagneticButton>
          <MagneticButton>
            <button
              onClick={() => onOpenModal("Hero: Получить демо")}
              className="bg-surface-container-high text-on-surface px-12 py-5 rounded-full font-bold hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center text-xl border border-outline-variant/20"
            >
              Получить демо
            </button>
          </MagneticButton>
        </motion.div>

        {/* Subtle scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#4B5563]/50">Листайте вниз</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
