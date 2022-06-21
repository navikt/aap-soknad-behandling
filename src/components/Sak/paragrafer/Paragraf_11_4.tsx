import { BodyShort, Label } from "@navikt/ds-react";
import { Paragraf_11_4Type } from "../../../types/SakType";
import { finnAlder, formaterDato } from "../../../lib/dato";

import * as styles from "./paragraf.module.css";
import { getText } from "../../../tekster/tekster";
import { ParagrafBlokk } from "./ParagrafBlokk";

type ParagrafProps = {
  vilkårsvurdering: Paragraf_11_4Type | undefined;
  fødselsdato: string;
};

const Paragraf_11_4 = ({ vilkårsvurdering, fødselsdato }: ParagrafProps): JSX.Element => {
  if (!vilkårsvurdering) {
    return <div>Fant ikke 11-4</div>;
  }
  const utfallstekst = (utfall: string) => {
    switch (utfall) {
      case "IKKE_OPPFYLT":
        return "Nei";
      case "OPPFYLT":
        return "Ja";
      case "IKKE_RELEVANT":
        return "Ikke relevant";
      case "IKKE_VURDERT":
        return "Ikke vurdert enda";
      default:
        return utfall;
    }
  };

  return (
    <ParagrafBlokk heading={getText("paragrafer.11_4.heading")} vilkårsvurdering={vilkårsvurdering}>
      <div className={styles.seksjon__sub__blokk}>
        <Label>{getText("paragrafer.11_4.vurdering")}</Label>
        <BodyShort className={styles.value}>{utfallstekst(vilkårsvurdering.utfall)}</BodyShort>
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
