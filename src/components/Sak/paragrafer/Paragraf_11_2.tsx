import { BodyShort, Button, Heading, Label, Radio } from "@navikt/ds-react";

import { Paragraf_11_2Type } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { ParagrafBlokk } from "./ParagrafBlokk";

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
      <Label>{getText("paragrafer.11_2.legend")}</Label>
      <BodyShort>{vilkårsvurdering.erOppfylt ? "Ja" : "Nei"}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  const { handleSubmit, control, reset, errors, onSubmit, senderMelding, getValues } = useSkjema();
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
        feltNokkel={"erOppfylt"}
        control={control}
        tekstNokkel={"paragrafer.11_2"}
        errors={errors}
        rules={{ required: getText("paragrafer.inngangsvilkår.påkrevd") }}
        reset={reset}
        getValues={getValues}
      >
        <Radio value={"ja"}>Ja</Radio>
        <Radio value={"nei"}>Nei</Radio>
      </RadioGroupWrapper>
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
    <ParagrafBlokk>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          {getText("paragrafer.11_2.heading")}
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} måVurderesManuelt={vilkårsvurdering.måVurderesManuelt} />
      </div>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </ParagrafBlokk>
  );
};

export { Paragraf_11_2 };
