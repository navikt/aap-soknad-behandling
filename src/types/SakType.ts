export interface SøkerType {
  personident: string;
  sak: SakType;
  fødselsdato: Date;
  navn?: string; // ikke fra modell
}

export interface SakType {
  saksid: string, // TODO: UUID?
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
  måVurderesManuelt: boolean;
}

interface VedtakType {
  innvilget: boolean;
  inntektsgrunnlag: InntektsgrunnlagType;
  søknadstidspunkt: Date;
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
