import {SøkerType} from "../../types/SakType";

const personMedEnAktivSak: SøkerType[] = [
  {
    personident: "12345678910",
    fødselsdato: new Date("01-01-1970"),
    navn: "Klatrende Eføy", // ikke fra modell
    sak: {
      saksid: "uuid",
      tilstand: "SØKNAD_MOTTATT",
      sakstype: {
        type: "STANDARD",
        vilkårsvurderinger: [
          {
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1", "LEDD_2"],
            tilstand: "OPPFYLT_MASKINELT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1", "LEDD_2", "LEDD_3"],
            tilstand: "SØKNAD_MOTTATT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_2", "LEDD_3"],
            tilstand: "IKKE_RELEVANT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_5",
            ledd: ["LEDD_1", "LEDD_2"],
            tilstand: "SØKNAD_MOTTATT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_6",
            ledd: ["LEDD_1"],
            tilstand: "SØKNAD_MOTTATT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_12",
            ledd: ["LEDD_1"],
            tilstand: "SØKNAD_MOTTATT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_29",
            ledd: ["LEDD_1"],
            tilstand: "SØKNAD_MOTTATT",
            måVurderesManuelt: true,
          },
        ],
      },
    },
  }
];

export { personMedEnAktivSak };
