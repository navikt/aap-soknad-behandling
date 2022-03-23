import React from "react";
import { render, screen } from "@testing-library/react";
import { listeMedSøkereOgSaker } from "../../../mocks/datas/saksliste";
import { Vilkårsvurderinger } from "./Vilkarsvurdering";
import { Vilkarstilstand } from "../../../types/Vilkarstilstand";

describe("Vilkårsvurderinger", () => {
  test("viser vilkårsvurderinger", () => {
    const testdata = listeMedSøkereOgSaker[0];
    render(
      <Vilkårsvurderinger vilkår={testdata.sak.sakstype?.vilkårsvurderinger} personident={testdata.personident} />
    );
    expect(screen.getByText(/^§ 11-4, ledd 1$/)).toBeVisible();
  });

  test("tåler at det ikke finnes noen vurderinger", () => {
    render(<Vilkårsvurderinger vilkår={[]} personident={listeMedSøkereOgSaker[0].personident} />);
    expect(screen.getByText(/^Ingen vilkår$/)).toBeVisible();
  });

  test("viser valg for godkjenne og avslå når et vilkår har åpne oppgaver", () => {
    const testdata = listeMedSøkereOgSaker[0];
    render(
      <Vilkårsvurderinger vilkår={testdata.sak.sakstype?.vilkårsvurderinger} personident={testdata.personident} />
    );
    expect(screen.getByRole("button", { name: /Vilkåret er oppfylt/ })).toBeVisible();
    expect(screen.getByRole("button", { name: /Vilkåret er ikke oppfylt/ })).toBeVisible();
  });

  test.skip("viser ikke knapper når et vilkår ikke har åpne oppgaver", () => {
    // TODO ikke helt ferdig enda
    const testdata = [
      {
        tilstand: Vilkarstilstand.OPPFYLT,
        paragraf: "PARAGRAF_11_2",
        ledd: ["LEDD_1"],
        måVurderesManuelt: false,
      },
    ];
    render(<Vilkårsvurderinger vilkår={testdata} personident={"1234567890"} />);
    expect(screen.getByText(/§ 11-2/)).toBeVisible();

    expect(screen.queryByRole("button", { name: /Vilkåret er oppfylt/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Vilkåret er ikke oppfylt/ })).not.toBeInTheDocument();
    screen.debug();
  });
});
