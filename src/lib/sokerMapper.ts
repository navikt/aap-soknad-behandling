// import { parseISO } from "date-fns";
// import {
//   Paragraf_11_12Type,
//   Paragraf_11_29Type,
//   Paragraf_11_2Type,
//   Paragraf_11_3Type,
//   Paragraf_11_4Type,
//   Paragraf_11_5Type,
//   Paragraf_11_6Type,
//   SakType,
//   SøkerType,
// } from "../types/SakType";
// import { InntektsgrunnlagForÅr, InntektsgrunnlagType, InntektType, VedtakType } from "../types/Vedtak";
//
// const mapInntekter = (inntekter: any[]): InntektType[] =>
//   inntekter.map((inntekt: any) => ({
//     arbeidsgiver: inntekt.arbeidsgiver,
//     inntektsmåned: parseISO(inntekt.inntekstmåned),
//     beløp: inntekt.beløp,
//   }));
//
// const mapInntekterSiste3Kalenderår = (inntekterSiste3Kalenderår: any[]): InntektsgrunnlagForÅr[] =>
//   inntekterSiste3Kalenderår.map((inntektsgrunnlag: InntektsgrunnlagForÅr) => ({
//     år: inntektsgrunnlag.år,
//     inntekter: mapInntekter(inntektsgrunnlag.inntekter),
//     beløpFørJustering: inntektsgrunnlag.beløpFørJustering,
//     beløpJustertFor6G: inntektsgrunnlag.beløpJustertFor6G,
//     erBeløpJustertFor6G: inntektsgrunnlag.erBeløpJustertFor6G,
//     grunnlagsfaktor: inntektsgrunnlag.grunnlagsfaktor,
//   }));
//
// const mapInntektsgrunnlag = (inntektsgrunnlag: any): InntektsgrunnlagType => ({
//   beregningsdato: parseISO(inntektsgrunnlag.beregningsdato),
//   inntekterSiste3Kalenderår: mapInntekterSiste3Kalenderår(inntektsgrunnlag.inntekterSiste3Kalenderår),
//   fødselsdato: parseISO(inntektsgrunnlag.fødselsdato),
//   sisteKalenderår: inntektsgrunnlag.sisteKalenderår,
//   grunnlagsfaktor: inntektsgrunnlag.grunnlagsfaktor,
// });
//
// const mapVedtak = (vedtak: any): VedtakType => ({
//   innvilget: vedtak.innvilget,
//   inntektsgrunnlag: mapInntektsgrunnlag(vedtak.inntektsgrunnlag),
//   vedtaksdato: parseISO(vedtak.vedtaksdato),
//   virkningsdato: parseISO(vedtak.virkningsdato),
// });
//
// const mapParagraf_11_2 = (paragraf: any): Paragraf_11_2Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_3 = (paragraf: any): Paragraf_11_3Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_4 = (paragraf: any): Paragraf_11_4Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_5 = (paragraf: any): Paragraf_11_5Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_6 = (paragraf: any): Paragraf_11_6Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_12 = (paragraf: any): Paragraf_11_12Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapParagraf_11_29 = (paragraf: any): Paragraf_11_29Type => ({
//   vilkårsvurderingsid: paragraf.vilkårsvurderingsid,
//   erOppfylt: paragraf.erOppfylt,
//   måVurderesManuelt: paragraf.måVurderesManuelt,
// });
//
// const mapSak = (sak: any): SakType => ({
//   saksid: sak.saksid,
//   søknadstidspunkt: parseISO(sak.søknadstidspunkt),
//   vedtak: sak.vedtak ? mapVedtak(sak.vedtak) : undefined,
//   ansvarlig: sak.ansvarlig,
//   type: sak.type,
//   aktiv: sak.aktiv,
//   paragraf_11_2: sak.paragraf_11_2 ? mapParagraf_11_2(sak.paragraf_11_2) : undefined,
//   paragraf_11_3: sak.paragraf_11_3 ? mapParagraf_11_3(sak.paragraf_11_3) : undefined,
//   paragraf_11_4: sak.paragraf_11_4 ? mapParagraf_11_4(sak.paragraf_11_4) : undefined,
//   paragraf_11_5: sak.paragraf_11_5 ? mapParagraf_11_5(sak.paragraf_11_5) : undefined,
//   paragraf_11_6: sak.paragraf_11_6 ? mapParagraf_11_6(sak.paragraf_11_6) : undefined,
//   paragraf_11_12: sak.paragraf_11_12 ? mapParagraf_11_12(sak.paragraf_11_12) : undefined,
//   paragraf_11_29: sak.paragraf_11_29 ? mapParagraf_11_29(sak.paragraf_11_29) : undefined,
// });
//
// export const mapSøker = (søker: any[]): SøkerType[] => {
//   if (!søker) {
//     return [];
//   }
//   return søker.map((s: any) => ({
//     personident: s.personident,
//     sak: mapSak(s.sak),
//     fødselsdato: parseISO(s.fødselsdato),
//     navn: s.navn,
//     adressebeskyttelse: s.adressebeskyttelse,
//     skjermet: s.skjermet,
//   }));
// };
