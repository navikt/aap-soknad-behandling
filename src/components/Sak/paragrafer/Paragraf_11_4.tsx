import { BodyShort, Heading } from "@navikt/ds-react";
import { Paragraf_11_4Type } from "../../../types/SakType";
import { finnAlder, formaterDato } from "../../../lib/dato";

import * as styles from "./paragraf.module.css";
import { Vilkarsstatus } from "../Vilkarsstatus/Vilkarsstatus";
import { getText } from "../../../tekster/tekster";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_4Type | undefined;
  fødselsdato: string;
};

const Paragraf_11_4 = ({ vilkårsvurdering, fødselsdato }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-4</div>;
  }
  return (
    <div className={styles.paragraf__blokk}>
      <div className={styles.paragraf__heading}>
        <Heading size={"medium"} level={"3"}>
          {getText("paragrafer.11_4.heading")}
        </Heading>
        <Vilkarsstatus erOppfylt={vilkårsvurdering.erOppfylt} måVurderesManuelt={vilkårsvurdering.måVurderesManuelt} />
      </div>
      <div className={styles.paragraf__sub__blokk}>
        <BodyShort className={styles.key}>{getText("paragrafer.11_4.vurdering")}</BodyShort>
        <BodyShort className={styles.value}>{getText(vilkårsvurdering.erOppfylt ? "Ja" : "Nei")}</BodyShort>
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
