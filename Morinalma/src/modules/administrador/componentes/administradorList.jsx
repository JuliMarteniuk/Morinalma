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
      {administrador.map((admin, index) => (
        <li key={index}>
          {editIndex === index ? (
            <EditForm
              editAdministrador={editAdministrador}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
              onCancel={() => setEditIndex(null)}
            />
          ) : (
            <AdminDetails
              admin={admin}
              onEdit={() => {
                setEditIndex(index);
                setEditAdministrador(admin);
              }}
              onDelete={() => onDelete(index)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

const EditForm = ({ editAdministrador, handleEditChange, handleEditSubmit, onCancel }) => (
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
    <button type="button" onClick={onCancel}>
      Cancelar
    </button>
  </form>
);

const AdminDetails = ({ admin, onEdit, onDelete }) => (
  <div>
    {admin.nombre} {admin.apellido} - {admin.email} - {admin.telefono} - {admin.dni}
    <button onClick={onEdit}>Editar</button>
    <button onClick={onDelete}>Eliminar</button>
  </div>
);

export default AdministradorList;