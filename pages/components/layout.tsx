import styled from "styled-components";
import { Colors } from "../../styles/styles";

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "main"
    "main"
    "main"
    "footer";
  grid-template-rows: auto 2fr auto;
`;

export const LayoutHeader = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  background-color: ${Colors.brandBackground};
  z-index: 2;
  /* height: 15vh; */
`;

export const LayoutMain = styled.div`
  grid-area: main;
  background-color: ${Colors.brandBackground};
  padding-top: 10rem;
  padding-bottom: 10.5rem;
`;

export const LayoutFooter = styled.div`
  /* height: 10vh; */
  background-color: ${Colors.brandBackground};
  grid-area: footer;
`;
