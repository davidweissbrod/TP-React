import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Ian() {
    return (
        <View style={styles.container}>
            <Image 
                source={'../img/ian.png'}
                style={styles.image}
                alt="foto de Ian"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Soy estudiante de la secundaria ORT desde 2019, y desde 2022 estoy en la orientacion de Informatica.
                    Me apasiona mucho la politica exterior y los debates por eso me gustaria estudiar algo relacionado a eso.
                    Me gusta mucho trabajar en grupos y mas si es con amigos, ya que suele ser mas divertido y llevadero.
                    En cuanto a mis habilidades soy muy habil para debatir, hablar frente a un publico y me gusta diseñar.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        padding: 20,
        backgroundColor: '#f9f9f9', 
    },
    image: {
        width: 150, 
        height: 150, 
        borderRadius: 75, 
        marginBottom: 20, 
    },
    textContainer: {
        backgroundColor: '#fff', 
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        color: '#333', 
    },
});

export default Ian;
