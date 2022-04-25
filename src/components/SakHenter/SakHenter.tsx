import React from "react";
import { fetchGET } from "../../hooks/useFetch";
import { ErrorSummary, Loader } from "@navikt/ds-react";
import { useMatch } from "react-router-dom";
import { Sak } from "../Sak/Sak";
import { søkerliste } from "../../types/SakType";

import * as styles from "./sakhenter.module.css";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const SakHenter = (): JSX.Element => {
  const urlParams = useMatch("/aap-behandling/sak/:personid");
  const personid = urlParams?.params.personid;
  const url = `/aap-behandling/api/sak/${personid}`;
  const response: ApiResponse = fetchGET(url);

  if (response.error) {
    return <ErrorSummary>{response.error}</ErrorSummary>;
  }
  if (response.loading || !response.data) {
    return <Loader />;
  }

  const søkere = søkerliste.safeParse(response.data);
  if (!søkere.success) {
    console.error(søkere.error);
    return (
      <ErrorSummary heading={"Feil under parsing av svar"} className={styles.feilmelding}>
        {søkere.error.message}
      </ErrorSummary>
    );
  }
  const søker = søkere.data[0];
  return <Sak søker={søker} />;
};

export { SakHenter };
