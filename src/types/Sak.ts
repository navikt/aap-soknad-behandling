export enum TILSTAND {
  IKKE_OPPFYLT = "ikke oppfylt",
  OPPFYLT = "oppfylt"
}

export const valueFrom = (v:keyof typeof TILSTAND) => {
  const verdier = Object.keys(TILSTAND);
  if (verdier.includes(v)) {
    return TILSTAND[v];
  }
  return v;
};

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
