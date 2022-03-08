import { Heading } from "@navikt/ds-react";
import { AutomaticSystem, Caseworker, Success } from "@navikt/ds-icons";

import { VilkårsvurderingType } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";

const Paragraf_11_2 = ({
  vilkårsvurderinger,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
}): JSX.Element => {
  if (!vilkårsvurderinger) {
    return <>Fant ikke 11-2</>;
  }
  return (
    <div className={styles.paragraf__blokk}>
      <Heading size={"medium"} level={"3"} className={styles.paragraf__heading}>
        Medlemskap i Folketrygden
      </Heading>
      {vilkårsvurderinger.map((vilkårsvurdering) => (
        <div key={vilkårsvurdering.paragraf + vilkårsvurdering.ledd.join("-")}>
          {vilkårsvurdering.tilstand === "OPPFYLT_MASKINELT" && <Success className={styles.green} />}
          {vilkårsvurdering.tilstand === "OPPFYLT_MASKINELT" && <AutomaticSystem />}
          {vilkårsvurdering.tilstand === "OPPFYLT_MANUELT" && <Caseworker />}
        </div>
      ))}
    </div>
  );
};

export { Paragraf_11_2 };
