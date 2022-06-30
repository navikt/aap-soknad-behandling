import { Control, Controller, RegisterOptions, UseFormResetField } from "react-hook-form";
import { FieldPath, FieldValues, FieldErrors } from "react-hook-form/dist/types";

import { RadioGroup } from "@navikt/ds-react";
import { getText } from "../../tekster/tekster";
import { ReactElement } from "react";
import { NullstillKnapp } from "../NullstillKnapp/NullstillKnapp";

import * as styles from "./radio.module.css";

interface RadioProps<FormFieldValues extends FieldValues> {
  name: FieldPath<FormFieldValues>;
  tekstNokkel: string;
  errors: FieldErrors<FormFieldValues>;
  control: Control<FormFieldValues>;
  children: ReactElement[];
  legend?: string;
  rules?: RegisterOptions<FormFieldValues>;
  resetField?: UseFormResetField<FormFieldValues>;
  description?: string;
  horisontal?: Boolean;
}

export const RadioGroupWrapper = <FormFieldValues extends FieldValues>({
  children,
  name,
  tekstNokkel,
  control,
  errors,
  rules,
  resetField,
  description,
  horisontal = false,
}: RadioProps<FormFieldValues>) => {
  return (
    <div className={styles.radiogroup}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            id={name}
            value={value}
            name={name}
            legend={getText(`${tekstNokkel}.legend`) || getText(tekstNokkel)}
            error={errors && errors[name]?.message}
            onChange={onChange}
            description={description}
            className={horisontal ? styles.horizontal : ""}
          >
            {children}
          </RadioGroup>
        )}
      />
      {resetField && <NullstillKnapp onClick={() => resetField(name)} />}
    </div>
  );
};
