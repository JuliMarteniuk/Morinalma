import React from "react";
import { View, StyleSheet } from 'react-native';
import MateriaCard from './MateriaCard';

const HomeProfesor = () => {
    const materias = [
        { id: 1, grado: "5°1", materia: "Programacion Web", turno: "Mañana" },
        { id: 2, grado: "5°2", materia: "Programacion Web", turno: "Tarde" },
        { id: 3, grado: "5°3", materia: "Programacion Web", turno: "Tarde" },
        { id: 4, grado: "5°4", materia: "Programacion Web", turno: "Vespertino" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.materiasGrid}>
                    {materias.map((materia) => (
                        <MateriaCard 
                            key={materia.id}
                            {...materia}
                            onClick={() => handleMateriaClick(materia)}
                        />
                    ))}
                </View>
            </View>    
        </View>
    );  
};

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
        backgroundColor: '#ffffff',
    },
    materiasGrid: {
        marginLeft: 15,
        marginTop: 40,
        gap: 20,
    }
});

export default HomeProfesor;
