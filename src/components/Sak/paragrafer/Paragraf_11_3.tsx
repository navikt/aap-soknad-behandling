import React from "react";
import { Autorisasjontype, Paragraf_11_3_type } from "../../../types/SakType";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { Radio } from "@navikt/ds-react";
import { getText } from "../../../tekster/tekster";
import { RadioGroupWrapper } from "../../RadioGroupWrapper/RadioGroupWrapper";

import { Control, UseFormResetField } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types";
import { InngangsvilkårFormFields } from "../Inngangsvilkaar/Inngangsvilkaar";
import { Ferdigvisning } from "../Ferdigvisning/Ferdigvisning";

type Props = {
  vilkårsvurdering?: Paragraf_11_3_type;
  control: Control<InngangsvilkårFormFields>;
  errors: FieldErrors<InngangsvilkårFormFields>;
  resetField: UseFormResetField<InngangsvilkårFormFields>;
  autorisasjon?: Autorisasjontype;
};

export const Paragraf_11_3 = (props: Props) => {
  const { vilkårsvurdering, control, errors, resetField, autorisasjon } = props;

  if (!vilkårsvurdering) {
    return <div>Kunne ikke finne vilkårsvurdering for 11-3</div>;
  }

  const visSkjema = vilkårsvurdering?.utfall.valueOf() === "IKKE_VURDERT" && autorisasjon?.valueOf() !== "LESE";
  const visFerdigVisning = vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || autorisasjon?.valueOf() === "LESE";

  return (
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText("paragrafer.11_3.heading")}>
      <>
        {visSkjema && (
          <RadioGroupWrapper
            name={"erOppfylt"}
            tekstNokkel={"paragrafer.11_3"}
            errors={errors}
            control={control}
            rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
            resetField={resetField}
          >
            <Radio value={"true"}>Ja</Radio>
            <Radio value={"false"}>Nei</Radio>
          </RadioGroupWrapper>
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
