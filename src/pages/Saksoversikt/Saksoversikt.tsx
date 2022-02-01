import React from "react";
import { BodyShort, Heading, Loader } from "@navikt/ds-react";
import "./Saksoversikt.css";
import { LinkCardTable } from "../../components/LinkCardTable";
import { useFetch } from "../../hooks/useFetch";
import {Sak} from "../../types/Sak";

const Saksoversikt = () => {
  const { data, loading, error } = useFetch("/aap-behandling/api/sak");

  if (error) {
    return (<div>{error}</div>)
  }

  return (
    <>
      <div className="saksliste-page">
        <Heading size={"2xlarge"} level={"1"}>
          Saksoversikt
        </Heading>
        <main>
          {loading ? (
            <Loader />
          ) : (
            <LinkCardTable
              headingLabels={["Personident", "Fødselsdato", "Dato opprettet"]}
            >
              {data && data.map((oppgave: Sak) => (
                <LinkCardTable.Row
                  href={`/aap-behandling/sak/${oppgave.personident}`}
                  key={oppgave.personident}
                >
                  <BodyShort>{oppgave.personident}</BodyShort>
                  <BodyShort>{oppgave.fødselsdato}</BodyShort>
                  <BodyShort>{"today"}</BodyShort>
                </LinkCardTable.Row>
              ))}
            </LinkCardTable>
          )}
        </main>
      </div>
    </>
  );
};

export default Saksoversikt;
