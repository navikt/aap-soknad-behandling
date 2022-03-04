import { Button, Heading, Link, Tag } from "@navikt/ds-react";
import { Copy } from "@navikt/ds-icons";
import { datoFraArray, finnAlder, formaterPid } from "../../../lib/dato";
import { SakType } from "../../../types/SakType";
import { pipe } from "../../../lib/functions";

import * as styles from "./sammendrag.module.css";

const Sammendrag = ({ sak }: { sak: SakType }): JSX.Element => {
  return (
    <section className={styles.oppsummering}>
      <div>
        <Tag variant={"warning"}>Ikke påbegynt</Tag>
      </div>
      <Heading size={"large"} level={"2"}>
        {sak?.navn}
        <Button
          variant={"tertiary"}
          onClick={() => navigator.clipboard.writeText(sak.navn || "Ukjent navn")}
          size={"small"}
          className={styles.personlinje__knapp}
        >
          <Copy title={"Kopier navn til utklippstavlen"} />
        </Button>
      </Heading>
      <div className={styles.oppsummering__personlinje}>
        <div className={styles.kv__pair}>
          <span className={styles.key}>Fødselsnummer</span>
          <span className={styles.value}>
            {formaterPid(sak.personident)}
          </span>
          <Button
            variant={"tertiary"}
            onClick={() => navigator.clipboard.writeText(sak.personident)}
            size={"small"}
            className={styles.personlinje__knapp}
          >
            <Copy title={"Kopier personid til utklippstavlen"} />
          </Button>
          <span>({pipe(datoFraArray, finnAlder)(sak.fødselsdato)} år)</span>
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
