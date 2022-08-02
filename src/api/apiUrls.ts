/**
 * søker url'er
 */
export function personopplysningerUrl(personIdent: string) {
  return `/api/personopplysninger/${personIdent}`;
}

/**
 * Sak url'er
 */
export function sakerUrl() {
  return `/api/sak`;
}

export function sakUrl(personIdent: string) {
  return `/api/sak/${personIdent}`;
}

/**
 * Løsning url'er
 */
export function inngangsvilkarUrl(personIdent: string) {
  return `/api/sak/${personIdent}/losning/inngangsvilkar`;
}

export function paragraf_11_5_Url(personIdent: string) {
  return `/api/sak/${personIdent}/losning/paragraf_11_5`;
}

export function paragraf_11_6_Url(personIdent: string) {
  return `/api/sak/${personIdent}/losning/paragraf_11_6`;
}

export function paragraf_11_12_Url(personIdent: string) {
  return `/api/sak/${personIdent}/losning/paragraf_11_12`;
}

export function paragraf_11_19_Url(personIdent: string) {
  return `/api/sak/${personIdent}/losning/paragraf_11_19`;
}

export function paragraf_11_29_Url(personIdent: string) {
  return `/api/sak/${personIdent}/losning/paragraf_11_29`;
}

export function beregninsdatoUrl(personIdent: string) {
  return `/api/sak/${personIdent}/losning/beregningsdato`;
}
