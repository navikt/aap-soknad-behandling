import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import Saksoversikt from "./Saksoversikt";

describe('Saksoversikt',  () => {
  it('viser liste med oppgaver', async () => {
    render(<Saksoversikt/>);
    expect(screen.getByText("venter...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole('heading', {name: /Saksoversikt/})).toBeVisible());
    await waitFor(() => expect(screen.getByText('11068812345')).toBeVisible());
    await waitFor(() => expect(screen.getByText('27109500123')).toBeVisible());
    await waitFor(() => expect(screen.getByRole('list').children).toHaveLength(3));
  })
});
