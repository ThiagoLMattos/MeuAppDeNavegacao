import React, { useState} from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function DetailsScreen({ navigation}) {
    const windowWidth = Dimensions.get('window').width;
    const [erroLogin, setErroLogin] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    const validarTexto = (texto, setErro) => {
        const textoMod = texto.trim();
        if (texto.length === 0) {
            setErro('Digite um texto'); // Caso o usuário não tenha digitado nada
        } else if (textoMod.length !== texto.length || texto.includes(' ')) {
            setErro('Digite um valor válido (evite espaços extras)'); // Se houver espaços no início ou fim
        } else {
            setErro('');
        }
    }

    return (
        <View style={styles.formContainer}>
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
            <Button
                title="Fazer login"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#dda0dd',
        margin: 10,
        borderRadius: 5,
    },
    input: {
        height: 48,
        borderColor: '#A3D9A5',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
        color: '#333',
    },
});
