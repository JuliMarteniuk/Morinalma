import React, { useState } from "react";

const AdministradorAdd = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      dni: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {["nombre", "apellido", "email", "telefono", "dni"].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Agregar Administrador</button>
    </form>
  );
};

export default AdministradorAdd;