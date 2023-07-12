import { Text, TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({title,margin, ...props}: ButtonProps) => {
  return (
    <ContainerButton {...props} margin={margin}>
      <Text>{title}</Text>
    </ContainerButton>
  )
}

export default Button;