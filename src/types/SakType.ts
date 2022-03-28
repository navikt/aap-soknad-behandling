import { VedtakType } from "./Vedtak";

export interface SøkerType {
  personident: string;
  sak: SakType;
  fødselsdato: Date;
  navn?: string; // ikke fra modell
  adressebeskyttelse?: string; // ikke fra modell
  skjermet: boolean;
}

export interface SakType {
  saksid: string;
  søknadstidspunkt: Date;
  vedtak?: VedtakType;
  ansvarlig?: string; // TODO Sette opp granulert tildeling (flere personer kan "eie") aktiv / venter
  type: string; // 11-5, SP-erstattning, Student, Uføre
  aktiv: boolean; // TODO Hva betyr egentlig dette? Tilstand? Bruke eksplisitte booleans?
  paragraf_11_2?: Paragraf_11_2Type,
  paragraf_11_3?: Paragraf_11_3Type,
  paragraf_11_4?: Paragraf_11_4Type,
  paragraf_11_5?: Paragraf_11_5Type,
  paragraf_11_6?: Paragraf_11_6Type,
  paragraf_11_12?: Paragraf_11_12Type,
  paragraf_11_29?: Paragraf_11_29Type
}

interface VilkårsvurderingType {
  vilkårsvurderingsid: string;
  erOppfylt?: boolean;
  måVurderesManuelt: boolean;
}

export interface Paragraf_11_2Type extends VilkårsvurderingType {

}

export interface Paragraf_11_3Type extends VilkårsvurderingType {

}

export interface Paragraf_11_4Type extends VilkårsvurderingType {

}

export interface Paragraf_11_5Type extends VilkårsvurderingType {

}

export interface Paragraf_11_6Type extends VilkårsvurderingType {

}

export interface Paragraf_11_12Type extends VilkårsvurderingType {

}

export interface Paragraf_11_29Type extends VilkårsvurderingType {

}

