import "../styles/globals.css";
import { GlobalStyle } from "../styles/styles";
import { Container } from "./components/container";
import Header from "./components/header";
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
} from "./components/layout";
import { Stack } from "./components/stack";
import { useSkillWallet } from "./hooks/use-skill-wallet";

function MyApp({ Component, pageProps }) {
  const { skillWalletData, connected } = useSkillWallet();
  if (!skillWalletData) return <Header skillWalletData={skillWalletData} />;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <LayoutHeader>
          <Container>
            <Header skillWalletData={skillWalletData} />
          </Container>
        </LayoutHeader>
        <LayoutMain>
          <Container>
            <Component {...pageProps} />
          </Container>
        </LayoutMain>
        <LayoutFooter>
          <Stack justifyContent="end" gap={5} alignItems="center">
            <p>Stuff</p>
            <p>Stuff</p>
            <p>Stuff</p>
          </Stack>
        </LayoutFooter>
      </Layout>
    </>
  );
}

export default MyApp;
