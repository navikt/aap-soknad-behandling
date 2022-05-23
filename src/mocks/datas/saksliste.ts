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
      vedtak: null,
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
      vedtak: null,
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
        erOppfylt: true,
        måVurderesManuelt: false,
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
      vedtak: null,
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
        kravOmNedsattArbeidsevneErOppfylt: true,
        nedsettelseSkyldesSykdomEllerSkade: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "uuid-4-6",
        erOppfylt: true,
        måVurderesManuelt: false,
        harBehovForBehandling: true,
        harBehovForTiltak: false,
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
              år: "2021",
              inntekter: [],
              beløpFørJustering: 400000,
              beløpJustertFor6G: 350000,
              erBeløpJustertFor6G: true,
              grunnlagsfaktor: 3,
            },
            {
              år: "2020",
              inntekter: [],
              beløpFørJustering: 300000,
              beløpJustertFor6G: 300000,
              erBeløpJustertFor6G: false,
              grunnlagsfaktor: 3,
            },
            {
              år: "2019",
              inntekter: [],
              beløpFørJustering: 400000,
              beløpJustertFor6G: 350000,
              erBeløpJustertFor6G: true,
              grunnlagsfaktor: 3,
            },
          ],
          fødselsdato: "1900-01-01",
          sisteKalenderår: "2021",
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
      vedtak: null,
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
        kravOmNedsattArbeidsevneErOppfylt: true,
        nedsettelseSkyldesSykdomEllerSkade: true,
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
        inntektsgrunnlag: {
          beregningsdato: "2022-01-01",
          inntekterSiste3Kalenderår: [
            {
              år: "2021",
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
              år: "2020",
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
              år: "2019",
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
          sisteKalenderår: "2021",
          grunnlagsfaktor: 3.943968,
        },
        innvilget: true,
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
        kravOmNedsattArbeidsevneErOppfylt: true,
        nedsettelseSkyldesSykdomEllerSkade: false,
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
        inntektsgrunnlag: {
          beregningsdato: subDays(new Date(), 5).toISOString(),
          inntekterSiste3Kalenderår: [
            {
              år: "2021",
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
              år: "2020",
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
              år: "2019",
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
          sisteKalenderår: "2021",
          grunnlagsfaktor: 3.943968,
        },
        innvilget: false,
        vedtaksdato: "2022-03-25",
        virkningsdato: "2022-03-25",
      },
    },
  },
  {
    personident: "21898099137",
    fødselsdato: "1980-09-21",
    sak: {
      saksid: "e8f82e0a-af21-4da3-a05c-0ec94a47025a",
      søknadstidspunkt: "2022-03-30T13:17:57.772",
      type: "STANDARD",
      vedtak: null,
      paragraf_11_2: {
        vilkårsvurderingsid: "6a9e5040-6060-42a4-a60c-0ab43086b410",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "7da59155-a6f3-48bd-8bab-9b443879f565",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "ee408518-e47b-4876-a615-c9e82b6f2b32",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "8b67d5f8-cc5d-4012-b657-831cf78133c3",
        erOppfylt: false,
        måVurderesManuelt: true,
        kravOmNedsattArbeidsevneErOppfylt: false,
        nedsettelseSkyldesSykdomEllerSkade: false,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "61a7f49d-6a76-48b6-9ffd-dbe3dc2e6439",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "64dc0b88-e066-41b3-8935-291a4dc0c30a",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "ebde56dc-8486-46f9-bc65-855811197e4d",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
    skjermet: false,
  },
  {
    personident: "25849598190",
    fødselsdato: "1995-04-25",
    sak: {
      saksid: "b00556db-29da-498f-bd8c-2040390a566a",
      søknadstidspunkt: "2022-04-06T12:23:02.027",
      type: "STANDARD",
      vedtak: null,
      paragraf_11_2: {
        vilkårsvurderingsid: "dcbcae16-70b9-4b3e-9e51-6e5462b154e4",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "017dc481-ddba-486a-802d-ccf013813147",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "90dc9c09-f755-43c9-89b9-785f8f809fcf",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "dc4b91ec-96c7-4eee-8045-902d719dd157",
        erOppfylt: false,
        måVurderesManuelt: true,
        kravOmNedsattArbeidsevneErOppfylt: false,
        nedsettelseSkyldesSykdomEllerSkade: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "26aee9a3-344a-4770-b100-87d1e93c74e3",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "14bd4aac-555f-4ef5-8c74-6a5675a4680c",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "692c0a33-d572-467f-aca4-8019103d91f8",
        erOppfylt: false,
        måVurderesManuelt: true,
      },
    },
    skjermet: false,
  },
  {
    personident: "24886899811",
    fødselsdato: "1968-08-24",
    sak: {
      saksid: "95bea9de-d3da-4cd7-ada9-c3b1feadb60a",
      søknadstidspunkt: "2022-03-30T13:17:56.125",
      type: "STANDARD",
      vedtak: {
        vedtaksid: "eccb98b1-c191-461d-b447-3bd2cc79c73c",
        inntektsgrunnlag: {
          beregningsdato: "2022-03-30",
          inntekterSiste3Kalenderår: [
            {
              år: "2021",
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
              år: "2020",
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
              år: "2019",
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
          fødselsdato: "1968-08-24",
          sisteKalenderår: "2021",
          grunnlagsfaktor: 3.943968,
        },
        innvilget: true,
        vedtaksdato: "2022-03-30",
        virkningsdato: "2022-03-30",
      },
      paragraf_11_2: {
        vilkårsvurderingsid: "4b6bfa9d-1edf-4b5d-8dc2-f426a8891771",
        erOppfylt: false,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "35454ac3-8394-4460-b7aa-0e6fa78bd2fc",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "9c376640-1e5e-47cd-8028-7ef8ec4e6731",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "3289537e-61aa-49fe-b0fe-a641658ebde2",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "de629635-9397-4b75-817a-f83990d6a397",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "3ccf473f-859a-4dc0-860c-2f0704c9953b",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "2f875d1f-db3b-4f5c-b8ac-082a23a19949",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
    },
    skjermet: false,
  },
  {
    personident: "06826999576",
    fødselsdato: "1969-02-06",
    sak: {
      saksid: "d4b0851d-d59e-4537-bdeb-89dbd0298cd0",
      søknadstidspunkt: "2022-03-30T13:18:00.255",
      type: "STANDARD",
      vedtak: {
        vedtaksid: "f0fadfc2-fd27-45cd-bdcc-047ee6984578",
        inntektsgrunnlag: {
          beregningsdato: "2022-03-30",
          inntekterSiste3Kalenderår: [
            {
              år: "2021",
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
              år: "2020",
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
              år: "2019",
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
          sisteKalenderår: "2021",
          grunnlagsfaktor: 3.943968,
        },
        innvilget: true,
        vedtaksdato: "2022-03-30",
        virkningsdato: "2022-03-30",
      },
      paragraf_11_2: {
        vilkårsvurderingsid: "d344b453-ea72-4aad-9f34-52d397c864f1",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_3: {
        vilkårsvurderingsid: "ca672f77-6996-434a-999e-781e51a6693f",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_4: {
        vilkårsvurderingsid: "82b2989f-e7ed-44c6-bcbc-7d6957e9baee",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_5: {
        vilkårsvurderingsid: "c640687a-afd8-4966-9163-b8b052edf715",
        erOppfylt: true,
        måVurderesManuelt: false,
        kravOmNedsattArbeidsevneErOppfylt: true,
        nedsettelseSkyldesSykdomEllerSkade: true,
      },
      paragraf_11_6: {
        vilkårsvurderingsid: "936e46a5-6829-46fb-8e86-80a0b1a9efeb",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_12: {
        vilkårsvurderingsid: "7c3b6fa2-3eed-4a50-917f-c35866ba2f31",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
      paragraf_11_29: {
        vilkårsvurderingsid: "e132ac23-d858-47d8-8e9e-559d09b7c99a",
        erOppfylt: true,
        måVurderesManuelt: false,
      },
    },
    skjermet: false,
  },
];
