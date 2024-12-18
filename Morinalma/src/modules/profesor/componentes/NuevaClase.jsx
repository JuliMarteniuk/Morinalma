import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NuevaClase = ({ onAdd, onBack }) => {
    const [fecha, setFecha] = useState('');
    const [unidad, setUnidad] = useState('');
    const [temas, setTemas] = useState('');
    const [observaciones, setObservaciones] = useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#833D8E" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="menu" size={24} color="#833D8E" />
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer}>
                <View style={styles.purpleCard}>
                    <Text style={styles.headerText}>5°3 - Programación Web</Text>
                </View>
            </View>

            <View style={styles.formCard}>
                <Text style={styles.title}>Nueva Clase</Text>

                <View style={styles.inputRow}>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>Fecha</Text>
                        <Icon name="arrow-drop-down" size={24} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>Unidad</Text>
                        <Icon name="arrow-drop-down" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Temas:"
                    value={temas}
                    onChangeText={setTemas}
                />

                <TextInput
                    style={styles.textArea}
                    placeholder="Observaciones:"
                    multiline={true}
                    numberOfLines={4}
                    value={observaciones}
                    onChangeText={setObservaciones}
                />

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
    headerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30,
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
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    headerIcon: {
        padding: 8,
    },
    formCard: {
        margin: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center',
        width: '90%',
        maxWidth: 400,
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        color: '#833D8E',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 15,
    },
    dropdown: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    dropdownText: {
        color: '#666666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        padding: 8,
        marginBottom: 15,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        padding: 8,
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#F8E8FF',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#833D8E',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#833D8E',
    },
    saveButtonText: {
        color: '#FFFFFF',
    }
});

export default NuevaClase;
