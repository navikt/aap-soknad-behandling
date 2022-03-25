export interface SøkerType {
  personident: string;
  sak: SakType;
  fødselsdato: Date;
  navn?: string; // ikke fra modell
  adressebeskyttelse?: string; // ikke fra modell
}

export interface SakType {
  saksid: string; // TODO: UUID?
  tilstand: string;
  sakstype?: Sakstype;
  søknadstidspunkt: Date;
  vedtak?: VedtakType;
  mottattDato?: Date; // ikke fra modell
  ansvarlig?: string; // ikke fra modell
}

export interface Sakstype {
  type: string;
  aktiv: boolean;
  vilkårsvurderinger: VilkårsvurderingType[];
}

export interface VilkårsvurderingType {
  tilstand: string;
  paragraf: string;
  ledd: string[];
  måVurderesManuelt: boolean;
  vilkårsvurderingsid?: string; // neppe optional
}

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
  inntekter: FrontendInntekt[];
  beløpFørJustering: number;
  beløpJustertFor6G: number;
  erBeløpJustertFor6G: boolean;
  grunnlagsfaktor: number;
}

export interface FrontendInntekt {
  arbeidsgiver: string;
  inntekstmåned: Date;
  beløp: number;
}
