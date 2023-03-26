import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { configureAmplify } from "../../amplify";

export default function App({ Component, pageProps }) {
  configureAmplify();
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
