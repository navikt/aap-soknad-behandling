import { useSearchParams } from "react-router-dom";
import { BodyShort, Heading, Link, Loader, Table, Tag, ToggleGroup } from "@navikt/ds-react";

import { fetchGET } from "../../hooks/useFetch";
import { SakType, SøkerType } from "../../types/SakType";
import { RenderWhen } from "../../components/RenderWhen";
import { DATO_FORMATER, formaterDato, formaterPid } from "../../lib/dato";
import { mapSøker } from "../../lib/sokerMapper";
import { getText } from "../../tekster/tekster";

import * as styles from "./saksoversikt.module.css";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const Sakstags = ({ sak }: { sak: SakType }): JSX.Element => {
  // TODO må avklares hvordan respons skal se ut
  if (sak.vedtak) {
    return (
      <Tag variant={sak.vedtak.innvilget ? "success" : "error"}>
        {sak.vedtak.innvilget ? "Innvilget" : "Ikke innvilget"}
      </Tag>
    );
  }
  if (sak.paragraf_11_5?.erOppfylt) {
    return (
      <Tag variant={"success"} size={"small"}>
        {getText("saksoversikt.tags.11_5")}
      </Tag>
    );
  }

  if (sak.paragraf_11_2 || sak.paragraf_11_3 || sak.paragraf_11_4) {
    let p11_2_ikke_oppfylt =
      (sak.paragraf_11_2?.erOppfylt === false && sak.paragraf_11_2?.måVurderesManuelt === false) ?? undefined;
    let p11_3_ikke_oppfylt =
      (sak.paragraf_11_3?.erOppfylt === false && sak.paragraf_11_3?.måVurderesManuelt === false) ?? undefined;
    let p11_4_ikke_oppfylt =
      (sak.paragraf_11_4?.erOppfylt === false && sak.paragraf_11_4?.måVurderesManuelt === false) ?? undefined;
    if (p11_2_ikke_oppfylt || p11_3_ikke_oppfylt || p11_4_ikke_oppfylt) {
      const paragrafer = [p11_2_ikke_oppfylt && "§11-2", p11_3_ikke_oppfylt && "§11-3", p11_4_ikke_oppfylt && "§11-4"]
        .filter((v) => !!v)
        .join(", ");
      return (
        <Tag variant={"error"} size={"small"}>
          {getText("saksoversikt.tags.inngangsvilkår")}&nbsp;
          {paragrafer}
        </Tag>
      );
    }
  }

  return <></>;
};

const IngenSakerFunnet = (): JSX.Element => (
  <Table.Row>
    <Table.DataCell colSpan={5} style={{ textAlign: "center" }}>
      <BodyShort>{getText("saksoversikt.ingenFunnet")}</BodyShort>
    </Table.DataCell>
  </Table.Row>
);

const Saksrad = ({ søker }: { søker: SøkerType }): JSX.Element => {
  const harAdressebeskyttelse = (søker: SøkerType) => søker.adressebeskyttelse;
  return (
    <Table.Row key={søker.sak.saksid} className={harAdressebeskyttelse(søker) ? styles.gradert : ""}>
      <Table.DataCell>
        {søker.sak.søknadstidspunkt && (
          <Link href={`/aap-behandling/sak/${søker.personident}`}>
            {formaterDato(søker.sak.søknadstidspunkt, DATO_FORMATER.ddMMMyyyy)}
          </Link>
        )}
      </Table.DataCell>
      <Table.DataCell>{formaterPid(søker.personident)}</Table.DataCell>
      <Table.DataCell>&nbsp;</Table.DataCell>
      <Table.DataCell>
        <Sakstags sak={søker.sak} />
      </Table.DataCell>
      <Table.DataCell>{søker.navn}</Table.DataCell>
    </Table.Row>
  );
};

const VISNINGER = {
  LEDIGE: "ledige",
  BEHANDLET: "behandlede",
};

const DEFAULT_PAGE = VISNINGER.LEDIGE;

const Saksoversikt = () => {
  const { data, loading, error }: ApiResponse = fetchGET("/aap-behandling/api/sak");
  const [searchParams, setSearchParams] = useSearchParams();
  const onsketVisning = searchParams.get("vis");
  const gyldigVisning = onsketVisning && Object.values(VISNINGER).includes(onsketVisning);

  const visning = gyldigVisning ? onsketVisning : DEFAULT_PAGE;

  if (error) {
    return <div>{error}</div>;
  }
  const søkere: SøkerType[] = mapSøker(data);
  const kanSorteres = søkere.length > 1;
  const tabellInnhold = () => {
    if (søkere.length === 0) {
      return <IngenSakerFunnet />;
    }
    return søkere
      .filter((søker: SøkerType) => (visning === VISNINGER.BEHANDLET ? !!søker.sak.vedtak : !søker.sak.vedtak))
      .map((søker: SøkerType) => <Saksrad key={søker.personident} søker={søker} />);
  };

  const settVisning = (nyVisning: string) => {
    setSearchParams({ vis: nyVisning });
  };

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
              <>
                <ToggleGroup onChange={settVisning} value={visning}>
                  <ToggleGroup.Item value={VISNINGER.LEDIGE} title={"Alle saker til behandling"}>
                    Til behandling
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value={VISNINGER.BEHANDLET} title={"Alle saker som er ferdig behandlet"}>
                    Behandlet
                  </ToggleGroup.Item>
                </ToggleGroup>
                <Table size={"medium"} className={styles.saksliste__tabell} zebraStripes>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader sortable={kanSorteres} sortKey={"søknadsdato"}>
                        {getText("saksoversikt.tabell.søknadsdato")}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader sortable={kanSorteres} sortKey={"pid"}>
                        {getText("saksoversikt.tabell.pid")}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader sortable={kanSorteres} sortKey={"status"}>
                        {getText("saksoversikt.tabell.status")}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader sortable={kanSorteres} sortKey={"sakstype"}>
                        {getText("saksoversikt.tabell.aap")}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader>Navn</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{tabellInnhold()}</Table.Body>
                </Table>
              </>
            </RenderWhen>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Saksoversikt;
