import { Paragraf_11_12_type, VilkårsvurderingType } from "../../../types/SakType";
import { BodyShort, Button, Label, Radio, Textarea } from "@navikt/ds-react";
import { RadioGroupWrapperDeprecated } from "../../RadioGroupWrapper";
import { getText } from "../../../tekster/tekster";
import { useSkjemaDeprecated } from "../../../hooks/useSkjemaDeprecated";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { RenderWhen } from "../../RenderWhen";
import * as styles from "./paragraf.module.css";
import { utfallsTekst } from "../../../common/utfall";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_12_type | undefined;
  personident: string;
};

const tekstNokkel = "paragrafer.11_12";

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: VilkårsvurderingType }): JSX.Element | null => {
  if (vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering.autorisasjon.valueOf() !== "LESE") {
    return null;
  }

  return (
    <>
      <Label>OPPDATERT TEKST HER</Label>
      <BodyShort>{utfallsTekst(vilkårsvurdering.utfall)}</BodyShort>
    </>
  );
};

const Skjemavisning = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element | null => {
  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return null;
  }
  const { register, handleSubmit, control, resetField, errors, onSubmit, senderMelding, watch } = useSkjemaDeprecated();
  const løsning = (datas: any) => ({
    løsning_11_12_ledd1_manuell: {
      bestemmesAv: datas.bestemmesAv,
      unntak: datas.unntak,
      unntaksbegrunnelse: datas.unntaksbegrunnelse,
    },
  });

  const unntaksbegrunnelseLabel =
    watch("unntak") === "forhindret"
      ? "Utdyp hvorfor søkeren ble forhindret fra å sende inn søknaden."
      : "Utdyp hvilke mangelfulle eller misvisende opplysninger som er oppgitt.";

  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapperDeprecated
        feltNokkel={"bestemmesAv"}
        control={control}
        tekstNokkel={`${tekstNokkel}.virkningstidspunkt`}
        errors={errors}
        rules={{ required: getText(`${tekstNokkel}.påkrevd`) }}
        resetField={resetField}
      >
        <Radio value={"soknadstidspunkt"}>Søknadstidspunkt dd.mm.yyyy (må hentes)</Radio>
        <Radio value={"maksdatoSykepenger"}>Maksdato sykepenger dd.mm.yyyy (må hentes)</Radio>
        <Radio value={"ermiraSays"}>Noe annet her? Ermira 🤷‍♀️?</Radio>
        <Radio value={"unntaksvurdering"}>Unntaksvurdering § 22-13, 7. ledd</Radio>
        <RenderWhen when={watch("bestemmesAv") === "unntaksvurdering"}>
          <div className={styles.innrykk}>
            <RadioGroupWrapperDeprecated
              feltNokkel={"unntak"}
              tekstNokkel={`${tekstNokkel}.virkningstidspunkt.unntak`}
              errors={errors}
              control={control}
              resetField={resetField}
            >
              <Radio value={"forhindret"}>Søkeren ble åpenbart forhindret fra å sende søknaden.</Radio>
              <Radio value={"mangelfull"}>NAV har gitt mangelfull eller misvisende informasjon</Radio>
            </RadioGroupWrapperDeprecated>
            <RenderWhen when={watch("unntak")}>
              <div className={"margin-top__medium"}>
                <Textarea label={unntaksbegrunnelseLabel} {...register("unntaksbegrunnelse")} />
              </div>
            </RenderWhen>
          </div>
        </RenderWhen>
        <Radio value={"etterSisteLoenn"}>Dagen etter siste lønnsutbetaling</Radio>
      </RadioGroupWrapperDeprecated>
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
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={getText(`${tekstNokkel}.virkningstidspunkt.heading`)}>
      <Skjemavisning vilkårsvurdering={vilkårsvurdering} personident={personident} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </ParagrafBlokk>
  );
};

export { Paragraf_11_12 };
