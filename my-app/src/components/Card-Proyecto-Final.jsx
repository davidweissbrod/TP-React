import React from 'react';
import { Text, StyleSheet, Card } from 'react-native';

function CardProyectoFinal() {
    return (
        <Card style={styles.card}>
            <Card.Title/>
            <Card.Content>
                <Text style={styles.title}>Med-House</Text>
                <Text style={styles.text}>
                    Med-House es el proyecto de la materia de Proyectos de produccion en 2024 y nosotros dos junto a 3 compañeros somos quienes
                    creamos y estamos a cargo de Med-House. Nuestro proyecto consta de ser un banco de medicamentos, donde personas que 
                    tienen medicamentos los cuales no van a usar más o se van a vencer pronto pueden donarlos y esos medicamentos
                    los cuales puede que haya más personas que lo necesiten pueden pedirlo a través de nuestra app. Todos los 
                    medicamentos están almacenados en una casa segura donde farmacéuticos se encargan de dar los medicamentos.
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

export default CardProyectoFinal;
