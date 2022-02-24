import React, {useEffect, useState} from 'react';
import {Dropdown, Header} from "@navikt/ds-react-internal";
import {fetchGET} from "../../hooks/useFetch";

import "./appHeader.css";

interface Userinfo {
  name: string;
}

const AppHeader = ():JSX.Element => {
  const [userinfo, setUserinfo] = useState<Userinfo|undefined>();
  const {data, error} = fetchGET("/aap-behandling/internal/userinfo");
  useEffect(() => {
    if (data && !error && !userinfo) {
      setUserinfo(data);
    }
  }, [userinfo, setUserinfo, data, error]);

  return (<Header className={"app__header"}>
    <Header.Title href="/aap-behandling/saksoversikt">AAP Vedtaksløsning</Header.Title>
    {userinfo && <Dropdown>
      <Header.UserButton name={userinfo.name} as={Dropdown.Toggle}/>
      <Dropdown.Menu>
        <Dropdown.Menu.List>
          <Dropdown.Menu.List.Item>
            Logg ut
          </Dropdown.Menu.List.Item>
        </Dropdown.Menu.List>
      </Dropdown.Menu>
    </Dropdown>}
  </Header>)
};

export { AppHeader }
