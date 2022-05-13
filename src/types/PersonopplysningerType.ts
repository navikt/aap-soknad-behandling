import { z } from "zod";

export const personopplysningerSchema = z.object({
  personident: z.string(),
  norgEnhetId: z.string(),
  adressebeskyttelse: z.string(),
  geografiskTilknytning: z.string(),
  erSkjermet: z.boolean(),
  erSkjermetFom: z.string().optional(),
  erSkjermetTom: z.string().optional(),
});

export type PersonopplysningerType = z.infer<typeof personopplysningerSchema>;
