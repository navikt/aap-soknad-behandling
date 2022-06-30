import { VilkårsvurderingType, VilkårsvurderingUtenAutorisasjonType } from "../../../types/SakType";
import { BodyShort, Label } from "@navikt/ds-react";

interface Props {
  vilkårsvurdering: VilkårsvurderingUtenAutorisasjonType | VilkårsvurderingType;
  label: string;
}

export const Ferdigvisning = (props: Props) => {
  const { vilkårsvurdering, label } = props;

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
      <Label>{label}</Label>
      <BodyShort>{utfallstekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};
