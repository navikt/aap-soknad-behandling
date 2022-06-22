import { BodyShort, Button, Label, Radio } from "@navikt/ds-react";

import { Paragraf_11_5Type } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Løsning } from "../../../types/Losning";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { RenderWhen } from "../../RenderWhen";

import * as styles from "./paragraf.module.css";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_5Type | undefined;
  personident: string;
};
const tekstNokkel = "paragrafer.11_5";
const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_5Type }): JSX.Element | null => {
  if (vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering.autorisasjon.valueOf() !== "LESE") {
    return null;
  }

  const utfallstekst = (verdi: boolean | null) => {
    if (vilkårsvurdering.utfall === "IKKE_VURDERT") {
      return "Ikke vurdert enda";
    }
    return verdi ? "Ja" : "Nei";
  };

  return (
    <>
      <ParagrafBlokk heading={"Nedsatt arbeidsevne"} vilkårsvurdering={vilkårsvurdering}>
        <Label>{getText(`${tekstNokkel}.kravOmNedsattArbeidsevneErOppfylt.legend`)}</Label>
        <BodyShort>{utfallstekst(vilkårsvurdering.kravOmNedsattArbeidsevneErOppfylt)}</BodyShort>
      </ParagrafBlokk>
      <ParagrafBlokk heading={"Sykdom, skade eller lyte"} vilkårsvurdering={vilkårsvurdering}>
        <Label>{getText(`${tekstNokkel}.nedsettelseSkyldesSykdomEllerSkade.legend`)}</Label>
        <BodyShort>{utfallstekst(vilkårsvurdering.nedsettelseSkyldesSykdomEllerSkade)}</BodyShort>
      </ParagrafBlokk>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return null;
  }
  const { control, handleSubmit, errors, onSubmit, senderMelding, resetField, watch } = useSkjema();
  const løsning = (datas: any): Løsning => ({
    løsning_11_5_manuell: {
      kravOmNedsattArbeidsevneErOppfylt: datas.kravOmNedsattArbeidsevneErOppfylt,
      nedsettelseSkyldesSykdomEllerSkade: datas.nedsettelseSkyldesSykdomEllerSkade,
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <ParagrafBlokk heading={"Nedsatt arbeidsevne"} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          feltNokkel={"kravOmNedsattArbeidsevneErOppfylt"}
          control={control}
          tekstNokkel={`${tekstNokkel}.kravOmNedsattArbeidsevneErOppfylt`}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.kravOmNedsattArbeidsevneErOppfylt.påkrevd`) }}
          resetField={resetField}
          horisontal
        >
          <Radio value={"true"}>{getText(`${tekstNokkel}.kravOmNedsattArbeidsevneErOppfylt.ja`)}</Radio>
          <Radio value={"false"}>{getText(`${tekstNokkel}.kravOmNedsattArbeidsevneErOppfylt.nei`)}</Radio>
        </RadioGroupWrapper>
        <RenderWhen when={watch("kravOmNedsattArbeidsevneErOppfylt") === "true"}>
          <div className={styles.innrykk}>
            <RadioGroupWrapper
              feltNokkel={"arbeidsevneNedsattMedMinstHalvparten"}
              tekstNokkel={`${tekstNokkel}.arbeidsevneNedsattMedMinstHalvparten`}
              errors={errors}
              control={control}
              rules={{ required: getText(`${tekstNokkel}.arbeidsevneNedsattMedMinstHalvparten.påkrevd`) }}
              resetField={resetField}
              horisontal
            >
              <Radio value={"true"}>{getText(`${tekstNokkel}.arbeidsevneNedsattMedMinstHalvparten.ja`)}</Radio>
              <Radio value={"false"}>{getText(`${tekstNokkel}.arbeidsevneNedsattMedMinstHalvparten.nei`)}</Radio>
            </RadioGroupWrapper>
          </div>
        </RenderWhen>
      </ParagrafBlokk>
      <ParagrafBlokk heading={"Sykdom, skade eller lyte"} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          feltNokkel={"nedsettelseSkyldesSykdomEllerSkade"}
          control={control}
          tekstNokkel={`${tekstNokkel}.nedsettelseSkyldesSykdomEllerSkade`}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.nedsettelseSkyldesSykdomEllerSkade.påkrevd`) }}
          resetField={resetField}
          horisontal
        >
          <Radio value={"true"}>{getText(`${tekstNokkel}.nedsettelseSkyldesSykdomEllerSkade.ja`)}</Radio>
          <Radio value={"false"}>{getText(`${tekstNokkel}.nedsettelseSkyldesSykdomEllerSkade.nei`)}</Radio>
        </RadioGroupWrapper>
        <div className={styles.fortsettKnapp}>
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("paragrafer.knapper.fullfør")}
          </Button>
        </div>
      </ParagrafBlokk>
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
