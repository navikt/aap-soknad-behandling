import { BodyShort, Label } from "@navikt/ds-react";
import { Paragraf_11_4_type } from "../../../types/SakType";
import { finnAlder, formaterDato } from "../../../lib/dato";

import * as styles from "./paragraf.module.css";
import { getText } from "../../../tekster/tekster";
import { ParagrafBlokk } from "./ParagrafBlokk";
import { utfallsTekst } from "../../../common/utfall";

type Props = {
  vilkårsvurdering: Paragraf_11_4_type | undefined;
  fødselsdato: string;
};

const Paragraf_11_4 = ({ vilkårsvurdering, fødselsdato }: Props) => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-4</div>;
  }

  return (
    <ParagrafBlokk heading={getText("paragrafer.11_4.heading")} vilkårsvurdering={vilkårsvurdering}>
      <div className={styles.seksjon__sub__blokk}>
        <Label>{getText("paragrafer.11_4.vurdering")}</Label>
        <BodyShort className={styles.value}>{utfallsTekst(vilkårsvurdering.utfall)}</BodyShort>
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
    </ParagrafBlokk>
  );
};

export { Paragraf_11_4 };
