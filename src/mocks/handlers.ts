import { rest } from "msw";
import { personMedEnAktivSak } from "./datas/personsaker";
import { listeMedSøkereOgSaker } from "./datas/saksliste";

export const handlers = [
  rest.get("/aap-behandling/api/sak", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(listeMedSøkereOgSaker), ctx.delay(100));
  }),
  rest.get("/aap-behandling/api/sak/12345678910", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(personMedEnAktivSak), ctx.delay(300));
  }),
  rest.get("/aap-behandling/api/sak/:personid", (req, res, ctx) => {
    const { personid } = req.params;
    const person = listeMedSøkereOgSaker.filter((p) => p.personident === personid);

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
    return res(
      ctx.status(200),
      ctx.json({message: 'OK'}),
      ctx.delay(500)
    )
  })
];
