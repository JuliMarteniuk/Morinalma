import React, { useState } from "react";

const AdministradorAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //esto agrego
  const [dni, setDni] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAdministrador = { nombre, apellido, email, telefono, dni };
    onAdd(nuevoAdministrador);
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDni(""); //agregue
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label>DNI:</label>
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Administrador</button>
    </form>
  );
};

export default AdministradorAdd;