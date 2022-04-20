import { z } from "zod";
import { isValid, parseISO } from "date-fns";

const refineDato = (dato: string) => isValid(parseISO(dato));

const inntektSchema = z.object({
  arbeidsgiver: z.string(),
  inntektsmåned: z.string().refine((dato) => refineDato(dato)),
  beløp: z.number(),
});
export type InntektType = z.infer<typeof inntektSchema>;

const inntektsgrunnlagForÅrSchema = z.object({
  år: z.number(),
  inntekter: z.array(inntektSchema),
  beløpFørJustering: z.number(),
  beløpJustertFor6G: z.number(),
  erBeløpJustertFor6G: z.boolean(),
  grunnlagsfaktor: z.number(),
});
export type InntektsgrunnlagForÅr = z.infer<typeof inntektsgrunnlagForÅrSchema>;

const inntektsgrunnlagSchema = z.object({
  beregningsdato: z.string().refine((dato) => refineDato(dato)),
  inntekterSiste3Kalenderår: z.array(inntektsgrunnlagForÅrSchema),
  fødselsdato: z.string().refine((dato) => refineDato(dato)),
  sisteKalenderår: z.number(),
  grunnlagsfaktor: z.number(),
});
export type InntektsgrunnlagType = z.infer<typeof inntektsgrunnlagSchema>;

export const vedtakSchema = z.object({
  innvilget: z.boolean(),
  inntektsgrunnlag: inntektsgrunnlagSchema,
  vedtaksdato: z.string().refine((dato) => refineDato(dato)),
  virkningsdato: z.string().refine((dato) => refineDato(dato)),
  vedtaksid: z.string().optional(), // neppe optional
});
export type VedtakType = z.infer<typeof vedtakSchema>;
