import {render, screen} from "@testing-library/react";
import {Oppgaveliste} from "./Oppgaveliste";

describe.skip("oppgaveliste", () => {
  test("tegner nav-elementer", () => {
    render(<Oppgaveliste sider={{}} />);
    expect(screen.getByRole('link', {name: /Inngangsvilkår/})).toBeVisible();
    expect(screen.getByRole('link', {name: /§ 11-5/})).toBeVisible();
  });
});
