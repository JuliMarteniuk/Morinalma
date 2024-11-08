import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Router } from "react-router-native";

const MateriaCard = ({ grado, materia }) => {
    return (
        <View style={Styles.materia}>
            <Text style={Styles.titulo}>{grado} - {materia}</Text>
            <Text style={Styles.subtitulo}>Ver información del curso</Text>
            <Pressable 
                onPress={() => Router.push("./src/modules/profesor/componentes/VistaCursoProfesor.jsx")}
            >
                <Text style={Styles.flecha}>➡️</Text>
            </Pressable>
        </View>
    );
};

const Styles = StyleSheet.create({
    materia: {
        display: 'flex',
        borderRadius: 20,
        width: 374,
        height: 96,
        backgroundColor: '#f6edfa',
        borderWidth: 2,
        borderColor: '#833D8E',
        alignItems: 'center',
        margin: 20,
        marginBottom: 40,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    subtitulo: {
        fontSize: 14,
        color: '#000000',
    },
    flecha: {
        fontSize: 20,
    }
});

export default MateriaCard; 