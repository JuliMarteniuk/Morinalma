import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VistaCursoPreceptor = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={() => navigation?.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerButton}>
                    <Ionicons name="menu" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                {/* Tarjeta del curso */}
                <View style={styles.card}>
                    <View style={styles.purpleBorder} />
                    <Text style={styles.cardTitle}>1°3 - Turno Mañana</Text>
                </View>

                {/* Tarjeta de alumnos */}
                <TouchableOpacity style={styles.card}>
                    <View style={styles.purpleBorder} />
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.cardTitle}>Alumnos</Text>
                            <Text style={styles.cardSubtitle}>
                                Añada, edite y elimine alumnos de este curso
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#833D8E" />
                    </View>
                </TouchableOpacity>

                {/* Sección de Asistencia */}
                <Text style={styles.asistenciaTitle}>Asistencia</Text>

                <View style={styles.diasContainer}>
                    {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia, index) => (
                        <View key={index} style={styles.diaRow}>
                            <View style={styles.diaContent}>
                                <View style={styles.bullet} />
                                <Text style={styles.diaText}>{dia}</Text>
                            </View>
                            <View style={styles.separator} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    headerButton: {
        padding: 8,
    },
    card: {
        backgroundColor: '#f6edfa',
        borderRadius: 12,
        marginBottom: 16,
        minHeight: 60,
        position: 'relative',
        overflow: 'hidden',
    },
    purpleBorder: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 8,
        backgroundColor: '#833D8E',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingLeft: 24,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginLeft: 24,
        marginVertical: 16,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginLeft: 24,
    },
    asistenciaTitle: {
        fontSize: 18,
        color: '#833D8E',
        fontWeight: '500',
        marginVertical: 16,
    },
    diasContainer: {
        marginTop: 8,
    },
    diaRow: {
        marginBottom: 8,
    },
    diaContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#000',
        marginRight: 12,
    },
    diaText: {
        fontSize: 16,
        color: '#000',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginTop: 8,
    },
});

export default VistaCursoPreceptor;





