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
        <form onSubmit={handleSubmit}>
            <div>
                <div><u>Planilla de asistencia</u></div>
                <div><select name="fecha" id="fecha">
                    <option>Fecha</option>
                    <option value="">13/09</option> //Preguntar como linkear la fecha automaticamente
                </select></div>
                <div>
                    <p>Asistencia</p>
                    <label>Persona 1</label>
                    <input type="checkbox" 
                    value={presente}
                    onChange={(e) => setPresente(e.target.value)}/>
                </div>
            </div>
        </form>
    );
}