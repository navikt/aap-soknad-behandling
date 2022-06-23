import { Alert } from "@navikt/ds-react";
import { Autorisasjontype } from "../../../types/SakType";

import * as styles from "./modusmelding.module.css";
import { getText } from "../../../tekster/tekster";

const Modusmelding = ({ autorisasjon }: { autorisasjon: Autorisasjontype | undefined }) => {
  if (autorisasjon) {
    if (autorisasjon.valueOf() === "GODKJENNE" || autorisasjon.valueOf() === "LESE") {
      return (
        <Alert variant={"info"} fullWidth className={styles.modusmelding}>
          {autorisasjon.valueOf() === "GODKJENNE" && getText("modusmelding.kvalitetssikring")}
          {autorisasjon.valueOf() === "LESE" && getText("modusmelding.lese")}
        </Alert>
      );
    }
  }
  return null;
};

export { Modusmelding };
