import { useState, useReducer } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { useAuthStore } from "../store/authStore";
import { login as loginService } from "../services/authService";
import { useAuthReducer } from "../contexts/AuthReducerContext";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/authStoreRedux";
import { loginRedux } from "../slices/userSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const { dispatch: dispatchAuth } = useAuthReducer();
  const { t } = useTranslation();
  const [loginError, setLoginError] = useState(false);
  const login = useAuthStore((state) => state.login);
  const dispatch = useDispatch<AppDispatch>();

  const loginSchema = yup.object({
    email: yup
      .string()
      .email(t("login.invalidEmail"))
      .required(t("login.requiredEmail")),
    password: yup
      .string()
      .min(6, t("login.invalidPassword"))
      .required(t("login.requiredPassword")),
  });

  const formik = useFormik({
    initialValues: {
      email: "admin@example.com",
      password: "password123",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const responseLogin = await loginService(values.email, values.password);
      if (!responseLogin) {
        setLoginError(true);
        formik.resetForm();
        return;
      }
      dispatch(loginRedux(responseLogin));
      dispatchAuth({
        type: "LOGIN",
        payload: { name: "Paul", last_name: "Landaeta" },
      });
      login(responseLogin);
      navigate("/app/dashboard", {
        replace: true,
      });
    },
  });

  return {
    loginError,
    setLoginError,
    formik,
  };
};
