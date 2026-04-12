"use client";

import { useState } from "react";
import { CheckCircle, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function Modal({ isOpen, onClose, source = "General" }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    const match = val.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    
    if (!match) return;
    
    if (!match[2]) {
      setPhone(match[1] === "7" || match[1] === "8" ? "+7 (" : match[1] ? "+7 (" + match[1] : "");
      return;
    }
    setPhone(
      `+7 (${match[2]}${match[3] ? ") " + match[3] : ""}${match[4] ? "-" + match[4] : ""}${match[5] ? "-" + match[5] : ""}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit from source:", source);
    // Имитация отправки
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setPhone("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={handleClose}
              aria-label="Закрыть окно"
              className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors p-2 bg-surface-container-low rounded-full"
            >
              <X size={24} />
            </button>

            {!submitted ? (
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold tracking-tight text-on-background mb-4 mt-2">
                  Получить демо
                </h3>
                <p className="text-on-surface-variant mb-8 text-lg">
                  Оставьте контакты и наш эксперт свяжется с вами в течение 2 часов.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input type="hidden" name="source" value={source} />

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      Имя <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      Телефон <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={handlePhoneInput}
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      Название компании <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg"
                      placeholder="ООО Инновация"
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="employees" className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      Количество сотрудников <span className="text-error">*</span>
                    </label>
                    <select
                      id="employees"
                      required
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg cursor-pointer appearance-none"
                    >
                      <option value="1-10">1-10 человек</option>
                      <option value="11-50">11-50 человек</option>
                      <option value="51-200">51-200 человек</option>
                      <option value="200+">200+ человек</option>
                    </select>
                    <ChevronDown className="absolute right-5 bottom-[1.125rem] text-on-surface-variant pointer-events-none" />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary rounded-full py-5 mt-4 font-bold text-xl active:scale-95 transition-transform"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 mt-6"
              >
                <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-4xl font-bold tracking-tight text-on-background mb-4">Спасибо!</h3>
                <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                  Мы получили вашу заявку. Наш эксперт свяжется с вами в течение 2 часов.
                </p>
                <button
                  onClick={handleClose}
                  className="w-full bg-surface-container-high text-on-surface rounded-full py-4 font-bold text-lg hover:bg-surface-container-highest transition-colors active:scale-95"
                >
                  Закрыть окно
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
