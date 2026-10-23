import { describe, expect, test } from "bun:test";
import { upcoming } from "./shows";

describe("The Limba April reschedule", () => {
  test("Warsaw moves to April 23", () => {
    expect(upcoming.find((show) => show.city === "Варшава")?.date).toBe("23.04");
  });
  test("Prague moves to April 24", () => {
    expect(upcoming.find((show) => show.city === "Прага")?.date).toBe("24.04");
  });
  test("Riga moves to April 25", () => {
    expect(upcoming.find((show) => show.city === "Рига")?.date).toBe("25.04");
  });
  test("Chisinau moves to April 28", () => {
    expect(upcoming.find((show) => show.city === "Кишинев")?.date).toBe("28.04");
  });
  test("Prague venue is OX CLUB", () => {
    expect(upcoming.find((show) => show.city === "Прага")?.venue).toBe("OX CLUB");
  });
  test("Riga venue is FIRST CLUB", () => {
    expect(upcoming.find((show) => show.city === "Рига")?.venue).toBe("FIRST CLUB");
  });
});