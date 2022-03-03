import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

interface LoadingSpinnerProps {
  width?: number | string;
  height?: number | string;
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { width, height } = props;

  const styles = {
    width: width,
    height: height,
  };

  return (
    <Outer {...styles}>
      <CircularProgress />
    </Outer>
  );
};

LoadingSpinner.defaultProps = {
  width: "100vw",
  height: "100vh",
};

const Outer = styled.div<LoadingSpinnerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export default LoadingSpinner;
