import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../pages/Login";
import { useLogin } from "../hooks/useLogin";
import i18n from "./i18nTestConfig";
import { I18nextProvider } from "react-i18next";

jest.mock("../hooks/useLogin");

const mockHandleSubmit = jest.fn();
const mockSetLoginError = jest.fn();

beforeEach(() => {
  (useLogin as jest.Mock).mockReturnValue({
    loginError: false,
    setLoginError: mockSetLoginError,
    formik: {
      handleSubmit: mockHandleSubmit,
      handleChange: jest.fn(),
      values: { email: "", password: "" },
      touched: {},
      errors: {},
    },
  });
});

const renderWithI18n = () => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LoginPage />
    </I18nextProvider>
  );
};

test("Renderizar el input y boton", () =>{
    renderWithI18n();
    
    const emailInput = screen.getByLabelText("Correo");
    const passwordInput = screen.getByLabelText("Contraseña");
    const submitButton = screen.getByRole("button", { name: "Entrar" });
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("mostrar toast de error al iniciar sesión", async () => {
  (useLogin as jest.Mock).mockReturnValue({
    loginError: true,
    setLoginError: mockSetLoginError,
    formik: {
      handleSubmit: mockHandleSubmit,
      handleChange: jest.fn(),
      values: { email: "", password: "" },
      touched: {},
      errors: {},
    },
  });

  renderWithI18n();

  const toastMessage = screen.getByText("Hubo un error al iniciar sesión");
  expect(toastMessage).toBeInTheDocument();
});