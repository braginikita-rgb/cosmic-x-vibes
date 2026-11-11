import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { upcoming } from "./shows";

describe("The Limba April reschedule", () => {
  const limba = upcoming.filter((s) => s.artist === "the-limba");
  test("Warsaw moves to April 23", () => {
    assert.equal(limba.find((show) => show.city === "Варшава")?.date, "23.04");
  });
  test("Prague moves to April 24", () => {
    assert.equal(limba.find((show) => show.city === "Прага")?.date, "24.04");
  });
  test("Riga moves to April 25", () => {
    assert.equal(limba.find((show) => show.city === "Рига")?.date, "25.04");
  });
  test("Chisinau moves to April 28", () => {
    assert.equal(limba.find((show) => show.city === "Кишинев")?.date, "28.04");
  });
  test("Prague venue is OX CLUB", () => {
    assert.equal(limba.find((show) => show.city === "Прага")?.venue, "OX CLUB");
  });
  test("Riga venue is FIRST CLUB", () => {
    assert.equal(limba.find((show) => show.city === "Рига")?.venue, "FIRST CLUB");
  });
});
describe("INSTASAMKA World Tour 2027", () => {
  const insta = upcoming.filter((s) => s.artist === "instasamka");
  test("has thirteen shows", () => assert.equal(insta.length, 13));
  test("Tbilisi is Feb 24 at Mtatsminda Hall", () => {
    const s = insta.find((x) => x.city === "Тбилиси");
    assert.equal(s?.date, "24.02");
    assert.equal(s?.venue, "Mtatsminda Hall");
  });
  test("Budapest is Mar 18 at Dürer Kert", () => {
    assert.equal(insta.find((x) => x.city === "Будапешт")?.date, "18.03");
  });
  test("Amsterdam is Mar 4 at Club Panama", () => {
    const s = insta.find((x) => x.city === "Амстердам");
    assert.equal(s?.date, "04.03");
    assert.equal(s?.venue, "Club Panama");
  });
  test("Cologne is Mar 5 at BOGEN 2", () => {
    const s = insta.find((x) => x.city === "Кёльн");
    assert.equal(s?.date, "05.03");
    assert.equal(s?.venue, "BOGEN 2");
  });
  test("Prague is Mar 8 at OX Club", () => {
    const s = insta.find((x) => x.city === "Прага");
    assert.equal(s?.date, "08.03");
    assert.equal(s?.venue, "OX Club");
  });
  test("Warsaw is Mar 9 at Oczki Club", () => {
    const s = insta.find((x) => x.city === "Варшава");
    assert.equal(s?.date, "09.03");
    assert.equal(s?.venue, "Oczki Club");
  });
  test("Berlin is Mar 12 at Säälchen", () => {
    const s = insta.find((x) => x.city === "Берлин");
    assert.equal(s?.date, "12.03");
    assert.equal(s?.venue, "Säälchen");
  });
  test("Chișinău is Mar 20 at Skal Club", () => {
    const s = insta.find((x) => x.city === "Кишинев");
    assert.equal(s?.date, "20.03");
    assert.equal(s?.venue, "Skal Club");
  });
  test("new shows all point to the impreza sales page", () => {
    for (const city of ["Амстердам", "Кёльн", "Прага", "Варшава", "Берлин", "Кишинев"]) {
      assert.equal(insta.find((x) => x.city === city)?.ticketUrl, "https://www.impreza.events/instasamka");
    }
  });
  test("shows are sorted chronologically across months", () => {
    assert.equal(upcoming[0]?.city, "Тбилиси");
    assert.equal(upcoming.at(-1)?.city, "Кишинев");
    assert.equal(upcoming.at(-1)?.year, 2027);
    const dates = upcoming.map((s) => s.year * 10000 + Number(s.date.slice(3)) * 100 + Number(s.date.slice(0, 2)));
    assert.deepEqual(dates, [...dates].sort((a, b) => a - b));
  });
});
