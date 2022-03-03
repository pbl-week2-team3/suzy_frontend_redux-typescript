import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

interface TextProps {
  _onClick?: React.MouseEventHandler<HTMLDivElement>;
  font?: string;
  bold?: boolean;
  color?: string;
  size?: string | number;
  margin?: string | number;
  children?: any;
}

const Text = (props: TextProps) => {
  const { _onClick, font, bold, color, size, margin, children } = props;

  const styles = {
    font: font,
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  font: "san-serif",
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: "0px",
};

const P = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  margin: ${(props) => props.margin};

  ${(props) =>
    props._onClick
      ? css`
          cursor: pointer;
        `
      : css``}
`;

export default Text;
