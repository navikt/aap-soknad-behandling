import { Paragraf_11_29Type, VilkårsvurderingType } from "../../../types/SakType";
import { BodyShort, Button, Label, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { ParagrafBlokk } from "./ParagrafBlokk";

import * as styles from "./paragraf.module.css";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_29Type | undefined;
  personident: string;
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return null;
  }
  const utfallstekst = (utfall: string) => {
    switch (utfall) {
      case "IKKE_OPPFYLT":
        return "Nei";
      case "OPPFYLT":
        return "Ja";
      case "IKKE_RELEVANT":
        return "Ikke relevant";
      case "IKKE_VURDERT":
        return "Ikke vurdert enda";
      default:
        return utfall;
    }
  };

  return (
    <>
      <Label>Oppfyller medlemmet kravene i 11-29?</Label>
      <BodyShort>{utfallstekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering?.autorisasjon.valueOf() !== "LESE") {
    return null;
  }
  const { handleSubmit, control, resetField, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_29_manuell: {
      erOppfylt: datas.erOppfylt === "true",
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        feltNokkel={"erOppfylt"}
        control={control}
        tekstNokkel={"paragrafer.11_29"}
        errors={errors}
        rules={{ required: getText("paragrafer.11_29.påkrevd") }}
        resetField={resetField}
        horisontal
      >
        <Radio value={"true"}>Ja</Radio>
        <Radio value={"false"}>Nei</Radio>
      </RadioGroupWrapper>
      <div className={styles.fortsettKnapp}>
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
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText("paragrafer.11_29.heading")}>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </ParagrafBlokk>
  );
};

export { Paragraf_11_29 };
