import { FC } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../../styles/styles";

const sharedTransition = css`
  transition: color 0.35s, background-color 0.35s, border-color 0.35s;
`;

const ButtonStyle = styled.button<{ primary?: boolean; disabled: boolean }>`
  ${sharedTransition};
  padding: 2rem 4rem;
  border: none;
  border-radius: 2%;
  ${({ primary }) =>
    primary &&
    css`
      background-color: ${Colors.brandSecondary};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      box-shadow: none;
      background-color: ${Colors.inactive};
      color: ${Colors.brandSecondary};
    `}
`;

type ButtonProps = {
  text: string;
  primary?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  disabled = false,
  text,
  primary = true,
  onClick,
}) => {
  return (
    <ButtonStyle onClick={onClick} primary={primary} disabled={disabled}>
      <strong>{text}</strong>
    </ButtonStyle>
  );
};
