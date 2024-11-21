import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DesarrolloWeb() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/desarrollo-web.png')} // Asegúrate de usar el formato correcto de la imagen
                style={styles.image}
                alt="foto desarrollo"
            />
            <Text style={styles.text}>Desarrollo Web</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Centrar contenido horizontalmente
        margin: 20, // Margen externo
    },
    image: {
        width: 150, // Ancho de la imagen
        height: 150, // Alto de la imagen
        borderRadius: 10, // Bordes redondeados
        marginBottom: 10, // Espacio debajo de la imagen
    },
    text: {
        fontSize: 16, // Tamaño del texto
        fontWeight: 'bold', // Texto en negrita
        color: '#333', // Color del texto
    },
});

export default DesarrolloWeb;
