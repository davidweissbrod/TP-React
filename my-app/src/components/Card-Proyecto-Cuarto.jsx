import React from 'react';
import { Text, StyleSheet, Card } from 'react-native';

function CardProyectoCuarto() {
    return (
        <Card style={styles.card}>
            <Card.Title/>
            <Card.Content>
                <Text style={styles.title}>LyriX</Text>
                <Text style={styles.text}>
                    Lyrix fue un proyecto hecho en la materia de programación durante el año 2023. Nosotros dos y un compañero más 
                    hicimos este proyecto el cual nos divirtió y nos generó complicaciones a lo largo del trayecto las cuales 
                    pudimos resolver gracias a nuestro trabajo en equipo. Lyrix es una página web en donde puedes escuchar canciones
                    de tus artistas favoritos y también una selección de ciertas canciones del mismo género en playlists. 
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

export default CardProyectoCuarto;
