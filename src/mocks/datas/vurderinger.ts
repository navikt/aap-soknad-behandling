import {SøkerType} from "../../types/SakType";
import { parseISO } from "date-fns";

const testdataliste: SøkerType[] = [
  {
    personident: "11068812345",
    navn: "Glitrende Måne", // ikke fra modell
    fødselsdato: parseISO("1986-03-08"),
    sak: {
      saksid: "uuid-1",
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
  },
  {
    personident: "27109500123",
    navn: "Krypende Rose", // ikke fra modell
    fødselsdato: parseISO("1995-09-05"),
    sak: {
      saksid: "uuid-2",
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
  },
  {
    personident: "01090200432",
    navn: "Vinglende Vespa", // ikke fra modell
    fødselsdato: parseISO("2000-02-02"),
    sak: {
      saksid: "uuid-3",
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
  }
];

export { testdataliste };
