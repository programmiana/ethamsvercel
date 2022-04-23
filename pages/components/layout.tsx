import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
`;

export const LayoutHeader = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 10vh;
`;

export const LayoutMain = styled.div`
  grid-area: main;
  background: linear-gradient(
    100.87deg,
    rgba(86, 167, 216, 0.15) 0%,
    rgba(86, 167, 216, 0.08) 100%
  );
  padding-top: 1rem;
  padding-bottom: 10.5rem;
`;

export const LayoutFooter = styled.div`
  max-height: 10vh;
  grid-area: footer;
`;
