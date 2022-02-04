import React from "react";

import { NesteSak } from "./NesteSak";
import { render, screen, waitFor } from "@testing-library/react";

describe("Neste sak", () => {
  it("viser laster-animasjon når vi gjør et kall", async () => {
    render(<NesteSak />);
    expect(screen.getByText("venter...")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Fødselsnummer/)).toBeVisible());
  });
  it("viser sak", async () => {

    render(<NesteSak />);
    await waitFor(() => expect(screen.getByText('11068812345')).toBeVisible());
  });
});
