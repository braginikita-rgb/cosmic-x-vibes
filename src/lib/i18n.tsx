import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en";

const dict = {
  ru: {
    "nav.home": "Главная",
    "nav.tickets": "Билеты",
    "nav.shop": "Магазин",
    "nav.blog": "Блог",
    "nav.contacts": "Контакты",
    "nav.menu": "Меню",
    "nav.buyTicket": "Купить билет",
    "nav.home.aria": "xXx Sound — на главную",

    "hero.scroll": "Листать вниз",
    "hero.videoAlt": "Чёрно-белая нарезка кадров с концертов",

    "about.tag": "О нас",
    "about.title1": "Мы создаём момент.",
    "about.title2": "Ты помнишь навсегда.",
    "about.text":
      "xXx Sound — концертная организация, собранная ради музыки и людей. Мы делаем шоу, где свет, звук и зал становятся одним целым: от клубных вечеров до стадионных туров.",
    "about.shows": "Шоу",
    "about.cities": "Городов",
    "about.viewers": "Зрителей",
    "about.years": "Лет на сцене",

    "poster.tag": "Афиша",
    "poster.title": "Города и даты",
    "poster.alt": "Артист на сцене",
    "poster.buy": "Купить билеты",

    "ann.tag": "Анонсы",
    "ann.title": "Ближайшие концерты",
    "ann.all": "Все даты",

    "merch.tag": "Мерч",
    "merch.title": "Магазин",
    "merch.toShop": "В магазин",
    "merch.tee": "Футболка",
    "merch.hoodie": "Худи",
    "merch.cap": "Кепка",
    "merch.tote": "Шоппер",

    "social.tag": "Соцсети",

    "footer.about": "Концертная организация. Живой звук, свет и большие залы.",
    "footer.nav": "Навигация",
    "footer.contact": "Связь",
    "footer.booking": "Букинг",
    "footer.address": "Москва, ул. Сценическая, 3",

    "tickets.tag": "Расписание",
    "tickets.title": "Билеты",
    "tickets.lead": "Выбирайте дату — и до встречи в зале. Количество билетов ограничено.",
    "tickets.season": "Сезон 2025/26",
    "tickets.all": "Все даты",
    "tickets.buy": "Купить",

    "shop.title": "Coming soon",
    "shop.text":
      "Магазин мерча в разработке. Футболки, худи и кепки в айдентике xXx Sound появятся здесь совсем скоро.",
    "shop.soon": "Скоро",

    "blog.title": "Coming soon",
    "blog.text":
      "Блог в разработке. Скоро здесь появятся новости, репортажи со сцены и закулисье xXx Sound.",

    "contacts.tag": "Связь",
    "contacts.title": "Контакты",
    "contacts.mail": "Почта",
    "contacts.phone": "Телефон",
    "contacts.office": "Офис",
    "contacts.bookingTitle": "Букинг и сотрудничество",
    "contacts.bookingText":
      "Организуем концерты, туры и фестивальные сцены. Напишите нам — ответим в течение рабочего дня.",
    "contacts.write": "Написать",

    "status.onSale": "В продаже",
    "status.few": "Мало билетов",
    "status.soldout": "Sold out",

    "city.Москва": "Москва",
    "city.Санкт-Петербург": "Санкт-Петербург",
    "city.Казань": "Казань",
    "city.Екатеринбург": "Екатеринбург",
    "city.Сочи": "Сочи",
    "city.Новосибирск": "Новосибирск",

    "day.СБ": "СБ",
    "day.ВС": "ВС",

    "price.from": "от",
  },
  en: {
    "nav.home": "Home",
    "nav.tickets": "Tickets",
    "nav.shop": "Shop",
    "nav.blog": "Blog",
    "nav.contacts": "Contacts",
    "nav.menu": "Menu",
    "nav.buyTicket": "Buy tickets",
    "nav.home.aria": "xXx Sound — go to homepage",

    "hero.scroll": "Scroll down",
    "hero.videoAlt": "Black and white cut of concert footage",

    "about.tag": "About us",
    "about.title1": "We curate moments.",
    "about.title2": "You feel forever.",
    "about.text":
      "xXx Sound is a live music company built for the music and the people. We create shows where light, sound and the crowd become one — from club nights to stadium tours.",
    "about.shows": "Shows",
    "about.cities": "Cities",
    "about.viewers": "Viewers",
    "about.years": "Years on stage",

    "poster.tag": "Poster",
    "poster.title": "Cities & dates",
    "poster.alt": "Artist on stage",
    "poster.buy": "Buy tickets",

    "ann.tag": "Announcements",
    "ann.title": "Upcoming shows",
    "ann.all": "All dates",

    "merch.tag": "Merch",
    "merch.title": "Shop",
    "merch.toShop": "To the shop",
    "merch.tee": "T-shirt",
    "merch.hoodie": "Hoodie",
    "merch.cap": "Cap",
    "merch.tote": "Tote bag",

    "social.tag": "Socials",

    "footer.about": "Live music company. Real sound, real light, big rooms.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.booking": "Booking",
    "footer.address": "Moscow, Stsenicheskaya st. 3",

    "tickets.tag": "Schedule",
    "tickets.title": "Tickets",
    "tickets.lead": "Pick a date and see you in the room. Ticket amount is limited.",
    "tickets.season": "Season 2025/26",
    "tickets.all": "All dates",
    "tickets.buy": "Buy",

    "shop.title": "Coming soon",
    "shop.text":
      "The merch store is in the works. Tees, hoodies and caps in xXx Sound identity are landing here very soon.",
    "shop.soon": "Soon",

    "blog.title": "Coming soon",
    "blog.text":
      "The blog is in the works. News, show reports and backstage stories of xXx Sound are landing here soon.",

    "contacts.tag": "Contact",
    "contacts.title": "Contacts",
    "contacts.mail": "Email",
    "contacts.phone": "Phone",
    "contacts.office": "Office",
    "contacts.bookingTitle": "Booking & partnerships",
    "contacts.bookingText":
      "We produce concerts, tours and festival stages. Write to us — we reply within a business day.",
    "contacts.write": "Write to us",

    "status.onSale": "On sale",
    "status.few": "Few tickets",
    "status.soldout": "Sold out",

    "city.Москва": "Moscow",
    "city.Санкт-Петербург": "Saint Petersburg",
    "city.Казань": "Kazan",
    "city.Екатеринбург": "Yekaterinburg",
    "city.Сочи": "Sochi",
    "city.Новосибирск": "Novosibirsk",

    "day.СБ": "SAT",
    "day.ВС": "SUN",

    "price.from": "from",
  },
} as const;

export type TKey = keyof typeof dict.ru;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: TKey) => string;
};

const fallbackCtx: Ctx = {
  lang: "ru",
  setLang: () => {},
  toggleLang: () => {},
  t: (key: TKey) => dict.ru[key],
};

const LangContext = createContext<Ctx>(fallbackCtx);

const STORAGE_KEY = "xxx-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "en") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "ru" ? "en" : "ru"),
      t: (key: TKey) => dict[lang][key] ?? dict.ru[key],
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  return useContext(LangContext);
}

/** Translates status / city / day values coming from static data. */
export function useDataText() {
  const { t } = useI18n();
  return {
    status: (s: string) =>
      s === "В продаже"
        ? t("status.onSale")
        : s === "Мало билетов"
          ? t("status.few")
          : t("status.soldout"),
    city: (c: string) => {
      const key = `city.${c}` as TKey;
      return (dict.ru as Record<string, string>)[key] ? t(key) : c;
    },
    day: (d: string) => {
      const key = `day.${d}` as TKey;
      return (dict.ru as Record<string, string>)[key] ? t(key) : d;
    },
    price: (p: string) => p.replace("от", t("price.from")),
  };
}
