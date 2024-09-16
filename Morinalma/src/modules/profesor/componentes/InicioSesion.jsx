import React, { useState } from "react";
import {StyleSheet} from 'react-native'; //esto se importa para poder usar css

const InicioSesion = ({ onAdd }) => {  //Preguntar que es on Add 
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  //esto agrego

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoInicioSesion = { usuario, contraseña };
    onAdd(nuevoInicioSesion);
    setUsuario("");
    setContraseña(""); //agregue
  };
  return(
    <form onSubmit={handleSubmit} style={styles.InicioSesion}>
        <div style={styles.formulario}>
            <div style={styles.iniciar}>
                <h1>Inicio Sesion</h1>
            </div>
            <div style={styles.casilleros}>
                <div>
                    <input style={styles.casilla}
                    type="text" 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    placeholder="Usuario/DNI"
                    />
                </div>
                <div>
                    <input style={styles.casilla2}
                    type="password" 
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                    placeholder="contraseña"
                    />
                </div>
                <button type="submit" style={styles.casilla3}>Iniciar Sesion</button>
            </div>
        </div>
    </form>
  );
};
const styles = StyleSheet.create({
    InicioSesion: {
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
        height: '416px',
        width: '350px',
    },
    casilleros: {
        marginLeft: '25px',
        marginTop: '80px',
    },
    casilla: {
        borderRadius: 10,
        /*height: 25,
        width: 289,*/
        marginBottom: '40px',
        height: '30px',
        width: '289px',
    },
    casilla2: {
        borderRadius: 10,
        /*height: 25,
        width: 289,*/
        marginBottom: '40px',
        height: '30px',
        width: '289px',
    },
    casilla3: {
        borderRadius: 10,
        /*height: 25,
        width: 289,*/
        marginBottom: '25px',
        marginLeft: '145px',
        backgroundColor: '#833D8E',
        height: '40px',
        width: '150px',
    },
    iniciar:{
        marginTop: '-20px',
        marginLeft: '90px',
    },
});
export default InicioSesion;