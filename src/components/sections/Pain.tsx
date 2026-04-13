"use client";

import { motion, Variants } from "framer-motion";
import { AlertCircle, Clock, Users } from "lucide-react";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Pain() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="pain" className="py-24 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background max-w-2xl leading-tight">
            Скрытые расходы убивают вашу маржу
          </h2>
          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-2">
              50 000 ₽
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Средний ФОТ администратора в месяц
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-4"
        >
          <motion.div variants={cardVariants} className="bg-surface-container-lowest rounded-xl p-8 border-l-4 border-error/40 hover:-translate-y-1 transition-transform group shadow-sm">
            <AlertCircle size={40} className="text-error mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Забытые лиды</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Администратор пропускает до 20% звонков в пиковые часы и выходные.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-surface-container-lowest rounded-xl p-8 border-l-4 border-error/40 hover:-translate-y-1 transition-transform group shadow-sm">
            <Clock size={40} className="text-error mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Медленный ответ</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Клиенты ждут ответа часами. ИИ отвечает за 0.8 секунд 24/7.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-surface-container-lowest rounded-xl p-8 border-l-4 border-error/40 hover:-translate-y-1 transition-transform group shadow-sm">
            <Users size={40} className="text-error mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Текучка кадров</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Поиск и обучение нового сотрудника стоит бизнесу 3-х месячных ФОТ.
            </p>
          </motion.div>
        </motion.div>

        <span id="pricing-section"></span>
      </div>
    </section>
  );
}
