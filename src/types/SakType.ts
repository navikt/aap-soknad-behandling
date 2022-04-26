import { z } from "zod";

import { vedtakSchema } from "./Vedtak";
import { isValid, parseISO } from "date-fns";

const vilkårsvurderingSchema = z.object({
  vilkårsvurderingsid: z.string(),
  erOppfylt: z.boolean().optional(),
  måVurderesManuelt: z.boolean().optional(),
});
export type VilkårsvurderingType = z.infer<typeof vilkårsvurderingSchema>;

const paragraf_11_2Schema = vilkårsvurderingSchema.extend({});
const paragraf_11_3Schema = vilkårsvurderingSchema.extend({});
const paragraf_11_4Schema = vilkårsvurderingSchema.extend({});
const paragraf_11_5Schema = vilkårsvurderingSchema.extend({
  kravOmNedsattArbeidsevneErOppfylt: z.boolean().optional(),
  nedsettelseSkyldesSykdomEllerSkade: z.boolean().optional(),
});
const paragraf_11_6Schema = vilkårsvurderingSchema.extend({});
const paragraf_11_12Schema = vilkårsvurderingSchema.extend({});
const paragraf_11_29Schema = vilkårsvurderingSchema.extend({});

export type Paragraf_11_2Type = z.infer<typeof paragraf_11_2Schema>;
export type Paragraf_11_3Type = z.infer<typeof paragraf_11_3Schema>;
export type Paragraf_11_4Type = z.infer<typeof paragraf_11_4Schema>;
export type Paragraf_11_5Type = z.infer<typeof paragraf_11_5Schema>;
export type Paragraf_11_6Type = z.infer<typeof paragraf_11_6Schema>;
export type Paragraf_11_12Type = z.infer<typeof paragraf_11_12Schema>;
export type Paragraf_11_29Type = z.infer<typeof paragraf_11_29Schema>;

const sakSchema = z.object({
  saksid: z.string(),
  søknadstidspunkt: z.string().refine((dato) => refineDato(dato)),
  vedtak: vedtakSchema.nullable(),
  ansvarlig: z.string().optional(), // TODO Sette opp granulert tildeling (flere personer kan "eie") aktiv / venter
  type: z.string(), // 11-5, SP-erstattning, Student, Uføre
  aktiv: z.boolean().optional(), // TODO Hva betyr egentlig dette? Tilstand? Bruke eksplisitte booleans?
  paragraf_11_2: paragraf_11_2Schema.optional(),
  paragraf_11_3: paragraf_11_3Schema.optional(),
  paragraf_11_4: paragraf_11_4Schema.optional(),
  paragraf_11_5: paragraf_11_5Schema.optional(),
  paragraf_11_6: paragraf_11_6Schema.optional(),
  paragraf_11_12: paragraf_11_12Schema.optional(),
  paragraf_11_29: paragraf_11_29Schema.optional(),
});
export type SakType = z.infer<typeof sakSchema>;
const refineDato = (dato: string) => isValid(parseISO(dato));

export const søkerSchema = z.object({
  personident: z.string(),
  sak: sakSchema,
  fødselsdato: z.string().refine((dato) => refineDato(dato)),
  navn: z.string().optional(),
  adressebeskyttelse: z.string().optional(), // ikke fra modell
  skjermet: z.boolean(),
});
export type SøkerType = z.infer<typeof søkerSchema>;
export const søkerliste = z.array(søkerSchema);
