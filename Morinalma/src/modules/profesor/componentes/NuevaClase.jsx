import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const NuevaClase = () => {
    return(
        <div>
            <div style={Styles.materia}>
            <h3> Curso - Materia</h3>
            </div>

            <div style={Styles.container}> 
                <div><h3 style={Styles.subrrayar}>Nueva Clase</h3></div>

                <input type="date" value={Fecha} placeholder="Fecha"/>

                <label for="unidad">Unidad</label>
                <select name="unidad" id="unidad">
                <option>Elija una unidad</option>
                <option value="u1">Unidad 1</option>
                <option value="u2">Unidad 2</option>
                <option value="u3">Unidad 3</option>
                <option value="u4">Unidad 4</option>
                <option value="u5">Unidad 5</option>
                <option value="u6">Unidad 6</option>
                <option value="u7">Unidad 7</option>
                <option value="u8">Unidad 8</option>
                <option value="u9">Unidad 9</option>
                <option value="u10">Unidad 10</option>
                </select>

                <input type="text" value={Temas} placeholder="Temas:"/>
                
                <textarea name="observacion" id="observaciones">Observaciones:</textarea>
                
                <input type="submit" value="Guardar"/>
                <input type="reset" value="Cancelar"/>
            </div>
        </div>
    );
}
export default NuevaClase;
const Styles = StyleSheet.create({
    materia:{
        borderRadius: '20px',
        with: '374px',
        heigth: '56px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
    },
    
    subrrayar:{
        //textDecoration: 'underline'
    },
    container:{
        border: '2px',
        borderColor: 'black',
        width: '352px',
        height: '441px'
    }
})