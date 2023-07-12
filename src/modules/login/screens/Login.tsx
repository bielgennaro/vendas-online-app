import { Text, View } from "react-native";
import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input/>
        <Button title='ENTRAR' margin="18px"/>
      </ContainerLogin>
    </View>
  )
}

export default Login;