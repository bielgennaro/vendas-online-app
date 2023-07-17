import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme/theme';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import {
  ActivityIndicatorButton,
  ButtonDisabled,
  ButtonSecondary,
  ContainerButton,
  GradientButton,
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, loading, disabled, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
     onPress();
    }
  };
  const renderText = (color: string) => (
    <>
      <Text type={TextTypes.BUTTON_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicatorButton size="large" color={theme.colors.neutralTheme.white} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    )
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
      return (
        <ContainerButton {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ContainerButton>
      );
  }
};

export default Button;
