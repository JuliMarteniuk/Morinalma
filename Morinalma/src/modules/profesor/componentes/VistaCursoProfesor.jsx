import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalado expo/vector-icons

const VistaCursoProfesor = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header con botón de regreso y menú */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuButton}>≡</Text>
                </TouchableOpacity>
            </View>

            {/* Título del curso */}
            <View style={styles.courseHeader}>
                <View style={styles.purpleBorder} />
                <Text style={styles.courseTitle}>5°3 - Programación Web</Text>
            </View>

            {/* Sección de Clases */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Clases</Text>
                <View style={styles.itemsList}>
                    <Text style={styles.item}>• Clase 24/07/24</Text>
                    <Text style={styles.item}>• Clase 24/07/24</Text>
                    <Text style={styles.item}>• Clase 24/07/24</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Sección de Evaluaciones */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Evaluaciones</Text>
                <View style={styles.itemsList}>
                    <Text style={styles.item}>• Evaluación 24/07/24</Text>
                    <Text style={styles.item}>• Evaluación 24/07/24</Text>
                    <Text style={styles.item}>• Evaluación 24/07/24</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#8B3DFF',
    },
    menuButton: {
        fontSize: 24,
        color: '#8B3DFF',
    },
    courseHeader: {
        backgroundColor: '#F8F0FF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 30,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#8B3DFF',
    },
    purpleBorder: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 8,
        backgroundColor: '#8B3DFF',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    courseTitle: {
        fontSize: 18,
        marginLeft: 10,
        color: '#000',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#8B3DFF',
        marginBottom: 15,
    },
    itemsList: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
    item: {
        fontSize: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        color: '#000',
    },
    addButton: {
        position: 'absolute',
        right: 0,
        bottom: -40,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#8B3DFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default VistaCursoProfesor;
