export interface SakType {
  personident: string;
  navn?: string; // ikke fra modell
  fødselsdato: number[];
  tilstand: string;
  sakstype?: Sakstype;
  vedtak?: VedtakType;
}

interface Sakstype {
  type: string;
  vilkårsvurderinger: VilkårsvurderingType[];
}

export interface VilkårsvurderingType {
  tilstand: string;
  paragraf: string;
  ledd: string[];
  harÅpenOppgave: boolean;
}

interface VedtakType {
  innvilget: boolean;
  inntektsgrunnlag: InntektsgrunnlagType;
  søknadstidspunkt: Date; // TODO LDT?
  vedtaksdato: Date;
  virkningsdato: Date;
}

interface InntektsgrunnlagType {
  beregningsdato: Date;
  inntekterSiste3Kalenderår: InntektsgrunnlagForÅr[],
  fødselsdato: Date;
  sisteKalenderår: number;
  grunnlagsfaktor: number;
}

interface InntektsgrunnlagForÅr {
  år: number,
  inntekter: FrontendInntekt[],
  beløpFørJustering: number,
  beløpJustertFor6G: number,
  erBeløpJustertFor6G: boolean,
  grunnlagsfaktor: number
}

interface FrontendInntekt {
  arbeidsgiver: string,
  inntekstmåned: Date,
  beløp: number
}
