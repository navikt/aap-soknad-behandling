import { VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { Button, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendLøsning } from "./SendLosning";

type ParagrafProps = {
  vilkårsvurdering: VilkårsvurderingType | undefined;
  personident: string;
}

const Paragraf_11_6 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  if (!vilkårsvurdering) {
    return <div>Fant ingen vurdering for 11-6</div>;
  }
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, {
      løsning_11_6_manuell: {
        erOppfylt: datas.erOppfylt === "true",
      }
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn("Noe feilet under innsending");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={styles.paragraf__blokk}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroupWrapper
          name={"erOppfylt"}
          control={control}
          legend={"Oppfyller medlemmet kravene i 11-6?"}
          error={errors.erOppfylt?.message}
          rules={{ required: getText("paragrafer.11_6.påkrevd") }}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
        <div>
          <Button
            type={"button"}
            variant={"tertiary"}
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

export { Paragraf_11_6 };
