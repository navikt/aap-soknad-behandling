import React from "react";
import { render, screen } from "@testing-library/react";
import { testdataliste } from "../../mocks/datas/vurderinger";
import { Vilkårsvurderinger } from "./Vilkårsvurdering";
import { VILKÅRSTILSTAND } from "../../types/Vilkårstilstand";

describe("Vilkårsvurderinger", () => {
  test("viser vilkårsvurderinger", () => {
    render(<Vilkårsvurderinger vilkår={testdataliste[0].vilkårsvurderinger} />);
    expect(screen.getByText(/^§ 11-4, ledd 1$/)).toBeVisible();
  });

  test("tåler at det ikke finnes noen vurderinger", () => {
    render(<Vilkårsvurderinger vilkår={[]} />);
    expect(screen.getByText(/^Ingen vilkår$/)).toBeVisible();
  });

  test("viser valg for godkjenne og avslå når et vilkår har åpne oppgaver", () => {
    render(<Vilkårsvurderinger vilkår={testdataliste[0].vilkårsvurderinger} />);
    expect(screen.getByRole("button", { name: /Vilkåret er oppfylt/ })).toBeVisible();
    expect(screen.getByRole("button", { name: /Vilkåret er ikke oppfylt/ })).toBeVisible();
  });

  test.skip("viser ikke knapper når et vilkår ikke har åpne oppgaver", () => {
    // TODO ikke helt ferdig enda
    const testdata = [
      {
        tilstand: VILKÅRSTILSTAND.OPPFYLT,
        paragraf: "PARAGRAF_11_2",
        ledd: ["LEDD_1"],
        harÅpenOppgave: false,
      },
    ];
    render(<Vilkårsvurderinger vilkår={testdata} />);
    expect(screen.getByText(/§ 11-2/)).toBeVisible();

    expect(screen.queryByRole('button', {name: /Vilkåret er oppfylt/})).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Vilkåret er ikke oppfylt/ })).not.toBeInTheDocument();
    screen.debug();
  });
});
