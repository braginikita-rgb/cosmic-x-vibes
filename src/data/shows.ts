export type ArtistId = "the-limba" | "instasamka";

export const artists: { id: ArtistId; name: string; tour: string }[] = [
  { id: "instasamka", name: "INSTASAMKA", tour: "World Tour 2027" },
  { id: "the-limba", name: "The Limba", tour: "Eastern EU Tour" },
];

export type Show = {
  id: string;
  date: string;
  year: number;
  day: string;
  artist: ArtistId;
  title: string;
  city: string;
  venue: string;
  address: string;
  ticketUrl?: string;
};

export const upcoming: Show[] = ([
  {
    id: "1",
    date: "23.04",
    year: 2027,
    day: "ПТ",
    artist: "the-limba",
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
    artist: "the-limba",
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
    artist: "the-limba",
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
    artist: "the-limba",
    title: "The Limba",
    city: "Кишинев",
    venue: "SKAL",
    address: "Strada 31 August 1989 117, Chișinău",
    ticketUrl:
      "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-4f0d3e?utm_source=instagram&utm_medium=paid&utm_campaign=the-limba-eastern-europe-tour-4f0d3e",
  },
  {
    id: "5",
    date: "24.02",
    year: 2027,
    day: "СР",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Тбилиси",
    venue: "Mtatsminda Hall",
    address: "Mtatsminda, 0179 Tbilisi, Georgia",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-yerevan-copy-9e2a08",
  },
  {
    id: "6",
    date: "25.02",
    year: 2027,
    day: "ЧТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Батуми",
    venue: "Circus Arena",
    address: "Nikoloz Baratashvili Street 25, 6010 Batumi, Georgia",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-tbilisi-copy-b52dbd",
  },
  {
    id: "7",
    date: "26.02",
    year: 2027,
    day: "ПТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Ереван",
    venue: "Eventhub Yerevan",
    address: "Avetis Aharonyan street 3, 0014 Yerevan, Armenia",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-vienna-copy-446fd1",
  },
  {
    id: "8",
    date: "01.03",
    year: 2027,
    day: "ПН",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Барселона",
    venue: "SALA BIKINI",
    address: "Avinguda Diagonal 547, 08021 Barcelona, Spain",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-barcelona-248341",
  },
  {
    id: "9",
    date: "03.03",
    year: 2027,
    day: "СР",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Франкфурт",
    venue: "Zoom Club",
    address: "Carl-Benz-Straße 21, 60386 Frankfurt, Germany",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-barcelona-copy-0d6fd6",
  },
  {
    id: "10",
    date: "07.03",
    year: 2027,
    day: "ВС",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Вена",
    venue: "Szene Wien",
    address: "Hauffgasse 26, 1110 Vienna, Austria",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-frankfurt-copy-84037d",
  },
  {
    id: "11",
    date: "18.03",
    year: 2027,
    day: "ЧТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Будапешт",
    venue: "Dürer Kert",
    address: "Vízpart utca 1, 1117 Budapest, Hungary",
    ticketUrl: "https://music.sphere.art/music/concerts/instasamka-2027-vienna-copy-7305e6",
  },
  {
    id: "12",
    date: "04.03",
    year: 2027,
    day: "ЧТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Амстердам",
    venue: "Club Panama",
    address: "",
  },
  {
    id: "13",
    date: "05.03",
    year: 2027,
    day: "ПТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Кёльн",
    venue: "BOGEN 2",
    address: "",
  },
  {
    id: "14",
    date: "08.03",
    year: 2027,
    day: "ПН",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Прага",
    venue: "OX Club",
    address: "",
  },
  {
    id: "15",
    date: "09.03",
    year: 2027,
    day: "ВТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Варшава",
    venue: "Oczki Club",
    address: "",
  },
  {
    id: "16",
    date: "12.03",
    year: 2027,
    day: "ПТ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Берлин",
    venue: "Säälchen",
    address: "",
  },
  {
    id: "17",
    date: "20.03",
    year: 2027,
    day: "СБ",
    artist: "instasamka",
    title: "INSTASAMKA",
    city: "Кишинев",
    venue: "Skal Club",
    address: "",
  },
] as Show[]).sort((a, b) => sortKey(a) - sortKey(b));

function sortKey(show: Show) {
  const [day = 0, month = 0] = show.date.split(".").map(Number);
  return show.year * 10000 + month * 100 + day;
}

export const showsByArtist = (artist: ArtistId) => upcoming.filter((show) => show.artist === artist);
