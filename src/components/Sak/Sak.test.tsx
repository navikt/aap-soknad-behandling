import React from "react";
import {render, screen} from "@testing-library/react";
import {personMedEnAktivSak} from "../../mocks/datas/personsaker";
import {Sak} from "./Sak";
import {datoFraArray, finnAlder} from "../../lib/dato";

describe("Saksvisning", () => {
  test("viser en enkelt sak", () => {
    const alder = finnAlder(datoFraArray(personMedEnAktivSak[0].fødselsdato));
    render(<Sak sak={personMedEnAktivSak[0]} />);
    expect(screen.getByText("Søknad om AAP")).toBeVisible();
    expect(screen.getByText(personMedEnAktivSak[0].personident)).toBeVisible();
    expect(screen.getByText('Alder')).toBeVisible();
    expect(screen.getByText(alder)).toBeVisible();
  })
})
