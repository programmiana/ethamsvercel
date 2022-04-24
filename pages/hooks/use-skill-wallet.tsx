import { InitSwAuth } from "@skill-wallet/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useLocation } from "react-rouster";
import { SkillWallet } from "../types";

export function useSkillWallet() {
  const [skillWalletData, setSkillWalletData] = useState<SkillWallet | null>(
    null
  );
  const [connected, setConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    InitSwAuth();
    const skillWallet = sessionStorage.getItem("skillWallet" || null);

    setSkillWalletData(JSON.parse(skillWallet));
    setConnected(Boolean(skillWallet));
  }, [connected]);

  return { skillWalletData, connected };
}
