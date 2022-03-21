import React from "react";
import {fetchGET} from "../../hooks/useFetch";
import {ErrorSummary, Loader} from "@navikt/ds-react";
import {useMatch} from "react-router-dom";
import {Sak} from "../Sak/Sak";
import {SøkerType} from "../../types/SakType";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

const SakHenter = ():JSX.Element => {
  const urlParams = useMatch("/aap-behandling/sak/:personid");
  const personid = urlParams?.params.personid;
  const url = `/aap-behandling/api/sak/${personid}`;
  const response: ApiResponse = fetchGET(url);

  if (response.loading) {
    return <Loader />
  }
  if (response.error) {
    return <ErrorSummary>{response.error}</ErrorSummary>
  }
  const søkere: SøkerType[] = response.data || [];

  if (søkere.length === 1) {
    const søker = søkere[0];
    return <Sak søker={søker} />
  }

  return <></>;
};

export { SakHenter };
