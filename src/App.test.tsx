import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { App, Ruter } from "./App";
import { MemoryRouter } from "react-router-dom";

describe("APP", () => {
  test("Tegner app-en", () => {
    render(<App />);
    expect(screen.getByText("AAP Vedtaksløsning")).toBeVisible();
  });

  test("gir 404 når stien ikke finnes", () => {
    render(
      <MemoryRouter initialEntries={["/finnes-ikke"]}>
        <Ruter />
      </MemoryRouter>
    );

    expect(screen.getByText("AAP App")).toBeVisible();
  });

  test("Sender deg til saksoversikt når sti ikke er angitt", async () => {
    render(
      <MemoryRouter initialEntries={[""]}>
        <Ruter />
      </MemoryRouter>
    );
    const venterElement = screen.getByText("venter...");
    expect(venterElement).toBeInTheDocument();
    await waitForElementToBeRemoved(venterElement);
    expect(screen.getByText("Oppgaver AAP")).toBeVisible();
  });

  test("Sender deg til saksoversikt når bare deler av sti er angitt", async () => {
    render(
      <MemoryRouter initialEntries={["/aap-behandling"]}>
        <Ruter />
      </MemoryRouter>
    );
    const venterElement = screen.getByText("venter...");
    expect(venterElement).toBeInTheDocument();
    await waitForElementToBeRemoved(venterElement);
    expect(screen.getByText("Oppgaver AAP")).toBeVisible();
  });
});
