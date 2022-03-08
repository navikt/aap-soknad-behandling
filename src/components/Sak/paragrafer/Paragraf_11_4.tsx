import { Heading } from "@navikt/ds-react";
import * as styles from "./paragraf.module.css";
import { VilkårsvurderingType } from "../../../types/SakType";
import { AutomaticSystem, Caseworker, Success } from "@navikt/ds-icons";

const Paragraf_11_4 = ({
  vilkårsvurderinger,
}: {
  vilkårsvurderinger: VilkårsvurderingType[] | undefined;
}): JSX.Element => {
  if (!vilkårsvurderinger) {
    return <>Fant ikke 11-4</>;
  }
  const relevantVilkår = vilkårsvurderinger.filter((v) => v.tilstand !== "IKKE_RELEVANT")[0];
  return (
    <div className={styles.paragraf__blokk}>
      <Heading size={"medium"} level={"3"} className={styles.paragraf__heading}>
        Alder
      </Heading>
      <div>
        {relevantVilkår.tilstand === "OPPFYLT_MASKINELT" ||
          relevantVilkår.tilstand === "OPPFYLT_MANUELT" ||
          (relevantVilkår.tilstand === "OPPFYLT" && <Success className={styles.green} />)}
      </div>
      {relevantVilkår.tilstand === "OPPFYLT_MASKINELT" && <AutomaticSystem />}
      {relevantVilkår.tilstand === "OPPFYLT_MANUELT" && <Caseworker />}
    </div>
  );
};

export { Paragraf_11_4 };
