import { Paragraf_11_2Type } from "../../../types/SakType";
import { BodyShort, Label } from "@navikt/ds-react";
import { getText } from "../../../tekster/tekster";

interface Props {
  vilkårsvurdering: Paragraf_11_2Type;
}

export const Ferdigvisning = (props: Props) => {
  const { vilkårsvurdering } = props;

  const utfallstekst = (utfall: string) => {
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
  };

  return (
    <>
      <Label>{getText("paragrafer.11_2.legend")}</Label>
      <BodyShort>{utfallstekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};
