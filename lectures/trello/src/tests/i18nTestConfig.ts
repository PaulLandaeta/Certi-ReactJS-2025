import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  debug: false,
  resources: {
    es: {
      translation: {
        login: {
          title: "Iniciar sesión",
          emailLabel: "Correo",
          passwordLabel: "Contraseña",
          button: "Entrar",
          errorToastMessage: "Hubo un error al iniciar sesión"
        }
      }
    }
  },
  interpolation: { escapeValue: false }
});

export default i18n;
