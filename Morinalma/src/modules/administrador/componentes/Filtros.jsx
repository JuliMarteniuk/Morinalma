import react from "react";
import { StyleSheet } from "react-native";

const Filtros = () => {

    return(
        <div style={Styles.container}>
            <div style={Styles.container2}><u style={Styles.titulo}>Filtros</u></div>
            <div>Turnos</div>
            <div>Boton Aplicar</div>
        </div>
    );
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: '#EEDAF4',
        marginLeft: '43%',
        marginTop: '20%',
        width: '308px',
        height: '374px'
    },
    container2:{
        alignItems: 'center'
    },
    titulo: {
        fontWeight: 'semibold',
        fontSize: '20'
    }
})

export default Filtros; 