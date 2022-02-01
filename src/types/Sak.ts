export type Vilkårsvurdering = {
  tilstand: string;
  paragraf: string;
  ledd: string;
  harÅpenOppgave: boolean;
};
export type Sak = {
  personident: string;
  fødselsdato: string;
  tilstand: string;
  vilkårsvurderinger: Array<Vilkårsvurdering>;
};
