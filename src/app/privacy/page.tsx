import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Политика конфиденциальности | Ноль Рутины",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar onOpenModal={() => {}} />
      <main className="flex-grow py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto bg-surface-container-low p-10 rounded-[2rem] shadow-sm">
          <h1 className="text-4xl font-bold mb-8 text-on-background">Политика конфиденциальности</h1>
          <div className="text-on-surface-variant leading-relaxed space-y-6">
            <p>
              Настоящая Политика конфиденциальности описывает, как мы собираем, используем, обрабатываем и защищаем ваши личные данные, которые вы можете предоставить через наш веб-сайт.
            </p>
            <h2 className="text-2xl font-semibold text-on-surface mt-6 mb-4">1. Сбор информации</h2>
            <p>
              Мы собираем информацию, которую вы добровольно предоставляете нам при заполнении форм обратной связи, включая ваше имя, номер телефона и название компании.
            </p>
            <h2 className="text-2xl font-semibold text-on-surface mt-6 mb-4">2. Использование информации</h2>
            <p>
              Собранная информация используется исключительно для связи с вами, предоставления консультаций по внедрению ИИ-решений и улучшения качества нашего обслуживания. Мы не передаем ваши данные третьим лицам без вашего явного согласия.
            </p>
            <h2 className="text-2xl font-semibold text-on-surface mt-6 mb-4">3. Защита данных</h2>
            <p>
              Мы принимаем все необходимые технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
