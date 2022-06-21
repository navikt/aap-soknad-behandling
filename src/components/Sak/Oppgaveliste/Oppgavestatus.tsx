import { VilkårsvurderingType } from "../../../types/SakType";
import { ErrorFilled, HelptextFilled, SuccessFilled } from "@navikt/ds-icons";

import * as styles from "./oppgavestatus.module.css";
import { getText } from "../../../tekster/tekster";

type OppgavestatusProps = {
  paragrafer: VilkårsvurderingType[] | undefined;
};
export const Oppgavestatus = ({ paragrafer }: OppgavestatusProps): JSX.Element => {
  if (!paragrafer) {
    return <></>;
  }
  if (paragrafer.some((v: VilkårsvurderingType) => v.utfall.valueOf() === "IKKE_VURDERT")) {
    return (
      <div className={`${styles.oppgavestatus} ${styles.maa_behandles}`}>
        <HelptextFilled />
        {getText("oppgavestatus.vurderingTrenges")}
      </div>
    );
  }
  if (paragrafer.some((v: VilkårsvurderingType) => v.utfall.valueOf() === "IKKE_OPPFYLT")) {
    return (
      <div className={`${styles.oppgavestatus} ${styles.ikke_oppfylt}`}>
        <ErrorFilled />
        {getText("oppgavestatus.ikkeOppfylt")}
      </div>
    );
  }
  return (
    <div className={`${styles.oppgavestatus} ${styles.oppfylt}`}>
      <SuccessFilled />
      {getText("oppgavestatus.oppfylt")}
    </div>
  );
};
