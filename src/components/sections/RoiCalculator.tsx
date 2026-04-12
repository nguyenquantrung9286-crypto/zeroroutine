"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

interface RoiProps {
  onOpenModal: (source: string) => void;
}

export function RoiCalculator({ onOpenModal }: RoiProps) {
  const [employees, setEmployees] = useState(25);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Formula: employees * 40000 * 12 * 0.3
    setSavings(employees * 40000 * 12 * 0.3);
  }, [employees]);

  return (
    <section id="roi" className="py-24 bg-[#1b1c1c] px-6 text-on-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-on-secondary">
            Математика превосходства
          </h2>
          <p className="text-xl text-on-secondary/80 mb-16 leading-relaxed max-w-lg">
            Искусственный интеллект не болеет, не уходит в отпуск и не просит повышения. Он окупает затраты на внедрение уже в первый месяц эксплуатации.
          </p>

          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-8 border-l border-white/10 pl-6">
              <span className="text-5xl md:text-6xl font-extrabold text-primary-fixed tracking-tighter w-48 shrink-0">
                40 000 ₽
              </span>
              <span className="text-xl text-on-secondary/90 leading-relaxed">
                Среднее сокращение ФОТ в месяц
              </span>
            </div>
            <div className="flex items-center gap-8 border-l border-white/10 pl-6">
              <span className="text-5xl md:text-6xl font-extrabold text-primary-fixed tracking-tighter w-48 shrink-0">
                98%
              </span>
              <span className="text-xl text-on-secondary/90 leading-relaxed">
                Точность распознавания речи
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-surface-container-lowest/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 md:p-12 flex flex-col relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 mb-10">
            <Calculator size={40} className="text-primary-fixed" />
            <h3 className="text-3xl font-bold text-white tracking-tight">Визуализатор окупаемости</h3>
          </div>

          <div className="mb-12 relative z-10">
            <div className="flex justify-between items-end mb-6 text-xl">
              <span className="text-white/80">Количество сотрудников</span>
              <motion.span
                key={employees}
                initial={{ opacity: 0.5, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white"
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
              className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary-fixed hover:accent-primary-fixed/90 transition-all outline-none focus:ring-4 focus:ring-primary-fixed/30"
              aria-label="Ползунок количества сотрудников"
            />
          </div>

          <div className="bg-white/5 rounded-2xl p-8 mb-10 border border-white/10 text-center relative z-10">
            <p className="text-white/60 mb-4 text-lg">Прогноз ежегодной экономии</p>
            <div className="text-5xl md:text-6xl font-extrabold text-primary-fixed tracking-tighter font-mono tabular-nums">
              {new Intl.NumberFormat("ru-RU").format(savings)} ₽
            </div>
          </div>

          <button
            onClick={() => onOpenModal("Скачать отчет ROI")}
            className="w-full bg-white text-on-surface px-8 py-5 rounded-full font-bold text-lg hover:bg-surface-container-lowest active:scale-95 transition-all relative z-10"
          >
            Скачать подробный отчет
          </button>

          <div className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] bg-primary-fixed/10 blur-[80px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
