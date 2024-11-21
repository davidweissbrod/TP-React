import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CicloSuperior() {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Bachiller Técnico con orientación en Informática
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Ciclo Superior 2022 - 2024</Text>
                <Text style={styles.text}>
                    Con la elección mutua de la orientación en Informática, trabajamos juntos desde 2022, haciendo que 
                    nos conozcamos en el ambiente laboral. Durante nuestro recorrido en la especialización de informática 
                    aprendimos: C#, Node, React, .NET, SQL, Photoshop y Illustrator.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', // Fondo blanco para la tarjeta
        borderRadius: 10, // Bordes redondeados
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Offset de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
        elevation: 5, // Sombra para Android
        margin: 20, // Margen externo
        padding: 15, // Espaciado interno
    },
    header: {
        backgroundColor: '#007bff', // Color del encabezado
        borderTopLeftRadius: 10, // Bordes redondeados superiores
        borderTopRightRadius: 10,
        padding: 10, // Espaciado interno
    },
    headerText: {
        color: '#fff', // Texto blanco
        fontSize: 18, // Tamaño del texto
        fontWeight: 'bold', // Negrita
        textAlign: 'center', // Centrado
    },
    body: {
        padding: 10, // Espaciado interno en el cuerpo
    },
    title: {
        fontSize: 16, // Tamaño del título
        fontWeight: 'bold', // Negrita
        marginBottom: 10, // Espaciado inferior
        color: '#333', // Color del texto
    },
    text: {
        fontSize: 14, // Tamaño del texto del cuerpo
        lineHeight: 20, // Espaciado entre líneas
        color: '#555', // Color del texto
    },
});

export default CicloSuperior;
