import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "@fontsource/poppins";
import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';

export default function App() {
  return (
    /*<View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.container2}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <Text style={styles.subTitulo}>O si no tiene cuenta <Text style={styles.subTitulo2}>REGISTRESE</Text></Text>
    </View>
    </View>*/
    <ProfesorAdd></ProfesorAdd>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    backgroundColor: '#fff',
    borderBlockColor: '#833dbe',
    borderWidth: '1.5px',
    borderRadius: '12px',
    width: '350px',
    height:'371px'
  },
  titulo:{
    fontFamily: 'Poppins',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  subTitulo:{
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  subTitulo2:{
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight:'medium',
    color:'#833dbe'
  },
});
