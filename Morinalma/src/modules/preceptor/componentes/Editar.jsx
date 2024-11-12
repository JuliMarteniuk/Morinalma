import React, { useState } from "react";
import { StyleSheet } from 'react-native';

const Editar = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    turno: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      nombre: "",
      apellido: "",
      curso: "",
      turno: ""
    });
  };

  const handleCancel = () => {
    setFormData({
      nombre: "",
      apellido: "",
      curso: "",
      turno: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.preceptor}>
      <div style={styles.formulario}>
        <div style={styles.casilleros}>
          <InputField
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <InputField
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
          <SelectField
            label="Curso"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            options={getCursosOptions()}
          />
          <SelectField
            label="Turno"
            name="turno"
            value={formData.turno}
            onChange={handleChange}
            options={getTurnosOptions()}
          />
          <div style={styles.caja}>
            <button type="button" style={styles.casilla} onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" style={styles.casilla}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const InputField = ({ name, value, onChange, placeholder }) => (
  <div>
    <input
      style={styles.casilla}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Elija el {label.toLowerCase()}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

const getCursosOptions = () => {
  const años = [1, 2, 3, 4, 5, 6];
  const divisiones = años.map(año => 
    año <= 3 ? 6 : año <= 4 ? 5 : año <= 5 ? 4 : 4
  );
  
  return años.flatMap((año, i) => 
    Array.from({ length: divisiones[i] }, (_, j) => ({
      value: `u${año}${j + 1}`,
      label: `${año}°${j + 1}`
    }))
  );
};

const getTurnosOptions = () => [
  { value: 't1', label: 'Turno Mañana' },
  { value: 't2', label: 'Turno Tarde' },
  { value: 't3', label: 'Turno Vespertino' }
];

const styles = StyleSheet.create({
  preceptor: {
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
  casilleros: {
    marginLeft: '25px',
    marginTop: '10px',
  },
  casilla: {
    borderRadius: 10,
    marginBottom: '25px',
    height: '30px',
    width: '289px',
  }
});

export default Editar;