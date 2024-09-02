import React, { useState } from "react";

const AdministradorList = ({ administrador, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editAdministrador, setEditAdministrador] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAdministrador({ ...editAdministrador, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editAdministrador);
    setEditIndex(null);
  };

  return (
    <ul>
      {administrador.map((administrador, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editAdministrador.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editAdministrador.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="email"
                name="email"
                value={editAdministrador.email}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="telefono"
                value={editAdministrador.telefono}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="dni"
                value={editAdministrador.dni}
                onChange={handleEditChange}
                required
              />
             
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </form>
          ) : (
            <div>
              {administrador.nombre} {administrador.apellido} - {administrador.email} -{" "}
              {administrador.telefono} - {" "} {administrador.dni} 
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditAdministrador(administrador);
                }}
              >
                Editar
              </button>
              <button onClick={() => onDelete(index)}>Eliminar</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AdministradorList;