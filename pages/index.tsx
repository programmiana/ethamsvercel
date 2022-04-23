import { FC } from "react";
import { Container } from "./components/container";
import {
  Layout,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
} from "./components/layout";
import { Stack } from "./components/stack";
import { SVGMain } from "./components/svg-main";
import Header from "./header";
import { useMetamask } from "./hooks/use-metamask";
import Welcome from "./welcome";

export const HomePage: FC = () => {
  const metaMask = useMetamask();

  console.log(metaMask);
  if (!metaMask.connected)
    return <p>Please connect to Metamask before proceeding.</p>;
  return (
    <Layout>
      <LayoutHeader>
        <Container>
          <Header />
        </Container>
      </LayoutHeader>
      <LayoutMain>
        <Welcome
          eth={metaMask.eth}
          connected={metaMask.connected}
          web3Provider={metaMask.web3Provider}
          selectedAccount={metaMask.selectedAccount}
        />
      </LayoutMain>
      <LayoutFooter>
        <Stack> </Stack>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
        <p>Stuff</p>
      </LayoutFooter>
    </Layout>
  );
};

export default HomePage;
