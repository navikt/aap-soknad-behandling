import { useState } from "react";

import { Button, Heading, Radio } from "@navikt/ds-react";

import { VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { useForm } from "react-hook-form";
import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Vilkårsstatus } from "../Vilkarsstatus/Vilkårsstatus";

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
    reset,
    formState: { errors },
  } = useForm();
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  if (!vilkårsvurderinger || vilkårsvurderinger.length === 0) {
    return <div>Fant ikke 11-3</div>;
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
      window.location.reload();
    }
  };

  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Bosatt
        </Heading>
        <Vilkårsstatus tilstand={vilkårsvurderinger[0].tilstand} />
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
