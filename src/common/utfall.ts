import { UtfallType } from "../types/SakType";

export function utfallsTekst(utfall: UtfallType): string {
  switch (utfall) {
    case "IKKE_OPPFYLT":
      return "Nei";
    case "OPPFYLT":
      return "Ja";
    case "IKKE_RELEVANT":
      return "Ikke relevant";
    case "IKKE_VURDERT":
      return "Ikke vurdert enda";
    default:
      return utfall;
  }
}
