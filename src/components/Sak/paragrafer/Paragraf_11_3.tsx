import { useState } from "react";

import { Button, Heading, Radio, RadioGroup } from "@navikt/ds-react";

import { VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { useForm } from "react-hook-form";
import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";

const Paragraf_11_3 = ({
  vilkårsvurderinger,
  personident,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
  personident: string;
}): JSX.Element => {
  const {
    register,
    handleSubmit,
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
        erOppfylt: datas.erOppfylt,
      },
    });
    oppdaterSenderMelding(false);
    if(!res.ok) {
      console.warn('Noe feilet under innsending');
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
        <RadioGroup legend={"Oppfyller medlemmet 11-3?"} size={"medium"} error={errors.erOppfylt?.message}>
          <Radio value={"true"} {...register("erOppfylt", { required: getText("inngangsvilkår.påkrevd") })}>
            Ja
          </Radio>
          <Radio value={"false"} {...register("erOppfylt", { required: getText("inngangsvilkår.påkrevd") })}>
            Nei
          </Radio>
        </RadioGroup>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </form>
    </div>
  );
};

export { Paragraf_11_3 };
