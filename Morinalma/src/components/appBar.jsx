import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants'; 


const styles = StyleSheet.create({
    AppBar: {
        backgroundColor: '#0000',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    Text: {
        color: 'blue ',
        fontWeight:'bold',
    }
})

const AppBar = () => {
    return (
        <View style={styles.AppBar}>
        <Text style={styles.Text} >Morinalma</Text>
        </View>
    )
}

export default AppBar