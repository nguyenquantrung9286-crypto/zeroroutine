"use client";

import { useState } from "react";
import { CheckCircle, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};

const successVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export function Modal({ isOpen, onClose, source = "General" }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contact, setContact] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Имитация реального сетевого запроса (1.5 сек)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setContact("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative z-10 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={handleClose}
              aria-label="Закрыть окно"
              className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors p-2 bg-surface-container-low rounded-full"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-on-background mb-4 mt-2 leading-tight">
                  {source !== "General" ? `Запросить демо: ${source}` : "Получить демо"}
                </h3>
                <p className="text-[#4B5563] mb-8 text-lg">
                  Оставьте контакты и наш эксперт свяжется с вами в ближайшее время.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input type="hidden" name="source" value={source} />

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                      Ваше имя <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      minLength={2}
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg border border-outline-variant/30"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                      Telegram или Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg border border-outline-variant/30"
                      placeholder="@username или mail@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                      Название бизнеса <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      minLength={2}
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest outline-none transition-all text-on-surface text-lg border border-outline-variant/30"
                      placeholder="Название вашей компании"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-on-primary rounded-full py-5 mt-4 font-bold text-xl active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-primary/20"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
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
