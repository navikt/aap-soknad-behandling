import format from "date-fns/format";
import { differenceInYears } from "date-fns";
const DATO_FORMAT = "dd.MM.yyyy";
export const formaterDato = (dato: Date): string => {
  const datoen = new Date(dato.toString());
  return format(datoen, DATO_FORMAT);
};

export const datoFraArray = (dato: number[]): Date => {
  if (dato.length !== 3) {
    throw new Error();
  }
  return new Date(dato.toString());
};

export const finnAlder = (dato: Date): number => {
  const nå = new Date();
  return differenceInYears(nå, dato);
};

export const formaterPid = (pid: string): string => `${pid.substring(0, 6)} ${pid.substring(6)}`;
