"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquare, Star, TrendingUp, Users, ArrowRight } from "lucide-react";

interface ProductCatalogProps {
  onOpenModal: (source: string) => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const products = [
  {
    id: "admin",
    name: "ИИ-Администратор",
    description: "Отвечает клиентам и записывает их 24/7 — вместо живого администратора. Экономия до 40 000 ₽/мес",
    icon: MessageSquare,
    badge: "🔥 Флагман",
    accent: "bg-primary-fixed/20",
    iconColor: "text-primary",
  },
  {
    id: "reputation",
    name: "ИИ-Репутация",
    description: "Автоматически отвечает на отзывы в 2GIS и Яндекс.Картах. Рейтинг растёт без вашего участия",
    icon: Star,
    accent: "bg-secondary-container/30",
    iconColor: "text-secondary",
  },
  {
    id: "mentor",
    name: "ИИ-Наставник",
    description: "Обучает новых сотрудников по вашим регламентам без вашего участия. Онбординг в 3 раза быстрее",
    icon: Users,
    accent: "bg-primary-fixed/20",
    iconColor: "text-primary",
  },
  {
    id: "reanimator",
    name: "ИИ-Реаниматор",
    description: "Возвращает клиентов которые давно не приходили. Персонализированные сообщения по вашей базе",
    icon: TrendingUp,
    accent: "bg-secondary-container/30",
    iconColor: "text-secondary",
  },
];

export function ProductCatalog({ onOpenModal }: ProductCatalogProps) {
  return (
    <section id="catalog" className="py-32 md:py-40 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background mb-6">
            Наши продукты
          </h2>
          <p className="text-xl md:text-2xl text-[#4B5563] leading-relaxed">
            Выберите готовое решение под вашу задачу. Внедрение занимает 1–3 дня, окупаемость — с первого месяца.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              className="group relative bg-white border border-outline-variant/30 rounded-[2.5rem] p-10 md:p-12 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col justify-between gap-10"
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 rounded-3xl ${p.accent} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                    <p.icon size={32} className={p.iconColor} />
                  </div>
                  {p.badge && (
                    <span className="bg-primary-fixed text-on-primary-fixed px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Продукт: ${p.name}`)}
                className="flex items-center gap-3 text-primary font-bold text-lg md:text-xl group/btn"
              >
                Запросить демо
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:translate-x-1">
                  <ArrowRight size={20} />
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
