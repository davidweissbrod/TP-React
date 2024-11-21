import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TextoContacto() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>¡Sigamos en contacto!</Text>
            <Text style={styles.text}>
                Consulta lo que necesites a través del formulario o enviándonos un mail a algunos de nuestros correos personales.
            </Text>
            <Text style={styles.text}>¡Gracias por visitar nuestro sitio web!</Text>
            <Text style={styles.email}>Email David Weissbrod: david.weissbrod@gmail.com</Text>
            <Text style={styles.email}>Email Ian Roitman: iianroitman@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20, 
        padding: 10, 
        backgroundColor: '#f9f9f9', 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 3, 
    },
    header: {
        fontSize: 20, // Tamaño del encabezado
        fontWeight: 'bold', // Texto en negrita
        color: '#333', // Color del texto
        textAlign: 'center', // Centrado
        marginBottom: 10, // Espaciado debajo del encabezado
    },
    text: {
        fontSize: 16, // Tamaño del texto
        lineHeight: 22, // Espaciado entre líneas
        color: '#555', // Color del texto
        textAlign: 'center', // Centrado
        marginBottom: 10, // Espaciado debajo del texto
    },
    email: {
        fontSize: 16, // Tamaño del texto
        color: '#007bff', // Color azul similar a un enlace
        textAlign: 'center', // Centrado
        textDecorationLine: 'underline', // Subrayado para simular un enlace
        marginBottom: 5, // Espaciado debajo del correo
    },
});

export default TextoContacto;
