import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './text.style';
import { TextTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ margin, color, type, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case TextTypes.BUTTON_BOLD:
      case TextTypes.BUTTON_LIGHT:
      case TextTypes.BUTTON_REGULAR:
        return '18px'
      case TextTypes.TITLE_BOLD:
      case TextTypes.TITLE_LIGHT:
      case TextTypes.TITLE_REGULAR:
        return '24px';
      case TextTypes.SUBTITLE_BOLD:
      case TextTypes.SUBTITLE_LIGHT:
      case TextTypes.SUBTITLE_REGULAR:
        return '20px';
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_REGULAR:
        return '10px';
      case TextTypes.PARAGRAPH_SMALL_BOLD:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE_BOLD:
      case TextTypes.BUTTON_BOLD:
      case TextTypes.SUBTITLE_BOLD:
      case TextTypes.PARAGRAPH_BOLD:
      case TextTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';
      case TextTypes.TITLE_LIGHT:
      case TextTypes.BUTTON_LIGHT:
      case TextTypes.SUBTITLE_LIGHT:
      case TextTypes.PARAGRAPH_LIGHT:
      case TextTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';
      case TextTypes.TITLE_REGULAR:
      case TextTypes.BUTTON_REGULAR:
      case TextTypes.SUBTITLE_REGULAR:
      case TextTypes.PARAGRAPH_REGULAR:
      case TextTypes.PARAGRAPH_SMALL_REGULAR:
        return 'Poppins-Regular';
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return <ContainerText margin={margin} fontFamily={fontFamily} fontSize={fontSize} color={color} {...props} />;
};

export default Text;
