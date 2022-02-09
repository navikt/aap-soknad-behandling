import React, { useState } from "react";
import { BodyShort, Heading, Loader } from "@navikt/ds-react";
import "./Saksoversikt.css";
import { LinkCardTable } from "../../components/LinkCardTable";
import { useFetch } from "../../hooks/useFetch";
import { Sak } from "../../types/Sak";
import { RenderWhen } from "../../components/RenderWhen";
import { Oppgavevisning } from "../../components/Oppgavevisning";

type APIResponse = {
  data: Sak[] | null;
  loading: boolean;
  error: string;
};

const Saksoversikt = () => {
  const { data, loading, error }: APIResponse = useFetch(
    "/aap-behandling/api/sak"
  );
  const [valgtSak, settValgtSak] = useState<Sak | undefined>(undefined);
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="saksliste-page">
      <div className="banner">
        <Heading size={"xlarge"} level={"1"}>
          Saksoversikt
        </Heading>
      </div>
      <section className="vedtaksflate">
        <div className="saksliste__container">
          <main className="saksliste__innhold">
            <RenderWhen when={loading}>
              <Loader />
            </RenderWhen>
            <RenderWhen when={!loading && !!data}>
              <LinkCardTable
                headingLabels={["Personident", "Fødselsdato", "Dato opprettet"]}
              >
                {data &&
                data.map((oppgave: Sak) => (
                  <LinkCardTable.Row
                    // href={`/aap-behandling/sak/${oppgave.personident}`}
                    onClick={()=> settValgtSak(oppgave)}
                    key={oppgave.personident}
                    selected={valgtSak && valgtSak.personident === oppgave.personident}
                  >
                    <BodyShort>{oppgave.personident}</BodyShort>
                    <BodyShort>{oppgave.fødselsdato}</BodyShort>
                    <BodyShort>{"today"}</BodyShort>
                  </LinkCardTable.Row>
                ))}
              </LinkCardTable>
            </RenderWhen>
          </main>
        </div>
        <RenderWhen when={valgtSak !== undefined}>
          <>
            {valgtSak !== undefined && <Oppgavevisning sak={valgtSak} onClose={() => settValgtSak(undefined)}/>}
          </>
        </RenderWhen>
      </section>
    </div>
  );
};

export default Saksoversikt;
