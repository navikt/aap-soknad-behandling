import { Vilkarsstatus } from "./Vilkarsstatus";
import { render, screen } from "@testing-library/react";

describe("Vilkårsstatus", () => {
  test("viser status for oppfylt vilkår", () => {
    render(<Vilkarsstatus utfall={"OPPFYLT"} />);
    expect(screen.getByText(/Oppfylt/)).toBeVisible();
  });

  test("viser status for ikke oppfylt vilkår", () => {
    render(<Vilkarsstatus utfall={"IKKE_OPPFYLT"} />);
    expect(screen.getByText(/Ikke oppfylt/)).toBeVisible();
  });

  test("viser status for vilkår som må vurderes manuelt", () => {
    render(<Vilkarsstatus utfall={"IKKE_VURDERT"} />);
    expect(screen.getByText(/Må vurderes manuelt/)).toBeVisible();
  });

  test("viser status for vilkår som ikke er vurdert enda", () => {});
});
