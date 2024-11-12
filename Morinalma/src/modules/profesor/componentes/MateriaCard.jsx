import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MateriaCard = ({ grado, materia, turno, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.card}>
                <Text style={styles.gradoText}>{grado}</Text>
                <Text style={styles.materiaText}>{materia}</Text>
                <Text style={styles.turnoText}>{turno}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6edfa',
        borderRadius: 20,
        width: 374,
        height: 96,
        padding: 15,
        borderWidth: 2,
        borderColor: '#833D8E',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    gradoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    materiaText: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 5,
    },
    turnoText: {
        fontSize: 14,
        color: '#666666',
    }
});

export default MateriaCard; 