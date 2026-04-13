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
  const fotMonthly = admins * 40_000;
  const leadsMonthly = Math.round(employees * 0.2 * 2_000);
  const totalMonthly = fotMonthly + leadsMonthly;

  const monthlySavings = totalMonthly;
  const lostLeadsSavings = leadsMonthly;
  const annualSavings = totalMonthly * 12;

  return (
    <section id="roi" className="py-32 md:py-40 bg-[#1b1c1c] px-6 text-on-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Left: stats */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-on-secondary">
            Математика превосходства
          </h2>
          <p className="text-xl text-on-secondary/70 mb-16 leading-relaxed max-w-lg">
            ИИ не болеет, не уходит в отпуск и не просит повышения. Он заменяет ставку администратора и удерживает заявки, которые иначе теряются — окупаясь уже в первый месяц.
          </p>

          <div className="flex flex-col gap-14">
            {bigStats.map(({ value, desc }) => (
              <div key={value} className="flex flex-col gap-3 border-l-2 border-primary-fixed/30 pl-8">
                <span className="text-6xl md:text-7xl font-extrabold text-primary-fixed tracking-tighter leading-none">
                  {value}
                </span>
                <span className="text-lg text-on-secondary/70 leading-relaxed max-w-xs">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: calculator */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="bg-white/5 rounded-[2rem] p-10 md:p-12 flex flex-col relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-10">
            <Calculator size={36} className="text-primary-fixed" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Визуализатор окупаемости</h3>
          </div>

          {/* Slider */}
          <div className="mb-12 relative z-10">
            <div className="flex justify-between items-end mb-6">
              <span className="text-white/70 text-lg">Сотрудников в штате</span>
              <motion.span
                key={employees}
                variants={valueVariants}
                initial="initial"
                animate="animate"
                className="text-4xl font-bold text-white tabular-nums"
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

          {/* Breakdown */}
          <div className="flex flex-col gap-3 mb-6 relative z-10">
            <div className="flex justify-between items-center py-4 border-b border-white/8">
              <span className="text-white/60">💼 Сокращение ФОТ/мес</span>
              <span className="font-bold text-white tabular-nums">
                {new Intl.NumberFormat("ru-RU").format(monthlySavings - lostLeadsSavings)} ₽
              </span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-white/8">
              <span className="text-white/60">📞 Возврат потерянных заявок/мес</span>
              <span className="font-bold text-white tabular-nums">
                {new Intl.NumberFormat("ru-RU").format(lostLeadsSavings)} ₽
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="rounded-2xl p-8 mb-10 text-center relative z-10 bg-white/4">
            <p className="text-white/50 mb-3 text-xs uppercase tracking-[0.18em] font-bold">Прогноз ежегодной экономии</p>
            <div className="text-5xl md:text-6xl font-extrabold text-primary-fixed tracking-tighter font-mono tabular-nums">
              {new Intl.NumberFormat("ru-RU").format(annualSavings)} ₽
            </div>
            <p className="text-white/40 text-sm mt-3">
              ≈ {new Intl.NumberFormat("ru-RU").format(monthlySavings)} ₽ / мес
            </p>
          </div>

          <button
            onClick={() => onOpenModal("Скачать отчет ROI")}
            className="w-full bg-white text-on-surface px-8 py-5 rounded-full font-bold text-lg hover:bg-surface-container-lowest active:scale-95 transition-all relative z-10"
          >
            Получить персональный расчёт
          </button>

          <div className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] bg-primary-fixed/8 blur-[80px] rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
