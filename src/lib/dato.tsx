import format from "date-fns/format";
import { differenceInYears } from "date-fns";
const DATO_FORMAT = "dd.MM.yyyy";
export const formaterDato = (dato: Date): string => {
  return format(new Date(dato), DATO_FORMAT);
};
export const finnAlder = (dato: Date): number => {
  const nå = new Date();
  return differenceInYears(nå, new Date(dato));
};

export const formaterPid = (pid: string): string => `${pid.substring(0, 6)} ${pid.substring(6)}`;
