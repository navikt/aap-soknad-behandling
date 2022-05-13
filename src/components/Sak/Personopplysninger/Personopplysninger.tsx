import { fetchGET } from "../../../hooks/useFetch";
import { useMatch } from "react-router-dom";
import { Button, Heading, Loader, Modal } from "@navikt/ds-react";
import { PersonopplysningerType } from "../../../types/PersonopplysningerType";

import * as styles from "./personopplysninger.module.css";
import { useState } from "react";
import { Profile } from "@navikt/ds-icons";

type ApiResponse = {
  data: PersonopplysningerType;
  error: string;
  loading: boolean;
  status: number;
};

const Innhold = ({ status, data }: { status: number; data?: PersonopplysningerType }): JSX.Element => {
  if (status === 404) {
    return <div>Fant ingen person med denne personid-en</div>;
  }
  if (data) {
    return (
      <dl className={styles.dataliste}>
        <dt>Personident</dt>
        <dd>{data.personident}</dd>
        <dt>norgEnhetId</dt>
        <dd>{data.norgEnhetId}</dd>
        <dt>Adressebeskyttelse</dt>
        <dd>{data.adressebeskyttelse}</dd>
        <dt>Geografisk tilknytning</dt>
        <dd>{data.geografiskTilknytning}</dd>
        <dt>Er skjermet</dt>
        <dd>{data.erSkjermet ? "Ja" : "Nei"}</dd>
        <dt>Skjermet fra og med</dt>
        <dd>{data.erSkjermetFom}</dd>
        <dt>Skjermet til og med</dt>
        <dd>{data.erSkjermetTom}</dd>
      </dl>
    );
  }
  return <div>Server svarte med status {status}, og ga ingen data i svaret</div>;
};

const Personopplysninger = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const urlParams = useMatch("/aap-behandling/sak/:personid");
  const personid = urlParams?.params.personid;
  const url = `/aap-behandling/api/personopplysninger/${personid}`;
  const response: ApiResponse = fetchGET(url);

  if (response.status !== -1) {
    return (
      <>
        <Button variant={"tertiary"} onClick={() => setOpen(!open)} size={"xsmall"} title={"Vis personopplysninger"}>
          <Profile />
        </Button>
        <Modal open={open} onClose={() => setOpen(!open)}>
          <Modal.Content className={styles.modal}>
            <Heading level={"3"} size={"small"}>
              Personopplysninger
            </Heading>
            <Innhold status={response.status} data={response.data} />
          </Modal.Content>
        </Modal>
      </>
    );
  }
  return <Loader />;
};

export { Personopplysninger };
