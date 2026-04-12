export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low py-12 px-6 border-t border-surface-container-high/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center font-bold text-lg rounded-xl">
              НР
            </div>
            <span className="font-bold text-xl text-on-background tracking-tight">Ноль Рутины</span>
          </a>
          <span className="text-sm text-on-surface-variant">&copy; {currentYear} Все права защищены.</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          <a href="https://t.me/YOUR_HANDLE" className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors">
            Телеграм
          </a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors">
            Линкедин
          </a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors">
            Напишите нам
          </a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors">
            Конфиденциальность
          </a>
        </div>
      </div>
    </footer>
  );
}
