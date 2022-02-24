import React from "react";
import {render} from "@testing-library/react";

import {personMedEnAktivSak} from "../../mocks/datas/personsaker";
import {Oppgaveliste} from "./Oppgaveliste";

describe("oppgaveliste", () => {
  test("viser en oppgave pr vilkår / ledd", () => {
    render(<Oppgaveliste vilkårsliste={personMedEnAktivSak[0].vilkårsvurderinger} />)
  });
});
