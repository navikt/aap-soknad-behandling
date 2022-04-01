import format from "date-fns/format";
import { differenceInYears } from "date-fns";
import { nb } from "date-fns/locale";

export const DATO_FORMATER = Object.freeze({
  ddMMyyyy: "dd.MM.yyyy",
  ddMMMyyyy: "dd. MMM yyyy",
  ddMMyyyy_HHmm: "dd.MM.yyyy HH:mm",
});

export const formaterDato = (dato: Date, datoformat?: string): string => {
  return format(dato, datoformat || DATO_FORMATER.ddMMyyyy, { locale: nb });
};

export const finnAlder = (dato: Date): number => {
  const nå = new Date();
  return differenceInYears(nå, dato);
};

export const formaterTidspunkt = (dato: Date): string => {
  return format(dato, DATO_FORMATER.ddMMyyyy_HHmm);
};

export const formaterPid = (pid: string): string => `${pid.substring(0, 6)} ${pid.substring(6)}`;
