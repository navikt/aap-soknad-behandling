export interface VedtakType {
  innvilget: boolean;
  inntektsgrunnlag: InntektsgrunnlagType;
  vedtaksdato: Date;
  virkningsdato: Date;
  vedtaksid?: string; // neppe optional
}

export interface InntektsgrunnlagType {
  beregningsdato: Date;
  inntekterSiste3Kalenderår: InntektsgrunnlagForÅr[];
  fødselsdato: Date;
  sisteKalenderår: number;
  grunnlagsfaktor: number;
}

export interface InntektsgrunnlagForÅr {
  år: number;
  inntekter: InntektType[];
  beløpFørJustering: number;
  beløpJustertFor6G: number;
  erBeløpJustertFor6G: boolean;
  grunnlagsfaktor: number;
}

export interface InntektType {
  arbeidsgiver: string;
  inntekstmåned: Date;
  beløp: number;
}
