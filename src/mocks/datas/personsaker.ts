const personMedEnAktivSak = [
  {
    personident: "1234567890",
    fødselsdato: [1971, 5, 2],
    tilstand: "SØKNAD_MOTTATT",
    vilkårsvurderinger: [
      {
        paragraf: "PARAGRAF_11_2",
        ledd: ["LEDD_1", "LEDD_2"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: false,
      },
      {
        paragraf: "PARAGRAF_11_3",
        ledd: ["LEDD_1", "LEDD_2", "LEDD_3"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
      {
        paragraf: "PARAGRAF_11_4",
        ledd: ["LEDD_1"],
        tilstand: "OPPFYLT",
        harÅpenOppgave: false,
      },
      {
        paragraf: "PARAGRAF_11_4",
        ledd: ["LEDD_2", "LEDD_3"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
      {
        paragraf: "PARAGRAF_11_5",
        ledd: ["LEDD_1", "LEDD_2"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
      {
        paragraf: "PARAGRAF_11_6",
        ledd: ["LEDD_1"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
      {
        paragraf: "PARAGRAF_11_12",
        ledd: ["LEDD_1"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
      {
        paragraf: "PARAGRAF_11_29",
        ledd: ["LEDD_1"],
        tilstand: "SØKNAD_MOTTATT",
        harÅpenOppgave: true,
      },
    ],
  },
];

export { personMedEnAktivSak };
