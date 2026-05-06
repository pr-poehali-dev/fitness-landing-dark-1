import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/26d6916f-f3c9-4ae1-8cf3-826493b97bc6/files/844eee53-29bc-431e-8786-faa98048c32d.jpg";

const plans = [
  {
    id: "basic",
    name: "Базовый",
    price: "2 900",
    period: "/ месяц",
    featured: false,
    perks: [
      "8 групповых тренировок",
      "Доступ к тренажёрному залу",
      "Раздевалка и душ",
      "Консультация тренера",
    ],
  },
  {
    id: "standard",
    name: "Стандарт",
    price: "4 500",
    period: "/ месяц",
    featured: true,
    badge: "Популярный",
    perks: [
      "Безлимитные тренировки",
      "Полный доступ к залу 24/7",
      "2 персональных занятия",
      "Составление программы",
      "Нутрициология — базовый план",
    ],
  },
  {
    id: "premium",
    name: "Премиум",
    price: "8 900",
    period: "/ месяц",
    featured: false,
    perks: [
      "Безлимитные тренировки",
      "Полный доступ к залу 24/7",
      "8 персональных занятий",
      "Индивидуальная программа",
      "Детальный план питания",
      "Анализ состава тела",
    ],
  },
];

const stats = [
  { value: "7+", label: "Лет в деле" },
  { value: "1 200+", label: "Клиентов" },
  { value: "30+", label: "Тренеров" },
  { value: "95%", label: "Достигают цели" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d", color: "#f0f0f0" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: "rgba(13,13,13,0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #1c1c1c",
        }}
      >
        <span className="font-oswald text-xl font-bold tracking-widest uppercase text-white">
          IRON<span style={{ color: "var(--orange)" }}>FORCE</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Тарифы", id: "тарифы" },
            { label: "Записаться", id: "запись" },
            { label: "Контакты", id: "контакты" },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="font-roboto text-sm tracking-widest uppercase transition-colors duration-200"
              style={{ color: "#888" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#запись">
          <button className="btn-orange px-5 py-2 text-sm rounded-sm">Записаться</button>
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="IRON FORCE Studio"
            className="w-full h-full object-cover"
            style={{ opacity: 0.28 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0d0d0d 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.9) 100%)",
            }}
          />
        </div>

        {/* Decorative vertical lines */}
        <div
          className="absolute right-0 top-0 bottom-0 w-px"
          style={{
            opacity: 0.2,
            background: "linear-gradient(180deg, transparent, var(--orange), transparent)",
          }}
        />
        <div
          className="absolute right-24 top-0 bottom-0 w-px"
          style={{
            opacity: 0.08,
            background: "linear-gradient(180deg, transparent, var(--orange), transparent)",
          }}
        />

        <div className="relative container mx-auto px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <p className="section-label opacity-0-init animate-fade-up delay-100 mb-4">
              Фитнес-студия • Москва
            </p>
            <h1
              className="font-oswald font-bold leading-none mb-6 opacity-0-init animate-fade-up delay-200"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#fff" }}
            >
              БОЛЬ —
              <br />
              <span style={{ color: "var(--orange)" }}>ТВОЁ</span>
              <br />
              ТОПЛИВО
            </h1>
            <p
              className="font-roboto font-light mb-8 max-w-xl opacity-0-init animate-fade-up delay-300"
              style={{ fontSize: "1.1rem", color: "#aaa", lineHeight: 1.75 }}
            >
              Тренировки, которые меняют тело и характер. Профессиональные тренеры,
              современное оборудование и атмосфера, где невозможное становится целью.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0-init animate-fade-up delay-400">
              <a href="#запись">
                <button className="btn-orange px-8 py-4 text-base rounded-sm flex items-center gap-2">
                  <Icon name="Flame" size={18} />
                  Пробное занятие
                </button>
              </a>
              <a href="#тарифы">
                <button
                  className="px-8 py-4 text-base rounded-sm font-oswald font-semibold uppercase tracking-widest transition-all duration-200"
                  style={{ border: "1px solid #333", color: "#ccc", background: "transparent" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--orange)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--orange)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#333";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ccc";
                  }}
                >
                  Тарифы
                </button>
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px opacity-0-init animate-fade-up delay-600"
            style={{ background: "#1c1c1c", border: "1px solid #1c1c1c" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-8 px-4"
                style={{ background: "#0d0d0d" }}
              >
                <span className="font-oswald font-bold text-4xl" style={{ color: "var(--orange)" }}>
                  {s.value}
                </span>
                <span
                  className="font-roboto text-xs tracking-widest uppercase mt-1"
                  style={{ color: "#666" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="тарифы" className="py-24 px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Выбери своё</p>
            <h2 className="font-oswald font-bold text-5xl md:text-6xl text-white">ТАРИФЫ</h2>
            <hr className="divider-orange mt-6 max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`card-plan rounded-sm p-8 flex flex-col opacity-0-init animate-fade-up${plan.featured ? " featured" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                {plan.featured && (
                  <div
                    className="inline-flex items-center gap-1 text-xs font-oswald font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-sm self-start"
                    style={{ background: "var(--orange)", color: "#fff" }}
                  >
                    <Icon name="Star" size={12} />
                    {plan.badge}
                  </div>
                )}
                <p className="font-roboto text-xs tracking-widest uppercase mb-2" style={{ color: "#666" }}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-oswald font-bold text-5xl text-white">{plan.price}</span>
                  <span className="font-roboto text-sm" style={{ color: "#666" }}>
                    {plan.period}
                  </span>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #222", marginBottom: "1.5rem" }} />
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-3 font-roboto text-sm"
                      style={{ color: "#ccc" }}
                    >
                      <Icon
                        name="Check"
                        size={16}
                        style={{ color: "var(--orange)", marginTop: "1px", flexShrink: 0 }}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a href="#запись">
                  <button
                    className={`w-full py-3 font-oswald font-semibold text-sm uppercase tracking-widest rounded-sm transition-all duration-200${plan.featured ? " btn-orange" : ""}`}
                    style={
                      !plan.featured
                        ? { border: "1px solid #333", color: "#ccc", background: "transparent" }
                        : {}
                    }
                    onMouseEnter={(e) => {
                      if (!plan.featured) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--orange)";
                        (e.currentTarget as HTMLButtonElement).style.color = "var(--orange)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.featured) {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#333";
                        (e.currentTarget as HTMLButtonElement).style.color = "#ccc";
                      }
                    }}
                  >
                    Выбрать план
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="запись" className="py-24 px-8" style={{ background: "#101010" }}>
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Бесплатно</p>
            <h2 className="font-oswald font-bold text-5xl text-white">
              ПРОБНОЕ
              <br />
              ЗАНЯТИЕ
            </h2>
            <p className="font-roboto text-sm mt-4" style={{ color: "#777" }}>
              Оставьте заявку — мы свяжемся с вами в течение 15 минут
            </p>
            <hr className="divider-orange mt-6 max-w-xs mx-auto" />
          </div>

          {submitted ? (
            <div className="text-center py-16 animate-fade-in">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ background: "rgba(255,102,0,0.1)", border: "1px solid var(--orange)" }}
              >
                <Icon name="Check" size={28} style={{ color: "var(--orange)" }} />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-white mb-2">Заявка принята!</h3>
              <p className="font-roboto text-sm" style={{ color: "#777" }}>
                Скоро свяжемся с вами по номеру {form.phone}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="font-roboto text-xs uppercase tracking-widest block mb-2"
                  style={{ color: "#666" }}
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm text-sm"
                />
              </div>
              <div>
                <label
                  className="font-roboto text-xs uppercase tracking-widest block mb-2"
                  style={{ color: "#666" }}
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm text-sm"
                />
              </div>
              <button
                type="submit"
                className="btn-orange w-full py-4 text-base rounded-sm mt-2 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={18} />
                Записаться на пробное занятие
              </button>
              <p className="font-roboto text-xs text-center" style={{ color: "#555" }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="контакты" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
        <div className="container mx-auto px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="font-oswald text-2xl font-bold tracking-widest uppercase block mb-3">
                IRON<span style={{ color: "var(--orange)" }}>FORCE</span>
              </span>
              <p className="font-roboto text-sm" style={{ color: "#555", lineHeight: 1.75 }}>
                Фитнес-студия для тех,
                <br />
                кто выбирает результат.
              </p>
            </div>

            <div>
              <p className="section-label mb-4">Адрес</p>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={16} style={{ color: "var(--orange)", marginTop: "2px" }} />
                <p className="font-roboto text-sm" style={{ color: "#888", lineHeight: 1.75 }}>
                  г. Москва, ул. Спортивная, д. 12
                  <br />
                  м. Спортивная, 2 мин пешком
                </p>
              </div>
            </div>

            <div>
              <p className="section-label mb-4">Контакты</p>
              <div className="space-y-3">
                <a
                  href="tel:+74951234567"
                  className="flex items-center gap-3 font-roboto text-sm transition-colors duration-200"
                  style={{ color: "#888" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  <Icon name="Phone" size={16} style={{ color: "var(--orange)" }} />
                  +7 (495) 123-45-67
                </a>
                <a
                  href="mailto:info@ironforce.ru"
                  className="flex items-center gap-3 font-roboto text-sm transition-colors duration-200"
                  style={{ color: "#888" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  <Icon name="Mail" size={16} style={{ color: "var(--orange)" }} />
                  info@ironforce.ru
                </a>
                <div className="flex items-center gap-3 font-roboto text-sm" style={{ color: "#888" }}>
                  <Icon name="Clock" size={16} style={{ color: "var(--orange)" }} />
                  Пн–Пт: 6:00–23:00, Сб–Вс: 8:00–22:00
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #1a1a1a", marginBottom: "1.5rem" }} />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-roboto text-xs" style={{ color: "#444" }}>
              © 2024 IRON FORCE. Все права защищены.
            </p>
            <div className="flex gap-6">
              {["Инстаграм", "Телеграм", "ВКонтакте"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-roboto text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: "#444" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}