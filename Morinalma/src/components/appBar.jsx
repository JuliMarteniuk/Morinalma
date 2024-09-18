import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants'; 

const AppBar = () => {
    return (
        <View style={styles.AppBar}> 
        <Text style={styles.Text} >Morinalma</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AppBar: {
        backgroundColor: '#0000',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    Text: {
        color: '#fff ',
    }
})

export default AppBar