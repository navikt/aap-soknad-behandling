import { BodyShort, Button, Heading, Radio } from "@navikt/ds-react";

import { Paragraf_11_2Type } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_2Type | undefined;
  personident: string;
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_2Type }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
    return null;
  }

  return (
    <>
      <BodyShort className={styles.key}>{getText("paragrafer.11_2.vurdering")}</BodyShort>
      <BodyShort className={styles.value}>{vilkårsvurdering.erOppfylt ? "Ja" : "Nei"}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  const { handleSubmit, control, reset, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_2_manuell: {
      erMedlem: datas.erOppfylt,
    },
  });

  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        name={"erOppfylt"}
        control={control}
        legend={getText("paragrafer.11_2.vurdering")}
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
  );
};

const Paragraf_11_2 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-2</div>;
  }

  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          {getText("paragrafer.11_2.heading")}
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} måVurderesManuelt={vilkårsvurdering.måVurderesManuelt} />
      </div>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </div>
  );
};

export { Paragraf_11_2 };
