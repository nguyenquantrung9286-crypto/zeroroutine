"use client";

import { motion, Variants } from "framer-motion";
import { AlertCircle, Clock, Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const painPoints = [
  {
    icon: AlertCircle,
    title: "Забытые лиды",
    desc: "Администратор пропускает до 20% звонков в пиковые часы и выходные.",
  },
  {
    icon: Clock,
    title: "Медленный ответ",
    desc: "Клиенты ждут ответа часами. ИИ отвечает за 0.8 секунд 24/7.",
  },
];

export function Pain() {
  return (
    <section id="pain" className="py-32 md:py-40 bg-surface-container-low px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Заголовок + акцентная цифра */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background max-w-xl leading-tight">
            Скрытые расходы убивают вашу маржу
          </h2>
          <div className="flex flex-col md:items-end">
            <span className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-1">
              50 000 ₽
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#4B5563]">
              Средний ФОТ администратора в месяц
            </span>
          </div>
        </motion.div>

        {/* Вертикальный список болей */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-12"
        >
          {painPoints.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex items-start gap-8"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-error-container flex items-center justify-center mt-1">
                <Icon size={24} className="text-error" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-on-surface">{title}</h3>
                <p className="text-lg text-[#4B5563] leading-relaxed max-w-xl">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Акцентный блок — текучка кадров */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-surface-container-lowest rounded-3xl p-10 md:p-14 border border-outline-variant/30 shadow-sm"
        >
          <div className="w-14 h-14 shrink-0 rounded-2xl bg-error-container flex items-center justify-center">
            <Users size={28} className="text-error" />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-2xl font-bold text-on-surface">Текучка кадров</h3>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Поиск и обучение нового сотрудника стоит бизнесу 3-х месячных ФОТ.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0">
            <span className="text-5xl md:text-6xl font-extrabold text-error tracking-tighter leading-none">
              3 ФОТ
            </span>
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#4B5563] mt-1 text-center md:text-right">
              стоимость замены одного сотрудника
            </span>
          </div>
        </motion.div>

      </div>
      <span id="pricing-section"></span>
    </section>
  );
}
