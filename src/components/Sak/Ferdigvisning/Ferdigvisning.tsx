import { VilkårsvurderingType, VilkårsvurderingUtenAutorisasjonType } from "../../../types/SakType";
import { BodyShort, Label } from "@navikt/ds-react";
import { utfallsTekst } from "../../../common/utfall";

interface Props {
  vilkårsvurdering: VilkårsvurderingUtenAutorisasjonType | VilkårsvurderingType;
  label: string;
}

export const Ferdigvisning = (props: Props) => {
  const { vilkårsvurdering, label } = props;

  return (
    <>
      <Label>{label}</Label>
      <BodyShort>{utfallsTekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};
