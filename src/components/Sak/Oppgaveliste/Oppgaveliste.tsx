import { Link } from "react-router-dom";

import { getText } from "../../../tekster/tekster";
import * as styles from "./oppgaveliste.module.css";
import { PAGES } from "../pages";
import { SakType, SøkerType, VilkårsvurderingType } from "../../../types/SakType";

import { Caseworker, DecisionCheck, DecisionCross } from "@navikt/ds-icons";

type OppgavelisteProps = {
  søker: SøkerType;
  activePage: string;
};

const statusInngangsvilkår = (sak: SakType): JSX.Element => {
  let antallOppfylt = 0;
  let antallIkkeOppfylt = 0;
  let antallMåVurderes = 0;

  const vurder = (paragraf: VilkårsvurderingType) => {
    if (paragraf.erOppfylt) {
      antallOppfylt++;
    } else if (paragraf.måVurderesManuelt) {
      antallMåVurderes++;
    } else {
      antallIkkeOppfylt++;
    }
  };
  sak.paragraf_11_2 && vurder(sak.paragraf_11_2);
  sak.paragraf_11_3 && vurder(sak.paragraf_11_3);
  sak.paragraf_11_4 && vurder(sak.paragraf_11_4);
  return (
    <div style={{ marginTop: "0.5rem" }}>
      {antallOppfylt > 0 && <DecisionCheck style={{ color: "#006A23" }} title={"Oppgaven har vilkår som er oppfylt"} />}
      {antallMåVurderes > 0 && (
        <Caseworker
          style={{ color: "hsl(25, 100%, 49%)" }}
          title={"Oppgaven har vilkår som må vurderes av en saksbehandler"}
        />
      )}
      {antallIkkeOppfylt > 0 && (
        <DecisionCross style={{ color: "#A32A17" }} title={"Oppgaven har vilkår som ikke er oppfylt"} />
      )}
    </div>
  );
};

const statusVilkår = (paragraf: VilkårsvurderingType): JSX.Element => {
  let elem;
  if (paragraf.erOppfylt) {
    elem = <DecisionCheck style={{ color: "#006A23" }} title={"Oppgaven har vilkår som er oppfylt"} />;
  } else if (paragraf.måVurderesManuelt) {
    elem = (
      <Caseworker
        style={{ color: "hsl(25, 100%, 49%)" }}
        title={"Oppgaven har vilkår som må vurderes av en saksbehandler"}
      />
    );
  } else {
    elem = <DecisionCross style={{ color: "#A32A17" }} title={"Oppgaven har vilkår som ikke er oppfylt"} />;
  }
  return <div style={{ marginTop: "0.5rem" }}>{elem}</div>;
};

const Oppgaveliste = ({ søker, activePage }: OppgavelisteProps): JSX.Element => {
  return (
    <nav className={styles.oppgaveliste}>
      <Link to={`?page=${PAGES.INNGANG}`} className={activePage === PAGES.INNGANG ? styles.active : ""}>
        <div>{getText("navigasjon.inngangsvilkaar")}</div>
        {statusInngangsvilkår(søker.sak)}
      </Link>
      {søker.sak.paragraf_11_5 && (
        <Link to={`?page=${PAGES.P11_5}`} className={activePage === PAGES.P11_5 ? styles.active : ""}>
          {getText("navigasjon.11_5")}
          {activePage !== PAGES.P11_5 && statusVilkår(søker.sak.paragraf_11_5)}
        </Link>
      )}
      {søker.sak.paragraf_11_6 && (
        <Link to={`?page=${PAGES.BISTANDSBEHOV}`} className={activePage === PAGES.BISTANDSBEHOV ? styles.active : ""}>
          {getText("navigasjon.11_6")}
          {statusVilkår(søker.sak.paragraf_11_6)}
        </Link>
      )}
      {søker.sak.paragraf_11_12 && (
        <Link to={`?page=${PAGES.VARIGHET}`} className={activePage === PAGES.VARIGHET ? styles.active : ""}>
          {getText("navigasjon.11_12")}
          {statusVilkår(søker.sak.paragraf_11_12)}
        </Link>
      )}
      {søker.sak.paragraf_11_29 && (
        <Link to={`?page=${PAGES.ANDRE_YTELSER}`} className={activePage === PAGES.ANDRE_YTELSER ? styles.active : ""}>
          {getText("navigasjon.11_29")}
          {statusVilkår(søker.sak.paragraf_11_29)}
        </Link>
      )}
      <Link to={`?page=${PAGES.BEREGNING}`} className={activePage === PAGES.BEREGNING ? styles.active : ""}>
        {getText("navigasjon.beregning")}
      </Link>
      <Link to={`?page=${PAGES.RESULTAT}`} className={activePage === PAGES.RESULTAT ? styles.active : ""}>
        {getText("navigasjon.resultat")}
      </Link>
    </nav>
  );
};

export { Oppgaveliste };
