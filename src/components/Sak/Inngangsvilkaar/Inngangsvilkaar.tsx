import React from "react";
import { Button } from "@navikt/ds-react";
import { Paragraf_11_2 } from "../paragrafer/paragraf_11_2/Paragraf_11_2";
import { Paragraf_11_3 } from "../paragrafer/paragraf_11_3/Paragraf_11_3";
import { SøkerType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/SkjemaHook";

import * as styles from "../paragrafer/paragraf.module.css";
import { Paragraf_11_4 } from "../paragrafer/paragraf_11_4/Paragraf_11_4";

export interface InngangsvilkårFormFields {
  erMedlem: string;
  erOppfylt: string;
}

interface InngangsvilkårFormData {
  erMedlem: boolean;
  erOppfylt: boolean;
}

interface Props {
  søker: SøkerType;
}

export const Inngangsvilkår = (props: Props) => {
  const { søker } = props;
  const { handleSubmit, control, errors, resetField, onSubmit, isLoading } = useSkjema<
    InngangsvilkårFormFields,
    InngangsvilkårFormData
  >({
    erMedlem: "",
    erOppfylt: "",
  });

  const visFerdigVisningParagraf11_2 =
    søker.sak.paragraf_11_2?.utfall.valueOf() !== "IKKE_VURDERT" ||
    søker.sak.paragraf_11_2?.autorisasjon.valueOf() === "LESE";
  const visFerdigVisningParagraf11_3 =
    søker.sak.paragraf_11_3?.utfall.valueOf() !== "IKKE_VURDERT" ||
    søker.sak.paragraf_11_3?.autorisasjon.valueOf() === "LESE";
  const visFerdigVisningParagraf11_4 =
    søker.sak.paragraf_11_4?.utfall.valueOf() !== "IKKE_VURDERT" ||
    søker.sak.paragraf_11_4?.autorisasjon.valueOf() === "LESE";

  const visKnapp = visFerdigVisningParagraf11_2 && visFerdigVisningParagraf11_3 && visFerdigVisningParagraf11_4;

  // TODO Legg til korrekt url
  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit("", {
          erOppfylt: data.erOppfylt === "true",
          erMedlem: data.erMedlem === "true",
        })
      )}
    >
      <Paragraf_11_2
        control={control}
        vilkårsvurdering={søker.sak.paragraf_11_2}
        errors={errors}
        resetField={resetField}
      />
      <Paragraf_11_3
        control={control}
        errors={errors}
        resetField={resetField}
        vilkårsvurdering={søker.sak.paragraf_11_3}
      />
      <Paragraf_11_4 vilkårsvurdering={søker.sak.paragraf_11_4} fødselsdato={søker.fødselsdato} />

      {!visKnapp && (
        <div className={styles.fortsettKnapp}>
          <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
            {getText("paragrafer.knapper.fortsett")}
          </Button>
        </div>
      )}
    </form>
  );
};
