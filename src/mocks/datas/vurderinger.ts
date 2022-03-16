const testdataliste = [
  {
    personident: "11068812345",
    navn: "Glitrende Måne", // ikke fra modell
    fødselsdato: [1988, 6, 11],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "OPPFYLT",
          måVurderesManuelt: false,
        },
        {
          paragraf: "PARAGRAF_11_5",
          ledd: ["LEDD_1", "LEDD_2"],
          tilstand: "IKKE_OPPFYLT",
          måVurderesManuelt: true,
        },
      ],
    },
  },
  {
    personident: "27109500123",
    navn: "Krypende Rose", // ikke fra modell
    fødselsdato: [1995, 10, 27],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "IKKE_OPPFYLT",
          måVurderesManuelt: false,
        },
      ],
    },
  },
  {
    personident: "01090200432",
    navn: "Vinglende Vespa", // ikke fra modell
    fødselsdato: [2002, 9, 1],
    tilstand: "SØKNAD_MOTTATT",
    sakstype: {
      type: "Ny sak",
      vilkårsvurderinger: [
        {
          paragraf: "PARAGRAF_11_4",
          ledd: ["LEDD_1"],
          tilstand: "OPPFYLT",
          måVurderesManuelt: true,
        },
      ],
    },
  },
];

export { testdataliste };
