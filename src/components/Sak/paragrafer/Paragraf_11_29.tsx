import { Paragraf_11_29Type, VilkårsvurderingType } from "../../../types/SakType";
import * as styles from "./paragraf.module.css";
import { BodyShort, Button, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_29Type | undefined;
  personident: string;
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
    return null;
  }
  return (
    <>
      <BodyShort className={styles.key}>Oppfyller medlemmet kravene i 11-29?</BodyShort>
      <BodyShort className={styles.value}>{vilkårsvurdering.erOppfylt ? "Ja" : "Nei"}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { handleSubmit, control, reset, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_29_manuell: {
      erOppfylt: datas.erOppfylt === "true",
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        name={"erOppfylt"}
        control={control}
        legend={"Oppfyller medlemmet kravene i 11-29?"}
        error={errors.erOppfylt?.message}
        rules={{ required: getText("paragrafer.11_29.påkrevd") }}
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
  );
};

const Paragraf_11_29 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ingen vurdering for 11-12</div>;
  }

  return (
    <div className={styles.paragraf__blokk}>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </div>
  );
};

export { Paragraf_11_29 };
