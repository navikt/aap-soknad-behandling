import { useState } from "react";

import * as styles from "./devtools.module.css";
import { Switch, ToggleGroup } from "@navikt/ds-react";
import { Brukertype } from "../../mocks/handlers";
import { isTrue } from "../../lib/stringUtils";

const Tools = ({ show }: { show: boolean }) => {
  const valgtBrukertype = localStorage.getItem("brukertype");
  const erGodkjenner = localStorage.getItem("erGodkjenner");
  if (!show) {
    return null;
  }
  const endreBrukertype = (value: string) => {
    localStorage.setItem("brukertype", value);
    window.location.reload();
  };

  const settGodkjenner = (value: boolean) => {
    localStorage.setItem("erGodkjenner", String(value));
    window.location.reload();
  };

  return (
    <div className={styles.toolbox}>
      <ToggleGroup onChange={endreBrukertype} value={valgtBrukertype || "NKS"} label={"Brukertype"}>
        <ToggleGroup.Item value={Brukertype.NAV}>NAV</ToggleGroup.Item>
        <ToggleGroup.Item value={Brukertype.NAY}>NAY</ToggleGroup.Item>
        <ToggleGroup.Item value={Brukertype.NKS}>NKS</ToggleGroup.Item>
      </ToggleGroup>
      <Switch onChange={(event) => settGodkjenner(event.target.checked)} checked={isTrue(erGodkjenner)}>
        Er godkjenner
      </Switch>
    </div>
  );
};

const DevTools = () => {
  const [showDevTools, toggleShowDevTools] = useState<boolean>(false);
  return (
    <div className={styles.devTools}>
      <Tools show={showDevTools} />
      <input type="checkbox" checked={showDevTools} onChange={() => toggleShowDevTools(!showDevTools)} />
    </div>
  );
};

export { DevTools };
