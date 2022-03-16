import {screen} from "@testing-library/react";

import {Sak} from "./Sak";
import { formaterPid } from "../../lib/dato";
import { renderWithRouter } from "../../test/renderWithRouter";

import {personMedEnAktivSak} from "../../mocks/datas/personsaker";

describe("Saksvisning", () => {
  test("viser en enkelt sak", () => {
    renderWithRouter(<Sak sak={personMedEnAktivSak[0]} />);
    const forventetPid = formaterPid(personMedEnAktivSak[0].personident);
    expect(screen.getByText(forventetPid)).toBeVisible();
  })
})
