import Stack from "expo"
const RootLayout = () => {
    return <Stack>
        <Stack.Screen name="InicioSesion" component={InicioSesion.jsx} onPress="false"></Stack.Screen>
        if (onPress==true) {
            <Stack.Screen name= "HomeProfesor" src="../src/modules/profesor/componentes/HomeProfesor.jsx"></Stack.Screen>
        }
    </Stack>
};
export default RootLayout