import format from "date-fns/format";
const DATO_FORMAT = "dd.MM.yyyy";
export const formaterDato = (dato:string):string => format(new Date(dato), DATO_FORMAT);
export const formaterDatoArray = (dato:number[]):string => {
  if (dato.length !== 3) {
    throw new Error();
  }
  const datoSomString = dato.join('.');
  return formaterDato(datoSomString);
}
