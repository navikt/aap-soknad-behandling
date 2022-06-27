import React from "react";
import { Paragraf_11_2Type } from "../../../../types/SakType";
import { ParagrafBlokk } from "../ParagrafBlokk";
import { Radio } from "@navikt/ds-react";
import { getText } from "../../../../tekster/tekster";
import { NewRadioGroupWrapper } from "../../../RadioGroupWrapper/NewRadioGroupWrapper";

import { Control, UseFormResetField } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types";
import { InngangsvilkårFormFieldValues } from "../../Inngangsvilkaar/Inngangsvilkaar";
import { Ferdigvisning } from "../../Ferdigvisning/Ferdigvisning";

type Props = {
  vilkårsvurdering?: Paragraf_11_2Type;
  control: Control<InngangsvilkårFormFieldValues>;
  errors: FieldErrors<InngangsvilkårFormFieldValues>;
  resetField: UseFormResetField<InngangsvilkårFormFieldValues>;
};

export const Paragraf_11_2 = (props: Props) => {
  const { vilkårsvurdering, control, errors, resetField } = props;

  if (!vilkårsvurdering) {
    return <div>Kunne ikke finne vilkårsvurdering for 11-2</div>;
  }

  const visSkjema =
    vilkårsvurdering?.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering?.autorisasjon.valueOf() !== "LESE";
  const visFerdigVisning =
    vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE";

  console.log("vilkårsvurdering", vilkårsvurdering);
  return (
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText("paragrafer.11_2.heading")}>
      <div>
        {visSkjema && (
          <NewRadioGroupWrapper
            name={"erMedlem"}
            tekstNokkel={"paragrafer.11_2"}
            errors={errors}
            control={control}
            rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
            resetField={resetField}
          >
            <Radio value={"true"}>Ja</Radio>
            <Radio value={"false"}>Nei</Radio>
          </NewRadioGroupWrapper>
        )}
      </div>
      <div>
        {visFerdigVisning && (
          <Ferdigvisning vilkårsvurdering={vilkårsvurdering} label={getText("paragrafer.11_2.legend")} />
        )}
      </div>
    </ParagrafBlokk>
  );
};
