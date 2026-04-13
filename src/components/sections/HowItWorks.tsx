"use client";

import { motion, Variants } from "framer-motion";
import { ClipboardCheck, PhoneCall, Zap } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const steps = [
  {
    number: "01",
    title: "Выбираете продукт",
    desc: "Оставляете заявку на сайте или в Telegram. Мы свяжемся с вами в течение 2 часов.",
    icon: ClipboardCheck,
    color: "bg-surface-container-high",
  },
  {
    number: "02",
    title: "Настройка под вас",
    desc: "Проводим короткий 15-минутный созвон, чтобы понять ваши задачи и настроить ИИ.",
    icon: PhoneCall,
    color: "bg-primary-fixed/30",
  },
  {
    number: "03",
    title: "Запуск результата",
    desc: "Внедряем решение за 1–3 дня. Вы начинаете экономить ФОТ с первого месяца.",
    icon: Zap,
    color: "bg-surface-container-high",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 md:py-40 px-6 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background mb-6">
            Три шага до результата
          </h2>
          <p className="text-xl text-[#4B5563]">
            Процесс внедрения ИИ-сотрудников максимально прозрачен и не требует вашего участия после настройки.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {steps.map((s, idx) => (
            <motion.div
              key={s.number}
              variants={fadeUp}
              className="flex flex-col items-center text-center gap-8 relative"
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t border-dashed border-outline-variant/50" />
              )}

              <div className={`w-24 h-24 rounded-[2rem] ${s.color} flex items-center justify-center relative z-10 transition-transform hover:rotate-6 duration-500`}>
                <s.icon size={36} className="text-primary" />
                <span className="absolute -top-3 -right-3 w-10 h-10 bg-on-background text-white rounded-full flex items-center justify-center font-bold text-sm tracking-widest">
                  {s.number}
                </span>
              </div>

              <div className="flex flex-col gap-4 max-w-xs">
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
                  {s.title}
                </h3>
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
