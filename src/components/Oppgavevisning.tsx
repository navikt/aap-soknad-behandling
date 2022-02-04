import React from "react";

import { Sak, TILSTAND, valueFrom, Vilkårsvurdering } from "../types/Sak";
import { Applicant, Close, Law } from "@navikt/ds-icons";

import "./Oppgavevisning.css";
import { Button } from "@navikt/ds-react";

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
      <h2>
        <Law /> Vilkårsvurderinger
      </h2>
      <section>
        {vilkår.map((v) => (
          <div key={v.paragraf + "-" + v.ledd}>
            <h3>Vilkår</h3>
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
    <h2>
      <Applicant /> Om søkeren
    </h2>
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
          <h1>Søknad om AAP</h1>
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
