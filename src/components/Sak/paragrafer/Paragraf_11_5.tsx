import { Button, Radio } from "@navikt/ds-react";

import { Paragraf_11_5Type } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import { useSkjema } from "../../../hooks/useSkjema";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Løsning } from "../../../types/Losning";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_5Type | undefined;
  personident: string;
};

const Oppsummering = ({ vilkårsvurdering }: { vilkårsvurdering: Paragraf_11_5Type }): JSX.Element => {
  return (
    <div>
      <div>
        <div>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.label")}</div>
        <div>
          {vilkårsvurdering.kravOmNedsattArbeidsevneErOppfylt
            ? getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.ja")
            : getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.nei")}
        </div>
      </div>
      <div>
        <div>{getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.label")}</div>
        <div>
          {vilkårsvurdering.nedsettelseSkyldesSykdomEllerSkade
            ? getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.ja")
            : getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.nei")}
        </div>
      </div>
    </div>
  );
};

const Skjema = ({ personident }: ParagrafProps): JSX.Element => {
  const { control, handleSubmit, errors, onSubmit, senderMelding } = useSkjema();
  const løsning = (datas: any): Løsning => ({
    løsning_11_5_manuell: {
      kravOmNedsattArbeidsevneErOppfylt: datas.kravOmNedsattArbeidsevneErOppfylt,
      nedsettelseSkyldesSykdomEllerSkade: datas.nedsettelseSkyldesSykdomEllerSkade,
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
        <div>
          <RadioGroupWrapper
            name={"kravOmNedsattArbeidsevneErOppfylt"}
            control={control}
            legend={getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.label")}
            error={errors.kravOmNedsattArbeidsevneErOppfylt?.message}
            rules={{ required: getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.påkrevd") }}
          >
            <Radio value={"true"}>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.ja")}</Radio>
            <Radio value={"false"}>{getText("paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt.nei")}</Radio>
          </RadioGroupWrapper>
          <RadioGroupWrapper
            name={"nedsettelseSkyldesSykdomEllerSkade"}
            control={control}
            legend={getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.label")}
            error={errors.nedsettelseSkyldesSykdomEllerSkade?.message}
            rules={{ required: getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.påkrevd") }}
          >
            <Radio value={"true"}>{getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.ja")}</Radio>
            <Radio value={"false"}>{getText("paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade.nei")}</Radio>
          </RadioGroupWrapper>
          <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
            {getText("paragrafer.knapper.fullfør")}
          </Button>
        </div>
      </form>
    </>
  );
};

const Paragraf_11_5 = ({ vilkårsvurdering, personident }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-5</div>;
  }

  if (!vilkårsvurdering?.måVurderesManuelt) {
    return <Oppsummering vilkårsvurdering={vilkårsvurdering} />;
  }

  return <Skjema vilkårsvurdering={vilkårsvurdering} personident={personident} />;
};

export { Paragraf_11_5 };
