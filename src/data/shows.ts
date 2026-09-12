export type Show = {
  id: string;
  date: string;
  day: string;
  title: string;
  city: string;
  venue: string;
  address: string;
};

export const upcoming: Show[] = [
  {
    id: "1",
    date: "21.10",
    day: "СР",
    title: "The Limba",
    city: "Варшава",
    venue: "PROXIMA",
    address: "Żwirki i Wigury 99A, 02-089 Warszawa",
  },
  {
    id: "2",
    date: "23.10",
    day: "ПТ",
    title: "The Limba",
    city: "Рига",
    venue: "The Tower",
    address: "Brīvības gat. 214B, Vidzemes priekšpilsēta, Rīga, LV-1039",
  },
  {
    id: "3",
    date: "29.10",
    day: "ЧТ",
    title: "The Limba",
    city: "Прага",
    venue: "ROXY CLUB",
    address: "Francouzská 75/4, 120 00, Praha 2 - Vinohrady",
  },
  {
    id: "4",
    date: "07.11",
    day: "СБ",
    title: "The Limba",
    city: "Кишинев",
    venue: "SKAL",
    address: "Strada 31 August 1989 117, Chișinău",
  },
];
