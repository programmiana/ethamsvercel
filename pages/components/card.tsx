import styled, { css } from "styled-components";
import { Colors } from "../../styles/styles";

export const Card = styled.div`
  padding: 1.5rem;
  border: 0.1rem solid transparent;
  background-color: transparent;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);
`;

export const interactiveCardStyle = css`
  &:hover,
  &:focus {
    background-color: ${Colors.brandSecondary};
    cursor: pointer;
  }
`;

export const SelectableCard = styled(Card)`
  ${interactiveCardStyle};
  border-color: ${(props) => props["aria-checked"] && Colors.brandPrimaryLight};
`;
