import React from "react";
import {render, screen} from "@testing-library/react";
import { Oppgavevisning } from "./Oppgavevisning";
import {testdataliste} from "../mocks/datas/vurderinger";

describe("Oppgavevisning", () => {
  it ("viser en sak", () => {
    render(<Oppgavevisning sak={testdataliste[0]}/>);
    expect(screen.getByText('11068812345')).toBeVisible();
    expect(screen.getByText('1988-06-11')).toBeVisible();
    expect(screen.getByText('meh')).toBeVisible();
    expect(screen.getAllByRole('heading', {name: /Vilkår$/})).toHaveLength(2);
  })
});
