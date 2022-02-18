import React from "react";

import { SakHenter } from "./SakHenter";
import { screen, waitFor } from "@testing-library/react";
import {renderWithRouter} from "../../test/renderWithRouter";
import {testdataliste} from "../../mocks/datas/vurderinger";

describe("Sak-henter", () => {
  it("viser laster-animasjon når vi gjør et kall", async () => {
    renderWithRouter(<SakHenter />, {route: "/aap-behandling/sak/1234567890"});
    expect(screen.getByText("venter...")).toBeInTheDocument();
  });
  it("henter sak med id", async () => {
    renderWithRouter(<SakHenter />, {route: "/aap-behandling/sak/1234567890"});
    await waitFor(() => expect(screen.getByText('1234567890')).toBeVisible());
  });

  it("henter neste sak", async () => {
    renderWithRouter(<SakHenter />, {route: "/aap-behandling/sak/neste"});
    await waitFor(() => expect(screen.getByText(testdataliste[0].personident)).toBeVisible());
  });
});
