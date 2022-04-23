import "../styles/globals.css";
import { GlobalStyle } from "../styles/styles";
import { InitSwAuth } from "@skill-wallet/auth";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState();
  useEffect(() => {
    InitSwAuth();

    console.log(InitSwAuth());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
