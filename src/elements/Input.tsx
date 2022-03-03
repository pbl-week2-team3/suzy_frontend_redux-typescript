import React from "react";
import styled from "styled-components";

import { Text } from ".";

interface InputProps {
  _onChange?: React.ChangeEventHandler<HTMLInputElement>;
  _type?: string;
  width?: number;
  height?: number;
  label?: string;
  placeholder?: string;
  children?: string | number;
  value?: string | number;
}

const Input = (props: InputProps) => {
  const { _onChange, _type, width, height, label, placeholder, children } =
    props;

  const styles = {
    width: width,
    height: height,
  };

  return (
    <>
      <Text bold>{label}</Text>
      <I
        onChange={_onChange}
        type={_type}
        {...styles}
        placeholder={placeholder}
      >
        {children}
      </I>
    </>
  );
};

Input.defaultProps = {
  width: "100%",
  height: 30,
  children: null,
  label: null,
  placeholder: null,
};

const I = styled.input<InputProps>`
  width: calc(${(props) => props.width} - 8px);
  height: ${(props) => props.height}px;
`;

export default Input;
