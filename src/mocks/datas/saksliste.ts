import {SøkerType} from "../../types/SakType";
import {parseISO} from "date-fns";

export const listeMedSøkereOgSaker: SøkerType[] = [
  {
    personident: "11068812345",
    navn: "11-5 Mangler", // ikke fra modell
    fødselsdato: parseISO("1986-03-08"),
    sak: {
      saksid: "uuid-1",
      tilstand: "SØKNAD_MOTTATT",
      sakstype: {
        type: "STANDARD",
        vilkårsvurderinger: [
          {
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
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
    personident: "01090200432",
    navn: "Ikkeno Oppfylt", // ikke fra modell
    fødselsdato: parseISO("1976-03-08"),
    sak: {
      saksid: "uuid-2",
      tilstand: "SØKNAD_MOTTATT",
      sakstype: {
        type: "STANDARD",
        vilkårsvurderinger: [
          {
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
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
    navn: "11-2 Oppfylt", // ikke fra modell
    fødselsdato: parseISO("1983-03-08"),
    sak: {
      saksid: "uuid-3",
      tilstand: "SØKNAD_MOTTATT",
      sakstype: {
        type: "STANDARD",
        vilkårsvurderinger: [
          {
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
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
    personident: "10987654321",
    navn: "Innvilget Vedtak", // ikke fra modell
    fødselsdato: parseISO("1996-03-08"),
    sak: {
      saksid: "uuid-4",
      tilstand: "SØKNAD_MOTTATT",
      sakstype: {
        type: "STANDARD",
        vilkårsvurderinger: [
          {
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            paragraf: "PARAGRAF_11_5",
            ledd: ["LEDD_1", "LEDD_2"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
        ],
      },
      vedtak: {
        innvilget: true,
        inntektsgrunnlag: {
          beregningsdato: parseISO("2021-10-10"),
          inntekterSiste3Kalenderår: [
            {
              år: 2021,
              inntekter: [],
              beløpFørJustering: 400000,
              beløpJustertFor6G: 350000,
              erBeløpJustertFor6G: true,
              grunnlagsfaktor: 3
            },
            {
              år: 2020,
              inntekter: [],
              beløpFørJustering: 300000,
              beløpJustertFor6G: 300000,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 3
            },
            {
              år: 2019,
              inntekter: [],
              beløpFørJustering: 400000,
              beløpJustertFor6G: 350000,
              erBeløpJustertFor6G: true,
              grunnlagsfaktor: 3
            }
          ],
          fødselsdato: parseISO("1900-01-01"),
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3
        },
        søknadstidspunkt: parseISO("2022-05-05"),
        vedtaksdato: parseISO("2022-06-05"),
        virkningsdato: parseISO("2022-05-05")
      }
    },
  },
]
