import React from "react";
import {screen, waitFor} from "@testing-library/react";
import Saksoversikt from "./Saksoversikt";
import {renderWithRouter} from "../../test/renderWithRouter";
import { listeMedSøkereOgSaker } from "../../mocks/datas/saksliste";

describe('Saksoversikt',  () => {
  it('viser liste med oppgaver', async () => {
    const forventetAntallRader = listeMedSøkereOgSaker.length + 1; //row inkluderer og headere, derav +1
    renderWithRouter(<Saksoversikt />);
    expect(screen.getByText("venter...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole('heading', {name: /Saksoversikt/})).toBeVisible());
    await waitFor (() => expect(screen.getByRole('columnheader', {name: /Søknadsdato/})).toBeVisible());
    expect(screen.getByRole("columnheader", {name: /Navn/})).toBeVisible();
    expect(screen.getByRole("columnheader", {name: /Fødselsdato/})).toBeVisible();
    expect(screen.getAllByRole("row")).toHaveLength(forventetAntallRader);
    expect(screen.getByRole("link", {name: listeMedSøkereOgSaker[0].navn || 'NAVN'})).toBeVisible();
  })
});
