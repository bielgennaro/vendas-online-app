import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme/theme';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ButtonSecondary, ContainerButton, GradientButton } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin}>
          <Text type={TextTypes.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
      return (
        <ContainerButton {...props} margin={margin}>
          <GradientButton start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
           <Text type={TextTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
           </Text>
          </GradientButton>
        </ContainerButton>
      );
  }
};

export default Button;
