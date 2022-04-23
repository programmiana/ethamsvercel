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
import { useSkillWallet } from "./hooks/use-skill-wallet";

export const HomePage: FC = () => {
  const metaMask = useMetamask();

  const data = useSkillWallet();

  if (!metaMask.connected)
    return <p>Please connect to Metamask before proceeding.</p>;

  console.log(data);
  return (
    <Layout>
      <LayoutHeader>
        <Container>
          <Header />
        </Container>
      </LayoutHeader>
      <LayoutMain>
        <div>
          <sw-auth
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
