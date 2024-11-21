import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Presentacion() {
    return (
        <View style={styles.container}>
            <Image 
                source='../img/david-ian.png'
                style={styles.image}
            />
            <Text style={styles.greeting}>Hola!</Text>
            <Text style={styles.title}>Somos Ian Roitman y David Weissbrod</Text>
            <Text style={styles.description}>
                Estudiantes de la escuela ORT en la orientación de Informática
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#f5f5f5', 
    },
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 100, 
        marginBottom: 20, 
    },
    greeting: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#333',
        marginBottom: 10,
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#555',
        textAlign: 'center', 
        marginBottom: 10,
    },
    description: {
        fontSize: 16, 
        color: '#777',
        textAlign: 'center', 
        lineHeight: 22, 
    },
});

export default Presentacion;
