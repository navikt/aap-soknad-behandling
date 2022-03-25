import { SøkerType } from "../../types/SakType";
import { parseISO, subDays } from "date-fns";

export const listeMedSøkereOgSaker: SøkerType[] = [
  {
    personident: "11068812345",
    navn: "11-5 Mangler", // ikke fra modell
    fødselsdato: parseISO("1986-03-08"),
    sak: {
      saksid: "uuid-1",
      tilstand: "SØKNAD_MOTTATT",
      mottattDato: new Date(),
      søknadstidspunkt: parseISO("2022-05-05"),
      sakstype: {
        type: "STANDARD",
        aktiv: true,
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
      mottattDato: new Date(),
      søknadstidspunkt: parseISO("2022-05-05"),
      ansvarlig: "x593138",
      sakstype: {
        type: "STANDARD",
        aktiv: true,
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
          {
            paragraf: "PARAGRAF_11_6",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_12",
            ledd: ["LEDD_1"],
            tilstand: "IKKE_OPPFYLT",
            måVurderesManuelt: true,
          },
          {
            paragraf: "PARAGRAF_11_29",
            ledd: ["LEDD_1"],
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
      mottattDato: new Date(),
      søknadstidspunkt: parseISO("2022-05-05"),
      sakstype: {
        type: "STANDARD",
        aktiv: true,
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
      mottattDato: new Date(),
      søknadstidspunkt: parseISO("2022-05-05"),
      sakstype: {
        type: "STANDARD",
        aktiv: true,
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
              grunnlagsfaktor: 3,
            },
            {
              år: 2020,
              inntekter: [],
              beløpFørJustering: 300000,
              beløpJustertFor6G: 300000,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 3,
            },
            {
              år: 2019,
              inntekter: [],
              beløpFørJustering: 400000,
              beløpJustertFor6G: 350000,
              erBeløpJustertFor6G: true,
              grunnlagsfaktor: 3,
            },
          ],
          fødselsdato: parseISO("1900-01-01"),
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3,
        },
        vedtaksdato: parseISO("2022-06-05"),
        virkningsdato: parseISO("2022-05-05"),
      },
    },
  },
  {
    personident: "12345678910",
    fødselsdato: parseISO("1970-01-01"),
    navn: "Klatrende Eføy", // ikke fra modell
    adressebeskyttelse: "strengtFortrolig",
    sak: {
      saksid: "uuid",
      tilstand: "SØKNAD_MOTTATT",
      mottattDato: subDays(new Date(), 8),
      søknadstidspunkt: parseISO("2022-05-05"),
      ansvarlig: "x943580",
      sakstype: {
        type: "STANDARD",
        aktiv: true,
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
  },
  {
    personident: "06826999576",
    fødselsdato: parseISO("1969-02-06"),
    sak: {
      saksid: "8db1f4cf-0c7b-4e6d-aaff-77032a308e1a",
      tilstand: "VEDTAK_FATTET",
      sakstype: {
        type: "STANDARD",
        aktiv: true,
        vilkårsvurderinger: [
          {
            vilkårsvurderingsid: "45842bb0-b034-4a3a-a688-f6285f18ad82",
            paragraf: "PARAGRAF_11_2",
            ledd: ["LEDD_1", "LEDD_2"],
            tilstand: "OPPFYLT_MASKINELT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "e323dc50-914a-4fee-bf85-705d5d69c067",
            paragraf: "PARAGRAF_11_3",
            ledd: ["LEDD_1", "LEDD_2", "LEDD_3"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "eedfaa00-d4cb-40ac-aca9-cd5b90b3a4d4",
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "a356deb4-f214-49a8-a398-b1cfba3a0135",
            paragraf: "PARAGRAF_11_4",
            ledd: ["LEDD_2", "LEDD_3"],
            tilstand: "IKKE_RELEVANT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "830f79e1-5184-43d2-a448-351a693946c0",
            paragraf: "PARAGRAF_11_5",
            ledd: ["LEDD_1", "LEDD_2"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "27543c57-1547-4f57-83f6-badb0cfbf7b4",
            paragraf: "PARAGRAF_11_6",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "737d74e2-001d-4e89-90be-f9f63d2df25b",
            paragraf: "PARAGRAF_11_12",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
          {
            vilkårsvurderingsid: "042bca80-1ad8-43e5-8779-6d0d69303ba3",
            paragraf: "PARAGRAF_11_29",
            ledd: ["LEDD_1"],
            tilstand: "OPPFYLT",
            måVurderesManuelt: false,
          },
        ],
      },
      søknadstidspunkt: parseISO("2022-03-25T12:46:31.803"),
      vedtak: {
        vedtaksid: "52e31434-179a-40af-9d8f-1a84c0c9baaf",
        innvilget: true,
        inntektsgrunnlag: {
          beregningsdato: parseISO("2022-01-01"),
          inntekterSiste3Kalenderår: [
            {
              år: 2021,
              inntekter: [
                {
                  arbeidsgiver: "321",
                  inntekstmåned: parseISO("2021-01"),
                  beløp: 400000.0,
                },
              ],
              beløpFørJustering: 400000.0,
              beløpJustertFor6G: 400000.0,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 3.819856,
            },
            {
              år: 2020,
              inntekter: [
                {
                  arbeidsgiver: "321",
                  inntekstmåned: parseISO("2020-01"),
                  beløp: 400000.0,
                },
              ],
              beløpFørJustering: 400000.0,
              beløpJustertFor6G: 400000.0,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 3.966169,
            },
            {
              år: 2019,
              inntekter: [
                {
                  arbeidsgiver: "321",
                  inntekstmåned: parseISO("2019-01"),
                  beløp: 400000.0,
                },
              ],
              beløpFørJustering: 400000.0,
              beløpJustertFor6G: 400000.0,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 4.04588,
            },
          ],
          fødselsdato: parseISO("1969-02-06"),
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3.943968,
        },
        vedtaksdato: parseISO("2022-03-25"),
        virkningsdato: parseISO("2022-03-25"),
      },
    },
  },
];
