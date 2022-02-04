import React from "react";
import {useFetch} from "../hooks/useFetch";
import {ErrorSummary, Loader} from "@navikt/ds-react";
import {Oppgavevisning} from "./Oppgavevisning";
import {Sak} from "../types/Sak";

type APIResponse = {
  data: Sak;
  loading: boolean;
  error: string;
};

const NesteSak = ():JSX.Element => {
  const {data, loading, error}: APIResponse = useFetch("/aap-behandling/api/sak/neste");

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorSummary>{error}</ErrorSummary>
  }
  if (data) {
    return <Oppgavevisning sak={data} />
  }

  return <></>;
};

export { NesteSak };
