import React, { useState } from "react";
import {StyleSheet} from 'react-native'; //esto se importa para poder usar css

const AlumnoAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState(""); 
  const [tutor, setTutor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = { nombre, apellido, email, telefono };
    onAdd(nuevoAlumno);
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDni("");
    setTutor("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formulario}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Dni:</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tutor:</label>
        <input
          type="text"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Alumno</button>
    </form>
  );
};

const styles = StyleSheet.create({
  formulario: {
    border: '2px solid #000000', /* Borde de 2 píxeles de grosor, color negro sólido */
    padding: '20px', /* Espacio interno dentro del borde */
    margin: '20px', /* Espacio exterior alrededor del formulario */
  },
 });

export default AlumnoAdd;