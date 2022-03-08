import { useSearchParams } from "react-router-dom";
import { Heading } from "@navikt/ds-react";

import { SakType } from "../../types/SakType";
import { Sammendrag } from "./Sammendrag/Sammendrag";
import { Oppgaveliste } from "./Oppgaveliste/Oppgaveliste";
import { getText } from "../../tekster/tekster";
import { RenderWhen } from "../RenderWhen";

import * as styles from "./sak.module.css";
import { PAGES } from "./pages";

import { Paragraf_11_2 } from "./paragrafer/Paragraf_11_2";
import { Paragraf_11_3 } from "./paragrafer/Paragraf_11_3";
import { Paragraf_11_4 } from "./paragrafer/Paragraf_11_4";
import { Paragraf_11_5 } from "./paragrafer/Paragraf_11_5";

const DEFAULT_PAGE = PAGES.INNGANG;

const Inngangsvilkår = ({ sak }: { sak: SakType }): JSX.Element => {
  return (
    <>
      <Heading size={"medium"} level={"2"} className={styles.blokk__header}>
        {getText("paragrafer.inngangsvilkår.heading")}
      </Heading>
      <Paragraf_11_2
        vilkårsvurderinger={sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_2")}
      />
      <Paragraf_11_3
        vilkårsvurderinger={sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_3")}
        personident={sak.personident}
      />
      <Paragraf_11_4
        vilkårsvurderinger={sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_4")}
      />
    </>
  );
};

const P11_5 = ({ sak }: { sak: SakType }): JSX.Element => (
  <>
    <Heading size={"medium"} level={"2"}>
      {getText("paragrafer.11_5.heading")}
    </Heading>
    <Paragraf_11_5
      vilkårsvurdering={sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_5")}
      personident={sak.personident}
    />
  </>
);

const Sak = ({ sak }: { sak: SakType }): JSX.Element => {
  const [searchParams] = useSearchParams();
  const requestedPage = searchParams.get("page") || DEFAULT_PAGE;
  return (
    <div className={styles.sak__container}>
      <Sammendrag sak={sak} />
      <section className={styles.sak}>
        <aside className={styles.sak__navigasjon}>
          <Heading size={"medium"} level={"2"}>
            Vurderinger
          </Heading>
          <Oppgaveliste activePage={requestedPage} />
        </aside>
        <main className={styles.sak__behandling}>
          <RenderWhen when={requestedPage === "inngang"}>
            <Inngangsvilkår sak={sak} />
          </RenderWhen>
          <RenderWhen when={requestedPage === "11_5"}>
            <P11_5 sak={sak} />
          </RenderWhen>
          {requestedPage === "beregning" && <div>Beregning...</div>}
          {requestedPage === "resultat" && <div>Resultat...</div>}
        </main>
      </section>
    </div>
  );
};

export { Sak };
