import { Control, Controller, FieldErrors } from "react-hook-form";

import { RadioGroup } from "@navikt/ds-react";
import { getText } from "../../tekster/tekster";
import { ReactElement, ReactNode } from "react";
import { Markdown } from "../Markdown/Markdown";
import { NullstillKnapp } from "../NullstillKnapp/NullstillKnapp";

import * as styles from "./radio.module.css";

interface RadioProps {
  feltNokkel: string;
  tekstNokkel: string;
  errors: FieldErrors;
  control: Control;
  children: ReactElement[];
  legend?: string;
  rules?: object;
  resetField?: Function;
  description?: ReactNode;
  horisontal?: Boolean;
}

export const RadioGroupWrapper = ({
  children,
  feltNokkel,
  tekstNokkel,
  control,
  errors,
  rules,
  resetField,
  description,
  horisontal = false,
}: RadioProps) => {
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
    <div className={styles.radiogroup}>
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
            className={horisontal ? styles.horizontal : ""}
          >
            {children}
          </RadioGroup>
        )}
      />
      {resetField && <NullstillKnapp onClick={() => resetField(feltNokkel)} />}
    </div>
  );
};
