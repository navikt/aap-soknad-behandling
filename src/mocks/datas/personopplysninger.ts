import { PersonopplysningerType } from "../../types/PersonopplysningerType";
import { addYears, subYears } from "date-fns";

export const personopplysning: PersonopplysningerType = {
  personident: "12345678910",
  norgEnhetId: "Hva kan komme her?",
  adressebeskyttelse: "Nei",
  geografiskTilknytning: "Øst Viken",
  erSkjermet: true,
  erSkjermetFom: subYears(new Date(), 5).toISOString(),
  erSkjermetTom: addYears(new Date(), 2).toISOString(),
};
