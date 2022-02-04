const testdataliste = [
  {
    personident: "11068812345",
    fødselsdato: "1988-06-11",
    tilstand: "meh",
    vilkårsvurderinger: [
      {
        paragraf: "11-4",
        ledd: "1",
        tilstand: "OPPFYLT",
        harÅpenOppgave: false
      },
      {
        paragraf: "11-5",
        ledd: "1",
        tilstand: "IKKE_OPPFYLT",
        harÅpenOppgave: true
      },
    ],
  },
  {
    personident: "27109500123",
    fødselsdato: "1995-10-27",
    tilstand: "meh",
    vilkårsvurderinger: [
      {
        paragraf: "11-4",
        ledd: "1",
        tilstand: "IKKE_OPPFYLT",
        harÅpenOppgave: false
      },
    ],
  },
  {
    personident: "01090200432",
    fødselsdato: "2002-09-01",
    tilstand: "meh",
    vilkårsvurderinger: [
      {
        paragraf: "11-4",
        ledd: "1",
        tilstand: "OPPFYLT",
        harÅpenOppgave: true
      },
    ],
  },
];

export { testdataliste };
