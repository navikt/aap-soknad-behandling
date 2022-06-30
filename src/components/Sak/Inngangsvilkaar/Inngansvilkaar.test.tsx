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

test("at fortsett kanpp er synlig når paragrafene ikke er vurdert", () => {
  const søker = lagSøker("ENDRE", "IKKE_VURDERT");
  render(<Inngangsvilkår søker={søker} />);

  expect(screen.getByText("Fortsett")).toBeInTheDocument();
});

test("at fortsett knapp ikke er synlig dersom alle paragrafene er vurdert ", () => {
  const søker = lagSøker("ENDRE", "OPPFYLT");
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
  };

  const vilkårsvurdering_11_3: Paragraf_11_3Type = {
    vilkårsvurderingsid: "andreId",
    utfall: utfall,
  };

  const vilkårsvurdering_11_4: Paragraf_11_4Type = {
    vilkårsvurderingsid: "tredjeId",
    utfall: utfall,
  };

  const sak: SakType = {
    saksid: "",
    søknadstidspunkt: "",
    type: "",
    vedtak,
    inngangsvilkår: {
      autorisasjon: autorisasjon,
      paragraf_11_2: vilkårsvurdering_11_2,
      paragraf_11_3: vilkårsvurdering_11_3,
      paragraf_11_4: vilkårsvurdering_11_4,
    },
  };

  return {
    fødselsdato: "1995-02-19",
    personident: "12345689012",
    sak: sak,
    skjermet: false,
  };
}
