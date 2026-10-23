import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { upcoming } from "./shows";

describe("The Limba April reschedule", () => {
  test("Warsaw moves to April 23", () => {
    assert.equal(upcoming.find((show) => show.city === "Варшава")?.date, "23.04");
  });
  test("Prague moves to April 24", () => {
    assert.equal(upcoming.find((show) => show.city === "Прага")?.date, "24.04");
  });
  test("Riga moves to April 25", () => {
    assert.equal(upcoming.find((show) => show.city === "Рига")?.date, "25.04");
  });
  test("Chisinau moves to April 28", () => {
    assert.equal(upcoming.find((show) => show.city === "Кишинев")?.date, "28.04");
  });
  test("Prague venue is OX CLUB", () => {
    assert.equal(upcoming.find((show) => show.city === "Прага")?.venue, "OX CLUB");
  });
  test("Riga venue is FIRST CLUB", () => {
    assert.equal(upcoming.find((show) => show.city === "Рига")?.venue, "FIRST CLUB");
  });
});