import { Paragraf_11_6Type } from "../../../types/SakType";
import { BodyShort, Button, Label, Radio } from "@navikt/ds-react";
import { getText } from "../../../tekster/tekster";
import { ParagrafBlokk } from "./ParagrafBlokk";

import * as styles from "./paragraf.module.css";
import { useSkjema } from "../../../hooks/SkjemaHook";
import { RadioGroupWrapper } from "../../RadioGroupWrapper/RadioGroupWrapper";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_6Type | undefined;
  personident: string;
};

const tekstNokkel = "paragrafer.11_6";

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_6Type }): JSX.Element | null => {
  if (vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering.autorisasjon.valueOf() !== "LESE") {
    return null;
  }
  return (
    <>
      <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText(`${tekstNokkel}.bokstav_a.heading`)}>
        <Label>{getText(`${tekstNokkel}.bokstav_a.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harBehovForBehandling ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
      <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText(`${tekstNokkel}.bokstav_b.heading`)}>
        <Label>{getText(`${tekstNokkel}.bokstav_b.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harBehovForTiltak ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
      <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText(`${tekstNokkel}.bokstav_c.heading`)}>
        <Label>{getText(`${tekstNokkel}.bokstav_c.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harMulighetForÅKommeIArbeid ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
    </>
  );
};

interface Paragraf_11_6FormFields {
  harBehovForBehandling: string;
  harBehovForTiltak: string;
  harMulighetForÅKommeIArbeid: string;
}

interface Paragraf_11_6FormData {
  harBehovForBehandling: boolean | null;
  harBehovForTiltak: boolean | null;
  harMulighetForÅKommeIArbeid: boolean | null;
}

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return null;
  }

  const { control, errors, handleSubmit, resetField, onSubmit, isLoading } = useSkjema<
    Paragraf_11_6FormFields,
    Paragraf_11_6FormData
  >({
    harBehovForBehandling: "",
    harBehovForTiltak: "",
    harMulighetForÅKommeIArbeid: "",
  });

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(`/aap-behandling/api/sak/${personident}/losning/paragraf_11_6`, {
          harMulighetForÅKommeIArbeid: data.harMulighetForÅKommeIArbeid === "true",
          harBehovForTiltak: data.harBehovForTiltak === "true",
          harBehovForBehandling: data.harBehovForBehandling === "true",
        })
      )}
    >
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_a.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_a`}
          name={"harBehovForBehandling"}
          control={control}
          resetField={resetField}
          rules={{ required: getText(`${tekstNokkel}.bokstav_a.påkrevd`) }}
          errors={errors}
          horisontal
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_b.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_b`}
          name={"harBehovForTiltak"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_b.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_b.påkrevd`) }}
          resetField={resetField}
          horisontal
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_c.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_c`}
          name={"harMulighetForÅKommeIArbeid"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_c.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_c.påkrevd`) }}
          resetField={resetField}
          horisontal
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <div className={styles.fortsettKnapp}>
        <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </div>
    </form>
  );
};

const Paragraf_11_6 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ingen vurdering for 11-6</div>;
  }

  return (
    <>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </>
  );
};

export { Paragraf_11_6 };
