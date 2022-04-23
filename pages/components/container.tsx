import { FC, ReactChild } from "react";

import styled, { css } from "styled-components";
import { Breakpoints } from "../../styles/styles";

const fullwidthStyle = css`
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const responsiveStyle = css`
  width: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (${Breakpoints.minTablet}) {
    width: 75rem;
  }

  @media (${Breakpoints.minDesktop}) {
    width: 97rem;
  }

  @media (${Breakpoints.minWideDesktop}) {
    width: 117rem;
  }
`;

const Styled = styled.div<{ fullwidth: boolean }>`
  margin-right: auto;
  margin-left: auto;

  transition: width 300ms ease-out;

  ${({ fullwidth }) => (fullwidth ? fullwidthStyle : responsiveStyle)};
`;

type Props = {
  children: ReactChild;
};
export const Container: FC<Props> = ({ children }) => {
  return <Styled fullwidth={false}>{children}</Styled>;
};
