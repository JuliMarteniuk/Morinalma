import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from 'react-native';

const InicioSesion = ({ onAdd }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoInicioSesion = { usuario, contraseña };
    onAdd(nuevoInicioSesion);
    setUsuario("");
    setContraseña("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.decorativeCircles}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
        <View style={[styles.circle, styles.circle4]} />
        <View style={[styles.circle, styles.circle5]} />
        <View style={[styles.circle, styles.circle6]} />
        <View style={[styles.circle, styles.circle7]} />
        <View style={[styles.circle, styles.circle8]} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Inicio Sesión</Text>
        </View>
        
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            o si no tiene una cuenta{' '}
            <Text style={styles.registerLink}>Registrarse</Text>
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuario/DNI"
            value={usuario}
            onChangeText={setUsuario}
            required
          />

          <TextInput
            style={styles.input}
            placeholder="contraseña"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry
            required
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: 350,
    height: 416,
    borderWidth: 2,
    borderColor: '#833D8E',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  registerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  registerText: {
    color: 'grey',
  },
  registerLink: {
    color: '#833D8E',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  input: {
    height: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#833D8E',
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  decorativeCircles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#833D8E',
    opacity: 0.8,
  },
  circle1: {
    width: 180,
    height: 180,
    borderRadius: 90,
    top: -50,
    right: -40,
  },
  circle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    bottom: -80,
    left: -60,
  },
  circle3: {
    width: 90,
    height: 90,
    borderRadius: 45,
    top: 100,
    right: 100,
  },
  circle4: {
    width: 40,
    height: 40,
    borderRadius: 20,
    top: 135,
    right: 50,
  },
  circle5: {
    width: 50,
    height: 50,
    borderRadius: 30,
    bottom: 125,
    left: 60,
  },
  circle6: {
    width: 35,
    height: 35,
    borderRadius: 20,
    bottom: 95,
    left: 120,
  },
  circle7: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    top: 190,
    right: 80,
  },
  circle8: {
    width: 20,
    height: 20,
    borderRadius: 10,
    bottom: 150,
    left: 125,
  },
});

export default InicioSesion;