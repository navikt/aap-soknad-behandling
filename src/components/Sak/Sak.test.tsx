import React from "react";
import {render, screen} from "@testing-library/react";
import {personMedEnAktivSak} from "../../mocks/datas/personsaker";
import {Sak} from "./Sak";
import { formaterPid } from "../../lib/dato";

describe("Saksvisning", () => {
  test("viser en enkelt sak", () => {
    render(<Sak sak={personMedEnAktivSak[0]} />);
    const forventetPid = formaterPid(personMedEnAktivSak[0].personident);
    expect(screen.getByText(forventetPid)).toBeVisible();
  })
})
