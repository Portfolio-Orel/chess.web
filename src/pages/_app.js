import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { configureAmplify } from "../amplify";
import Snackbar from "@/components/Snackbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "he",
  resources: {
    en: { translation: require("../../localization/en.json") },
    he: { translation: require("../../localization/he.json") },
  },
});

export default function App({ Component, pageProps }) {
  document.body.dir = i18n.dir();
  configureAmplify();

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Component {...pageProps} />
        <Snackbar />
      </LocalizationProvider>
    </Provider>
  );
}
