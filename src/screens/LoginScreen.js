import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TreeAnimated from '../components/TreeAnimated';
import CloudAnimated from '../components/CloudAnimated';


export default function LoginScreen({ navigation }) {
    const [login, setLogin] = useState('');
    const [loginInserido, setLoginInserido] = useState('');
    const [senha, setSenha] = useState('');
    const [visivel, setvisivel] = useState(false);
    const [senhaInserida, setSenhaInserida] = useState('');
    const [erroLogin, setErroLogin] = useState('');
    const [erroSenha, setErroSenha] = useState('');


    useEffect(() => {
        const verificarLogin = async () => {
            try {
                const logado = await AsyncStorage.getItem('logado');
                if (logado === 'true') {
                    navigation.navigate('Home');
                }
            } catch (error) {
                console.error('Erro ao verificar estado de login', error);
            }
        };

        verificarLogin();
    }, []);

    const validarTexto = (texto, setErro) => {
        const textoMod = texto.trim();
        if (texto.length === 0) {
            setErro('Não deixe em branco');
        } else if (textoMod.length !== texto.length || texto.includes(' ')) {
            setErro('Digite um valor válido (evite espaços extras)');
        } else {
            setErro('');
        }
    }

    const conferirLogin = async (login, senha) => {
        if (login.trim() === '' || senha.trim() === '' || login.includes(' ') || senha.includes(' ')) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        if (erroLogin === '' || erroSenha === '') {
            console.log(loginInserido, senhaInserida)
            try {
                const usuarioSalvo = await AsyncStorage.getItem('user');
                if (usuarioSalvo) {
                    const { login, senha } = JSON.parse(usuarioSalvo);
                    console.log(login, senha);

                    if (loginInserido === login && senhaInserida === senha) {
                        await AsyncStorage.setItem('logado', 'true');
                        alert('Login bem-sucedido!');
                        console.log('Usuário autenticado:', login);
                        navigation.navigate('Home');

                    } else {
                        alert('Usuário ou senha incorretos!');
                    }
                } else {
                    alert('Nenhum usuário cadastrado.');
                }
            } catch (error) {
                console.error('Erro ao verificar login', error);
            }
        }
    };
    return (
        <View style={styles.formContainer}>
            <CloudAnimated style={styles.clouds} />
            <Image source={require('../../assets/hill.png')} style={styles.hill} />
            <TreeAnimated style={styles.tree} />
            <View style={styles.interactContainer}>
                <Text style={styles.title}>Login Screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    placeholderTextColor="#999"
                    onChangeText={(texto) => {
                        validarTexto(texto, setErroLogin)
                        setLoginInserido(texto)
                    }
                    }
                />
                {erroLogin ? <Text style={styles.erro}>{erroLogin}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry={!visivel}
                    onChangeText={(texto) => {
                        validarTexto(texto, setErroSenha)
                        setSenhaInserida(texto)
                    }
                    }

                />
                <TouchableOpacity onPress={() => setvisivel(!visivel)} style={styles.visibilityButton}>
                    <Text>{visivel ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
                {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={() => conferirLogin(loginInserido, senhaInserida)}>
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
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
        alignItems: 'center',
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
    visibilityButton: {
        position: 'absolute',
        right: 15,
        top: 135,
        padding: 8,
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
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
        fontSize: 9,
        margin: 10,
        fontWeight: 'bold',
    },
    tree: {
        position: 'absolute',
        bottom: 15,
        right: 175,
        width: 250, 
        height: 300,  
        resizeMode: 'stretch',
    },
    hill: {
        position: 'absolute',
        left: 3,
        top: 295,
        width: windowWidth,
        height: 600, 
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
