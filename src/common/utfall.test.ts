import { utfallsTekst } from "./utfall";

describe("ufallsTekst", () => {
  it("skal returenere riktig tekst for ikke relevant", () => {
    expect(utfallsTekst("IKKE_RELEVANT")).toEqual("Ikke relevant");
  });
  it("skal returenere riktig tekst for ikke vurdert", () => {
    expect(utfallsTekst("IKKE_VURDERT")).toEqual("Ikke vurdert enda");
  });
  it("skal returenere riktig tekst for oppfylt", () => {
    expect(utfallsTekst("OPPFYLT")).toEqual("Ja");
  });
  it("skal returenere riktig tekst for ikke oppfylt", () => {
    expect(utfallsTekst("IKKE_OPPFYLT")).toEqual("Nei");
  });
});
