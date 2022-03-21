import React from "react";

import { SakHenter } from "./SakHenter";
import { screen, waitFor } from "@testing-library/react";
import {renderWithRouter} from "../../test/renderWithRouter";

describe("Sak-henter", () => {
  it("viser laster-animasjon når vi gjør et kall", async () => {
    renderWithRouter(<SakHenter />, {route: "/aap-behandling/sak/12345678910"});
    expect(screen.getByText("venter...")).toBeInTheDocument();
  });
  it("henter sak med id", async () => {
    renderWithRouter(<SakHenter />, {route: "/aap-behandling/sak/12345678910"});
    await waitFor(() => expect(screen.getByText('123456 78910')).toBeVisible());
  });
});
