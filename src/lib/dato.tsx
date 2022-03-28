import format from "date-fns/format";
import { differenceInYears } from "date-fns";

const DATO_FORMAT = "dd.MM.yyyy";
const DATO_TID_FORMAT = "dd.MM.yyyy HH:mm"

export const formaterDato = (dato: Date): string => {
  return format(dato, DATO_FORMAT);
};

export const finnAlder = (dato: Date): number => {
  const nå = new Date();
  return differenceInYears(nå, dato);
};

export const formatterTidspunkt = (dato: Date): string => {
  return format(dato, DATO_TID_FORMAT);
}

export const formaterPid = (pid: string): string => `${pid.substring(0, 6)} ${pid.substring(6)}`;
