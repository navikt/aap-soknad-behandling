import React, { useEffect, useState } from "react";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import { System, ExternalLink } from "@navikt/ds-icons";
import { fetchGET } from "../../hooks/useFetch";

import * as styles from "./appHeader.module.css";
import { Link } from "@navikt/ds-react";

interface Brukerinfo {
  name: string;
}

const links: { label: string; href: string }[] = [
  {
    label: "Folketrygdloven, kapittel 11",
    href: "https://lovdata.no/dokument/NL/lov/1997-02-28-19/KAPITTEL_5-7#KAPITTEL_5-7",
  },
  {
    label: "NAV Loven, 14a",
    href: "https://lovdata.no/dokument/NL/lov/2006-06-16-20/KAPITTEL_3#%C2%A714a",
  },
];

const Systemmeny = (): JSX.Element => (
  <Dropdown>
    <Header.Button as={Dropdown.Toggle} style={{ marginLeft: "auto" }}>
      <System style={{ fontSize: "1.5rem" }} title={"Systemer og oppslagsverk"} />
    </Header.Button>
    <Dropdown.Menu>
      <Dropdown.Menu.GroupedList>
        <Dropdown.Menu.GroupedList.Heading>Systemer og oppslagsverk</Dropdown.Menu.GroupedList.Heading>
        {links.map((link) => (
          <Dropdown.Menu.GroupedList.Item key={link.label}>
            <Link href={link.href} target={"_blank"}>
              {link.label} <ExternalLink />
            </Link>
          </Dropdown.Menu.GroupedList.Item>
        ))}
      </Dropdown.Menu.GroupedList>
    </Dropdown.Menu>
  </Dropdown>
);

const Brukermeny = ({ brukerinfo }: { brukerinfo: Brukerinfo | undefined }): JSX.Element => {
  if (!brukerinfo) {
    return <></>;
  }
  return (
    <Dropdown>
      <Header.UserButton name={brukerinfo.name} as={Dropdown.Toggle} />
      <Dropdown.Menu>
        <Dropdown.Menu.List>
          <Dropdown.Menu.List.Item>Logg ut</Dropdown.Menu.List.Item>
        </Dropdown.Menu.List>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const AppHeader = (): JSX.Element => {
  const [brukerinfo, setBrukerinfo] = useState<Brukerinfo | undefined>();
  const { data, error } = fetchGET("/aap-behandling/internal/userinfo");
  useEffect(() => {
    if (data && !error && !brukerinfo) {
      setBrukerinfo(data);
    }
  }, [brukerinfo, setBrukerinfo, data, error]);

  return (
    <Header className={styles.app__header}>
      <Header.Title href="/aap-behandling/saksoversikt">AAP Vedtaksløsning</Header.Title>
      <Systemmeny />
      <Brukermeny brukerinfo={brukerinfo} />
    </Header>
  );
};

export { AppHeader };
