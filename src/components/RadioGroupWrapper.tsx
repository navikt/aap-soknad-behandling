import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

import { Button, RadioGroup } from "@navikt/ds-react";
import { getText } from "../tekster/tekster";
import { ReactElement, ReactNode } from "react";
import { Delete } from "@navikt/ds-icons";
import { Markdown } from "./Markdown/Markdown";

export interface RadioProps {
  feltNokkel: string;
  tekstNokkel: string;
  legend?: string;
  errors: FieldErrors;
  control: Control<FieldValues>;
  children: ReactElement[];
  rules?: object;
  resetField?: Function;
  description?: ReactNode;
}

type NullstillProps = {
  resetField?: Function;
  feltNokkel: string;
};

const Nullstillknapp = ({ resetField, feltNokkel }: NullstillProps): JSX.Element | null => {
  if (!resetField) {
    return null;
  }
  return (
    <div>
      <Button
        type={"button"}
        variant={"tertiary"}
        onClick={() => {
          resetField(feltNokkel);
        }}
      >
        <Delete />
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
  resetField,
  description,
}: RadioProps): JSX.Element => {
  const getDescription = () => {
    if (description) {
      return description;
    }
    const markdownNokkel = `${tekstNokkel}.description.md`;
    const markdownTekst = getText(markdownNokkel);
    if (markdownTekst !== markdownNokkel) {
      return <Markdown tekst={markdownTekst} />;
    }
    const descNokkel = `${tekstNokkel}.description`;
    const descTekst = getText(descNokkel);
    if (descNokkel !== descTekst) {
      return descTekst;
    }
    return null;
  };

  return (
    <div className={"radio__group"}>
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
            description={getDescription()}
          >
            {children}
          </RadioGroup>
        )}
      />
      <Nullstillknapp feltNokkel={feltNokkel} resetField={resetField} />
    </div>
  );
};
