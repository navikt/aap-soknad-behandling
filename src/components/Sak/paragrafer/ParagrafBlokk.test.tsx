import { ParagrafBlokk } from "./ParagrafBlokk";
import { render, screen } from "@testing-library/react";
import { VilkårsvurderingType } from "../../../types/SakType";

describe("Paragrafblokk", () => {
  test("er åpen når den må vurderes manuelt", () => {
    const vilkaarsvurdering: VilkårsvurderingType = {
      vilkårsvurderingsid: "enId",
      erOppfylt: false,
      måVurderesManuelt: true,
    };
    render(
      <ParagrafBlokk vilkårsvurdering={vilkaarsvurdering} heading={"Paragrafheading"}>
        <span>Innhold i paragraf-blokk</span>
      </ParagrafBlokk>
    );
    expect(screen.getByText("Paragrafheading")).toBeVisible();
    expect(screen.getByText("Innhold i paragraf-blokk")).toBeVisible();
  });

  test("er lukket når den er ferdig behandlet", () => {
    const paragrafInnhold = "Innhold i paragraf-blokk";
    const vilkaarsvurdering: VilkårsvurderingType = {
      vilkårsvurderingsid: "enId",
      erOppfylt: true,
      måVurderesManuelt: false,
    };
    render(
      <ParagrafBlokk vilkårsvurdering={vilkaarsvurdering} heading={"Paragrafheading"}>
        <span>{paragrafInnhold}</span>
      </ParagrafBlokk>
    );
    expect(screen.getByText("Paragrafheading")).toBeVisible();
    expect(screen.queryByText("Innhold i paragraf-blokk")).not.toBeInTheDocument();
  });
});
