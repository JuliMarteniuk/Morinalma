import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const HomePreceptor = () => {
  const cursos = [
    {
      grado: "4°3",
      turno: "Turno Vespertino"
    },
    {
      grado: "5°3",
      turno: "Turno Vespertino"
    },
    {
      grado: "6°3",
      turno: "Turno Vespertino"
    }
  ];

  return (
    <View style={styles.homePreceptor}>
      <View style={styles.formulario}>
        <View style={styles.casilleros}>
          {cursos.map((curso, index) => (
            <CursoCard
              key={index}
              grado={curso.grado}
              turno={curso.turno}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const CursoCard = ({ grado, turno }) => (
  <View style={styles.curso}>
    <Text style={styles.cursoTitle}>{grado} - {turno}</Text>
    <Text style={styles.cursoSubtitle}>Ver información del curso</Text>
  </View>
);

const styles = StyleSheet.create({
  curso: {
    display: 'flex',
    borderRadius: 20,
    width: 374,
    height: 96,
    backgroundColor: '#f6edfa',
    color: '#000000',
    borderWidth: 2,
    borderColor: '#833D8E',
    alignItems: 'center',
    margin: 20,
    padding: 10,
  },
  cursoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cursoSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  formulario: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
    height: 446,
    width: 397,
  },
  homePreceptor: {
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

export default HomePreceptor;
