import { Link } from "react-router-dom";

import { getText } from "../../../tekster/tekster";
import * as styles from "./oppgaveliste.module.css";
import { PAGES } from "../pages";
import { SøkerType } from "../../../types/SakType";
import { Oppgavestatus } from "./Oppgavestatus";

type OppgavelisteProps = {
  søker: SøkerType;
  activePage: string;
};

const Oppgaveliste = ({ søker, activePage }: OppgavelisteProps): JSX.Element => {
  const inngangsparagrafer = [];
  søker.sak.paragraf_11_2 && inngangsparagrafer.push(søker.sak.paragraf_11_2);
  søker.sak.paragraf_11_3 && inngangsparagrafer.push(søker.sak.paragraf_11_3);
  søker.sak.paragraf_11_4 && inngangsparagrafer.push(søker.sak.paragraf_11_4);

  return (
    <nav className={styles.oppgaveliste}>
      <Link to={`?page=${PAGES.INNGANG}`} className={activePage === PAGES.INNGANG ? styles.active : ""}>
        <div>{getText("navigasjon.inngangsvilkaar")}</div>
        <Oppgavestatus paragrafer={inngangsparagrafer} />
      </Link>
      {søker.sak.paragraf_11_5 && (
        <Link to={`?page=${PAGES.P11_5}`} className={activePage === PAGES.P11_5 ? styles.active : ""}>
          <div>{getText("navigasjon.11_5")}</div>
          <Oppgavestatus paragrafer={[søker.sak.paragraf_11_5]} />
        </Link>
      )}
      {søker.sak.paragraf_11_6 && (
        <Link to={`?page=${PAGES.BISTANDSBEHOV}`} className={activePage === PAGES.BISTANDSBEHOV ? styles.active : ""}>
          <div>{getText("navigasjon.11_6")}</div>
          <Oppgavestatus paragrafer={[søker.sak.paragraf_11_6]} />
        </Link>
      )}
      {søker.sak.paragraf_11_12 && (
        <Link to={`?page=${PAGES.VARIGHET}`} className={activePage === PAGES.VARIGHET ? styles.active : ""}>
          <div>{getText("navigasjon.11_12")}</div>
          <Oppgavestatus paragrafer={[søker.sak.paragraf_11_12]} />
        </Link>
      )}
      <Link to={`?page=${PAGES.BEREGNING}`} className={activePage === PAGES.BEREGNING ? styles.active : ""}>
        {getText("navigasjon.beregning")}
      </Link>
      <Link
        to={`?page=${PAGES.BEREGNINGSGRUNNLAG}`}
        className={activePage === PAGES.BEREGNINGSGRUNNLAG ? styles.active : ""}
      >
        {getText("navigasjon.beregningsgrunnlag")}
      </Link>
      <Link to={`?page=${PAGES.RESULTAT}`} className={activePage === PAGES.RESULTAT ? styles.active : ""}>
        {getText("navigasjon.resultat")}
      </Link>
    </nav>
  );
};

export { Oppgaveliste };
