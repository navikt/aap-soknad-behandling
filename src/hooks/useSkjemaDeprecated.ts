import { useForm } from "react-hook-form";
import { sendLøsning } from "../components/Sak/paragrafer/SendLosning";
import { useState } from "react";

export const useSkjemaDeprecated = () => {
  const [senderMelding, oppdaterSenderMelding] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    resetField,
  } = useForm();

  const onSubmit = async (personident: string, løsning: any) => {
    oppdaterSenderMelding(true);
    const res = await sendLøsning(personident, løsning);
    if (!res.ok) {
      console.warn("Noe feilet under innsending");
      console.warn(res);
    } else {
      window.location.reload();
    }
    oppdaterSenderMelding(false);
  };

  return { handleSubmit, control, register, errors, onSubmit, senderMelding, watch, resetField };
};
