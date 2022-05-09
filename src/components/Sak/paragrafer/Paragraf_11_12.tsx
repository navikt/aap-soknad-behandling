import { Paragraf_11_12Type, VilkårsvurderingType } from "../../../types/SakType";
import { BodyShort, Button, Heading, Label, Radio } from "@navikt/ds-react";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { RenderWhen } from "../../RenderWhen";
import * as styles from "./paragraf.module.css";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_12Type | undefined;
  personident: string;
};

const tekstNokkel = "paragrafer.11_12";

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering.måVurderesManuelt) {
    return null;
  }
  return (
    <>
      <Label>OPPDATERT TEKST HER</Label>
      <BodyShort>{vilkårsvurdering.erOppfylt ? "Ja" : "Nei"}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (!vilkårsvurdering?.måVurderesManuelt) {
    return null;
  }
  const { handleSubmit, control, resetField, errors, onSubmit, senderMelding, watch } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_12_ledd1_manuell: {
      // erOppfylt: datas.erOppfylt === "true",
      bestemmesAv: datas.bestemmesAv,
      unntak: datas.unntak,
    },
  });

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        feltNokkel={"bestemmesAv"}
        control={control}
        tekstNokkel={`${tekstNokkel}.virkningstidspunkt`}
        errors={errors}
        rules={{ required: getText(`${tekstNokkel}.påkrevd`) }}
        resetField={resetField}
      >
        <Radio value={"soknadstidspunkt"}>Søknadstidspunkt dd.mm.yyyy (må hentes)</Radio>
        <Radio value={"maksdatoSykepenger"}>Maksdato sykepenger dd.mm.yyyy (må hentes)</Radio>
        <Radio value={"unntaksvurdering"}>Unntaksvurdering § 22-13, 7. ledd</Radio>
        <RenderWhen when={watch("bestemmesAv") === "unntaksvurdering"}>
          <div className={styles.innrykk}>
            <RadioGroupWrapper
              feltNokkel={"unntak"}
              tekstNokkel={`${tekstNokkel}.virkningstidspunkt.unntak`}
              errors={errors}
              control={control}
              resetField={resetField}
            >
              <Radio value={"forhindret"}>Søkeren ble åpenbart forhindret fra å sende søknaden.</Radio>
              <Radio value={"mangelfull"}>NAV har gitt mangelfull eller misvisende informasjon</Radio>
            </RadioGroupWrapper>
          </div>
        </RenderWhen>
        <Radio value={"etterSisteLoenn"}>Dagen etter siste lønnsutbetaling</Radio>
      </RadioGroupWrapper>
      <div className={styles.fortsettKnapp}>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("paragrafer.knapper.fortsett")}
        </Button>
      </div>
    </form>
  );
};

const Paragraf_11_12 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ingen vurdering for 11-12</div>;
  }

  return (
    <ParagrafBlokk>
      <Heading level={"3"} size={"medium"}>
        {getText(`${tekstNokkel}.virkningstidspunkt.heading`)}
      </Heading>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </ParagrafBlokk>
  );
};

export { Paragraf_11_12 };
