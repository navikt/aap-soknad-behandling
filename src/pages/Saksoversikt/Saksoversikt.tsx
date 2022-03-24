import { Heading, Link, Loader, Table } from "@navikt/ds-react";

import { Caseworker, Warning } from "@navikt/ds-icons";
import { fetchGET } from "../../hooks/useFetch";
import { SøkerType } from "../../types/SakType";
import { RenderWhen } from "../../components/RenderWhen";
import { formaterDato } from "../../lib/dato";
import { mapSøker } from "../../lib/sokerMapper";
import { getText } from "../../tekster/tekster";

import * as styles from "./saksoversikt.module.css";

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
    <div className={styles.saksliste}>
      <section className={styles.vedtaksflate}>
        <div className={styles.saksliste__container}>
          <main className={styles.saksliste__innhold}>
            <div className={styles.banner}>
              <Heading size={"xlarge"} level={"1"}>
                Saksoversikt
              </Heading>
            </div>
            <RenderWhen when={loading}>
              <Loader />
            </RenderWhen>
            <RenderWhen when={!loading && søkere?.length > 0}>
              <Table size={"medium"} className={styles.saksliste__tabell} zebraStripes>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader style={{ minWidth: "2rem", width: "2rem" }} />
                    <Table.ColumnHeader sortable sortKey={"søknadsdato"}>
                      {getText("saksoversikt.tabell.søknadsdato")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader sortable sortKey={"navn"}>
                      {getText("saksoversikt.tabell.navn")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader sortable sortKey={"fødselsdato"}>
                      {getText("saksoversikt.tabell.fødselsdato")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader style={{ minWidth: "6rem", width: "6rem" }}>
                      {getText("saksoversikt.tabell.ansvarlig")}
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {søkere.map((søker: SøkerType) => (
                    <Table.Row
                      key={søker.sak.saksid}
                      className={søker.adressebeskyttelse === "strengtFortrolig" ? styles.gradert : ""}
                    >
                      <Table.DataCell>
                        {søker.adressebeskyttelse === "strengtFortrolig" && (
                          <Warning title={"Personen har adressegradering"} />
                        )}
                      </Table.DataCell>
                      <Table.DataCell>{søker.sak.mottattDato && formaterDato(søker.sak.mottattDato)}</Table.DataCell>
                      <Table.DataCell>
                        <Link href={`/aap-behandling/sak/${søker.personident}`}>{søker.navn}</Link>
                      </Table.DataCell>
                      <Table.DataCell>{formaterDato(søker.fødselsdato)}</Table.DataCell>
                      <Table.DataCell style={{textAlign: "center"}}>
                        {søker.sak?.ansvarlig && <Caseworker title={søker.sak.ansvarlig} />}
                      </Table.DataCell>
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
