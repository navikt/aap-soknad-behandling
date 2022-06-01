import { useState } from "react";
import { Button, Heading, Link, Tag } from "@navikt/ds-react";
import { Back, Copy, Next } from "@navikt/ds-icons";
import { finnAlder, formaterPid, formaterTidspunkt } from "../../../lib/dato";
import { SøkerType } from "../../../types/SakType";
import * as styles from "./sammendrag.module.css";
import { Personopplysninger } from "../Personopplysninger";

interface SammendragProps {
  søker: SøkerType;
  layoutToggle?: Function;
  skipLinkId: string;
}

const Sammendrag = ({ søker, layoutToggle, skipLinkId }: SammendragProps): JSX.Element => {
  const [isCompact, toggleCompact] = useState<boolean>(false);
  const changeLayout = () => {
    toggleCompact(!isCompact);
    layoutToggle && layoutToggle();
  };
  const cl = isCompact ? `${styles.sammendrag} ${styles.kompakt}` : `${styles.sammendrag}`;
  const wrapperClasses = isCompact
    ? `${styles.sammendrag__wrapper} ${styles.kompakt}`
    : `${styles.sammendrag__wrapper}`;
  return (
    <div className={`${wrapperClasses} box`} id={skipLinkId}>
      <section className={`${cl}`}>
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
        <div className={styles.sammendrag__personlinje}>
          <div className={styles.kv__pair}>
            <span className={styles.key}>Fødselsnummer</span>
            <span className={styles.value}>{formaterPid(søker.personident)}</span>
            <Button
              variant={"tertiary"}
              onClick={() => navigator.clipboard.writeText(søker.personident)}
              size={"small"}
            >
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
      </section>
      <Button onClick={() => changeLayout()} variant={"tertiary"}>
        {isCompact && <Next />}
        {!isCompact && <Back />}
      </Button>
    </div>
  );
};

export { Sammendrag };
