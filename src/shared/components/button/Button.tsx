import { TouchableOpacityProps } from "react-native";

import { theme } from "../../theme/theme";
import Text from "../text/Text";
import { TextTypes } from "../text/textTypes";
import { ContainerButton } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({title,margin, ...props}: ButtonProps) => {
  return (
    <ContainerButton {...props} margin={margin}>
      <Text type={TextTypes.BUTTON_BOLD}color={theme.colors.neutralTheme.white}>{title}</Text>
    </ContainerButton>
  )
}

export default Button;