const texts = {
  paragraf: {
    PARAGRAF_11_1: "§ 11-1",
    PARAGRAF_11_2: "§ 11-2",
    PARAGRAF_11_3: "§ 11-3",
    PARAGRAF_11_4: "§ 11-4",
    PARAGRAF_11_5: "§ 11-5",
    PARAGRAF_11_6: "§ 11-6",
    PARAGRAF_11_8: "§ 11-8",
    PARAGRAF_11_9: "§ 11-9",
    PARAGRAF_11_10: "§ 11-10",
    PARAGRAF_11_11: "§ 11-11",
    PARAGRAF_11_12: "§ 11-12",
    PARAGRAF_11_13: "§ 11-13",
    PARAGRAF_11_14: "§ 11-14",
    PARAGRAF_11_15: "§ 11-15",
    PARAGRAF_11_16: "§ 11-16",
    PARAGRAF_11_17: "§ 11-17",
    PARAGRAF_11_18: "§ 11-18",
    PARAGRAF_11_19: "§ 11-19",
    PARAGRAF_11_20: "§ 11-20",
    PARAGRAF_11_21: "§ 11-21",
    PARAGRAF_11_22: "§ 11-22",
    PARAGRAF_11_23: "§ 11-23",
    PARAGRAF_11_24: "§ 11-24",
    PARAGRAF_11_25: "§ 11-25",
    PARAGRAF_11_26: "§ 11-26",
    PARAGRAF_11_27: "§ 11-27",
    PARAGRAF_11_28: "§ 11-28",
    PARAGRAF_11_29: "§ 11-29",
    PARAGRAF_11_30: "§ 11-30",
    PARAGRAF_11_31: "§ 11-31",
  },
  ledd: {
    LEDD_1: "ledd 1",
    LEDD_2: "ledd 2",
    LEDD_3: "ledd 3",
    LEDD_4: "ledd 4",
    LEDD_5: "ledd 5",
    LEDD_6: "ledd 6",
    LEDD_7: "ledd 7",
  },
  navigasjon: {
    inngangsvilkaar: "Inngangsvilkår",
    "11_5": "§ 11-5",
    "11_6": "§ 11-6",
    "11_12": "Varighet og virkning",
    "11_29": "§ 11-29",
    beregning: "Beregning",
    resultat: "Resultat",
  },
  sak: {
    heading: "Vurdere sak",
  },
  saksoversikt: {
    heading: "Oppgaver AAP",
    ingenFunnet: "Fant ingen saker.",
    behandle: "Behandle sak",
    visSak: "Vis sak",
    tabell: {
      søknadsdato: "Søknad",
      pid: "Bruker",
      status: "Status",
      aap: "AAP",
    },
    tags: {
      inngangsvilkår: "Inngang",
      "11_5": "§ 11-5",
    },
  },
  paragrafer: {
    knapper: {
      fullfør: "Fullfør oppgaven",
      fortsett: "Fortsett",
    },
    inngangsvilkår: {
      heading: "Inngangsvilkår",
      påkrevd: "Du må ta stilling til om søker oppfyller kravet eller ikke.",
    },
    "11_2": {
      heading: "Medlemskap i folketrygden (§ 11-2)",
      legend: "Har søkeren vært medlem i folketrygden i minst 5 år?",
    },
    "11_3": {
      heading: "Opphold i Norge (§ 11-3)",
      legend: "Hadde søkeren opphold i Norge ved søknadstidspunkt?",
    },
    "11_4": {
      heading: "Alder (§ 11-4)",
      vurdering: "Er søkeren mellom 18 og 67 år?",
    },
    "11_5": {
      heading: "Nedsatt arbeidsevne og medvirkende årsak (§ 11-5)",
      kravOmNedsattArbeidsevneErOppfylt: {
        legend: "Er arbeidsevnen nedsatt med minst 50% ?",
        ja: "Ja",
        nei: "Nei",
        påkrevd: "Du må ta stilling til om arbeidsevnen er nedsatt med minst 50%.",
      },
      nedsettelseSkyldesSykdomEllerSkade: {
        legend: "Er søkerens arbeidsevne nedsatt på grunn av sykdom, skade eller lyte?",
        ja: "Ja",
        nei: "Nei",
        påkrevd: "Du må ta stilling til om arbeidsevnen er nedsatt på grunn av sykdom, skade eller lyte.",
      },
      nedsattArbeidsevne: {
        label: "Med hvor mange prosent er arbeidsevnen nedsatt?",
        paakrevd: "Du må legge inn hvor mange prosent arbeidsevnen er nedsatt med.",
        ikkeMindreEnnNull: "Arbeidsevnen kan ikke være nedsatt med mindre enn 0 prosent.",
        ikkeOverHundre: "Arbeidsevnen kan ikke være nedsatt med mer enn 100 prosent",
        ugyldigFormat: "Nedsatt arbeidsevne må registreres i prosent, mellom 0 og 100",
      },
    },
    "11_6": {
      heading: "Behov for behandling og tiltak for å komme i arbeid (§ 11-6)",
      bokstav_a: {
        heading: "Behov for behandling (bokstav a)",
        legend: "Har søkeren behov for aktiv behandling?",
        påkrevd: "Du må svare på om søker har behov for aktiv behandling.",
      },
      bokstav_b: {
        heading: "Behov for tiltak (bokstav b)",
        legend: "Har søkeren behov for arbeidsrettet tiltak?",
        påkrevd: "Du må svare på om søker har behov for arbeidsrettet tiltak.",
      },
      bokstav_c: {
        heading: "Mulighet for å komme i arbeid (bokstav c)",
        legend:
          "Etter å ha prøvd a) eller b), anses fortsatt søkeren for å ha en viss mulighet for å komme i arbeid og får annen oppfølging fra NAV?",
        påkrevd: "Du må svare på om søker anses å ha en viss mulighet til å komme i arbeid.",
      },
      påkrevd: "Du må ta stilling til om søker oppfyller kravet til § 11-6 eller ikke.",
    },
    "11_12": {
      heading: "Varighet og virkning",
      påkrevd: "Du må ta stilling til om søker oppfyller kravet til § 11-12 eller ikke.",
      virkningstidspunkt: {
        heading: "Virkningstidspunkt",
        legend: "Virkningstidspunkt bestemmes av",
        unntak: {
          legend: "Unntaksvurdering tar utgangspunkt i at",
        },
      },
      varighet: {
        heading: "Varighet",
      },
    },
    "11_29": {
      heading: "Vurdering av § 11-29",
      påkrevd: "Du må ta stilling til om søker oppfyller kravet til § 11-29 eller ikke.",
      legend: "Oppfyller medlemmet kravene i 11-29?",
    },
  },
  beregningsdato: {
    heading: "Beregningsdato",
    label: "Sett beregningsdato for vedtak",
    knapp: "Sett dato",
  },
};

export const getText = (key: string): string => {
  const res = key.split(".").reduce((acc: any, cur: string) => {
    return acc?.[cur];
  }, texts);
  return res || key;
};
