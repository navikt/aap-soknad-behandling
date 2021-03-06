import { screen } from "@testing-library/react";
import { Oppgaveliste } from "./Oppgaveliste";
import { renderWithRouter } from "../../../test/renderWithRouter";
import { PAGES } from "../pages";
import { listeMedSøkereOgSaker } from "../../../mocks/datas/saksliste";

describe("oppgaveliste", () => {
  test("tegner nav-elementer", () => {
    renderWithRouter(<Oppgaveliste søker={listeMedSøkereOgSaker[0]} activePage={PAGES.INNGANG} skipLinkId={""} />);
    expect(screen.getByRole("link", { name: /Inngangsvilkår/ })).toBeVisible();
    expect(screen.getByRole("link", { name: /§ 11-5/ })).toBeVisible();
  });

  test("aktivt valg skal markeres", () => {
    renderWithRouter(<Oppgaveliste søker={listeMedSøkereOgSaker[0]} activePage={PAGES.BEREGNING} skipLinkId={""} />);
    const elem = screen.getByRole("link", { name: /Beregningstidspunkt/ });
    expect(elem).toBeVisible();
    expect(elem).toHaveClass("active");
  });
});
