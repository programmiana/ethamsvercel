import { FC } from "react";
import image from "../../public/canvas-girl.jpg";
import Image from "next/image";
import styled from "styled-components";
import { Colors } from "../../styles/styles";

const ButtonStyle = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) =>
    primary ? `${Colors.brandSecondary}` : `${Colors.brandPrimary}`};
  padding: 2rem;
  border: none;
`;

type ButtonProps = {
  text: string;
  primary?: boolean;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ text, primary = true, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} primary={primary}>
      {text}
    </ButtonStyle>
  );
};
