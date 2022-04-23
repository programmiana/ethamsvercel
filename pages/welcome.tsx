import { FC } from "react";
import { Card } from "./components/card";
import { useMetamask } from "./hooks/use-metamask";

type WelcomeProps = {
  eth: boolean;
  connected: boolean;
  web3Provider: any;
  selectedAccount: string;
};
export const Welcome: FC<WelcomeProps> = ({
  eth,
  connected,
  web3Provider,
  selectedAccount,
}) => {
  return (
    <Card>
      <h1>Welcome to Proofread</h1>
      <p>Hi, you are currently logged in with {selectedAccount}</p>
    </Card>
  );
};

export default Welcome;
