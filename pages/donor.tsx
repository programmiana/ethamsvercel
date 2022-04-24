import { FC, useEffect } from "react";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Stack } from "./components/stack";
import { SkillWallet } from "./types";
import React, { useState } from "react";
import { BookImage } from "./components/book-image";
import { ConfettiButton } from "./components/confetti";
import { useRouter } from "next/router";

type DonorProps = {
  skillWalletData: SkillWallet;
};

export const DonorPage: FC<DonorProps> = ({ skillWalletData }) => {
  const [count, setCount] = useState<number>(0);
  const [buy, setBuy] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean | null>(null);
  const [next, setNext] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!buy) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setNext(true);
    }, 2000);
  }, [buy]);

  return (
    <>
      <Card>
        <Stack flow="row" gap={5}>
          <span>
            <h1>Welcome {skillWalletData.nickname}</h1>
          </span>

          <Stack
            alignItems="start"
            templateColumns="1fr 1fr"
            justifyContent="start"
            gap={5}
          >
            <Stack gap={2} flow="row" justifyContent="space-between">
              <span>
                <h2>Book of the week</h2>
                <br />
                <strong>Impact DAOs</strong>
                <p>by @Aleborda</p>
              </span>
              <span>
                <small>
                  The community around the book GreenPilled - How Crypto Can
                  Regenerate the World (available at https://greenpill.party)
                  has envisioned that web3 has the potential to regenerate the
                  world. With the GreenPilled book, we have established a
                  digestible source of a priori knowledge (theoretical
                  knowledge) of how we might use a transparent, immutable,
                  global, and programmable financial system with $2 trillion
                  worth of capital to regenerate the world.
                  <br />
                  This capital could build a digital commons, create flourishing
                  digital democracies, and support both local & global public
                  goods. A priori knowledge is great, but what has been missing
                  from the conversation thus far is empirical knowledge
                  (knowledge obtained from observation) of how crypto can
                  regenerate the world. That’s where this book, and the projects
                  within it, comes in.
                </small>
              </span>

              <ConfettiButton setFire={buy} />
              <Stack justifyContent="start" gap={1}>
                <Button
                  onClick={() => {
                    setBuy(true);
                    router.push("/donated");
                  }}
                  text={buy ? "Minted" : "Mint"}
                  disabled={buy}
                />
              </Stack>
            </Stack>

            <div style={{ width: "50vh", height: "auto" }}>
              <BookImage />
            </div>
          </Stack>
        </Stack>
      </Card>
    </>
  );
};

export default DonorPage;
