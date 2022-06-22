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

interface Props<FormFieldValues extends FieldValues> {
  defaultValues?: UnpackNestedValue<DeepPartial<FormFieldValues>>;
}

export const useSkjemaNew = <FormFieldValues extends FieldValues>(
  props: Props<FormFieldValues>
): {
  handleSubmit: UseFormHandleSubmit<FormFieldValues>;
  control: Control<FormFieldValues>;
  register: UseFormRegister<FormFieldValues>;
  errors: FieldErrors<FormFieldValues>;
  onSubmit: (personIdent: string, data: FormFieldValues) => void;
  isLoading: boolean;
  watch: UseFormWatch<FormFieldValues>;
  resetField: UseFormResetField<FormFieldValues>;
} => {
  const { defaultValues } = props;
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    resetField,
  } = useForm<FormFieldValues>({
    defaultValues,
  });

  const onSubmit = async (personIdent: string, data: FormFieldValues) => {
    setIsLoading(true);
    // TODO Hvordan løse api på en generisk måte?
    console.log(data);
    setIsLoading(false);
  };

  return { handleSubmit, control, register, errors, onSubmit, isLoading, watch, resetField };
};
