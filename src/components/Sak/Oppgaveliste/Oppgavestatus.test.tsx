import { render, screen } from "@testing-library/react";
import { Oppgavestatus } from "./Oppgavestatus";
import { VilkårsvurderingType } from "../../../types/SakType";

describe("Oppgavestatus", () => {
  test("'må vurderes' overstyrer 'ikke oppfylt' og 'oppfylt' status", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id1",
      },
      {
        måVurderesManuelt: true,
        vilkårsvurderingsid: "id2",
      },
      {
        måVurderesManuelt: false,
        erOppfylt: false,
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.getByText("Vurdering trenges")).toBeVisible();
    expect(screen.queryByText(/^Oppfylt$/)).not.toBeInTheDocument();
    expect(screen.queryByText("Ikke oppfylt")).not.toBeInTheDocument();
  });
  test("'ikke oppfylt' overstyrer 'oppfylt' status", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id1",
      },
      {
        måVurderesManuelt: false,
        erOppfylt: false,
        vilkårsvurderingsid: "id2",
      },
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.queryByText("Vurdering trenges")).not.toBeInTheDocument();
    expect(screen.queryByText(/^Oppfylt$/)).not.toBeInTheDocument();
    expect(screen.queryByText("Ikke oppfylt")).toBeVisible();
  });
  test("viser 'oppfylt' når alle vilkår er oppfylt", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id1",
      },
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id2",
      },
      {
        måVurderesManuelt: false,
        erOppfylt: true,
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.queryByText(/^Oppfylt$/)).toBeVisible();
    expect(screen.queryByText("Vurdering trenges")).not.toBeInTheDocument();
    expect(screen.queryByText("Ikke oppfylt")).not.toBeInTheDocument();
  });
});
