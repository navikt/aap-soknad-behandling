import { Button, Heading, Link, Tag } from "@navikt/ds-react";
import { Copy } from "@navikt/ds-icons";
import { finnAlder, formaterPid, formaterTidspunkt } from "../../../lib/dato";
import { Personopplysninger } from "../Personopplysninger";
import { SøkerType } from "../../../types/SakType";

import * as styles from "./sammendrag.module.css";
import { useState } from "react";

const Sammendrag = ({ søker, layoutToggle }: { søker: SøkerType; layoutToggle?: Function }): JSX.Element => {
  const [isCompact, toggleCompact] = useState<boolean>(false);
  const changeLayout = () => {
    toggleCompact(!isCompact);
    layoutToggle && layoutToggle();
  };
  const cl = isCompact ? `${styles.oppsummering} ${styles.kompakt}` : `${styles.oppsummering}`;
  return (
    <section className={`${cl} box`}>
      <div>
        {søker.sak.vedtak?.innvilget && <Tag variant={"success"}>Vedtak fattet</Tag>}
        {søker.sak.vedtak?.innvilget === undefined && <Tag variant={"warning"}>Ikke påbegynt</Tag>}
      </div>
      <Heading size={"large"} level={"2"}>
        {søker?.navn}
        <Button
          variant={"tertiary"}
          onClick={() => navigator.clipboard.writeText(søker.navn || "Ukjent navn")}
          size={"small"}
        >
          <Copy title={"Kopier navn til utklippstavlen"} />
        </Button>
        <Personopplysninger />
      </Heading>
      <div className={styles.oppsummering__personlinje}>
        <div className={styles.kv__pair}>
          <span className={styles.key}>Fødselsnummer</span>
          <span className={styles.value}>{formaterPid(søker.personident)}</span>
          <Button variant={"tertiary"} onClick={() => navigator.clipboard.writeText(søker.personident)} size={"small"}>
            <Copy title={"Kopier personid til utklippstavlen"} />
          </Button>
          <span>({finnAlder(søker.fødselsdato)} år)</span>
        </div>
        <div className={styles.kv__pair}>
          <span className={styles.key}>Søkte</span>
          <span className={styles.value}>{formaterTidspunkt(søker.sak.søknadstidspunkt)}</span>
        </div>
        <Link href={"#"}>Brukerhistorikk</Link>
      </div>
      <Button onClick={() => changeLayout()} variant={"tertiary"} size={"small"}>
        {isCompact && ">>"}
        {!isCompact && "<<"}
      </Button>
    </section>
  );
};

export { Sammendrag };
