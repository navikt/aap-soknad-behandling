export type  VilkårsvurderingType = {
  tilstand: string;
  paragraf: string;
  ledd: string[];
  harÅpenOppgave: boolean;
};
export type SakType = {
  personident: string;
  fødselsdato: number[];
  tilstand: string;
  vilkårsvurderinger: Array<VilkårsvurderingType>;
};
