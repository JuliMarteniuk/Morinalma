import React, { useState } from "react";

const Editar = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPreceptor = { nombre, apellido };
    onAdd(nuevoPreceptor);
    setNombre("");
    setApellido("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.preceptor}>
      <div style={styles.formulario}>
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
                    <label for="unidad">Curso</label>
                    <select name="Curso" id="Curso">
                        <option>Elija el curso</option>
                        <option value="u1">1°1</option>
                        <option value="u2">1°2</option>
                        <option value="u3">1°3</option>
                        <option value="u4">1°4</option>
                        <option value="u5">1°5</option>
                        <option value="u6">1°6</option>
                        <option value="u7">1°7</option>
                        <option value="u8">2°1</option>
                        <option value="u9">2°2</option>
                        <option value="u10">2°3</option>
                        <option value="u11">2°4</option>
                        <option value="u12">2°5</option>
                        <option value="u13">2°6</option>
                        <option value="u14">3°1</option>
                        <option value="u15">3°2</option>
                        <option value="u16">3°3</option>
                        <option value="u17">3°4</option>
                        <option value="u18">3°5</option>
                        <option value="u19">3°6</option>
                        <option value="u20">4°1</option>
                        <option value="u21">4°2</option>
                        <option value="u22">4°3</option>
                        <option value="u23">4°4</option>
                        <option value="u24">4°5</option>
                        <option value="u25">5°1</option>
                        <option value="u26">5°2</option>
                        <option value="u27">5°3</option>
                        <option value="u28">5°4</option>
                        <option value="u29">6°1</option>
                        <option value="u30">6°2</option>
                        <option value="u31">6°3</option>
                        <option value="u32">6°4</option>
                    </select>
                </div>
                <div>
                    <label for="unidad">Turno</label>
                    <select name="Turno" id="Turno">
                        <option>Elija el turno</option>
                        <option value="t1">Turno Mañana</option>
                        <option value="t2">Turno Tarde</option>
                        <option value="t3">Turno Vespertino</option>
                    </select>
                </div>
                <div style={styles.caja}>
                    <button type="submit" style={styles.casilla6}>Cancelar</button>
                    <button type="submit" style={styles.casilla7}>Guardar</button>
                </div>
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
});
export default Editar;