import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  margin?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light',
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: { color: string; }) => props.color ? `color: ${props.color};` : ''}
  padding-top: 3px;
  font-family: ${((props: { fontFamily: string; }) => props.fontFamily)};
  font-size: ${(props: { fontSize: string; }) => props.fontSize};
  ${(props: { margin: string; }) => props.margin ? `margin: ${props.margin};` : ''}
`