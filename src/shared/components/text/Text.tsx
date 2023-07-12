import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './text.style';
import { TextTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({color,type, ...props}: TextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case TextTypes.TITLE:
          return '32px'
      default:
          return '16px'
    }
  }, [type]);
  
  return(
    <ContainerText fontSize={handleSize} color={color} {...props}/>
  )
}

export default Text;