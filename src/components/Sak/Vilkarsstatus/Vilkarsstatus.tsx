import { ErrorFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./vilkarsstatus.module.css";

type VilkårsstatusProps = {
  erOppfylt?: boolean;
}

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

const Vilkarsstatus = ({ erOppfylt }: VilkårsstatusProps): JSX.Element => {
  return (
    <div className={styles.status}>
      { erOppfylt ? <Oppfylt /> : <IkkeOppfylt /> }
    </div>
  );
};

export { Vilkarsstatus };
