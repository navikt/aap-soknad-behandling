import React from "react";
import { BodyShort, Heading, Loader } from "@navikt/ds-react";
import "./Saksoversikt.css";
import { LinkCardTable } from "../../components/LinkCardTable";
import { useFetch } from "../../hooks/useFetch";
import { SakType } from "../../types/SakType";
import { RenderWhen } from "../../components/RenderWhen";
import {datoFraArray, formaterDato} from "../../lib/dato";

type APIResponse = {
  data: SakType[] | null;
  loading: boolean;
  error: string;
};

const Fødselsdato = ({dato} : {dato:number[]}):JSX.Element => <span>{formaterDato(datoFraArray(dato))}</span>

const Saksoversikt = () => {
  const { data, loading, error }: APIResponse = useFetch(
    "/aap-behandling/api/sak"
  );
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="saksliste-page">
      <section className="vedtaksflate">
        <div className="saksliste__container">
          <main className="saksliste__innhold">
            <div className="banner">
              <Heading size={"xlarge"} level={"1"}>
                Saksoversikt
              </Heading>
            </div>
            <RenderWhen when={loading}>
              <Loader />
            </RenderWhen>
            <RenderWhen when={!loading && !!data}>
              <LinkCardTable
                headingLabels={["Personident", "Fødselsdato", "Dato opprettet"]}
              >
                {data &&
                  data.map((oppgave: SakType) => (
                    <LinkCardTable.Row
                      href={`/aap-behandling/sak/${oppgave.personident}`}
                      key={oppgave.personident}
                    >
                      <BodyShort>{oppgave.personident}</BodyShort>
                      <BodyShort><Fødselsdato dato={oppgave.fødselsdato} /></BodyShort>
                      <BodyShort>{"today"}</BodyShort>
                    </LinkCardTable.Row>
                  ))}
              </LinkCardTable>
            </RenderWhen>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Saksoversikt;
