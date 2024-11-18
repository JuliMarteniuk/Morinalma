import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeProfesor = () => {
    const materias = [
        { id: 1, grado: "5°3", materia: "Programación Web" },
        { id: 2, grado: "5°3", materia: "Programación Web" },
        { id: 3, grado: "5°3", materia: "Programación Web" },
        { id: 4, grado: "5°3", materia: "Programación Web" }
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {materias.map((materia) => (
                    <TouchableOpacity key={materia.id} style={styles.card}>
                        <View style={styles.cardContent}>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>
                                    {`${materia.grado} - ${materia.materia}`}
                                </Text>
                                <Text style={styles.subtitle}>
                                    Ver información de la materia
                                </Text>
                            </View>
                            <Text style={styles.arrow}>›</Text>
                        </View>
                        <View style={styles.purpleBorder} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    scrollContainer: {
        paddingVertical: 10,
    },
    card: {
        width: '100%',
        height: 70,
        backgroundColor: '#F8F0FF',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#8B3DFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#000',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    arrow: {
        fontSize: 24,
        color: '#8B3DFF',
        marginLeft: 10,
    },
    purpleBorder: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 8,
        backgroundColor: '#8B3DFF',
    }
});

export default HomeProfesor;
