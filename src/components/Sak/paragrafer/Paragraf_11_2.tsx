import { Button, Heading, Radio } from "@navikt/ds-react";

import { Paragraf_11_2Type } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { useForm } from "react-hook-form";
import { sendLøsning } from "./SendLosning";
import { useState } from "react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_2Type | undefined;
  personident: string;
};

const Paragraf_11_2 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-2</div>;
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, {
      løsning_11_2_manuell: {
        erMedlem: datas.erOppfylt,
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

  if (!vilkårsvurdering.måVurderesManuelt) {
    return (
      <div className={styles.paragraf__blokk}>
        <div className={styles.paragraf__heading}>
          <Heading size={"medium"} level={"3"}>
            Medlemskap i Folketrygden
          </Heading>
          <Vilkarsstatus
            erOppfylt={vilkårsvurdering.erOppfylt}
            måVurderesManuelt={vilkårsvurdering.måVurderesManuelt}
          />
        </div>
        <div>{`Vilkåret er ${vilkårsvurdering.erOppfylt ? "oppfylt" : "ikke oppfylt"}`}</div>
      </div>
    );
  }

  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Medlemskap i Folketrygden
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} måVurderesManuelt={vilkårsvurdering.måVurderesManuelt} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroupWrapper
          name={"erOppfylt"}
          control={control}
          legend={"Oppfyller medlemmet 11-2?"}
          error={errors.erOppfylt?.message}
          rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
        >
          <Radio value={"ja"}>Ja</Radio>
          <Radio value={"nei"}>Nei</Radio>
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

export { Paragraf_11_2 };
