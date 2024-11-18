import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuDesplegable = ({ onLogout }) => {
    const materias = [
        { id: 1, nombre: "Programación Web", curso: "5°3" },
        { id: 2, nombre: "Computacion Graf.", curso: "5°3" },
        { id: 3, nombre: "Testing", curso: "5°3" },
        { id: 4, nombre: "Redes", curso: "5°3" },
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
                        <View style={styles.logoutIcon}>
                            <Text style={styles.iconText}>➜</Text>
                        </View>
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
        <Text style={styles.arrowIcon}>➜</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [{ translateX: -200 }, { translateY: -250 }],
        width: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        padding: 20,
    },
    materiasContainer: {
        gap: 10,
    },
    materiaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8E8FF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 8,
    },
    materiaText: {
        color: '#000000',
        fontSize: 16,
    },
    arrowIcon: {
        color: '#833D8E',
        fontSize: 18,
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C88ED6',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    logoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    logoutIcon: {
        backgroundColor: '#833D8E',
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 18,
    }
});

export default MenuDesplegable;