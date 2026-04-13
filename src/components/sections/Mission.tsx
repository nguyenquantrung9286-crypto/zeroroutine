"use client";

import { motion, Variants } from "framer-motion";
import { Target, Zap, Shield } from "lucide-react";

export function Mission() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const blockquoteVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const pillars = [
    {
      icon: <Target size={28} />,
      title: "Для малого бизнеса",
      desc: "Корпоративные технологии по доступной цене. Без технических специалистов в штате.",
    },
    {
      icon: <Zap size={28} />,
      title: "Быстрый результат",
      desc: "Запуск за 1–3 дня. Первые сэкономленные деньги — уже в первый месяц работы.",
    },
    {
      icon: <Shield size={28} />,
      title: "Бесшовная интеграция",
      desc: "Адаптируем ИИ под ваши текущие процессы без остановки работы бизнеса.",
    },
  ];

  return (
    <section id="mission" className="py-24 bg-surface-container-low px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Badge + заголовок */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary bg-primary-fixed/40 px-4 py-1.5 rounded-full w-fit">
            ИИ-интегратор для малого бизнеса
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background leading-tight">
            Мы убираем рутину —<br />
            чтобы вы занимались главным
          </h2>

          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Наша миссия: внедрять ИИ-решения, которые убирают операционку из бизнеса — чтобы владелец занимался развитием, а не текучкой. Мы не продаём &laquo;ботов&raquo; и не &laquo;настраиваем нейросети&raquo;. Мы заменяем ставку администратора, сокращаем ФОТ и удерживаем заявки, которые иначе теряются.
          </p>
        </motion.div>

        {/* Три столпа */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col gap-5 border border-outline-variant/30 hover:-translate-y-1 transition-transform shadow-sm group"
            >
              <div className="w-14 h-14 bg-primary-fixed/40 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-on-surface">{p.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Цитата / миссия */}
        <motion.blockquote
          variants={blockquoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="border-l-4 border-primary pl-8 py-2 max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-semibold text-on-background leading-snug tracking-tight">
            «Мы внедряем ИИ-решения, которые убирают рутину из бизнеса&nbsp;—&nbsp;чтобы владелец занимался главным, а не операционкой»
          </p>
          <footer className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-primary">
            Ноль Рутины — ИИ-интегратор для малого бизнеса
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
