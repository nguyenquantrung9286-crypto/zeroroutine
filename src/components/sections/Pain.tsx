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
    <section id="pain" className="py-32 md:py-40 px-6 bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background leading-[1.1]">
            Скрытые расходы убивают вашу маржу
          </h2>
          <p className="text-xl text-[#4B5563] max-w-2xl">
            Малый бизнес теряет до 30% прибыли из-за неэффективного управления коммуникациями и человеческого фактора.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16"
        >
          {painPoints.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-error-container/50 flex items-center justify-center">
                <Icon size={32} className="text-error" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">{title}</h3>
                <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-2xl">{desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Special mention for turnover as a list item too */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-error-container/50 flex items-center justify-center">
              <Users size={32} className="text-error" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">Текучка кадров</h3>
              <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-2xl">
                Поиск и обучение нового сотрудника стоит бизнесу 3-х месячных ФОТ. ИИ-сотрудник не увольняется.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
      <span id="pricing-section"></span>
    </section>
  );
}
