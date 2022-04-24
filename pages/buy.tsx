import { FC } from "react";
import Header from "./components/header";
import Donor from "./donor";
import { useMetamask } from "./hooks/use-metamask";
import { useSkillWallet } from "./hooks/use-skill-wallet";
import Welcome from "./welcome";

export const HomePage: FC = () => {
  const metaMask = useMetamask();
  const { skillWalletData, connected } = useSkillWallet();

  if (!metaMask.connected)
    return <p>Please connect to Metamask before proceeding.</p>;

  if (!skillWalletData) return <Header skillWalletData={skillWalletData} />;
  console.log(connected);
  return (
    <>
      {skillWalletData && skillWalletData.isCoreTeamMember ? (
        <Welcome skillWalletData={skillWalletData} />
      ) : (
        <Donor skillWalletData={skillWalletData} />
      )}
    </>
  );
};

export default HomePage;
