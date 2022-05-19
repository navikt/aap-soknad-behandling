export interface Løsning {
  løsning_11_2_manuell?: LøsningParagraf_11_2;
  løsning_11_3_manuell?: LøsningParagraf_11_3;
  løsning_11_4_ledd2_ledd3_manuell?: LøsningParagraf_11_4_ledd2_ledd3;
  løsning_11_5_manuell?: LøsningParagraf_11_5;
  løsning_11_6_manuell?: LøsningParagraf_11_6;
  løsning_11_12_ledd1_manuell?: LøsningParagraf_11_12_ledd1;
  løsning_11_29_manuell?: LøsningParagraf_11_29;
  løsningVurderingAvBeregningsdato?: LøsningVurderingAvBeregningsdato;
  vedtak?: LøsningVedtak;
}

export interface LøsningParagraf_11_2 {
  erMedlem: string;
}

export interface LøsningParagraf_11_3 {
  erOppfylt: boolean;
}

export interface LøsningParagraf_11_4_ledd2_ledd3 {
  erOppfylt: boolean;
}

export interface LøsningParagraf_11_5 {
  kravOmNedsattArbeidsevneErOppfylt: boolean;
  nedsettelseSkyldesSykdomEllerSkade: boolean;
}

export interface LøsningParagraf_11_6 {
  erOppfylt: boolean;
}

export interface LøsningParagraf_11_12_ledd1 {
  erOppfylt: boolean;
}

export interface LøsningParagraf_11_29 {
  erOppfylt: boolean;
}

export interface LøsningVurderingAvBeregningsdato {
  beregningsdato: Date;
}

export interface LøsningVedtak {
  innstilling: string;
}
