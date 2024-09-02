import React, { useState } from "react";

const ProfesorList = ({ precepto, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editPreceptor, setEditProfesor] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProfesor({ ...editProfesor, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editProfesor);
    setEditIndex(null);
  };

  return (
    <ul>
      {profesor.map((profesor, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editProfesor.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editProfesor.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="email"
                name="email"
                value={editProfesor.email}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="telefono"
                value={editProfesor.telefono}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="dni"
                value={editProfesor.dni}
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
              {profesor.nombre} {profesor.apellido} - {profesor.email} -{" "}
              {profesor.telefono} - {" "} {profesor.dni} 
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditProfesor(profesor);
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

export default ProfesorList;