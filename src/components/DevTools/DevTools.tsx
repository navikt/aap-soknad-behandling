import { useState } from "react";

import * as styles from "./devtools.module.css";
import { Button, Switch, ToggleGroup } from "@navikt/ds-react";
import { Brukertype } from "../../mocks/handlers";
import { isTrue } from "../../lib/stringUtils";
import { Wrench } from "@navikt/ds-icons";

const Tools = ({ show }: { show: boolean }) => {
  const valgtBrukertype = localStorage.getItem("brukertype");
  const erGodkjenner = localStorage.getItem("erGodkjenner");

  const endreBrukertype = (value: string) => {
    localStorage.setItem("brukertype", value);
    window.location.reload();
  };

  const settGodkjenner = (value: boolean) => {
    localStorage.setItem("erGodkjenner", String(value));
    window.location.reload();
  };

  const classes = `${styles.toolbox} ${show ? styles.visible : styles.hidden}`;

  return (
    <div className={classes}>
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
      <Button variant={"secondary"} onClick={() => toggleShowDevTools(!showDevTools)}>
        <Wrench />
      </Button>
      <Tools show={showDevTools} />
    </div>
  );
};

export { DevTools };
