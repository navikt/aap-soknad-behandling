import { Paragraf_11_5 } from "./Paragraf_11_5";
import { render, screen, waitFor } from "@testing-library/react";
import { Paragraf_11_5Type } from "../../../types/SakType";
import { getText } from "../../../tekster/tekster";
import userEvent from "@testing-library/user-event";

const vilkårsvurdering: Paragraf_11_5Type = {
  vilkårsvurderingsid: "uuid-1-5",
  erOppfylt: false,
  måVurderesManuelt: true,
};
const nedsattArbeidsevneNokkel = "paragrafer.11_5.kravOmNedsattArbeidsevneErOppfylt";
const skyldesSykdomSkadeNokkel = "paragrafer.11_5.nedsettelseSkyldesSykdomEllerSkade";

describe("Paragraf 11-5", () => {
  test("må svare på begge spørsmål for å kunne sende inn melding", async () => {
    const user = userEvent.setup();

    render(<Paragraf_11_5 vilkårsvurdering={vilkårsvurdering} personident={"12345678910"} />);

    expect(screen.getByText(getText(nedsattArbeidsevneNokkel + ".label"))).toBeVisible();
    expect(screen.getByText(getText(skyldesSykdomSkadeNokkel + ".label"))).toBeVisible();
    user.click(screen.getByRole("button", { name: getText("paragrafer.knapper.fullfør") }));
    await waitFor(() => expect(screen.getByText(getText(nedsattArbeidsevneNokkel + ".påkrevd"))).toBeVisible());
    await waitFor(() => expect(screen.getByText(getText(skyldesSykdomSkadeNokkel + ".påkrevd"))).toBeVisible());
  });

  test("viser oppsummering når vilkåret er vurdert", () => {
    const ferdigVurdertVilkår: Paragraf_11_5Type = {
      vilkårsvurderingsid: "uuid-1-5",
      erOppfylt: true,
      måVurderesManuelt: true,
      kravOmNedsattArbeidsevneErOppfylt: true,
      nedsettelseSkyldesSykdomEllerSkade: true,
    };

    render(<Paragraf_11_5 vilkårsvurdering={ferdigVurdertVilkår} personident={"12345678910"} />);
    expect(screen.getByText(getText(nedsattArbeidsevneNokkel + ".label"))).toBeVisible();
    expect(screen.getByText(getText(skyldesSykdomSkadeNokkel + ".label"))).toBeVisible();
  });
});
