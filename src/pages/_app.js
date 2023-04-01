import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { configureAmplify } from "../amplify";
import Snackbar from "@/components/Snackbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function App({ Component, pageProps }) {
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
