import { Caseworker, ErrorFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./vilkarsstatus.module.css";

type VilkårsstatusProps = {
  erOppfylt?: boolean;
  måVurderesManuelt?: boolean;
};

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

const MåVurderesManuelt = (): JSX.Element => (
  <span className={styles.status__manuell}>
    <Caseworker />
    <span className={styles.status__beskrivelse}>Må vurderes manuelt</span>
  </span>
);

const Vilkarsstatus = ({ erOppfylt, måVurderesManuelt }: VilkårsstatusProps): JSX.Element => (
  <div className={styles.status}>
    {måVurderesManuelt && <MåVurderesManuelt />}
    {!måVurderesManuelt && erOppfylt && <Oppfylt />}
    {!måVurderesManuelt && !erOppfylt && <IkkeOppfylt />}
  </div>
);

export { Vilkarsstatus };
