import React from "react";
import { Paragraf_11_2Type } from "../../../../types/SakType";
import { ParagrafBlokk } from "../ParagrafBlokk";
import { Radio } from "@navikt/ds-react";
import { getText } from "../../../../tekster/tekster";
import { NewRadioGroupWrapper } from "../../../RadioGroupWrapper/NewRadioGroupWrapper";

import { Control } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types";
import { Paragraf_11_2_FormFieldValues } from "../../Inngangsvilkaar/Inngangsvilkaar";
import { Ferdigvisning } from "../../Ferdigvisning/Ferdigvisning";

type Props = {
  vilkårsvurdering?: Paragraf_11_2Type;
  control: Control<Paragraf_11_2_FormFieldValues>;
  errors: FieldErrors<Paragraf_11_2_FormFieldValues>;
};

export const Paragraf_11_2_new = (props: Props) => {
  const { vilkårsvurdering, control, errors } = props;

  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT") {
    //TODO Legg til lese autorisasjon  vilkårsvurdering?.autorisasjon.valueOf() === "LESE"
    return null;
  }
  const visFerdigVisning =
    vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering.autorisasjon.valueOf() !== "LESE";

  return (
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText("paragrafer.11_2.heading")}>
      <NewRadioGroupWrapper
        name={"erMedlem"}
        tekstNokkel={"paragrafer.11_2"}
        errors={errors}
        control={control}
        rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
      >
        <Radio value={"true"}>Ja</Radio>
        <Radio value={"false"}>Nei</Radio>
      </NewRadioGroupWrapper>
      <div>{visFerdigVisning && <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />}</div>
    </ParagrafBlokk>
  );
};
