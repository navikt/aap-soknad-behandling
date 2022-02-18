import {formaterDatoArray} from "./dato";

describe("dato-verktøy", () => {
  test("formaterer dato-array", () => {
    const res = formaterDatoArray([2007, 7, 8]);
    expect(res).toEqual("08.07.2007");
  })

  test("gi feil ved ugyldig input", () => {
    expect(() => formaterDatoArray([2007, 7])).toThrowError(Error);
  })
});
