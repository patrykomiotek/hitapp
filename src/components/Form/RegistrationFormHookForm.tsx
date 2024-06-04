import { ChangeEventHandler, FormEventHandler, useRef, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

type FormStateType = {
  email: string;
  password: string;
  language: string;
};

const RegistrationFormHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>();

  const sendForm: SubmitHandler<FormStateType> = (data) => {
    console.log({ data });
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input
        {...register("email")}
        label="E-mail"
        type="email"
        defaultValue="test@wp.pl"
      />
      <Input
        {...register("password", { required: true })}
        label="Password"
        type="password"
      />
      {errors.password && <p style={{ color: "red" }}>Password is required</p>}
      <Input {...register("language")} label="Language" />
      <Input label="Age" type="number" />
      <Button label="Send" type="submit" />
    </form>
  );
};

// export default RegistrationFormRefs;
export { RegistrationFormHookForm };
