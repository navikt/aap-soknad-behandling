import { SøkerType } from "../../../types/SakType";
import { BodyShort, Heading, Table } from "@navikt/ds-react";
import { formaterDato } from "../../../lib/dato";
import * as styles from "./vedtak.module.css";
import { InntektsgrunnlagType } from "../../../types/Vedtak";

const Inntektsgrunnlag = ({ inntekt }: { inntekt: InntektsgrunnlagType }): JSX.Element => {
  return (
    <>
      <Heading level={"2"} size={"medium"}>
        Beregning av utbetaling
      </Heading>
      <BodyShort>Beregningsdato er {formaterDato(inntekt.beregningsdato)}</BodyShort>
      <Heading level={"3"} size={"small"}>
        Inntektsgrunnlag
      </Heading>
      <Table className={styles.inntektstabell} zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>År</Table.HeaderCell>
            <Table.HeaderCell>Inntekt</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {inntekt.inntekterSiste3Kalenderår.map((inntekt) => (
            <Table.Row key={inntekt.år}>
              <Table.DataCell>{inntekt.år}</Table.DataCell>
              <Table.DataCell>{inntekt.beløpFørJustering}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

const Vedtak = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const vedtak = søker.sak.vedtak;
  if (!vedtak) {
    return <div>Ingen vedtak fattet enda</div>;
  }

  return (
    <section className={styles.vedtak__blokk}>
      <Heading level={"2"} size={"medium"}>
        Vedtak er {vedtak.innvilget ? "innvilget" : "ikke innvilget"}
      </Heading>
      <section>
        <BodyShort>Vedtak ble innvilget {formaterDato(vedtak.vedtaksdato)}</BodyShort>
        <BodyShort>Virkningstidspunkt er {formaterDato(vedtak.virkningsdato)}</BodyShort>
      </section>
      <Inntektsgrunnlag inntekt={vedtak.inntektsgrunnlag} />
    </section>
  );
};

export { Vedtak };
