import { FC } from "react";
import { Container } from "./components/container";
import {
  Layout,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
} from "./components/layout";
import { Stack } from "./components/stack";
import Header from "./header";
import { useMetamask } from "./hooks/use-metamask";
import Welcome from "./welcome";
import sessionStorage from "sessionstorage";

export const HomePage: FC = () => {
  const metaMask = useMetamask();

  const skillWalletData = sessionStorage.getItem("skillWallet");

  console.log(`skillwallet:${skillWalletData}`);

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
        <div>
          <Sw-auth
            partner-key="959811d56b636af13b6cb46a240d6ac4aebe42d5"
            use-dev="true"
          />
        </div>
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
