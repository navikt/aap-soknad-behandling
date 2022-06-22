import { Paragraf_11_2Type } from "../../../types/SakType";
import { Paragraf_11_2 } from "./Paragraf_11_2";
import { render, screen } from "@testing-library/react";

describe("Paragraf 11-2", () => {
  test("kan ikke redigere når man bare har lesetilgang", () => {
    const vilkårsvurdering: Paragraf_11_2Type = {
      vilkårsvurderingsid: "enId",
      utfall: "IKKE_VURDERT",
      autorisasjon: "LESE",
    };

    render(<Paragraf_11_2 vilkårsvurdering={vilkårsvurdering} personident={"12345678910"} />);
    expect(screen.getByText(/Medlemskap i folketrygden \(§ 11-2\)/)).toBeVisible();
    expect(screen.queryByRole("radio", { name: /Ja/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("radio", { name: /Nei/ })).not.toBeInTheDocument();
    expect(screen.getByText(/Ikke vurdert enda/)).toBeVisible();
  });

  test("kan redigere når man har endre-tilgang", () => {
    const vilkårsvurdering: Paragraf_11_2Type = {
      vilkårsvurderingsid: "enId",
      utfall: "IKKE_VURDERT",
      autorisasjon: "ENDRE",
    };
    render(<Paragraf_11_2 vilkårsvurdering={vilkårsvurdering} personident={"12345678910"} />);
    expect(screen.getByText(/Medlemskap i folketrygden \(§ 11-2\)/)).toBeVisible();
    expect(screen.queryByRole("radio", { name: /Ja/ })).toBeVisible();
    expect(screen.queryByRole("radio", { name: /Nei/ })).toBeVisible();
    expect(screen.queryByText(/Ikke vurdert enda/)).not.toBeInTheDocument();
  });
});
