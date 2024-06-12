import { ChangeEventHandler, FormEventHandler, useRef, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Text } from "../../ui";

// RegistrationFormRefs
// RegistrationFormHooks

const validationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(5, "Password must be max 5 characters"),
  language: z.string().min(1, "Filed is required"),
  age: z.number().min(18),
});

// type CreateUserDto = z.infer<typeof validationSchema>;
type FormStateType = z.infer<typeof validationSchema>;

// type FormStateType = {
//   email: string;
//   password: string;
//   language: string;
//   age: number;
// };

// try {
//   validationSchema.parse({
//     email: "test@wp.pl",
//     password: "123444",
//     language: "java",
//     age: 19,
//   });
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.flatten());
//   }
// }

// const result = validationSchema.safeParse({
//   email: "test@wp.pl",
//   password: "123444",
//   language: "java",
//   age: 19,
// });
// if (!result.success) {
//   // error
//   console.log(result.error.flatten());
// }

const RegistrationFormHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(validationSchema),
    // reValidateMode: "onSubmit",
  });

  const sendForm: SubmitHandler<FormStateType> = (data) => {
    console.log({ data });
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input
        {...register("email")}
        label="E-mail"
        // type="email"
        // defaultValue="test@wp.pl"
        error={errors.email}
      />
      <Input
        {...register("password")}
        error={errors.password}
        label="Password"
        type="password"
      />
      <Input
        {...register("language")}
        error={errors.language}
        label="Language"
      />
      <Input
        {...register("age", { valueAsNumber: true })}
        error={errors.age}
        label="Age"
        type="number"
      />
      <Button label="Send" type="submit" />
    </form>
  );
};

// export default RegistrationFormRefs;
export { RegistrationFormHookForm };
