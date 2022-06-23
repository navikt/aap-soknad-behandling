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

export const Paragraf_11_3 = (props: Props) => {
  const { vilkårsvurdering, control, errors, resetField } = props;

  if (!vilkårsvurdering) {
    return <div>Kunne ikke finne vilkårsvurdering for 11-3</div>;
  }

  const visSkjemaVisnig = vilkårsvurdering?.utfall !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon === "LESE";
  const visFerdigVisning = vilkårsvurdering?.utfall === "IKKE_VURDERT" && vilkårsvurdering?.autorisasjon !== "LESE";

  return (
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText("paragrafer.11_3.heading")}>
      <>
        {visSkjemaVisnig && (
          <NewRadioGroupWrapper
            name={"erOppfylt"}
            tekstNokkel={"paragrafer.11_3"}
            errors={errors}
            control={control}
            rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
            resetField={resetField}
          >
            <Radio value={"true"}>Ja</Radio>
            <Radio value={"false"}>Nei</Radio>
          </NewRadioGroupWrapper>
        )}
      </>

      <>
        {visFerdigVisning && (
          <Ferdigvisning vilkårsvurdering={vilkårsvurdering} label={getText("paragrafer.11_3.legend")} />
        )}
      </>
    </ParagrafBlokk>
  );
};
