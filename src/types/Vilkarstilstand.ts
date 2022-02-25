/* eslint-disable */
export enum Vilkarstilstand {
  IKKE_OPPFYLT = "ikke oppfylt",
  OPPFYLT = "oppfylt"
}
/* eslint-enable */

export const vilkårstilstand = (v:keyof typeof Vilkarstilstand) => {
  const verdier = Object.keys(Vilkarstilstand);
  if (verdier.includes(v)) {
    return Vilkarstilstand[v];
  }
  return v;
};
