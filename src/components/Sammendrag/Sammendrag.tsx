import { BodyShort, Button, Heading, Link } from "@navikt/ds-react";
import { Neutral, Copy } from "@navikt/ds-icons";
import { datoFraArray, finnAlder, formaterPid } from "../../lib/dato";
import { SakType } from "../../types/SakType";
import { pipe } from "../../lib/functions";

import "./sammendrag.css";

const Sammendrag2 = ({ sak }: { sak: SakType }): JSX.Element => {
  return (
    <section className={"personlinje"}>
      <Neutral />
      <span style={{ fontWeight: 900, marginLeft: "0.5rem" }}>
        Navn Navnesen ({pipe(datoFraArray, finnAlder)(sak.fødselsdato)})
      </span>
      <BodyShort className={"separator"}>/</BodyShort>
      <span>
        {formaterPid(sak.personident)}{" "}
        <Button
          variant={"tertiary"}
          onClick={() => navigator.clipboard.writeText(sak.personident)}
          size={"small"}
          className={"personlinje__knapp"}
        >
          <Copy title={"Kopier personid til utklippstavlen"} />
        </Button>
      </span>
      <BodyShort className={"separator"}>/</BodyShort>
      <Link href={"#"}>Brukerhistorikk</Link>
    </section>
  );
};

const Sammendrag = ({ sak }: { sak: SakType }): JSX.Element => {
  return (
    <section className={"sak__oppsummering"}>
      <Heading size={"large"} level={"2"} style={{ flex: "1 1 25%" }}>
        Navn Navnesen
      </Heading>
      <div style={{ flex: "1 1 25%" }}>
        <div style={{ fontWeight: "900" }}>Fødselsnummer</div>
        <div>
          {sak.personident} ({pipe(datoFraArray, finnAlder)(sak.fødselsdato)} år)
        </div>
      </div>
      <div style={{ flex: "1 1 25%" }}>
        <div style={{ fontWeight: "900" }}>Søkte</div>
        <div>dd.mm.yyyy</div>
      </div>
      <div style={{ flex: "1 1 25%" }}>
        <Link href={"#"}>Brukerhistorikk</Link>
      </div>
    </section>
  );
};

export { Sammendrag, Sammendrag2 };
