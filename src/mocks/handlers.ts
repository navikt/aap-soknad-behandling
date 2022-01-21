import { rest } from "msw";
import { testdataliste } from "./datas/vurderinger";

export const handlers = [
  rest.get("/api/aap-vedtak/saksliste", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(testdataliste),
      ctx.delay(500)
    );
  }),
];
