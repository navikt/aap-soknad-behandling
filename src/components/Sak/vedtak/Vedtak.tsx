import { SakType, SøkerType } from "../../../types/SakType";
import { BodyShort, Button, Radio } from "@navikt/ds-react";
import { formaterDato } from "../../../lib/dato";
import * as styles from "./vedtak.module.css";
import { useSkjema } from "../../../hooks/useSkjema";
import { RadioGroupWrapper } from "../../RadioGroupWrapper";
import { Seksjonsoverskrift } from "../Overskrift/Seksjonsoverskrift";
import { getText } from "../../../tekster/tekster";
import { Løsning } from "../../../types/Losning";

type SkjemaProps = {
  sak: SakType;
  personident: string;
};

const Skjemavisning = ({ sak, personident }: SkjemaProps): JSX.Element | null => {
  if (sak.vedtak) {
    return null;
  }

  const løsning = (datas: any): Løsning => ({ vedtak: { innstilling: datas.resultat } });

  const { control, handleSubmit, errors, onSubmit, senderMelding, resetField } = useSkjema();
  return (
    <form onSubmit={handleSubmit((datas) => onSubmit(personident, løsning(datas)))}>
      <RadioGroupWrapper
        feltNokkel={"resultat"}
        tekstNokkel={"resultat"}
        errors={errors}
        control={control}
        resetField={resetField}
      >
        <Radio value={"godkjent"}>Innvilget AAP</Radio>
        <Radio value={"avslaat"}>Avslått AAP</Radio>
        <Radio value={"trukket"}>Søknaden er trukket av søkeren</Radio>
      </RadioGroupWrapper>
      <div className={styles.fortsettKnapp}>
        <Button variant={"primary"} disabled={senderMelding} loading={senderMelding}>
          {getText("paragrafer.knapper.fullfør")}
        </Button>
      </div>
    </form>
  );
};

const Ferdigvisning = ({ sak }: { sak: SakType }): JSX.Element | null => {
  if (!sak.vedtak) {
    return null;
  }
  return (
    <>
      <BodyShort>Vedtak ble innvilget {formaterDato(sak.vedtak.vedtaksdato)}</BodyShort>
      <BodyShort>Virkningstidspunkt er {formaterDato(sak.vedtak.virkningsdato)}</BodyShort>
    </>
  );
};
const Vedtak = ({ søker }: { søker: SøkerType }): JSX.Element => {
  return (
    <>
      <Seksjonsoverskrift tekstnokkel={"resultat.heading"} />
      <section className={styles.vedtak__blokk}>
        <Skjemavisning sak={søker.sak} personident={søker.personident} />
        <Ferdigvisning sak={søker.sak} />
      </section>
    </>
  );
};

export { Vedtak };
