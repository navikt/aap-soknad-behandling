import { SøkerType } from "../../types/SakType";
import { subDays } from "date-fns";

export const listeMedSøkereOgSaker: SøkerType[] = [
  {
    personident: "11068812345",
    navn: "11-5 Mangler", // ikke fra modell
    fødselsdato: "1986-03-08",
    skjermet: false,
    sak: {
      saksid: "uuid-1",
      søknadstidspunkt: "2022-03-23T12:22:43",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-1-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-1-3",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-1-4",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-1-5",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-1-6",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-1-12",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-1-29",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
  },
  {
    personident: "01090200432",
    navn: "Ikkeno Oppfylt", // ikke fra modell
    fødselsdato: "1976-03-08",
    skjermet: false,
    sak: {
      saksid: "uuid-2",
      søknadstidspunkt: "2022-04-12T08:19:00",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-2-2",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-2-3",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-2-4",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-2-5",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-2-6",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-2-12",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-2-29",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
  },
  {
    personident: "27109500123",
    navn: "11-2 Oppfylt", // ikke fra modell
    fødselsdato: "1983-03-08",
    skjermet: false,
    sak: {
      saksid: "uuid-3",
      søknadstidspunkt: "2022-05-05T18:57:30",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-3-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-3-3",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-3-4",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-3-5",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-3-6",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-3-12",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-3-29",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
  },
  {
    personident: "10987654321",
    navn: "Innvilget Vedtak", // ikke fra modell
    fødselsdato: "1996-03-08",
    skjermet: true,
    sak: {
      saksid: "uuid-4",
      søknadstidspunkt: "2022-05-05T04:49:23",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-4-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-4-3",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-4-4",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-4-5",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-4-6",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-4-12",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-4-29",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      vedtak: {
        innvilget: true,
        inntektsgrunnlag: {
          beregningsdato: "2021-10-10T17:42:42",
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
          fødselsdato: "1900-01-01",
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3,
        },
        vedtaksdato: "2022-06-05",
        virkningsdato: "2022-05-05",
      },
    },
  },
  {
    personident: "12345678910",
    fødselsdato: "1970-01-01",
    navn: "Klatrende Eføy", // ikke fra modell
    adressebeskyttelse: "strengtFortrolig",
    skjermet: false,
    sak: {
      saksid: "uuid-5",
      søknadstidspunkt: "2022-05-05T21:01:23",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-5-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-5-3",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-5-4",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-5-5",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-5-6",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-5-12",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-5-29",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
  },
  {
    personident: "06826999576",
    navn: "Innvilget vedtak",
    fødselsdato: "1969-02-06",
    skjermet: true,
    sak: {
      saksid: "uuid-3",
      søknadstidspunkt: "2022-05-05T20:23:25",
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-3-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-3-3",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-3-4",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-3-5",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-3-6",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-3-12",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-3-29",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      vedtak: {
        vedtaksid: "52e31434-179a-40af-9d8f-1a84c0c9baaf",
        innvilget: true,
        inntektsgrunnlag: {
          beregningsdato: "2022-01-01",
          inntekterSiste3Kalenderår: [
            {
              år: 2021,
              inntekter: [
                {
                  arbeidsgiver: "321",
                  inntektsmåned: "2021-01",
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
                  inntektsmåned: "2020-01",
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
                  inntektsmåned: "2019-01",
                  beløp: 400000.0,
                },
              ],
              beløpFørJustering: 400000.0,
              beløpJustertFor6G: 400000.0,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 4.04588,
            },
          ],
          fødselsdato: "1969-02-06",
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3.943968,
        },
        vedtaksdato: "2022-03-25",
        virkningsdato: "2022-03-25",
      },
    },
  },
  {
    personident: "12838121301",
    navn: "Ikke innvilget",
    fødselsdato: "1981-03-12",
    skjermet: false,
    sak: {
      saksid: "uuid-9345",
      søknadstidspunkt: subDays(new Date(), 38).toISOString(),
      type: "STANDARD",
      aktiv: true,
      paragraf_11_2: {
        vilkårsvurderingsid: "uuid-3-2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "uuid-3-3",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "uuid-3-4",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "uuid-3-5",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-3-6",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "uuid-3-12",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "uuid-3-29",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      vedtak: {
        vedtaksid: "52e31434-179a-40af-9d8f-1a84c0c9baaf",
        innvilget: false,
        inntektsgrunnlag: {
          beregningsdato: subDays(new Date(), 5).toISOString(),
          inntekterSiste3Kalenderår: [
            {
              år: 2021,
              inntekter: [
                {
                  arbeidsgiver: "321",
                  inntektsmåned: "2021-01",
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
                  inntektsmåned: "2020-01",
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
                  inntektsmåned: "2019-01",
                  beløp: 400000.0,
                },
              ],
              beløpFørJustering: 400000.0,
              beløpJustertFor6G: 400000.0,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 4.04588,
            },
          ],
          fødselsdato: "1969-02-06",
          sisteKalenderår: 2021,
          grunnlagsfaktor: 3.943968,
        },
        vedtaksdato: "2022-03-25",
        virkningsdato: "2022-03-25",
      },
    },
  },
];
