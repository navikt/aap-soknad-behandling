import { Heading } from "@navikt/ds-react";

import { Paragraf_11_2Type } from "../../../types/SakType";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_2Type | undefined;
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
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} />
      </div>
      <div>
        Hva skal stå her?
      </div>
    </div>
  );
};

export { Paragraf_11_2 };
