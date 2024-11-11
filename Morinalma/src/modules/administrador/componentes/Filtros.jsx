import react from "react";
import { StyleSheet } from "react-native";

const Filtros = () => {

    return(
        <div style={Styles.container}>
            <div>
                <h2>Filtros</h2>
            </div>
            <div>
                <h4>Turno Mañana</h4>
            </div>
            <div>
                <h4>Turno Tarde</h4>
            </div>
            <div>
                <h4>Turno Vesperitno</h4>
            </div>
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