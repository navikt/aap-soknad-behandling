import { render, screen } from "@testing-library/react";
import { Oppgavestatus } from "./Oppgavestatus";
import { VilkårsvurderingType } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";

const vurderingTrenges = getText("oppgavestatus.vurderingTrenges");
const ikkeOppfylt = getText("oppgavestatus.ikkeOppfylt");
const oppfylt = /^Oppfylt$/; // har ikke fått denne til å funke som regex med funksjonskall

describe("Oppgavestatus", () => {
  test("'må vurderes' overstyrer 'ikke oppfylt' og 'oppfylt' status", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id1",
      },
      {
        utfall: "IKKE_VURDERT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id2",
      },
      {
        utfall: "IKKE_OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.getByText(vurderingTrenges)).toBeVisible();
    expect(screen.queryByText(oppfylt)).not.toBeInTheDocument();
    expect(screen.queryByText(ikkeOppfylt)).not.toBeInTheDocument();
  });
  test("'ikke oppfylt' overstyrer 'oppfylt' status", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id1",
      },
      {
        utfall: "IKKE_OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id2",
      },
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.queryByText(vurderingTrenges)).not.toBeInTheDocument();
    expect(screen.queryByText(oppfylt)).not.toBeInTheDocument();
    expect(screen.queryByText(ikkeOppfylt)).toBeVisible();
  });
  test("viser 'oppfylt' når alle vilkår er oppfylt", () => {
    const paragrafer: VilkårsvurderingType[] = [
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id1",
      },
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id2",
      },
      {
        utfall: "OPPFYLT",
        autorisasjon: "LESE",
        vilkårsvurderingsid: "id3",
      },
    ];

    render(<Oppgavestatus paragrafer={paragrafer} />);
    expect(screen.queryByText(oppfylt)).toBeVisible();
    expect(screen.queryByText(vurderingTrenges)).not.toBeInTheDocument();
    expect(screen.queryByText(ikkeOppfylt)).not.toBeInTheDocument();
  });
});
