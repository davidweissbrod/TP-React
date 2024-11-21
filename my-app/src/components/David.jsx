import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function David() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/david.png')} // Asegúrate de que la ruta y extensión sean correctas
                style={styles.image}
                alt="foto de David"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Soy un estudiante de la Escuela ORT desde 2020, cuando entré a la institución en
                    primer año. Elegí la especialización de informática, ya que me apasiona todo lo que
                    tenga que ver con la tecnología. Participo muy bien en proyectos grupales y soy capaz
                    de tomar una posición de líder en estos cuando es necesario. Siempre trabajo con mucho entusiasmo
                    y busco lo mejor para el proyecto.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20, // Margen externo
        alignItems: 'center', // Centrar contenido horizontalmente
    },
    image: {
        width: 150, // Ancho de la imagen
        height: 150, // Alto de la imagen
        borderRadius: 75, // Imagen redondeada
        marginBottom: 15, // Espacio debajo de la imagen
    },
    textContainer: {
        paddingHorizontal: 20, // Espaciado interno horizontal
    },
    text: {
        fontSize: 16, // Tamaño del texto
        lineHeight: 22, // Espaciado entre líneas
        color: '#333', // Color del texto
        textAlign: 'center', // Centrar texto
    },
});

export default David;
