import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text`
font-size: 20px;
color: black;
`

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <TextNew>TESTE</TextNew>
    </SafeAreaView>
  );
};

export default App;