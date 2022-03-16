import { Link } from "react-router-dom";

import { getText } from "../../../tekster/tekster";
import * as styles from "./oppgaveliste.module.css";
import { PAGES } from "../pages";

const Oppgaveliste = ({ activePage }: { activePage: string }): JSX.Element => {
  return (
    <nav className={styles.oppgaveliste}>
      <ol>
        <li className={activePage === PAGES.INNGANG ? `${styles.active}` : ""}>
          <Link to={`?page=${PAGES.INNGANG}`}>{getText("navigasjon.inngangsvilkaar")}</Link>
        </li>
        <li className={activePage === PAGES.P11_5 ? styles.active : ""}>
          <Link to={`?page=${PAGES.P11_5}`}>{getText("navigasjon.11_5")}</Link>
        </li>
        <li className={activePage === PAGES.BEREGNING ? styles.active : ""}>
          <Link to={`?page=${PAGES.BEREGNING}`}>{getText("navigasjon.beregning")}</Link>
        </li>
        <li className={activePage === PAGES.RESULTAT ? styles.active : ""}>
          <Link to={`?page=${PAGES.RESULTAT}`}>{getText("navigasjon.resultat")}</Link>
        </li>
      </ol>
    </nav>
  );
};

export { Oppgaveliste };
