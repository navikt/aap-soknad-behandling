import { BodyShort, Heading, Link, Loader, Table, Tag } from "@navikt/ds-react";

import { Caseworker, Warning } from "@navikt/ds-icons";
import { fetchGET } from "../../hooks/useFetch";
import { SøkerType } from "../../types/SakType";
import { RenderWhen } from "../../components/RenderWhen";
import { formaterDato, formaterPid } from "../../lib/dato";
import { mapSøker } from "../../lib/sokerMapper";
import { getText } from "../../tekster/tekster";

import * as styles from "./saksoversikt.module.css";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const IngenSakerFunnet = (): JSX.Element => (
  <Table.Row>
    <Table.DataCell colSpan={7} style={{ textAlign: "center" }}>
      <BodyShort>{getText("saksoversikt.ingenFunnet")}</BodyShort>
    </Table.DataCell>
  </Table.Row>
);

const Saksrad = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const harAdressebeskyttelse = (søker: SøkerType) => søker.adressebeskyttelse;
  return (
    <Table.Row key={søker.sak.saksid} className={harAdressebeskyttelse(søker) ? styles.gradert : ""}>
      <Table.DataCell>
        {harAdressebeskyttelse(søker) && <Warning title={"Personen har adressegradering"} />}
      </Table.DataCell>
      <Table.DataCell>{søker.sak.mottattDato && formaterDato(søker.sak.mottattDato)}</Table.DataCell>
      <Table.DataCell>
        <Link href={`/aap-behandling/sak/${søker.personident}`}>{formaterPid(søker.personident)}</Link>
      </Table.DataCell>
      <Table.DataCell>
        <Link href={`/aap-behandling/sak/${søker.personident}`}>{søker.navn}</Link>
      </Table.DataCell>
      <Table.DataCell>{formaterDato(søker.fødselsdato)}</Table.DataCell>
      <Table.DataCell>
        {søker.sak.vedtak?.innvilget && (
          <Tag variant={"success"} size={"small"}>
            {getText("Vedtak fattet")}
          </Tag>
        )}
      </Table.DataCell>
      <Table.DataCell>
        <Link href={`/aap-behandling/sak/${søker.personident}`}>
          {getText(søker.sak.vedtak?.innvilget ? "saksoversikt.visSak" : "saksoversikt.behandle")}
        </Link>
      </Table.DataCell>
      <Table.DataCell style={{ textAlign: "center" }}>
        {søker.sak?.ansvarlig && <Caseworker title={søker.sak.ansvarlig} />}
      </Table.DataCell>
    </Table.Row>
  );
};

const Saksoversikt = () => {
  const { data, loading, error }: ApiResponse = fetchGET("/aap-behandling/api/sak");
  if (error) {
    return <div>{error}</div>;
  }

  const søkere: SøkerType[] = mapSøker(data);
  const kanSorteres = søkere.length > 1;

  return (
    <div className={styles.saksliste}>
      <section className={styles.vedtaksflate}>
        <div className={styles.saksliste__container}>
          <main className={styles.saksliste__innhold}>
            <div className={styles.banner}>
              <Heading size={"xlarge"} level={"1"}>
                {getText("saksoversikt.heading")}
              </Heading>
            </div>
            <RenderWhen when={loading}>
              <Loader />
            </RenderWhen>
            <RenderWhen when={!loading}>
              <Table size={"medium"} className={styles.saksliste__tabell} zebraStripes>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader style={{ minWidth: "2rem", width: "2rem" }} />
                    <Table.ColumnHeader sortable={kanSorteres} sortKey={"søknadsdato"}>
                      {getText("saksoversikt.tabell.søknadsdato")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader sortable={kanSorteres} sortKey={"pid"}>
                      {getText("saksoversikt.tabell.pid")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader sortable={kanSorteres} sortKey={"navn"}>
                      {getText("saksoversikt.tabell.navn")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader sortable={kanSorteres} sortKey={"fødselsdato"}>
                      {getText("saksoversikt.tabell.fødselsdato")}
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>{getText("saksoversikt.tabell.status")}</Table.ColumnHeader>
                    <Table.ColumnHeader>{getText("saksoversikt.tabell.handling")}</Table.ColumnHeader>
                    <Table.ColumnHeader style={{ minWidth: "6rem", width: "6rem" }}>
                      {getText("saksoversikt.tabell.ansvarlig")}
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {søkere.length === 0 && <IngenSakerFunnet />}
                  {søkere.length > 0 &&
                    søkere.map((søker: SøkerType) => <Saksrad key={søker.personident} søker={søker} />)}
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
