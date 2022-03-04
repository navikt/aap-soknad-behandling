import { Heading } from "@navikt/ds-react";

import { SakType } from "../../types/SakType";
import { Vilkårsvurderinger } from "./Vilkarsvurdering/Vilkarsvurdering";
import { Sammendrag } from "./Sammendrag/Sammendrag";

import * as styles from "./sak.module.css";
import { Oppgaveliste } from "../Oppgaveliste/Oppgaveliste";
import { useSearchParams } from "react-router-dom";

const PAGES = {
  INNGANG: 'inngang',
  P11_5: '11_5',
  BEREGNING: 'beregning',
  RESULTAT: 'resultat'
}

const DEFAULT_PAGE = PAGES.INNGANG;

const Sak = ({ sak }: { sak: SakType }): JSX.Element => {
  const [searchParams] = useSearchParams();
  const requestedPage = searchParams.get('page') || DEFAULT_PAGE;
  return (
    <div className={styles.sak__container}>
      <Sammendrag sak={sak} />
      <section className={styles.sak}>
        <aside className={styles.sak__navigasjon}>
          <Heading size={"medium"} level={"2"}>
            Vurderinger
          </Heading>
          <Oppgaveliste sider={PAGES} />
        </aside>
        <main className={styles.sak__behandling}>
          {requestedPage === "inngang" && (
            <Vilkårsvurderinger vilkår={sak.sakstype?.vilkårsvurderinger} personident={sak.personident} />
          )}
          {requestedPage === 'P11_5' && <div>11 5</div>}
          {requestedPage === 'beregning' && <div>2+2=NaN</div>}
          {requestedPage === 'resultat' && <div>Yay! $$$</div>}
        </main>
      </section>
    </div>
  );
};

export { Sak };
