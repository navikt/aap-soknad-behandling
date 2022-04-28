import { VilkårsvurderingType } from "../../../types/SakType";
import { ErrorFilled, HelptextFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./oppgavestatus.module.css";

type OppgavestatusProps = {
  paragrafer: VilkårsvurderingType[] | undefined;
};
export const Oppgavestatus = ({ paragrafer }: OppgavestatusProps): JSX.Element => {
  if (!paragrafer) {
    return <></>;
  }
  if (paragrafer.some((v: VilkårsvurderingType) => v.måVurderesManuelt)) {
    return (
      <div className={`${styles.oppgavestatus} ${styles.maa_behandles}`}>
        <HelptextFilled />
        Vurdering trenges
      </div>
    );
  }
  if (paragrafer.some((v: VilkårsvurderingType) => !v.erOppfylt)) {
    return (
      <div className={`${styles.oppgavestatus} ${styles.ikke_oppfylt}`}>
        <ErrorFilled />
        Ikke oppfylt
      </div>
    );
  }
  return (
    <div className={`${styles.oppgavestatus} ${styles.oppfylt}`}>
      <SuccessFilled />
      Oppfylt
    </div>
  );
};
