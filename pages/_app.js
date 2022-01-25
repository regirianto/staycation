import "../styles/globals.css";
import "../styles/scss/bootstrap.scss";
import { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import { Provider } from "react-redux";
import store from "../config/redux/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container  overflow-hidden">
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;
