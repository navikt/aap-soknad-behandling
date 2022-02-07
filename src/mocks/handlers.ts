import { rest } from "msw";
import { testdataliste } from "./datas/vurderinger";

export const handlers = [
  rest.get("/aap-behandling/api/sak", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testdataliste), ctx.delay(100));
  }),
  rest.get("/aap-behandling/api/sak/neste", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testdataliste[0]), ctx.delay(100));
  }),
];
