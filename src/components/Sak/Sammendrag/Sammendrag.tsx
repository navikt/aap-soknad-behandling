import { Button, Heading, Link, Tag } from "@navikt/ds-react";
import { Copy } from "@navikt/ds-icons";
import { finnAlder, formaterPid } from "../../../lib/dato";
import { SøkerType } from "../../../types/SakType";

import * as styles from "./sammendrag.module.css";

const Sammendrag = ({ søker }: { søker: SøkerType }): JSX.Element => {
  return (
    <section className={`${styles.oppsummering} box`}>
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
          <span className={styles.value}>dd.mm.yyyy</span>
        </div>
        <Link href={"#"}>Brukerhistorikk</Link>
      </div>
    </section>
  );
};

export { Sammendrag };
