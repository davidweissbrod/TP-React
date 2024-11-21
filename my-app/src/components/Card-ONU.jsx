import React from 'react';
import { Text, StyleSheet, Card } from 'react-native';

function CardONU() {
    return (
        <Card style={styles.card}>
            <Card.Title title="Taller de ONU" />
            <Card.Content>
                <Text style={styles.title}>ONU</Text>
                <Text style={styles.text}>
                    El modelo ONU es un conjunto de distintas cámaras de ONU, así estaban asamblea general, consejo de seguridad, derechos humanos, etc.
                    En el modelo te dan un cierto país y una cámara en donde cada uno tiene que representar los ideales y opiniones de ese país
                    sobre el tema de la cámara que le toca. Ambos participamos en la cámara de derechos humanos, David representando a Irlanda
                    y Ian representando a Venezuela. También ambos fuimos mencionados de manera escrita y a Ian lo entrevistaron miembros de la ONU.  
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5, // Sombra para darle un efecto elevado en Android
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        color: '#555',
    },
});

export default CardONU;
