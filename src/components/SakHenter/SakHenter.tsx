import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {ErrorSummary, Loader} from "@navikt/ds-react";
import {Oppgave} from "../Oppgave/Oppgave";
import {Sak} from "../../types/Sak";
import {useMatch} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
type APIResponse = {
  data: Sak;
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
      return <Oppgave sak={data[0]} />
    }
    return <Oppgave sak={data} />
  }

  return <></>;
};

export { SakHenter };
