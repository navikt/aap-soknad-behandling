import { Vilkarsstatus } from "./Vilkarsstatus";
import { render, screen } from "@testing-library/react";

describe("Vilkårsstatus", () => {
  test("viser status for oppfylt vilkår", () => {
    render(<Vilkarsstatus erOppfylt={true} />);
    expect(screen.getByText(/Oppfylt/)).toBeVisible();
  });

  test("viser status for ikke oppfylt vilkår", () => {
    render(<Vilkarsstatus erOppfylt={false} />);
    expect(screen.getByText(/Ikke oppfylt/)).toBeVisible();
  });

  test("viser status for vilkår som må vurderes manuelt", () => {
    render(<Vilkarsstatus erOppfylt={false} måVurderesManuelt={true} />);
    expect(screen.getByText(/Må vurderes manuelt/)).toBeVisible();
  });
});
