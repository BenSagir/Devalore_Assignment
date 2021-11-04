/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function Header({data}) {


    return (
        <View style={styles.main}>
            <Text style={styles.text}>{data.header}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(235,235,235)',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * (5 / 100),
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(30,30,30)',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(0,0,145)',
    },
})