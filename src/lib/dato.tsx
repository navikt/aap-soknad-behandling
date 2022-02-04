import format from "date-fns/format";
const DATO_FORMAT = "dd.MM.yyyy";
export const formaterDato = (dato:string):string => format(new Date(dato), DATO_FORMAT);
