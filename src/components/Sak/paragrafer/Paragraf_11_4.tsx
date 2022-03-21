import { Heading } from "@navikt/ds-react";
import { VilkårsvurderingType } from "../../../types/SakType";
import { finnAlder, formaterDato } from "../../../lib/dato";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";

const Paragraf_11_4 = ({
  vilkårsvurderinger,
  fødselsdato,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
  fødselsdato: Date;
}): JSX.Element => {
  if (!vilkårsvurderinger || vilkårsvurderinger.length === 0) {
    return <div>Fant ikke 11-4</div>;
  }
  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Alder
        </Heading>
        <Vilkarsstatus tilstand={vilkårsvurderinger[0].tilstand} />
      </div>
      <div className={styles.rad}>
        <div className={styles.kolonne}>
          <span className={styles.key}>Alder</span>
          <span className={styles.value}>{finnAlder(fødselsdato)} år</span>
        </div>
        <div className={styles.kolonne}>
          <span className={styles.key}>Fødselsdato</span>
          <span className={styles.value}>{formaterDato(fødselsdato)}</span>
        </div>
      </div>
    </div>
  );
};

export { Paragraf_11_4 };
