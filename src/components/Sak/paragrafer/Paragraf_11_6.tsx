import { Paragraf_11_6Type } from "../../../types/SakType";
import { BodyShort, Button, Heading, Label, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { ParagrafBlokk } from "./ParagrafBlokk";

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
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_a.heading`)}
        </Heading>
        <Label>{getText(`${tekstNokkel}.bokstav_a.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harBehovForBehandling ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_b.heading`)}
        </Heading>
        <Label>{getText(`${tekstNokkel}.bokstav_b.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harBehovForTiltak ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_c.heading`)}
        </Heading>
        <Label>{getText(`${tekstNokkel}.bokstav_c.legend`)}</Label>
        <BodyShort>{vilkårsvurdering.harMulighetForAaKommeIArbeid ? "Ja" : "Nei"}</BodyShort>
      </ParagrafBlokk>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { handleSubmit, control, reset, errors, onSubmit, senderMelding, getValues } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_6_manuell: {
      // erOppfylt: datas.erOppfylt === "true",
      harBehovForBehandling: datas.harBehovForBehandling, // bokstav a
      harBehovForTiltak: datas.harBehovForTiltak, // bokstav b
      harMulighetForAaKommeIArbeid: datas.harMulighetForAaKommeIArbeid, // bokstav c
    },
  });
  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_a.heading`)}
        </Heading>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_a`}
          control={control}
          feltNokkel={"harBehovForBehandling"}
          reset={reset}
          getValues={getValues}
          rules={{ required: getText(`${tekstNokkel}.bokstav_a.påkrevd`) }}
          errors={errors}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_b.heading`)}
        </Heading>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_b`}
          feltNokkel={"harBehovForTiltak"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_b.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_b.påkrevd`) }}
          reset={reset}
          getValues={getValues}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <ParagrafBlokk>
        <Heading level={"3"} size={"medium"}>
          {getText(`${tekstNokkel}.bokstav_c.heading`)}
        </Heading>
        <RadioGroupWrapper
          tekstNokkel={`${tekstNokkel}.bokstav_c`}
          feltNokkel={"harMulighetForAaKommeIArbeid"}
          control={control}
          legend={getText(`${tekstNokkel}.bokstav_c.legend`)}
          errors={errors}
          rules={{ required: getText(`${tekstNokkel}.bokstav_c.påkrevd`) }}
          reset={reset}
          getValues={getValues}
        >
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroupWrapper>
      </ParagrafBlokk>
      <div>
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
