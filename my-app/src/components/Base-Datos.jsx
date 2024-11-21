import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function BD() {
    return (
        <View style={styles.container}>
            <Image source={require('../img/bd')} style={styles.image} />
            <Text style={styles.text}>Manejo de bases de datos SQL Server</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: 200,  // Ajusta el tamaño de la imagen según sea necesario
        height: 200, // Ajusta el tamaño de la imagen según sea necesario
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default BD;
