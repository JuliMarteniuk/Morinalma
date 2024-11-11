import React, { useState } from "react";
import { StyleSheet } from 'react-native';


const PreceptorAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //esto agrego
  const [dni, setDni] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPreceptor = { nombre, apellido, email, telefono, dni };
    onAdd(nuevoPreceptor);
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDni(""); //agregue
  };

  return (
    <form onSubmit={handleSubmit} style={styles.preceptor}>
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
            <button type="submit" style={styles.casilla6}>Agregar Preceptor</button>
          </div>
      </div>
    </form>
  );
};
const styles = StyleSheet.create({
  preceptor: {
    /*border: '2px solid #000000', /* Borde de 2 píxeles de grosor, color negro sólido */
    padding: '20px', /* Espacio interno dentro del borde */
    margin: '20px', /* Espacio exterior alrededor del formulario */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:'450px', 
    borderRadius: 10,


  },
  formulario: {
    border: '2px solid #833D8E',
    padding: '20px', /* Espacio interno dentro del borde */
    margin: '20px', /* Espacio exterior alrededor del formulario */
    borderRadius: 15,
    height: '446px',
    width: '350px',
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
});
export default PreceptorAdd;