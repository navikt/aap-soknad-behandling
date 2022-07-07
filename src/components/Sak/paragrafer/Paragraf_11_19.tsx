import "react-day-picker/dist/style.css";

import { BodyShort, Button, Label, Radio, Textarea, TextField } from "@navikt/ds-react";

import { getText } from "../../../tekster/tekster";

import * as styles from "./paragraf.module.css";
import { RenderWhen } from "../../RenderWhen";
import { Paragraf_11_19_type } from "../../../types/SakType";
import { formaterDato } from "../../../lib/dato";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { useSkjema } from "../../../hooks/SkjemaHook";
import { RadioGroupWrapper } from "../../RadioGroupWrapper/RadioGroupWrapper";

type ParagrafProps = {
  personident: string;
  vilkårsvurdering: Paragraf_11_19_type | undefined;
};

interface Paragraf_11_19FormFieldValues {
  beregningsdato: string;
  grunnForDato?: string;
  begrunnelseForAnnet?: string;
}

interface Paragraf_11_19_FormData {
  beregningsdato: Date;
  grunnForDato: string | null;
  begrunnelseForAnnet: string | null;
}

const tekstnøkkel = "paragrafer.11_19";

const Ferdigvisning = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_19_type }) => {
  if (vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT" && vilkårsvurdering.autorisasjon.valueOf() !== "LESE") {
    return null;
  }

  if (vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT") {
    return <div>Ikke vurdert enda</div>;
  }

  const begrunnelseErAnnet = vilkårsvurdering.grunnForDato === "noeAnnet";
  return (
    <>
      <div className={styles.seksjon}>
        <Label>{getText(`${tekstnøkkel}.label`)}</Label>
        <BodyShort>{vilkårsvurdering.beregningsdato && formaterDato(vilkårsvurdering.beregningsdato)}</BodyShort>
      </div>
      <div className={styles.seksjon}>
        <Label>{getText(`${tekstnøkkel}.grunnForDato.legend`)}</Label>
        <BodyShort>{getText(`${tekstnøkkel}.grunnForDato.options.${vilkårsvurdering.grunnForDato}`)}</BodyShort>
      </div>
      {begrunnelseErAnnet && (
        <div className={styles.seksjon}>
          <Label>{getText(`${tekstnøkkel}.grunnForDato.begrunnelseForAnnet`)}</Label>
          <BodyShort>{vilkårsvurdering.begrunnelseForAnnet}</BodyShort>
        </div>
      )}
    </>
  );
};

const Skjemavisning = ({ personident, vilkårsvurdering }: ParagrafProps): JSX.Element => {
  const { handleSubmit, control, errors, resetField, register, onSubmit, watch, isLoading } = useSkjema<
    Paragraf_11_19FormFieldValues,
    Paragraf_11_19_FormData
  >({
    beregningsdato: "",
    grunnForDato: "",
    begrunnelseForAnnet: "",
  });

  if (vilkårsvurdering?.utfall.valueOf() !== "IKKE_VURDERT" || vilkårsvurdering?.autorisasjon.valueOf() === "LESE") {
    return <></>;
  }

  return (
    <div className={styles.seksjon}>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(`/aap-behandling/api/sak/${personident}/losning/paragraf_11_19`, {
            beregningsdato: new Date(),
            grunnForDato: data.grunnForDato || null,
            begrunnelseForAnnet: data.begrunnelseForAnnet || null,
          })
        )}
      >
        <div className={styles.seksjon}>
          <div className={styles.dato__wrapper}>
            <TextField
              {...register("beregningsdato", { required: getText("paragrafer.11_19.paakrevd") })}
              label={getText(`${tekstnøkkel}.label`)}
              autoComplete={"false"}
              error={errors["beregningsdato"]?.message}
            />
          </div>
        </div>
        <div className={styles.seksjon}>
          <RadioGroupWrapper
            name={"grunnForDato"}
            tekstNokkel={`${tekstnøkkel}.grunnForDato`}
            errors={errors}
            resetField={resetField}
            description={getText(`${tekstnøkkel}.grunnForDato.description`)}
            control={control}
          >
            <Radio value={"sykmeldingsdato"}>{getText(`${tekstnøkkel}.grunnForDato.options.sykmeldingsdato`)}</Radio>
            <Radio value={"søknadstidspunkt"}>{getText(`${tekstnøkkel}.grunnForDato.options.søknadstidspunkt`)}</Radio>
            <Radio value={"medisinskOpplysning"}>
              {getText(`${tekstnøkkel}.grunnForDato.options.medisinskOpplysning`)}
            </Radio>
            <Radio value={"tidligereAAP"}>{getText(`${tekstnøkkel}.grunnForDato.options.tidligereAAP`)}</Radio>
            <Radio value={"noeAnnet"}>{getText(`${tekstnøkkel}.grunnForDato.options.noeAnnet`)}</Radio>
            <RenderWhen when={watch("grunnForDato") === "noeAnnet"}>
              <div className={styles.innrykk}>
                <Textarea
                  label={getText(`${tekstnøkkel}.grunnForDato.begrunnelseForAnnet`)}
                  {...register("begrunnelseForAnnet")}
                />
              </div>
            </RenderWhen>
          </RadioGroupWrapper>
          <div className={styles.fortsettKnapp}>
            <Button variant={"primary"} disabled={isLoading} loading={isLoading}>
              {getText(`${tekstnøkkel}.knapp`)}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Paragraf_11_19 = ({ personident, vilkårsvurdering }: ParagrafProps) => {
  if (!vilkårsvurdering) {
    return <div>Fant ingen vurdering for 11-19</div>;
  }

  return (
    <ParagrafBlokk vilkårsvurdering={vilkårsvurdering} heading={"Beregningstidspunkt og bakgrunn"}>
      <Skjemavisning personident={personident} vilkårsvurdering={vilkårsvurdering} />
      <Ferdigvisning vilkårsvurdering={vilkårsvurdering} />
    </ParagrafBlokk>
  );
};

export { Paragraf_11_19 };
