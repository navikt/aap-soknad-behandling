import React from "react";

import { Sak, TILSTAND, valueFrom, Vilkårsvurdering } from "../../types/Sak";
import { Applicant, Success, Error } from "@navikt/ds-icons";

import "./Oppgave.css";
import { Accordion, Heading } from "@navikt/ds-react";

const Søker = ({ søker }: { søker: any }): JSX.Element => (
  <>
    <Heading size={"large"} level={"2"}>
      <Applicant /> Om søkeren
    </Heading>
    <dl>
      <dt>Fødselsnummer</dt>
      <dd>{søker?.personident}</dd>
      <dt>Fødselsdato</dt>
      <dd>{søker?.fødselsdato}</dd>
      <dt>Tilstand</dt>
      <dd>{søker?.tilstand}</dd>
    </dl>
  </>
);

const Vilkår = ({
  vk,
  complete,
}: {
  vk: Vilkårsvurdering;
  complete: boolean;
}): JSX.Element => (
  <Accordion.Item>
    <Accordion.Header className={"header__override"}>
      <span>
        {complete ? <Success className={"yay"} /> : <Error className={"nay"} />}{" "}
        § {vk.paragraf}, ledd {vk.ledd}
      </span>
    </Accordion.Header>
    <Accordion.Content className={"vilkår__container"}>
      <main className={"vilkår"}>
        <div>Vilkåret er {valueFrom(vk.tilstand as keyof typeof TILSTAND)}</div>
        <div>Saken har {vk.harÅpenOppgave ? "" : "ingen"} åpne oppgaver</div>
      </main>
      <aside className={"vilkår__støtte"}>
        <Heading level={"3"} size={"medium"}>
          Fra søknaden
        </Heading>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id eros dolor. Phasellus commodo diam dolor, vel venenatis mi eleifend sit amet. Maecenas in turpis dignissim mi efficitur faucibus.
        </article>
        <Heading level={"3"} size={"medium"}>
          Beregningsgrunnlag
        </Heading>
        <div>Inntekt: 123 456,-</div>
      </aside>
    </Accordion.Content>
  </Accordion.Item>
);

const Vilkårsvurderinger = ({
  datas,
}: {
  datas: Vilkårsvurdering[];
}): JSX.Element => {
  if (!datas) {
    return <div>Ingen vilkår</div>;
  }
  const yeah = datas.map((vk, index) => (
    <Vilkår vk={vk} key={vk.paragraf + vk.ledd} complete={index < 1} />
  ));
  return <Accordion>{yeah}</Accordion>;
};

const Oppgave = ({ sak }: { sak: Sak }): JSX.Element => {
  return (
    <div className="oppgavevisning__container">
      <div className="oppgavevisning__oppgave">
        <div className="oppgavevisning__header">
          <Heading level={"1"} size={"xlarge"}>
            Søknad om AAP
          </Heading>
        </div>
        <Søker søker={sak} />
        <Vilkårsvurderinger datas={sak?.vilkårsvurderinger} />
      </div>
    </div>
  );
};

export { Oppgave };
