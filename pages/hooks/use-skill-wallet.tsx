import { InitSwAuth } from "@skill-wallet/auth";
import { useState, useEffect } from "react";
import { SkillWallet } from "../types";

export function useSkillWallet() {
  const [skillWalletData, setSkillWalletData] = useState<SkillWallet>();

  useEffect(() => {
    InitSwAuth();

    const skillWallet = sessionStorage.getItem("skillWallet");

    setSkillWalletData(JSON.parse(skillWallet));
  }, []);

  return { skillWalletData };
}
