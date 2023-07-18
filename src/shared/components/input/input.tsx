import { TextInputProps } from 'react-native';
import { theme } from '../../theme/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { TextTypes } from '../text/textTypes';
import { ContainerInput } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({title, errorMessage, ...props}: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (<Text margin='0px 0px 4px 14px' type={TextTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.grayTheme.gray100}>{title}</Text>)}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text margin='2px 0px 0px 8px' color={theme.colors.orangeTheme.orange80} type={TextTypes.PARAGRAPH_SMALL_REGULAR}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  )
}

export default Input;