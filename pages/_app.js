import "../styles/globals.css";
import "../styles/scss/bootstrap.scss";
import { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
