import { useState } from "react";

import { Button, Heading, Radio } from "@navikt/ds-react";

import { Paragraf_11_3Type } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { useForm } from "react-hook-form";
import { getText } from "../../../tekster/tekster";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { sendLøsning } from "./SendLosning";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_3Type | undefined;
  personident: string;
};

const Paragraf_11_3 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-3</div>;
  }
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, {
      løsning_11_3_manuell: {
        erOppfylt: datas.erOppfylt === "true",
      },
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn("Noe feilet under innsending");
      console.warn(res);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Bosatt
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} />
      </div>
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
        <div>
          <Button
            variant={"tertiary"}
            type={"button"}
            onClick={() => {
              reset({ erOppfylt: null });
            }}
          >
            Nullstill vurdering
          </Button>
        </div>
        <div>
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("paragrafer.knapper.fortsett")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { Paragraf_11_3 };
