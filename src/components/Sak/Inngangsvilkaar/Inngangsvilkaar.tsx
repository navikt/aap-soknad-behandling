import React from "react";
import { Button } from "@navikt/ds-react";
import { Paragraf_11_2 } from "../paragrafer/Paragraf_11_2";
import { Paragraf_11_3 } from "../paragrafer/Paragraf_11_3";
import { SøkerType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/SkjemaHook";

import * as styles from "../paragrafer/paragraf.module.css";
import { Paragraf_11_4 } from "../paragrafer/Paragraf_11_4";
import { LøsningInngansvilkår } from "../../../types/Losning";
import { Modusmelding } from "../Modusmelding";
import { Seksjonsoverskrift } from "../Seksjonsoverskrift";
import { inngangsvilkarUrl } from "../../../api/apiUrls";

export interface InngangsvilkårFormFields {
  erMedlem: string;
  erOppfylt: string;
}

interface Props {
  søker: SøkerType;
}

export const Inngangsvilkår = (props: Props) => {
  const { søker } = props;
  const { handleSubmit, control, errors, resetField, onSubmit, isLoading } = useSkjema<
    InngangsvilkårFormFields,
    LøsningInngansvilkår
  >({
    erMedlem: "",
    erOppfylt: "",
  });

  const paragrafIkkeVurdert = [
    søker.sak.inngangsvilkår?.paragraf_11_2,
    søker.sak.inngangsvilkår?.paragraf_11_3,
    søker.sak.inngangsvilkår?.paragraf_11_4,
  ].some((paragraf) => paragraf?.utfall.valueOf() === "IKKE_VURDERT");

  const visFortsettKnapp = søker.sak.inngangsvilkår?.autorisasjon.valueOf() !== "LESE" && paragrafIkkeVurdert;
  return (
    <>
      <Seksjonsoverskrift tekstnokkel={"paragrafer.inngangsvilkår.heading"} />
      {søker.sak.inngangsvilkår?.autorisasjon.valueOf() === "LESE" && (
        <Modusmelding autorisasjon={søker.sak.inngangsvilkår.autorisasjon} />
      )}

      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(inngangsvilkarUrl(søker.personident), {
            løsning_11_2: {
              erMedlem: data.erMedlem === "true",
            },
            løsning_11_3: {
              erOppfylt: data.erOppfylt === "true",
            },
            løsning_11_4: {
              erOppfylt: null,
            },
          })
        )}
      >
        <Paragraf_11_2
          control={control}
          vilkårsvurdering={søker.sak.inngangsvilkår?.paragraf_11_2}
          errors={errors}
          resetField={resetField}
          autorisasjon={søker.sak.inngangsvilkår?.autorisasjon}
        />
        <Paragraf_11_3
          control={control}
          errors={errors}
          resetField={resetField}
          vilkårsvurdering={søker.sak.inngangsvilkår?.paragraf_11_3}
          autorisasjon={søker.sak.inngangsvilkår?.autorisasjon}
        />
        <Paragraf_11_4 vilkårsvurdering={søker.sak.inngangsvilkår?.paragraf_11_4} fødselsdato={søker.fødselsdato} />

        {visFortsettKnapp && (
          <div className={styles.fortsettKnapp}>
            <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
              {getText("paragrafer.knapper.fortsett")}
            </Button>
          </div>
        )}
      </form>
    </>
  );
};
