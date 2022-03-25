import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, TextField } from "@navikt/ds-react";

import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";

const Beregningsdato = ({
  personident,
}: {
  personident: string;
}): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await fetchPOST(`/aap-behandling/api/sak/${personident}/losning`, {
      løsningVurderingAvBeregningsdato: {
        beregningsdato: new Date(datas.nedsattArbeidsevne),
      },
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
              required: getText("paragrafer.11_5.nedsattArbeidsevne.paakrevd")
            })}
            label={getText("paragrafer.11_5.nedsattArbeidsevne.label")}
          />
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("paragrafer.knapper.fullfør")}
          </Button>
        </div>
      </form>
    </>
  );
};

export { Beregningsdato };
