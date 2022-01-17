import React, {useEffect, useState} from "react";
import {BodyShort, Heading} from "@navikt/ds-react";
type Oppgave = {
    personIdent: string;
    alder: number;
}
const Oppgave = () => {
    const [oppgaver, setOppgaver] = useState<Array<Oppgave>>([]);
    useEffect(() => {
        const getOppgaver = async () => {
            try {
                const oppgaveResponse = await fetch('/api/oppgaver').then(res => res.json());
                setOppgaver(oppgaveResponse);
            } catch (err) {
                console.error(err);
            }
        }
        getOppgaver();
    }, []);
    return (<>
        <Heading size={"2xlarge"} level={"1"} >Oppgaver</Heading>
        {oppgaver.map( oppgave => (<BodyShort>{`PersonIdent: ${oppgave.personIdent}, Alder: ${oppgave.alder}`}</BodyShort>))}
        </>);
}

export default Oppgave;
