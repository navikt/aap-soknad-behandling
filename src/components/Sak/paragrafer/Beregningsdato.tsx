import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, TextField } from "@navikt/ds-react";

import { VilkårsvurderingType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";

const Beregningsdato = ({
  vilkårsvurdering,
  personident,
}: {
  vilkårsvurdering: VilkårsvurderingType[] | undefined;
  personident: string;
}): JSX.Element => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (datas: any) => {
    oppdaterSenderMelding(true);
    const res = await fetchPOST(`/aap-behandling/api/sak/${personident}/losning`, {
      løsningVurderingAvBeregningsdato: {
        beregningsdato: new Date(datas),
      },
    });
    oppdaterSenderMelding(false);
    if (!res.ok) {
      console.warn('Noe feilet under innsending');
    } else {
      window.location.reload();
    }

  };
  if (!vilkårsvurdering || vilkårsvurdering.length === 0) {
    return <div>Fant ikke 11-5</div>;
  }
  const vurdering = vilkårsvurdering[0];
  if (vurdering.tilstand == "OPPFYLT") {
    return <div>Vilkår er ferdig vurdert</div>;
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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

export { Beregningsdato };
