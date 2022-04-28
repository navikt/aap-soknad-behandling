import { BodyShort, Button, Heading, Radio } from "@navikt/ds-react";

import { Paragraf_11_3Type, VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { getText } from "../../../tekster/tekster";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { useSkjema } from "../../../hooks/useSkjema";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_3Type | undefined;
  personident: string;
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { handleSubmit, control, reset, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_3_manuell: {
      erOppfylt: datas.erOppfylt === "true",
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        name={"erOppfylt"}
        control={control}
        legend={getText("paragrafer.11_3.vurdering")}
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
  );
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
    return null;
  }
  return (
    <>
      <BodyShort className={styles.key}>{getText("paragrafer.11_3.vurdering")}</BodyShort>
      <BodyShort className={styles.value}>{vilkårsvurdering.erOppfylt ? "Ja" : "Nei"}</BodyShort>
    </>
  );
};

const Paragraf_11_3 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-3</div>;
  }

  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          {getText("paragrafer.11_3.heading")}
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} måVurderesManuelt={vilkårsvurdering.måVurderesManuelt} />
      </div>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </div>
  );
};

export { Paragraf_11_3 };
