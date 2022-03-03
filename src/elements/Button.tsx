import React from "react";
import styled from "styled-components";

interface ButtonProps {
  _onClick?: React.MouseEventHandler<HTMLDivElement>;
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  height?: number;
  children?: string | number;
}

const Button = (props: ButtonProps) => {
  const { _onClick, backgroundColor, color, width, height, children } = props;

  const styles = {
    backgroundColor: backgroundColor,
    color: color,
    width: width,
    height: height,
  };

  return (
    <B onClick={_onClick} {...styles}>
      {children}
    </B>
  );
};

Button.defaultProps = {
  children: null,
  backgroundColor: "#C4C4C4",
  color: "#000",
  width: 80,
  height: 40,
};

const B = styled.div<ButtonProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};

  font-size: 12px;
  color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export default Button;
