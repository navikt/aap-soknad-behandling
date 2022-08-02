import { Personopplysninger } from "./index";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithRouter } from "../../../test/renderWithRouter";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Modal } from "@navikt/ds-react";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { personopplysningerUrl } from "../../../api/apiUrls";

beforeEach(() => {
  if (Modal.setAppElement) {
    Modal.setAppElement(document.createElement("div"));
  }
});

describe("Personopplysninger", () => {
  test("laster personopplysninger ved mount", async () => {
    renderWithRouter(<Personopplysninger />, { route: "/aap-behandling/sak/12345678910" });
    const venterElement = screen.getByText("venter...");
    expect(venterElement).toBeInTheDocument();
    await waitForElementToBeRemoved(venterElement);
    const visKnapp = screen.getByRole("button", { name: /Vis personopplysninger/ });
    expect(visKnapp).toBeVisible();
    await userEvent.click(visKnapp);
    expect(screen.getByRole("heading", { name: /Personopplysninger/ })).toBeVisible();
  });

  test("gir beskjed om at vi ikke fant noen personer når backend gir 404", async () => {
    server.use(
      rest.get(personopplysningerUrl('12345678910'), (req, res, ctx) => {
        return res.once(ctx.status(404));
      })
    );

    renderWithRouter(<Personopplysninger />, { route: "/aap-behandling/sak/12345678910" });
    const venterElement = screen.getByText("venter...");
    expect(venterElement).toBeInTheDocument();
    await waitForElementToBeRemoved(venterElement);
    const visKnapp = screen.getByRole("button", { name: /Vis personopplysninger/ });
    expect(visKnapp).toBeVisible();
    await userEvent.click(visKnapp);
    expect(screen.getByRole("heading", { name: /Personopplysninger/ })).toBeVisible();
    expect(screen.getByText(/Fant ingen person/)).toBeVisible();
  });
});
