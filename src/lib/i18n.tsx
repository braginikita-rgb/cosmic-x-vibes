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
    "poster.alt": "Афиша тура The Limba",
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
    "merch.presale": "Предзаказ",
    "merch.collection": "MERCH",
    "merch.tourTitle": "THE LIMBA EASTERN EUROPE TOUR MERCH",
    "merch.presaleTee": "Футболка Tour 26",
    "merch.presaleHoodie": "Худи Tour 26",
    "merch.front": "Спереди",
    "merch.back": "Сзади",
    "merch.buy": "Купить",

    "social.tag": "Соцсети",

    "footer.about": "Концертная организация. Живой звук, свет и большие залы.",
    "footer.nav": "Навигация",
    "footer.contact": "Связь",
    "footer.booking": "Букинг",
    "footer.address": "GI Invest GmbH, Hermannstraße 25, 64285 Darmstadt, Germany",
    "footer.legal": "Информация",
    "footer.legalNotice": "Legal Notice",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.refundPolicy": "Условия возврата",
    "footer.faq": "FAQ",

    "faq.tag": "Помощь",
    "faq.title": "Частые вопросы",
    "faq.lead": "Всё важное о билетах, концертах и мерче xXx Sound.",
    "faq.q1": "Где купить билеты?",
    "faq.a1": "Билеты продаются через Sphere Music. Выберите город на странице «Билеты» и перейдите к покупке по официальной ссылке.",
    "faq.q2": "Когда я получу билет?",
    "faq.a2": "После успешной оплаты электронный билет отправляется на адрес, указанный при заказе. Проверьте также папку «Спам».",
    "faq.q3": "Что делать, если дата или площадка изменились?",
    "faq.a3": "Важные изменения публикуются на сайте и сообщаются покупателям по контактам, указанным при оформлении заказа.",
    "faq.q4": "Как работает предзаказ мерча?",
    "faq.a4": "Предзаказ резервирует выбранный товар и размер до начала отправки. Сроки и условия доставки указываются во время покупки.",
    "faq.q5": "Можно ли вернуть билет или мерч?",
    "faq.a5": "Условия возврата зависят от товара, события и продавца. Актуальные правила отображаются при покупке через Sphere Music.",
    "faq.q6": "Как уточнить доступность площадки?",
    "faq.a6": "Напишите нам до концерта и укажите город и необходимые условия. Мы уточним информацию у площадки.",
    "faq.q7": "Как связаться с xXx Sound?",
    "faq.a7": "Напишите на info@xxxsoundxxx.com — мы ответим в течение рабочего дня.",

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
    "city.Варшава": "Варшава",
    "city.Рига": "Рига",
    "city.Прага": "Прага",
    "city.Кишинев": "Кишинев",

    "day.СБ": "СБ",
    "day.ВС": "ВС",
    "day.СР": "СР",
    "day.ПТ": "ПТ",
    "day.ЧТ": "ЧТ",

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
    "poster.alt": "The Limba tour poster",
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
    "merch.presale": "Presale",
    "merch.collection": "MERCH",
    "merch.tourTitle": "THE LIMBA EASTERN EUROPE TOUR MERCH",
    "merch.presaleTee": "Tour 26 T-shirt",
    "merch.presaleHoodie": "Tour 26 Hoodie",
    "merch.front": "Front",
    "merch.back": "Back",
    "merch.buy": "Buy",

    "social.tag": "Socials",

    "footer.about": "Live music company. Real sound, real light, big rooms.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.booking": "Booking",
    "footer.address": "GI Invest GmbH, Hermannstraße 25, 64285 Darmstadt, Germany",
    "footer.legal": "Information",
    "footer.legalNotice": "Legal Notice",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.refundPolicy": "Refund Policy",
    "footer.faq": "FAQ",

    "faq.tag": "Help",
    "faq.title": "Frequently asked questions",
    "faq.lead": "Essential information about xXx Sound tickets, shows and merchandise.",
    "faq.q1": "Where can I buy tickets?",
    "faq.a1": "Tickets are sold through Sphere Music. Choose your city on the Tickets page and follow the official purchase link.",
    "faq.q2": "When will I receive my ticket?",
    "faq.a2": "After successful payment, your electronic ticket is sent to the email address used for the order. Please also check your spam folder.",
    "faq.q3": "What happens if the date or venue changes?",
    "faq.a3": "Important changes are published on this website and sent to buyers using the contact details provided with their order.",
    "faq.q4": "How does merchandise presale work?",
    "faq.a4": "A presale reserves your selected item and size before shipping begins. Delivery timing and terms are shown during purchase.",
    "faq.q5": "Can I return a ticket or merchandise?",
    "faq.a5": "Return conditions depend on the item, event and seller. The current terms are displayed during purchase through Sphere Music.",
    "faq.q6": "How can I check venue accessibility?",
    "faq.a6": "Email us before the show with the city and your accessibility requirements. We will confirm the details with the venue.",
    "faq.q7": "How can I contact xXx Sound?",
    "faq.a7": "Email info@xxxsoundxxx.com and we will reply within one business day.",

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
    "city.Варшава": "Warsaw",
    "city.Рига": "Riga",
    "city.Прага": "Prague",
    "city.Кишинев": "Chișinău",

    "day.СБ": "SAT",
    "day.ВС": "SUN",
    "day.СР": "WED",
    "day.ПТ": "FRI",
    "day.ЧТ": "THU",

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
