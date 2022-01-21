import { rest } from "msw";
import { testdataliste } from "./datas/vurderinger";

export const handlers = [
  rest.get("/aap-behandling/api/oppgaver", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(testdataliste),
      ctx.delay(500)
    );
  }),
];
