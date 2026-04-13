"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Calculator } from "lucide-react";

interface RoiProps {
  onOpenModal: (source: string) => void;
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 } },
};

const valueVariants = {
  initial: { opacity: 0.5, y: -5 },
  animate: { opacity: 1, y: 0 },
};

const bigStats = [
  {
    value: "40 000 ₽",
    desc: "Среднее сокращение ФОТ в месяц на одну замещённую ставку",
  },
  {
    value: "+20%",
    desc: "Заявок возвращается благодаря работе 24/7 в нерабочие часы",
  },
  {
    value: "3–4 дня",
    desc: "Срок окупаемости первого месяца подключения",
  },
];

export function RoiCalculator({ onOpenModal }: RoiProps) {
  const [employees, setEmployees] = useState(25);

  const admins = Math.max(1, Math.round(employees / 10));
  const fotMonthly = admins * 45_000;
  const leadsMonthly = Math.round(employees * 0.2 * 2_500);
  const totalMonthly = fotMonthly + leadsMonthly;

  const annualSavings = totalMonthly * 12;

  return (
    <section id="roi" className="py-32 md:py-40 bg-[#1b1c1c] px-6 text-on-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Математика окупаемости
          </h2>
          <p className="text-xl text-white/60 leading-relaxed font-medium">
            ИИ-сотрудники не болеют, не уходят в отпуск и окупаются уже в первый месяц работы.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-white/[0.03] rounded-[3rem] p-12 md:p-20 border border-white/10"
        >
          {/* Left side: Input */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">Сотрудников в штате</span>
                <motion.span
                  key={employees}
                  variants={valueVariants}
                  initial="initial"
                  animate="animate"
                  className="text-6xl font-extrabold text-white tabular-nums tracking-tighter"
                >
                  {employees}
                </motion.span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="minimal-slider"
                aria-label="Ползунок количества сотрудников"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center py-6 border-b border-white/10">
                <span className="text-white/60 text-lg">Сокращение ФОТ / мес</span>
                <span className="font-bold text-white text-xl tabular-nums">
                  {new Intl.NumberFormat("ru-RU").format(fotMonthly)} ₽
                </span>
              </div>
              <div className="flex justify-between items-center py-6 border-b border-white/10">
                <span className="text-white/60 text-lg">Возврат заявок / мес</span>
                <span className="font-bold text-white text-xl tabular-nums">
                  {new Intl.NumberFormat("ru-RU").format(leadsMonthly)} ₽
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Result */}
          <div className="bg-primary/20 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center gap-8 border border-primary/20 relative group">
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-2">
              <p className="text-primary-fixed/60 text-xs uppercase tracking-[0.3em] font-bold">Ваша экономия в год</p>
              <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary-fixed tracking-tight leading-none py-4">
                {new Intl.NumberFormat("ru-RU").format(annualSavings)} ₽
              </div>
              <p className="text-white/40 text-lg">
                ≈ {new Intl.NumberFormat("ru-RU").format(totalMonthly)} ₽ экономии ежемесячно
              </p>
            </div>

            <button
              onClick={() => onOpenModal("ROI Расчет")}
              className="relative z-10 w-full bg-primary-fixed text-primary px-8 py-5 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
            >
              Получить полный отчет
            </button>
          </div>
        </motion.div>

        {/* Big stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
          {[
            { value: "40 000 ₽", label: "среднее сокращение ФОТ" },
            { value: "+20%", label: "заявок не теряется" },
            { value: "3–4 дня", label: "окупаемость внедрения" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/40">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
    </section>
  );
}
