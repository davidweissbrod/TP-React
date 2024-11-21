import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EducacionBasico() {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Escuela ORT</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Ciclo Básico 2019/2020 - 2021</Text>
                <Text style={styles.text}>
                    Durante este periodo, de primer año a segundo, nos enseñaron las bases de los entendimientos básicos para 
                    nuestra elección en segundo año a la especialización. En nuestro caso, la materia "Tecnología" que vimos 
                    durante este ciclo nos ayudó a entender en los primeros años de la especialidad de informática los conceptos vistos.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', // Fondo blanco
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
        padding: 10, // Espaciado interno
    },
    title: {
        fontSize: 16, // Tamaño del título
        fontWeight: 'bold', // Negrita
        marginBottom: 10, // Separación inferior
        color: '#333',
    },
    text: {
        fontSize: 14, // Tamaño del texto
        lineHeight: 20, // Espaciado entre líneas
        color: '#555',
    },
});

export default EducacionBasico;
