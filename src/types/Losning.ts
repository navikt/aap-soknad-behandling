export interface Løsning {
  løsning_11_2_manuell?: LøsningParagraf_11_2;
  løsning_11_3_manuell?: LøsningParagraf_11_3;
  løsning_11_4_ledd2_ledd3_manuell?: LøsningParagraf_11_4_ledd2_ledd3;
  løsning_11_5_manuell?: LøsningParagraf_11_5;
  løsning_11_6_manuell?: LøsningParagraf_11_6;
  løsning_11_12_ledd1_manuell?: LøsningParagraf_11_12_ledd1;
  løsning_11_19_manuell?: LøsningParagraf_11_19;
  løsning_11_29_manuell?: LøsningParagraf_11_29;
  vedtak?: LøsningVedtak;
}

interface LøsningParagraf_11_2 {
  erMedlem: boolean;
}

interface LøsningParagraf_11_3 {
  erOppfylt: boolean;
}

interface LøsningParagraf_11_4_ledd2_ledd3 {
  erOppfylt: boolean | null;
}

export interface LøsningInngansvilkår {
  løsning_11_2: LøsningParagraf_11_2;
  løsning_11_3: LøsningParagraf_11_3;
  løsning_11_4: LøsningParagraf_11_4_ledd2_ledd3;
}

export interface LøsningParagraf_11_5 {
  kravOmNedsattArbeidsevneErOppfylt: boolean;
  nedsettelseSkyldesSykdomEllerSkade: boolean;
}

export interface LøsningParagraf_11_6 {
  harBehovForBehandling: boolean;
  harBehovForTiltak: boolean;
  harMulighetForÅKommeIArbeid: boolean;
}

export interface LøsningParagraf_11_12_ledd1 {
  bestemmesAv: string; // enum?
  unntak: string; // enum?
  unntaksbegrunnelse: string;
}

export interface LøsningParagraf_11_19 {
  beregningsdato: Date;
  grunnForDato?: string; // TODO ikke i modell
  begrunnelseForAnnet?: string; // TODO ikke i modell
}

export interface LøsningParagraf_11_29 {
  erOppfylt: boolean;
}

export interface LøsningVedtak {
  innstilling: string;
}
