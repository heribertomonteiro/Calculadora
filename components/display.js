import { StyleSheet, Text, View } from 'react-native';

export default function Display() {
    return (
        //Aqui é o display da calculadora, onde eu defino o estilo do display e o valor inicial dele
        <View style={styles.display}>
            <Text style={styles.displayValue}>0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    //Aqui é o estilo do display, onde eu defino o tamanho, a cor de fundo, a cor da fonte, e a posição do texto
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#b5b5b5',
        alignItems: 'flex-end',
    },

    displayValue: {
    //Aqui é o estilo do texto do display, onde eu defino o tamanho, a cor da fonte, a fonte e a cor do texto
        fontSize: 60,
        color: '#ffff',
        fontFamily: 'Roboto_300Light',
    }
})