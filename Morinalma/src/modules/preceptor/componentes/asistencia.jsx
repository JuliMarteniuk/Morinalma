import React, { useState } from "react";
import { StyleSheet } from 'react-native';

const Asistencia = ({ onAdd }) => {
  const [asistencia, setAsistencia] = useState({});

  const handleCheckboxChange = (persona) => {
    setAsistencia((prevState) => ({
      ...prevState,
      [persona]: !prevState[persona],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(asistencia);
    setAsistencia({});
  };

  return (
    <form onSubmit={handleSubmit} style={styles.asistencia}>
      <div style={styles.formulario}>
        <div style={styles.planilla}>
          <h2><u>Planilla de asistencia</u></h2>
        </div>
        <div>
          <select name="fecha" id="fecha" style={styles.fecha}>
            <option>Fecha</option>
            {/* Preguntar como linkear la fecha automaticamente */}
          </select>
        </div>
        <div style={styles.container}>
          <div style={styles.x}>
            <h3><u>Asistencia</u></h3>
          </div>
          {Array.from({ length: 12 }, (_, i) => (
            <PersonaCheckbox
              key={i}
              persona={`Persona ${i + 1}`}
              checked={!!asistencia[`Persona ${i + 1}`]}
              onChange={() => handleCheckboxChange(`Persona ${i + 1}`)}
            />
          ))}
        </div>
        <div style={styles.caja}>
          <button type="button" style={styles.casilla6} onClick={() => setAsistencia({})}>Cancelar</button>
          <button type="submit" style={styles.casilla7}>Guardar</button>
        </div>
      </div>
    </form>
  );
};

const PersonaCheckbox = ({ persona, checked, onChange }) => (
  <div>
    <label>{persona}</label>
    <input
      type="checkbox"
      style={styles.checkbox}
      checked={checked}
      onChange={onChange}
    />
  </div>
);

const styles = StyleSheet.create({
  asistencia: {
    padding: '20px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '450px',
    borderRadius: 10,
  },
  formulario: {
    border: '2px solid #833D8E',
    padding: '20px',
    margin: '20px',
    borderRadius: 15,
    height: '446px',
    width: '350px',
  },
  planilla: {
    marginTop: '-20px',
    marginLeft: '80px',
    color: '#833D8E',
  },
  fecha: {
    display: 'flex',
    borderRadius: '20px',
    width: '374px',
    height: '96px',
    backgroundColor: '#f6edfa',
    color: '#000000',
    border: '2px solid #833D8E',
    alignItems: 'center',
    margin: '20px',
  },
  x: {
    padding: '20px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30px',
    borderRadius: 10,
    color: '#833D8E',
    marginTop: '-50px',
  },
  container: {
    border: '2px solid #833D8E',
    padding: '20px',
    margin: '20px',
    borderRadius: 15,
    height: '246px',
    width: '270px',
  },
  checkbox: {
    marginLeft: '182px',
  },
  casilla6: {
    borderRadius: 10,
    marginBottom: '25px',
    marginLeft: '60px',
    height: '40px',
    width: '130px',
  },
  casilla7: {
    borderRadius: 10,
    marginBottom: '25px',
    marginLeft: '10px',
    backgroundColor: '#833D8E',
    height: '40px',
    width: '130px',
    border: '#833D8E',
  },
});

export default Asistencia;