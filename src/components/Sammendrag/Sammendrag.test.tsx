import { render, screen } from "@testing-library/react";

import { Sammendrag } from "./Sammendrag";
import { personMedEnAktivSak } from "../../mocks/datas/personsaker";

describe("Sammendrag", () => {
  test("vises i minimert visning initielt", () => {
    render(<Sammendrag sak={personMedEnAktivSak[0]} />);
    expect(screen.queryByText('Sivilstand')).not.toBeInTheDocument();
  });
});
