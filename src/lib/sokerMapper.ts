import { parseISO } from "date-fns";
import {
  FrontendInntekt,
  InntektsgrunnlagForÅr,
  InntektsgrunnlagType,
  Sakstype,
  SakType,
  SøkerType,
  VedtakType,
  VilkårsvurderingType,
} from "../types/SakType";

const mapVilkårsvurderinger = (vilkårsvurderinger: any[]): VilkårsvurderingType[] =>
  vilkårsvurderinger.map((vilkårsvurdering: VilkårsvurderingType) => ({
    tilstand: vilkårsvurdering.tilstand,
    paragraf: vilkårsvurdering.paragraf,
    ledd: vilkårsvurdering.ledd,
    måVurderesManuelt: vilkårsvurdering.måVurderesManuelt,
  }));

const mapSakstype = (sakstype: any): Sakstype => ({
  type: sakstype.type,
  vilkårsvurderinger: mapVilkårsvurderinger(sakstype.vilkårsvurderinger),
});

const mapInntekter = (inntekter: any[]): FrontendInntekt[] =>
  inntekter.map((inntekt: any) => ({
    arbeidsgiver: inntekt.arbeidsgiver,
    inntekstmåned: parseISO(inntekt.inntekstmåned),
    beløp: inntekt.beløp,
  }));

const mapInntekterSiste3Kalenderår = (inntekterSiste3Kalenderår: any[]): InntektsgrunnlagForÅr[] =>
  inntekterSiste3Kalenderår.map((inntektsgrunnlag: InntektsgrunnlagForÅr) => ({
    år: inntektsgrunnlag.år,
    inntekter: mapInntekter(inntektsgrunnlag.inntekter),
    beløpFørJustering: inntektsgrunnlag.beløpFørJustering,
    beløpJustertFor6G: inntektsgrunnlag.beløpJustertFor6G,
    erBeløpJustertFor6G: inntektsgrunnlag.erBeløpJustertFor6G,
    grunnlagsfaktor: inntektsgrunnlag.grunnlagsfaktor,
  }));

const mapInntektsgrunnlag = (inntektsgrunnlag: any): InntektsgrunnlagType => ({
  beregningsdato: parseISO(inntektsgrunnlag.beregningsdato),
  inntekterSiste3Kalenderår: mapInntekterSiste3Kalenderår(inntektsgrunnlag.inntekterSiste3Kalenderår),
  fødselsdato: parseISO(inntektsgrunnlag.fødselsdato),
  sisteKalenderår: inntektsgrunnlag.sisteKalenderår,
  grunnlagsfaktor: inntektsgrunnlag.grunnlagsfaktor,
});

const mapVedtak = (vedtak: any): VedtakType => ({
  innvilget: vedtak.innvilget,
  inntektsgrunnlag: mapInntektsgrunnlag(vedtak.inntektsgrunnlag),
  søknadstidspunkt: parseISO(vedtak.søknadstidspunkt),
  vedtaksdato: parseISO(vedtak.vedtaksdato),
  virkningsdato: parseISO(vedtak.virkningsdato),
});

const mapSak = (sak: any): SakType => ({
  saksid: sak.saksid,
  tilstand: sak.tilstand,
  mottattDato: sak.mottattDato ? parseISO(sak.mottattDato) : undefined,
  sakstype: sak.sakstype ? mapSakstype(sak.sakstype) : undefined,
  vedtak: sak.vedtak ? mapVedtak(sak.vedtak) : undefined,
});

export const mapSøker = (søker:any[]): SøkerType[] => {
  if (!søker) {
    return [];
  }
  return søker.map((s: any) => ({
    personident: s.personident,
    sak: mapSak(s.sak),
    fødselsdato: parseISO(s.fødselsdato),
    navn: s.navn,
  }));
};
