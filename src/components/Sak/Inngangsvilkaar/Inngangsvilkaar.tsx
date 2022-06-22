import React from "react";
import { Button } from "@navikt/ds-react";
import { Paragraf_11_2_new } from "../paragrafer/paragrad_11_2/Paragraf_11_2_new";
import { SøkerType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjemaNew } from "../../../hooks/FormHook";

export interface Paragraf_11_2_FormFieldValues {
  erMedlem: string;
  erOppfylt: string;
}

interface Props {
  søker: SøkerType;
}

export const Inngangsvilkår2 = (props: Props) => {
  const { søker } = props;
  const { handleSubmit, control, errors, onSubmit, isLoading } = useSkjemaNew<Paragraf_11_2_FormFieldValues>({
    defaultValues: {
      erMedlem: "",
      erOppfylt: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(søker.personident, data))}>
      <Paragraf_11_2_new control={control} vilkårsvurdering={søker.sak.paragraf_11_2} errors={errors} />

      <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
        {getText("paragrafer.knapper.fortsett")}
      </Button>
    </form>
  );
};
