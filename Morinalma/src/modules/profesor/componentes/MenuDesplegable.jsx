import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuDesplegable = ({ onLogout }) => {
    const materias = [
        { id: 1, nombre: "Computacion Grafica", curso: "6°3" },
        { id: 2, nombre: "Sistema Operativo", curso: "6°3" },
        { id: 3, nombre: "Tecnologia de Redes", curso: "6°3" },
        { id: 4, nombre: "Ingles Tecnico", curso: "6°3" },
        { id: 5, nombre: "Organizacion y Arquitectura", curso: "6°3" },
        { id: 6, nombre: "Programacion Web Dinamica", curso: "6°3" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.materiasContainer}>
                    {materias.map((materia) => (
                        <MateriaItem 
                            key={materia.id}
                            curso={materia.curso}
                            nombre={materia.nombre}
                        />
                    ))}
                    <TouchableOpacity 
                        style={styles.logoutButton}
                        onPress={onLogout}
                    >
                        <Text style={styles.logoutText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>    
        </View>
    );
};

const MateriaItem = ({ curso, nombre }) => (
    <TouchableOpacity style={styles.materiaItem}>
        <Text style={styles.materiaText}>
            {curso} - {nombre}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 400,
        borderRadius: 10,
    },
    content: {
        width: 397,
        height: 446,
        padding: 20,
        margin: 20,
        borderRadius: 15,
    },
    materiasContainer: {
        marginLeft: 15,
        marginTop: -80,
    },
    materiaItem: {
        display: 'flex',
        borderRadius: 20,
        width: 174,
        height: 26,
        backgroundColor: '#f6edfa',
        borderWidth: 2,
        borderColor: '#833D8E',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginBottom: 10,
        padding: 5,
    },
    materiaText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
    },
    logoutButton: {
        borderRadius: 20,
        backgroundColor: '#833D8E',
        height: 56,
        width: 334,
        marginLeft: 10,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default MenuDesplegable;