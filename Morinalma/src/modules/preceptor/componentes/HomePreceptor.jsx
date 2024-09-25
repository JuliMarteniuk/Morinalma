import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const HomePreceptor = () => {
    return(

    <div>
        <div style={Styles.curso}>
            <h3> 4°3 - Turno Vespertino</h3>
            <h6> Ver información del curso</h6>
        </div>
        <div style={Styles.curso}>
            <h3> 5°3 - Turno Vespertino</h3>
            <h6> Ver información del curso</h6>
        </div>
        <div style={Styles.curso}>
            <h3> 6°3 - Turno Vespertino</h3>
            <h6> Ver información del curso</h6>
        </div>
    </div>    
    
    );  
}

const Styles = StyleSheet.create({
    curso:{
        borderRadius: '20px',
        with: '374px',
        heigth: '96px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
    },
});


export default HomePreceptor;
