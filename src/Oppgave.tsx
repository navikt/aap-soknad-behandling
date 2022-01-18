import React, {useEffect, useState} from "react";
import {BodyShort, Heading, Button} from "@navikt/ds-react";
type Oppgave = {
    oppgaveId: number;
    personident: string;
    alder: number;
}
const Oppgave = () => {
    const [oppgaver, setOppgaver] = useState<Array<Oppgave>>([]);
    useEffect(() => {
        const getOppgaver = async () => {
            try {
                const oppgaveResponse = await fetch('/aap-behandling/api/oppgaver').then(res => res.json());
                oppgaveResponse.oppgaver && setOppgaver(oppgaveResponse.oppgaver);
            } catch (err) {
                console.error(err);
            }
        }
        getOppgaver();
    }, []);
    const onAgeConfirm = async (erMellom18og67: boolean, oppgaveId: number) => {
        const payload ={
            oppgaveId,
            erMellom18og67
        }
        await fetch('/aap-behandling/api/vurderAlder', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => console.log(res.status));
    }
    return (<>
        <Heading size={"2xlarge"} level={"1"} >Oppgaver</Heading>
        {oppgaver.map( oppgave => <>
            <BodyShort>{`Personident: ${oppgave.personident}, Alder: ${oppgave.alder}`}</BodyShort>
            <Button variant="primary" type="button" onClick={() => onAgeConfirm(true, oppgave.oppgaveId)}>Ja</Button>
            <Button variant="tertiary" onClick={() => onAgeConfirm(false, oppgave.oppgaveId)}>Nei</Button>
            </>)}
        </>);
}

export default Oppgave;
