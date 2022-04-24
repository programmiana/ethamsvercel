import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../styles/styles";

import { Banner } from "./components/banner";
import { Stack } from "./components/stack";

const StyledLink = styled.a`
  padding: 2rem 4rem;
  border: 1px solid ${Colors.brandSecondary};
  color: ${Colors.brandSecondary};
  cursor: pointer;
  background-color: transparent;
`;
const StyledLinkSecondary = styled.a`
  padding: 2rem 4rem;
  border: 1px solid ${Colors.brandSecondary};
  color: ${Colors.black};
  cursor: pointer;
  background-color: ${Colors.brandSecondary};
`;

export const Landing: FC = () => {
  return (
    <Stack flow="row" gap={5}>
      <Banner />
      <Stack justifyContent="center" gap={5}>
        <Link href="/works">
          <StyledLinkSecondary>How it works</StyledLinkSecondary>
        </Link>
        <Link href="/buy">
          <StyledLink>Get minting</StyledLink>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Landing;
