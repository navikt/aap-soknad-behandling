import { InntektsgrunnlagType } from "../../../types/Vedtak";
import { BodyShort, Heading, Table } from "@navikt/ds-react";
import { formaterDato } from "../../../lib/dato";
import * as styles from "../vedtak/vedtak.module.css";

type BeregningsgrunnlagProps = {
  inntektsgrunnlag?: InntektsgrunnlagType;
};

const Beregningsgrunnlag = ({ inntektsgrunnlag }: BeregningsgrunnlagProps): JSX.Element => {
  if (!inntektsgrunnlag) {
    return (
      <>
        <Heading level={"2"} size={"medium"}>
          Beregning av utbetaling
        </Heading>
        <BodyShort>Har ikke hentet inntektsgrunnlag enda...</BodyShort>
      </>
    );
  }

  return (
    <>
      <Heading level={"2"} size={"medium"}>
        Beregning av utbetaling
      </Heading>
      <BodyShort>Beregningsdato er {formaterDato(inntektsgrunnlag.beregningsdato)}</BodyShort>
      <Heading level={"3"} size={"small"}>
        Inntektsgrunnlag
      </Heading>
      <Table className={styles.inntektstabell} zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>År</Table.HeaderCell>
            <Table.HeaderCell>Inntekt</Table.HeaderCell>
            <Table.HeaderCell>Justert for 6G</Table.HeaderCell>
            <Table.HeaderCell>Inntekt justert for 6G</Table.HeaderCell>
            <Table.HeaderCell>Antall G</Table.HeaderCell>
            <Table.HeaderCell>Brukes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {inntektsgrunnlag.inntekterSiste3Kalenderår.map((inntekt) => (
            <Table.Row key={inntekt.år}>
              <Table.DataCell>{inntekt.år}</Table.DataCell>
              <Table.DataCell>{inntekt.beløpFørJustering}</Table.DataCell>
              <Table.DataCell>{inntekt.erBeløpJustertFor6G ? "Ja" : "Nei"}</Table.DataCell>
              <Table.DataCell>{inntekt.erBeløpJustertFor6G && inntekt.beløpJustertFor6G}</Table.DataCell>
              <Table.DataCell>{inntekt.grunnlagsfaktor}</Table.DataCell>
              <Table.DataCell>{inntekt.erBeløpJustertFor6G ? "Ja" : "Nei"}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export { Beregningsgrunnlag };
