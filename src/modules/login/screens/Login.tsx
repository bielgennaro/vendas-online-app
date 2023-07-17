import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import Text from '../../../shared/components/text/Text';
import { theme } from '../../../shared/theme/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text />
        <Input />
        <Button title="ENTRAR" margin="18px" type={theme.buttons.buttonsTheme.primary}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
