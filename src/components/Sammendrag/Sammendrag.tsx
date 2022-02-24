import { useState } from "react";

import { Heading } from "@navikt/ds-react";
import { Applicant, Expand, Collapse } from "@navikt/ds-icons";
import { datoFraArray, finnAlder, formaterDato } from "../../lib/dato";
import { SAKSTILSTAND, sakstilstand } from "../../types/Sakstilstand";
import { SakType } from "../../types/SakType";

const Sammendrag = ({ sak }: { sak: SakType }): JSX.Element => {
  const [vis, toggleVis] = useState<boolean>(false);
  return (
    <section className={"sak__oppsummering"}>
      <Heading size={"large"} level={"2"}>
        <Applicant /> <span>Om søkeren</span>
      </Heading>
      <section>
        <span className={"key"}>Fødselsnummer</span>
        <span className={"value"}>{sak?.personident}</span>
        <span className={"key"}>Fødselsdato</span>
        <span className={"value"}>{formaterDato(datoFraArray(sak?.fødselsdato))}</span>
        <span className={"key"}>Alder</span>
        <span className={"value"}>{finnAlder(datoFraArray(sak?.fødselsdato))}</span>
        <span className={"key"}>Status</span>
        <span className={"value"}>{sakstilstand(sak?.tilstand as keyof typeof SAKSTILSTAND)}</span>
      </section>
      {vis && <section>
        <div className={"rad"}>
          <span className={"key"}>Sivilstand</span>
          <span className={"value"}>Gift</span>
        </div>
        <div className={"rad"}>
          <div className={"key"}>Adresse</div>
          <div>
            <div className={"value"}>Brynsveien 984</div>
            <div className={"value"}>2408 Elverum</div>
          </div>
        </div>
      </section>}
      <button onClick={() => toggleVis(!vis)} className={"oppsummering__toggle"} aria-expanded={vis}>
        {vis ? <Collapse /> : <Expand />}
      </button>
    </section>
  );
};

export { Sammendrag };
