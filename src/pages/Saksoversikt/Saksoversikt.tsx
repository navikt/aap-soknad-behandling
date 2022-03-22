import React from "react";
import { Heading, Link, Loader, Table } from "@navikt/ds-react";
import "./Saksoversikt.css";
import { fetchGET } from "../../hooks/useFetch";
import { SøkerType } from "../../types/SakType";
import { RenderWhen } from "../../components/RenderWhen";
import { formaterDato } from "../../lib/dato";
import { mapSøker } from "../../lib/sokerMapper";
import { getText } from "../../tekster/tekster";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const Saksoversikt = () => {
  const { data, loading, error }: ApiResponse = fetchGET("/aap-behandling/api/sak");
  if (error) {
    return <div>{error}</div>;
  }

  const søkere: SøkerType[] = mapSøker(data);

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
            <RenderWhen when={!loading && søkere?.length > 0}>
              <Table size={"medium"} className={"saksliste__tabell"} zebraStripes>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>{getText("saksoversikt.tabell.søknadsdato")}</Table.HeaderCell>
                    <Table.HeaderCell>{getText("saksoversikt.tabell.navn")}</Table.HeaderCell>
                    <Table.HeaderCell>{getText("saksoversikt.tabell.fødselsdato")}</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {søkere.map((søker: SøkerType) => (
                    <Table.Row key={søker.sak.saksid}>
                      <Table.DataCell>{søker.sak.mottattDato && formaterDato(søker.sak.mottattDato)}</Table.DataCell>
                      <Table.DataCell>
                        <Link href={`/aap-behandling/sak/${søker.personident}`}>{søker.navn}</Link>
                      </Table.DataCell>
                      <Table.DataCell>{formaterDato(søker.fødselsdato)}</Table.DataCell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </RenderWhen>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Saksoversikt;
