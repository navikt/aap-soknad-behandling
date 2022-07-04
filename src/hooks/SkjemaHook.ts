import {
  Control,
  DeepPartial,
  UnpackNestedValue,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormResetField,
  UseFormWatch,
} from "react-hook-form";
import { useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form/dist/types";
import { fetchPOST } from "./useFetch";

export const useSkjema = <FormFields extends FieldValues, FormData extends object>(
  initialValues?: UnpackNestedValue<DeepPartial<FormFields>>
): {
  handleSubmit: UseFormHandleSubmit<FormFields>;
  control: Control<FormFields>;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
  onSubmit: (url: string, data: FormData) => void;
  isLoading: boolean;
  watch: UseFormWatch<FormFields>;
  resetField: UseFormResetField<FormFields>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    resetField,
  } = useForm<FormFields>({
    defaultValues: initialValues,
  });

  const onSubmit = async (url: string, data: FormData) => {
    setIsLoading(true);
    console.log(data);
    const res = await fetchPOST(url, data);

    if (!res.ok) {
      console.warn("Noe feilet under innsending");
      console.warn(res);
    }
    setIsLoading(false);
  };

  return { handleSubmit, control, register, errors, onSubmit, isLoading, watch, resetField };
};
