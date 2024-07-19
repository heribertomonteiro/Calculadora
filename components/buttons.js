import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({

    //Aqui é o estilo dos botões da calculadora, onde eu defino o tamanho, a cor, a fonte e a borda
    button: {
        fontSize: 40,

        //Aqui eu defino a altura dos botões de acordo com o tamanho da tela e se a tela for maior que 700px de largura, o altura do botão será 1/8 da largura da tela, se não, será 1/4 da largura da tela
        height: (Dimensions.get('window').width >= 700) ? Dimensions.get('window').width / 8 : Dimensions.get('window').width / 4,

        //Aqui é a largura dos botões, nesse caso é 1/4 da largura da tela
        width: Dimensions.get('window').width / 4,

        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        fontFamily: 'Roboto_300Light',
    },
    
    //Aqui é o estilo dos botões de operação, onde eu defino a cor de fundo e a cor da fonte
    operationButton: {
        color: '#ffff',
        backgroundColor: '#fa8231',
    },
    
    //Aqui é para alterar o tamanho dos botões, nesse caso ele fica 2/4 da tela, ocupando o lugar de 2 botões
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    
    //Aqui também é para alterar o tamanho dos botões, nesse caso ele fica 3/4 da tela, ocupando o lugar de 3 botões
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default function Buttons(props) {
    const styleButtons = [styles.button]

    //Aqui eu defino as propriedades dos botões, se ele for double, triple ou operation adicionando essa propiedade ao array de estilos criado acima
    if (props.double){styleButtons.push(styles.buttonDouble)}
    else if (props.triple){styleButtons.push(styles.buttonTriple)}
    else if (props.operation){styleButtons.push(styles.operationButton)}

    return (
        //Aqui eu defino o botão e o texto do botão
        <TouchableOpacity>
            <Text style={styleButtons}>{props.label}</Text>
        </TouchableOpacity>
    );
}