import { screen } from "@testing-library/react";

import { Sak } from "./Sak";
import { formaterPid } from "../../lib/dato";
import { renderWithRouter } from "../../test/renderWithRouter";

import { listeMedSøkereOgSaker } from "../../mocks/datas/saksliste";

describe("Saksvisning", () => {
  test("viser en enkelt sak", () => {
    renderWithRouter(<Sak søker={listeMedSøkereOgSaker[0]} />);
    const forventetPid = formaterPid(listeMedSøkereOgSaker[0].personident);
    expect(screen.getByText(forventetPid)).toBeVisible();
  });
});
