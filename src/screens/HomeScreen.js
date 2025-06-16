import React, {useEffect} from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {

    const deslogar = async () => {
        await AsyncStorage.removeItem('logado');
        navigation.navigate('Login'); 
    };

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen 🏠</Text>
            <Text style={styles.texto}>
                Bem-vindo(a) à tela inicial 😊! Aqui você pode navegar para outras telas ou fazer logout.
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile 🧑‍🦲"
                    onPress={() => navigation.navigate('Profile')}
                />
                <Button
                    title="Logout 🚪"
                    onPress={() => deslogar()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    texto: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: '#333',
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});