import { StyleSheet, View } from 'react-native';
import Display from './components/display';
import Buttons from './components/buttons';

import { useFonts, Roboto_300Light, Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function App() {

//Aqui server para carregar a fonte roboto do google fonts
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

//Aqui é o layout da calculadora, onde estão presentes os componentes da calculadora
  return (
    <View style={styles.container}>
      <Display />
      <View style={styles.buttons}>
        <Buttons label="C" triple />
        <Buttons label="/" operation />
        <Buttons label="7" />
        <Buttons label="8" />
        <Buttons label="9" />
        <Buttons label="*" operation />
        <Buttons label="4" />
        <Buttons label="5" />
        <Buttons label="6" />
        <Buttons label="-" operation />
        <Buttons label="1" />
        <Buttons label="2" />
        <Buttons label="3" />
        <Buttons label="+" operation />
        <Buttons label="0" double />
        <Buttons label="." />
        <Buttons label="=" operation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

//Aqui é o estilo do layout da calculadora, eu defino a direção dos botões e o wrap para que eles fiquem em linha e quembrem a linha quando não couberem mais
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
