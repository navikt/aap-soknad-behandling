import React, {useEffect, useState} from "react";
import {BodyShort, Heading } from "@navikt/ds-react";
import './Saksoversikt.css';
import {LinkCardTable} from "../../components/LinkCardTable";

type Vilkårsvurdering = {
  vilkår: Vilkår;
  tilstand: string;
}
type Vilkår = {
  paragraf: string;
  ledd: string;
}
type Sak = {
  personident: string;
  fødselsdato: string;
  vilkårsvurdering: Array<Vilkårsvurdering>;
}
const Saksoversikt = () => {
    const [oppgaver, setOppgaver] = useState<Array<Sak>>([]);
    useEffect(() => {
        const getOppgaver = async () => {
            try {
                const oppgaveResponse = await fetch('/aap-behandling/api/oppgaver').then(res => res.json());
                oppgaveResponse && setOppgaver(oppgaveResponse);
            } catch (err) {
                console.error(err);
            }
        }
        getOppgaver();
    }, []);
  return (<>
    <div className="saksliste-page">
      <Heading size={"2xlarge"} level={"1"} >Saksoversikt</Heading>
      <main>
        <LinkCardTable headingLabels={['Personident', 'Fødselsdato', 'Dato opprettet']} >
          {oppgaver.map((oppgave: Sak) =>
            <LinkCardTable.Row href={`/soknad-behandling/sak/${oppgave.personident}`}>
              <BodyShort>{oppgave.personident}</BodyShort>
              <BodyShort>{oppgave.fødselsdato}</BodyShort>
              <BodyShort>{'today'}</BodyShort>
            </LinkCardTable.Row>
            )}
        </LinkCardTable>
      </main>
    </div>
  </>);
}

export default Saksoversikt;
