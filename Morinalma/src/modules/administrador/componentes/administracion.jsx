import React from "react";
import { StyleSheet, View, Text } from 'react-native';
// import "@fontsource/poppins";

const Administracion = () => {
<<<<<<< HEAD
    return (
        <View style={styles.administracion}>
            <View style={styles.formulario}>
                <View style={styles.casilleros}>
                    <Curso title="Preceptores" description="Añade, edite o elimine Preceptores" />
                    <Curso title="Profesores" description="Añade, edite o elimine Profesores" />
                    <Curso title="Alumnos" description="Añade, edite o elimine alumnos" />
                    <Curso title="Cursos" description="Añade, edite o elimine cursos" />
                </View>
            </View>
        </View>
    );
=======
    return(
        <div style={Styles.administracion}>
            <div style={Styles.formulario}>
                <div style={Styles.casilleros}>
                    <div style={Styles.curso}>
                        <h3> Preceptores</h3><br />
                        <h6> Añade, edite o elimine Preceptores</h6>
                    </div>
                    <div style={Styles.curso}>
                        <h3> Profesores</h3>
                        <h6>Añade, edite o elimine Profesores</h6>
                    </div>
                    <div style={Styles.curso}>
                        <h3>Alumnos</h3>
                        <h6>Añade, edite o elimine alumnos</h6>
                    </div>
                    <div style={Styles.curso}>
                        <h3>Cursos</h3>
                        <h6>Añade, edite o elimine cursos</h6>
                    </div>
                </div>    
            </div>
        </div>
    
    );  
>>>>>>> a9084cfea804fa421dfcd446d5a276d760fd7478
}

const Curso = ({ title, description }) => (
    <View style={styles.curso}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
);

const styles = StyleSheet.create({
    curso: {
        // fontFamily: 'Poppins',
        display: 'flex',
        borderRadius: 20,
        width: 374,
        height: 96,
        backgroundColor: '#f6edfa',
        color: '#000000',
        borderWidth: 2,
        borderColor: '#833D8E',
        // justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
    formulario: {
        // border: '2px solid #833D8E',
        padding: 20,
        margin: 20,
        borderRadius: 15,
        height: 446,
        width: 397,
    },
    administracion: {
        // border: '2px solid #000000',
        padding: 20,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 400,
        borderRadius: 10,
    },
    casilleros: {
        marginLeft: 15,
        marginTop: 40,
    },
});

<<<<<<< HEAD
=======

>>>>>>> a9084cfea804fa421dfcd446d5a276d760fd7478
export default Administracion;
