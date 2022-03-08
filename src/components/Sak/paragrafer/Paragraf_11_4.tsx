import { Heading } from "@navikt/ds-react";
import { VilkårsvurderingType } from "../../../types/SakType";
import { datoFraArray, finnAlder, formaterDato } from "../../../lib/dato";
import { pipe } from "../../../lib/functions";

import * as styles from "./paragraf.module.css";

const Paragraf_11_4 = ({
  vilkårsvurderinger,
  fødselsdato
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined,
  fødselsdato: number[]
}): JSX.Element => {
  if (!vilkårsvurderinger) {
    return <>Fant ikke 11-4</>;
  }
  return (
    <div className={styles.paragraf__blokk}>
      <Heading size={"medium"} level={"3"} className={styles.paragraf__heading}>
        Alder
      </Heading>
      <div className={styles.rad}>
        <div className={styles.kolonne}>
          <span className={styles.key}>Alder</span>
          <span className={styles.value}>{pipe(datoFraArray, finnAlder)(fødselsdato)} år</span>
        </div>
        <div className={styles.kolonne}>
          <span className={styles.key}>Fødselsdato</span>
          <span className={styles.value}>{pipe(datoFraArray, formaterDato)(fødselsdato)}</span>
        </div>
      </div>
    </div>
  );
};

export { Paragraf_11_4 };
