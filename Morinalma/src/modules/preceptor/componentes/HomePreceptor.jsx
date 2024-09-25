import React, { useState } from "react";
import {StyleSheet} from 'react-native';
//import "@fontsource/poppins";

const HomePreceptor = () => {
    return(

    <div style={Styles.container}>
        <div style={Styles.curso}>
            <h3> 4°3 - Turno Vespertino</h3><br />
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
    body: {
        //fontFamily: 'Poppins',
        display: 'flex',
        alignItems: 'center',
      },
    curso:{
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
});


export default HomePreceptor;
