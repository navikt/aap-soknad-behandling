import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Saksoversikt from "./Saksoversikt";
import { renderWithRouter } from "../../test/renderWithRouter";
import { listeMedSøkereOgSaker } from "../../mocks/datas/saksliste";
import { server } from "../../mocks/server";
import { rest } from "msw";
import { formaterPid } from "../../lib/dato";

describe("Saksoversikt", () => {
  test("viser liste med oppgaver", async () => {
    const forventetAntallRader = listeMedSøkereOgSaker.length + 1; //row inkluderer og headere, derav +1
    renderWithRouter(<Saksoversikt />);
    expect(screen.getByText("venter...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("heading", { name: /Saksoversikt/ })).toBeVisible());
    await waitFor(() => expect(screen.getByRole("columnheader", { name: /Bruker/ })).toBeVisible());
    expect(screen.getAllByRole("row")).toHaveLength(forventetAntallRader);
    expect(screen.getByRole("link", { name: formaterPid(listeMedSøkereOgSaker[0].personident) })).toBeVisible();
  });

  test("viser melding når det ikke blir returnert noen saker", async () => {
    server.use(
      rest.get("/aap-behandling/api/sak", (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json([]), ctx.delay(400));
      })
    );
    renderWithRouter(<Saksoversikt />);
    await waitFor(() => expect(screen.getAllByRole("row")).toHaveLength(2)); //header-rad og en rad med melding
    expect(screen.getByText("Fant ingen saker.")).toBeVisible();
  });
});
