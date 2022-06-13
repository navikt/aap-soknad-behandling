// @ts-nocheck
// nocheck fordi TextField forventer at value har type string | undefined, useInput henter type for value fra React.InputHTMLAttributes
// som er string | ReadOnly string[] | number | undefined
// useInput brukes i påvente av en egen datovelger fra designsystemet
import { useState } from "react";

import { format } from "date-fns";
import nb from "date-fns/locale/nb";

import { DateFormatter, DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Button, Radio, Textarea, TextField } from "@navikt/ds-react";

import { getText } from "../../../tekster/tekster";
import { sendLøsning } from "./SendLosning";

import { Calender } from "@navikt/ds-icons";

import * as styles from "./paragraf.module.css";
import { RenderWhen } from "../../RenderWhen";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { useSkjema } from "../../../hooks/useSkjema";

type BeregningsdatoProps = {
  personident: string;
};

const Beregningstidspunkt = ({ personident }: BeregningsdatoProps): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const [visKalender, settVisKalender] = useState<boolean>(false);
  const { control, errors, register, handleSubmit, resetField, watch } = useSkjema();
  const onSubmit = async () => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, {
      løsningVurderingAvBeregningsdato: {
        beregningsdato: new Date(),
      },
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn("Noe feilet under innsending");
    } else {
      window.location.reload();
    }
  };
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    required: true,
    locale: nb,
    format: "dd.MM.yyyy",
  });

  const formatCaption: DateFormatter = (date, options) => (
    <span className={styles.mnd__caption}>{format(date, "LLLL yyyy", { locale: options?.locale })}</span>
  );

  return (
    <div className={styles.seksjon}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.seksjon}>
          <div className={styles.dato__wrapper}>
            <TextField
              {...register("beregningsdato", { required: getText("beregningstidspunkt.paakrevd") })}
              {...inputProps}
              label={getText("beregningstidspunkt.label")}
              autoComplete={"false"}
            />
            <Button type={"button"} onClick={() => settVisKalender(!visKalender)}>
              <Calender />
            </Button>
          </div>
          <RenderWhen when={visKalender}>
            <DayPicker formatters={{ formatCaption }} locale={nb} {...dayPickerProps} />
          </RenderWhen>
        </div>
        <div className={styles.seksjon}>
          <RadioGroupWrapper
            feltNokkel={"grunnForDato"}
            tekstNokkel={"beregningstidspunkt.grunnForDato"}
            errors={errors}
            control={control}
            resetField={resetField}
            description={getText("beregningstidspunkt.grunnForDato.description")}
          >
            <Radio value={"sykmeldingsdato"}>Sykmeldingsdato</Radio>
            <Radio value={"søknadstidspunkt"}>Søknadstidspunkt</Radio>
            <Radio value={"medisinskOpplysning"}>Medisinsk opplysning</Radio>
            <Radio value={"tidligereAAP"}>Tidligere AAP-periode</Radio>
            <Radio value={"noeAnnet"}>Hovedgrunnen er noe annet</Radio>
            <RenderWhen when={watch("grunnForDato") === "noeAnnet"}>
              <div className={styles.innrykk}>
                <Textarea
                  label={getText("beregningstidspunkt.grunnForDato.begrunnelseForAnnet")}
                  {...register("begrunnelseForAnnet")}
                />
              </div>
            </RenderWhen>
          </RadioGroupWrapper>
          <div className={styles.fortsettKnapp}>
            <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
              {getText("beregningstidspunkt.knapp")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Beregningstidspunkt };
