import { useSearchParams } from "react-router-dom";
import { Heading, Switch } from "@navikt/ds-react";

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
import { Vedtak } from "./vedtak/Vedtak";
import { Paragraf_11_12 } from "./paragrafer/Paragraf_11_12";
import { Paragraf_11_29 } from "./paragrafer/Paragraf_11_29";
import { Beregningstidspunkt } from "./paragrafer/Beregningstidspunkt";
import { Vilkarsstatus } from "./Vilkarsstatus/Vilkarsstatus";
import { useContext, useState } from "react";
import { RadioLayoutContext } from "../../contexts/RadioLayout";
import { Beregningsgrunnlag } from "./Beregningsgrunnlag/Beregningsgrunnlag";
import { Seksjonsoverskrift } from "./Seksjonsoverskrift/Seksjonsoverskrift";
import { useSkipLink } from "../../hooks/useSkipLink";

const DEFAULT_PAGE = PAGES.INNGANG;

const Inngangsvilkår = ({ søker }: { søker: SøkerType }): JSX.Element => {
  return (
    <>
      <Seksjonsoverskrift tekstnokkel={"paragrafer.inngangsvilkår.heading"} />
      <Paragraf_11_2 vilkårsvurdering={søker.sak.paragraf_11_2} personident={søker.personident} />
      <Paragraf_11_3 vilkårsvurdering={søker.sak.paragraf_11_3} personident={søker.personident} />
      <Paragraf_11_4 vilkårsvurdering={søker.sak.paragraf_11_4} fødselsdato={søker.fødselsdato} />
    </>
  );
};

const P11_5 = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Seksjonsoverskrift tekstnokkel={"paragrafer.11_5.heading"}>
      <Vilkarsstatus
        erOppfylt={søker.sak.paragraf_11_5?.erOppfylt}
        måVurderesManuelt={søker.sak.paragraf_11_5?.måVurderesManuelt}
      />
    </Seksjonsoverskrift>
    <Paragraf_11_5 vilkårsvurdering={søker.sak.paragraf_11_5} personident={søker.personident} />
  </>
);

const Bistandsbehov = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Seksjonsoverskrift tekstnokkel={"paragrafer.11_6.heading"}>
      <Vilkarsstatus
        erOppfylt={søker.sak.paragraf_11_6?.erOppfylt}
        måVurderesManuelt={søker.sak.paragraf_11_6?.måVurderesManuelt}
      />
    </Seksjonsoverskrift>
    <Paragraf_11_6 vilkårsvurdering={søker.sak.paragraf_11_6} personident={søker.personident} />
  </>
);

const Varighet = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Seksjonsoverskrift tekstnokkel={"paragrafer.11_12.heading"}>
      <Vilkarsstatus
        erOppfylt={søker.sak.paragraf_11_12?.erOppfylt}
        måVurderesManuelt={søker.sak.paragraf_11_12?.måVurderesManuelt}
      />
    </Seksjonsoverskrift>
    <Paragraf_11_12 vilkårsvurdering={søker.sak.paragraf_11_12} personident={søker.personident} />
  </>
);

const AndreYtelser = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Seksjonsoverskrift tekstnokkel={"paragrafer.11_29.heading"}>
      <Vilkarsstatus
        erOppfylt={søker.sak.paragraf_11_29?.erOppfylt}
        måVurderesManuelt={søker.sak.paragraf_11_29?.måVurderesManuelt}
      />
    </Seksjonsoverskrift>
    <Paragraf_11_29 vilkårsvurdering={søker.sak.paragraf_11_29} personident={søker.personident} />
  </>
);

const Beregning = ({ søker }: { søker: SøkerType }): JSX.Element => (
  <>
    <Seksjonsoverskrift tekstnokkel={"beregningstidspunkt.heading"} />
    <Beregningstidspunkt personident={søker.personident} />
  </>
);

const Sak = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const sammendragId = "sammendrag";
  const oppgavelisteId = "oppgaveliste";
  const vilkårId = "vilkår";
  useSkipLink({
    skipLinks: [
      {
        title: "Hopp til sammendrag",
        skipTo: sammendragId,
      },
      {
        title: "Hopp til oppgaveliste",
        skipTo: oppgavelisteId,
      },
      { title: "Hopp til vilkårsvurdering", skipTo: vilkårId },
    ],
  });
  const layout = useContext(RadioLayoutContext);
  const [isTallLayout, toggleTallLayout] = useState<boolean>(false);
  const swapRadioLayout = () => {
    if (layout) {
      layout.swapLayout();
    }
  };

  const cl = isTallLayout ? `${styles.sak__behandling} ${styles.tall}` : `${styles.sak__behandling}`;

  const [searchParams] = useSearchParams();
  const requestedPage = searchParams.get("page") || DEFAULT_PAGE;
  return (
    <div className={styles.sak__container}>
      <div className={styles.sentrer}>
        <Heading level={"1"} size={"xlarge"}>
          {getText("sak.heading")}
        </Heading>
      </div>
      <div className={styles.grid__box}>
        <Sammendrag søker={søker} layoutToggle={() => toggleTallLayout(!isTallLayout)} skipLinkId={sammendragId} />
        <aside className={`${styles.sak__navigasjon} box`}>
          <Heading size={"large"} level={"2"}>
            Vurderinger
          </Heading>
          <Oppgaveliste søker={søker} activePage={requestedPage} skipLinkId={oppgavelisteId} />
        </aside>
        <main className={`${cl} box radio--${layout?.layout}`} id={vilkårId}>
          <RenderWhen when={requestedPage === PAGES.INNGANG}>
            <Inngangsvilkår søker={søker} />
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
            <Beregning søker={søker} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.BEREGNINGSGRUNNLAG}>
            <Beregningsgrunnlag inntektsgrunnlag={søker.sak.vedtak?.inntektsgrunnlag} />
          </RenderWhen>
          <RenderWhen when={requestedPage === PAGES.RESULTAT}>
            <Vedtak søker={søker} />
          </RenderWhen>
        </main>
      </div>
      <Switch size={"small"} onClick={swapRadioLayout}>
        Horizontal radios
      </Switch>
    </div>
  );
};

export { Sak };
