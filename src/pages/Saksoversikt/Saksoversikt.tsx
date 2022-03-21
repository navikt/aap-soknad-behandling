import React from "react";
import {BodyShort, Heading, Loader} from "@navikt/ds-react";
import "./Saksoversikt.css";
import {LinkCardTable} from "../../components/LinkCardTable";
import {fetchGET} from "../../hooks/useFetch";
import {SøkerType} from "../../types/SakType";
import {RenderWhen} from "../../components/RenderWhen";
import {formaterDato} from "../../lib/dato";

const Fødselsdato = ({dato}: { dato: Date }): JSX.Element => <span>{formaterDato(dato)}</span>

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const Saksoversikt = () => {
  const {data, loading, error}: ApiResponse = fetchGET(
    "/aap-behandling/api/sak"
  );
  if (error) {
    return <div>{error}</div>;
  }

  const søkere:SøkerType[] = data?.map((d:SøkerType) => ({
    personident: d.personident,
    sak: d.sak,
    fødselsdato: new Date(d.fødselsdato),
    navn: d.navn
  })) || [];

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
              <Loader/>
            </RenderWhen>
            <RenderWhen when={!loading && søkere?.length > 0}>
              <LinkCardTable
                headingLabels={["Personident", "Fødselsdato", "Dato opprettet"]}
              >
                {søkere &&
                  søkere.map((søker: SøkerType) => (
                    <LinkCardTable.Row
                      href={`/aap-behandling/sak/${søker.personident}`}
                      key={søker.personident}
                    >
                      <BodyShort>{søker.personident}</BodyShort>
                      <BodyShort><Fødselsdato dato={søker.fødselsdato}/></BodyShort>
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
