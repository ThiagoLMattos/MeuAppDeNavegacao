import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [erroLogin, setErroLogin] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    const validarTexto = (texto, setErro) => {
        const textoMod = texto.trim();
        if (texto.length === 0) {
            setErro('Não deixe em branco'); // Caso o usuário não tenha digitado nada
        } else if (textoMod.length !== texto.length || texto.includes(' ')) {
            setErro('Digite um valor válido (evite espaços extras)'); // Se houver espaços no início ou fim
        } else {
            setErro('');
        }
    }

    return (
        <View style={styles.formContainer}>
            <Image source={require('../../assets/hill.png')} style={[styles.hill,{ width: {windowWidth} }]} />
            <Image source={require('../../assets/tree.png')} style={styles.tree} />
            <Text style={styles.title}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#999"
                onChangeText={(texto) => validarTexto(texto, setErroLogin)}
            />
            {erroLogin ? <Text style={styles.erro}>{erroLogin}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                onChangeText={(texto) => validarTexto(texto, setErroSenha)}
            />
            {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#E9F7EF',
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#B3E5FC',
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: '#dda0dd',
        margin: 10,
        borderRadius: 5,
    },
    input: {
        height: 48,
        borderColor: '#B8E2C8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: '#FDFDFD       ',
        color: '#333',
    },
    button: {
        backgroundColor: '#82C79F',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tree: {
        position: 'absolute',
        bottom: 50,
        left: 30,
        width: 170,  // Aumentando a largura
        height: 200,  // Aumentando a altura
        resizeMode: 'contain',
    },
    hill: {
        position: 'absolute',
        bottom: 40,
        left: 3,
        height: 200,  // Aumentando a altura
        resizeMode: 'contain',
    },
    erro: {
        color: 'red',
        marginBottom: 8,
        marginTop: -8,
        fontSize: 14,
    },
});
