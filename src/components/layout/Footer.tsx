export function Footer() {
  return (
    <footer className="bg-surface py-20 px-6 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="text-2xl font-bold tracking-tight text-on-background">
            Ноль рутины
          </div>
          <p className="text-[#4B5563] text-sm">
            © {new Intl.DateTimeFormat("ru", { year: "numeric" }).format(new Date())} Все права защищены.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://t.me/zeroroutinesbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity"
            aria-label="Telegram"
          >
            <Send size={20} />
            Telegram
          </a>
          <a
            href="/privacy"
            className="text-[#4B5563] text-sm hover:text-on-background transition-colors"
          >
            Конфиденциальность
          </a>
        </div>
      </div>
    </footer>
  );
}
