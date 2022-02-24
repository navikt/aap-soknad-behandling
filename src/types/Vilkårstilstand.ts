/* eslint-disable */
export enum VILKÅRSTILSTAND {
  IKKE_OPPFYLT = "ikke oppfylt",
  OPPFYLT = "oppfylt"
}
/* eslint-enable */

export const vilkårstilstand = (v:keyof typeof VILKÅRSTILSTAND) => {
  const verdier = Object.keys(VILKÅRSTILSTAND);
  if (verdier.includes(v)) {
    return VILKÅRSTILSTAND[v];
  }
  return v;
};
