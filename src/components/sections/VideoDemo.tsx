"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Play, PhoneCall, CheckCheck } from "lucide-react";

interface Demo {
  id: string;
  industry: string;
  emoji: string;
  color: string;
  accentText: string;
  tag: string;
  duration: string;
  messages: { role: "bot" | "client"; text: string; time: string }[];
}

const demos: Demo[] = [
  {
    id: "coffee",
    industry: "Кофейня",
    emoji: "☕",
    color: "from-amber-50 to-orange-50",
    accentText: "text-amber-700",
    tag: "bg-amber-100 text-amber-800",
    duration: "45 сек",
    messages: [
      { role: "client", text: "Привет! Хочу забронировать столик на двоих на завтра в 19:00", time: "18:42" },
      { role: "bot", text: "Добрый день! ☕ Стол на двоих на 19:00 завтра свободен. Подтверждаем бронь?", time: "18:42" },
      { role: "client", text: "Да, подтверждаю. На имя Алексей", time: "18:43" },
      { role: "bot", text: "Готово, Алексей! ✅ Стол 3 забронирован. Напоминание пришлём за 2 часа. Хотите узнать про акционное меню?", time: "18:43" },
      { role: "client", text: "Давайте", time: "18:44" },
      { role: "bot", text: "Сегодня скидка 20% на десерты к любому горячему напитку. Покажем полное меню при визите 🍰", time: "18:44" },
    ],
  },
  {
    id: "barber",
    industry: "Барбершоп",
    emoji: "✂️",
    color: "from-slate-50 to-zinc-100",
    accentText: "text-zinc-700",
    tag: "bg-zinc-200 text-zinc-800",
    duration: "45 сек",
    messages: [
      { role: "client", text: "Можно записаться на стрижку на выходных?", time: "21:15" },
      { role: "bot", text: "Конечно! 🗓️ Есть суббота: 11:00, 13:30, 16:00 — и воскресенье: 12:00, 15:00. Какой слот удобен?", time: "21:15" },
      { role: "client", text: "Суббота 13:30, мастер Денис", time: "21:16" },
      { role: "bot", text: "Денис свободен! Запись оформлена ✂️. Стрижка + укладка — 1 500 ₽. Нужно напоминание за день?", time: "21:16" },
      { role: "client", text: "Да, пожалуйста", time: "21:17" },
      { role: "bot", text: "Отлично! Напомним в пятницу вечером. Ждём вас в субботу в 13:30 💈", time: "21:17" },
    ],
  },
  {
    id: "clinic",
    industry: "Клиника",
    emoji: "🏥",
    color: "from-teal-50 to-cyan-50",
    accentText: "text-teal-700",
    tag: "bg-teal-100 text-teal-800",
    duration: "45 сек",
    messages: [
      { role: "client", text: "Здравствуйте, нужна консультация терапевта, желательно сегодня", time: "09:03" },
      { role: "bot", text: "Добрый день! 👨‍⚕️ Сегодня есть время у терапевта: 11:30, 14:00, 17:45. Записать вас?", time: "09:03" },
      { role: "client", text: "11:30 пожалуйста, я Марина Петрова", time: "09:04" },
      { role: "bot", text: "Марина, запись оформлена! ✅ Кабинет 204, Dr. Ковалёва. Возьмите паспорт и полис. Стоимость: 1 200 ₽", time: "09:04" },
      { role: "client", text: "Спасибо, а если нужно перенести?", time: "09:05" },
      { role: "bot", text: "Просто напишите сюда — перенесём без штрафа, если не менее чем за 2 часа до приёма 🙏", time: "09:05" },
    ],
  },
];

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.35 },
  }),
};

function TelegramChat({ demo, isActive }: { demo: Demo; isActive: boolean }) {
  return (
    <div className="flex flex-col h-full">
      {/* Telegram header */}
      <div className="flex items-center gap-3 p-4 bg-[#24A1DE] text-white rounded-t-2xl">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
          {demo.emoji}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">ИИ-Администратор</span>
          <span className="text-xs text-white/70 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-sky-200 rounded-full inline-block" />
            онлайн 24/7
          </span>
        </div>
        <PhoneCall size={18} className="ml-auto text-white/80" />
      </div>

      {/* Chat body */}
      <div className="flex-1 overflow-y-auto bg-[#E5EAEF] p-4 flex flex-col gap-3 min-h-[320px]">
        {isActive
          ? demo.messages.map((msg, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed relative ${
                    msg.role === "client"
                      ? "bg-[#EEFFDE] text-[#111] rounded-br-sm"
                      : "bg-white text-[#111] rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                  <div className={`flex items-center gap-1 mt-1 ${msg.role === "client" ? "justify-end" : "justify-start"}`}>
                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                    {msg.role === "client" && <CheckCheck size={12} className="text-blue-500" />}
                  </div>
                </div>
              </motion.div>
            ))
          : demo.messages.slice(0, 2).map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed opacity-40 ${
                    msg.role === "client"
                      ? "bg-[#EEFFDE] text-[#111]"
                      : "bg-white text-[#111]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export function VideoDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [played, setPlayed] = useState<Record<string, boolean>>({});

  const handlePlay = (id: string) => {
    setPlayed((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section id="demo" className="py-24 bg-surface px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary bg-primary-fixed/40 px-4 py-1.5 rounded-full inline-block mb-6">
            Живые примеры
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-6">
            Продукт в действии
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Посмотрите, как ИИ-администратор общается с клиентами в Telegram — в реальном времени, без скриптов, 24/7.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex gap-2 bg-surface-container-low p-1.5 rounded-2xl">
            {demos.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(i)}
                aria-label={`Демо для ${d.industry}`}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === i
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {d.emoji} {d.industry}
              </button>
            ))}
          </div>
        </div>

        {/* Demo cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Left: description */}
              <motion.div variants={cardVariants} className="flex flex-col gap-8 justify-center">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{demos[activeTab].emoji}</span>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${demos[activeTab].tag}`}>
                      {demos[activeTab].industry}
                    </span>
                    <h3 className="text-3xl font-bold text-on-background mt-2">
                      ИИ-администратор для {demos[activeTab].industry === "Клиника" ? "клиники" : demos[activeTab].industry === "Барбершоп" ? "барбершопа" : "кофейни"}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {[
                    "Принимает запись круглосуточно без участия персонала",
                    "Отвечает за 0.8 сек — быстрее любого администратора",
                    "Удерживает 20% заявок, которые иначе теряются в нерабочие часы",
                    "Полная установка за 1–3 дня. Окупаемость уже за 3–4 дня",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                      <span className="w-6 h-6 bg-primary-fixed/50 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 text-sm text-on-surface-variant bg-surface-container-low rounded-xl px-5 py-4 w-fit">
                  <Play size={16} className="text-primary" />
                  Симуляция диалога в реальном времени ({demos[activeTab].duration})
                </div>
              </motion.div>

              {/* Right: Telegram chat */}
              <motion.div
                variants={cardVariants}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20"
                style={{ maxWidth: 420, margin: "0 auto", width: "100%" }}
              >
                {!played[demos[activeTab].id] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => handlePlay(demos[activeTab].id)}
                      aria-label="Запустить демо-диалог"
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Play size={36} className="text-white ml-1" />
                    </button>
                  </div>
                )}
                <TelegramChat demo={demos[activeTab]} isActive={!!played[demos[activeTab].id]} />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "0.8 сек", label: "Среднее время ответа" },
            { value: "24/7", label: "Без выходных и перерывов" },
            { value: "+20%", label: "Заявок не теряется" },
            { value: "1–3 дня", label: "До полного запуска" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-surface-container-low rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-on-surface-variant font-medium leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
