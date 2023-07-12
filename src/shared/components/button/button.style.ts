import styled from "styled-components/native";

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  ${(props: { margin: string; }) => props.margin && `margin: ${props.margin};`}
`