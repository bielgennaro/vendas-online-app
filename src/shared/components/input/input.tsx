import { TextInputProps } from 'react-native';
import { theme } from '../../theme/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ContainerInput } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({title, ...props}: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (<Text margin='0px 0px 4px 14px'type={TextTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.grayTheme.gray100}>{title}</Text>)}
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  )
}

export default Input;