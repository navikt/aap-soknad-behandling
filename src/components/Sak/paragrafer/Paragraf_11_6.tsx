import { Paragraf_11_6Type } from "../../../types/SakType";
import { BodyShort, Button, Label, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { ParagrafBlokk } from "./ParagrafBlokk";

import * as styles from "./paragraf.module.css";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_6Type | undefined;
  personident: string;
};

const tekstNokkel = "paragrafer.11_6";

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_6Type }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
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

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { handleSubmit, control, resetField, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_6_manuell: {
      harBehovForBehandling: datas.harBehovForBehandling, // bokstav a
      harBehovForTiltak: datas.harBehovForTiltak, // bokstav b
      harMulighetForÅKommeIArbeid: datas.harMulighetForÅKommeIArbeid, // bokstav c
    },
  });
  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_a.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_a`}
          control={control}
          feltNokkel={"harBehovForBehandling"}
          resetField={resetField}
          rules={{ required: getText(`${tekstNokkel}.bokstav_a.påkrevd`) }}
          errors={errors}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_b.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_b`}
          feltNokkel={"harBehovForTiltak"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_b.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_b.påkrevd`) }}
          resetField={resetField}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk heading={getText(`${tekstNokkel}.bokstav_c.heading`)} vilkårsvurdering={vilkårsvurdering}>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_c`}
          feltNokkel={"harMulighetForÅKommeIArbeid"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_c.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_c.påkrevd`) }}
          resetField={resetField}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <div className={styles.fortsettKnapp}>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
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
