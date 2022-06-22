import { useState } from "react";

import * as styles from "./devtools.module.css";
import { ToggleGroup } from "@navikt/ds-react";
import { Brukertype } from "../../mocks/handlers";

const Tools = ({ show }: { show: boolean }) => {
  const valgtBrukertype = localStorage.getItem("brukertype");
  if (!show) {
    return null;
  }
  const change = (value: string) => {
    localStorage.setItem("brukertype", value);
    window.location.reload();
  };

  return (
    <div className={styles.toolbox}>
      <ToggleGroup onChange={change} value={valgtBrukertype || "NKS"} label={"Brukertype"}>
        <ToggleGroup.Item value={Brukertype.NAV}>NAV</ToggleGroup.Item>
        <ToggleGroup.Item value={Brukertype.NAY}>NAY</ToggleGroup.Item>
        <ToggleGroup.Item value={Brukertype.NKS}>NKS</ToggleGroup.Item>
      </ToggleGroup>
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
