import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, TextField } from "@navikt/ds-react";

import { getText } from "../../../tekster/tekster";
import { sendLøsning } from "./SendLosning";

type BeregningsdatoProps = {
  personident: string;
}

const Beregningsdato = ({ personident }: BeregningsdatoProps): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, {
      løsningVurderingAvBeregningsdato: {
        beregningsdato: new Date(datas.nedsattArbeidsevne),
      }
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn('Noe feilet under innsending');
    } else {
      window.location.reload();
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            {...register("nedsattArbeidsevne", {
              required: getText("beregningsdato.paakrevd")
            })}
            label={getText("beregningsdato.label")}
          />
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("beregningsdato.knapp")}
          </Button>
        </div>
      </form>
    </>
  );
};

export { Beregningsdato };
