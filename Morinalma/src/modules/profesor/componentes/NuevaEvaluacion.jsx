import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NuevaEvaluacion = ({ onAdd, onBack }) => {
    const [fecha, setFecha] = useState('');
    const [temas, setTemas] = useState('');

    return (
        <View style={styles.mainContainer}>
            {/* Barra superior con iconos */}
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#833D8E" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="menu" size={24} color="#833D8E" />
                </TouchableOpacity>
            </View>

            {/* Tarjeta del título */}
            <View style={styles.headerContainer}>
                <View style={styles.purpleCard}>
                    <Text style={styles.headerText}>5°3 - Programación Web</Text>
                </View>
            </View>

            {/* Formulario */}
            <View style={styles.formCard}>
                <Text style={styles.title}>Nueva Evaluación</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Temas:"
                    value={temas}
                    onChangeText={setTemas}
                />

                <TouchableOpacity style={styles.dropdown}>
                    <Text style={styles.dropdownText}>Fecha</Text>
                    <Icon name="arrow-drop-down" size={24} color="#000" />
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        paddingHorizontal: 20,
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 40,
    },
    purpleCard: {
        backgroundColor: '#F8E8FF',
        borderRadius: 10,
        padding: 16,
        paddingLeft: 20,
        width: '100%',
        borderLeftWidth: 8,
        borderLeftColor: '#833D8E',
    },
    headerText: {
        fontSize: 16,
        color: '#000000',
    },
    formCard: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#833D8E',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#833D8E',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    dropdownText: {
        fontSize: 16,
        color: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cancelButton: {
        backgroundColor: '#833D8E',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: '#833D8E',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 10,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default NuevaEvaluacion;
