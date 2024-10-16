import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const Asistencia =({ onAdd }) => {
    //Tengo que averiguar como unir el true o false de la asistencia con el alumno 
    const [presente, setPresente] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const Asistencia = { presente };
        onAdd(Asistencia);
        setPresente("");
      };

    return(
        <form onSubmit={handleSubmit} style={styles.asistencia} >
            <div style={styles.formulario}>
                <div style={styles.planilla}>
                    <h2><u>Planilla de asistencia</u></h2>
                </div>
                <div >
                    <select name="fecha" id="fecha" style={styles.fecha}>
                        <option>Fecha</option>//Preguntar como linkear la fecha automaticamente
                    </select>
                </div>
                <div style={styles.container}>
                    <div style={styles.x}>
                        <h3><u>Asistencia</u></h3>
                    </div>
                    <div style={styles.alumno1}>
                        <label>Persona 1</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente} 
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 2</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 3</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 4</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 5</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 6</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 7</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 8</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 9</label>
                        <input type="checkbox" style={styles.checkbox}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 10</label>
                        <input type="checkbox" style={styles.checkbox2}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 11</label>
                        <input type="checkbox" style={styles.checkbox2}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                    <div>
                        <label>Persona 12</label>
                        <input type="checkbox" style={styles.checkbox2}
                        value={presente}
                        onChange={(e) => setPresente(e.target.value)}/>
                    </div>
                
                </div>
                <div style={styles.caja}>
                    <button type="submit" style={styles.casilla6}>Cancelar</button>
                    <button type="submit" style={styles.casilla7}>Guardar</button>
                </div>
                
            </div>
        </form>
    );
}

const styles =StyleSheet.create({
    asistencia: {
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
        //marginTop: '100px',
      },
      planilla:{
        marginTop: '-20px',
        marginLeft: '80px',
        color: '#833D8E',
      },
      fecha:{
        //fontFamily: 'Poppins',
        display:'flex',
        borderRadius: '20px',
        with: '374px',
        heigth: '96px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
        //justifyContent:'center',
        alignItems:'center',
        margin:'20px',
    },
    x:{
         /*border: '2px solid #000000', /* Borde de 2 píxeles de grosor, color negro sólido */
         padding: '20px', /* Espacio interno dentro del borde */
         margin: '20px', /* Espacio exterior alrededor del formulario */
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         marginLeft:'30px', 
         borderRadius: 10,
         color: '#833D8E',
         marginTop: '-50px',
    },
    container:{
        border: '2px solid #833D8E',
        padding: '20px', /* Espacio interno dentro del borde */
        margin: '20px', /* Espacio exterior alrededor del formulario */
        borderRadius: 15,
        height: '246px',
        width: '270px',
    },
    alumno1:{
        marginTop: '-50px',
    },
    checkbox:{
        marginLeft: '182px',
    },
    checkbox2:{
        marginLeft: '175px',
    },
    casilla6: {
        borderRadius: 10,
        /*height: 25,
        width: 289,*/
        marginBottom: '25px',
        marginLeft: '60px',
        //backgroundColor: '#833D8E',
        height: '40px',
        width: '130px',
    },
    casilla7: {
        borderRadius: 10,
        /*height: 25,
        width: 289,*/
        marginBottom: '25px',
        marginLeft: '10px',
        backgroundColor: '#833D8E',
        height: '40px',
        width: '130px',
        border: '#833D8E'
    },
    
})

export default Asistencia;