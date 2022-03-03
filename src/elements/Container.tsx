import React from "react";
import styled from "styled-components";

interface ContainerProps {
  isFlex?: boolean;
  float?: string;
  width?: number | string;
  padding?: number | string;
  margin?: number;
  background?: string;
  children?: any;
}

const Container = (props: ContainerProps) => {
  const { isFlex, float, padding, margin, background, children } = props;

  const styles = {
    isFlex: isFlex,
    padding: padding,
    margin: margin,
    background: background,
    float: float,
  };

  return (
    <React.Fragment>
      <ContainerBox {...styles}>{children}</ContainerBox>
    </React.Fragment>
  );
};

Container.defaltProps = {
  children: null,
  isFlex: false,
  width: "100%",
  padding: false,
  margin: false,
  background: false,
  float: "none",
};

const ContainerBox = styled.div<ContainerProps>`
  height: 100%;
  box-sizing: border-box;
  float: ${(props) => props.float};

  ${(props) => (props.padding ? `padding: ${props.padding}` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
    ${(props) =>
    props.background ? `background-color: ${props.background}` : ""}

    ${(props) =>
    props.isFlex
      ? `display:flex; 
				align-items: center; 
				justify-content:space-between;
				flex-wrap: wrap;
			`
      : ""}
`;

export default Container;
