import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {ErrorSummary, Loader} from "@navikt/ds-react";
import {SakType} from "../../types/SakType";
import {useMatch} from "react-router-dom";
import {Sak} from "../Sak/Sak";

// eslint-disable-next-line no-unused-vars
type APIResponse = {
  data: SakType;
  loading: boolean;
  error: string;
};

const SakHenter = ():JSX.Element => {
  const urlParams = useMatch("/aap-behandling/sak/:personid");
  const personid = urlParams?.params.personid;
  const url = personid ? `/aap-behandling/api/sak/${personid}` : "/aap-behandling/sak/neste"
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorSummary>{error}</ErrorSummary>
  }
  if (data) {
    if (Array.isArray(data)) {
      // TODO eget api for å hente en sak?
      return <Sak sak={data[0]} />
    }
    return <Sak sak={data} />
  }

  return <></>;
};

export { SakHenter };
