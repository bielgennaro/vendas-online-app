import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { theme } from "../../theme/theme";

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  ${(props: { margin: any; })=> (props.margin ? `margin: ${props.margin};` : '')}
  `

export const ButtonSecondary = styled(ContainerButton)<ContainerButtonProps>`
  background-color: transparent;
  border-width: 1.5px;
  border-color: ${theme.colors.mainTheme.primary};
  ${(props: { margin: any; })=> (props.margin ? `margin: ${props.margin};` : '')}
`

export const GradientButton = styled(LinearGradient)<ContainerButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  ${(props: { margin: any; })=> (props.margin ? `margin: ${props.margin};` : '')}
`
