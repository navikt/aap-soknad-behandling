import { render, screen } from "@testing-library/react";

import { Sammendrag } from "./Sammendrag";
import { listeMedSøkereOgSaker } from "../../../mocks/datas/saksliste";

describe("Sammendrag", () => {
  test("vises i minimert visning initielt", () => {
    render(<Sammendrag søker={listeMedSøkereOgSaker[0]} />);
    const forventetNavn = listeMedSøkereOgSaker[0].navn || "navn";
    expect(screen.getByRole("heading", { name: (content) => content.startsWith(forventetNavn) })).toBeVisible();
  });
});
