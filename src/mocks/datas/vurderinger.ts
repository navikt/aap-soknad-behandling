const testdataliste = [
  {
    personident: "11068812345",
    fødselsdato: [1988, 6, 11],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "OPPFYLT",
          harÅpenOppgave: false,
        },
        {
          paragraf: "PARAGRAF_11_5",
          ledd: ["LEDD_1", "LEDD_2"],
          tilstand: "IKKE_OPPFYLT",
          harÅpenOppgave: true,
        },
      ],
    },
  },
  {
    personident: "27109500123",
    fødselsdato: [1995, 10, 27],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "IKKE_OPPFYLT",
          harÅpenOppgave: false,
        },
      ],
    },
  },
  {
    personident: "01090200432",
    fødselsdato: [2002, 9, 1],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "OPPFYLT",
          harÅpenOppgave: true,
        },
      ],
    },
  },
];

export { testdataliste };
