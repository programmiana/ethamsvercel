import { FC } from "react";

import { Banner } from "./components/banner";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Stack } from "./components/stack";
import { SkillWallet } from "./types";
import React, { useState } from 'react';
import { useSkillWallet } from "./hooks/use-skill-wallet";


type DonorProps = {
  skillWalletData: SkillWallet;
};




export const DonorPage: FC<DonorProps> = ({ skillWalletData }) => {
  const [count, setCount] = useState<number>(0);

 
  if (!skillWalletData) return <Banner />;

  return (

    <Card>
      <Stack gap={2} flow="row" justifyContent="start">

        
        <Button onClick={() => console.log("clicked") } text={"Purchase tokens "}/>
      
        
        <span>
          <h1>Welcome donor Becky,</h1>
          <p>you can now buy books.</p>
          </span>
          <button onClick={() => setCount(count - 1)}>
        Less token
      </button>
      <button onClick={() => setCount(count + 1)}>
      More token
      </button>

      <p>Are you ready to purchase {count + 78375} books?</p>

        <Stack>
          
        </Stack>
      </Stack>
      
    </Card>
  );
};

export default DonorPage;