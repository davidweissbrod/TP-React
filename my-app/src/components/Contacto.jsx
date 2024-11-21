import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function FormContacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log('Formulario enviado');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Introduce tu nombre"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Introduce tu email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Mensaje</Text>
            <TextInput
                style={[styles.input, styles.textarea]}
                value={message}
                onChangeText={setMessage}
                placeholder="Introduce tu mensaje"
                multiline
                numberOfLines={4}
            />

            <Button title="Enviar" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    textarea: {
        height: 100,
        textAlignVertical: 'top', // Esto asegura que el texto empieza en la parte superior del área
    },
});

export default FormContacto;
