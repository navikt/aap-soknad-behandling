import React from "react";
import { Button } from "@navikt/ds-react";
import { Paragraf_11_2 } from "../paragrafer/paragraf_11_2/Paragraf_11_2";
import { Paragraf_11_3 } from "../paragrafer/paragraf_11_3/Paragraf_11_3";
import { SøkerType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjemaNew } from "../../../hooks/FormHook";

import * as styles from "../paragrafer/paragraf.module.css";
import { Paragraf_11_4 } from "../paragrafer/Paragraf_11_4";

export interface InngangsvilkårFormFieldValues {
  erMedlem: string;
  erOppfylt: string;
}

interface Props {
  søker: SøkerType;
}

export const Inngangsvilkår = (props: Props) => {
  const { søker } = props;
  const { handleSubmit, control, errors, onSubmit, isLoading, resetField } =
    useSkjemaNew<InngangsvilkårFormFieldValues>({
      defaultValues: {
        erMedlem: "",
        erOppfylt: "",
      },
    });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(søker.personident, data))}>
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

      <div className={styles.fortsettKnapp}>
        <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </div>
    </form>
  );
};
