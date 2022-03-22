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
  mottattDato?: Date; // ikke fra modell
}

export interface Sakstype {
  type: string;
  vilkårsvurderinger: VilkårsvurderingType[];
}

export interface VilkårsvurderingType {
  tilstand: string;
  paragraf: string;
  ledd: string[];
  måVurderesManuelt: boolean;
}

export interface VedtakType {
  innvilget: boolean;
  inntektsgrunnlag: InntektsgrunnlagType;
  søknadstidspunkt: Date;
  vedtaksdato: Date;
  virkningsdato: Date;
}

export interface InntektsgrunnlagType {
  beregningsdato: Date;
  inntekterSiste3Kalenderår: InntektsgrunnlagForÅr[],
  fødselsdato: Date;
  sisteKalenderår: number;
  grunnlagsfaktor: number;
}

export interface InntektsgrunnlagForÅr {
  år: number,
  inntekter: FrontendInntekt[],
  beløpFørJustering: number,
  beløpJustertFor6G: number,
  erBeløpJustertFor6G: boolean,
  grunnlagsfaktor: number
}

export interface FrontendInntekt {
  arbeidsgiver: string,
  inntekstmåned: Date,
  beløp: number
}
