import React from "react";
import { Button, Radio, RadioGroup, TextField } from "@navikt/ds-react";
import { Controller, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

type FormValues = {
  erMedlem: string;
  erOppfylt: string;
  navn: string;
};

interface PropsMyComponent {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
}

const MyComponent1 = (props: PropsMyComponent) => {
  const { control } = props;

  return (
    <Controller
      name="erMedlem"
      control={control}
      defaultValue={""}
      render={({ field: { onChange, value } }) => (
        <RadioGroup legend={"Er medlem?"} onChange={onChange} value={value}>
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroup>
      )}
    />
  );
};

const MyComponent2 = (props: PropsMyComponent) => {
  const { control } = props;

  return (
    <Controller
      name="erOppfylt"
      control={control}
      defaultValue={""}
      render={({ field: { onChange, value } }) => (
        <RadioGroup legend={"Er oppfylt?"} onChange={onChange} value={value}>
          <Radio value={"true"}>Ja</Radio>
          <Radio value={"false"}>Nei</Radio>
        </RadioGroup>
      )}
    />
  );
};

export const Inngangsvilkår2 = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label={"Navn"} {...register("navn")} />
      <MyComponent1 register={register} control={control} />
      <MyComponent2 register={register} control={control} />
      <Button variant={"primary"}>Fullfør</Button>
    </form>
  );
};
