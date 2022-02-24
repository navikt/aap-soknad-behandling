import {getText} from "./tekster";

describe("Tekster", () => {
  test("gir tekst tilbake", () => {
    const result = getText("paragraf.PARAGRAF_11_5");
    expect(result).toEqual("§ 11-5");
  });

  test("gir nøkkel tilbake når tekst ikke finnes", ()=> {
    const result = getText("nøkkel.som.ikke.finnes");
    expect(result).toEqual("nøkkel.som.ikke.finnes");
  });
});
