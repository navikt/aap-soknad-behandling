import { subYears, addDays } from "date-fns";
import { datoFraArray, finnAlder } from "./dato";

describe("dato-verktøy", () => {
  test("lager dato-objekt fra array", () => {
    const datoArray = [2008, 9, 10];
    const res = datoFraArray(datoArray);
    expect(res.getFullYear()).toBe(datoArray[0]);
  });

  test("kaster feil ved ugyldig input-lengde", () => {
    expect(() => datoFraArray([2007])).toThrowError(Error);
  });

  test("er 25 år i dag", () => {
    const nå = new Date();
    const fdato = new Date(subYears(nå, 25));
    const alder = finnAlder(fdato);
    const forventetAlder = 25;
    expect(alder).toBe(forventetAlder);
  });

  test("blir 18 i morgen", () => {
    const nå = new Date();
    const alder = finnAlder(new Date(addDays(subYears(nå, 18), 1)));
    const forventetAlder = 17;
    expect(alder).toBe(forventetAlder);
  });
});
