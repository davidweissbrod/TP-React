import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function UxUi() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../img/ui-ux.png')} 
                style={styles.image}
            />
            <Text style={styles.text}>UX/UI</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        backgroundColor: '#f5f5f5', // Fondo claro
        padding: 20,
    },
    image: {
        width: 200, // Ancho de la imagen
        height: 200, // Alto de la imagen
        marginBottom: 10, // Separación entre la imagen y el texto
        borderRadius: 10, // Esquinas redondeadas para la imagen
    },
    text: {
        fontSize: 20, // Tamaño del texto
        fontWeight: 'bold', // Texto en negrita
        color: '#333', // Color del texto
    },
});

export default UxUi;
; 
