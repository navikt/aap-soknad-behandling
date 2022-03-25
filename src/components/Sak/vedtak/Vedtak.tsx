import { InntektsgrunnlagType, SøkerType } from "../../../types/SakType";
import { Heading } from "@navikt/ds-react";
import { formaterDato } from "../../../lib/dato";
import * as styles from "./vedtak.module.css";

const Inntektsgrunnlag = ({ inntekt }: { inntekt: InntektsgrunnlagType }): JSX.Element => {
  return (
    <>
      <Heading size={"medium"}>Beregning av utbetaling</Heading>
      <div>Grunnlaget for beregning er beregningsdato {formaterDato(inntekt.beregningsdato)}</div>
      <Heading size={"small"}>Inntektsgrunnlag</Heading>
      <ul>
        {
          inntekt.inntekterSiste3Kalenderår.map(inntekt => <li key={"1"}>{inntekt.år} {inntekt.beløpFørJustering}kr</li>)
        }
      </ul>
    </>
  );
}

const Vedtak = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const vedtak = søker.sak.vedtak;
  if(!vedtak) {
    return (<div>Ingen vedtak fattet enda</div>);
  }

  return (
    <div>
      <Heading size={"large"}>Vedtak er {vedtak.innvilget ? 'innvilget' : 'ikke innvilget'}</Heading>
      <div className={styles.kolonne}>
        <span>Vedtak ble innvilget {formaterDato(vedtak.vedtaksdato)}</span>
        <span>Virkningstidspunkt er {formaterDato(vedtak.virkningsdato)}</span>
      </div>
      <Inntektsgrunnlag inntekt={vedtak.inntektsgrunnlag} />
    </div>
  );
}

export default Vedtak;
