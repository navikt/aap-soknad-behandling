import { Løsning } from "../../../types/Losning";
import { fetchPOST } from "../../../hooks/useFetch";

export const sendLøsning = async (personident: string, løsning: Løsning) =>
  await fetchPOST(`/aap-behandling/api/sak/${personident}/losning`, løsning);
