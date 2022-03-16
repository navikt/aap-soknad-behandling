import { Control, Controller, FieldValues } from "react-hook-form";

import { RadioGroup } from "@navikt/ds-react";

export interface RadioProps {
  name: string;
  legend?: string;
  error?: string;
  control: Control<FieldValues>;
  children: React.ReactChild[];
  rules?: object;
}
export const RadioGroupWrapper = ({ children, name, legend, control, error, rules }: RadioProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue={null}
    rules={rules}
    render={({ field: { onChange, value } }) => (
      <RadioGroup id={name} value={value} name={name} legend={legend} error={error} onChange={onChange}>
        {children}
      </RadioGroup>
    )}
  />
);
