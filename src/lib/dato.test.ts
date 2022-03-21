import { subYears, addDays } from "date-fns";
import { finnAlder, formaterPid } from "./dato";

describe("dato-verktøy", () => {

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

  test("deler personidentifikator i fdato og personnummer",() => {
    expect(formaterPid("12345678910")).toBe("123456 78910");
  });
});
