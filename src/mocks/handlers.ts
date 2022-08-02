import { rest } from "msw";
import { listeMedSøkereOgSaker } from "./datas/saksliste";
import { personopplysning } from "./datas/personopplysninger";
import { SøkerType } from "../types/SakType";

export enum Brukertype {
  NAV = "NAV",
  NAY = "NAY",
  NKS = "NKS",
}

const navParagrafer = ["paragraf_11_5"];
const nayParagrafer = [
  "paragraf_11_2",
  "paragraf_11_3",
  "paragraf_11_4",
  "paragraf_11_6",
  "paragraf_11_12",
  "paragraf_11_19",
  "paragraf_11_29",
];

const settAutorisasjon = (person: SøkerType, paragrafListe: string[], erGodkjenner: boolean) => {
  paragrafListe.forEach((paragraf: string) => {
    if (person.sak.inngangsvilkår && paragraf in person.sak.inngangsvilkår) {
      if (erGodkjenner) {
        // @ts-ignore
        person.sak.inngangsvilkår.autorisasjon = "GODKJENNE";
      } else {
        // @ts-ignore
        person.sak.inngangsvilkår.autorisasjon = "ENDRE";
      }
    }
    if (paragraf in person.sak) {
      if (erGodkjenner) {
        // @ts-ignore
        person.sak[paragraf].autorisasjon = "GODKJENNE";
      } else {
        // @ts-ignore
        person.sak[paragraf].autorisasjon = "ENDRE";
      }
    }
  });
  return person;
};

const settNavAutorisasjon = (person: SøkerType[], erGodkjenner: boolean) =>
  person.map((p: SøkerType) => settAutorisasjon(p, navParagrafer, erGodkjenner));
const settNayAutorisasjon = (person: SøkerType[], erGodkjenner: boolean) =>
  person.map((p: SøkerType) => settAutorisasjon(p, nayParagrafer, erGodkjenner));

export const handlers = (brukertype: Brukertype | undefined, erGodkjenner: boolean | undefined = false) => {
  return [
    rest.get("/api/personopplysninger/:personid", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(personopplysning), ctx.delay(523));
    }),

    rest.get("/api/sak", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(listeMedSøkereOgSaker), ctx.delay(400));
    }),
    rest.get("/api/sak/:personident", (req, res, ctx) => {
      const { personident } = req.params;
      let person = listeMedSøkereOgSaker.filter((p) => p.personident === personident);
      if (brukertype === Brukertype.NAV) {
        person = settNavAutorisasjon(person, erGodkjenner);
      }
      if (brukertype === Brukertype.NAY) {
        person = settNayAutorisasjon(person, erGodkjenner);
      }
      return res(ctx.status(200), ctx.json(person), ctx.delay(400));
    }),

    rest.post("/api/sak/:personident/losning/inngangsvilkar", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "OK" }), ctx.delay(500));
    }),
    rest.post("/api/sak/:personident/losning/paragraf_11_5", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "OK" }), ctx.delay(500));
    }),
    rest.post("/api/sak/:personident/losning/paragraf_11_6", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "OK" }), ctx.delay(500));
    }),
    rest.post("/api/sak/:personident/losning/paragraf_11_29", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "OK" }), ctx.delay(500));
    }),

    //Denne brukes kun til internt bruk.
    rest.get("/internal/userinfo", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "Saks Behandler",
        })
      );
    }),
  ];
};
