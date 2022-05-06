import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

import { Button, RadioGroup } from "@navikt/ds-react";
import { getText } from "../tekster/tekster";
import { ReactElement } from "react";

export interface RadioProps {
  feltNokkel: string;
  tekstNokkel: string;
  legend?: string;
  errors: FieldErrors;
  control: Control<FieldValues>;
  children: ReactElement[];
  rules?: object;
  reset?: Function;
  getValues?: Function;
}

type NullstillProps = {
  reset?: Function;
  getValues?: Function;
  feltNokkel: string;
};

const Nullstillknapp = ({ reset, getValues, feltNokkel }: NullstillProps): JSX.Element | null => {
  if (!reset || !getValues) {
    return null;
  }
  return (
    <div>
      <Button
        type={"button"}
        variant={"tertiary"}
        onClick={() => {
          reset({ ...getValues(), [feltNokkel]: null });
        }}
      >
        Nullstill vurdering
      </Button>
    </div>
  );
};

export const RadioGroupWrapper = ({
  children,
  feltNokkel,
  tekstNokkel,
  control,
  errors,
  rules,
  reset,
  getValues,
}: RadioProps): JSX.Element => (
  <>
    <Controller
      name={feltNokkel}
      control={control}
      defaultValue={null}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <RadioGroup
          id={feltNokkel}
          value={value}
          name={feltNokkel}
          legend={getText(`${tekstNokkel}.legend`) || getText(tekstNokkel)}
          error={errors && errors[feltNokkel]?.message}
          onChange={onChange}
        >
          {children}
        </RadioGroup>
      )}
    />
    <Nullstillknapp feltNokkel={feltNokkel} reset={reset} getValues={getValues} />
  </>
);
