import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from 'react-native';

const CrearCuenta = ({ onAdd }) => {
  const [nombreApellido, setNombreApellido] = useState("");
  const [dni, setDni] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCuenta = { nombreApellido, dni, contraseña };
    onAdd(nuevaCuenta);
    setNombreApellido("");
    setDni("");
    setContraseña("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.decorativeCircles}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
        <View style={[styles.circle, styles.circle4]} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Crear Cuenta</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre y Apellido"
            value={nombreApellido}
            onChangeText={setNombreApellido}
            required
          />

          <TextInput
            style={styles.input}
            placeholder="DNI"
            value={dni}
            onChangeText={setDni}
            required
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry
            required
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Crear Cuenta</Text>
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
    borderWidth: 2,
    borderColor: '#833D8E',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    gap: 20,
    paddingHorizontal: 25,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#833D8E',
    height: 40,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    top: 50,
    right: 80,
  },
  circle4: {
    width: 40,
    height: 40,
    borderRadius: 30,
    bottom: 100,
    left: 80,
  }
});

export default CrearCuenta;
