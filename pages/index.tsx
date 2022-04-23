import { FC } from "react";
import { Container } from "./components/container";
import Header from "./components/header";
import {
  Layout,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
} from "./components/layout";
import { Stack } from "./components/stack";
import { useMetamask } from "./hooks/use-metamask";
import { useSkillWallet } from "./hooks/use-skill-wallet";
import Welcome from "./welcome";
import DonorPage from "./donor";
import Link from 'next/link'


export const HomePage: FC = () => {
  const metaMask = useMetamask();
  const { skillWalletData } = useSkillWallet();

  if (!metaMask.connected)
    return <p>Please connect to Metamask before proceeding.</p>;

  return (
    <Layout>
      <LayoutHeader>
        <Container>
        <>
          <Header skillWalletData={skillWalletData} />
          {skillWalletData && skillWalletData.nickname === "becky" ? 
          <Container>
            <DonorPage  skillWalletData={skillWalletData}/>
          </Container>
          :<Container><Welcome skillWalletData={skillWalletData}/></Container>
        }
        </>
        </Container>
      </LayoutHeader>
      <LayoutMain>
        <Container>
          <></>
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
  );
};

export default HomePage;
