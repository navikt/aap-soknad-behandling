import React from "react";

import { Sak, TILSTAND, valueFrom, Vilkårsvurdering } from "../types/Sak";
import { Applicant, Close, Law } from "@navikt/ds-icons";

import "./Oppgavevisning.css";
import {Button, Heading} from "@navikt/ds-react";

const Vilkårsvurderinger = ({
  vilkår,
}: {
  vilkår: Vilkårsvurdering[];
}): JSX.Element | null => {
  if (!vilkår) {
    return null;
  }

  return (
    <>
      <Heading level={"2"} size={"large"}>
        <Law /> Vilkårsvurderinger
      </Heading>
      <section>
        {vilkår.map((v) => (
          <div key={v.paragraf + "-" + v.ledd}>
            <Heading level={"3"} size={"medium"}>Vilkår</Heading>
            <div>
              § {v.paragraf}, ledd {v.ledd}
            </div>
            <div>
              Vilkåret er {valueFrom(v.tilstand as keyof typeof TILSTAND)}
            </div>
            <div>Saken har {v.harÅpenOppgave ? "" : "ingen"} åpne oppgaver</div>
          </div>
        ))}
      </section>
    </>
  );
};

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

const Oppgavevisning = ({
  sak,
  onClose,
}: {
  sak: Sak;
  onClose?: Function;
}): JSX.Element => {
  return (
    <div className="oppgavevisning__container">
      <div className="oppgavevisning__oppgave">
        <div className="oppgavevisning__header">
          <Heading level={"1"} size={"2xlarge"}>Søknad om AAP</Heading>
          {onClose && (
            <div>
              <Button onClick={() => onClose()} aria-label={"Lukk saksvisning"}>
                <Close />
              </Button>
            </div>
          )}
        </div>
        <Søker søker={sak} />
        <Vilkårsvurderinger vilkår={sak?.vilkårsvurderinger} />
      </div>
    </div>
  );
};

export { Oppgavevisning };
