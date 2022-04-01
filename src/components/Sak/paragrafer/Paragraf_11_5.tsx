import { Button, TextField } from "@navikt/ds-react";

import { Paragraf_11_5Type } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_5Type | undefined;
  personident: string;
};

const Paragraf_11_5 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  const { register, handleSubmit, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any) => ({
    løsning_11_5_manuell: {
      grad: datas.nedsattArbeidsevne,
    },
  });

  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-5</div>;
  }
  if (vilkårsvurdering.erOppfylt) {
    return <div>Vilkår er ferdig vurdert</div>;
  }
  return (
    <>
      <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
        <div>
          <TextField
            {...register("nedsattArbeidsevne", {
              required: getText("paragrafer.11_5.nedsattArbeidsevne.paakrevd"),
              min: { value: 0, message: getText("paragrafer.11_5.nedsattArbeidsevne.ikkeMindreEnnNull") },
              max: { value: 100, message: getText("paragrafer.11_5.nedsattArbeidsevne.ikkeOverHundre") },
              pattern: { value: /^[0-9]{1,3}$/, message: getText("paragrafer.11_5.nedsattArbeidsevne.ugyldigFormat") },
            })}
            label={getText("paragrafer.11_5.nedsattArbeidsevne.label")}
            error={errors?.nedsattArbeidsevne?.message}
          />
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("paragrafer.knapper.fullfør")}
          </Button>
        </div>
      </form>
    </>
  );
};

export { Paragraf_11_5 };
