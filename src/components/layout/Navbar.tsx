"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenModal: (source: string) => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "#solutions", label: "Решения" },
    { href: "#demo", label: "Демо" },
    { href: "#roi", label: "Эффективность" },
    { href: "#cases", label: "Контакты" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f8]/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center font-bold text-lg rounded-xl group-hover:scale-105 transition-transform">
            НР
          </div>
          <span className="font-bold text-xl tracking-tight text-on-background hidden sm:block">
            Ноль Рутины
          </span>
        </a>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-on-surface-variant font-medium text-[15px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <button
            onClick={() => onOpenModal("Навигация")}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium active:scale-95 transition-transform flex items-center gap-2 hover:bg-primary-container"
          >
            Начать интеграцию
          </button>
        </div>

        <button
          onClick={toggleMenu}
          aria-label="Меню навигации"
          className="md:hidden text-on-surface p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-surface-container-lowest border-b border-surface-container absolute w-full left-0 top-20 shadow-lg"
          >
            <div className="flex flex-col p-6 gap-6 text-lg font-medium text-on-surface text-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal("Мобильное меню");
                }}
                className="bg-primary text-on-primary py-4 rounded-xl mt-4 font-bold active:scale-95"
              >
                Начать интеграцию
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
