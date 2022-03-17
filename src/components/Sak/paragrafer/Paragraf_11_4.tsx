import { Heading } from "@navikt/ds-react";
import { VilkårsvurderingType } from "../../../types/SakType";
import { datoFraArray, finnAlder, formaterDato } from "../../../lib/dato";
import { pipe } from "../../../lib/functions";

import * as styles from "./paragraf.module.css";
import { Vilkårsstatus } from "../Vilkarsstatus/Vilkårsstatus";

const Paragraf_11_4 = ({
  vilkårsvurderinger,
  fødselsdato,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
  fødselsdato: number[];
}): JSX.Element => {
  if (!vilkårsvurderinger || vilkårsvurderinger.length === 0) {
    return <div>Fant ikke 11-4</div>;
  }
  console.log(vilkårsvurderinger);
  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Alder
        </Heading>
        <Vilkårsstatus tilstand={vilkårsvurderinger[0].tilstand} />
      </div>
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
