import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants'; 


const styles = StyleSheet.create({
    AppBar: {
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    Text: {
        color: 'blue ',
    }
})

const AppBar = () => {
    return (
        <View style={styles.appBar}> // poreque no me toma el view
        <Text style={styles.Text} >Morinalma</Text>
        </View>
    )
}

export default AppBar