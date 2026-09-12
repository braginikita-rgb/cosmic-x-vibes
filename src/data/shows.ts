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
    venue: "Tower",
    address: "Brīvības gat. 214B, Vidzemes priekšpilsēta, Rīga, LV-1039",
  },
  {
    id: "3",
    date: "25.10",
    day: "ВС",
    title: "The Limba",
    city: "Прага",
    venue: "Roxy Prague",
    address: "Dlouhá 33, 110 00 Staré Město, Чехия",
  },
  {
    id: "4",
    date: "07.11",
    day: "СБ",
    title: "The Limba",
    city: "Кишинёв",
    venue: "SKAL",
    address: "Strada 31 August 1989 117, Chișinău",
  },
];
