import { useState } from "react";

import { Button, Heading, Radio } from "@navikt/ds-react";

import { VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { useForm } from "react-hook-form";
import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";

const Paragraf_11_3 = ({
  vilkårsvurderinger,
  personident,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
  personident: string;
}): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const [meldingErSendt, settMeldingErSendt] = useState<boolean>(false); // temporary
  if (!vilkårsvurderinger) {
    return <>Fant ikke 11-3</>;
  }
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await fetchPOST(`/aap-behandling/api/sak/${personident}/losning`, {
      løsning_11_3_manuell: {
        erOppfylt: datas.erOppfylt === "true",
      },
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn("Noe feilet under innsending");
    } else {
      settMeldingErSendt(true);
    }
  };

  if (meldingErSendt) {
    return <div>Melding er sendt inn</div>;
  }

  return (
    <div className={styles.paragraf__blokk}>
      <Heading size={"medium"} level={"3"} className={styles.paragraf__heading}>
        Bosatt
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroupWrapper
          name={"erOppfylt"}
          control={control}
          legend={"Oppfyller medlemmet 11-3?"}
          error={errors.erOppfylt?.message}
          rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </form>
    </div>
  );
};

export { Paragraf_11_3 };
