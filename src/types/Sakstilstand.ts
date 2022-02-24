/* eslint-disable */

export enum SAKSTILSTAND {
  START = "uhm",
  SØKNAD_MOTTATT = "Søknad mottatt",
  BEREGN_INNTEKT = "Beregn inntekt",
  VEDTAK_FATTET = "Vedtak fattet",
  IKKE_OPPFYLT = "Ikke oppfylt",
}
/* eslint-enable */

export const sakstilstand = (v:keyof typeof SAKSTILSTAND) => {
  const verdier = Object.keys(SAKSTILSTAND);
  if (verdier.includes(v)) {
    return SAKSTILSTAND[v];
  }
  return v;
};
