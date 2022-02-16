import React from "react";
import { render, screen } from "@testing-library/react";
import { Oppgave } from "./Oppgave";
import { testdataliste } from "../../mocks/datas/vurderinger";

describe("Oppgavevisning", () => {
  it("viser en enkelt sak", () => {
    render(<Oppgave sak={testdataliste[0]} />);
    expect(screen.getByText("Søknad om AAP")).toBeVisible();
  });
});
