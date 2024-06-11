import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../ui";
import { createProduct } from "../services/products";

const validationSchema = z.object({
  name: z.string().min(3, "Name should contain at least 3 characters"),
  description: z
    .string()
    .min(3, "Description should contain at least 3 characters"),
  price: z.number().min(1, "Price should contain at least 1 number"),
});

// type CreateUserDto = z.infer<typeof validationSchema>;
type FormStateType = z.infer<typeof validationSchema>;

export const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(validationSchema),
  });

  const sendForm: SubmitHandler<FormStateType> = (data) => {
    console.log({ data });
    createProduct(data);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input {...register("name")} label="Name" error={errors.name} />
      <Input
        {...register("description")}
        error={errors.description}
        label="Description"
      />
      <Input
        {...register("price", { valueAsNumber: true })}
        error={errors.price}
        label="Price"
      />
      <Button label="Send" type="submit" />
    </form>
  );
};
