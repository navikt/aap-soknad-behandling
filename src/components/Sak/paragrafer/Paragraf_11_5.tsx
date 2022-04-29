import { BodyShort, Button, Heading, Radio } from "@navikt/ds-react";

import { Paragraf_11_5Type } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Løsning } from "../../../types/Losning";
import * as styles from "./paragraf.module.css";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_5Type | undefined;
  personident: string;
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_5Type }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
    return null;
  }

  return (
    <>
      <BodyShort className={styles.key}>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.label")}</BodyShort>
      <BodyShort className={styles.value}>
        {vilkårsvurdering.kravOmNedsattArbeidsevneErOppfylt ? "Ja" : "Nei"}
      </BodyShort>
      <BodyShort className={styles.key}>
        {getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.label")}
      </BodyShort>
      <BodyShort className={styles.value}>
        {vilkårsvurdering.nedsettelseSkyldesSykdomEllerSkade ? "Ja" : "Nei"}
      </BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { control, handleSubmit, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any): Løsning => ({
    løsning_11_5_manuell: {
      kravOmNedsattArbeidsevneErOppfylt: datas.kravOmNedsattArbeidsevneErOppfylt,
      nedsettelseSkyldesSykdomEllerSkade: datas.nedsettelseSkyldesSykdomEllerSkade,
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <div className={styles.paragraf__blokk}>
        <Heading size={"medium"} level={"3"}>
          Nedsatt arbeidsevne
        </Heading>
        <RadioGroupWrapper
          name={"kravOmNedsattArbeidsevneErOppfylt"}
          control={control}
          legend={getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.label")}
          error={errors.kravOmNedsattArbeidsevneErOppfylt?.message}
          rules={{ required: getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.påkrevd") }}
        >
          <Radio value={"true"}>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.ja")}</Radio>
          <Radio value={"false"}>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.nei")}</Radio>
        </RadioGroupWrapper>
      </div>
      <div className={styles.paragraf__blokk}>
        <Heading size={"medium"} level={"3"}>
          Sykdom, skade eller lyte
        </Heading>
        <RadioGroupWrapper
          name={"nedsettelseSkyldesSykdomEllerSkade"}
          control={control}
          legend={getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.label")}
          error={errors.nedsettelseSkyldesSykdomEllerSkade?.message}
          rules={{ required: getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.påkrevd") }}
        >
          <Radio value={"true"}>{getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.ja")}</Radio>
          <Radio value={"false"}>{getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.nei")}</Radio>
        </RadioGroupWrapper>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("paragrafer.knapper.fullfør")}
        </Button>
      </div>
    </form>
  );
};

const Paragraf_11_5 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-5</div>;
  }

  return (
    <>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </>
  );
};

export { Paragraf_11_5 };
