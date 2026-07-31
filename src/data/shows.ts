export type Show = {
  id: string;
  date: string;
  day: string;
  title: string;
  city: string;
  venue: string;
  status: "В продаже" | "Мало билетов" | "Sold out";
  price: string;
};

export const upcoming: Show[] = [
  {
    id: "1",
    date: "12.09",
    day: "СБ",
    title: "Night Frequency",
    city: "Москва",
    venue: "Adrenaline Stadium",
    status: "В продаже",
    price: "от 2 500 ₽",
  },
  {
    id: "2",
    date: "27.09",
    day: "ВС",
    title: "Loud Room vol.4",
    city: "Санкт-Петербург",
    venue: "A2 Green Concert",
    status: "Мало билетов",
    price: "от 3 200 ₽",
  },
  {
    id: "3",
    date: "11.10",
    day: "СБ",
    title: "xXx Sound Showcase",
    city: "Казань",
    venue: "Kremlin Hall",
    status: "В продаже",
    price: "от 1 900 ₽",
  },
  {
    id: "4",
    date: "01.11",
    day: "СБ",
    title: "Bass Cathedral",
    city: "Екатеринбург",
    venue: "Tele-Club",
    status: "Sold out",
    price: "—",
  },
];

export const archive = [
  { year: "2025", title: "Neon Rave Arena", city: "Москва", crowd: "12 000" },
  { year: "2025", title: "Distortion Fest", city: "Сочи", crowd: "8 500" },
  { year: "2024", title: "Loud Room vol.3", city: "Санкт-Петербург", crowd: "5 000" },
  { year: "2024", title: "Winter Signal", city: "Новосибирск", crowd: "4 200" },
  { year: "2023", title: "First Light", city: "Казань", crowd: "3 000" },
  { year: "2023", title: "xXx Sound Launch", city: "Москва", crowd: "1 800" },
];
