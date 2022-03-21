import { ErrorFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./vilkarsstatus.module.css";

const Oppfylt = (): JSX.Element => (
  <span className={styles.status__ok}>
    <SuccessFilled />
    <span className={styles.status__beskrivelse}>Oppfylt</span>
  </span>
);

const IkkeOppfylt = (): JSX.Element => (
  <span className={styles.status__nok}>
    <ErrorFilled />
    <span className={styles.status__beskrivelse}>Ikke oppfylt</span>
  </span>
);

const Vilkarsstatus = ({ tilstand }: { tilstand: string }): JSX.Element => {
  let elem = <></>;
  switch (tilstand) {
    case "OPPFYLT_MASKINELT":
    case "OPPFYLT_MANUELT":
    case "OPPFYLT":
      elem = <Oppfylt />;
      break;
    case "IKKE_OPPFYLT_MASKINELT":
    case "IKKE_OPPFYLT_MANUELT":
    case "IKKE_OPPFYLT":
      elem = <IkkeOppfylt />;
      break;
  }
  return <div className={styles.status}>{elem}</div>;
};

export { Vilkarsstatus };
