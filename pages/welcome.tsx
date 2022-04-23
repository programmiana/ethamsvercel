import { FC } from "react";

import { Banner } from "./components/banner";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Stack } from "./components/stack";
import { SkillWallet } from "./types";

type WelcomeProps = {
  skillWalletData: SkillWallet;
};
export const Welcome: FC<WelcomeProps> = ({ skillWalletData }) => {
  if (!skillWalletData) return <Banner />;

  return (
    <Card>
      <Stack gap={2} flow="row" justifyContent="start">
        <span>
          <h1>Hi, {skillWalletData.nickname}!</h1>

          <p>
            You currently have {skillWalletData.diToCredits} DiTO Credits in
            your wallet.
          </p>
        </span>
        <Stack flow="row" justifyContent="start">
          <h2>Your book has arrived!</h2>
          <Button onClick={() => console.log("clicked")} text={"Unlock"} />
          {/* <Confetti width={100%} height={100%} /> */}
        </Stack>
      </Stack>
    </Card>
  );
};

export default Welcome;
