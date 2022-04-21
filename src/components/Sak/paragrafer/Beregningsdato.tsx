// @ts-nocheck
// nocheck fordi TextField forventer at value har type string | undefined, useInput henter type for value fra React.InputHTMLAttributes
// som er string | ReadOnly string[] | number | undefined
// useInput brukes i påvente av en egen datovelger fra designsystemet
import { useState } from "react";
import { useForm } from "react-hook-form";

import { format } from "date-fns";
import nb from "date-fns/locale/nb";

import { DateFormatter, DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Button, TextField } from "@navikt/ds-react";

import { getText } from "../../../tekster/tekster";
import { sendLøsning } from "./SendLosning";
import * as styles from "./paragraf.module.css";

type BeregningsdatoProps = {
  personident: string;
};

const Beregningsdato = ({ personident }: BeregningsdatoProps): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          {...register("beregningsdato", { required: getText("beregningsdato.paakrevd") })}
          {...inputProps}
          label={getText("beregningsdato.label")}
          autoComplete={"false"}
        />
        <DayPicker formatters={{ formatCaption }} locale={nb} {...dayPickerProps} />
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("beregningsdato.knapp")}
        </Button>
      </div>
    </form>
  );
};

export { Beregningsdato };
