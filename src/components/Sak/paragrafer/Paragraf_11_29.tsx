import { Paragraf_11_29Type, VilkårsvurderingType } from "../../../types/SakType";
import { BodyShort, Button, Label, Radio } from "@navikt/ds-react";
import { getText } from "../../../tekster/tekster";
import { ParagrafBlokk } from "./ParagrafBlokk";

import * as styles from "./paragraf.module.css";
import { useSkjema } from "../../../hooks/SkjemaHook";
import { RadioGroupWrapper } from "../../RadioGroupWrapper/RadioGroupWrapper";
import { utfallsTekst } from "../../../common/utfall";

interface paragraf_11_29FormFieldValues {
  erOppfylt: string;
}

interface paragraf_11_29FormData {
  erOppfylt: boolean;
}

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_29Type | undefined;
  personident: string;
};

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return null;
  }

  return (
    <>
      <Label>Oppfyller medlemmet kravene i 11-29?</Label>
      <BodyShort>{utfallsTekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps) => {
  if (vilkårsvurdering?.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering?.autorisasjon.valueOf() !== "LESE") {
    return null;
  }

  const { control, resetField, errors, onSubmit, handleSubmit, isLoading } = useSkjema<
    paragraf_11_29FormFieldValues,
    paragraf_11_29FormData
  >({
    erOppfylt: "",
  });

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(`/aap-behandling/api/sak/${personident}/losning/paragraf_11_29`, {
          erOppfylt: data.erOppfylt === "true",
        })
      )}
    >
      <RadioGroupWrapper
        name="erOppfylt"
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
        <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </div>
    </form>
  );
};

const Paragraf_11_29 = ({ vilkårsvurdering, personident }: ParagrafProps) => {
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
