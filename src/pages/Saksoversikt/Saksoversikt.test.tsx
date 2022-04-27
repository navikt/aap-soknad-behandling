import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";

import Saksoversikt from "./Saksoversikt";
import { renderWithRouter } from "../../test/renderWithRouter";
import { listeMedSøkereOgSaker } from "../../mocks/datas/saksliste";
import { server } from "../../mocks/server";
import { DATO_FORMATER, formaterDato } from "../../lib/dato";
import { ErrorBoundary } from "react-error-boundary";
import { Feilviser } from "../../components/Feilviser/Feilviser";

describe("Saksoversikt", () => {
  test("kaster exception ved parsefeil", async () => {
    server.use(
      rest.get("/aap-behandling/api/sak", (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([
            {
              personident: "11068812345",
              navn: "11-5 Mangler", // ikke fra modell
              fødselsdato: "1986-03-08",
              skjermet: "false",
              sak: {},
            },
          ]),
          ctx.delay(400)
        );
      })
    );
    console.error = jest.fn();
    renderWithRouter(
      <ErrorBoundary FallbackComponent={Feilviser}>
        <Saksoversikt />
      </ErrorBoundary>
    );
    await waitFor(() => expect(screen.getByText("Å nei! Dette var ikke helt planlagt...")).toBeVisible());
    expect(screen.getByText(/"code": "invalid_type"/)).toBeVisible();
    expect(console.error).toHaveBeenCalled();
  });

  test("viser ledige oppgaver som initiell visning", async () => {
    const forventetAntallRader = listeMedSøkereOgSaker.filter((søker) => !søker.sak.vedtak).length + 1; //row inkluderer og headere, derav +1
    renderWithRouter(<Saksoversikt />);
    expect(screen.getByText("venter...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("heading", { name: /Oppgaver AAP/ })).toBeVisible());
    await waitFor(() => expect(screen.getByRole("columnheader", { name: /Bruker/ })).toBeVisible());
    expect(screen.getAllByRole("row")).toHaveLength(forventetAntallRader);
    expect(
      screen.getByRole("link", {
        name: formaterDato(listeMedSøkereOgSaker[0].sak.søknadstidspunkt, DATO_FORMATER.ddMMMyyyy),
      })
    ).toBeVisible();

    const tilBehandlingValg = screen.getByRole("radio", { name: /Alle saker til behandling/ });
    const behandletValg = screen.getByRole("radio", { name: /Alle saker som er ferdig behandlet/ });

    expect(tilBehandlingValg).toBeVisible();
    expect(tilBehandlingValg).toBeChecked();

    expect(behandletValg).toBeVisible();
    expect(behandletValg).not.toBeChecked();
  });

  test("søknadsdato skal lenke til sak", async () => {
    const førsteSøknadsdato = listeMedSøkereOgSaker[0].sak.søknadstidspunkt;
    renderWithRouter(<Saksoversikt />);
    await waitForElementToBeRemoved(screen.getByText("venter..."));
    await waitFor(() => expect(screen.getByRole("heading", { name: /Oppgaver AAP/ })).toBeVisible());
    expect(screen.getByRole("link", { name: formaterDato(førsteSøknadsdato, DATO_FORMATER.ddMMMyyyy) })).toBeVisible();
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
