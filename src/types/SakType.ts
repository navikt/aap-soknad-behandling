import { z } from "zod";

import { vedtakSchema } from "./Vedtak";
import { isValid, parseISO } from "date-fns";

export const autorisasjonEnum = z.enum(["LESE", "ENDRE", "GODKJENNE"]);
export const utfallEnum = z.enum(["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT", "IKKE_RELEVANT"]);

export type Autorisasjontype = z.infer<typeof autorisasjonEnum>;
export type UtfallType = z.infer<typeof utfallEnum>;

const vilkårsvurderingSchema = z.object({
  vilkårsvurderingsid: z.string(),
  utfall: utfallEnum,
  autorisasjon: autorisasjonEnum,
});

const vilkårsvurderingSchemaUtenAutorisasjon = z.object({
  vilkårsvurderingsid: z.string(),
  utfall: utfallEnum,
});

export type VilkårsvurderingType = z.infer<typeof vilkårsvurderingSchema>;
export type VilkårsvurderingUtenAutorisasjonType = z.infer<typeof vilkårsvurderingSchemaUtenAutorisasjon>;

const paragraf_11_2_schema = vilkårsvurderingSchemaUtenAutorisasjon.extend({});
const paragraf_11_3_schema = vilkårsvurderingSchemaUtenAutorisasjon.extend({});
const paragraf_11_4_schema = vilkårsvurderingSchemaUtenAutorisasjon.extend({});

const inngangsvilkårSchema = z.object({
  autorisasjon: autorisasjonEnum,
  paragraf_11_2: paragraf_11_2_schema.optional(),
  paragraf_11_3: paragraf_11_3_schema.optional(),
  paragraf_11_4: paragraf_11_4_schema.optional(),
});

const paragraf_11_5_schema = vilkårsvurderingSchema.extend({
  kravOmNedsattArbeidsevneErOppfylt: z.boolean().nullable(),
  arbeidsevneNedsattMedMinstHalvparten: z.boolean().optional().nullable(), // TODO skal bare være nullable. Pt ikke i modell
  nedsettelseSkyldesSykdomEllerSkade: z.boolean().nullable(),
});
const paragraf_11_6_schema = vilkårsvurderingSchema.extend({
  harBehovForBehandling: z.boolean().nullable(),
  harBehovForTiltak: z.boolean().nullable(),
  harMulighetForÅKommeIArbeid: z.boolean().nullable(),
});
const paragraf_11_12_schema = vilkårsvurderingSchema.extend({
  bestemmesAv: z.string().nullable(), // enum her
  unntak: z.string().nullable(), // enum
  unntaksbegrunnelse: z.string().nullable(),
  manueltSattVirkningsdato: z.date().nullable(), // kanskje
});
const paragraf_11_29_schema = vilkårsvurderingSchema.extend({});

export type Paragraf_11_2_type = z.infer<typeof paragraf_11_2_schema>;
export type Paragraf_11_3_type = z.infer<typeof paragraf_11_3_schema>;
export type Paragraf_11_4_type = z.infer<typeof paragraf_11_4_schema>;
export type Paragraf_11_5_type = z.infer<typeof paragraf_11_5_schema>;
export type Paragraf_11_6_type = z.infer<typeof paragraf_11_6_schema>;
export type Paragraf_11_12_type = z.infer<typeof paragraf_11_12_schema>;
export type Paragraf_11_29_type = z.infer<typeof paragraf_11_29_schema>;
export type InngangsvilkårType = z.infer<typeof inngangsvilkårSchema>;

const sakSchema = z.object({
  saksid: z.string(),
  søknadstidspunkt: z.string().refine((dato) => refineDato(dato)),
  vedtak: vedtakSchema.nullable(),
  ansvarlig: z.string().optional(), // TODO Sette opp granulert tildeling (flere personer kan "eie") aktiv / venter
  type: z.string(), // 11-5, SP-erstattning, Student, Uføre
  aktiv: z.boolean().optional(), // TODO Hva betyr egentlig dette? Tilstand? Bruke eksplisitte booleans?
  inngangsvilkår: inngangsvilkårSchema.optional(),
  paragraf_11_5: paragraf_11_5_schema.optional(),
  paragraf_11_6: paragraf_11_6_schema.optional(),
  paragraf_11_12: paragraf_11_12_schema.optional(),
  paragraf_11_29: paragraf_11_29_schema.optional(),
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
