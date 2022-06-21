import React from "react";
import { Button, TextField } from "@navikt/ds-react";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

interface PropsMyComponent {
  register: UseFormRegister<FormValues>;
}

const MyComponent1 = (props: PropsMyComponent) => {
  const { register } = props;

  return (
    <>
      <TextField label={"Fornavn"} {...register("firstName")} />
      <TextField label={"Etternavn"} {...register("lastName")} />
    </>
  );
};

const MyComponent2 = (props: PropsMyComponent) => {
  const { register } = props;

  return (
    <>
      <TextField type="email" label={"Email"} {...register("email")} />
    </>
  );
};

export const Inngangsvilkår2 = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyComponent1 register={register} />
      <MyComponent2 register={register} />
      <Button variant={"primary"}>Fullfør</Button>
    </form>
  );
};
