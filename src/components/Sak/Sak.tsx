import { useSearchParams } from "react-router-dom";
import { Heading } from "@navikt/ds-react";

import { SøkerType } from "../../types/SakType";
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
import { Paragraf_11_6 } from "./paragrafer/Paragraf_11_6";
import Vedtak from "./vedtak/Vedtak";
import {Paragraf_11_12} from "./paragrafer/Paragraf_11_12";
import {Paragraf_11_29} from "./paragrafer/Paragraf_11_29";

const DEFAULT_PAGE = PAGES.INNGANG;

const Inngangsvilkår = ({ søker }: { søker: SøkerType }): JSX.Element => {
  return (
    <>
      <Heading size={"large"} level={"2"} className={styles.blokk__header}>
        {getText("paragrafer.inngangsvilkår.heading")}
      </Heading>
      <Paragraf_11_2
        vilkårsvurdering={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_2")[0]}
      />
      <Paragraf_11_3
        vilkårsvurderinger={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_3")}
        personident={søker.personident}
      />
      <Paragraf_11_4
        vilkårsvurderinger={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_4")}
        fødselsdato={søker.fødselsdato}
      />
    </>
  );
};

const P11_5 = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Heading size={"medium"} level={"2"}>
      {getText("paragrafer.11_5.heading")}
    </Heading>
    <Paragraf_11_5
      vilkårsvurdering={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_5")}
      personident={søker.personident}
    />
  </>
);

const Bistandsbehov = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Heading size={"medium"} level={"2"}>
      {getText("paragrafer.11_6.heading")}
    </Heading>
    <Paragraf_11_6
      vilkårsvurdering={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_6")[0]}
      personident={søker.personident}
    />
  </>
);

const Varighet = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Heading size={"medium"} level={"2"}>
      {getText("paragrafer.11_12.heading")}
    </Heading>
    <Paragraf_11_12
      vilkårsvurdering={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_12")[0]}
      personident={søker.personident}
    />
  </>
);

const AndreYtelser = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Heading size={"medium"} level={"2"}>
      {getText("paragrafer.11_29.heading")}
    </Heading>
    <Paragraf_11_29
      vilkårsvurdering={søker.sak.sakstype?.vilkårsvurderinger.filter((v) => v.paragraf === "PARAGRAF_11_29")[0]}
      personident={søker.personident}
    />
  </>
);

const Sak = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const [searchParams] = useSearchParams();
  const requestedPage = searchParams.get("page") || DEFAULT_PAGE;
  return (
    <div className={styles.sak__container}>
      <div className={styles.sentrer}>
        <Heading level={"1"} size={"xlarge"}>
          {getText("sak.heading")}
        </Heading>
      </div>
      <Sammendrag søker={søker}/>
      <section className={styles.sak}>
        <aside className={`${styles.sak__navigasjon} box`}>
          <Heading size={"large"} level={"2"}>
            Vurderinger
          </Heading>
          <Oppgaveliste activePage={requestedPage} />
        </aside>
        <main className={`${styles.sak__behandling} box`}>
          <RenderWhen when={requestedPage === PAGES.INNGANG}>
            <Inngangsvilkår søker={søker}/>
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.P11_5}>
            <P11_5 søker={søker} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.BISTANDSBEHOV}>
            <Bistandsbehov søker={søker} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.VARIGHET}>
            <Varighet søker={søker} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.ANDRE_YTELSER}>
            <AndreYtelser søker={søker} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.BEREGNING}>
            <div>Beregning</div>
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.RESULTAT}>
            <Vedtak søker={søker} />
          </RenderWhen>
        </main>
      </section>
    </div>
  );
};

export { Sak };
