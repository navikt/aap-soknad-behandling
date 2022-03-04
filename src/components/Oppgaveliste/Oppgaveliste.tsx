import React from "react";

import { getText } from "../../tekster/tekster";
import * as styles from "./oppgaveliste.module.css";
import { Link } from "react-router-dom";

const Oppgaveliste = ({sider}: {sider:any}): JSX.Element => {
  return (
    <nav className={styles.oppgaveliste}>
      <ol>
        <li>
          <Link to={`?page=${sider.INNGANG}`}>
            {getText("navigasjon.inngangsvilkaar")}
          </Link>
        </li>
        <li>
          <Link to={`?page=${sider.P11_5}`}>
            {getText("navigasjon.11_5")}
          </Link>
        </li>
        <li>
          <Link to={`?page=${sider.BEREGNING}`}>
            {getText("navigasjon.beregning")}
          </Link>
        </li>
        <li>
          <Link to={`?page=${sider.RESULTAT}`}>
            {getText("navigasjon.resultat")}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export { Oppgaveliste };
