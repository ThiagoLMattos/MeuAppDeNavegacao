import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.texto}>
                Esta é a tela de perfil 😯.
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details ⚙️"
                    onPress={() => navigation.navigate('Details')}
                />
                <Button
                    title="Go Back ◀️"
                    onPress={() => navigation.goBack()}
                />
            </View>
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
    texto: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: '#333',
    },
    buttonContainer: {
        backgroundColor: '#dda0dd',
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});