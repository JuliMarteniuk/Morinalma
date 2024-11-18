import React, { useState } from "react";
import {StyleSheet, View} from 'react-native'; //esto se importa para poder usar css

const ProfesorAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //esto agrego
  const [dni, setDni] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProfesor = { nombre, apellido, email, telefono, dni };
    onAdd(nuevoProfesor);
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDni(""); //agregue
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

      <form onSubmit={handleSubmit} style={styles.profesor}>
        <div style={styles.formulario}>
            <div style={styles.registro}>
              <h1>Registrarse</h1>
            </div>
            <div style={styles.p}>
              <p>o si tiene una cuenta <a href="boton" style={styles.boton}>iniciar sesiòn</a></p>
            </div>
            <div style={styles.casilleros}>
              <div>
                <input style={styles.casilla}
                  type="text" 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input style={styles.casilla2}
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  placeholder="Apellido"
                />
              </div>
              <div>
                <input style={styles.casilla3}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <input style={styles.casilla4}
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  placeholder="Telefono"
                />
              </div>
              <div> 
                <input style={styles.casilla5}
                  type="text"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  required
                  placeholder="DNI"
                />
              </div>
              <button type="submit" style={styles.casilla6}>Agregar Profesor</button>
            </div>
        </div>
      </form>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profesor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  formulario: {
    border: '2px solid #833D8E',
    padding: '20px',
    margin: '20px',
    borderRadius: 15,
    height: '446px',
    width: '350px',
    backgroundColor: 'white',
  },
  casilleros: {
    marginLeft: '25px',
    marginTop: '10px',
  },
  casilla: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  },
  casilla2: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  },
  casilla3: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  },
  casilla4: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  },
  casilla5: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  },
  casilla6: {
    borderRadius: 10,
    /*height: 25,
    width: 289,*/
    marginBottom: '25px',
    marginLeft: '145px',
    backgroundColor: '#833D8E',
    height: '40px',
    width: '150px',
  },
  registro:{
    marginTop: '-20px',
    marginLeft: '90px',
  },
  p:{
    marginBottom: '25px',
    marginLeft: '60px',
    color: 'grey',
  },
  boton:{
    color: '#833D8E',
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
export default ProfesorAdd;