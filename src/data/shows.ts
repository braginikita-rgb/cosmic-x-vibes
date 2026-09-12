export type Show = {
  id: string;
  date: string;
  day: string;
  title: string;
  city: string;
  venue: string;
  address: string;
  ticketUrl?: string;
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
    address: "Dlouhá 33, 110 00 Old Town, Prague 1",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-61b8d7?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-61b8d7",
  },
  {
    id: "4",
    date: "07.11",
    day: "СБ",
    title: "The Limba",
    city: "Кишинев",
    venue: "SKAL",
    address: "Strada 31 August 1989 117, Chișinău",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-4f0d3e?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-4f0d3e",
  },
];
