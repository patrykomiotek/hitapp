import { RegistrationFormRefs } from "./RegistrationFormRefs";
import { RefFormData } from "./types";

const initialData: RefFormData = {
  email: "foo@bar.com",
  password: "test123",
  language: "c",
};

export const FormContainer = () => {
  const handleSubmit = (data: RefFormData) => {
    console.log(data);
    // API -> data
  };

  return (
    <RegistrationFormRefs onSubmit={handleSubmit} initialData={initialData} />
  );
};
