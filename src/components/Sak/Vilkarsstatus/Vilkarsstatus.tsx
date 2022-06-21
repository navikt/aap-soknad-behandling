import { ErrorFilled, HelptextFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./vilkarsstatus.module.css";
import { UtfallType } from "../../../types/SakType";

type VilkårsstatusProps = {
  utfall?: UtfallType;
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
    <HelptextFilled />
    <span className={styles.status__beskrivelse}>Må vurderes manuelt</span>
  </span>
);

const IkkeRelevant = (): JSX.Element => (
  <span className={styles.status__manuell}>
    <HelptextFilled />
    <span className={styles.status__beskrivelse}>Ikke relevant for denne saken</span>
  </span>
);

const Vilkarsstatus = ({ utfall }: VilkårsstatusProps) => {
  if (!utfall) {
    return null;
  }
  return (<div className={styles.status}>
    {utfall === "IKKE_VURDERT" && <MåVurderesManuelt />}
    {utfall === "OPPFYLT" && <Oppfylt />}
    {utfall === "IKKE_OPPFYLT" && <IkkeOppfylt />}
    {utfall === "IKKE_RELEVANT" && <IkkeRelevant />}
  </div>);
};

export { Vilkarsstatus };
