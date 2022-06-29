/**
 * Hva må testes?
 *
 *
 * 1. At de forskjellige feltene er synlige.
 * 2. At det fungerer å trykke på angre knappen.
 * 3. At det blir postet korrekt response til API.
 */

import { render, screen } from "@testing-library/react";
import { Inngangsvilkår } from "./Inngangsvilkaar";
import {
  Autorisasjontype,
  Paragraf_11_2Type,
  Paragraf_11_3Type,
  Paragraf_11_4Type,
  SakType,
  SøkerType,
  UtfallType,
} from "../../../types/SakType";
import { InntektsgrunnlagType, VedtakType } from "../../../types/Vedtak";

/**
 * 1. Test at fortsett knapp er synlig når ikke alle paragrafene er vurdert.
 * 2. Test at fortsett knapp ikke er synlig dersom alle paragrafene er vurdert.
 * 3. Test at fortsett knapp ikke er synlig dersom autorisasjon er "LESE".
 * 4. Test at korrekt tekst er synlig i de forskjellige paragrafene som er synlige. Medlemskap, Opphold, Alder.
 * 5. Test at riktig data blir sendt når man trykker på fortsett knapp.
 * 6. Test at feltene er read only når autorisasjon er LESE.
 * 7. Test at feltene er interaktive når autorisasjon er ENDRE.
 */

test("at fortsett kanpp er synlig når paragrafene ikke er vurdert", () => {
  const søker = lagSøker("GODKJENNE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.getByText("Fortsett")).toBeInTheDocument();
});

test("at fortsett knapp ikke er synlig dersom alle paragrafene er vurdert ", () => {
  const søker = lagSøker("GODKJENNE", "OPPFYLT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.queryByText("Fortsett")).not.toBeInTheDocument();
});

test("at fortsett knapp ikke er synlig dersom autorisasjon er LESE", () => {
  const søker = lagSøker("LESE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.queryByText("Fortsett")).not.toBeInTheDocument();
});

test("at paragraf 11-2 er synlig", () => {
  const søker = lagSøker("ENDRE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.queryByText("Medlemskap i folketrygden (§ 11-2)")).toBeInTheDocument();
});

test("at paragraf 11-3 er synlig", () => {
  const søker = lagSøker("ENDRE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.queryByText("Opphold i Norge (§ 11-3)")).toBeInTheDocument();
});

test("at paragraf 11-4 er synlig", () => {
  const søker = lagSøker("ENDRE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.queryByText("Alder (§ 11-4)")).toBeInTheDocument();
});

function lagSøker(autorisasjon: Autorisasjontype, utfall: UtfallType): SøkerType {
  const inntektsgrunnlag: InntektsgrunnlagType = {
    beregningsdato: "",
    fødselsdato: "",
    grunnlagsfaktor: 0,
    inntekterSiste3Kalenderår: [],
    sisteKalenderår: "",
  };

  const vedtak: VedtakType = {
    inntektsgrunnlag: inntektsgrunnlag,
    innvilget: false,
    vedtaksdato: "",
    virkningsdato: "",
  };

  const vilkårsvurdering_11_2: Paragraf_11_2Type = {
    vilkårsvurderingsid: "enId",
    utfall: utfall,
    autorisasjon: autorisasjon,
  };

  const vilkårsvurdering_11_3: Paragraf_11_3Type = {
    vilkårsvurderingsid: "andreId",
    utfall: utfall,
    autorisasjon: autorisasjon,
  };

  const vilkårsvurdering_11_4: Paragraf_11_4Type = {
    vilkårsvurderingsid: "tredjeId",
    utfall: utfall,
    autorisasjon: autorisasjon,
  };

  const sak: SakType = {
    saksid: "",
    søknadstidspunkt: "",
    type: "",
    vedtak,
    paragraf_11_2: vilkårsvurdering_11_2,
    paragraf_11_3: vilkårsvurdering_11_3,
    paragraf_11_4: vilkårsvurdering_11_4,
  };

  return {
    fødselsdato: "1995-02-19",
    personident: "12345689012",
    sak: sak,
    skjermet: false,
  };
}
