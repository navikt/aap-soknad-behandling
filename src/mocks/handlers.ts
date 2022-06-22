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
  "paragraf_11_29",
];

const settAutorisasjon = (person: SøkerType, paragrafListe: string[]) => {
  paragrafListe.map((paragraf: string) => {
    if (paragraf in person.sak) {
      // @ts-ignore
      person.sak[paragraf].autorisasjon = "ENDRE";
    }
  });
  return person;
};

const settNavAutorisasjon = (person: SøkerType[]) => person.map((p: SøkerType) => settAutorisasjon(p, navParagrafer));
const settNayAutorisasjon = (person: SøkerType[]) => person.map((p: SøkerType) => settAutorisasjon(p, nayParagrafer));

export const handlers = (brukertype: Brukertype | undefined) => {
  return [
    rest.get("/aap-behandling/api/sak", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(listeMedSøkereOgSaker), ctx.delay(400));
    }),
    rest.get("/aap-behandling/api/sak/:personid", (req, res, ctx) => {
      const { personid } = req.params;
      let person = listeMedSøkereOgSaker.filter((p) => p.personident === personid);
      if (brukertype === Brukertype.NAV) {
        person = settNavAutorisasjon(person);
      }
      if (brukertype === Brukertype.NAY) {
        person = settNayAutorisasjon(person);
      }
      return res(ctx.status(200), ctx.json(person), ctx.delay(400));
    }),
    rest.get("/aap-behandling/internal/userinfo", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "Saks Behandler",
        })
      );
    }),
    rest.post("/aap-behandling/api/sak/:personid/losning", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "OK" }), ctx.delay(500));
    }),
    rest.get("/aap-behandling/api/personopplysninger/:personid", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(personopplysning), ctx.delay(523));
    }),
  ];
};
