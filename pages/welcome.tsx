import { FC, useState } from "react";
import { BookImage } from "./components/book-image";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { ConfettiButton } from "./components/confetti";
import { Stack } from "./components/stack";
import { useLoadBlockchainData } from "./hooks/use-load-blockchain-data";
import { SkillWallet } from "./types";

type WelcomeProps = {
  skillWalletData: SkillWallet;
};
export const Welcome: FC<WelcomeProps> = ({ skillWalletData }) => {
  const [minted, setMinted] = useState<boolean>(false);
  const contractData = useLoadBlockchainData();

  const handleClick = () => {
    if (!contractData) return;
    setMinted(!minted);
  };

  if (!skillWalletData) return <p>Loading...</p>;

  return (
    <Card>
      <Stack
        alignItems="start"
        templateColumns="1fr 1fr"
        justifyContent="start"
      >
        <Stack gap={2} flow="row" justifyContent="center">
          <span>
            <h1>Hi, {skillWalletData.nickname}!</h1>
            <h2>Your book has arrived.</h2>

            <p>
              You currently have {!minted ? "34567" : "0"} matic in your wallet.
            </p>
            {!minted && <p>Use them now to mint it.</p>}
          </span>

          <Stack flow="row" justifyContent="start" gap={1}>
            <Button
              onClick={handleClick}
              text={minted ? "Minted" : "Mint Book Token"}
              disabled={minted}
            />
            <ConfettiButton setFire={minted} />
          </Stack>
        </Stack>
        <>
          {minted && (
            <div style={{ width: "30vh", height: "auto" }}>
              <BookImage />
            </div>
          )}
        </>
      </Stack>
    </Card>
  );
};

export default Welcome;
