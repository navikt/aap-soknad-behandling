import { Heading } from "@navikt/ds-react";

import { VilkårsvurderingType } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";

type ParagrafProps = {
  vilkårsvurdering: VilkårsvurderingType | undefined;
}

const Paragraf_11_2 = ({ vilkårsvurdering }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-2</div>;
  }
  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          Medlemskap i Folketrygden
        </Heading>
        <Vilkarsstatus tilstand={vilkårsvurdering.tilstand} />
      </div>
      <div>
        {vilkårsvurdering.tilstand === "OPPFYLT_MASKINELT" && (
          <span>Søker har vært medlem i Folketrygden i minst 5 år.</span>
        )}
        {vilkårsvurdering.tilstand !== "OPPFYLT_MASKINELT" && (
          <span>Søker har ikke vært medlem i Folketrygden i minst 5 år</span>
        )}
      </div>
    </div>
  );
};

export { Paragraf_11_2 };
