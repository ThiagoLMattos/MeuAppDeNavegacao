import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SingupScreen({ navigation }) {
    const [login, setLogin] = useState('');
    const [loginSalvo, setLoginSalvo] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaSalva, setSenhaSalva] = useState('');
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
    const cadastrarConta = async (login, senha) => {
        if (login.trim() === '' || senha.trim() === '') {
            alert('Preencha todos os campos corretamente');
            return;
        }

        if (erroLogin === '' || erroSenha === '') {
            try {
                await AsyncStorage.setItem('user', JSON.stringify({ login, senha }));
                alert('Cadastro realizado com sucesso!');
                console.log(login, senha);
                navigation.navigate('Login');
            } catch (error) {
                console.error('Erro ao salvar os dados', error);
            }
        } else {
            alert('Preencha os campos corretamente')
        }
    };


    return (
        <View style={styles.formContainer}>
            <Image source={require('../../assets/cloud.png')} style={styles.clouds} />
            <Image source={require('../../assets/hill.png')} style={styles.hill} />
            <Image source={require('../../assets/tree.png')} style={styles.tree} />
            <View style={styles.interactContainer}>
                <Text style={styles.title}>Sign Up Screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu Login"
                    placeholderTextColor="#999"
                    onChangeText={(texto) => {
                        validarTexto(texto, setErroLogin)
                        setLogin(texto)
                    }
                    }
                />
                {erroLogin ? <Text style={styles.erro}>{erroLogin}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Crie uma senha"
                    placeholderTextColor="#999"
                    onChangeText={(texto) => {
                        validarTexto(texto, setErroSenha)
                        setSenha(texto)
                    }
                    }
                />

                <TouchableOpacity style={styles.button} onPress={() => cadastrarConta(login, senha)}>
                    <Text style={styles.buttonText}>Fazer Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        backgroundColor: '#B0E0E6',
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  // This brings content back to center
    },
    interactContainer: {
        width: windowWidth * 0.55,
        padding: 15,
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        alignItems: 'stretch',
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
        backgroundColor: '#FDFDFD',
        minwidth: '100%',
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
    linkText: {
        color: '#B3E5FC',
        fontSize: 10,
        margin: 10,
    },
    tree: {
        position: 'absolute',
        bottom: 15,
        right: 175,
        width: 250,  // Aumentando a largura
        height: 300,  // Aumentando a altura
        resizeMode: 'stretch',
    },
    hill: {
        position: 'absolute',
        left: 3,
        top: 295,
        width: windowWidth,
        height: 600,  // Aumentando a altura
        resizeMode: 'stretch',
    },
    clouds: {
        position: 'absolute',
        top: 100,
        height: 200,
        width: windowWidth * 0.8,
        resizeMode: 'stretch',
    },
    erro: {
        color: 'red',
        marginBottom: 8,
        marginTop: -8,
        fontSize: 14,
    },
});
