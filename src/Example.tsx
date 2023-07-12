import { useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';


interface ExampleProps {
  text: string;
}

const Example = ({text}: ExampleProps)  => {
  const [newText, setNewText] = useState<string>();
  
  const handleOnPress = () => {
    setNewText("TEXTO ALTERADO");
  };

  return (
    <SafeAreaView>
      <Text>{text}</Text>
      <Text>{newText||text}</Text>
      <Button onPress={handleOnPress} title="BOTAO"/>
    </SafeAreaView>
  )
}

export default Example;