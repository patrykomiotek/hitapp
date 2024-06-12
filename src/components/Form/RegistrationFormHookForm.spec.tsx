import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegistrationFormHookForm } from "./RegistrationFormHookForm";

describe("RegistrationFormHookForm validation checks", () => {
  it("should validate form", async () => {
    const { debug } = render(<RegistrationFormHookForm />);

    const emailField = screen.getByLabelText(/e-mail/i);
    fireEvent.change(emailField, { target: { value: "aaa" } });

    const passwordField = screen.getByLabelText(/password/i);
    fireEvent.change(passwordField, { target: { value: "bbb" } });

    const languageField = screen.getByLabelText(/language/i);
    fireEvent.change(languageField, { target: { value: "ccc" } });

    const ageField = screen.getByLabelText("Age");
    fireEvent.change(ageField, { target: { value: "19" } });

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
    // debug();
  });

  it("should validate form using userEvent", async () => {
    const { debug } = render(<RegistrationFormHookForm />);

    const emailField = screen.getByLabelText(/e-mail/i);
    await userEvent.type(emailField, "aaa");

    const passwordField = screen.getByLabelText(/password/i);
    await userEvent.type(passwordField, "bbb");

    const languageField = screen.getByLabelText(/language/i);
    await userEvent.type(languageField, "ccc");

    const ageField = screen.getByLabelText("Age");
    await userEvent.type(ageField, "19");

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
    debug();
  });
});
