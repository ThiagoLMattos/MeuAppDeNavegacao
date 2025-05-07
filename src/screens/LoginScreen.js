import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation}) {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />
            <Button
                title="Fazer login"
                onPress={validarLogin()}
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
        width: windowWidth * 0.5,
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