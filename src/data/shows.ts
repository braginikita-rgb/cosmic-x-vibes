export type Show = {
  id: string;
  date: string;
  year: number;
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
    date: "23.04",
    year: 2027,
    day: "ПТ",
    title: "The Limba",
    city: "Варшава",
    venue: "PROXIMA",
    address: "Żwirki i Wigury 99A, 02-089 Warszawa",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-384a2d?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-384a2d",
  },
  {
    id: "2",
    date: "25.04",
    year: 2027,
    day: "ВС",
    title: "The Limba",
    city: "Рига",
    venue: "FIRST CLUB",
    address: "",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-d5add0?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-d5add0",
  },
  {
    id: "3",
    date: "24.04",
    year: 2027,
    day: "СБ",
    title: "The Limba",
    city: "Прага",
    venue: "OX CLUB",
    address: "",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-61b8d7?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-61b8d7",
  },
  {
    id: "4",
    date: "28.04",
    year: 2027,
    day: "СР",
    title: "The Limba",
    city: "Кишинев",
    venue: "SKAL",
    address: "Strada 31 August 1989 117, Chișinău",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-4f0d3e?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-4f0d3e",
  },
].sort((a, b) => a.date.localeCompare(b.date));
